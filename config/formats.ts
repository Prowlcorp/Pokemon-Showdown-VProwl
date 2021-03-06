// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// US/UM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "US/UM Singles",
		column: 1,
	},
	{
		name: "Custom Game",

		debug: true,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		teamLength: {
			validate: [1, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "1v1",
		mod: 'gen999',
		desc: `Bring three Pok&eacute;mon to Team Preview and choose one to battle.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/posts/8031460/">USUM 1v1</a>`,
		],

		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Species Clause', 'Nickname Clause', 'OHKO Clause', 'Swagger Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Endless Battle Clause'],
		banlist: [
			'Arceus', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Deoxys-Defense', 'Dialga', 'Giratina',
			'Groudon', 'Ho-Oh', 'Kangaskhan-Mega', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo',
			'Mimikyu', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Shaymin-Sky',
			'Snorlax', 'Solgaleo', 'Tapu Koko', 'Xerneas', 'Yveltal', 'Zekrom', 'Focus Sash', 'Moody', 'Perish Song', 'Detect + Fightinium Z',
		],
	},
	{
		name: "Battle Spot Singles",
		mod: 'gen999',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601012/">Introduction to Battle Spot Singles</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3605970/">Battle Spot Singles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3601658/">Battle Spot Singles Role Compendium</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3619162/">Battle Spot Singles Sample Teams</a>`,
		],

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Standard GBU'],
	},

	// US/UM Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "US/UM Doubles",
		column: 1,
	},
	{
		name: "Doubles Custom Game",

		gameType: 'doubles',
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [2, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "Triples Custom Game",

		gameType: 'triples',
		searchShow: false,
		maxLevel: 9999,
		battle: {trunc: Math.trunc},
		defaultLevel: 100,
		debug: true,
		teamLength: {
			validate: [3, 24],
			battle: 24,
		},
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "Battle Spot Doubles",
		mod: 'gen999',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595001/">Battle Spot Doubles Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3593890/">Battle Spot Doubles Viability Rankings</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3595859/">Battle Spot Doubles Sample Teams</a>`,
		],

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU'],
	},
	{
		name: "Battle Spot Triples",
		mod: 'gen999',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3533914/">ORAS Battle Spot Triples Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3549201/">ORAS BST Viability Rankings</a>`,
		],

		gameType: 'triples',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Standard GBU'],
	},
	{
		name: "2v2 Doubles",
		mod: 'gen999',
		desc: `Double battle where you bring four Pok&eacute;mon to Team Preview and choose only two.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656321/">2v2 Doubles</a>`,
		],

		gameType: 'doubles',
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['Standard Doubles', 'Sleep Clause Mod'],
		banlist: [
			'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Jirachi', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Magearna', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Focus Sash', 'Power Construct', 'Final Gambit', 'Perish Song', 'Swagger',
		],
	},
	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "Mix and Mega",
		desc: `Mega evolve any Pok&eacute;mon with any mega stone and no limit. Boosts based on mega evolution.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656469/">Mix and Mega</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3659028/">M&amp;M Resources</a>`,
		],

		mod: 'mixandmega',
		ruleset: ['Species Clause', 'Nickname Clause', 'OHKO Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Kyogre', 'Zacian-Crowned',
			'Beedrillite', 'Blazikenite', 'Gengarite', 'Kangaskhanite', 'Mawilite', 'Medichamite', 'Pidgeotite',
			'Moody', 'Shadow Tag', 'Baton Pass', 'Electrify',
		],
		restricted: [
			'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-Black', 'Kyurem-White',
			'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Regigigas', 'Reshiram', 'Xerneas', 'Yveltal', 'Zacian', 'Zekrom', 'Zygarde-Complete',
		],
		onValidateTeam(team) {
			const itemTable = new Set<ID>();
			for (const set of team) {
				const item = this.dex.getItem(set.item);
				if (!item || !item.megaStone) continue;
				const species = this.dex.getSpecies(set.species);
				if (this.ruleTable.isRestrictedSpecies(species) || this.toID(set.ability) === 'powerconstruct') {
					return [`${species.name} is not allowed to hold ${item.name}.`];
				}
				if (itemTable.has(item.id)) {
					return [`You are limited to one of each mega stone.`, `(You have more than one ${item.name})`];
				}
				itemTable.add(item.id);
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.m.originalSpecies = pokemon.baseSpecies.name;
			}
		},
		onSwitchIn(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
				const oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
				if (oSpecies.types.length !== pokemon.species.types.length || oSpecies.types[1] !== pokemon.species.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut(pokemon) {
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(pokemon.species.originalMega);
			if (oMegaSpecies.exists && pokemon.m.originalSpecies !== oMegaSpecies.baseSpecies) {
				this.add('-end', pokemon, oMegaSpecies.requiredItem || oMegaSpecies.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "Almost Any Ability",
		mod: 'gen999',
		desc: `Pok&eacute;mon have access to almost any ability.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656414/">Almost Any Ability</a>`,
		],

		ruleset: ['Species Clause', 'Nickname Clause', '2 Ability Clause', 'OHKO Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Dialga', 'Dracovish', 'Giratina', 'Groudon', 'Ho-Oh', 'Kartana', 'Keldeo', 'Kyogre', 'Kyurem-Black',
			'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia', 'Pheromosa', 'Rayquaza',
			'Regigigas', 'Reshiram', 'Shedinja', 'Solgaleo', 'Urshifu', 'Urshifu-Rapid-Strike', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Comatose', 'Contrary', 'Fluffy', 'Fur Coat', 'Huge Power', 'Ice Scales', 'Illusion', 'Imposter', 'Innards Out', 'Intrepid Sword', 'Libero',
			'Moody', 'Neutralizing Gas', 'Parental Bond', 'Power Construct', 'Protean', 'Pure Power', 'Shadow Tag', 'Simple', 'Stakeout', 'Speed Boost', 'Water Bubble', 'Wonder Guard',
			'Baton Pass',
		],
	},
	{
		name: "STABmons",
		mod: 'gen999',
		desc: `Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656429/">STABmons</a>`,
		],

		ruleset: ['Standard', 'STABmons Move Legality'],
		banlist: [
			'Dialga', 'Dracovish', 'Dragapult', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh',
			'Kartana', 'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Landorus-Base', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Pheromosa', 'Porygon-Z', 'Rayquaza', 'Reshiram', 'Silvally', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'King\'s Rock', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		restricted: [
			'Acupressure', 'Belly Drum', 'Bolt Beak', 'Electrify', 'Extreme Speed', 'Fishious Rend',
			'Geomancy', 'Lovely Kiss', 'Shell Smash', 'Shift Gear', 'Spore', 'Thousand Arrows', 'V-create', 'Wicked Blow',
		],
	},
	{
		name: "Cross Evolution",
		mod: 'gen999',
		desc: `Give a Pok&eacute;mon a Pok&eacute;mon name of the next evolution stage as a nickname to inherit stat changes, typing, abilities, and stats, from the next stage Pok&eacute;mon.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657562/">Cross Evolution</a>`,
		],

		ruleset: ['Standard'],
		banlist: ['Sneasel', 'Type: Null', 'Arena Trap', 'Ice Scales', 'Moody', 'Baton Pass', 'King\'s Rock'],
		restricted: ['Chansey', 'Lunala', 'Shedinja', 'Solgaleo', 'Huge Power', 'Pure Power', 'Shadow Tag'],
		onValidateTeam(team) {
			const names = new Set<ID>();
			for (const set of team) {
				const name = set.name;
				if (names.has(this.dex.toID(name))) {
					return [
						`Your Pok\u00e9mon must have different nicknames.`,
						`(You have more than one Pok\u00e9mon named '${name}')`,
					];
				}
				names.add(this.dex.toID(name));
			}
			if (!names.size) {
				return [
					`${this.format.name} works using nicknames; your team has 0 nicknamed Pok\u00e9mon.`,
					`(If this was intentional, add a nickname to one Pok\u00e9mon that isn't the name of a Pok\u00e9mon species.)`,
				];
			}
		},
		checkLearnset(move, species, lsetData, set) {
			// @ts-ignore
			if (!set.sp || !set.sp.exists || !set.crossSpecies || !set.crossSpecies.exists) {
				return this.checkLearnset(move, species, lsetData, set);
			}
			// @ts-ignore
			const problem = this.checkLearnset(move, set.sp);
			if (!problem) return null;
			// @ts-ignore
			if (!set.crossMovesLeft) return problem;
			// @ts-ignore
			if (this.checkLearnset(move, set.crossSpecies)) return problem;
			// @ts-ignore
			set.crossMovesLeft--;
			return null;
		},
		validateSet(set, teamHas) {
			const crossSpecies = this.dex.getSpecies(set.name);
			const onChangeSet = this.dex.getFormat('Pokemon').onChangeSet;
			let problems = onChangeSet ? onChangeSet.call(this, set, this.format) : null;
			if (Array.isArray(problems) && problems.length) return problems;
			if (!crossSpecies.exists) return this.validateSet(set, teamHas);
			const species = this.dex.getSpecies(set.species);
			const check = this.checkSpecies(set, species, species, {});
			if (check) return [check];
			if (!species.exists || species === crossSpecies) return this.validateSet(set, teamHas);
			if (!species.nfe) return [`${species.name} cannot cross evolve because it doesn't evolve.`];
			if (crossSpecies.battleOnly || !crossSpecies.prevo) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it isn't an evolution.`];
			}
			if (this.ruleTable.isRestrictedSpecies(crossSpecies)) {
				return [`${species.name} cannot cross evolve into ${crossSpecies.name} because it is banned.`];
			}
			const crossPrevoSpecies = this.dex.getSpecies(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) {
				return [
					`${species.name} cannot cross evolve into ${crossSpecies.name} because they are not consecutive evolution stages.`,
				];
			}
			const ability = this.dex.getAbility(set.ability);
			if (!this.ruleTable.isRestricted(`ability:${ability.id}`) || Object.values(species.abilities).includes(ability.name)) {
				set.species = crossSpecies.name;
			}

			// @ts-ignore
			set.sp = species;
			// @ts-ignore
			set.crossSpecies = crossSpecies;
			// @ts-ignore
			set.crossMovesLeft = 2;
			problems = this.validateSet(set, teamHas);
			set.name = crossSpecies.name;
			set.species = species.name;
			return problems;
		},
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // chat
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.set.name === target.set.species) return;
			const crossSpecies = this.dex.getSpecies(target.set.name);
			if (!crossSpecies.exists) return;
			if (species.battleOnly || !species.nfe) return;
			if (crossSpecies.battleOnly || !crossSpecies.prevo) return;
			const crossPrevoSpecies = this.dex.getSpecies(crossSpecies.prevo);
			if (!crossPrevoSpecies.prevo !== !species.prevo) return;

			const mixedSpecies = this.dex.deepClone(species);
			mixedSpecies.baseSpecies = mixedSpecies.name = `${species.name}-${crossSpecies.name}`;
			mixedSpecies.weightkg =
				Math.max(0.1, +(species.weightkg + crossSpecies.weightkg - crossPrevoSpecies.weightkg)).toFixed(1);
			mixedSpecies.nfe = false;
			mixedSpecies.evos = [];
			mixedSpecies.eggGroups = crossSpecies.eggGroups;
			mixedSpecies.abilities = crossSpecies.abilities;
			let i: StatName;
			for (i in species.baseStats) {
				const statChange = crossSpecies.baseStats[i] - crossPrevoSpecies.baseStats[i];
				mixedSpecies.baseStats[i] = this.clampIntRange(species.baseStats[i] + statChange, 1, 255);
			}
			if (crossSpecies.types[0] !== crossPrevoSpecies.types[0]) mixedSpecies.types[0] = crossSpecies.types[0];
			if (crossSpecies.types[1] !== crossPrevoSpecies.types[1]) {
				mixedSpecies.types[1] = crossSpecies.types[1] || crossSpecies.types[0];
			}
			if (mixedSpecies.types[0] === mixedSpecies.types[1]) mixedSpecies.types = [mixedSpecies.types[0]];

			return mixedSpecies;
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				pokemon.baseSpecies = pokemon.species;
			}
		},
	},
	{
		name: "Godly Gift",
		desc: `Each Pok&eacute;mon receives one base stat from a "God" depending on its position in the team. If there is no "God", it uses the Pok&eacute;mon in the first slot.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660461/">Godly Gift</a>`,
		],

		mod: 'gen999',
		ruleset: ['Standard'],
		banlist: ['Blissey', 'Chansey', 'Toxapex', 'Arena Trap', 'Huge Power', 'Moody', 'Pure Power', 'Shadow Tag', 'Baton Pass'],
		onModifySpecies(species, target, source) {
			if (source || !target || !target.side) return;
			const god = target.side.team.find(set => {
				let godSpecies = this.dex.getSpecies(set.species);
				const validator = this.dex.getRuleTable(this.dex.getFormat(`gen${this.gen}`));
				if (this.toID(set.ability) === 'powerconstruct') {
					return true;
				}
				if (set.item) {
					const item = this.dex.getItem(set.item);
					if (item.megaEvolves === set.species) godSpecies = this.dex.getSpecies(item.megaStone);
				}
				return validator.isBannedSpecies(godSpecies);
			}) || target.side.team[0];
			const stat = ['hp', 'atk', 'def', 'spa', 'spd', 'spe'][target.side.team.indexOf(target.set)];
			const newSpecies = this.dex.deepClone(species);
			let godSpecies = this.dex.getSpecies(god.species);
			if (godSpecies.forme === 'Crowned') {
				godSpecies = this.dex.getSpecies(godSpecies.changesFrom || godSpecies.baseSpecies);
			}
			newSpecies.baseStats[stat] = godSpecies.baseStats[stat as StatName];
			return newSpecies;
		},
	},
	{
		name: "Inheritance",
		mod: 'gen999',
		desc: `Pok&eacute;mon may use the ability and moves of another, as long as they forfeit their own learnset.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656811/">Inheritance</a>`,
		],

		ruleset: ['Standard'],
		banlist: [
			'Dialga', 'Dracovish', 'Giratina', 'Groudon', 'Kartana', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Palkia',
			'Rayquaza', 'Regigigas', 'Reshiram', 'Shedinja', 'Solgaleo', 'Urshifu-Base', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Moody', 'Pure Power', 'Shadow Tag', 'Simple', 'Water Bubble',
			'Baton Pass', 'Bolt Beak', 'Fishious Rend', 'Shell Smash',
		],
		restricted: ['Blaziken', 'Torkoal', 'Toxtricity'],
		getEvoFamily(speciesid) {
			let species = Dex.getSpecies(speciesid);
			while (species.prevo) {
				species = Dex.getSpecies(species.prevo);
			}
			return species.id;
		},
		validateSet(set, teamHas) {
			if (!teamHas.abilityMap) {
				teamHas.abilityMap = Object.create(null);
				for (const speciesid in Dex.data.Pokedex) {
					const pokemon = this.dex.getSpecies(speciesid);
					if (pokemon.requiredAbility || pokemon.requiredItem || pokemon.requiredMove) continue;
					if (this.ruleTable.isRestrictedSpecies(pokemon)) continue;

					for (const key of Object.values(pokemon.abilities)) {
						const abilityId = this.dex.toID(key);
						if (abilityId in teamHas.abilityMap) {
							teamHas.abilityMap[abilityId][pokemon.evos ? 'push' : 'unshift'](speciesid);
						} else {
							teamHas.abilityMap[abilityId] = [speciesid];
						}
					}
				}
			}

			const problem = this.validateForme(set);
			if (problem.length) return problem;

			const species = this.dex.getSpecies(set.species);
			if (!species.exists || species.num < 1) return [`The Pok\u00e9mon "${set.species}" does not exist.`];

			const name = set.name;
			if (this.ruleTable.isBannedSpecies(species)) {
				return this.validateSet(set, teamHas);
			}

			const ability = this.dex.getAbility(set.ability);
			if (!ability.exists) return [`${name} needs to have a valid ability.`];
			const pokemonWithAbility = teamHas.abilityMap[ability.id];
			if (!pokemonWithAbility) return [`${this.dex.getAbility(set.ability).name} is not available on a legal Pok\u00e9mon.`];

			// @ts-ignore
			this.format.debug = true;

			if (!teamHas.abilitySources) teamHas.abilitySources = Object.create(null);
			const validSources: string[] = teamHas.abilitySources[this.dex.toID(set.species)] = []; // Evolution families

			let canonicalSource = ''; // Specific for the basic implementation of Donor Clause (see onValidateTeam).

			for (const donor of pokemonWithAbility) {
				const donorSpecies = this.dex.getSpecies(donor);
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.getFormat('inheritance');
				const evoFamily = format.getEvoFamily!(donorSpecies.id);
				if (validSources.includes(evoFamily)) continue;

				set.species = donorSpecies.name;
				set.name = donorSpecies.baseSpecies;
				const problems = this.validateSet(set, teamHas) || [];
				if (!problems.length) {
					validSources.push(evoFamily);
					canonicalSource = donorSpecies.name;
				}
				// Specific for the basic implementation of Donor Clause (see onValidateTeam).
				if (validSources.length > 1) break;
			}
			// @ts-ignore
			this.format.debug = false;

			set.name = name;
			set.species = species.name;
			if (!validSources.length) {
				if (pokemonWithAbility.length > 1) return [`${name}'s set is illegal.`];
				return [`${name} has an illegal set with an ability from ${this.dex.getSpecies(pokemonWithAbility[0]).name}.`];
			}

			// Protocol: Include the data of the donor species in the `ability` data slot.
			// Afterwards, we are going to reset the name to what the user intended.
			set.ability = `${set.ability}0${canonicalSource}`;
			return null;
		},
		onValidateTeam(team, f, teamHas) {
			// Donor Clause
			const evoFamilyLists = [];
			for (const set of team) {
				const abilitySources = teamHas.abilitySources?.[this.dex.toID(set.species)];
				if (!abilitySources) continue;
				let format = this.format;
				if (!format.getEvoFamily) format = this.dex.getFormat('inheritance');
				evoFamilyLists.push(abilitySources.map(format.getEvoFamily!));
			}

			// Checking actual full incompatibility would require expensive algebra.
			// Instead, we only check the trivial case of multiple Pokémon only legal for exactly one family. FIXME?
			const requiredFamilies = Object.create(null);
			for (const evoFamilies of evoFamilyLists) {
				if (evoFamilies.length !== 1) continue;
				const [familyId] = evoFamilies;
				if (!(familyId in requiredFamilies)) requiredFamilies[familyId] = 1;
				requiredFamilies[familyId]++;
				if (requiredFamilies[familyId] > 2) {
					return [
						`You are limited to up to two inheritances from each evolution family by the Donor Clause.`,
						`(You inherit more than twice from ${this.dex.getSpecies(familyId).name}).`,
					];
				}
			}
		},
		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.baseAbility.includes('0')) {
					const donor = pokemon.baseAbility.split('0')[1];
					pokemon.m.donor = this.toID(donor);
					pokemon.baseAbility = this.toID(pokemon.baseAbility.split('0')[0]);
					pokemon.ability = pokemon.baseAbility;
				}
			}
		},
		onSwitchIn(pokemon) {
			if (!pokemon.m.donor) return;
			const donorTemplate = this.dex.getSpecies(pokemon.m.donor);
			if (!donorTemplate.exists) return;
			// Place volatiles on the Pokémon to show the donor details.
			this.add('-start', pokemon, donorTemplate.name, '[silent]');
		},
	},
	{
		name: "Shared Power",
		mod: 'gen999',
		desc: `Once a Pok&eacute;mon switches in, its ability is shared with the rest of the team.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3660877/">Shared Power</a>`,
		],

		ruleset: ['Standard'],
		banlist: [
			'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Toxapex', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Contrary', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Electric Surge ++ Surge Surfer',
			'Flare Boost', 'Fur Coat', 'Guts', 'Harvest', 'Huge Power', 'Imposter', 'Innards Out', 'Libero', 'Magic Bounce',
			'Magic Guard', 'Mold Breaker', 'Moody', 'Neutralizing Gas', 'Power Construct', 'Regenerator ++ Emergency Exit',
			'Sand Rush', 'Sand Veil', 'Shadow Tag', 'Simple', 'Slush Rush', 'Snow Cloak',
			'Speed Boost', 'Tinted Lens', 'Unaware', 'Unburden', 'Water Bubble',
			'Leppa Berry', 'Baton Pass',
		],
		getSharedPower(pokemon) {
			const sharedPower = new Set<string>();
			for (const ally of pokemon.side.pokemon) {
				if (ally.previouslySwitchedIn > 0) {
					if (['mirrorarmor', 'trace'].includes(ally.baseAbility)) continue;
					sharedPower.add(ally.baseAbility);
				}
			}
			sharedPower.delete(pokemon.baseAbility);
			return sharedPower;
		},
		onBeforeSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				pokemon.volatiles[effect] = {id: this.toID(effect), target: pokemon};
			}
		},
		onSwitchInPriority: 2,
		onSwitchIn(pokemon) {
			let format = this.format;
			if (!format.getSharedPower) format = this.dex.getFormat('sharedpower');
			for (const ability of format.getSharedPower!(pokemon)) {
				const effect = 'ability:' + ability;
				delete pokemon.volatiles[effect];
				pokemon.addVolatile(effect);
			}
		},
		field: {
			suppressingWeather() {
				for (const side of this.battle.sides) {
					for (const pokemon of side.active) {
						if (pokemon && !pokemon.ignoringAbility() && pokemon.hasAbility('Cloud Nine')) {
							return true;
						}
					}
				}
				return false;
			},
		},
		pokemon: {
			hasAbility(ability) {
				if (this.ignoringAbility()) return false;
				if (Array.isArray(ability)) return ability.some(abil => this.hasAbility(abil));
				const abilityid = this.battle.toID(ability);
				return this.ability === abilityid || !!this.volatiles['ability:' + abilityid];
			},
		},
	},
	{
		name: "Camomons",
		mod: 'gen999',
		desc: `Pok&eacute;mon change type to match their first two moves.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656413/">Camomons</a>`,
		],

		ruleset: ['Species Clause', 'Nickname Clause', 'OHKO Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Sleep Clause Mod', 'Endless Battle Clause'],
		banlist: [
			'Dialga', 'Dragonite', 'Giratina', 'Groudon', 'Ho-Oh', 'Kartana',
			'Kyogre', 'Kyurem-Black', 'Kyurem-White', 'Lugia', 'Lunala', 'Marshadow', 'Mewtwo', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane',
			'Palkia', 'Rayquaza', 'Reshiram', 'Shedinja', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zacian', 'Zamazenta', 'Zekrom',
			'Arena Trap', 'Moody', 'Power Construct', 'Shadow Tag', 'Baton Pass',
		],
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		},
	},
	{
		name: "NFE",
		mod: 'gen999',
		desc: `Only Pok&eacute;mon that can evolve are allowed.`,
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656332/">NFE Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657558/">NFE Resources</a>`,
		],

		ruleset: ['Not Fully Evolved', 'Standard'],
		banlist: [
			'Chansey', 'Doublade', 'Magneton', 'Porygon2', 'Rhydon', 'Scyther', 'Sneasel', 'Type: Null',
			'Arena Trap', 'Shadow Tag', 'Baton Pass',
		],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
/*	{
		name: "Challenge Cup 1v1",
		mod: 'gen999',

		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "Challenge Cup 2v2",
		mod: 'gen999',

		team: 'randomCC',
		gameType: 'doubles',
		teamLength: {
			battle: 2,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},*/
	{
		name: 'Metronome Battle',
		mod: 'gen999',
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3632075/">Metronome Battle</a>`,
		],

		gameType: 'doubles',
		// rated: false,
		teamLength: {
			validate: [2, 2],
			battle: 2,
		},
		ruleset: ['HP Percentage Mod', 'Cancel Mod'],
		banlist: [//Anything that: Changes stats multiple times, powers up permanently, multi attacks, heals, negates, or changes weather
			'Alluring Garden', 'Battle Bond', 'Bijuu Boost', 'Cheek Pouch', 'Crisis Evolution', 'Cursed Body', 'Dry Skin', 'Fluffy', 'Fur Coat',
			'Grassy Surge', 'Huge Power', 'Ice Body', 'Iron Barbs', 'Libero', 'Molten Scale', 'Moody', 'Neutralizing Gas', 'Otherworld Lure', 'Parental Bond', 'Poison Heal',
			'Power Construct', 'Pressure', 'Protean', 'Pure Power', 'Rain Dish', 'Rough Skin', 'Sand Defense', 'Sand Spit', 'Sand Stream', 'Shadow Strike (Sealed)', 'Snow Warning', 'Stamina', 'Super Brain',
			'Volt Absorb', 'Volt Conduit', 'Water Absorb', 'Wonder Guard', 'Abomasite', 'Aguav Berry', 'Assault Vest', 'Berry Juice', 'Berserk Gene',
			'Black Sludge', 'Enigma Berry', 'Figy Berry', 'Iapapa Berry', 'Kangaskhanite', 'Leftovers', 'Mago Berry', 'Medichamite',
			'Oran Berry', 'Rocky Helmet', 'Shell Bell', 'Sitrus Berry', 'Wiki Berry', 'Harvest + Jaboca Berry', 'Harvest + Rowap Berry',
		],
		onValidateSet(set) {
			const species = this.dex.getSpecies(set.species);
			if (species.types.includes('Steel')) {
				return [`${species.name} is a Steel-type, which is banned from Metronome Battle.`];
			}
			if (species.bst > 625) {
				return [`${species.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`];
			}
			const item = this.dex.getItem(set.item);
			if (set.item && item.megaStone) {
				const megaSpecies = this.dex.getSpecies(item.megaStone);
				if (species.baseSpecies === item.megaEvolves && megaSpecies.bst > 625) {
					return [
						`${set.name || set.species}'s item ${item.name} is banned.`, `(Pok\u00e9mon with a BST higher than 625 are banned)`,
					];
				}
			}
			if (set.moves.length !== 1 || this.dex.getMove(set.moves[0]).id !== 'metronome') {
				return [`${set.name || set.species} has illegal moves.`, `(Pok\u00e9mon can only have one Metronome in their moveset)`];
			}
		},
	},
	// Special Modes
	///////////////////////////////////////////////////////////////////
	{
		section: "Special Modes",
		column: 3,
	},
	{
		name: "Abandoned Plant (Dungeon)",
		desc: `Special field: Paralysis and damage`,
		debug: true,
		maxForcedLevel: 50,
		defaultLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 2,
		},
		onResidual() {
			for (const side of this.sides) {
				for (const pokemon of side.active) {
					if (pokemon && !pokemon.fainted) {
						if (!pokemon.isSemiInvulnerable() && !pokemon.hasType('Electric') && !pokemon.hasType('Ground')) {
							let rand = this.random(1, 5);
							if (rand === 1) pokemon.trySetStatus('par');
							rand = this.random(1,5);
							if (rand === 1) this.damage(pokemon.baseMaxhp / 10, pokemon);
						}
					}
				}
			}
		},
		ruleset: ['Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', '2 Ability Clause', 'OHKO Clause'],
	},
	{
		name: "Abandoned Cinema (Dungeon)", //TEST
		desc: `Special field: Attack replays and decoys`,
		debug: true,
		maxForcedLevel: 50,
		defaultLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 2,
		},
		onAnyAfterMove(source) {
			let rand = this.random(1, 8);
			if (rand === 1) {
				if (!source.lastMove) return false;
				const lastMove = source.lastMove;
				const moveIndex = source.moves.indexOf(lastMove.id);
				if (
					lastMove.isZ || lastMove.flags['charge'] || source.volatiles['beakblast'] ||
					source.volatiles['focuspunch'] || source.volatiles['shelltrap'] ||
					(source.moveSlots[moveIndex] && source.moveSlots[moveIndex].pp <= 0)
				) {
					return false;
				}
				this.hint('Movie Magic: Instant Replay!');
				this.runMove(source.lastMove.id, source, source.lastMoveTargetLoc!);
			}
		},
		onAnyDamage(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				if (this.randomChance(1, 10)) {
					this.hint('Movie Magic: Stunt Double!');
					return 0;
				}
			}
		},
		ruleset: ['Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', '2 Ability Clause', 'OHKO Clause'],
	},
	{
		name: "Cryo Cave (Dungeon)",
		desc: `Special field: Freeze and damage`,
		debug: true,
		maxForcedLevel: 50,
		defaultLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 2,
		},
		onResidual() {
			for (const side of this.sides) {
				for (const pokemon of side.active) {
					if (pokemon && !pokemon.fainted) {
						if (!pokemon.isSemiInvulnerable() && !pokemon.hasType('Ice')) {
							let rand = this.random(1, 10);
							if (rand === 1) pokemon.trySetStatus('frz');
							rand = this.random(1, 4);
							if (rand === 1) this.damage(pokemon.baseMaxhp / 10, pokemon);
						}
					}
				}
			}
		},
		ruleset: ['Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', '2 Ability Clause', 'OHKO Clause'],
	},
	{
		name: "Haunted Castle (Dungeon)",
		desc: `Special field: Lower stat each turn`,
		debug: true,
		maxForcedLevel: 50,
		defaultLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 2,
		},
		onResidual() {
			for (const side of this.sides) {
				for (const pokemon of side.active) {
					let statName = 'atk';
					let bestStat = 0;
					let s: StatNameExceptHP;
					for (s in pokemon.storedStats) {
						if (pokemon.storedStats[s] > bestStat) {
							statName = s;
							bestStat = pokemon.storedStats[s];
						}
					}
					this.boost({[statName]: 2}, pokemon);
				}
			}
		},
		ruleset: ['Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', '2 Ability Clause', 'OHKO Clause'],
	},
	{
		name: "Dragon Den (Dungeon)",
		desc: `Special field: Dragons cannot be hit by SE or statused. Priestess challenge`,
		debug: true,
		maxForcedLevel: 50,
		defaultLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 2,
		},
		onAnyEffectiveness(typeMod, target, type) {
			if (type === 'Dragon') return 0;
		},
		onSetStatus(status, target, source) {
			if (source && source.side === target.side) {
				return;
			}
			if (target.hasType('Dragon')) {
				this.add('-message', 'Dragon blood prevents statusing.');
				return false;
			}
		},
		ruleset: ['Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', '2 Ability Clause', 'OHKO Clause'],
	},
	{
		name: "Angel Tower (Dungeon)",
		desc: `Special field: Dungeon is camomons`,
		debug: true,
		maxForcedLevel: 50,
		defaultLevel: 50,
		teamLength: {
			validate: [1, 6],
			battle: 2,
		},
/*		onBegin() {
			for (const pokemon of this.getAllPokemon()) {
				if (pokemon.side.id === 'p1') {
					const species = pokemon.species;
					const level = pokemon.level + 5;
					(pokemon as any).level = level;
					pokemon.set.level = level;
					pokemon.formeChange(species);
					pokemon.details = species.name + (level === 100 ? '' : ', L' + level) +
						(pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny === "Albino" ? ', albino' :
							pokemon.set.shiny === "Shiny" ? ', shiny' : '') + (pokemon.set.card === "Albino" ? ', albino' :
							pokemon.set.card === "Shiny" ? ', shiny' : pokemon.set.card === "Normal" ? ', normal' : '');

					this.add('detailschange', pokemon, pokemon.details);

					const newHP = Math.floor(Math.floor(
						2 * species.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100
					) * level / 100 + 10);
					pokemon.hp = newHP - (pokemon.maxhp - pokemon.hp);
					pokemon.maxhp = newHP;
					this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
				}
			}
		},*/
		onModifySpecies(species, target, source, effect) {
			if (!target) return; // Chat command
			if (effect && ['imposter', 'transform'].includes(effect.id)) return;
			if (target.side.id !== 'p1') return;
			const types = [...new Set(target.baseMoveSlots.slice(0, 2).map(move => this.dex.getMove(move.id).type))];
			return {...species, types: types};
		},
		onSwitchIn(pokemon) {
			if (pokemon.side.id !== 'p1') return;
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		},
		onAfterMega(pokemon) {
			if (pokemon.side.id !== 'p1') return;
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
		},
		ruleset: ['Team Preview', 'Cancel Mod', 'Species Clause', 'Item Clause', '2 Ability Clause', 'OHKO Clause'],
	},
];
