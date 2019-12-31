// Note: These are the rules that formats use
// The list of formats is stored in config/formats.js

'use strict';

/**@type {{[k: string]: FormatsData}} */
let BattleFormats = {

	// Rulesets
	///////////////////////////////////////////////////////////////////

	standard: {
		effectType: 'ValidatorRule',
		name: 'Standard',
		desc: "The standard ruleset for all offical Smogon singles tiers (Ubers, OU, etc.)",
		ruleset: ['Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal'],
	},
	standardnext: {
		effectType: 'ValidatorRule',
		name: 'Standard NEXT',
		desc: "The standard ruleset for the NEXT mod",
		ruleset: ['Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'OHKO Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal'],
	},
	standardubers: {
		effectType: 'ValidatorRule',
		name: 'Standard Ubers',
		desc: "The standard ruleset for [Gen 5] Ubers",
		ruleset: ['Sleep Clause Mod', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal'],
	},
	standardgbu: {
		effectType: 'ValidatorRule',
		name: 'Standard GBU',
		desc: "The standard ruleset for all official in-game Pok&eacute;mon tournaments and Battle Spot",
		ruleset: ['Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Illegal', 'Battle Bond',
			'Mewtwo', 'Mew',
			'Lugia', 'Ho-Oh', 'Celebi',
			'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys',
			'Dialga', 'Palkia', 'Giratina', 'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Reshiram', 'Zekrom', 'Kyurem', 'Keldeo', 'Meloetta', 'Genesect',
			'Xerneas', 'Yveltal', 'Zygarde', 'Diancie', 'Hoopa', 'Volcanion',
			'Cosmog', 'Cosmoem', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zeraora',
		],
	},
	minimalgbu: {
		effectType: 'ValidatorRule',
		name: 'Minimal GBU',
		desc: "The standard ruleset for official tournaments, but without Restricted Legendary bans",
		ruleset: ['Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Illegal', 'Battle Bond',
			'Mew',
			'Celebi',
			'Jirachi', 'Deoxys',
			'Phione', 'Manaphy', 'Darkrai', 'Shaymin', 'Arceus',
			'Victini', 'Keldeo', 'Meloetta', 'Genesect',
			'Diancie', 'Hoopa', 'Volcanion',
			'Magearna', 'Marshadow', 'Zeraora',
		],
	},
	standarddoubles: {
		effectType: 'ValidatorRule',
		name: 'Standard Doubles',
		desc: "The standard ruleset for all official Smogon doubles tiers",
		ruleset: ['Species Clause', 'Nickname Clause', 'OHKO Clause', 'Moody Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal'],
	},
	pokemon: {
		effectType: 'ValidatorRule',
		name: 'Pokemon',
		desc: "Applies the basic limitations of pokemon games: level 100, 6 pokemon, 4 moves - but does not include illegal move/ability validation",
		onValidateTeam(team, format) {
			let problems = [];
			if (team.length > 6) problems.push('Your team has more than six Pok\u00E9mon.');
			// ----------- legality line ------------------------------------------
			if (!format || !this.getRuleTable(format).has('-illegal')) return problems;
			// everything after this line only happens if we're doing legality enforcement
			let kyurems = 0;
			let ndm = 0;
			let ndw = 0;
			for (const set of team) {
				if (set.species === 'Kyurem-White' || set.species === 'Kyurem-Black') {
					if (kyurems > 0) {
						problems.push('You cannot have more than one Kyurem-Black/Kyurem-White.');
						break;
					}
					kyurems++;
				}
				if (set.species === 'Necrozma-Dusk-Mane') {
					if (ndm > 0) {
						problems.push('You cannot have more than one Necrozma-Dusk-Mane.');
						break;
					}
					ndm++;
				}
				if (set.species === 'Necrozma-Dawn-Wings') {
					if (ndw > 0) {
						problems.push('You cannot have more than one Necrozma-Dawn-Wings.');
						break;
					}
					ndw++;
				}
			}
			return problems;
		},
		onChangeSet(set, format) {
			let item = this.getItem(set.item);
			let template = this.getTemplate(set.species);
			let problems = [];
			let totalEV = 0;

			if (set.species === set.name) delete set.name;
			if (template.gen > this.gen) {
				problems.push(set.species + ' does not exist in gen ' + this.gen + '.');
			}
			if (template.gen && template.gen !== this.gen && template.tier === 'Illegal') {
				problems.push(set.species + ' does not exist outside of gen ' + template.gen + '.');
			}
			/**@type {Ability} */
			// @ts-ignore
			let ability = {};
			if (set.ability) {
				ability = this.getAbility(set.ability);
				if (ability.gen > this.gen) {
					problems.push(ability.name + ' does not exist in gen ' + this.gen + '.');
				}
			}
			if (set.moves) {
				for (const moveid of set.moves) {
					let move = this.getMove(moveid);
					if (move.gen > this.gen) {
						problems.push(move.name + ' does not exist in gen ' + this.gen + '.');
					}
				}
			}
			if (item.gen > this.gen) {
				problems.push(item.name + ' does not exist in gen ' + this.gen + '.');
			}
			if (set.moves && set.moves.length > 4) {
				problems.push((set.name || set.species) + ' has more than four moves.');
			}
			if (set.level && set.level > 100) {
				problems.push((set.name || set.species) + ' is higher than level 100.');
			}

			if (item.isNonstandard) {
				if (item.isNonstandard === 'Past' || item.isNonstandard === 'Future') {
					problems.push(item.name + ' does not exist in this generation.');
				}
			}

			if (set.evs) {
				for (let k in set.evs) {
					// @ts-ignore
					if (typeof set.evs[k] !== 'number' || set.evs[k] < 0) {
						// @ts-ignore
						set.evs[k] = 0;
					}
					// @ts-ignore
					totalEV += set.evs[k];
				}
			}

			// In gen 6, it is impossible to battle other players with pokemon that break the EV limit
			if (totalEV > 510 && this.gen === 6) {
				problems.push((set.name || set.species) + " has more than 510 total EVs.");
			}

			// ----------- legality line ------------------------------------------
			if (!this.getRuleTable(format).has('-illegal')) return problems;
			// everything after this line only happens if we're doing legality enforcement

			// only in gen 1 and 2 it was legal to max out all EVs
			if (this.gen >= 3 && totalEV > 510) {
				problems.push((set.name || set.species) + " has more than 510 total EVs.");
			}

			if (template.gender) {
				if (set.gender !== template.gender) {
					set.gender = template.gender;
				}
			} else {
				if (set.gender !== 'M' && set.gender !== 'F') {
					set.gender = '';
				}
			}

			// limit one of each move
			let moves = [];
			if (set.moves) {
				/**@type {{[k: string]: true}} */
				let hasMove = {};
				for (const moveId of set.moves) {
					let move = this.getMove(moveId);
					let moveid = move.id;
					if (hasMove[moveid]) continue;
					hasMove[moveid] = true;
					moves.push(moveId);
				}
			}
			set.moves = moves;

			let battleForme = template.battleOnly && template.species;
			if (battleForme) {
				if (template.requiredAbility && set.ability !== template.requiredAbility) {
					problems.push("" + template.species + " transforms in-battle with " + template.requiredAbility + "."); // Darmanitan-Zen, Zygarde-Complete
				}
				if (template.requiredItems) {
					if (template.species === 'Necrozma-Ultra') {
						problems.push(`Necrozma-Ultra must start the battle as Necrozma-Dawn-Wings or Necrozma-Dusk-Mane holding Ultranecrozium Z.`); // Necrozma-Ultra transforms from one of two formes, and neither one is the base forme
					} else if (!template.requiredItems.includes(item.name)) {
						problems.push(`${template.species} transforms in-battle with ${Chat.plural(template.requiredItems.length, "either ") + template.requiredItems.join(" or ")}.`); // Mega or Primal
					}
				}
				if (template.requiredMove && set.moves.indexOf(toID(template.requiredMove)) < 0) {
					problems.push(`${template.species} transforms in-battle with ${template.requiredMove}.`); // Meloetta-Pirouette, Rayquaza-Mega
				}
				if (!format.noChangeForme) set.species = template.baseSpecies; // Fix battle-only forme
			} else {
				if (template.requiredAbility && set.ability !== template.requiredAbility) {
					problems.push(`${(set.name || set.species)} needs the ability ${template.requiredAbility}.`); // No cases currently.
				}
				if (template.requiredItems && !template.requiredItems.includes(item.name)) {
					problems.push(`${(set.name || set.species)} needs to hold ${Chat.plural(template.requiredItems.length, "either ") + template.requiredItems.join(" or ")}.`); // Memory/Drive/Griseous Orb/Plate/Z-Crystal - Forme mismatch
				}
				if (template.requiredMove && set.moves.indexOf(toID(template.requiredMove)) < 0) {
					problems.push(`${(set.name || set.species)} needs to have the move ${template.requiredMove}.`); // Keldeo-Resolute
				}

				// Mismatches between the set forme (if not base) and the item signature forme will have been rejected already.
				// It only remains to assign the right forme to a set with the base species (Arceus/Genesect/Giratina/Silvally).
				if (item.forcedForme && template.species === this.getTemplate(item.forcedForme).baseSpecies && !format.noChangeForme) {
					set.species = item.forcedForme;
				}
			}

			if (template.species === 'Pikachu-Cosplay') {
				/**@type {{[k: string]: string}} */
				let cosplay = {meteormash: 'Pikachu-Rock-Star', iciclecrash: 'Pikachu-Belle', drainingkiss: 'Pikachu-Pop-Star', electricterrain: 'Pikachu-PhD', flyingpress: 'Pikachu-Libre'};
				for (const moveid of set.moves) {
					if (moveid in cosplay) {
						set.species = cosplay[moveid];
						break;
					}
				}
			}

			if (set.species !== template.species) {
				// Autofixed forme.
				template = this.getTemplate(set.species);

				if (!this.getRuleTable(format).has('ignoreillegalabilities') && !format.noChangeAbility) {
					// Ensure that the ability is (still) legal.
					let legalAbility = false;
					for (let i in template.abilities) {
						// @ts-ignore
						if (template.abilities[i] !== set.ability) continue;
						legalAbility = true;
						break;
					}
					if (!legalAbility) { // Default to first ability.
						set.ability = template.abilities['0'];
					}
				}
			}

			return problems;
		},
		banlist: [
			'Chansey + Charm + Seismic Toss', 'Chansey + Charm + Psywave',
			'Blissey + Charm + Seismic Toss', 'Blissey + Charm + Psywave',
			'Shiftry + Leaf Blade + Sucker Punch',
		],
	},
//USE THIS FOR ABILITIES
	teampreview: {
		effectType: 'Rule',
		name: 'Team Preview',
		desc: "Allows each player to see the Pok&eacute;mon on their opponent's team before they choose their lead Pok&eacute;mon",
		onBegin() {
			this.add('clearpoke');
			for (const pokemon of this.getAllPokemon()) {
				let details = pokemon.details.replace(/(Arceus|Gourgeist|Genesect|Pumpkaboo|Silvally)(-[a-zA-Z?]+)?/g, '$1-*').replace(', shiny', '');
				this.add('poke', pokemon.side.id, details, pokemon.item ? 'item' : '');
			}
		},
		onTeamPreview() {
			this.makeRequest('teampreview');
		},
	},
	littlecup: {
		effectType: 'ValidatorRule',
		name: 'Little Cup',
		desc: "Only allows Pok&eacute;mon that can evolve and don't have any prior evolutions",
		onValidateSet(set) {
			let template = this.getTemplate(set.species || set.name);
			if (template.prevo && this.getTemplate(template.prevo).gen <= this.gen) {
				return [set.species + " isn't the first in its evolution family."];
			}
			let futureGenEvo = template.evos && this.getTemplate(template.evos[0]).gen > this.gen;
			if (!template.nfe || futureGenEvo) {
				return [set.species + " doesn't have an evolution family."];
			}
		},
	},
	speciesclause: {
		effectType: 'ValidatorRule',
		name: 'Species Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon from the same species",
		onBegin() {
			this.add('rule', 'Species Clause: Limit one of each Pokémon');
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let speciesTable = {};
			for (const set of team) {
				let template = this.getTemplate(set.species);
				if (speciesTable[template.num]) {
					return ["You are limited to one of each Pokémon by Species Clause.", "(You have more than one " + template.baseSpecies + ")"];
				}
				speciesTable[template.num] = true;
			}
		},
	},
	nicknameclause: {
		effectType: 'ValidatorRule',
		name: 'Nickname Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon with the same nickname",
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let nameTable = {};
			for (const set of team) {
				let name = set.name;
				if (name) {
					if (name === this.getTemplate(set.species).baseSpecies) continue;
					if (nameTable[name]) {
						return ["Your Pokémon must have different nicknames.", "(You have more than one " + name + ")"];
					}
					nameTable[name] = true;
				}
			}
			// Illegality of impersonation of other species is
			// hardcoded in team-validator.js, so we are done.
		},
	},
	itemclause: {
		effectType: 'ValidatorRule',
		name: 'Item Clause',
		desc: "Prevents teams from having more than one Pok&eacute;mon with the same item",
		onBegin() {
			this.add('rule', 'Item Clause: Limit one of each item');
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: true}} */
			let itemTable = {};
			for (const set of team) {
				let item = toID(set.item);
				if (!item) continue;
				if (itemTable[item]) {
					return ["You are limited to one of each item by Item Clause.", "(You have more than one " + this.getItem(item).name + ")"];
				}
				itemTable[item] = true;
			}
		},
	},
	abilityclause: {
		effectType: 'ValidatorRule',
		name: 'Ability Clause',
		desc: "Prevents teams from having more than two Pok&eacute;mon with the same ability",
		onBegin() {
			this.add('rule', 'Ability Clause: Limit two of each ability');
		},
		onValidateTeam(team, format) {
			/**@type {{[k: string]: number}} */
			let abilityTable = {};
			/**@type {{[k: string]: string}} */
			let base = {
				airlock: 'cloudnine',
				clearbody: 'whitesmoke',
				dazzling: 'queenlymajesty',
				gooey: 'tanglinghair',
				insomnia: 'vitalspirit',
				ironbarbs: 'roughskin',
				minus: 'plus',
				powerofalchemy: 'receiver',
				teravolt: 'moldbreaker',
				turboblaze: 'moldbreaker',
			};
			for (const set of team) {
				let ability = toID(set.ability);
				if (!ability) continue;
				if (ability in base) ability = /** @type {ID} */(base[ability]);
				if (ability in abilityTable) {
					if (abilityTable[ability] >= 2) {
						return ["You are limited to two of each ability by the Ability Clause.", `(You have more than two ${this.getAbility(ability).name} variants)`];
					}
					abilityTable[ability]++;
				} else {
					abilityTable[ability] = 1;
				}
			}
		},
	},
	ohkoclause: {
		effectType: 'ValidatorRule',
		name: 'OHKO Clause',
		desc: "Bans all OHKO moves, such as Fissure",
		onBegin() {
			this.add('rule', 'OHKO Clause: OHKO moves are banned');
		},
		onValidateSet(set) {
			let problems = [];
			if (set.moves) {
				for (const moveId of set.moves) {
					let move = this.getMove(moveId);
					if (move.ohko) problems.push(move.name + ' is banned by OHKO Clause.');
				}
			}
			return problems;
		},
	},
	endlessbattleclause: {
		effectType: 'Rule',
		name: 'Endless Battle Clause',
		desc: "Prevents players from forcing a battle which their opponent cannot end except by forfeit",
		// implemented in sim/battle.js, see https://dex.pokemonshowdown.com/articles/battlerules#endlessbattleclause for the specification.
		onBegin() {
			this.add('rule', 'Endless Battle Clause: Forcing endless battles is banned');
		},
	},
	moodyclause: {
		effectType: 'ValidatorRule',
		name: 'Moody Clause',
		desc: "Bans the ability Moody",
		banlist: ['Moody'],
		onBegin() {
			this.add('rule', 'Moody Clause: Moody is banned');
		},
	},
	cfzclause: {
		effectType: 'ValidatorRule',
		name: 'CFZ Clause',
		desc: "Bans the use of crystal-free Z-Moves",
		banlist: ['10,000,000 Volt Thunderbolt', 'Acid Downpour', 'All-Out Pummeling', 'Black Hole Eclipse', 'Bloom Doom', 'Breakneck Blitz', 'Catastropika', 'Clangorous Soulblaze', 'Continental Crush', 'Corkscrew Crash', 'Devastating Drake', 'Extreme Evoboost', 'Genesis Supernova', 'Gigavolt Havoc', 'Guardian of Alola', 'Hydro Vortex', 'Inferno Overdrive', 'Let\'s Snuggle Forever', 'Light That Burns the Sky', 'Malicious Moonsault', 'Menacing Moonraze Maelstrom', 'Never-Ending Nightmare', 'Oceanic Operetta', 'Pulverizing Pancake', 'Savage Spin-Out', 'Searing Sunraze Smash', 'Shattered Psyche', 'Sinister Arrow Raid', 'Soul-Stealing 7-Star Strike', 'Splintered Stormshards', 'Stoked Sparksurfer', 'Subzero Slammer', 'Supersonic Skystrike', 'Tectonic Rage', 'Twinkle Tackle'],
		onBegin() {
			this.add('rule', 'CFZ Clause: Crystal-free Z-Moves are banned');
		},
	},
	zmoveclause: {
		effectType: 'ValidatorRule',
		name: 'Z-Move Clause',
		desc: "Bans Pok&eacute;mon from holding Z-Crystals",
		onValidateSet(set) {
			const item = this.getItem(set.item);
			if (item.zMove) return [`${set.name || set.species}'s item ${item.name} is banned by Z-Move Clause.`];
		},
		onBegin() {
			this.add('rule', 'Z-Move Clause: Z-Moves are banned');
		},
	},
	hppercentagemod: {
		effectType: 'Rule',
		name: 'HP Percentage Mod',
		desc: "Shows the HP of Pok&eacute;mon in percentages",
		onBegin() {
			this.add('rule', 'HP Percentage Mod: HP is shown in percentages');
			this.reportPercentages = true;
		},
	},
	exacthpmod: {
		effectType: 'Rule',
		name: 'Exact HP Mod',
		desc: "Shows the exact HP of all Pok&eacute;mon",
		onBegin() {
			this.add('rule', 'Exact HP Mod: Exact HP is shown');
			this.reportExactHP = true;
		},
	},
	cancelmod: {
		effectType: 'Rule',
		name: 'Cancel Mod',
		desc: "Allows players to change their own choices before their opponents make one",
		onBegin() {
			this.supportCancel = true;
		},
	},
	sleepclausemod: {
		effectType: 'Rule',
		name: 'Sleep Clause Mod',
		desc: "Prevents players from putting more than one of their opponent's Pok&eacute;mon to sleep at a time, and bans Mega Gengar from using Hypnosis",
		banlist: ['Hypnosis + Gengarite'],
		onBegin() {
			this.add('rule', 'Sleep Clause Mod: Limit one foe put to sleep');
		},
		onSetStatus(status, target, source) {
			if (source && source.side === target.side) {
				return;
			}
			if (status.id === 'slp') {
				for (const pokemon of target.side.pokemon) {
					if (pokemon.hp && pokemon.status === 'slp') {
						if (!pokemon.statusData.source || pokemon.statusData.source.side !== pokemon.side) {
							this.add('-message', 'Sleep Clause Mod activated.');
							return false;
						}
					}
				}
			}
		},
	},
	switchpriorityclausemod: {
		effectType: 'Rule',
		name: 'Switch Priority Clause Mod',
		desc: "Makes a faster Pokémon switch first when double-switching, unlike in Emerald link battles, where player 1's Pokémon would switch first",
		onBegin() {
			this.add('rule', 'Switch Priority Clause Mod: Faster Pokémon switch first');
		},
	},
	freezeclausemod: {
		effectType: 'Rule',
		name: 'Freeze Clause Mod',
		desc: "Prevents players from freezing more than one of their opponent's Pok&eacute;mon at a time",
		onBegin() {
			this.add('rule', 'Freeze Clause Mod: Limit one foe frozen');
		},
		onSetStatus(status, target, source) {
			if (source && source.side === target.side) {
				return;
			}
			if (status.id === 'frz') {
				for (const pokemon of target.side.pokemon) {
					if (pokemon.status === 'frz') {
						this.add('-message', 'Freeze Clause activated.');
						return false;
					}
				}
			}
		},
	},
	sametypeclause: {
		effectType: 'ValidatorRule',
		name: 'Same Type Clause',
		desc: "Forces all Pok&eacute;mon on a team to share a type with each other",
		onBegin() {
			this.add('rule', 'Same Type Clause: Pokémon in a team must share a type');
		},
		onValidateTeam(team) {
			/**@type {string[]} */
			let typeTable;
			for (const [i, set] of team.entries()) {
				let template = this.getTemplate(set.species);
				if (!template.types) return [`Invalid pokemon ${set.name || set.species}`];
				if (i === 0) {
					typeTable = template.types;
				} else {
					// @ts-ignore
					typeTable = typeTable.filter(type => template.types.includes(type));
				}
				if (this.gen >= 7) {
					let item = this.getItem(set.item);
					if (item.megaStone && template.species === item.megaEvolves) {
						template = this.getTemplate(item.megaStone);
						typeTable = typeTable.filter(type => template.types.includes(type));
					}
					if (item.id === "ultranecroziumz" && template.baseSpecies === "Necrozma") {
						template = this.getTemplate("Necrozma-Ultra");
						typeTable = typeTable.filter(type => template.types.includes(type));
					}
				}
				if (!typeTable.length) return [`Your team must share a type.`];
			}
		},
	},
	megarayquazaclause: {
		effectType: 'Rule',
		name: 'Mega Rayquaza Clause',
		desc: "Prevents Rayquaza from mega evolving",
		onBegin() {
			this.add('rule', 'Mega Rayquaza Clause: You cannot mega evolve Rayquaza');
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.speciesid === 'rayquaza') pokemon.canMegaEvo = null;
			}
		},
	},
	inversemod: {
		effectType: 'Rule',
		name: 'Inverse Mod',
		desc: "The mod for Inverse Battle which inverts the type effectiveness chart; weaknesses become resistances, while resistances and immunities become weaknesses",
		onNegateImmunity: false,
		onBegin() {
			this.add('rule', 'Inverse Mod: Weaknesses become resistances, while resistances and immunities become weaknesses.');
		},
		onEffectiveness(typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	ignoreillegalabilities: {
		effectType: 'ValidatorRule',
		name: 'Ignore Illegal Abilities',
		desc: "Allows Pok&eacute;mon to use any ability",
		// Implemented in the 'pokemon' ruleset and in team-validator.js
	},
	stabmonsmovelegality: {
		effectType: 'ValidatorRule',
		name: 'STABmons Move Legality',
		desc: "Allows Pok&eacute;mon to use any move that they or a previous evolution/out-of-battle forme share a type with",
		checkLearnset(move, template, lsetData, set) {
			const restrictedMoves = this.format.restrictedMoves || [];
			if (!move.isZ && !restrictedMoves.includes(move.name)) {
				let dex = this.dex;
				let types = template.types;
				let baseTemplate = dex.getTemplate(template.baseSpecies);
				if (template.prevo) types = types.concat(dex.getTemplate(dex.getTemplate(template.prevo).prevo || template.prevo).types);
				if (baseTemplate.otherFormes) {
					for (const formeid of baseTemplate.otherFormes) {
						let forme = dex.getTemplate(formeid);
						if (!forme.battleOnly) {
							if (forme.forme !== 'Alola' && forme.forme !== 'Alola-Totem' && forme.baseSpecies !== 'Wormadam') {
								types = types.concat(forme.types).concat(baseTemplate.types);
							}
						}
					}
				}
				if (types.includes(move.type)) return null;
			}
			return this.checkLearnset(move, template, lsetData, set);
		},
		unbanlist: ['Shiftry + Leaf Blade + Sucker Punch'],
	},
	allowtradeback: {
		effectType: 'ValidatorRule',
		name: 'Allow Tradeback',
		desc: "Allows Gen 1 pokemon to have moves from their Gen 2 learnsets",
		// Implemented in team-validator.js
	},
};

exports.BattleFormats = BattleFormats;
