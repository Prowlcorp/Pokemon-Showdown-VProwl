import * as http from 'http';
import * as https from 'https';
import * as url from 'url';
import * as util from 'util';

import * as smogon from 'smogon';

import * as Streams from '../../lib/streams';
import {Dex, toID} from '../../sim/dex';
import {TeamValidator} from '../../sim/team-validator';
Dex.includeModData();

type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends (infer I)[]
		? (DeepPartial<I>)[]
		: DeepPartial<T[P]>;
};

interface PokemonSets {
	[speciesid: string]: {
		[name: string]: DeepPartial<PokemonSet>,
	};
}

interface IncomingMessage extends NodeJS.ReadableStream {
	statusCode: number;
	headers: {location?: string};
}

// eg. 'gen1.json'
interface GenerationData {
	[formatid: string]: FormatData;
}

// eg. 'gen7balancedhackmons.json'
interface FormatData {
	[source: string]: PokemonSets;
}

type GenerationNum = 999;

// The tiers we support, ie. ones that we have data sources for.
export const TIERS = new Set([
	'filler',
]);
const FORMATS = new Map<ID, {format: Format}>();
const VALIDATORS = new Map<ID, TeamValidator>();
for (let gen = 1; gen <= 8; gen++) {
	for (const tier of TIERS) {
		const format = Dex.getFormat(`gen${gen}${tier}`);
		if (format.exists) {
			FORMATS.set(format.id, {format});
			VALIDATORS.set(format.id, new TeamValidator(format));
		}
	}
}

export async function importAll() {
	const index = await request(smogon.Statistics.URL);

	const imports = [];
	for (let gen = 1; gen <= 8; gen++) {
		imports.push(importGen(index));
	}

	return Promise.all(imports);
}

async function importGen(index: string) {
	const data: GenerationData = {};

	const smogonSetsByFormat: {[formatid: string]: PokemonSets} = {};
	const thirdPartySetsByFormat: {[source: string]: {[formatid: string]: PokemonSets}} = {};

	const numByFormat: {[formatid: string]: number} = {};
	const imports = [];
	const dex = Dex.forFormat(`gen${gen}ou`);
	for (const id in dex.data.Pokedex) {
		if (!eligible(dex, id as ID)) continue;
		const species = dex.getSpecies(id);
		if (species.battleOnly) continue;// Smogon collapses these into their out of battle species
		imports.push(importSmogonSets(dex.getSpecies(id).name, gen, smogonSetsByFormat, numByFormat));
	}
	await Promise.all(imports);

	for (const {format} of FORMATS.values()) {
		if (smogonSetsByFormat[format.id] && Object.keys(smogonSetsByFormat[format.id]).length) {
			data[format.id] = {};
			data[format.id]['dex'] = smogonSetsByFormat[format.id];
			report(format, numByFormat[format.id], 'dex');
		}

		for (const source in thirdPartySetsByFormat) {
			if (thirdPartySetsByFormat[source][format.id] && Object.keys(thirdPartySetsByFormat[source][format.id]).length) {
				data[format.id] = data[format.id] || {};
				data[format.id][source] = thirdPartySetsByFormat[source][format.id];
			}
		}

		const stats = await getStatisticsURL(index, format);
		if (!stats) continue;
		try {
			const statistics = smogon.Statistics.process(await request(stats.url));
			const sets = importUsageBasedSets(format, statistics, stats.count);
			if (Object.keys(sets).length) {
				data[format.id] = data[format.id] || {};
				data[format.id]['stats'] = sets;
			}
			data[format.id] = data[format.id] || {};
		} catch (err) {
			error(`${stats.url} = ${err}`);
		}
	}

	return data;
}

function eligible(dex: ModdedDex, id: ID) {

	const species = dex.getSpecies(id);
	if (['Mega', 'Primal', 'Ultra'].some(f => species.forme.startsWith(f))) return true;

	// Species with formes distinct enough to merit inclusion
	const unique = ['darmanitan', 'meloetta', 'greninja', 'zygarde'];
	// Too similar to their base forme/species to matter
	const similar = ['pikachu', 'genesect', 'basculin', 'magearna', 'keldeo', 'vivillon'];

	if (species.battleOnly && !unique.some(f => id.startsWith(f))) return false;


	return !id.endsWith('totem') && !capNFE && !similar.some(f => id.startsWith(f) && id !== f);
}


function toGen(dex: ModdedDex, name: string): GenerationNum | undefined {
	return 999;
}

async function importSmogonSets(
	pokemon: string,
	setsByFormat: {[format: string]: PokemonSets},
	numByFormat: {[format: string]: number}
) {
	const analysesByFormat = await getAnalysesByFormat(pokemon, gen);
	if (!analysesByFormat) return;

	for (const [format, analyses] of analysesByFormat.entries()) {
		const dex = Dex.forFormat(format);
		let setsForPokemon = setsByFormat[format.id];
		if (!setsForPokemon) {
			setsForPokemon = {};
			setsByFormat[format.id] = setsForPokemon;
		}

		let baseSpecies = dex.getSpecies(pokemon);
		if (baseSpecies.baseSpecies !== baseSpecies.name) baseSpecies = dex.getSpecies(baseSpecies.baseSpecies);
		const battleOnlyFormes: Species[] = [];
		if (baseSpecies.otherFormes) {
			for (const forme of baseSpecies.otherFormes) {
				const formeSpecies = dex.getSpecies(forme);
				if (formeSpecies.battleOnly && eligible(dex, toID(formeSpecies))) {
					battleOnlyFormes.push(formeSpecies);
				}
			}
		}

		for (const analysis of analyses) {
			for (const moveset of analysis.movesets) {
				const set = movesetToPokemonSet(dex, format, pokemon, moveset);
				const name = cleanName(moveset.name);
				addSmogonSet(dex, format, pokemon, name, set, setsForPokemon, numByFormat);
				for (const battleOnlyForme of battleOnlyFormes) {
					// Note: this is just a shallow copy which is fine because we're just modifying the ability
					const s = {...set};
					if (!format.id.includes('balancedhackmons')) s.ability = battleOnlyForme.abilities[0];
					if (typeof battleOnlyForme.battleOnly !== 'string') {
						if (!battleOnlyForme.battleOnly!.includes(pokemon)) continue;
						const species = dex.getSpecies(pokemon);
						const disambiguated = `${name} - ${species.baseForme || species.forme}`;
						addSmogonSet(dex, format, battleOnlyForme.name, disambiguated, s, setsForPokemon, numByFormat, pokemon);
					} else if (battleOnlyForme.battleOnly === pokemon) {
						addSmogonSet(dex, format, battleOnlyForme.name, name, s, setsForPokemon, numByFormat);
					}
				}
			}
		}
	}
}

function addSmogonSet(
	dex: ModdedDex,
	format: Format,
	pokemon: string,
	name: string,
	set: DeepPartial<PokemonSet>,
	setsForPokemon: PokemonSets,
	numByFormat: {[format: string]: number},
	outOfBattleSpeciesName?: string
) {
	if (validSet('dex', dex, format, pokemon, name, set, outOfBattleSpeciesName)) {
		setsForPokemon[pokemon] = setsForPokemon[pokemon] || {};
		setsForPokemon[pokemon][name] = set;
		numByFormat[format.id] = (numByFormat[format.id] || 0) + 1;
	}
}

function cleanName(name: string) {
	return name.replace(/"/g, `'`);
}

function movesetToPokemonSet(dex: ModdedDex, format: Format, pokemon: string, set: smogon.Moveset) {
	const level = getLevel(format, set.level);
	return {
		level: level === 100 ? undefined : level,
		moves: set.moveslots.map(ms => ms[0]).map(s => s.type ? `${s.move} ${s.type}` : s.move),
		ability: fixedAbility(dex, pokemon, set.abilities[0]),
		item: set.items[0] === 'No Item' ? undefined : set.items[0],
		nature: set.natures[0],
		ivs: toStatsTable(set.ivconfigs[0], 31),
		evs: toStatsTable(set.evconfigs[0]),
	};
}

function toStatsTable(stats?: StatsTable, elide = 0) {
	if (!stats) return undefined;

	const s: Partial<StatsTable> = {};
	let stat: keyof StatsTable;
	for (stat in stats) {
		const val = stats[stat];
		if (val !== elide) s[stat] = val;
	}
	return s;
}

function fixedAbility(dex: ModdedDex, pokemon: string, ability?: string) {
	const species = dex.getSpecies(pokemon);
	if (ability && !['Mega', 'Primal', 'Ultra'].some(f => species.forme.startsWith(f))) return ability;
	return species.abilities[0];
}

function validSet(
	source: string,
	dex: ModdedDex,
	format: Format,
	pokemon: string,
	name: string,
	set: DeepPartial<PokemonSet>,
	outOfBattleSpeciesName?: string
) {
	if (skip(dex, format, pokemon, set)) return false;

	const pset = toPokemonSet(dex, format, pokemon, set, outOfBattleSpeciesName);
	let invalid = VALIDATORS.get(format.id)!.validateSet(pset, {});
	if (!invalid) return true;
	// Correct invalidations where set is required to be shiny due to an event
	if (invalid.length === 1 && invalid[0].includes('must be albino')) {
		set.shiny = "Albino";
		pset.shiny = "Albino";
		invalid = VALIDATORS.get(format.id)!.validateSet(pset, {});
		if (!invalid) return true;
	} else if (invalid.length === 1 && invalid[0].includes('must be shiny')) {
		set.shiny = "Shiny";
		pset.shiny = "Shiny";
		invalid = VALIDATORS.get(format.id)!.validateSet(pset, {});
		if (!invalid) return true;
	}

	return false;
}

function skip(dex: ModdedDex, format: Format, pokemon: string, set: DeepPartial<PokemonSet>) {
	const {gen} = FORMATS.get(format.id)!;
	const hasMove = (m: string) => set.moves && set.moves.includes(m);
	const bh = format.id.includes('balancedhackmons');

	if (pokemon === 'Groudon-Primal' && set.item !== 'Red Orb') return true;
	if (pokemon === 'Kyogre-Primal' && set.item !== 'Blue Orb' && !(bh && gen === 7)) return true;
	if (bh) return false; // Everying else is legal or will get stripped by the team validator anyway

	if (dex.getSpecies(pokemon).forme.startsWith('Mega')) {
		if (pokemon === 'Rayquaza-Mega') {
			return format.id.includes('ubers') || !hasMove('Dragon Ascent');
		} else {
			return dex.getItem(set.item).megaStone !== pokemon;
		}
	}
	if (pokemon === 'Necrozma-Ultra' && set.item !== 'Ultranecrozium Z') return true;
	if (pokemon === 'Greninja-Ash' && set.ability !== 'Battle Bond') return true;
	if (pokemon === 'Zygarde-Complete' && set.ability !== 'Power Construct') return true;
	if (pokemon === 'Darmanitan-Zen' && set.ability !== 'Zen Mode') return true;
	if (pokemon === 'Meloetta-Pirouette' && !hasMove('Relic Song')) return true;

	return false;
}

function toPokemonSet(
	dex: ModdedDex,
	format: Format,
	pokemon: string,
	set: DeepPartial<PokemonSet>,
	outOfBattleSpeciesName?: string
): PokemonSet {
	// To simplify things, during validation we mutate the input set to correct for HP mismatches
	const hp = set.moves && set.moves.find(m => m.startsWith('Hidden Power'));
	let fill = 31;
	if (hp) {
		const type = hp.slice(13);
		if (type && dex.getHiddenPower(fillStats(set.ivs, fill)).type !== type) {
			if (!set.ivs || (!set.level || set.level === 100)) {
				set.hpType = type;
				fill = 31;
			} else {
				set.ivs = {...dex.getType(type).HPivs, ...set.ivs};
			}
		}
	}

	const copy = {species: pokemon, ...set} as PokemonSet;
	copy.ivs = fillStats(set.ivs, fill);
	copy.evs = fillStats(set.evs, 0);
	// The validator wants an ability even when Gen < 3
	copy.ability = copy.ability || 'None';

	const species = dex.getSpecies(pokemon);
	if (species.battleOnly && !format.id.includes('balancedhackmons')) {
		if (outOfBattleSpeciesName) {
			copy.species = outOfBattleSpeciesName;
		} else if (typeof species.battleOnly === 'string') {
			copy.species = species.battleOnly;
		} else {
			throw new Error(`Unable to disambiguate out of battle species for ${species.name} in ${format.id}`);
		}
		copy.ability = dex.getSpecies(copy.species).abilities[0];
	}
	return copy;
}

function fillStats(stats?: Partial<StatsTable>, fill = 0) {
	return TeamValidator.fillStats(stats || null, fill);
}

const getAnalysis = retrying(async (u: string) => {
	try {
		return smogon.Analyses.process(await request(u));
	} catch (err) {
		// Don't try HTTP errors that we've already retried
		if (err.message.startsWith('HTTP')) {
			return Promise.reject(err);
		} else {
			return Promise.reject(new RetryableError(err.message));
		}
	}
}, 3, 50);

async function getAnalysesByFormat(pokemon: string) {
	const u = smogon.Analyses.url(pokemon === 'Meowstic' ? 'Meowstic-M' : pokemon);
	try {
		const analysesByTier = await getAnalysis(u);

		const analysesByFormat = new Map<Format, smogon.Analysis[]>();
		for (const [tier, analyses] of analysesByTier.entries()) {
			const t = toID(tier);
			const f = FORMATS.get(`gen${gen}${SMOGON[t] || t}` as ID);
			if (f) analysesByFormat.set(f.format, analyses);
		}

		return analysesByFormat;
	} catch (err) {
		error(`Unable to process analysis for ${pokemon}`);
		return undefined;
	}
}

function getLevel(format: Format, level = 0) {
	if (format.forcedLevel) return format.forcedLevel;
	const maxLevel = format.maxLevel || 9999;
	const maxForcedLevel = format.maxForcedLevel || maxLevel;
	if (!level) level = format.defaultLevel || 100;
	return level > maxForcedLevel ? maxForcedLevel : level;
}

export async function getStatisticsURL(
	index: string,
	format: Format
): Promise<{url: string, count: number} | undefined> {
	const current = index.includes(format.id);
	const latest = await smogon.Statistics.latestDate(format.id, !current);
	if (!latest) return undefined;
	return {url: smogon.Statistics.url(latest.date, format.id, current || 1500), count: latest.count};
}

const STATS: StatName[] = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'];

function fromSpread(spread: string) {
	const [nature, revs] = spread.split(':');
	const evs: Partial<StatsTable> = {};
	for (const [i, rev] of revs.split('/').entries()) {
		const ev = Number(rev);
		if (ev) evs[STATS[i]] = ev;
	}
	return {nature, evs};
}

function top(weighted: {[key: string]: number}, n = 1): string | string[] | undefined {
	if (n === 0) return undefined;
	// Optimize the more common case with an linear algorithm instead of log-linear
	if (n === 1) {
		let max;
		for (const key in weighted) {
			if (!max || weighted[max] < weighted[key]) max = key;
		}
		return max;
	}
	return Object.entries(weighted)
		.sort((a, b) => b[1] - a[1])
		.slice(0, n)
		.map(x => x[0]);
}

class RetryableError extends Error {
	constructor(message?: string) {
		super(message);
		// restore prototype chain
		Object.setPrototypeOf(this, new.target.prototype);
	}
}

// We throttle to 20 QPS by only issuing one request every 50ms at most. This
// is importantly different than using the more obvious 20 and 1000ms here,
// as it results in more spaced out requests which won't cause as many gettaddrinfo
// ENOTFOUND (nodejs/node-v0.x-archive#5488). Similarly, the evenly spaced
// requests makes us signficantly less likely to encounter ECONNRESET errors
// on macOS (though these are still pretty frequent, Linux is recommended for running
// this tool). Retry up to 5 times with a 20ms backoff increment.
const request = retrying(throttling(fetch, 1, 50), 5, 20);

export function fetch(u: string) {
	const client = u.startsWith('http:') ? http : https;
	return new Promise<string>((resolve, reject) => {
		// @ts-ignore Typescript bug - thinks the second argument should be RequestOptions, not a callback
		const req = client.get(u, (res: IncomingMessage) => {
			if (res.statusCode !== 200) {
				if (res.statusCode >= 500 && res.statusCode < 600) {
					return reject(new RetryableError(`HTTP ${res.statusCode}`));
				} else if (res.statusCode >= 300 && res.statusCode <= 400 && res.headers.location) {
					resolve(fetch(url.resolve(u, res.headers.location)));
				} else {
					return reject(new Error(`HTTP ${res.statusCode}`));
				}
			}
			Streams.readAll(res).then(resolve, reject);
		});
		req.on('error', reject);
		req.end();
	});
}

function retrying<I, O>(fn: (args: I) => Promise<O>, retries: number, wait: number): (args: I) => Promise<O> {
	const retry = async (args: I, attempt = 0): Promise<O> => {
		try {
			return await fn(args);
		} catch (err) {
			if (err instanceof RetryableError) {
				attempt++;
				if (attempt > retries) return Promise.reject(err);
				const timeout = Math.round(attempt * wait * (1 + Math.random() / 2));
				warn(`Retrying ${args} in ${timeout}ms (${attempt}):`, err);
				return new Promise(resolve => {
					setTimeout(() => {
						resolve(retry(args, attempt++));
					}, timeout);
				});
			} else {
				return Promise.reject(err);
			}
		}
	};
	return retry;
}

function throttling<I, O>(fn: (args: I) => Promise<O>, limit: number, interval: number): (args: I) => Promise<O> {
	const queue = new Map();
	let currentTick = 0;
	let activeCount = 0;

	const throttled = (args: I) => {
		let timeout: NodeJS.Timeout;
		return new Promise<O>((resolve, reject) => {
			const execute = () => {
				resolve(fn(args));
				queue.delete(timeout);
			};

			const now = Date.now();

			if (now - currentTick > interval) {
				activeCount = 1;
				currentTick = now;
			} else if (activeCount < limit) {
				activeCount++;
			} else {
				currentTick += interval;
				activeCount = 1;
			}

			timeout = setTimeout(execute, currentTick - now);
			queue.set(timeout, reject);
		});
	};

	return throttled;
}

function color(s: any, code: number) {
	return util.format(`\x1b[${code}m%s\x1b[0m`, s);
}

function report(format: Format, num: number, source: string) {
	console.info(`${format.name}: ${color(num, 33)} ${color(`(${source})`, 90)}`);
}

function warn(s: string, err: Error) {
	console.warn(`${color(s, 33)} ${color(err.message, 90)}`);
}

function error(s: string) {
	console.error(color(s, 91));
}
