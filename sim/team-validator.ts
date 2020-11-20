/**
 * Team Validator
 * Pokemon Showdown - http://pokemonshowdown.com/
 *
 * Handles team validation, and specifically learnset checking.
 *
 * @license MIT
 */

import {Dex, toID} from './dex';
import {Utils} from '../lib/utils';

/**
 * Describes a possible way to get a pokemon. Is not exhaustive!
 * sourcesBefore covers all sources that do not have exclusive
 * moves (like catching wild pokemon).
 *
 * Character is a source ID, one of:
 *
 * - E = egg
 * - S = event, 3rd char+ is the index in .eventData
 * - V = Virtual Console transfer, only 7V/8V is valid
 *
 * Designed to match MoveSource where possible.
 */
export type PokemonSource = string;

/**
 * Represents a set of possible ways to get a Pokémon with a given
 * set.
 *
 * `new PokemonSources()` creates an empty set;
 *
 * The set mainly stored as an Array `sources`.
 */
export class PokemonSources {
	/**
	 * A set of specific possible PokemonSources; implemented as
	 * an Array rather than a Set for perf reasons.
	 */
	sources: PokemonSource[];
	isHidden: boolean | null;

	babyOnly?: string;
	sketchMove?: string;
	hm?: string;
	restrictiveMoves?: string[];
	/** Obscure learn methods */
	restrictedMove?: ID;

	constructor(sourcesBefore = 0, sourcesAfter = 0) {
		this.sources = [];
		this.isHidden = null;
	}
	size() {
		return this.sources.length;
	}
	add(source: PokemonSource) {
		if (this.sources[this.sources.length - 1] !== source) this.sources.push(source);
	}
	intersectWith(other: PokemonSources) {
		if (this.sources.length) {
			if (other.sources.length) {
				const sourcesSet = new Set(other.sources);
				const intersectSources = this.sources.filter(source => sourcesSet.has(source));
				this.sources = intersectSources;
			} else {
				this.sources = [];
			}
		}

		if (other.restrictedMove && other.restrictedMove !== this.restrictedMove) {
			if (this.restrictedMove) {
				// incompatible
				this.sources = [];
			} else {
				this.restrictedMove = other.restrictedMove;
			}
		}
		if (other.isHidden) this.isHidden = true;
	}
}

export class TeamValidator {
	readonly format: Format;
	readonly dex: ModdedDex;
	readonly gen: number;
	readonly ruleTable: import('./dex-formats').RuleTable;

	readonly toID: (str: any) => ID;
	constructor(format: string | Format, dex = Dex) {
		this.format = dex.getFormat(format);
		this.dex = dex.forFormat(this.format);
		this.gen = this.dex.gen;
		this.ruleTable = this.dex.getRuleTable(this.format);

		this.toID = toID;
	}

	validateTeam(
		team: PokemonSet[] | null,
		options: {
			removeNicknames?: boolean,
			skipSets?: {[name: string]: {[key: string]: boolean}},
		} = {}
	): string[] | null {
		if (team && this.format.validateTeam) {
			return this.format.validateTeam.call(this, team, options) || null;
		}
		return this.baseValidateTeam(team, options);
	}

	baseValidateTeam(
		team: PokemonSet[] | null,
		options: {
			removeNicknames?: boolean,
			skipSets?: {[name: string]: {[key: string]: boolean}},
		} = {}
	): string[] | null {
		const format = this.format;
		const dex = this.dex;

		let problems: string[] = [];
		const ruleTable = this.ruleTable;
		if (format.team) {
			return null;
		}
		if (!team || !Array.isArray(team)) {
			return [`You sent invalid team data. If you're not using a custom client, please report this as a bug.`];
		}

		let [minSize, maxSize] = format.teamLength && format.teamLength.validate || [1, 6];
		if (format.gameType === 'doubles' && minSize < 2) minSize = 2;
		if (['triples', 'rotation'].includes(format.gameType as 'triples') && minSize < 3) minSize = 3;

		if (team.length < minSize) problems.push(`You must bring at least ${minSize} Pok\u00E9mon.`);
		if (team.length > maxSize) return [`You may only bring up to ${maxSize} Pok\u00E9mon.`];

		// A limit is imposed here to prevent too much engine strain or
		// too much layout deformation - to be exact, this is the limit
		// allowed in Custom Game.
		if (team.length > 24) {
			problems.push(`Your team has more than than 24 Pok\u00E9mon, which the simulator can't handle.`);
			return problems;
		}
		if (ruleTable.isBanned('nonexistent') && team.length > 6) {
			problems.push(`Your team has more than than 6 Pok\u00E9mon.`);
			return problems;
		}

		const teamHas: {[k: string]: number} = {};
		for (const set of team) {
			if (!set) return [`You sent invalid team data. If you're not using a custom client, please report this as a bug.`];

			let setProblems: string[] | null = null;
			if (options.skipSets && options.skipSets[set.name]) {
				for (const i in options.skipSets[set.name]) {
					teamHas[i] = (teamHas[i] || 0) + 1;
				}
			} else {
				setProblems = (format.validateSet || this.validateSet).call(this, set, teamHas);
			}
			if (setProblems) {
				problems = problems.concat(setProblems);
			}
			if (options.removeNicknames) {
				const species = dex.getSpecies(set.species);
				let crossSpecies: Species;
				if (format.name === 'Cross Evolution' && (crossSpecies = dex.getSpecies(set.name)).exists) {
					set.name = crossSpecies.name;
				} else {
					set.name = species.baseSpecies;
					if (species.baseSpecies === 'Unown') set.species = 'Unown';
				}
			}
		}

		for (const [rule, source, limit, bans] of ruleTable.complexTeamBans) {
			let count = 0;
			for (const ban of bans) {
				if (teamHas[ban] > 0) {
					count += limit ? teamHas[ban] : 1;
				}
			}
			if (limit && count > limit) {
				const clause = source ? ` by ${source}` : ``;
				problems.push(`You are limited to ${limit} of ${rule}${clause}.`);
			} else if (!limit && count >= bans.length) {
				const clause = source ? ` by ${source}` : ``;
				problems.push(`Your team has the combination of ${rule}, which is banned${clause}.`);
			}
		}

		for (const rule of ruleTable.keys()) {
			if ('!+-'.includes(rule.charAt(0))) continue;
			const subformat = dex.getFormat(rule);
			if (subformat.onValidateTeam && ruleTable.has(subformat.id)) {
				problems = problems.concat(subformat.onValidateTeam.call(this, team, format, teamHas) || []);
			}
		}
		if (format.onValidateTeam) {
			problems = problems.concat(format.onValidateTeam.call(this, team, format, teamHas) || []);
		}

		if (!problems.length) return null;
		return problems;
	}

	validateSet(set: PokemonSet, teamHas: AnyObject): string[] | null {
		const format = this.format;
		const dex = this.dex;
		const ruleTable = this.ruleTable;

		let problems: string[] = [];
		if (!set) {
			return [`This is not a Pokemon.`];
		}

		let species = dex.getSpecies(set.species);
		set.species = species.name;
		if (set.name && set.name.length > 18) {
			if (set.name === set.species) {
				set.name = species.baseSpecies;
			} else {
				problems.push(`Nickname "${set.name}" too long (should be 18 characters or fewer)`);
			}
		}
		set.name = dex.getName(set.name);
		let item = dex.getItem(Utils.getString(set.item));
		set.item = item.name;
		let ability = dex.getAbility(Utils.getString(set.ability));
		set.ability = ability.name;
		let nature = dex.getNature(Utils.getString(set.nature));
		set.nature = nature.name;
		if (!Array.isArray(set.moves)) set.moves = [];

		const maxLevel = format.maxLevel || 100;
		const maxForcedLevel = format.maxForcedLevel || maxLevel;
		let forcedLevel: number | null = null;
		if (!set.level) {
			set.level = (format.defaultLevel || maxLevel);
		}
		if (format.forcedLevel) {
			forcedLevel = format.forcedLevel;
		} else if (set.level >= maxForcedLevel) {
			forcedLevel = maxForcedLevel;
		}
		if (set.level > maxLevel || set.level === forcedLevel || set.level === maxForcedLevel) {
			// Note that we're temporarily setting level 50 pokemon in VGC to level 100
			// This allows e.g. level 50 Hydreigon even though it doesn't evolve until level 64.
			// Leveling up can't make an obtainable pokemon unobtainable, so this is safe.
			// Just remember to set the level back to forcedLevel at the end of the file.
			set.level = maxLevel;
		}
		if ((set.level > 100 || set.level < 1) && ruleTable.isBanned('nonexistent')) {
			problems.push((set.name || set.species) + ' is higher than level 100.');
		}

		set.name = set.name || species.baseSpecies;
		let name = set.species;
		if (set.species !== set.name && species.baseSpecies !== set.name) {
			name = `${set.name} (${set.species})`;
		}

		const setHas: {[k: string]: true} = {};
		const capEVs = ruleTable.has('obtainablemisc');
		if (!set.evs) set.evs = TeamValidator.fillStats(null, !capEVs ? 252 : 0);
		if (!set.ivs) set.ivs = TeamValidator.fillStats(null, 31);

		if (ruleTable.has('obtainableformes')) {
			problems.push(...this.validateForme(set));
			species = dex.getSpecies(set.species);
		}
		const setSources = this.allSources(species);

		for (const [rule] of ruleTable) {
			if ('!+-'.includes(rule.charAt(0))) continue;
			const subformat = dex.getFormat(rule);
			if (subformat.onChangeSet && ruleTable.has(subformat.id)) {
				problems = problems.concat(subformat.onChangeSet.call(this, set, format, setHas, teamHas) || []);
			}
		}
		if (format.onChangeSet) {
			problems = problems.concat(format.onChangeSet.call(this, set, format, setHas, teamHas) || []);
		}

		// onChangeSet can modify set.species, set.item, set.ability
		species = dex.getSpecies(set.species);
		item = dex.getItem(set.item);
		ability = dex.getAbility(set.ability);

		let outOfBattleSpecies = species;
		let tierSpecies = species;
		if (ability.id === 'battlebond' && species.id === 'greninja') {
			outOfBattleSpecies = dex.getSpecies('greninjaash');
			if (ruleTable.has('obtainableformes')) {
				tierSpecies = outOfBattleSpecies;
			}
		}
		if (ability.id === 'owntempo' && species.id === 'rockruff') {
			tierSpecies = outOfBattleSpecies = dex.getSpecies('rockruffdusk');
		}
		if (!species.exists) {
			return [`The Pokemon "${set.species}" does not exist.`];
		}

		if (item.id && !item.exists) {
			return [`"${set.item}" is an invalid item.`];
		}
		if (ability.id && !ability.exists) {
			return [`"${set.ability}" is an invalid ability.`];
		}
		if (nature.id && !nature.exists) {
			problems.push(`"${set.nature}" is an invalid nature.`);
		}
		if (set.happiness !== undefined && isNaN(set.happiness)) {
			problems.push(`${name} has an invalid happiness value.`);
		}
		if (set.hpType) {
			const type = dex.getType(set.hpType);
			if (!type.exists || ['normal', 'fairy'].includes(type.id)) {
				problems.push(`${name}'s Hidden Power type (${set.hpType}) is invalid.`);
			} else {
				set.hpType = type.name;
			}
		}

		if (ruleTable.has('obtainableformes')) {
			if (item.megaEvolves === species.name) {
				if (!item.megaStone) throw new Error(`Item ${item.name} has no base form for mega evolution`);
				tierSpecies = dex.getSpecies(item.megaStone);
			} else if (item.id === 'redorb' && species.id === 'groudon') {
				tierSpecies = dex.getSpecies('Groudon-Primal');
			} else if (item.id === 'blueorb' && species.id === 'kyogre') {
				tierSpecies = dex.getSpecies('Kyogre-Primal');
			} else if (species.id === 'rayquaza' && set.moves.map(toID).includes('dragonascent' as ID)) {
				tierSpecies = dex.getSpecies('Rayquaza-Mega');
			}
		}

		let problem = this.checkSpecies(set, species, tierSpecies, setHas);
		if (problem) problems.push(problem);

		problem = this.checkItem(set, item, setHas);
		if (problem) problems.push(problem);

		if (!set.ability) set.ability = 'No Ability';
		if (ruleTable.has('obtainableabilities')) {
			if (!ability.name || ability.name === 'No Ability') {
				problems.push(`${name} needs to have an ability.`);
			} else if (!Object.values(species.abilities).includes(ability.name)) {
				if (tierSpecies.abilities[0] === ability.name) {
					set.ability = species.abilities[0];
				} else {
					problems.push(`${name} can't have ${set.ability}.`);
				}
			}
			if (ability.name === species.abilities['H']) {
				setSources.isHidden = true;
			} else {
				setSources.isHidden = false;
			}
		}

		ability = dex.getAbility(set.ability);
		problem = this.checkAbility(set, ability, setHas);
		if (problem) problems.push(problem);

		if (!set.nature) {
			set.nature = '';
		}
		nature = dex.getNature(set.nature);
		problem = this.checkNature(set, nature, setHas);
		if (problem) problems.push(problem);

		if (set.moves && Array.isArray(set.moves)) {
			set.moves = set.moves.filter(val => val);
		}
		if (!set.moves || !set.moves.length) {
			problems.push(`${name} has no moves.`);
			set.moves = [];
		}
		// A limit is imposed here to prevent too much engine strain or
		// too much layout deformation - to be exact, this is the limit
		// allowed in Custom Game.
		if (set.moves.length > 24) {
			problems.push(`${name} has more than 24 moves, which the simulator can't handle.`);
			return problems;
		}
		if (ruleTable.isBanned('nonexistent') && set.moves.length > 4) {
			problems.push(`${name} has more than 4 moves.`);
			return problems;
		}

		if (ruleTable.isBanned('nonexistent')) {
			problems.push(...this.validateStats(set, species, setSources));
		}

		let lsetProblem = null;
		for (const moveName of set.moves) {
			if (!moveName) continue;
			const move = dex.getMove(Utils.getString(moveName));
			if (!move.exists) return [`"${move.name}" is an invalid move.`];

			problem = this.checkMove(set, move, setHas);
			if (problem) problems.push(problem);

			if (ruleTable.has('obtainablemoves')) {
				const checkLearnset = (ruleTable.checkLearnset && ruleTable.checkLearnset[0] || this.checkLearnset);
				lsetProblem = checkLearnset.call(this, move, outOfBattleSpecies, setSources, set);
				if (lsetProblem) {
					lsetProblem.moveName = move.name;
					break;
				}
			}
		}

		const lsetProblems = this.reconcileLearnset(outOfBattleSpecies, setSources, lsetProblem, name);
		if (lsetProblems) problems.push(...lsetProblems);
		const learnsetSpecies = dex.getLearnsetData(outOfBattleSpecies.id);

		if (!setSources.sourcesBefore && setSources.sources.length) {
			let legal = false;
			for (const source of setSources.sources) {
				if (this.validateSource(set, source, setSources, outOfBattleSpecies)) continue;
				legal = true;
				break;
			}

			if (!legal) {
				let nonEggSource = null;
				for (const source of setSources.sources) {
					if (source.charAt(1) !== 'E') {
						nonEggSource = source;
						break;
					}
				}

				if (setSources.sources.length > 1) {
					problems.push(`${name} has an event-exclusive move that it doesn't qualify for (only one of several ways to get the move will be listed):`);
				}
				const eventProblems = this.validateSource(
					set, nonEggSource, setSources, outOfBattleSpecies, ` because it has a move only available`
				);
				if (eventProblems) problems.push(...eventProblems);
			}
		} else if (ruleTable.has('obtainablemisc') && learnsetSpecies.eventOnly) {
			const eventSpecies = !learnsetSpecies.eventData &&
			outOfBattleSpecies.baseSpecies !== outOfBattleSpecies.name ?
				dex.getSpecies(outOfBattleSpecies.baseSpecies) : outOfBattleSpecies;
			const eventData = learnsetSpecies.eventData ||
				dex.getLearnsetData(eventSpecies.id).eventData;
			if (!eventData) throw new Error(`Event-only species ${species.name} has no eventData table`);
			let legal = false;
			for (const event of eventData) {
				if (this.validateEvent(set, event, eventSpecies)) continue;
				legal = true;
				break;
			}
			if (!legal && !this.validateSource(set, 'V', setSources, species)) {
				legal = true;
			}
			if (!legal) {
				if (eventData.length === 1) {
					problems.push(`${species.name} is only obtainable from an event - it needs to match its event:`);
				} else {
					problems.push(`${species.name} is only obtainable from events - it needs to match one of its events, such as:`);
				}
				let eventInfo = eventData[0];
				let eventNum = 1;
				const eventName = eventData.length > 1 ? ` #${eventNum}` : ``;
				const eventProblems = this.validateEvent(set, eventInfo, eventSpecies, ` to be`, `from its event${eventName}`);
				if (eventProblems) problems.push(...eventProblems);
			}
		}
		if (ruleTable.has('obtainablemisc') && set.level < (species.evoLevel || 0)) {
			// FIXME: Event pokemon given at a level under what it normally can be attained at gives a false positive
			problems.push(`${name} must be at least level ${species.evoLevel} to be evolved.`);
		}

		if (teamHas) {
			for (const i in setHas) {
				if (i in teamHas) {
					teamHas[i]++;
				} else {
					teamHas[i] = 1;
				}
			}
		}
		for (const [rule, source, limit, bans] of ruleTable.complexBans) {
			let count = 0;
			for (const ban of bans) {
				if (setHas[ban]) count++;
			}
			if (limit && count > limit) {
				const clause = source ? ` by ${source}` : ``;
				problems.push(`${name} is limited to ${limit} of ${rule}${clause}.`);
			} else if (!limit && count >= bans.length) {
				const clause = source ? ` by ${source}` : ``;
				if (source === 'Obtainable Moves') {
					problems.push(`${name} has the combination of ${rule}, which is impossible to obtain legitimately.`);
				} else {
					problems.push(`${name} has the combination of ${rule}, which is banned${clause}.`);
				}
			}
		}

		for (const [rule] of ruleTable) {
			if ('!+-'.includes(rule.charAt(0))) continue;
			const subformat = dex.getFormat(rule);
			if (subformat.onValidateSet && ruleTable.has(subformat.id)) {
				problems = problems.concat(subformat.onValidateSet.call(this, set, format, setHas, teamHas) || []);
			}
		}
		if (format.onValidateSet) {
			problems = problems.concat(format.onValidateSet.call(this, set, format, setHas, teamHas) || []);
		}

		const nameSpecies = dex.getSpecies(set.name);
		if (nameSpecies.exists && nameSpecies.name.toLowerCase() === set.name.toLowerCase()) {
			// nickname is the name of a species
			if (nameSpecies.baseSpecies === species.baseSpecies) {
				set.name = species.baseSpecies;
			} else if (nameSpecies.name !== species.name && nameSpecies.name !== species.baseSpecies) {
				// nickname species doesn't match actual species
				// Nickname Clause
				problems.push(`${name} must not be nicknamed a different Pokémon species than what it actually is.`);
			}
		}

		if (!problems.length) {
			if (forcedLevel) set.level = forcedLevel;
			return null;
		}

		return problems;
	}

	validateStats(set: PokemonSet, species: Species, setSources: PokemonSources) {
		const ruleTable = this.ruleTable;
		const dex = this.dex;

		const capEVs = ruleTable.has('obtainablemisc');

		if (!set.evs) set.evs = TeamValidator.fillStats(null, !capEVs ? 252 : 0);
		if (!set.ivs) set.ivs = TeamValidator.fillStats(null, 31);

		const problems = [];
		const name = set.name || set.species;
		const statTable = {
			hp: 'HP', atk: 'Attack', def: 'Defense', spa: 'Special Attack', spd: 'Special Defense', spe: 'Speed',
		};

		const maxedIVs = Object.values(set.ivs).every(stat => stat === 31);
		for (const moveName of set.moves) {
			const move = dex.getMove(moveName);
			if (move.id === 'hiddenpower' && move.type !== 'Normal') {
				if (!set.hpType) {
					set.hpType = move.type;
				} else if (set.hpType !== move.type && ruleTable.has('obtainablemisc')) {
					problems.push(`${name}'s Hidden Power type ${set.hpType} is incompatible with Hidden Power ${move.type}`);
				}
			}
		}
		const cantBreedNorEvolve = (species.eggGroups[0] === 'Undiscovered' && !species.prevo && !species.nfe);
		const isLegendary = (cantBreedNorEvolve && ![
			'Pikachu', 'Unown', 'Dracozolt', 'Arctozolt', 'Dracovish', 'Arctovish',
		].includes(species.baseSpecies)) || [
			'Manaphy', 'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala',
		].includes(species.baseSpecies);
		const diancieException = species.name === 'Diancie' && set.shiny;
		const has3PerfectIVs = isLegendary && !diancieException;

		if (has3PerfectIVs) {
			let perfectIVs = 0;
			for (const stat in set.ivs) {
				if (set.ivs[stat as 'hp'] >= 31) perfectIVs++;
			}
			if (perfectIVs < 3) {
				problems.push(`${name} must have at least three perfect IVs because it's a legendary.`);
			}
		}

		if (set.hpType) {
			const ivHpType = dex.getHiddenPower(set.ivs).type;
			if (set.hpType !== ivHpType) {
				problems.push(`${name} has Hidden Power ${set.hpType}, but its IVs are for Hidden Power ${ivHpType}.`);
			}
		}

		for (const stat in set.evs) {
			if (set.evs[stat as 'hp'] < 0) {
				problems.push(`${name} has less than 0 EVs in ${statTable[stat as 'hp']}.`);
			}
		}

		for (const stat in set.evs) {
			if (set.evs[stat as StatName] > 255) {
				problems.push(`${name} has more than 255 EVs in ${statTable[stat as 'hp']}.`);
			}
		}

		let totalEV = 0;
		for (const stat in set.evs) totalEV += set.evs[stat as 'hp'];

		if (!this.format.debug) {
			if (!capEVs && [508, 510].includes(totalEV)) {
				problems.push(`${name} has exactly 510 EVs, but this format does not restrict you to 510 EVs: you can max out every EV (If this was intentional, add exactly 1 to one of your EVs, which won't change its stats but will tell us that it wasn't a mistake).`);
			}
			// Check for level import errors from user in VGC -> DOU, etc.
			// Note that in VGC etc (maxForcedLevel: 50), `set.level` will be 100 here for validation purposes
			if (set.level === 50 && this.format.maxLevel !== 50 && totalEV % 4 === 0) {
				problems.push(`${name} is level 50, but this format allows level 100 Pokémon. (If this was intentional, add exactly 1 to one of your EVs, which won't change its stats but will tell us that it wasn't a mistake).`);
			}
		}

		if (capEVs && totalEV > 510) {
			problems.push(`${name} has more than 510 total EVs.`);
		}

		return problems;
	}

	validateSource(
		set: PokemonSet, source: PokemonSource, setSources: PokemonSources, species: Species, because: string
	): string[] | undefined;
	validateSource(
		set: PokemonSet, source: PokemonSource, setSources: PokemonSources, species: Species
	): true | undefined;
	/**
	 * Returns array of error messages if invalid, undefined if valid
	 *
	 * If `because` is not passed, instead returns true if invalid.
	 */
	validateSource(
		set: PokemonSet, source: PokemonSource, setSources: PokemonSources, species: Species, because?: string
	) {
		let eventData: EventInfo | undefined;
		let eventSpecies = species;
		if (source.charAt(1) === 'S') {
			const splitSource = source.substr(source.charAt(2) === 'T' ? 3 : 2).split(' ');
			const dex = this.dex;
			eventSpecies = dex.getSpecies(splitSource[1]);
			const eventLsetData = this.dex.getLearnsetData(eventSpecies.id);
			eventData = eventLsetData.eventData?.[parseInt(splitSource[0])];
			if (!eventData) {
				throw new Error(`${eventSpecies.name} from ${species.name} doesn't have data for event ${source}`);
			}
		} else if (source.charAt(1) === 'E') {
			if (because) throw new Error(`Wrong place to get an egg incompatibility message`);
			return true;
		} else {
			throw new Error(`Unidentified source ${source} passed to validateSource`);
		}

		// complicated fancy return signature
		return this.validateEvent(set, eventData, eventSpecies, because as any) as any;
	}

	validateForme(set: PokemonSet) {
		const dex = this.dex;
		const name = set.name || set.species;

		const problems = [];
		const item = dex.getItem(set.item);
		const species = dex.getSpecies(set.species);

		if (species.name === 'Necrozma-Ultra') {
			const whichMoves = (set.moves.includes('sunsteelstrike') ? 1 : 0) +
				(set.moves.includes('moongeistbeam') ? 2 : 0);
			if (item.name !== 'Ultranecrozium Z') {
				// Necrozma-Ultra transforms from one of two formes, and neither one is the base forme
				problems.push(`Necrozma-Ultra must start the battle holding Ultranecrozium Z.`);
			} else if (whichMoves === 1) {
				set.species = 'Necrozma-Dusk-Mane';
			} else if (whichMoves === 2) {
				set.species = 'Necrozma-Dawn-Wings';
			} else {
				problems.push(`Necrozma-Ultra must start the battle as Necrozma-Dusk-Mane or Necrozma-Dawn-Wings holding Ultranecrozium Z. Please specify which Necrozma it should start as.`);
			}
		} else if (species.name === 'Zygarde-Complete') {
			problems.push(`Zygarde-Complete must start the battle as Zygarde or Zygarde-10% with Power Construct. Please specify which Zygarde it should start as.`);
		} else if (species.battleOnly) {
			if (species.requiredAbility && set.ability !== species.requiredAbility) {
				// Darmanitan-Zen
				problems.push(`${species.name} transforms in-battle with ${species.requiredAbility}, please fix its ability.`);
			}
			if (species.requiredItems) {
				if (!species.requiredItems.includes(item.name)) {
					// Mega or Primal
					problems.push(`${species.name} transforms in-battle with ${species.requiredItem}, please fix its item.`);
				}
			}
			if (species.requiredMove && !set.moves.includes(toID(species.requiredMove))) {
				// Meloetta-Pirouette, Rayquaza-Mega
				problems.push(`${species.name} transforms in-battle with ${species.requiredMove}, please fix its moves.`);
			}
			if (typeof species.battleOnly !== 'string') {
				// Ultra Necrozma and Complete Zygarde are already checked above
				throw new Error(`${species.name} should have a string battleOnly`);
			}
			// Set to out-of-battle forme
			set.species = species.battleOnly;
		} else {
			if (species.requiredAbility) {
				// Impossible!
				throw new Error(`Species ${species.name} has a required ability despite not being a battle-only forme; it should just be in its abilities table.`);
			}
			if (species.requiredItems && !species.requiredItems.includes(item.name)) {
				if (species.baseSpecies === 'Arceus' || species.baseSpecies === 'Silvally') {
					// Arceus/Silvally formes only require the item with Multitype/RKS System
					if (set.ability === species.abilities[0]) {
						problems.push(
							`${name} needs to hold ${species.requiredItems.join(' or ')}.`,
							`(It will revert to its Normal forme if you remove the item or give it a different item.)`
						);
					}
				} else {
					// Memory/Drive/Griseous Orb/Plate/Z-Crystal - Forme mismatch
					const baseSpecies = this.dex.getSpecies(species.changesFrom);
					problems.push(
						`${name} needs to hold ${species.requiredItems.join(' or ')} to be in its ${species.forme} forme.`,
						`(It will revert to its ${baseSpecies.baseForme} forme if you remove the item or give it a different item.)`
					);
				}
			}
			if (species.requiredMove && !set.moves.includes(toID(species.requiredMove))) {
				const baseSpecies = this.dex.getSpecies(species.changesFrom);
				problems.push(
					`${name} needs to know the move ${species.requiredMove} to be in its ${species.forme} forme.`,
					`(It will revert to its ${baseSpecies.baseForme} forme if it forgets the move.)`
				);
			}

			// Mismatches between the set forme (if not base) and the item signature forme will have been rejected already.
			// It only remains to assign the right forme to a set with the base species (Arceus/Genesect/Giratina/Silvally).
			if (item.forcedForme && species.name === dex.getSpecies(item.forcedForme).baseSpecies) {
				set.species = item.forcedForme;
			}
		}

		if (species.name === 'Pikachu-Cosplay') {
			const cosplay: {[k: string]: string} = {
				meteormash: 'Pikachu-Rock-Star', iciclecrash: 'Pikachu-Belle', drainingkiss: 'Pikachu-Pop-Star',
				electricterrain: 'Pikachu-PhD', flyingpress: 'Pikachu-Libre',
			};
			for (const moveid of set.moves) {
				if (moveid in cosplay) {
					set.species = cosplay[moveid];
					break;
				}
			}
		}

		if (species.name === 'Keldeo' && set.moves.includes('secretsword')) {
			set.species = 'Keldeo-Resolute';
		}

		const crowned: {[k: string]: string} = {
			'Zacian-Crowned': 'behemothblade', 'Zamazenta-Crowned': 'behemothbash',
		};
		if (set.species in crowned) {
			const ironHead = set.moves.indexOf('ironhead');
			if (ironHead >= 0) {
				set.moves[ironHead] = crowned[set.species];
			}
		}
		return problems;
	}

	checkSpecies(set: PokemonSet, species: Species, tierSpecies: Species, setHas: {[k: string]: true}) {
		const dex = this.dex;
		const ruleTable = this.ruleTable;

		setHas['pokemon:' + species.id] = true;
		setHas['basepokemon:' + toID(species.baseSpecies)] = true;

		let isMega = false;
		if (tierSpecies !== species) {
			setHas['pokemon:' + tierSpecies.id] = true;
			if (tierSpecies.isMega || tierSpecies.isPrimal) {
				setHas['pokemontag:mega'] = true;
				isMega = true;
			}
		}

		let banReason = ruleTable.check('pokemon:' + species.id);
		if (banReason) {
			return `${species.name} is ${banReason}.`;
		}
		if (banReason === '') return null;

		if (tierSpecies !== species) {
			banReason = ruleTable.check('pokemon:' + tierSpecies.id);
			if (banReason) {
				return `${tierSpecies.name} is ${banReason}.`;
			}
			if (banReason === '') return null;
		}

		if (isMega) {
			banReason = ruleTable.check('pokemontag:mega', setHas);
			if (banReason) {
				return `Mega evolutions are ${banReason}.`;
			}
		}

		banReason = ruleTable.check('basepokemon:' + toID(species.baseSpecies));
		if (banReason) {
			return `${species.name} is ${banReason}.`;
		}

		banReason = ruleTable.check('pokemontag:allpokemon');
		if (banReason) {
			return `${species.name} is not in the list of allowed pokemon.`;
		}

		return null;
	}

	checkItem(set: PokemonSet, item: Item, setHas: {[k: string]: true}) {
		const dex = this.dex;
		const ruleTable = this.ruleTable;

		setHas['item:' + item.id] = true;

		let banReason = ruleTable.check('item:' + item.id);
		if (banReason) {
			return `${set.name}'s item ${item.name} is ${banReason}.`;
		}
		if (banReason === '') return null;

		banReason = ruleTable.check('pokemontag:allitems');
		if (banReason) {
			return `${set.name}'s item ${item.name} is not in the list of allowed items.`;
		}

		return null;
	}

	checkMove(set: PokemonSet, move: Move, setHas: {[k: string]: true}) {
		const dex = this.dex;
		const ruleTable = this.ruleTable;

		setHas['move:' + move.id] = true;

		let banReason = ruleTable.check('move:' + move.id);
		if (banReason) {
			return `${set.name}'s move ${move.name} is ${banReason}.`;
		}
		if (banReason === '') return null;

		banReason = ruleTable.check('pokemontag:allmoves');
		if (banReason) {
			return `${set.name}'s move ${move.name} is not in the list of allowed moves.`;
		}

		return null;
	}

	checkAbility(set: PokemonSet, ability: Ability, setHas: {[k: string]: true}) {
		const dex = this.dex;
		const ruleTable = this.ruleTable;

		setHas['ability:' + ability.id] = true;

		let banReason = ruleTable.check('ability:' + ability.id);
		if (banReason) {
			return `${set.name}'s ability ${ability.name} is ${banReason}.`;
		}
		if (banReason === '') return null;

		banReason = ruleTable.check('pokemontag:allabilities');
		if (banReason) {
			return `${set.name}'s ability ${ability.name} is not in the list of allowed abilities.`;
		}

		return null;
	}

	checkNature(set: PokemonSet, nature: Nature, setHas: {[k: string]: true}) {
		const dex = this.dex;
		const ruleTable = this.ruleTable;

		setHas['nature:' + nature.id] = true;

		let banReason = ruleTable.check('nature:' + nature.id);
		if (banReason) {
			return `${set.name}'s nature ${nature.name} is ${banReason}.`;
		}
		if (banReason === '') return null;

		banReason = ruleTable.check('allnatures');
		if (banReason) {
			return `${set.name}'s nature ${nature.name} is not in the list of allowed natures.`;
		}

		return null;
	}

	validateEvent(set: PokemonSet, eventData: EventInfo, eventSpecies: Species): true | undefined;
	validateEvent(
		set: PokemonSet, eventData: EventInfo, eventSpecies: Species, because: string, from?: string
	): string[] | undefined;
	/**
	 * Returns array of error messages if invalid, undefined if valid
	 *
	 * If `because` is not passed, instead returns true if invalid.
	 */
	validateEvent(set: PokemonSet, eventData: EventInfo, eventSpecies: Species, because = ``, from = `from an event`) {
		const dex = this.dex;
		let name = set.species;
		const species = dex.getSpecies(set.species);
		if (!eventSpecies) eventSpecies = species;
		if (set.name && set.species !== set.name && species.baseSpecies !== set.name) name = `${set.name} (${set.species})`;

		const fastReturn = !because;
		if (eventData.from) from = `from ${eventData.from}`;
		const etc = `${because} ${from}`;

		const problems = [];

		if (eventData.level && (set.level || 0) < eventData.level) {
			if (fastReturn) return true;
			problems.push(`${name} must be at least level ${eventData.level}${etc}.`);
		}
		if ((eventData.shiny === true && !set.shiny) || (!eventData.shiny && set.shiny)) {
			if (fastReturn) return true;
			const shinyReq = eventData.shiny ? ` be shiny` : ` not be shiny`;
			problems.push(`${name} must${shinyReq}${etc}.`);
		}
		if (eventData.gender) {
			if (set.gender && eventData.gender !== set.gender) {
				if (fastReturn) return true;
				problems.push(`${name}'s gender must be ${eventData.gender}${etc}.`);
			}
		}
		let requiredIVs = 0;
		if (eventData.ivs) {
			if (!set.ivs) set.ivs = {hp: 31, atk: 31, def: 31, spa: 31, spd: 31, spe: 31};
			const statTable = {
				hp: 'HP', atk: 'Attack', def: 'Defense', spa: 'Special Attack', spd: 'Special Defense', spe: 'Speed',
			};
			let statName: StatName;
			for (statName in eventData.ivs) {
				if (set.ivs[statName] !== eventData.ivs[statName]) {
					if (fastReturn) return true;
					problems.push(`${name} must have ${eventData.ivs[statName]} ${statTable[statName]} IVs${etc}.`);
				}
			}
		} else {
			requiredIVs = eventData.perfectIVs || 0;
		}
		if (requiredIVs && set.ivs) {
			// Legendary Pokemon must have at least 3 perfect IVs
			// Events can also have a certain amount of guaranteed perfect IVs
			let perfectIVs = 0;
			let statName: StatName;
			for (statName in set.ivs) {
				if (set.ivs[statName] >= 31) perfectIVs++;
			}
			if (perfectIVs < requiredIVs) {
				if (fastReturn) return true;
				if (eventData.perfectIVs) {
					problems.push(`${name} must have at least ${requiredIVs} perfect IVs${etc}.`);
				}
			}
			// The perfect IV count affects Hidden Power availability
			if (requiredIVs >= 3 && set.hpType === 'Fighting') {
				if (fastReturn) return true;
				problems.push(`${name} can't use Hidden Power Fighting because it must have at least three perfect IVs${etc}.`);
			} else if (requiredIVs >= 5 && set.hpType &&
					!['Dark', 'Dragon', 'Electric', 'Steel', 'Ice'].includes(set.hpType)) {
				if (fastReturn) return true;
				problems.push(`${name} can only use Hidden Power Dark/Dragon/Electric/Steel/Ice because it must have at least 5 perfect IVs${etc}.`);
			}
		}
		if (problems.length) return problems;
		if (eventData.gender) set.gender = eventData.gender;
	}

	allSources(species?: Species) {
		return new PokemonSources(999, 999);
	}

	reconcileLearnset(
		species: Species, setSources: PokemonSources, problem: {type: string, moveName: string, [key: string]: any} | null,
		name: string = species.name
	) {
		const dex = this.dex;
		const problems = [];

		if (problem) {
			let problemString = `${name}'s move ${problem.moveName}`;
			if (problem.type === 'incompatible') {
				problemString = `${name}'s moves ${(setSources.restrictiveMoves || []).join(', ')} are incompatible.`;
			} else if (problem.type === 'oversketched') {
				const plural = (parseInt(problem.maxSketches) === 1 ? '' : 's');
				problemString += ` can't be Sketched because it can only Sketch ${problem.maxSketches} move${plural}.`;
			} else if (problem.type === 'invalid') {
				problemString = `${name} can't learn ${problem.moveName}.`;
			} else {
				throw new Error(`Unrecognized problem ${JSON.stringify(problem)}`);
			}
			problems.push(problemString);
		}

		if (setSources.size()) {
			setSources.sources = setSources.sources.filter(
				source => source.charAt(0) === 'E'
			);
		}

		if (problems.length) return problems;

		if (setSources.isHidden) {
			setSources.sources = setSources.sources.filter(
				source => parseInt(source.charAt(0)) >= 5
			);
		}

		if (setSources.babyOnly && setSources.sources.length) {
			const baby = dex.getSpecies(setSources.babyOnly);
			const babyEvo = toID(baby.evos[0]);
			setSources.sources = setSources.sources.filter(source => {
				if (source.charAt(1) === 'S') {
					const sourceId = source.split(' ')[1];
					if (sourceId !== baby.id) return false;
				}
				if (source.charAt(1) === 'E') {
					if (babyEvo && source.slice(2) === babyEvo) return false;
				}
				if (source.charAt(1) === 'D') {
					if (babyEvo && source.slice(2) === babyEvo) return false;
				}
				return true;
			});
			if (!setSources.sources.length) {
				problems.push(`${name}'s event/egg moves are from an evolution, and are incompatible with its moves from ${baby.name}.`);
			}
		}
		if (setSources.babyOnly && setSources.size()) {
			const baby = dex.getSpecies(setSources.babyOnly);
			setSources.sources = setSources.sources.filter(source => {
				if (source === 'V') return false;
				return true;
			});
		}

		return problems.length ? problems : null;
	}

	checkLearnset(
		move: Move,
		s: Species,
		setSources = this.allSources(s),
		set: AnyObject = {}
	): {type: string, [key: string]: any} | null {
		const dex = this.dex;
		if (!setSources.size()) throw new Error(`Bad sources passed to checkLearnset`);

		move = dex.getMove(move);
		const moveid = move.id;
		const baseSpecies = dex.getSpecies(s);
		let species: Species | null = baseSpecies;

		const format = this.format;
		const ruleTable = dex.getRuleTable(format);
		const alreadyChecked: {[k: string]: boolean} = {};
		const level = set.level || 100;

		let incompatibleAbility = false;

		let limit1 = true;
		let sketch = false;
		let blockedHM = false;

		let sometimesPossible = false; // is this move in the learnset at all?

		let babyOnly = '';

		// This is a pretty complicated algorithm

		// Abstractly, what it does is construct the union of sets of all
		// possible ways this pokemon could be obtained, and then intersect
		// it with a the pokemon's existing set of all possible ways it could
		// be obtained. If this intersection is non-empty, the move is legal.

		// set of possible sources of a pokemon with this move
		const moveSources = new PokemonSources();

		while (species?.name && !alreadyChecked[species.id]) {
			alreadyChecked[species.id] = true;
			const lsetData = dex.getLearnsetData(species.id);
			if (!lsetData.learnset) {
				if ((species.changesFrom || species.baseSpecies) !== species.name) {
					// forme without its own learnset
					species = dex.getSpecies(species.changesFrom || species.baseSpecies);
					// warning: formes with their own learnset, like Wormadam, should NOT
					// inherit from their base forme unless they're freely switchable
					continue;
				}
				// should never happen
				throw new Error(`Species with no learnset data: ${species.id}`);
			}
			const checkingPrevo = species.baseSpecies !== s.baseSpecies;
			if (checkingPrevo && !moveSources.size()) {
				if (!setSources.babyOnly || !species.prevo) {
					babyOnly = species.id;
				}
			}

			if (lsetData.learnset[moveid] || lsetData.learnset['sketch']) {
				sometimesPossible = true;
				let lset = lsetData.learnset[moveid];
				if (moveid === 'sketch' || !lset || species.id === 'smeargle') {
					// The logic behind this comes from the idea that a Pokemon that learns Sketch
					// should be able to Sketch any move before transferring into Generation 8.
					if (move.noSketch || move.isZ) {
						return {type: 'invalid'};
					}
					lset = lsetData.learnset['sketch'];
					sketch = true;
				}
				if (typeof lset === 'string') lset = [lset];

				for (let learned of lset) {
					// Every `learned` represents a single way a pokemon might
					// learn a move. This can be handled one of several ways:
					// `continue`
					//   means we can't learn it
					// `return false`
					//   means we can learn it with no restrictions
					//   (there's a way to just teach any pokemon of this species
					//   the move, like a TM.)
					// `moveSources.add(source)`
					//   means we can learn it only if obtained that exact way described
					//   in source

					if (learned.charAt(0) === 'L') {
						// special checking for level-up moves
						if (level >= parseInt(learned.substr(2))) {
							// we're past the required level to learn it
							// (level-up moves can be relearnered at any level)
							// falls through to LMT check below
						} else if ((!species.gender || species.gender === 'F') && species.canHatch) {
							// available as egg move
							learned = 'Eany';
							// falls through to E check below
						} else {
							// this move is unavailable, skip it
							continue;
						}
					}

					// Egg moves can be taught to any pokemon from any source
					if (learned === 'E' || 'LMTR'.includes(learned.charAt(0))) {
						if (learned.charAt(0) !== 'R') {
							// Level-up, TM or tutor moves:
							//   always available
							if (learned !== 'E' && babyOnly) setSources.babyOnly = babyOnly;
						}
						// Level-up, TM, or tutor moves:
						if (learned.charAt(0) === 'R') {
							moveSources.restrictedMove = moveid;
						}
						limit1 = false;
					} else if (learned.charAt(0) === 'E') {
						// egg moves:
						//   only if hatched from an egg
						let limitedEggMove: ID | null | undefined = undefined;
						if (learned.slice(1) === 'Eany') {
							limitedEggMove = null;
						}
						learned = 'E' + (species.prevo ? species.id : '');
						moveSources.add(learned);
					} else if (learned.charAt(0) === 'S') {
						moveSources.add(learned + ' ' + species.id);
					}
				}
			}

			// also check to see if the mon's prevo or freely switchable formes can learn this move
			species = this.learnsetParent(species);
		}

		if (limit1 && sketch) {
			// limit 1 sketch move
			if (setSources.sketchMove) {
				return {type: 'oversketched', maxSketches: 1};
			}
			setSources.sketchMove = moveid;
		}

		if (blockedHM) {
			// Limit one of Defog/Whirlpool to be transferred
			if (setSources.hm) return {type: 'incompatible'};
			setSources.hm = moveid;
		}

		if (!setSources.restrictiveMoves) {
			setSources.restrictiveMoves = [];
		}
		setSources.restrictiveMoves.push(move.name);

		// Now that we have our list of possible sources, intersect it with the current list
		if (!moveSources.size()) {
			if (incompatibleAbility) return {type: 'incompatibleAbility'};
			return {type: 'invalid'};
		}
		setSources.intersectWith(moveSources);
		if (!setSources.size()) {
			return {type: 'incompatible'};
		}

		if (babyOnly) setSources.babyOnly = babyOnly;
		return null;
	}

	learnsetParent(species: Species) {
		// Own Tempo Rockruff and Battle Bond Greninja are special event formes
		// that are visually indistinguishable from their base forme but have
		// different learnsets. To prevent a leak, we make them show up as their
		// base forme, but hardcode their learnsets into Rockruff-Dusk and
		// Greninja-Ash
		if ((species.baseSpecies === 'Gastrodon' || species.baseSpecies === 'Pumpkaboo') && species.forme) {
			return this.dex.getSpecies(species.baseSpecies);
		} else if (species.name === 'Lycanroc-Dusk') {
			return this.dex.getSpecies('Rockruff-Dusk');
		} else if (species.name === 'Greninja-Ash') {
			return null;
		} else if (species.changesFrom && species.baseSpecies !== 'Kyurem') {
			// For Pokemon like Rotom and Necrozma whose movesets are extensions are their base formes
			return this.dex.getSpecies(species.changesFrom);
		}
		return null;
	}

	static fillStats(stats: SparseStatsTable | null, fillNum = 0): StatsTable {
		const filledStats: StatsTable = {hp: fillNum, atk: fillNum, def: fillNum, spa: fillNum, spd: fillNum, spe: fillNum};
		if (stats) {
			let statName: StatName;
			for (statName in filledStats) {
				const stat = stats[statName];
				if (typeof stat === 'number') filledStats[statName] = stat;
			}
		}
		return filledStats;
	}

	static get(format: string | Format) {
		return new TeamValidator(format);
	}
}
