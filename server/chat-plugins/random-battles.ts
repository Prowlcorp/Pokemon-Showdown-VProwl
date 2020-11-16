/**
 * Random Battles chat-plugin
 * Written by Kris with inspiration from sirDonovan and The Immortal
 */

import {FS} from "../../lib/fs";

function formatAbility(ability: Ability | string) {
	ability = Dex.getAbility(ability);
	return `<a href="https://${Config.routes.dex}/abilities/${ability.id}" target="_blank" class="subtle" style="white-space:nowrap">${ability.name}</a>`;
}
function formatNature(n: string) {
	const nature = Dex.getNature(n);
	return nature.name;
}

function formatMove(move: Move | string) {
	move = Dex.getMove(move);
	return `<a href="https://${Config.routes.dex}/moves/${move.id}" target="_blank" class="subtle" style="white-space:nowrap">${move.name}</a>`;
}

function formatItem(item: Item | string) {
	if (typeof item === 'string' && item === "No Item") {
		return `No Item`;
	} else {
		item = Dex.getItem(item);
		return `<a href="https://${Config.routes.dex}/items/${item.id}" target="_blank" class="subtle" style="white-space:nowrap">${item.name}</a>`;
	}
}

function battleFactorySets(species: string | Species, tier: string | null, gen = 'gen7', isBSS = false) {
	species = Dex.getSpecies(species);
	if (typeof species.battleOnly === 'string') {
		species = Dex.getSpecies(species.battleOnly);
	}
	gen = toID(gen);
	const genNum = parseInt(gen[3]);
	if (isNaN(genNum) || genNum < 6 || (isBSS && genNum < 7)) return null;
	const statsFile = JSON.parse(
		FS(`data${gen === 'gen8' ? '/' : `/mods/${gen}`}/${isBSS ? `bss-` : ``}factory-sets.json`).readIfExistsSync() ||
		"{}"
	);
	if (!Object.keys(statsFile).length) return null;
	let buf = ``;
	const statNames: {[k: string]: string} = {
		hp: "HP", atk: "Atk", def: "Def", spa: "SpA", spd: "SpD", spe: "Spe",
	};
	if (!isBSS) {
		if (!tier) return {e: `Please provide a valid tier.`};
		if (!(toID(tier) in TIERS)) return {e: `That tier isn't supported.`};
		const t = statsFile[TIERS[toID(tier)]];
		if (!(species.id in t)) {
			const formatName = Dex.getFormat(`${gen}battlefactory`).name;
			return {e: `${species.name} doesn't have any sets in ${TIERS[toID(tier)]} for ${formatName}.`};
		}
		const setObj = t[species.id];
		buf += `<span style="color:#999999;">Sets for ${species.name} in${genNum === 8 ? `` : ` ${GEN_NAMES[gen]}`} ${TIERS[toID(tier)]}:</span><br />`;
		for (const [i, set] of setObj.sets.entries()) {
			buf += `<details><summary>Set ${i + 1}</summary>`;
			buf += `<ul style="list-style-type:none;">`;
			buf += `<li>${set.species}${set.gender ? ` (${set.gender})` : ``} @ ${Array.isArray(set.item) ? set.item.map(formatItem).join(" / ") : formatItem(set.item)}</li>`;
			buf += `<li>Ability: ${Array.isArray(set.ability) ? set.ability.map(formatAbility).join(" / ") : formatAbility(set.ability)}</li>`;
			if (TIERS[toID(tier)] === "LC" && !set.level) buf += `<li>Level: 5</li>`;
			if (set.level && set.level < 100) buf += `<li>Level: ${set.level}</li>`;
			if (set.shiny) buf += `<li>Shiny: Yes</li>`;
			if (set.happiness) buf += `<li>Happiness: ${set.happiness}</li>`;
			if (set.evs) {
				buf += `<li>EVs: `;
				const evs: string[] = [];
				let ev: string;
				for (ev in set.evs) {
					if (set.evs[ev] === 0) continue;
					evs.push(`${set.evs[ev]} ${statNames[ev]}`);
				}
				buf += `${evs.join(" / ")}</li>`;
			}
			buf += `<li>${Array.isArray(set.nature) ? set.nature.map(formatNature).join(" / ") : formatNature(set.nature)} Nature</li>`;
			if (set.ivs) {
				buf += `<li>IVs: `;
				const ivs: string[] = [];
				let iv: string;
				for (iv in set.ivs) {
					if (set.ivs[iv] === 31) continue;
					ivs.push(`${set.ivs[iv]} ${statNames[iv]}`);
				}
				buf += `${ivs.join(" / ")}</li>`;
			}
			for (const moveid of set.moves) {
				buf += `<li>- ${Array.isArray(moveid) ? moveid.map(formatMove).join(" / ") : formatMove(moveid)}</li>`;
			}
			buf += `</ul></details>`;
		}
	} else {
		const format = Dex.getFormat(`${gen}bssfactory`);
		if (!(species.id in statsFile)) return {e: `${species.name} doesn't have any sets in ${format.name}.`};
		const setObj = statsFile[species.id];
		buf += `<span style="color:#999999;">Sets for ${species.name} in ${format.name}:</span><br />`;
		for (const [i, set] of setObj.sets.entries()) {
			buf += `<details><summary>Set ${i + 1}</summary>`;
			buf += `<ul style="list-style-type:none;">`;
			buf += `<li>${set.species}${set.gender ? ` (${set.gender})` : ``} @ ${Array.isArray(set.item) ? set.item.map(formatItem).join(" / ") : formatItem(set.item)}</li>`;
			buf += `<li>Ability: ${Array.isArray(set.ability) ? set.ability.map(formatAbility).join(" / ") : formatAbility(set.ability)}</li>`;
			if (!set.level) buf += `<li>Level: 50</li>`;
			if (set.level && set.level < 50) buf += `<li>Level: ${set.level}</li>`;
			if (set.shiny) buf += `<li>Shiny: Yes</li>`;
			if (set.happiness) buf += `<li>Happiness: ${set.happiness}</li>`;
			if (set.evs) {
				buf += `<li>EVs: `;
				const evs: string[] = [];
				let ev: string;
				for (ev in set.evs) {
					if (set.evs[ev] === 0) continue;
					evs.push(`${set.evs[ev]} ${statNames[ev]}`);
				}
				buf += `${evs.join(" / ")}</li>`;
			}
			buf += `<li>${Array.isArray(set.nature) ? set.nature.map(formatNature).join(" / ") : formatNature(set.nature)} Nature</li>`;
			if (set.ivs) {
				buf += `<li>IVs: `;
				const ivs: string[] = [];
				let iv: string;
				for (iv in set.ivs) {
					if (set.ivs[iv] === 31) continue;
					ivs.push(`${set.ivs[iv]} ${statNames[iv]}`);
				}
				buf += `${ivs.join(" / ")}</li>`;
			}
			for (const moveid of set.moves) {
				buf += `<li>- ${Array.isArray(moveid) ? moveid.map(formatMove).join(" / ") : formatMove(moveid)}</li>`;
			}
			buf += `</ul></details>`;
		}
	}
	return buf;
}

export const commands: ChatCommands = {
	randbats: 'randombattles',
	randombattles(target, room, user) {
		if (!this.runBroadcast()) return;
		const args = target.split(',');
		if (!args[0]) return this.parse(`/help randombattles`);
		let dex = Dex;
		if (args[1] && toID(args[1]) in Dex.dexes) {
			dex = Dex.dexes[toID(args[1])];
		} else if (room?.battle) {
			const format = Dex.getFormat(room.battle.format);
			dex = Dex.mod(format.mod);
		}
		const species = dex.getSpecies(args[0]);
		if (!species.exists) {
			return this.errorReply(`Error: Pok\u00e9mon '${args[0].trim()}' does not exist.`);
		}
		let formatName = dex.getFormat(`randombattle`).name;
		const moves: string[] = [];
		// Done because species.randomBattleMoves is readonly
		for (const move of species.randomBattleMoves) {
			moves.push(move);
		}
		const m = moves.sort().map(formatMove);
		this.sendReplyBox(`<span style="color:#999999;">Moves for ${species.name} in ${formatName}:</span><br />${m.join(`, `)}`);
	},
	randombattleshelp: [
		`/randombattles OR /randbats [pokemon] - Displays a Pok\u00e9mon's Random Battle Moves.`,
	],

	randdubs: 'randomdoublesbattle',
	randomdoublesbattle(target, room, user) {
		if (!this.runBroadcast()) return;
		const args = target.split(',');
		if (!args[0]) return this.parse(`/help randomdoublesbattle`);
		let dex = Dex;
		if (args[1] && toID(args[1]) in Dex.dexes) {
			dex = Dex.dexes[toID(args[1])];
		} else if (room?.battle) {
			const format = Dex.getFormat(room.battle.format);
			dex = Dex.mod(format.mod);
		}
		if (parseInt(toID(args[1])[3]) < 4) {
			if (room?.battle) {
				const format = Dex.getFormat(room.battle.format);
				dex = Dex.mod(format.mod);
			} else {
				return this.parse(`/help randomdoublesbattle`);
			}
		}
		const species = dex.getSpecies(args[0]);
		const formatName = dex.getFormat(`randomdoublesbattle`).name;
		if (!species.exists) {
			return this.errorReply(`Error: Pok\u00e9mon '${args[0].trim()}' does not exist.`);
		}
		const moves: string[] = [];
		// Done because species.randomDoubleBattleMoves is readonly
		for (const move of species.randomDoubleBattleMoves) {
			moves.push(move);
		}
		const m = moves.sort().map(formatMove);
		this.sendReplyBox(`<span style="color:#999999;">Doubles moves for ${species.name} in ${formatName}:</span><br />${m.join(`, `)}`);
	},
	randomdoublesbattlehelp: [
		`/randomdoublesbattle OR /randdubs [pokemon]- Displays a Pok\u00e9mon's Random Doubles Battle Moves.`,
	],

	bssfactory: 'battlefactory',
	battlefactory(target, room, user, connection, cmd) {
		if (!this.runBroadcast()) return;
		let isBSS = false;
		if (cmd === 'bssfactory') isBSS = true;
		if (isBSS) {
			const args = target.split(',');
			if (!args[0]) return this.parse(`/help battlefactory`);
			const species = Dex.getSpecies(args[0]);
			if (!species.exists) {
				return this.errorReply(`Error: Pok\u00e9mon '${args[0].trim()}' not found.`);
			}
			const bssSets = battleFactorySets(species, null, true);
			if (!bssSets) return this.parse(`/help battlefactory`);
			if (typeof bssSets !== 'string') {
				return this.errorReply(`Error: ${bssSets.e}`);
			}
			return this.sendReplyBox(bssSets);
		} else {
			const args = target.split(',');
			if (!args[0]) return this.parse(`/help battlefactory`);
			const species = Dex.getSpecies(args[0]);
			if (!species.exists) {
				return this.errorReply(`Error: Pok\u00e9mon '${args[0].trim()}' not found.`);
			}
			let tier = '';
			if (args[1] && toID(args[1]) in TIERS) {
				tier = TIERS[toID(args[1])];
			} else {
				tier = 'ou';
			}
			const mod = args[2] || 'gen7';
			let bfSets;
			if (species.name === 'Necrozma-Ultra') {
				bfSets = battleFactorySets(Dex.getSpecies('necrozma-dawnwings'), tier, mod);
				if (typeof bfSets === 'string') {
					bfSets += battleFactorySets(Dex.getSpecies('necrozma-duskmane'), tier, mod);
				}
			} else if (species.name === 'Zygarde-Complete') {
				bfSets = battleFactorySets(Dex.getSpecies('zygarde'), tier, mod);
				if (typeof bfSets === 'string') {
					bfSets += battleFactorySets(Dex.getSpecies('zygarde-10'), tier, mod);
				}
			} else {
				bfSets = battleFactorySets(species, tier, mod);
			}
			if (!bfSets) return this.parse(`/help battlefactory`);
			if (typeof bfSets !== 'string') {
				return this.errorReply(`Error: ${bfSets.e}`);
			}
			return this.sendReplyBox(bfSets);
		}
	},
	battlefactoryhelp: [
		`/battlefactory [pokemon] - Displays a Pok\u00e9mon's Battle Factory sets.`,
		`/bssfactory [pokemon] - Displays a Pok\u00e9mon's BSS Factory sets.`,
	],
};
