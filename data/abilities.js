/*
current: 265
Ratings and how they work:

-2: Extremely detrimental
	  The sort of ability that relegates Pokemon with Uber-level BSTs into NU.
	ex. Slow Start, Truant

-1: Detrimental
	  An ability that does more harm than good.
	ex. Defeatist, Normalize

 0: Useless
	  An ability with no net effect during a singles battle.
	ex. Healer, Illuminate

 1: Ineffective
	  An ability that has a minimal effect. Should not be chosen over any other ability.
	ex. Damp, Shell Armor

 2: Situationally useful
	  An ability that can be useful in certain situations.
	ex. Clear Body, Static

 3: Useful
	  An ability that is generally useful.
	ex. Infiltrator, Sturdy

 4: Very useful
	  One of the most popular abilities. The difference between 3 and 4 can be ambiguous.
	ex. Protean, Regenerator

 5: Essential
	  The sort of ability that defines metagames.
	ex. Desolate Land, Shadow Tag

*/

'use strict';

/**@type {{[k: string]: AbilityData}} */
let BattleAbilities = {
	"noability": {
		shortDesc: "Does nothing.",
		id: "noability",
		name: "No Ability",
		rating: 0.1,
	},
	"acceleration": {
		desc: "This Pokemon's priority moves have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's priority moves have 1.5 times added power",
		onModifyMove(move, pokemon) {
			if (move.priority > 0) {
				move.accelerationBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.accelerationBoosted) return this.chainModify(1.5);
		},
		id: "acceleration",
		name: "Acceleration",
		rating: 4,
	},
	"adaptability": {
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
		onModifyMove(move) {
			move.stab = 2;
		},
		id: "adaptability",
		name: "Adaptability",
		rating: 4,
	},
	"aftermath": {
		desc: "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",
		id: "aftermath",
		name: "Aftermath",
		onAfterDamageOrder: 1,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && !target.hp) {
				this.damage(source.maxhp / 4, source, target);
			}
		},
		rating: 2.5,
	},
	"aerilate": {
		desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Flying';
				move.aerilateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.aerilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "aerilate",
		name: "Aerilate",
		rating: 4,
	},
	"airlock": {
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Air Lock');
		},
		suppressWeather: true,
		id: "airlock",
		name: "Air Lock",
		rating: 2.5,
	},
	"alluringgarden": {
		shortDesc: "At the end of each turn, lowers other's defense, special defense, or speed by 1 stage.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target) continue;
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					if (this.randomChance(1,3)) {
						this.boost({def:-1}, target, pokemon);
					} else if (this.randomChance(1,2)) {
						this.boost({spd:-1}, target, pokemon);
					} else {
						this.boost({spe:-1}, target, pokemon);
					}
				}
			}
		},
		id: "alluringgarden",
		name: "Alluring Garden",
		rating: 5,
	},
	"analytic": {
		desc: "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
		shortDesc: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon) {
			let boosted = true;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (this.willMove(target)) {
					boosted = false;
					break;
				}
			}
			if (boosted) {
				this.debug('Analytic boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "analytic",
		name: "Analytic",
		rating: 2.5,
	},
	"angerpoint": {
		desc: "If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Anger Point');
			}
		},
		id: "angerpoint",
		name: "Anger Point",
		rating: 2,
	},
	"anticipation": {
		desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
		shortDesc: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.",
		onStart(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					const move = this.getMove(moveSlot.move);
					const moveType = move.id === 'hiddenpower' ? target.hpType : move.type;
					if (move.category !== 'Status' && (this.getImmunity(moveType, pokemon) && this.getEffectiveness(moveType, pokemon) > 0 || move.ohko)) {
						this.add('-ability', pokemon, 'Anticipation');
						return;
					}
				}
			}
		},
		id: "anticipation",
		name: "Anticipation",
		rating: 1,
	},
	"arenatrap": {
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they are airborne.",
		onFoeTrapPokemon(pokemon) {
			if (!this.isAdjacent(pokemon, this.effectData.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!source || !this.isAdjacent(pokemon, source)) return;
			if (pokemon.isGrounded(!pokemon.knownType)) { // Negate immunity if the type is unknown
				pokemon.maybeTrapped = true;
			}
		},
		id: "arenatrap",
		name: "Arena Trap",
		rating: 4.5,
	},
	"aromaveil": {
		desc: "This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.",
		shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					this.add('-activate', this.effectData.target, 'ability: Aroma Veil', '[of] ' + target);
				}
				return null;
			}
		},
		id: "aromaveil",
		name: "Aroma Veil",
		rating: 1.5,
	},
	"assassinate": {
		desc: "This Pokemon deals double damage to a pokemon below half health.",
		shortDesc: "This pokemon deals double damage to a pokemon below half health.",
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.maxhp) {
				return this.chainModify(2);
			}
		},
		id: "assassinate",
		name: "Assassinate",
		rating: 1.5,
	},
	"aurabreak": {
		desc: "While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.",
		shortDesc: "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Aura Break');
		},
		onAnyTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			move.hasAuraBreak = true;
		},
		id: "aurabreak",
		name: "Aura Break",
		rating: 1.5,
	},
	"baddreams": {
		desc: "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
		shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'slp' || target.hasAbility('comatose')) {
					if(pokemon.template.speciesid === 'darkraimega')
						this.damage(target.maxhp / 6, target, pokemon);
					else
						this.damage(target.maxhp / 8, target, pokemon);
				}
			}
		},
		id: "baddreams",
		name: "Bad Dreams",
		rating: 2,
	},
	"battery": {
		shortDesc: "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",
		onAllyBasePowerPriority: 8,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectData.target && move.category === 'Special') {
				this.debug('Battery boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "battery",
		name: "Battery",
		rating: 0,
	},
	"battlearmor": {
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
		onCriticalHit: false,
		id: "battlearmor",
		name: "Battle Armor",
		rating: 1,
	},
	"battlebond": {
		desc: "If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.",
		shortDesc: "After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.",
		onSourceFaint(target, source, effect) {
			if (effect && effect.effectType === 'Move' && source.template.speciesid === 'greninja' && source.hp && !source.transformed && source.side.foe.pokemonLeft) {
				this.add('-activate', source, 'ability: Battle Bond');
				source.formeChange('Greninja-Ash', this.effect, true);
			}
		},
		onModifyMovePriority: -1,
		onModifyMove(move, attacker) {
			if (move.id === 'watershuriken' && attacker.template.species === 'Greninja-Ash') {
				move.multihit = 3;
			}
		},
		id: "battlebond",
		name: "Battle Bond",
		rating: 3,
	},
	"beastboost": {
		desc: "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",
		onSourceFaint(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				let statName = 'atk';
				let bestStat = 0;
				/** @type {StatNameExceptHP} */
				let s;
				for (s in source.storedStats) {
					if (source.storedStats[s] > bestStat) {
						statName = s;
						bestStat = source.storedStats[s];
					}
				}
				this.boost({[statName]: 1}, source);
			}
		},
		id: "beastboost",
		name: "Beast Boost",
		rating: 3.5,
	},
	"berserk": {
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				this.boost({spa: 1});
			}
		},
		id: "berserk",
		name: "Berserk",
		rating: 2.5,
	},
	"bigpecks": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(/** @type {ActiveMove} */(effect)).secondaries) {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		id: "bigpecks",
		name: "Big Pecks",
		rating: 0.5,
	},
	"bijuuboost": {
		shortDesc: "This Pokemon's stats except health are all doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		onModifyDefPriority: 5,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		onModifySpAPriority: 5,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		onModifySpDPriority: 5,
		onModifySpD(spd) {
			return this.chainModify(2);
		},
		onModifySpe(spe) {
			return this.chainModify(2);
		},
		id: "bijuuboost",
		name: "Bijuu Boost",
		rating: 5,
	},
	"blaze": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		id: "blaze",
		name: "Blaze",
		rating: 2.5,
	},
	"bulletproof": {
		desc: "This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.",
		shortDesc: "Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).",
		onTryHit(pokemon, target, move) {
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Bulletproof');
				return null;
			}
		},
		id: "bulletproof",
		name: "Bulletproof",
		rating: 3.5,
	},
	"cheekpouch": {
		desc: "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect.",
		shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
		onEatItem(item, pokemon) {
			this.heal(pokemon.maxhp / 3);
		},
		id: "cheekpouch",
		name: "Cheek Pouch",
		rating: 2,
	},
	"chillingsonata": {
		desc: "Normal-Type sound moves become Ice-Type, others gain the Ice-Type.",
		shortDesc: "Normal-Type sound moves become Ice-Type, others gain the Ice-Type.",
		onModifyMove(move, pokemon) {
			if (move.flags['sound']) {
				if (move.type === 'Ice') return;
				if (move.type === 'Normal') move.type = 'Ice';
				else {
					move.onEffectiveness = function(typeMod, target, type, move) {
						return typeMod + this.getEffectiveness('Ice', type);
					};
				}
			}
		},
		id: "chillingsonata",
		name: "Chilling Sonata",
		rating: 4,
	},
	"chlorophyll": {
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		onModifySpe(spe) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(2);
			}
		},
		id: "chlorophyll",
		name: "Chlorophyll",
		rating: 3,
	},
	"clearbody": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(/** @type {ActiveMove} */(effect)).secondaries) {
				this.add("-fail", target, "unboost", "[from] ability: Clear Body", "[of] " + target);
			}
		},
		id: "clearbody",
		name: "Clear Body",
		rating: 2,
	},
	"climatezero": {
		desc: "This Pokemon is immune to Ice-type moves. The first time it is hit by a Ice-type move, its attacking stat is multiplied by 1.5 while using a Ice-type attack as long as it remains active and has this Ability. ",
		shortDesc: "This Pokemon's Ice attacks do 1.5x damage if hit by one Ice move; Ice immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Ice') {
				move.accuracy = true;
				if (!target.addVolatile('climatezero')) {
					this.add('-immune', target, '[from] ability: Climate Zero');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('climatezero');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Climate Zero');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Ice') {
					this.debug('Climate Zero boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Ice') {
					this.debug('Climate Zero boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Climate Zero', '[silent]');
			},
		},
		id: "climatezero",
		name: "Climate Zero",
		rating: 3,
	},
	"cloudnine": {
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Cloud Nine');
		},
		suppressWeather: true,
		id: "cloudnine",
		name: "Cloud Nine",
		rating: 2.5,
	},
	"colonize": {
		desc: "This Pokemon's Normal-type moves become Bug-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Bug type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Bug';
				move.colonizeBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.colonizeBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "colonize",
		name: "Colonize",
		rating: 4,
	},
	"colorchange": {
		desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
		onAfterMoveSecondary(target, source, move) {
			if (!target.hp) return;
			let type = move.type;
			if (target.isActive && move.effectType === 'Move' && move.category !== 'Status' && type !== '???' && !target.hasType(type)) {
				if (!target.setType(type)) return false;
				this.add('-start', target, 'typechange', type, '[from] ability: Color Change');

				if (target.side.active.length === 2 && target.position === 1) {
					// Curse Glitch
					const action = this.willMove(target);
					if (action && action.move.id === 'curse') {
						action.targetLoc = -1;
					}
				}
			}
		},
		id: "colorchange",
		name: "Color Change",
		rating: 1,
	},
	"comatose": {
		desc: "This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "This Pokemon cannot be statused, and is considered to be asleep.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Comatose');
		},
		onSetStatus(status, target, source, effect) {
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Comatose');
			return false;
		},
		// Permanent sleep "status" implemented in the relevant sleep-checking effects
		isUnbreakable: true,
		id: "comatose",
		name: "Comatose",
		rating: 3,
	},
	"competitive": {
		desc: "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
		onAfterEachBoost(boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({spa: 2}, target, target, null, true);
			}
		},
		id: "competitive",
		name: "Competitive",
		rating: 2.5,
	},
	"compoundeyes": {
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return accuracy * 1.3;
		},
		id: "compoundeyes",
		name: "Compound Eyes",
		rating: 3.5,
	},
	"contrary": {
		shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= -1;
			}
		},
		id: "contrary",
		name: "Contrary",
		rating: 4,
	},
	"corrosion": {
		shortDesc: "This Pokemon can poison or badly poison other Pokemon regardless of their typing.",
		// Implemented in sim/pokemon.js:Pokemon#setStatus
		id: "corrosion",
		name: "Corrosion",
		rating: 2.5,
	},
	"crisisevolution": {
		desc: "If this Pokemon is Vee, it changes to a typed form based upon the move it uses, if applicable, before attacking.",
		shortDesc: "If Vee, changes Forme to typed form when attacking.",
		onBeforeMovePriority: 0.5,
		onBeforeMove(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Vee') return;
			if (!['Normal', 'Water', 'Fire', 'Electric', 'Psychic', 'Dark', 'Grass', 'Ice', 'Fairy'].includes(move.type)) return;
			let targetSpecies = null;
			if(move.type === 'Normal') targetSpecies= 'Vee';
			if(move.type === 'Fire') targetSpecies= 'Flare';
			if(move.type === 'Water') targetSpecies= 'Vapor';
			if(move.type === 'Electric') targetSpecies= 'Jolt';
			if(move.type === 'Dark') targetSpecies= 'Umbra';
			if(move.type === 'Psychic') targetSpecies= 'Esp';
			if(move.type === 'Grass') targetSpecies= 'Leaf';
			if(move.type === 'Ice') targetSpecies= 'Glace';
			if(move.type === 'Fairy') targetSpecies= 'Sylve';
			if (targetSpecies !== null && attacker.template.species !== targetSpecies) {
				attacker.formeChange(targetSpecies);
				let newHP = Math.floor(Math.floor(2 * attacker.template.baseStats['hp'] + attacker.set.ivs['hp'] + Math.floor(attacker.set.evs['hp'] / 4) + 100) * attacker.level / 100 + 10);
				attacker.hp = newHP - (attacker.maxhp - attacker.hp);
				attacker.maxhp = newHP;
				this.add('-heal', attacker, attacker.getHealth, '[silent]');
			}
		},
		id: "crisisevolution",
		name: "Crisis Evolution",
		rating: 5,
	},
	"cursedbody": {
		desc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
		shortDesc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.",
		onAfterDamage(damage, target, source, move) {
			if (!source || source.volatiles['disable']) return;
			if (source !== target && move && move.effectType === 'Move' && !move.isFutureMove) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectData.target);
				}
			}
		},
		id: "cursedbody",
		name: "Cursed Body",
		rating: 2,
	},
	"cutecharm": {
		desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.",
		shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectData.target);
				}
			}
		},
		id: "cutecharm",
		name: "Cute Charm",
		rating: 1,
	},
	"damp": {
		desc: "While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.",
		id: "damp",
		onAnyTryMove(target, source, effect) {
			if (['explosion', 'mindblown', 'selfdestruct'].includes(effect.id)) {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Damp', effect, '[of] ' + target);
				return false;
			}
		},
		onAnyDamage(damage, target, source, effect) {
			if (effect && effect.id === 'aftermath') {
				return false;
			}
		},
		name: "Damp",
		rating: 1,
	},
	"dancer": {
		desc: "After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.",
		shortDesc: "After another Pokemon uses a dance move, this Pokemon uses the same move.",
		id: "dancer",
		name: "Dancer",
		// implemented in runMove in scripts.js
		rating: 2.5,
	},
	"darkaura": {
		desc: "While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Dark Aura');
		},
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Dark') return;
			if (!move.auraBooster) move.auraBooster = this.effectData.target;
			if (move.auraBooster !== this.effectData.target) return;
			return this.chainModify([move.hasAuraBreak ? 0x0C00 : 0x1547, 0x1000]);
		},
		isUnbreakable: true,
		id: "darkaura",
		name: "Dark Aura",
		rating: 3,
	},
	"dauntlessshield": {
		shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage.",
		onStart(pokemon) {
			this.boost({def: 1}, pokemon);
		},
		id: "dauntlessshield",
		name: "Dauntless Shield",
		rating: 3,
	},
	"dazzling": {
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",
		onFoeTryMove(target, source, effect) {
			if ((source.side === this.effectData.target.side || effect.id === 'perishsong') && effect.priority > 0.1 && effect.target !== 'foeSide') {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Dazzling', effect, '[of] ' + target);
				return false;
			}
		},
		id: "dazzling",
		name: "Dazzling",
		rating: 2.5,
	},
	"deathstare": { //Wonky?
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping. Lowers opponents attack on switch in",
		shortDesc: "Prevents adjacent foes from choosing to switch. Lowers foe's Atk on swap in.",
		onFoeTrapPokemon(pokemon) {
			if (this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Death Stare', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -2}, target, pokemon);
				}
			}
		},
		id: "deathstare",
		name: "Death Stare",
		rating: 4.5,
	},
	"deepfreeze": {
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be frozen.",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('frz', target);
				}
			}
		},
		id: "deepfreeze",
		name: "Deep Freeze",
		rating: 2,
	},
	"deepseamine": {
		desc: "Pokemon making contact with this Pokemon lose a random amount of their their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose a random amount of their max HP.",
		onAfterDamageOrder: 1,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				let i = this.random(100);
				let deepseaDamage = 16;
				if (i < 5) {
					deepseaDamage = 16;
				} else if (i < 15) {
					deepseaDamage = 12;
				} else if (i < 35) {
					deepseaDamage = 10;
				} else if (i < 65) {
					deepseaDamage = 8;
				} else if (i < 85) {
					deepseaDamage = 6;
				} else if (i < 95) {
					deepseaDamage = 4;
				} else {
					deepseaDamage = 2;
				}
				this.damage(source.maxhp / deepseaDamage, source, target);
			}
		},
		id: "deepseamine",
		name: "Deepsea Mine",
		rating: 3,
	},
	"defeatist": {
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		id: "defeatist",
		name: "Defeatist",
		rating: -1,
	},
	"defiant": {
		desc: "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
		onAfterEachBoost(boost, target, source) {
			if (!source || target.side === source.side) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({atk: 2}, target, target, null, true);
			}
		},
		id: "defiant",
		name: "Defiant",
		rating: 2.5,
	},
	"deltastream": {
		desc: "On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.",
		shortDesc: "On switch-in, strong winds begin until this Ability is not active in battle.",
		onStart(source) {
			this.field.setWeather('deltastream');
		},
		onAnySetWeather(target, source, weather) {
			if (this.field.getWeather().id === 'deltastream' && !['desolateland', 'primordialsea', 'deltastream'].includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherData.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('deltastream')) {
					this.field.weatherData.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		id: "deltastream",
		name: "Delta Stream",
		rating: 5,
	},
	"desolateland": {
		desc: "On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing and turns Ice type moves to water types, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.",
		shortDesc: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.",
		onStart(source) {
			this.field.setWeather('desolateland');
		},
		onAnySetWeather(target, source, weather) {
			if (this.field.getWeather().id === 'desolateland' && !['desolateland', 'primordialsea', 'deltastream'].includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherData.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('desolateland')) {
					this.field.weatherData.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		id: "desolateland",
		name: "Desolate Land",
		rating: 5,
	},
	"desperatestruggle": {
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are 1.5X and it's speed is doubled.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Atk and Sp. Atk are 1.5X and its Spe is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(2);
			}
		},
		id: "desperatestruggle",
		name: "Desperate Struggle",
		rating: -1,
	},
	"direweb": {
		desc: "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
		shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.volatiles['trapped'] || target.volatiles['partiallytrapped']) {
					this.damage(target.maxhp / 8, target, pokemon);
				}
			}
		},
		id: "direweb",
		name: "Dire Web",
		rating: 2,
	},
	"disguise": {
		desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.",
		shortDesc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage.",
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && ['mimikyu', 'mimikyutotem'].includes(target.template.speciesid) && !target.transformed) {
				this.add('-activate', target, 'ability: Disguise');
				this.effectData.busted = true;
				return 0;
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (!['mimikyu', 'mimikyutotem'].includes(target.template.speciesid) || target.transformed || (target.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates))) return;
			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (['mimikyu', 'mimikyutotem'].includes(pokemon.template.speciesid) && this.effectData.busted) {
				let templateid = pokemon.template.speciesid === 'mimikyutotem' ? 'Mimikyu-Busted-Totem' : 'Mimikyu-Busted';
				pokemon.formeChange(templateid, this.effect, true);
			}
		},
		id: "disguise",
		name: "Disguise",
		rating: 4,
	},
	"divashock": {
		desc: "If an opponent attacks this pokemon with a damaging move before it moves, the opponent takes 1/16th of their health as damage.",
		shortDesc: "Opponent strikes before this pokemon it takes 1/16th max hp as damage.",
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				if(!target.moveThisTurn) {
					this.damage(source.maxhp / 16, source, target);
				}
			}
		},
		id: "divashock",
		name: "Diva Shock",
		rating: 2.5,
	},
	"download": {
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
		shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
		onStart(pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa: 1});
			} else if (totalspd) {
				this.boost({atk: 1});
			}
		},
		id: "download",
		name: "Download",
		rating: 3.5,
	},
	"dragonforce": {
		desc: "This Pokemon's dragon-type attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's dragon-type attacks have 1.5x power. Bug Bite is not boosted.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Dragon') {
				return this.chainModify(1.5);
			}
		},
		id: "dragonforce",
		name: "Dragon Force",
		rating: 3,
	},
	"dreamsembrace": {
		shortDesc: "Opponent Pokemon asleep at the end of the turn lose all stat changes.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'slp' || target.hasAbility('comatose')) {
					target.clearBoosts();
					this.add('-clearboost', target);
				}
			}
		},
		id: "dreamsembrace",
		name: "Dream's Embrase",
		rating: 4,
	},
	"drizzle": {
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('raindance');
		},
		id: "drizzle",
		name: "Drizzle",
		rating: 4.5,
	},
	"drought": {
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'groudon') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('sunnyday');
		},
		id: "drought",
		name: "Drought",
		rating: 4.5,
	},
	"dryskin": {
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.",
		shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Dry Skin');
				}
				return null;
			}
		},
		onFoeBasePowerPriority: 7,
		onFoeBasePower(basePower, attacker, defender, move) {
			if (this.effectData.target !== defender) return;
			if (move.type === 'Fire') {
				return this.chainModify(1.25);
			}
		},
		onWeather(target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.maxhp / 8);
			} else if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.maxhp / 8, target, target);
			}
		},
		id: "dryskin",
		name: "Dry Skin",
		rating: 3,
	},
	"earlybird": {
		shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",
		id: "earlybird",
		name: "Early Bird",
		// Implemented in statuses.js
		rating: 2,
	},
	"effectspore": {
		desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.",
		shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact'] && !source.status && source.runStatusImmunity('powder')) {
				let r = this.random(100);
				if (r < 11) {
					source.setStatus('slp', target);
				} else if (r < 21) {
					source.setStatus('par', target);
				} else if (r < 30) {
					source.setStatus('psn', target);
				}
			}
		},
		id: "effectspore",
		name: "Effect Spore",
		rating: 2,
	},
	"electricsurge": {
		shortDesc: "On switch-in, this Pokemon summons Electric Terrain.",
		onStart(source) {
			this.field.setTerrain('electricterrain');
		},
		id: "electricsurge",
		name: "Electric Surge",
		rating: 4,
	},
	"elementalist": {
		desc: "This Pokemon's Fire, Water, and Electric moves have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's Fire, Water, and Electric-type have 1.5x added power.",
		onModifyMove(move, pokemon) {
			if(move.type === 'Fire' || move.type === 'Ice' || move.type === 'Electric')
				if(pokemon.hasType(move.type))
					move.stab = 2;
				else
					move.elementalistBoosted = true;
			move.stab = 2;
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.elementalistBoosted) return this.chainModify(1.5);
		},
		id: "elementalist",
		name: "Elementalist",
		rating: 4,
   },
   "elementnegate": {
	  desc: "This pokemon takes half damage from fire, electric, ice, and Water attacks from opponents of equal level with a 1% increase or decrease per level gap.",
	  shortDesc: "This pokemon takes reduced damage based on the difference in levels.",
	  onSourceModifyDamage(damage, source, target, move) {
		 if (move.type === 'Electric' || move.type === 'Fire' || move.type === 'Water' || move.type === 'Ice') {
			let damageAmount = 0.5;
			let levelDiff = (target.level - source.level) / 100.0;
			damageAmount -= levelDiff;
			if (damageAmount > 1.0) {
			   damageAmount = 1.0;
			}
			if (damageAmount < 0) {
			   damageAmount = 0
			}
			return this.chainModify(damageAmount);
		 }
	  },
	  id: "elementnegate",
	  name: "Element Negate",
	  rating: 4,
   },
	"emergencyexit": {
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				source.switchFlag = false;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		onAfterDamage(damage, target, source, effect) {
			if (!target.hp || effect.effectType === 'Move') return;
			if (target.hp <= target.maxhp / 2 && target.hp + damage > target.maxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		id: "emergencyexit",
		name: "Emergency Exit",
		rating: 1.5,
	},
	"eternalbeach": {
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.",
		shortDesc: "Non-Airborne foes can't switch. +2 Def, SpD if damaged by a Water-type move.",
		onFoeTrapPokemon(pokemon) {
			if (!this.isAdjacent(pokemon, this.effectData.target)) return;
			if (pokemon.isGrounded()) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!source || !this.isAdjacent(pokemon, source)) return;
			if (pokemon.isGrounded(!pokemon.knownType)) { // Negate immunity if the type is unknown
				pokemon.maybeTrapped = true;
			}
		},
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.type === 'Water') {
				this.boost({def: 2});
				this.boost({spd: 2});
			}
		},
		id: "eternalbeach",
		name: "Eternal Beach",
		rating: 4.5,
	},
	"fairyaura": {
		desc: "While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Fairy Aura');
		},
		onAnyBasePower(basePower, source, target, move) {
			if (target === source || move.category === 'Status' || move.type !== 'Fairy') return;
			if (!move.auraBooster) move.auraBooster = this.effectData.target;
			if (move.auraBooster !== this.effectData.target) return;
			return this.chainModify([move.hasAuraBreak ? 0x0C00 : 0x1547, 0x1000]);
		},
		isUnbreakable: true,
		id: "fairyaura",
		name: "Fairy Aura",
		rating: 3,
	},
	"filter": {
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.75);
			}
		},
		id: "filter",
		name: "Filter",
		rating: 3,
	},
	"firstforge": {
		shortDesc: "This Pokemon cannot be burned or frozen. Gaining this Ability while burned or frozen cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'brn' || pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: First Forge');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn' && status.id !== 'frz') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: First Forge');
			return false;
		},
		onModifyMove(move) {
			if (!move || move.type !== 'Water' || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 15,
				status: 'brn',
				ability: this.getAbility('firstforge'),
			});
		},
		id: "firstforge",
		name: "First Forge",
		rating: 2,
	},
	"flamebody": {
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned.",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		id: "flamebody",
		name: "Flame Body",
		rating: 2,
	},
	"flareboost": {
		desc: "While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is burned, its special attacks have 1.5x power.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(1.5);
			}
		},
		id: "flareboost",
		name: "Flare Boost",
		rating: 2.5,
	},
	"flashfire": {
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Fire') {
				move.accuracy = true;
				if (!target.addVolatile('flashfire')) {
					this.add('-immune', target, '[from] ability: Flash Fire');
				}
				return null;
			}
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('flashfire');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(target) {
				this.add('-start', target, 'ability: Flash Fire');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('Flash Fire boost');
					return this.chainModify(1.5);
				}
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Flash Fire', '[silent]');
			},
		},
		id: "flashfire",
		name: "Flash Fire",
		rating: 3,
	},
	"flowergift": {
		desc: "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.",
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
		onStart(pokemon) {
			delete this.effectData.forme;
		},
		onUpdate(pokemon) {
			if (!pokemon.isActive || pokemon.baseTemplate.baseSpecies !== 'Cherrim' || pokemon.transformed) return;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				if (pokemon.template.speciesid !== 'cherrimsunshine') {
					pokemon.formeChange('Cherrim-Sunshine', this.effect, false, '[msg]');
				}
			} else {
				if (pokemon.template.speciesid === 'cherrimsunshine') {
					pokemon.formeChange('Cherrim', this.effect, false, '[msg]');
				}
			}
		},
		onAllyModifyAtkPriority: 3,
		onAllyModifyAtk(atk) {
			if (this.effectData.target.baseTemplate.baseSpecies !== 'Cherrim') return;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 4,
		onAllyModifySpD(spd) {
			if (this.effectData.target.baseTemplate.baseSpecies !== 'Cherrim') return;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(1.5);
			}
		},
		id: "flowergift",
		name: "Flower Gift",
		rating: 2,
	},
	"flowerveil": {
		desc: "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a major status condition inflicted on them by other Pokemon.",
		shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",
		onAllyBoost(boost, target, source, effect) {
			if ((source && target === source) || !target.hasType('Grass')) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(/** @type {ActiveMove} */(effect)).secondaries) {
				this.add('-fail', this.effectData.target, 'unboost', '[from] ability: Flower Veil', '[of] ' + target);
			}
		},
		onAllySetStatus(status, target, source, effect) {
			if (target.hasType('Grass') && source && target !== source && effect && effect.id !== 'yawn') {
				this.debug('interrupting setStatus with Flower Veil');
				if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
					this.add('-activate', this.effectData.target, 'ability: Flower Veil', '[of] ' + target);
				}
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (target.hasType('Grass') && status.id === 'yawn') {
				this.debug('Flower Veil blocking yawn');
				this.add('-activate', this.effectData.target, 'ability: Flower Veil', '[of] ' + target);
				return null;
			}
		},
		id: "flowerveil",
		name: "Flower Veil",
		rating: 0,
	},
	"fluffy": {
		desc: "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.",
		shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.",
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		id: "fluffy",
		name: "Fluffy",
		rating: 2.5,
	},
	"forecast": {
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		onUpdate(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Castform' || pokemon.transformed) return;
			let forme = null;
			switch (this.field.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				if (pokemon.template.speciesid !== 'castformsunny') forme = 'Castform-Sunny';
				break;
			case 'raindance':
			case 'primordialsea':
				if (pokemon.template.speciesid !== 'castformrainy') forme = 'Castform-Rainy';
				break;
			case 'hail':
				if (pokemon.template.speciesid !== 'castformsnowy') forme = 'Castform-Snowy';
				break;
			default:
				if (pokemon.template.speciesid !== 'castform') forme = 'Castform';
				break;
			}
			if (pokemon.isActive && forme) {
				pokemon.formeChange(forme, this.effect, false, '[msg]');
			}
		},
		id: "forecast",
		name: "Forecast",
		rating: 3,
	},
	"forewarn": {
		desc: "On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.",
		shortDesc: "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",
		onStart(pokemon) {
			/**@type {(Move|Pokemon)[][]} */
			let warnMoves = [];
			let warnBp = 1;
			for (const target of pokemon.side.foe.active) {
				if (target.fainted) continue;
				for (const moveSlot of target.moveSlots) {
					let move = this.getMove(moveSlot.move);
					let bp = move.basePower;
					if (move.ohko) bp = 150;
					if (move.id === 'counter' || move.id === 'metalburst' || move.id === 'mirrorcoat') bp = 120;
					if (bp === 1) bp = 80;
					if (!bp && move.category !== 'Status') bp = 80;
					if (bp > warnBp) {
						warnMoves = [[move, target]];
						warnBp = bp;
					} else if (bp === warnBp) {
						warnMoves.push([move, target]);
					}
				}
			}
			if (!warnMoves.length) return;
			const [warnMoveName, warnTarget] = this.sample(warnMoves);
			this.add('-activate', pokemon, 'ability: Forewarn', warnMoveName, '[of] ' + warnTarget);
		},
		id: "forewarn",
		name: "Forewarn",
		rating: 1,
	},
	"friendguard": {
		shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
		id: "friendguard",
		name: "Friend Guard",
		onAnyModifyDamage(damage, source, target, move) {
			if (target !== this.effectData.target && target.side === this.effectData.target.side) {
				this.debug('Friend Guard weaken');
				return this.chainModify(0.75);
			}
		},
		rating: 0,
	},
	"frisk": {
		shortDesc: "On switch-in, this Pokemon identifies the held items of all opposing Pokemon.",
		onStart(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Frisk', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		id: "frisk",
		name: "Frisk",
		rating: 1.5,
	},
	"fullmetalbody": {
		desc: "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(/** @type {ActiveMove} */(effect)).secondaries) {
				this.add("-fail", target, "unboost", "[from] ability: Full Metal Body", "[of] " + target);
			}
		},
		isUnbreakable: true,
		id: "fullmetalbody",
		name: "Full Metal Body",
		rating: 2,
	},
	"furcoat": {
		shortDesc: "This Pokemon's Defense is doubled.",
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		id: "furcoat",
		name: "Fur Coat",
		rating: 3.5,
	},
	"galewings": {
		shortDesc: "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying' && pokemon.hp === pokemon.maxhp) return priority + 1;
		},
		id: "galewings",
		name: "Gale Wings",
		rating: 3,
	},
	"galvanize": {
		desc: "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Electric';
				move.galvanizeBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.galvanizeBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "galvanize",
		name: "Galvanize",
		rating: 4,
	},
	"gigatonforce": {
		desc: "Contact destroys barriers and protect-like moves, has knock off effect on contact.",
		shortDesc: "Contact destroys protection and removes item",
		onModifyMove(move) {
			if(move.flags['contact']) {
				delete move.flags['protect'];
				move.flags.authentic = 1;
			}
		},
		onPrepareHit(source, target, move) {
			if(move.flags['contact']) {
				target.side.removeSideCondition('reflect');
				target.side.removeSideCondition('lightscreen');
				target.side.removeSideCondition('auroraveil');
			}
		},
		onSourceHit(target, source, move) {
			if (!move || !target) return;
			if (target !== source && move.flags['contact']) {
				let item = target.takeItem(source);
				if (!item) return;
				this.add('-enditem', target, item.name, '[from] ability: Gigaton Force', '[of] ' + source);
			}
		},
		id: "gigatonforce",
		name: "Gigaton Force",
		rating: 5,
	},
	"gluttony": {
		shortDesc: "When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.",
		id: "gluttony",
		name: "Gluttony",
		rating: 1.5,
	},
	"gooey": {
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-ability', target, 'Gooey');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		id: "gooey",
		name: "Gooey",
		rating: 2.5,
	},
	"grasspelt": {
		shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
		onModifyDefPriority: 6,
		onModifyDef(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify(1.5);
		},
		id: "grasspelt",
		name: "Grass Pelt",
		rating: 1,
	},
	"grassysurge": {
		shortDesc: "On switch-in, this Pokemon summons Grassy Terrain.",
		onStart(source) {
			this.field.setTerrain('grassyterrain');
		},
		id: "grassysurge",
		name: "Grassy Surge",
		rating: 4,
	},
	"guts": {
		desc: "If this Pokemon has a major status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored.",
		shortDesc: "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "guts",
		name: "Guts",
		rating: 3,
	},
	"harvest": {
		desc: "If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.",
		shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",
		id: "harvest",
		name: "Harvest",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland']) || this.randomChance(1, 2)) {
				if (pokemon.hp && !pokemon.item && this.getItem(pokemon.lastItem).isBerry) {
					pokemon.setItem(pokemon.lastItem);
					pokemon.lastItem = '';
					this.add('-item', pokemon, pokemon.getItem(), '[from] ability: Harvest');
				}
			}
		},
		rating: 2.5,
	},
	"healer": {
		desc: "There is a 30% chance of curing an adjacent ally's major status condition at the end of each turn.",
		shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
		id: "healer",
		name: "Healer",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.hp && this.isAdjacent(pokemon, allyActive) && allyActive.status && this.randomChance(3, 10)) {
					this.add('-activate', pokemon, 'ability: Healer');
					allyActive.cureStatus();
				}
			}
		},
		rating: 0,
	},
	"heatedcombat": {
		desc: "This Pokemon's Fire-Type moves have a same-type attack bonus (STAB) of 1.7 instead of 1.5. Grants contact moves an additional 15% chance to burn.",
		shortDesc: "This Pokemon's Fire-type STAB is 1.7. Contact moves have an extra 15% brn chance.",
		onModifyMove(move) {
			if(move.type === 'Fire') {
				move.stab = 1.7;
			}
			if (!move || !move.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 15,
				status: 'brn',
				ability: this.getAbility('heatedcombat'),
			});
		},
		id: "heatedcombat",
		name: "Heated Combat",
		rating: 4,
	},
	"heatproof": {
		desc: "The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.",
		shortDesc: "The power of Fire-type attacks against this Pokemon is halved; burn damage halved.",
		onSourceBasePowerPriority: 7,
		onSourceBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect && effect.id === 'brn') {
				return damage / 2;
			}
		},
		id: "heatproof",
		name: "Heatproof",
		rating: 2.5,
	},
	"heavensguidance": {
		shortDesc: "Certain types of moves change in power and ability",
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Grass' && move.category !== "Status" && attacker.template.species === 'Mew-Mega') {
				return this.chainModify(1.2);
			}
			if (move.type === 'Fighting' && move.category !== "Status" && attacker.template.species === 'Mew-Mega') {
				if(move.id === 'dynamicpunch') {
					return this.chainModify(1.3);
				}
				else {
					return this.chainModify(1.2);
				}
			}
			if(move.type === 'Electric' && move.category === "Special" && attacker.template.species === 'Mew-Mega') {
				return this.chainModify(1.4);
			}
		},
		onModifyMove(move, pokemon) {
			if(move.type === 'Normal' && move.category !== "Status" && pokemon.template.species === 'Mew-Mega') {
				move.name = "Ancestral Radiance";
				move.basePower= 130;
			}
			if(move.type === 'Psychic' && move.category !== "Status" && pokemon.template.species === 'Mew-Mega') {
				move.basePower = 130;
				if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
				delete move.secondary;
				move.secondaries = [];
				move.secondaries.push({
					chance: 100,
					self: {
						onHit() {
							this.field.setTerrain('psychicterrain');
						},
					},
				});
			}
			if(move.type === 'Fire' && move.category !== "Status" && pokemon.template.species === 'Mew-Mega' && move.id !== 'sacredfire') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('sacredfire', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Dragon' && move.category === "Special" && pokemon.template.species === 'Mew-Mega') {
				move.basePower = 180;
				move.accuracy = 90;
				move.name = "Roar of Time Alpha";
				if (!move.self) {
					move.self = [];
				}
				move.self.volatileStatus = 'mustrecharge';
				move.flags.recharge = 1;
			}
			if(move.type === 'Dragon' && move.category === "Physical" && pokemon.template.species === 'Mew-Mega') {
				move.basePower = 120;
				move.accuracy = 95;
				move.name = "Spacial Rend Omega";
				move.critRatio++;
			}
			if(move.type === 'Grass' && !move.drain && move.category !== "Status" && pokemon.template.species === 'Mew-Mega') {
				move.drain = [1,3];
			}
			if(move.type === 'Fighting' && move.category !== "Status" && pokemon.template.species === 'Mew-Mega') {
				if(move.id !== 'dynamicpunch') {
					move.accuracy=true;
				}
			}
			if(move.type === 'Water' && move.category === "Special" && pokemon.template.species === 'Mew-Mega' && move.id !== 'steameruption') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('steameruption', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Flying' && move.category === "Physical" && pokemon.template.species === 'Mew-Mega') {
				move.basePower= 80;
				move.accuracy= 100;
				move.name = "Oblivion Wing";
				if (!move.drain) {
					move.drain = [];
				}
				move.drain = [3,4];
			}
			if(move.type === 'Flying' && move.category === "Special" && pokemon.template.species === 'Mew-Mega' && move.id !== 'aeroblast') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('aeroblast', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Electric' && move.category === "Physical" && pokemon.template.species === 'Mew-Mega' && move.id !== 'boltstrike') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('boltstrike', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Electric' && move.category === "Special" && pokemon.template.species === 'Mew-Mega') {
				move.name = "Maximum " + move.name;
			}
			if(move.type === 'Ground' && move.category === "Physical" && pokemon.template.species === 'Mew-Mega' && move.id !== 'precipiceblades') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('precipiceblades', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Ice' && move.category === "Special"  && pokemon.template.species === 'Mew-Mega' && move.id !== 'glaciate') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('glaciate', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Ghost' && move.category === "Special" && pokemon.template.species === 'Mew-Mega' && move.id !== 'moongeistbeam') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('moongeistbeam', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Dark' && move.category === "Status" && move.target === "normal" && pokemon.template.species === 'Mew-Mega') {
				move.name = "Dark Abyss";
				move.accuracy = 80;
			   move.status = 'slp';
			}
			if(move.type === 'Dark' && move.category === "Special" && pokemon.template.species === 'Mew-Mega' && move.id !== 'hyperspacehole') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('hyperspacefury', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Steel' && move.category === "Physical" && pokemon.template.species === 'Mew-Mega' && move.id !== 'sunsteelstrike') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('sunsteelstrike', pokemon, target);
					return null;
				}
			}
			if(move.type === 'Fairy' && move.category === "Special" && pokemon.template.species === 'Mew-Mega' && move.id !== 'fleurcannon') {
				move.accuracy = true;
				move.secondary = null;
				move.secondaries = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('fleurcannon', pokemon, target);
					return null;
				}
			}
		},
		id: "heavensguidance",
		name: "Heaven's Guidance",
		rating: 3,
	},
	"heavymetal": {
		shortDesc: "This Pokemon's weight is doubled.",
		onModifyWeight(weight) {
			return weight * 2;
		},
		id: "heavymetal",
		name: "Heavy Metal",
		rating: -1,
	},
	"hellfield": {
		shortDesc: "On switch-in, this Pokemon summons Hell Fire.",
		onStart(source) {
			this.field.setTerrain('hellfire');
		},
		id: "hellfield",
		name: "Hell Field",
		rating: 4,
	},
	"hivemind": {
		desc: "Attack Order, Heal Order, and Defend Order are boosted in ability.",
		shortDesc: "This pokemon's signature moves are boosted.",
		onModifyMove(move) {
			if (move.id === 'attackorder') {
				move.basePower *= 1.5;
			} else if(move.id === 'healorder') {
				move.heal = [75,100];
			} else if(move.id === 'defendorder') {
				move.boosts = {def: 2, spd: 2,};
			}
		},
		id: "hivemind",
		name: "Hive Mind",
		rating: 4,
	},
	"honeygather": {
		shortDesc: "No competitive use.",
		id: "honeygather",
		name: "Honey Gather",
		rating: 0,
	},
	"hugepower": {
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		id: "hugepower",
		name: "Huge Power",
		rating: 5,
	},
	"hustle": {
		desc: "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
		// This should be applied directly to the stat as opposed to chaining witht he others
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.modify(atk, 1.5);
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category === 'Physical' && typeof move.accuracy === 'number') {
				move.accuracy *= 0.8;
			}
		},
		id: "hustle",
		name: "Hustle",
		rating: 3.5,
	},
	"hydration": {
		desc: "This Pokemon has its major status condition cured at the end of each turn if Rain Dance is active.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.status && this.field.isWeather(['raindance', 'primordialsea'])) {
				this.debug('hydration');
				this.add('-activate', pokemon, 'ability: Hydration');
				pokemon.cureStatus();
			}
		},
		id: "hydration",
		name: "Hydration",
		rating: 2,
	},
	"hypercutter": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(/** @type {ActiveMove} */(effect)).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
				}
			}
		},
		id: "hypercutter",
		name: "Hyper Cutter",
		rating: 1.5,
	},
	"hypersubwoofer": {
		desc: "This Pokemon's sound-based attacks have their power multiplied by 1.5 and protect moves fail against them. Modifies certain moves",
		shortDesc: "This Pokemon's sound-based attacks have 1.5x power. Protection fails. Modifies certain moves",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				return this.chainModify(1.5);
			}
		},
		onModifyMove(move) {
			if(move.flags['sound']) delete move.flags['protect'];
			if(move.id==="screech") {
				move.name = "Sonic Doom";
				move.damage = 40;
				move.target = "allAdjacentFoes";
			}
			if(move.id==="boomburst") {
				move.name = "Bass Cannon";
				move.basePower = 200;
				move.flags.recharge = 1;
				move.self = {
					volatileStatus: 'mustrecharge',
				};
			}
		},
		id: "hypersubwoofer",
		name: "Hyper Subwoofer",
		rating: 5,
	},
	"icebody": {
		desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
		onWeather(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.maxhp / 16);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "icebody",
		name: "Ice Body",
		rating: 1.5,
	},
	"iceface": {
		desc: "If this Pokemon is a Eiscue, the first physical hit it takes will deal 0 damage. Its ice head is then broken, it changes to Noice Form. The ice will be restored when hail is summoned or when the Pokemon is switched in while hail is active.",
		shortDesc: "(Eiscue only) First physical hit deals 0 damage, breaks ice head.",
		onDamagePriority: 1,
		onStart(pokemon) {
			if (this.field.isWeather('hail') && pokemon.template.speciesid === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectData.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		onDamage(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.category === 'Physical' && target.template.speciesid === 'eiscue' && !target.transformed) {
				this.add('-activate', target, 'ability: Ice Face');
				this.effectData.busted = true;
				return 0;
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (!target) return;
			if (move.category !== 'Physical' || target.template.speciesid !== 'eiscue' || target.transformed || (target.volatiles['substitute'] && !(move.flags['authentic'] || move.infiltrates))) return;
			if (!target.runImmunity(move.type)) return;
			return 0;
		},
		onUpdate(pokemon) {
			if (pokemon.template.speciesid === 'eiscue' && this.effectData.busted) {
				pokemon.formeChange('Eiscue-Noice', this.effect, true);
			}
		},
		onAnyWeatherStart() {
			const pokemon = this.effectData.target;
			if (this.field.isWeather('hail') && pokemon.template.speciesid === 'eiscuenoice' && !pokemon.transformed) {
				this.add('-activate', pokemon, 'ability: Ice Face');
				this.effectData.busted = false;
				pokemon.formeChange('Eiscue', this.effect, true);
			}
		},
		id: "iceface",
		name: "Ice Face",
		rating: 3.5,
	},
	"iceforce": {
		desc: "If Hail is active, this Pokemon's Ice-type attacks have their power multiplied by 1.5. This Pokemon takes no damage from Hail.",
		shortDesc: "This Pokemon's Ice attacks do 1.5x in Hail; immunity to it.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('hail')) {
				if (move.type === 'Ice') {
					this.debug('Ice Force boost');
					return this.chainModify(1.5);
				}
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		id: "iceforce",
		name: "Ice Force",
		rating: 2,
	},
	"icescales": {
		shortDesc: "This Pokémon's Special Defense is doubled.",
		onModifySpD(spd) {
			return this.chainModify(2);
		},
		id: "icescales",
		name: "Ice Scales",
		rating: 3.5,
	},
	"illuminate": {
		shortDesc: "No competitive use.",
		id: "illuminate",
		name: "Illuminate",
		rating: 0,
	},
	"illusion": {
		desc: "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
		shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",
		onBeforeSwitchIn(pokemon) {
			pokemon.illusion = null;
			let i;
			for (i = pokemon.side.pokemon.length - 1; i > pokemon.position; i--) {
				if (!pokemon.side.pokemon[i]) continue;
				if (!pokemon.side.pokemon[i].fainted) break;
			}
			if (!pokemon.side.pokemon[i]) return;
			if (pokemon === pokemon.side.pokemon[i]) return;
			pokemon.illusion = pokemon.side.pokemon[i];
		},
		onAfterDamage(damage, target, source, effect) {
			if (target.illusion && effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.singleEvent('End', this.getAbility('Illusion'), target.abilityData, target, source, effect);
			}
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				let details = pokemon.template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		isUnbreakable: true,
		id: "illusion",
		name: "Illusion",
		rating: 4,
	},
	"immunity": {
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'psn' || pokemon.status === 'tox') {
				this.add('-activate', pokemon, 'ability: Immunity');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'psn' && status.id !== 'tox') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Immunity');
			return false;
		},
		id: "immunity",
		name: "Immunity",
		rating: 2,
	},
	"imposter": {
		desc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.",
		shortDesc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.",
		onStart(pokemon) {
			if (this.activeMove && this.activeMove.id === 'skillswap') return;
			let target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				pokemon.transformInto(target, this.getAbility('imposter'));
			}
		},
		id: "imposter",
		name: "Imposter",
		rating: 4.5,
	},
	"infiltrator": {
		desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil.",
		shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
		onModifyMove(move) {
			move.infiltrates = true;
		},
		id: "infiltrator",
		name: "Infiltrator",
		rating: 3,
	},
	"innardsout": {
		desc: "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
		shortDesc: "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",
		id: "innardsout",
		name: "Innards Out",
		onAfterDamageOrder: 1,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.effectType === 'Move' && !target.hp) {
				this.damage(damage, source, target);
			}
		},
		rating: 2.5,
	},
	"innerfocus": {
		shortDesc: "This Pokemon cannot be made to flinch.",
		onFlinch: false,
		id: "innerfocus",
		name: "Inner Focus",
		rating: 1,
	},
	"insomnia": {
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Insomnia');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Insomnia');
			return false;
		},
		id: "insomnia",
		name: "Insomnia",
		rating: 2,
	},
	"intimidate": {
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		onStart(pokemon) {
			let activated = false;
			for (const target of pokemon.side.foe.active) {
				if (!target || !this.isAdjacent(target, pokemon)) continue;
				if (!activated) {
					this.add('-ability', pokemon, 'Intimidate', 'boost');
					activated = true;
				}
				if (target.volatiles['substitute']) {
					this.add('-immune', target);
				} else {
					this.boost({atk: -1}, target, pokemon);
				}
			}
		},
		id: "intimidate",
		name: "Intimidate",
		rating: 3.5,
	},
	"intrepidsword": {
		shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage.",
		onStart(pokemon) {
			this.boost({atk: 1}, pokemon);
		},
		id: "intrepidsword",
		name: "Intrepid Sword",
		rating: 4,
	},
	"ironbarbs": {
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",
		onAfterDamageOrder: 1,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 8, source, target);
			}
		},
		id: "ironbarbs",
		name: "Iron Barbs",
		rating: 3,
	},
	"ironfist": {
		desc: "This Pokemon's punch-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		id: "ironfist",
		name: "Iron Fist",
		rating: 3,
	},
	"justified": {
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.type === 'Dark') {
				this.boost({atk: 1});
			}
		},
		id: "justified",
		name: "Justified",
		rating: 2,
	},
	"keeneye": {
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.accuracy && boost.accuracy < 0) {
				delete boost.accuracy;
				if (!(/** @type {ActiveMove} */(effect)).secondaries) {
					this.add("-fail", target, "unboost", "accuracy", "[from] ability: Keen Eye", "[of] " + target);
				}
			}
		},
		onModifyMove(move) {
			move.ignoreEvasion = true;
		},
		id: "keeneye",
		name: "Keen Eye",
		rating: 0.5,
	},
	"klutz": {
		desc: "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
		shortDesc: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
		// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
		id: "klutz",
		name: "Klutz",
		rating: -1,
	},
	"leafguard": {
		desc: "If Sunny Day is active, this Pokemon cannot gain a major status condition and Rest will fail for it.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
		onSetStatus(status, target, source, effect) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				if (effect && effect.status) this.add('-immune', target, '[from] ability: Leaf Guard');
				return false;
			}
		},
		onTryAddVolatile(status, target) {
			if (status.id === 'yawn' && this.field.isWeather(['sunnyday', 'desolateland'])) {
				this.add('-immune', target, '[from] ability: Leaf Guard');
				return null;
			}
		},
		id: "leafguard",
		name: "Leaf Guard",
		rating: 1,
	},
	"levitate": {
		desc: "This Pokemon is immune to Ground. Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		id: "levitate",
		name: "Levitate",
		rating: 3.5,
	},
	"libero": {
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			let type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		id: "libero",
		name: "Libero",
		rating: 4,
	},
	"lightmetal": {
		shortDesc: "This Pokemon's weight is halved.",
		onModifyWeight(weight) {
			return weight / 2;
		},
		id: "lightmetal",
		name: "Light Metal",
		rating: 1,
	},
	"lightningrod": {
		desc: "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Lightning Rod');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Lightning Rod');
				}
				return this.effectData.target;
			}
		},
		id: "lightningrod",
		name: "Lightning Rod",
		rating: 3.5,
	},
	"limber": {
		shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'par') {
				this.add('-activate', pokemon, 'ability: Limber');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'par') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Limber');
			return false;
		},
		id: "limber",
		name: "Limber",
		rating: 1.5,
	},
	"liquidooze": {
		shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",
		id: "liquidooze",
		onSourceTryHeal(damage, target, source, effect) {
			this.debug("Heal is occurring: " + target + " <- " + source + " :: " + effect.id);
			/**@type {{[k: string]: number}} */
			let canOoze = {drain: 1, leechseed: 1, strengthsap: 1};
			if (canOoze[effect.id]) {
				this.damage(damage);
				return 0;
			}
		},
		name: "Liquid Ooze",
		rating: 1.5,
	},
	"liquidvoice": {
		desc: "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Water type.",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.type = 'Water';
			}
		},
		id: "liquidvoice",
		name: "Liquid Voice",
		rating: 2.5,
	},
	"livingcastle": {
		desc: "This Pokemon cannot be struck by a critical hit and receives 3/4th damage from Super-Effective moves. Rock type moves used by this pokemon get STAB",
		shortDesc: "This Pokemon cannot be crit and receives 3/4th damage from SE moves. +Rock STAB",
		onCriticalHit: false,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Living Castle neutralize');
				return this.chainModify(0.75);
			}
		},
		onModifyMove(move) {
			if(move.type === 'Rock') {
				move.forceSTAB = true;
			}
		},
		id: "livingcastle",
		name: "Living Castle",
		rating: 4,
	},
	"longreach": {
		shortDesc: "This Pokemon's attacks do not make contact with the target.",
		onModifyMove(move) {
			delete move.flags['contact'];
		},
		id: "longreach",
		name: "Long Reach",
		rating: 1.5,
	},
	"magicbounce": {
		desc: "This Pokemon blocks certain status moves and instead uses the move against the original user.",
		shortDesc: "This Pokemon blocks certain status moves and bounces them back to the user.",
		id: "magicbounce",
		name: "Magic Bounce",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target === source || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, target, source);
			return null;
		},
		onAllyTryHitSide(target, source, move) {
			if (target.side === source.side || move.hasBounced || !move.flags['reflectable']) {
				return;
			}
			let newMove = this.getActiveMove(move.id);
			newMove.hasBounced = true;
			newMove.pranksterBoosted = false;
			this.useMove(newMove, this.effectData.target, source);
			return null;
		},
		effect: {
			duration: 1,
		},
		rating: 4.5,
	},
	"magicguard": {
		desc: "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.",
		shortDesc: "This Pokemon can only be damaged by direct attacks.",
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		id: "magicguard",
		name: "Magic Guard",
		rating: 4.5,
	},
	"magician": {
		desc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.",
		shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.",
		onSourceHit(target, source, move) {
			if (!move || !target) return;
			if (target !== source && move.category !== 'Status') {
				if (source.item || source.volatiles['gem'] || source.volatiles['fling']) return;
				let yourItem = target.takeItem(source);
				if (!yourItem) return;
				if (!source.setItem(yourItem)) {
					target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
					return;
				}
				this.add('-item', source, yourItem, '[from] ability: Magician', '[of] ' + target);
			}
		},
		id: "magician",
		name: "Magician",
		rating: 1.5,
	},
	"magmaarmor": {
		shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Magma Armor');
				pokemon.cureStatus();
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		id: "magmaarmor",
		name: "Magma Armor",
		rating: 0.5,
	},
	"magnetpull": {
		desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.",
		shortDesc: "Prevents adjacent Steel-type foes from choosing to switch.",
		onFoeTrapPokemon(pokemon) {
			if (pokemon.hasType('Steel') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!source || !this.isAdjacent(pokemon, source)) return;
			if (!pokemon.knownType || pokemon.hasType('Steel')) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "magnetpull",
		name: "Magnet Pull",
		rating: 4.5,
	},
	"marvelscale": {
		desc: "If this Pokemon has a major status condition, its Defense is multiplied by 1.5.",
		shortDesc: "If this Pokemon is statused, its Defense is 1.5x.",
		onModifyDefPriority: 6,
		onModifyDef(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "marvelscale",
		name: "Marvel Scale",
		rating: 2.5,
	},
	"megalauncher": {
		desc: "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
		shortDesc: "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['pulse']) {
				return this.chainModify(1.5);
			}
		},
		id: "megalauncher",
		name: "Mega Launcher",
		rating: 3.5,
	},
	"merciless": {
		shortDesc: "This Pokemon's attacks are critical hits if the target is poisoned.",
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['psn', 'tox'].includes(target.status)) return 5;
		},
		id: "merciless",
		name: "Merciless",
		rating: 2,
	},
	"minedeployment": {
		desc: "This pokemon deploys a mine field that deals 1/6th max hp damage on opponents that switch in.",
		shortDesc: "Mine field deploys that deals 1/6th max hp to foes.",
		onStart(pokemon) {
			let move = 'minedeploy';
			this.add('-ability', pokemon, 'Mine Deployement');
			this.useMove(move, pokemon, move.target);
		},
		id: "minedeployment",
		name: "Mine Deployment!",
		rating: 3.5,
	},
	"minus": {
		desc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.hasAbility(['minus', 'plus', 'polaritysurge'])) {
					return this.chainModify(1.5);
				}
			}
		},
		id: "minus",
		name: "Minus",
		rating: 0,
	},
	"mirrorarmor": {
		shortDesc: "Bounces back only the stat-lowering effects that the Pokémon receives.",
		onBoost(boost, target, source, effect) {
			// Don't bounce self stat changes, or boosts that have already bounced
			if (target === source || !boost || effect.id === 'mirrorarmor') return;
			/** @type {SparseBoostsTable} */
			let negativeBoosts = {};
			for (let b in boost) {
				// @ts-ignore Index signature issue with for-in loops
				if (boost[b] < 0) {
					// @ts-ignore Index signature issue with for-in loops
					negativeBoosts[b] = boost[b];
					// @ts-ignore Index signature issue with for-in loops
					delete boost[b];
				}
			}
			if (Object.keys(negativeBoosts).length) {
				this.add('-ability', target, 'Mirror Armor');
				this.boost(negativeBoosts, source, target, null, true);
			}
		},
		id: "mirrorarmor",
		name: "Mirror Armor",
		rating: 2,
	},
	"misdirection": {
		desc: "Pokemon have a 50% chance to hit this pokemon that is not counted as evasion",
		shortDesc: "Pokemon have a 50% chance to hit this pokemon that is not counted as evasion",
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (target.volatiles['foresight']) return;
			if (effect && effect.effectType === 'Move') {
				if (this.randomChance(1, 2)) {
					this.add('-activate', target, 'ability: Misdirection');
					return null;
				}
			}
		},
		onAfterDamage(damage, target, source, effect) {
			if (target.illusion && effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.singleEvent('End', this.getAbility('Illusion'), target.abilityData, target, source, effect);
			}
		},
		onEnd(pokemon) {
			if (pokemon.illusion) {
				this.debug('illusion cleared');
				pokemon.illusion = null;
				let details = pokemon.template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
				this.add('replace', pokemon, details);
				this.add('-end', pokemon, 'Illusion');
			}
		},
		onFaint(pokemon) {
			pokemon.illusion = null;
		},
		id: "misdirection",
		name: "Misdirection",
		rating: 4,
	},
	"mistysurge": {
		shortDesc: "On switch-in, this Pokemon summons Misty Terrain.",
		onStart(source) {
			this.field.setTerrain('mistyterrain');
		},
		id: "mistysurge",
		name: "Misty Surge",
		rating: 4,
	},
	"moldbreaker": {
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		id: "moldbreaker",
		name: "Mold Breaker",
		rating: 3.5,
	},
	"moltenscale": {
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down, and have a 35% chance be burned.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP, may be burned.",
		onAfterDamageOrder: 1,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 8, source, target);
				if (this.randomChance(7, 20)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		id: "moltenscale",
		name: "Molten Scale",
		rating: 4,
	},
	"moody": {
		desc: "This Pokemon has a random stat raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
		shortDesc: "Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			let stats = [];
			let boost = {};
			for (let statPlus in pokemon.boosts) {
				// @ts-ignore
				if (pokemon.boosts[statPlus] < 6) {
					stats.push(statPlus);
				}
			}
			let randomStat = stats.length ? this.sample(stats) : "";
			// @ts-ignore
			if (randomStat) boost[randomStat] = 2;

			stats = [];
			for (let statMinus in pokemon.boosts) {
				// @ts-ignore
				if (pokemon.boosts[statMinus] > -6 && statMinus !== randomStat) {
					stats.push(statMinus);
				}
			}
			randomStat = stats.length ? this.sample(stats) : "";
			// @ts-ignore
			if (randomStat) boost[randomStat] = -1;

			this.boost(boost);
		},
		id: "moody",
		name: "Moody",
		rating: 5,
	},
	"motordrive": {
		desc: "This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Motor Drive');
				}
				return null;
			}
		},
		id: "motordrive",
		name: "Motor Drive",
		rating: 3,
	},
	"moxie": {
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
		onSourceFaint(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: 1}, source);
			}
		},
		id: "moxie",
		name: "Moxie",
		rating: 3.5,
	},
	"multiscale": {
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Multiscale weaken');
				return this.chainModify(0.5);
			}
		},
		id: "multiscale",
		name: "Multiscale",
		rating: 4,
	},
	"multitype": {
		shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.",
		// Multitype's type-changing itself is implemented in statuses.js
		id: "multitype",
		name: "Multitype",
		rating: 4,
	},
	"mummy": {
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode Abilities.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",
		id: "mummy",
		name: "Mummy",
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && source.ability !== 'mummy') {
				let oldAbility = source.setAbility('mummy', target);
				if (oldAbility) {
					this.add('-activate', target, 'ability: Mummy', this.getAbility(oldAbility).name, '[of] ' + source);
				}
			}
		},
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'parentalbond' && move.hit > 1) return this.chainModify(0.25);
		},
		rating: 2.5,
	},
	"naturalcure": {
		shortDesc: "This Pokemon has its major status condition cured when it switches out.",
		onCheckShow(pokemon) {
			// This is complicated
			// For the most part, in-game, it's obvious whether or not Natural Cure activated,
			// since you can see how many of your opponent's pokemon are statused.
			// The only ambiguous situation happens in Doubles/Triples, where multiple pokemon
			// that could have Natural Cure switch out, but only some of them get cured.
			if (pokemon.side.active.length === 1) return;
			if (pokemon.showCure === true || pokemon.showCure === false) return;

			let cureList = [];
			let noCureCount = 0;
			for (const curPoke of pokemon.side.active) {
				// pokemon not statused
				if (!curPoke || !curPoke.status) {
					// this.add('-message', "" + curPoke + " skipped: not statused or doesn't exist");
					continue;
				}
				if (curPoke.showCure) {
					// this.add('-message', "" + curPoke + " skipped: Natural Cure already known");
					continue;
				}
				let template = this.getTemplate(curPoke.species);
				// pokemon can't get Natural Cure
				if (Object.values(template.abilities).indexOf('Natural Cure') < 0) {
					// this.add('-message', "" + curPoke + " skipped: no Natural Cure");
					continue;
				}
				// pokemon's ability is known to be Natural Cure
				if (!template.abilities['1'] && !template.abilities['H']) {
					// this.add('-message', "" + curPoke + " skipped: only one ability");
					continue;
				}
				// pokemon isn't switching this turn
				if (curPoke !== pokemon && !this.willSwitch(curPoke)) {
					// this.add('-message', "" + curPoke + " skipped: not switching");
					continue;
				}

				if (curPoke.hasAbility('naturalcure')) {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (and is)");
					cureList.push(curPoke);
				} else {
					// this.add('-message', "" + curPoke + " confirmed: could be Natural Cure (but isn't)");
					noCureCount++;
				}
			}

			if (!cureList.length || !noCureCount) {
				// It's possible to know what pokemon were cured
				for (const pokemon of cureList) {
					pokemon.showCure = true;
				}
			} else {
				// It's not possible to know what pokemon were cured

				// Unlike a -hint, this is real information that battlers need, so we use a -message
				this.add('-message', "(" + cureList.length + " of " + pokemon.side.name + "'s pokemon " + (cureList.length === 1 ? "was" : "were") + " cured by Natural Cure.)");

				for (const pokemon of cureList) {
					pokemon.showCure = false;
				}
			}
		},
		onSwitchOut(pokemon) {
			if (!pokemon.status) return;

			// if pokemon.showCure is undefined, it was skipped because its ability
			// is known
			if (pokemon.showCure === undefined) pokemon.showCure = true;

			if (pokemon.showCure) this.add('-curestatus', pokemon, pokemon.status, '[from] ability: Natural Cure');
			pokemon.setStatus('');

			// only reset .showCure if it's false
			// (once you know a Pokemon has Natural Cure, its cures are always known)
			if (!pokemon.showCure) pokemon.showCure = undefined;
		},
		id: "naturalcure",
		name: "Natural Cure",
		rating: 3.5,
	},
	"neuroforce": {
		shortDesc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([0x1400, 0x1000]);
			}
		},
		id: "neuroforce",
		name: "Neuroforce",
		rating: 3,
	},
	"noguard": {
		shortDesc: "Every move used by or against this Pokemon will always hit.",
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		id: "noguard",
		name: "No Guard",
		rating: 4,
	},
	"normalize": {
		desc: "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
		onModifyMovePriority: 1,
		onModifyMove(move, pokemon) {
			if (!(move.isZ && move.category !== 'Status') && !['hiddenpower', 'judgment', 'multiattack', 'naturalgift', 'revelationdance', 'struggle', 'technoblast', 'weatherball'].includes(move.id)) {
				move.type = 'Normal';
				move.normalizeBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.normalizeBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "normalize",
		name: "Normalize",
		rating: -1,
	},
	"oblivious": {
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability cures it.",
		onUpdate(pokemon) {
			if (pokemon.volatiles['attract']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('attract');
				this.add('-end', pokemon, 'move: Attract', '[from] ability: Oblivious');
			}
			if (pokemon.volatiles['taunt']) {
				this.add('-activate', pokemon, 'ability: Oblivious');
				pokemon.removeVolatile('taunt');
				// Taunt's volatile already sends the -end message when removed
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'attract') return false;
		},
		onTryHit(pokemon, target, move) {
			if (move.id === 'attract' || move.id === 'captivate' || move.id === 'taunt') {
				this.add('-immune', pokemon, '[from] ability: Oblivious');
				return null;
			}
		},
		id: "oblivious",
		name: "Oblivious",
		rating: 1,
	},
	"otherworldlure": {
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. This pokemon's attacking moves restore 25% of the damage dealt to this pokemon.",
		shortDesc: "If targeted by foe's move, that move loses +1 PP. 25% of damage dealt recovered.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Otherworld Lure');
		},
		onDeductPP(target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		onModifyMove(move) {
			if(move.category !== 'Status') {
				move.drain = [1,4];
			}
		},
		id: "otherworldlure",
		name: "Otherworld Lure",
		rating: 2.5,
	},
	"overcoat": {
		shortDesc: "This Pokemon is immune to powder moves and damage from Sandstorm or Hail.",
		onImmunity(type, pokemon) {
			if (type === 'sandstorm' || type === 'hail' || type === 'powder') return false;
		},
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (move.flags['powder'] && target !== source && this.getImmunity('powder', target)) {
				this.add('-immune', target, '[from] ability: Overcoat');
				return null;
			}
		},
		id: "overcoat",
		name: "Overcoat",
		rating: 2.5,
	},
	"overgrow": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		id: "overgrow",
		name: "Overgrow",
		rating: 2.5,
	},
	"owntempo": {
		shortDesc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
		onUpdate(pokemon) {
			if (pokemon.volatiles['confusion']) {
				this.add('-activate', pokemon, 'ability: Own Tempo');
				pokemon.removeVolatile('confusion');
			}
		},
		onTryAddVolatile(status, pokemon) {
			if (status.id === 'confusion') return null;
		},
		onHit(target, source, move) {
			if (move && move.volatileStatus === 'confusion') {
				this.add('-immune', target, 'confusion', '[from] ability: Own Tempo');
			}
		},
		id: "owntempo",
		name: "Own Tempo",
		rating: 1.5,
	},
	"parentalbond": {
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
		onPrepareHit(source, target, move) {
			if (['iceball', 'rollout'].includes(move.id)) return;
			if (move.category !== 'Status' && !move.selfdestruct && !move.multihit && !move.flags['charge'] && !move.spreadHit && !move.isZ) {
				move.multihit = 2;
				move.multihitType = 'parentalbond';
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'parentalbond' && move.hit > 1) return this.chainModify(0.25);
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'parentalbond' && move.id === 'secretpower' && move.hit < 2) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		id: "parentalbond",
		name: "Parental Bond",
		rating: 5,
	},
	"pickup": {
		shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.item) return;
			let pickupTargets = [];
			for (const target of this.getAllActive()) {
				if (target.lastItem && target.usedItemThisTurn && this.isAdjacent(pokemon, target)) {
					pickupTargets.push(target);
				}
			}
			if (!pickupTargets.length) return;
			let randomTarget = this.sample(pickupTargets);
			let item = randomTarget.lastItem;
			randomTarget.lastItem = '';
			this.add('-item', pokemon, this.getItem(item), '[from] ability: Pickup');
			pokemon.setItem(item);
		},
		id: "pickup",
		name: "Pickup",
		rating: 0.5,
	},
	"pickpocket": {
		desc: "If this Pokemon has no item, it steals the item off a Pokemon that makes contact with it. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon making contact with it.",
		onAfterMoveSecondary(target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				if (target.item) {
					return;
				}
				let yourItem = source.takeItem(target);
				if (!yourItem) {
					return;
				}
				if (!target.setItem(yourItem)) {
					source.item = yourItem.id;
					return;
				}
				this.add('-enditem', source, yourItem, '[silent]', '[from] ability: Pickpocket', '[of] ' + source);
				this.add('-item', target, yourItem, '[from] ability: Pickpocket', '[of] ' + source);
			}
		},
		id: "pickpocket",
		name: "Pickpocket",
		rating: 1.5,
	},
	"pixilate": {
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Fairy';
				move.pixilateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.pixilateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "pixilate",
		name: "Pixilate",
		rating: 4,
	},
	"plasmaoverload": {
		desc: "Normal-Type sound moves become Electric-Type, others gain the Electric-type.",
		shortDesc: "Normal-Type sound moves become Electric-type, others gain the Electric-type.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Electric') {
				return this.chainModify(1.7);
			}
		},
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && move.type === 'Electric') {
				this.damage((target.maxhp * 3)/ 16, target, target);
			}
		},
		id: "plasmaoverload",
		name: "Plasma Overload",
		rating: 4,
	},
	"plus": {
		desc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.hasAbility(['minus', 'plus', 'polaritysurge'])) {
					return this.chainModify(1.5);
				}
			}
		},
		id: "plus",
		name: "Plus",
		rating: 0,
	},
	"poisonheal": {
		desc: "If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.maxhp / 8);
				return false;
			}
		},
		id: "poisonheal",
		name: "Poison Heal",
		rating: 4,
	},
	"poisonpoint": {
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('psn', target);
				}
			}
		},
		id: "poisonpoint",
		name: "Poison Point",
		rating: 2,
	},
	"poisontouch": {
		shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
		// upokecenter says this is implemented as an added secondary effect
		onModifyMove(move) {
			if (!move || !move.flags['contact'] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'psn',
				ability: this.getAbility('poisontouch'),
			});
		},
		id: "poisontouch",
		name: "Poison Touch",
		rating: 2,
	},
	"polaritysurge": {
		desc: "If an active ally has the Plus or Minus Ability, this Pokemon's Special Attack is multiplied by 2.",
		shortDesc: "If an active ally has the Plus or Minus Ability, this Pokemon's Sp. Atk is 2x.",
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.position !== pokemon.position && !allyActive.fainted && allyActive.hasAbility(['minus', 'plus', 'polaritysurge'])) {
					return this.chainModify(2);
				}
			}
		},
		id: "polaritysurge",
		name: "Polarity Surge",
		rating: 0,
	},
	"powerchord": {
		desc: "Normal-Type sound moves become Electric-Type, others gain the Electric-type.",
		shortDesc: "Normal-Type sound moves become Electric-type, others gain the Electric-type.",
		onModifyMove(move, pokemon) {
			if (move.flags['sound']) {
				if (move.type === 'Electric') return;
				if (move.type === 'Normal') move.type = 'Electric';
				else {
					move.onEffectiveness = function(typeMod, target, type, move) {
						return typeMod + this.getEffectiveness('Electric', type);
					};
				}
			}
		},
		id: "powerchord",
		name: "Power Chord",
		rating: 4,
	},
	"powerconstruct": {
		desc: "If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.",
		shortDesc: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.",
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Zygarde' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.template.speciesid === 'zygardecomplete' || pokemon.hp > pokemon.maxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Power Construct');
			pokemon.formeChange('Zygarde-Complete', this.effect, true);
			let newHP = Math.floor(Math.floor(2 * pokemon.template.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
			pokemon.hp = newHP - (pokemon.maxhp - pokemon.hp);
			pokemon.maxhp = newHP;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		id: "powerconstruct",
		name: "Power Construct",
		rating: 5,
	},
	"powerofalchemy": {
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",
		onAllyFaint(target) {
			if (!this.effectData.target.hp) return;
			let ability = this.getAbility(target.ability);
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
			if (bannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectData.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
			this.effectData.target.setAbility(ability);
		},
		id: "powerofalchemy",
		name: "Power of Alchemy",
		rating: 0,
	},
	"powerspot": {
		shortDesc: "This Pokemon's allies have the base power of their moves multiplied by 1.3.",
		onAllyBasePowerPriority: 8,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectData.target) {
				this.debug('Power Spot boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "powerspot",
		name: "Power Spot",
		rating: 0,
	},
	"prankster": {
		shortDesc: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		id: "prankster",
		name: "Prankster",
		rating: 4,
	},
	"pressure": {
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP.",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP(target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		id: "pressure",
		name: "Pressure",
		rating: 2.5,
	},
	"primordialsea": {
		desc: "On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.",
		shortDesc: "On switch-in, heavy rain begins until this Ability is not active in battle.",
		onStart(source) {
			this.field.setWeather('primordialsea');
		},
		onAnySetWeather(target, source, weather) {
			if (this.field.getWeather().id === 'primordialsea' && !['desolateland', 'primordialsea', 'deltastream'].includes(weather.id)) return false;
		},
		onEnd(pokemon) {
			if (this.field.weatherData.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('primordialsea')) {
					this.field.weatherData.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		id: "primordialsea",
		name: "Primordial Sea",
		rating: 5,
	},
	"prismarmor": {
		desc: "This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		isUnbreakable: true,
		id: "prismarmor",
		name: "Prism Armor",
		rating: 3,
	},
	"protean": {
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			let type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		id: "protean",
		name: "Protean",
		rating: 4,
	},
	"psychicsurge": {
		shortDesc: "On switch-in, this Pokemon summons Psychic Terrain.",
		onStart(source) {
			this.field.setTerrain('psychicterrain');
		},
		id: "psychicsurge",
		name: "Psychic Surge",
		rating: 4,
	},
	"punkrock": {
		desc: "Boosts the power of sound-based moves. The Pokémon also takes half the damage from these kinds of moves.",
		shortDesc: "Boosts sound move power, 0.5× damage from sound moves.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		onSourceModifyDamage(damage, source, target, move) {
			if (move.flags['sound']) {
				this.debug('Punk Rock weaken');
				return this.chainModify(0.5);
			}
		},
		id: "punkrock",
		name: "Punk Rock",
		rating: 3,
	},
	"purepower": {
		shortDesc: "This Pokemon's Attack is doubled.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		id: "purepower",
		name: "Pure Power",
		rating: 5,
	},
	"queenlymajesty": {
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",
		onFoeTryMove(target, source, effect) {
			if ((source.side === this.effectData.target.side || effect.id === 'perishsong') && effect.priority > 0.1 && effect.target !== 'foeSide') {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Queenly Majesty', effect, '[of] ' + target);
				return false;
			}
		},
		id: "queenlymajesty",
		name: "Queenly Majesty",
		rating: 3,
	},
	"quickfeet": {
		desc: "If this Pokemon has a major status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.",
		shortDesc: "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.",
		onModifySpe(spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "quickfeet",
		name: "Quick Feet",
		rating: 2.5,
	},
	"raindish": {
		desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",
		onWeather(target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.maxhp / 16);
			}
		},
		id: "raindish",
		name: "Rain Dish",
		rating: 1.5,
	},
	"rattled": {
		desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && (effect.type === 'Dark' || effect.type === 'Bug' || effect.type === 'Ghost')) {
				this.boost({spe: 1});
			}
		},
		id: "rattled",
		name: "Rattled",
		rating: 1.5,
	},
	"receiver": {
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are Flower Gift, Forecast, Illusion, Imposter, Multitype, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",
		onAllyFaint(target) {
			if (!this.effectData.target.hp) return;
			let ability = this.getAbility(target.ability);
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
			if (bannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectData.target, ability, '[from] ability: Receiver', '[of] ' + target);
			this.effectData.target.setAbility(ability);
		},
		id: "receiver",
		name: "Receiver",
		rating: 0,
	},
	"reckless": {
		desc: "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
		shortDesc: "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil) {
				this.debug('Reckless boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		id: "reckless",
		name: "Reckless",
		rating: 3,
	},
	"refrigerate": {
		desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",
		onModifyMovePriority: -1,
		onModifyMove(move, pokemon) {
			if (move.type === 'Normal' && !['judgment', 'multiattack', 'naturalgift', 'revelationdance', 'technoblast', 'weatherball'].includes(move.id) && !(move.isZ && move.category !== 'Status')) {
				move.type = 'Ice';
				move.refrigerateBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.refrigerateBoosted) return this.chainModify([0x1333, 0x1000]);
		},
		id: "refrigerate",
		name: "Refrigerate",
		rating: 4,
	},
	"regality": {
		shortDesc: "Prevents this pokemons stats from dropping.",
		onBoost(boost, target, source, effect) {
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(/** @type {ActiveMove} */(effect)).secondaries) {
				this.add("-fail", target, "unboost", "[from] ability: Regality", "[of] " + target);
			}
		},
		id: "regality",
		name: "Regality",
		rating: 5,
	},
	"regenerator": {
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
		onSwitchOut(pokemon) {
			pokemon.heal(pokemon.maxhp / 3);
		},
		id: "regenerator",
		name: "Regenerator",
		rating: 4,
	},
	"relentlessattack": {
		shortDesc: "If this pokemon is debuffed(including self debuff) by anything, it gains +1 attack",
		onAfterEachBoost(boost, target, source) {
			if (!source) {
				return;
			}
			let statsLowered = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					statsLowered = true;
				}
			}
			if (statsLowered) {
				this.boost({atk: 1}, target, target, null, true);
			}
		},
		id: "relentlessattack",
		name: "Relentless Attack",
		rating: 4,
	},
	"restrainedrage": {
		Desc: "Prevents other Pokemon from lowering this Pokemon's attack. Buffs attack or speed if attempt is made. The next attack made by this pokemon if hit with a critical will be a crit.",
		shortDesc: "This pokemon powers up if it's attack is lowered. Next hit is critical if hit with a crit.",
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.restrainedCrit = true;
				this.add('-ability', target, 'Restrained Rage', 'boost');
			}
		},
		onModifyCritRatio(critRatio, source) {
			if (source.restrainedCrit) {
				delete source.restrainedCrit;
				this.add('-end', source, 'Restrained Rage', '[silent]');
				return 5;
			}
		},
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			if(boost.atk < 0) {
				delete boost.atk;
				let restrainChance = this.random(2);
				switch(restrainChance)
				{
					case 0:
						boost.atk = 2;
						break;
					case 1:
						boost.spe = 2;
						break;
				}
				showMsg= true;
			}
			if (showMsg && !(/** @type {ActiveMove} */(effect)).secondaries) {
				this.add('-ability', target, 'Restrained Rage', 'boost');
			}
		},
		id: "restrainedrage",
		name: "Restrained Rage",
		rating: 4,
	},
	"rivalry": {
		desc: "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.gender && defender.gender) {
				if (attacker.gender === defender.gender) {
					this.debug('Rivalry boost');
					return this.chainModify(1.25);
				} else {
					this.debug('Rivalry weaken');
					return this.chainModify(0.75);
				}
			}
		},
		id: "rivalry",
		name: "Rivalry",
		rating: 0.5,
	},
	"rkssystem": {
		shortDesc: "If this Pokemon is a Silvally, its type changes to match its held Memory.",
		// RKS System's normal type-changing itself is implemented in statuses.js
		onPrepareHit(source, target, move) {
			if(source.getItem().onMemory==='Full' && move.category !== "Status") {
				let type = '???';
				let typeArray = [];
				let fullArray = ['Ice', 'Water', 'Grass', 'Fire', 'Ground', 'Rock', 'Steel', 'Dragon', 'Fairy', 'Electric',
				'Flying', 'Poison', 'Normal', 'Fighting', 'Ghost', 'Psychic', 'Bug', 'Dark'];
				for(let typeCheck of fullArray) {
					if(this.getEffectiveness(typeCheck, target) === 1) {
						typeArray.push(typeCheck);
					}
				}
				if(typeArray.length>0) {
					let diceRoll = this.random(typeArray.length);
					type = typeArray[diceRoll];
				}
				if (type && type !== '???' && source.getTypes().join() !== type) {
					if (!source.setType(type)) return;
					this.add('-start', source, 'typechange', type, '[from] ability: RKS System');

				}
			}
			if(move.id==='multiattack')move.type=source.apparentType;
		},
		id: "rkssystem",
		name: "RKS System",
		rating: 4,
	},
	"rockhead": {
		desc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		id: "rockhead",
		name: "Rock Head",
		rating: 2.5,
	},
	"roughskin": {
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",
		onAfterDamageOrder: 1,
		onAfterDamage(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.maxhp / 8, source, target);
			}
		},
		id: "roughskin",
		name: "Rough Skin",
		rating: 3,
	},
	"runaway": {
		shortDesc: "No competitive use.",
		id: "runaway",
		name: "Run Away",
		rating: 0,
	},
	"sanddefense": {
		desc: "While above half health and this pokemon is out, a sandstorm is stirred up and cannot be replaced normally. When this pokemon falls below half health, it's defense doubles and sandstorm ends the next turn.",
		shortDesc: "Starts sandstorm, cannot be removed by normal means. Ends once health goes below half and boosts Def.",
		onModifyDefPriority: 5,
		onModifyDef(def, pokemon) {
			if (pokemon.hp <= pokemon.maxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onStart(source) {
			this.field.setWeather('ragingsandstorm');
		},
		onAnySetWeather(target, source, weather) {
			if (this.field.getWeather().id === 'ragingsandstorm' && !['desolateland', 'primordialsea', 'deltastream'].includes(weather.id)) return false;
		},
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			if(this.field.weatherData.source === target) {
				if(target.hp <= target.maxhp / 2) {
					this.field.clearWeather();
				}
			}
		},
		onEnd(pokemon) {
			if (this.field.weatherData.source !== pokemon) return;
			for (const target of this.getAllActive()) {
				if (target === pokemon) continue;
				if (target.hasAbility('sanddefense')) {
					this.field.weatherData.source = target;
					return;
				}
			}
			this.field.clearWeather();
		},
		id: "sanddefense",
		name: "Sand Defense",
		rating: -1,
	},
	"sandforce": {
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (this.field.isWeather('sandstorm')) {
				if (move.type === 'Rock' || move.type === 'Ground' || move.type === 'Steel') {
					this.debug('Sand Force boost');
					return this.chainModify([0x14CD, 0x1000]);
				}
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandforce",
		name: "Sand Force",
		rating: 2,
	},
	"sandrush": {
		desc: "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(2);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		id: "sandrush",
		name: "Sand Rush",
		rating: 3,
	},
	"sandstream": {
		shortDesc: "On switch-in, this Pokemon summons Sandstorm.",
		onStart(source) {
			this.field.setWeather('sandstorm');
		},
		id: "sandstream",
		name: "Sand Stream",
		rating: 4.5,
	},
	"sandveil": {
		desc: "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('sandstorm')) {
				this.debug('Sand Veil - decreasing accuracy');
				return accuracy * 0.8;
			}
		},
		id: "sandveil",
		name: "Sand Veil",
		rating: 1.5,
	},
	"sapsipper": {
		desc: "This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.",
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
		onTryHitPriority: 1,
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Grass') {
				if (!this.boost({atk: 1})) {
					this.add('-immune', target, '[from] ability: Sap Sipper');
				}
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (target === this.effectData.target || target.side !== source.side) return;
			if (move.type === 'Grass') {
				this.boost({atk: 1}, this.effectData.target);
			}
		},
		id: "sapsipper",
		name: "Sap Sipper",
		rating: 3.5,
	},
	"savagestrike": {
		desc: "This pokemon's moves power up the lower its health gets.",
		shortDesc: "The more hurt this pokemon is the stronger its moves are.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp/pokemon.maxhp <= 0.75) {
				if(pokemon.hp/pokemon.maxhp <= 0.5) {
					if(pokemon.hp/pokemon.maxhp <= 0.25) {
						return this.chainModify(3);
					}
					else return this.chainModify(2);
				}
				else return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp/pokemon.maxhp <= 0.75) {
				if(pokemon.hp/pokemon.maxhp <= 0.5) {
					if(pokemon.hp/pokemon.maxhp <= 0.25) {
						return this.chainModify(3);
					}
					else return this.chainModify(2);
				}
				else return this.chainModify(1.5);
			}
		},
		id: "savagestrike",
		name: "Savage Strike",
		rating: -1,
	},
	"schooling": {
		desc: "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.",
		shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.",
		onStart(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.template.speciesid === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.template.speciesid === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp > pokemon.maxhp / 4) {
				if (pokemon.template.speciesid === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.template.speciesid === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		id: "schooling",
		name: "Schooling",
		rating: 3,
	},
	"scrappy": {
		shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		id: "scrappy",
		name: "Scrappy",
		rating: 3,
	},
	"serenegrace": {
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
		},
		id: "serenegrace",
		name: "Serene Grace",
		rating: 4,
   },
	"shadowshield": {
		desc: "If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.maxhp) {
				this.debug('Shadow Shield weaken');
				return this.chainModify(0.5);
			}
		},
		isUnbreakable: true,
		id: "shadowshield",
		name: "Shadow Shield",
		rating: 4,
	},//FIX SPREAD HIT
	"shadowstrikesealed": {
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage halved. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
		onPrepareHit(source, target, move) {
			if (['iceball', 'rollout'].includes(move.id)) return;
			if (move.category !== 'Status' && !move.selfdestruct && !move.multihit && !move.flags['charge'] && !move.isZ) {
				move.multihit = 2;
				move.multihitType = 'shadowstrikesealed';
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.multihitType === 'shadowstrikesealed' && move.hit > 1) return this.chainModify(0.5);
		},
		onSourceModifySecondaries(secondaries, target, source, move) {
			if (move.multihitType === 'shadowstrikesealed' && move.id === 'secretpower' && move.hit < 2) {
				// hack to prevent accidentally suppressing King's Rock/Razor Fang
				return secondaries.filter(effect => effect.volatileStatus === 'flinch');
			}
		},
		id: "shadowstrikesealed",
		name: "Shadow Strike (Sealed)",
		rating: 5,
	},
	"shadowtag": {
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they also have this Ability.",
		onFoeTrapPokemon(pokemon) {
			if (!pokemon.hasAbility('shadowtag') && this.isAdjacent(pokemon, this.effectData.target)) {
				pokemon.tryTrap(true);
			}
		},
		onFoeMaybeTrapPokemon(pokemon, source) {
			if (!source) source = this.effectData.target;
			if (!source || !this.isAdjacent(pokemon, source)) return;
			if (!pokemon.hasAbility('shadowtag')) {
				pokemon.maybeTrapped = true;
			}
		},
		id: "shadowtag",
		name: "Shadow Tag",
		rating: 5,
	},
	"shatterstrike": {
		desc: "This pokemon's contact moves power up based on the positive stat stages of the opponent.",
		shortDesc: "The more buffs the opponent has the stronger this pokemon's contact moves get.",
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				let currentBoost = 1;
				let power = .20 * defender.positiveBoosts();
				currentBoost += power;
				return this.chainModify(currentBoost);
			}
		},
		id: "shatterstrike",
		name: "Shatter Strike",
		rating: 4.5,
	},
	"shedskin": {
		desc: "This Pokemon has a 33% chance to have its major status condition cured at the end of each turn.",
		shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn.",
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.randomChance(1, 3)) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Shed Skin');
				pokemon.cureStatus();
			}
		},
		id: "shedskin",
		name: "Shed Skin",
		rating: 3.5,
	},
	"sheerforce": {
		desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
		onModifyMove(move, pokemon) {
			if (move.secondaries) {
				delete move.secondaries;
				// Technically not a secondary effect, but it is negated
				if (move.id === 'clangoroussoulblaze') delete move.selfBoost;
				// Actual negation of `AfterMoveSecondary` effects implemented in scripts.js
				move.hasSheerForce = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.hasSheerForce) return this.chainModify([0x14CD, 0x1000]);
		},
		id: "sheerforce",
		name: "Sheer Force",
		rating: 4,
	},
	"shielddust": {
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
		onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		id: "shielddust",
		name: "Shield Dust",
		rating: 2.5,
	},
	"shieldsdown": {
		desc: "If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by major status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.",
		onStart(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Minior' || pokemon.transformed) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.template.speciesid === 'minior') {
					pokemon.formeChange('Minior-Meteor');
				}
			} else {
				if (pokemon.template.speciesid !== 'minior') {
					pokemon.formeChange(pokemon.set.species);
				}
			}
		},
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Minior' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.hp > pokemon.maxhp / 2) {
				if (pokemon.template.speciesid === 'minior') {
					pokemon.formeChange('Minior-Meteor');
				}
			} else {
				if (pokemon.template.speciesid !== 'minior') {
					pokemon.formeChange(pokemon.set.species);
				}
			}
		},
		onSetStatus(status, target, source, effect) {
			if (target.template.speciesid !== 'miniormeteor' || target.transformed) return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Shields Down');
			return false;
		},
		onTryAddVolatile(status, target) {
			if (target.template.speciesid !== 'miniormeteor' || target.transformed) return;
			if (status.id !== 'yawn') return;
			this.add('-immune', target, '[from] ability: Shields Down');
			return null;
		},
		isUnbreakable: true,
		id: "shieldsdown",
		name: "Shields Down",
		rating: 3,
	},
	"shiningaria": {
		desc: "Upon use of a sound move, there is a 30% chance of causing flinch",
		shortDesc: "Upon use of a sound move, there is a 30% chance of causing flinch",
		onModifyMove(move, pokemon) {
			if (move.flags['sound']) {
				if (!move.secondaries) {
					move.secondaries = [];
				}
				move.secondaries.push({
					chance: 30,
					volatileStatus: 'flinch',
				});
			}
		},
		id: "shiningaria",
		name: "Shining Aria",
		rating: 4,
	},
	"silentkiller": {
		desc: "This pokemon has a much higher chance to crit and deals 1.25X damage with super effective hits. If this pokemon uses a status move, until it next move opponents have 0.7X accuracy against it.",
		shortDesc: "+2 Crit chance. SE: 1.25X damage. Status move: 0.7X accuracy against this pokemon.",
		onModifyCritRatio(critRatio) {
			return critRatio + 2;
		},
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([0x1400, 0x1000]);
			}
		},
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target && target.lastMove.category === 'Status') {
				this.debug('Silent Killer - decreasing accuracy');
				return accuracy * 0.7;
			}
		},
		id: "silentkiller",
		name: "Silent Killer",
		rating: 2,
	},
	"simple": {
		shortDesc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= 2;
			}
		},
		id: "simple",
		name: "Simple",
		rating: 4,
	},
	"skilllink": {
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
		onModifyMove(move) {
			if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		id: "skilllink",
		name: "Skill Link",
		rating: 3.5,
	},
	"slowstart": {
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",
		onStart(pokemon) {
			pokemon.addVolatile('slowstart');
		},
		onEnd(pokemon) {
			delete pokemon.volatiles['slowstart'];
			this.add('-end', pokemon, 'Slow Start', '[silent]');
		},
		effect: {
			duration: 5,
			onStart(target) {
				this.add('-start', target, 'ability: Slow Start');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, pokemon) {
				return this.chainModify(0.5);
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.5);
			},
			onEnd(target) {
				this.add('-end', target, 'Slow Start');
			},
		},
		id: "slowstart",
		name: "Slow Start",
		rating: -2,
	},
	"slushrush": {
		shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('hail')) {
				return this.chainModify(2);
			}
		},
		id: "slushrush",
		name: "Slush Rush",
		rating: 2.5,
	},
	"sniper": {
		shortDesc: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.",
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		id: "sniper",
		name: "Sniper",
		rating: 1.5,
	},
	"snowcloak": {
		desc: "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		onModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			if (this.field.isWeather('hail')) {
				this.debug('Snow Cloak - decreasing accuracy');
				return accuracy * 0.8;
			}
		},
		id: "snowcloak",
		name: "Snow Cloak",
		rating: 1.5,
	},
	"snowwarning": {
		shortDesc: "On switch-in, this Pokemon summons Hail.",
		onStart(source) {
			this.field.setWeather('hail');
		},
		id: "snowwarning",
		name: "Snow Warning",
		rating: 4,
	},
	"solarpower": {
		desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.maxhp / 8, target, target);
			}
		},
		id: "solarpower",
		name: "Solar Power",
		rating: 1.5,
	},
	"soulheart": {
		desc: "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints.",
		onAnyFaintPriority: 1,
		onAnyFaint() {
			this.boost({spa: 1}, this.effectData.target);
		},
		id: "soulheart",
		name: "Soul-Heart",
		rating: 3.5,
	},
	"soundproof": {
		shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		onTryHit(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', target, '[from] ability: Soundproof');
				return null;
			}
		},
		onAllyTryHitSide(target, source, move) {
			if (move.flags['sound']) {
				this.add('-immune', this.effectData.target, '[from] ability: Soundproof');
			}
		},
		id: "soundproof",
		name: "Soundproof",
		rating: 2,
	},
	"speedboost": {
		desc: "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
		shortDesc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		id: "speedboost",
		name: "Speed Boost",
		rating: 4.5,
	},
	"stakeout": {
		shortDesc: "This Pokemon's attacking stat is doubled against a target that switched in this turn.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender) {
			if (!defender.activeTurns) {
				this.debug('Stakeout boost');
				return this.chainModify(2);
			}
		},
		id: "stakeout",
		name: "Stakeout",
		rating: 3,
	},
	"stall": {
		shortDesc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",
		onModifyPriority(priority) {
			return Math.round(priority) - 0.1;
		},
		id: "stall",
		name: "Stall",
		rating: -1,
	},
	"stalwart": {
		shortDesc: "Ignores the effects of opposing Pokémon's Abilities and moves that draw in moves.",
		onRedirectTargetPriority: 3,
		onRedirectTarget(target, source, source2, move) {
			// Fires for all pokemon on the ability holder's side apparently
			// Ensure source is the ability holder
			if (source.hasAbility('Stalwart')) {
				this.debug(`Stalwart prevented redirection`);
				return target;
			}
		},
		id: "stalwart",
		name: "Stalwart",
		rating: 0,
	},
	"stamina": {
		shortDesc: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.boost({def: 1});
			}
		},
		id: "stamina",
		name: "Stamina",
		rating: 3,
	},
	"stancechange": {
		desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",
		onBeforeMovePriority: 0.5,
		onBeforeMove(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Aegislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			let targetSpecies = (move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade');
			if (attacker.template.species !== targetSpecies) attacker.formeChange(targetSpecies);
		},
		id: "stancechange",
		name: "Stance Change",
		rating: 5,
	},
	"static": {
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",
		onAfterDamage(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('par', target);
				}
			}
		},
		id: "static",
		name: "Static",
		rating: 2,
	},
	"steadfast": {
		shortDesc: "If this Pokemon flinches, its Speed is raised by 1 stage.",
		onFlinch(pokemon) {
			this.boost({spe: 1});
		},
		id: "steadfast",
		name: "Steadfast",
		rating: 1,
	},
	"steamengine": {
		shortDesc: "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && ['Water', 'Fire'].includes(effect.type)) {
				this.boost({spe: 6});
			}
		},
		id: "steamengine",
		name: "Steam Engine",
		rating: 1,
	},
	"steelbreaker": {
		desc: "This deals double damage against steel types with slicing moves. Modifies Iron Tail and Slash. Powers up most slicing moves by 30%.",
		shortDesc: "Slicing moves: +30% power, 2X damage vs steel. Modifies 2 moves.",
		onStart(pokemon) {
			if(pokemon.template.species === 'Haxorus-Mega') {
				for (let moveSlot of pokemon.moveSlots) {
					if(moveSlot.id === 'slash') {
						let move = this.getMove('brutalslice');
						pokemon.moveSlots.push({
							move: move.name,
							id: move.id,
							pp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
							maxpp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
							target: move.target,
							disabled: false,
							used: false,
						});
					}
					if(moveSlot.id === 'irontail' || moveSlot.id === 'dragontail') {
						let move = this.getMove('axestrike');
						pokemon.moveSlots.push({
							move: move.name,
							id: move.id,
							pp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
							maxpp: ((move.noPPBoosts || move.isZ) ? move.pp : move.pp * 8 / 5),
							target: move.target,
							disabled: false,
							used: false,
						});
					}
				}
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sword'] && move.id !== 'aircutter' && move.id !== 'airslash') {
				return this.chainModify(1.3);
			}
		},
		onModifyMove(move, pokemon) {
			if(move.id === 'slash' && pokemon.template.species === 'Haxorus-Mega') {
				move.accuracy = true;
				move.secondary = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('brutalslice', pokemon, target);
					return null;
				}
			}
			if((move.id === 'irontail' || move.id === 'dragontail') && pokemon.template.species === 'Haxorus-Mega') {
				move.accuracy = true;
				move.secondary = null;
				move.onTryHit = function(target,pokemon) {
					this.useMove('axestrike', pokemon, target);
					return null;
				}
			}
			if(move.flags['sword'] && move.id !== 'aircutter' && move.id !== 'airslash') {
				move.onEffectiveness = function (typeMod, target, type) {
					if(type === 'Steel' && typeMod<=0) return 1;
				};
			}
		},
		id: "steelbreaker",
		name: "Steel Breaker",
		rating: 3.5,
	},
	"steelworker": {
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Steel') {
				this.debug('Steelworker boost');
				return this.chainModify(1.5);
			}
		},
		id: "steelworker",
		name: "Steelworker",
		rating: 3,
	},
	"stench": {
		shortDesc: "This Pokemon's attacks without a chance to flinch have a 10% chance to flinch.",
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category !== "Status") {
				this.debug('Adding Stench flinch');
				if (!move.secondaries) move.secondaries = [];
				for (const secondary of move.secondaries) {
					if (secondary.volatileStatus === 'flinch') return;
				}
				move.secondaries.push({
					chance: 10,
					volatileStatus: 'flinch',
				});
			}
		},
		id: "stench",
		name: "Stench",
		rating: 0.5,
	},
	"stickyhold": {
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",
		onTakeItem(item, pokemon, source) {
			if (this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp || pokemon.item === 'stickybarb') return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		id: "stickyhold",
		name: "Sticky Hold",
		rating: 1.5,
	},
	"stormdrain": {
		desc: "This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.boost({spa: 1})) {
					this.add('-immune', target, '[from] ability: Storm Drain');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Water' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Storm Drain');
				}
				return this.effectData.target;
			}
		},
		id: "stormdrain",
		name: "Storm Drain",
		rating: 3.5,
	},
	"strongjaw": {
		desc: "This Pokemon's bite-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return this.chainModify(1.5);
			}
		},
		id: "strongjaw",
		name: "Strong Jaw",
		rating: 3,
	},
	"sturdy": {
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.maxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		id: "sturdy",
		name: "Sturdy",
		rating: 3,
	},
	"suctioncups": {
		shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",
		onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: Suction Cups');
			return null;
		},
		id: "suctioncups",
		name: "Suction Cups",
		rating: 1,
	},
//Does not show modded line
	"superbrain": {
		shortDesc: "This Pokemon's Special Attack is doubled.",
		onModifySpAPriority: 1,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		id: "superbrain",
		name: "Super Brain",
		rating: 5,
	},
	"superdownload": {
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
		shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
		onStart(pokemon) {
			let totaldef = 0;
			let totalspd = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totaldef += target.getStat('def', false, true);
				totalspd += target.getStat('spd', false, true);
			}
			if (totaldef && totaldef >= totalspd) {
				this.boost({spa: 2});
			} else if (totalspd) {
				this.boost({atk: 2});
			}
			let totalatk = 0;
			let totalspa = 0;
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				totalatk += target.getStat('atk', false, true);
				totalspa += target.getStat('spa', false, true);
			}
			if (totalatk && totalatk >= totalspa) {
				this.boost({def: 1});
			} else if (totalspa) {
				this.boost({spd: 1});
			}
		},
		id: "superdownload",
		name: "Super Download",
		rating: 5,
	},
	"superluck": {
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		id: "superluck",
		name: "Super Luck",
		rating: 1.5,
	},
	"suresword": {
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage. Ignores targets evasion.",
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		onAnyModifyBoost(boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (boosts['evasion'] <= 0) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['evasion'] = 0;
			}
		},
		id: "suresword",
		name: "Sure Sword",
		rating: 1.5,
	},
	"surgesurfer": {
		shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",
		onModifySpe(spe) {
			if (this.field.isTerrain('electricterrain')) {
				return this.chainModify(2);
			}
		},
		id: "surgesurfer",
		name: "Surge Surfer",
		rating: 2,
	},
	"swarm": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		id: "swarm",
		name: "Swarm",
		rating: 2.5,
	},
	"sweetveil": {
		shortDesc: "This Pokemon and its allies cannot fall asleep.",
		id: "sweetveil",
		name: "Sweet Veil",
		onAllySetStatus(status, target, source, effect) {
			if (status.id === 'slp') {
				this.debug('Sweet Veil interrupts sleep');
				this.add('-activate', this.effectData.target, 'ability: Sweet Veil', '[of] ' + target);
				return null;
			}
		},
		onAllyTryAddVolatile(status, target) {
			if (status.id === 'yawn') {
				this.debug('Sweet Veil blocking yawn');
				this.add('-activate', this.effectData.target, 'ability: Sweet Veil', '[of] ' + target);
				return null;
			}
		},
		rating: 2,
	},
	"swiftswim": {
		shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['raindance', 'primordialsea'])) {
				return this.chainModify(2);
			}
		},
		id: "swiftswim",
		name: "Swift Swim",
		rating: 3,
	},
	"symbiosis": {
		desc: "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
		shortDesc: "If an ally uses its item, this Pokemon gives its item to that ally immediately.",
		onAllyAfterUseItem(item, pokemon) {
			let source = this.effectData.target;
			let myItem = source.takeItem();
			if (!myItem) return;
			// @ts-ignore
			if (!this.singleEvent('TakeItem', myItem, source.itemData, pokemon, source, this.effectData, myItem) || !pokemon.setItem(myItem)) {
				source.item = myItem.id;
				return;
			}
			this.add('-activate', source, 'ability: Symbiosis', myItem, '[of] ' + pokemon);
		},
		id: "symbiosis",
		name: "Symbiosis",
		rating: 0,
	},
	"synchronize": {
		desc: "If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same major status condition.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
		onAfterSetStatus(status, target, source, effect) {
			if (!source || source === target) return;
			if (effect && effect.id === 'toxicspikes') return;
			if (status.id === 'slp' || status.id === 'frz') return;
			this.add('-activate', target, 'ability: Synchronize');
			// Hack to make status-prevention abilities think Synchronize is a status move
			// and show messages when activating against it.
			// @ts-ignore
			source.trySetStatus(status, target, {status: status.id, id: 'synchronize'});
		},
		id: "synchronize",
		name: "Synchronize",
		rating: 2,
	},
	"tangledfeet": {
		shortDesc: "This Pokemon's evasiveness is doubled as long as it is confused.",
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target && target.volatiles['confusion']) {
				this.debug('Tangled Feet - decreasing accuracy');
				return accuracy * 0.5;
			}
		},
		id: "tangledfeet",
		name: "Tangled Feet",
		rating: 1,
	},
	"tanglinghair": {
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-ability', target, 'Tangling Hair');
				this.boost({spe: -1}, source, target, null, false, true);
			}
		},
		id: "tanglinghair",
		name: "Tangling Hair",
		rating: 2.5,
	},
	"technician": {
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		id: "technician",
		name: "Technician",
		rating: 4,
	},
	"telepathy": {
		shortDesc: "This Pokemon does not take damage from attacks made by its allies.",
		onTryHit(target, source, move) {
			if (target !== source && target.side === source.side && move.category !== 'Status') {
				this.add('-activate', target, 'ability: Telepathy');
				return null;
			}
		},
		id: "telepathy",
		name: "Telepathy",
		rating: 0,
	},
	"teravolt": {
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Teravolt');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		id: "teravolt",
		name: "Teravolt",
		rating: 3.5,
	},
	"thickfat": {
		desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.",
		onSourceModifyAtkPriority: 6,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		onSourceModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				this.debug('Thick Fat weaken');
				return this.chainModify(0.5);
			}
		},
		id: "thickfat",
		name: "Thick Fat",
		rating: 3.5,
	},
	"thirdeye": {
		shortDesc: "Protection, Substitute, and most Immunity fails when this pokemon attacks.",
		onModifyMove(move) {
			delete move.flags['protect'];
			move.flags.authentic = true;
			move.ignoreImmunity = {'Ground': true, 'Psychic': true, 'Ghost': true, 'Normal': true, 'Fighting': true};
		},
		id: "thirdeye",
		name: "Third Eye",
		rating: 2.5,
	},
	"tintedlens": {
		shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(2);
			}
		},
		id: "tintedlens",
		name: "Tinted Lens",
		rating: 3.5,
	},
	"torrent": {
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks.",
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.maxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		id: "torrent",
		name: "Torrent",
		rating: 2.5,
	},
	"toxicboost": {
		desc: "While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is poisoned, its physical attacks have 1.5x power.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if ((attacker.status === 'psn' || attacker.status === 'tox') && move.category === 'Physical') {
				return this.chainModify(1.5);
			}
		},
		id: "toxicboost",
		name: "Toxic Boost",
		rating: 3,
	},
	"toughclaws": {
		shortDesc: "This Pokemon's contact moves have their power multiplied by 1.3.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		id: "toughclaws",
		name: "Tough Claws",
		rating: 3.5,
	},
	"trace": {
		desc: "On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon's Ability. However, if one or more adjacent Pokemon has the Ability \"No Ability\", Trace won't copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned \"No Ability\", as well as Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Schooling, Stance Change, Trace, and Zen Mode.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		onStart(pokemon) {
			if (pokemon.side.foe.active.some(foeActive => foeActive && this.isAdjacent(pokemon, foeActive) && foeActive.ability === 'noability')) {
				this.effectData.gaveUp = true;
			}
		},
		onUpdate(pokemon) {
			if (!pokemon.isStarted || this.effectData.gaveUp) return;
			let possibleTargets = pokemon.side.foe.active.filter(foeActive => foeActive && this.isAdjacent(pokemon, foeActive));
			while (possibleTargets.length) {
				let rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				let target = possibleTargets[rand];
				let ability = this.getAbility(target.ability);
				let bannedAbilities = ['noability', 'battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'zenmode'];
				if (bannedAbilities.includes(target.ability)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
				pokemon.setAbility(ability);
				return;
			}
		},
		id: "trace",
		name: "Trace",
		rating: 3,
	},
	"trancetouch": {
		desc: "Physical and Special moves made by this pokemon gain an individual 30% chance of inflicting the sleep status.",
		shortDesc: "30% chance of inflicting sleep when attacking.",
		onModifyMove(move) {
			if (!move || move.category["Status"] || move.target === 'self') return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'slp',
				ability: this.getAbility('trancetouch'),
			});
		},
		id: "trancetouch",
		name: "Trance Touch",
		rating: 5,
	},
	"triage": {
		shortDesc: "This Pokemon's healing moves have their priority increased by 3.",
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.flags['heal']) return priority + 3;
		},
		id: "triage",
		name: "Triage",
		rating: 3.5,
	},
	"triplethreat": {
		shortDesc: "This Pokemon's moves strike thrice at lower power with a third chance to activate secondaries. Tri attack modified.",
		onModifyMove(move, attacker) {
			if(move.id !== 'triattack') {
				if (move.basePower > 0) {
					move.basePower *= 0.35;
					if(move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
						move.multihit = [6,15];
					} else if(move.multihit === 2) {
						move.multihit = 6;
					} else move.multihit = 3;
				}
				if (move.secondaries) {
					this.debug('slicing secondary chance');
					for (const secondary of move.secondaries) {
						if (secondary.chance) secondary.chance /= 3;
					}
				}
			}
			if(move.id === 'triattack') {
				if (move.basePower > 0) {
					move.basePower *= 1.3;
					move.basePower *= 0.35;
					move.multihit = 3;
					move.category = "Physical"
				}
				if (move.secondaries) {
					this.debug('modifying secondary chance');
					move.secondaries= [{chance: 15, status: 'brn',},{chance:15, status: 'par',},{chance:15, status: 'frz'}];
				}
			}
		},
		id: "triplethreat",
		name: "Triple Threat",
		rating: 1,
	},
	"truant": {
		shortDesc: "This Pokemon skips every other turn instead of using a move.",
		onStart(pokemon) {
			pokemon.removeVolatile('truant');
			if (pokemon.activeTurns && (pokemon.moveThisTurnResult !== undefined || !this.willMove(pokemon))) {
				pokemon.addVolatile('truant');
			}
		},
		onBeforeMovePriority: 9,
		onBeforeMove(pokemon) {
			if (pokemon.removeVolatile('truant')) {
				this.add('cant', pokemon, 'ability: Truant');
				return false;
			}
			pokemon.addVolatile('truant');
		},
		effect: {},
		id: "truant",
		name: "Truant",
		rating: -2,
	},
	"turboblaze": {
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Turboblaze');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		id: "turboblaze",
		name: "Turboblaze",
		rating: 3.5,
	},
	"twinterror": {
		shortDesc: "This Pokemon's moves strike twice at lower power with a half chance to activate secondaries.",
		onModifyMove(move, attacker) {
			if (move.basePower >0) {
				move.basePower *= 0.55;
				if(move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
					move.multihit = [4,10];
				} else if(move.multihit === 2) {
					move.multihit = 4;
				} else move.multihit = 2;
			}
			if (move.secondaries) {
				this.debug('halving secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance /= 2;
				}
			}
		},
		id: "twinterror",
		name: "Twin Terror",
		rating: 1,
	},
	"ultimatesparring": {
		shortDesc: "This Pokemon will always be critically hit. Grants 2X move BP",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.category !== 'Status') {
				return this.chainModify(2);
			}
		},
		onFoeModifyCritRatio(critRatio) {
			return 5;
		},
		id: "ultimatesparring",
		name: "Ultimate Sparring",
		rating: 1,
	},
	"unaware": {
		desc: "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
		shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
		id: "unaware",
		name: "Unaware",
		onAnyModifyBoost(boosts, target) {
			let source = this.effectData.target;
			if (source === target) return;
			if (source === this.activePokemon && target === this.activeTarget) {
				boosts['def'] = 0;
				boosts['spd'] = 0;
				boosts['evasion'] = 0;
			}
			if (target === this.activePokemon && source === this.activeTarget) {
				boosts['atk'] = 0;
				boosts['spa'] = 0;
				boosts['accuracy'] = 0;
			}
		},
		rating: 3,
	},
	"unbendingblade": {
		desc: "This Pokemon's sword-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's sword-based attacks have 1.5x power.",
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sword']) {
				return this.chainModify(1.5);
			}
		},
		id: "unbendingblade",
		name: "Unbending Blade",
		rating: 3,
	},
	"unburden": {
		desc: "If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
		onAfterUseItem(item, pokemon) {
			if (pokemon !== this.effectData.target) return;
			pokemon.addVolatile('unburden');
		},
		onTakeItem(item, pokemon) {
			pokemon.addVolatile('unburden');
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('unburden');
		},
		effect: {
			onModifySpe(spe, pokemon) {
				if (!pokemon.item) {
					return this.chainModify(2);
				}
			},
		},
		id: "unburden",
		name: "Unburden",
		rating: 3.5,
	},
	"unnerve": {
		desc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon's Speed tiers.",
		shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries.",
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Unnerve', pokemon.side.foe);
		},
		onFoeTryEatItem: false,
		id: "unnerve",
		name: "Unnerve",
		rating: 1.5,
	},
	"victorystar": {
		shortDesc: "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",
		onAllyModifyMove(move) {
			if (typeof move.accuracy === 'number') {
				move.accuracy *= 1.1;
			}
		},
		id: "victorystar",
		name: "Victory Star",
		rating: 3,
	},
	"vitalspirit": {
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'slp') {
				this.add('-activate', pokemon, 'ability: Vital Spirit');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'slp') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Vital Spirit');
			return false;
		},
		id: "vitalspirit",
		name: "Vital Spirit",
		rating: 2,
	},
	"voltabsorb": {
		desc: "This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
		id: "voltabsorb",
		name: "Volt Absorb",
		rating: 3.5,
	},
	"voltconduit": {
		desc: "This Pokemon is immune to Electric-type moves, and raises its Special Attack by 1 stage and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1, and heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				this.boost({spa: 1});
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Conduit');
				}
				return null;
			}
		},
		onAnyRedirectTarget(target, source, source2, move) {
			if (move.type !== 'Electric' || ['firepledge', 'grasspledge', 'waterpledge'].includes(move.id)) return;
			if (this.validTarget(this.effectData.target, source, move.target)) {
				if (this.effectData.target !== target) {
					this.add('-activate', this.effectData.target, 'ability: Volt Conduit');
				}
				return this.effectData.target;
			}
		},
		id: "voltconduit",
		name: "Volt Conduit",
		rating: 3.5,
	},
	"wanderingspirit": {
		desc: "The Pokémon exchanges Abilities with a Pokémon that hits it with a move that makes direct contact.",
		shortDesc: "Exchanges abilities when hitting a Pokémon with a contact move.",
		onAfterDamage(damage, target, source, move) {
			// Are these actually banned? Makes sense for them to be banned to me
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'gulpmissile', 'hungerswitch', 'iceface', 'illusion', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'wonderguard', 'zenmode'];
			if (source && source !== target && move && move.flags['contact'] && !bannedAbilities.includes(source.ability)) {
				let targetAbility = this.dex.getAbility(target.ability);
				let sourceAbility = this.dex.getAbility(source.ability);
				if (target.side === source.side) {
					this.add('-activate', source, 'ability: Wandering Spirit', '', '', '[of] ' + target);
				} else {
					this.add('-activate', source, 'ability: Wandering Spirit', targetAbility, sourceAbility, '[of] ' + target);
				}
				this.singleEvent('End', sourceAbility, source.abilityData, source);
				this.singleEvent('End', targetAbility, target.abilityData, target);
				if (targetAbility.id !== sourceAbility.id) {
					source.ability = targetAbility.id;
					target.ability = sourceAbility.id;
					source.abilityData = {id: toID(source.ability), target: source};
					target.abilityData = {id: toID(target.ability), target: target};
				}
				this.singleEvent('Start', targetAbility, source.abilityData, source);
				this.singleEvent('Start', sourceAbility, target.abilityData, target);
			}
		},
		id: "wanderingspirit",
		name: "Wandering Spirit",
		rating: 2.5,
		num: 254,
	},
	"waterabsorb": {
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		id: "waterabsorb",
		name: "Water Absorb",
		rating: 3.5,
	},
	"waterbubble": {
		desc: "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
		onModifyAtkPriority: 5,
		onSourceModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire') {
				return this.chainModify(0.5);
			}
		},
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water') {
				return this.chainModify(2);
			}
		},
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Bubble');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Water Bubble');
			return false;
		},
		id: "waterbubble",
		name: "Water Bubble",
		rating: 4,
	},
	"watercompaction": {
		shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",
		onAfterDamage(damage, target, source, effect) {
			if (effect && effect.type === 'Water') {
				this.boost({def: 2});
			}
		},
		id: "watercompaction",
		name: "Water Compaction",
		rating: 2,
	},
	"waterveil": {
		shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		onUpdate(pokemon) {
			if (pokemon.status === 'brn') {
				this.add('-activate', pokemon, 'ability: Water Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (status.id !== 'brn') return;
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Water Veil');
			return false;
		},
		id: "waterveil",
		name: "Water Veil",
		rating: 2,
	},
	"weakarmor": {
		desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.",
		onAfterDamage(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: -1, spe: 2}, target, target);
			}
		},
		id: "weakarmor",
		name: "Weak Armor",
		rating: 1,
	},
	"whitesmoke": {
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			let showMsg = false;
			for (let i in boost) {
				// @ts-ignore
				if (boost[i] < 0) {
					// @ts-ignore
					delete boost[i];
					showMsg = true;
				}
			}
			if (showMsg && !(/** @type {ActiveMove} */(effect)).secondaries) {
				this.add("-fail", target, "unboost", "[from] ability: White Smoke", "[of] " + target);
			}
		},
		id: "whitesmoke",
		name: "White Smoke",
		rating: 2,
	},
	"wonderguard": {
		shortDesc: "This Pokemon can only be damaged by supereffective moves and indirect damage.",
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				this.add('-immune', target, '[from] ability: Wonder Guard');
				return null;
			}
		},
		id: "wonderguard",
		name: "Wonder Guard",
		rating: 5,
	},
	"wonderskin": {
		desc: "All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.",
		shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",
		onModifyAccuracyPriority: 10,
		onModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Status' && typeof move.accuracy === 'number') {
				this.debug('Wonder Skin - setting accuracy to 50');
				return 50;
			}
		},
		id: "wonderskin",
		name: "Wonder Skin",
		rating: 2,
	},
	"zenmode": {
		desc: "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.",
		shortDesc: "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.",
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.maxhp / 2 && pokemon.template.speciesid === 'darmanitan') {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.hp > pokemon.maxhp / 2 && pokemon.template.speciesid === 'darmanitanzen') {
				pokemon.addVolatile('zenmode'); // in case of base Darmanitan-Zen
				pokemon.removeVolatile('zenmode');
			}
		},
		onEnd(pokemon) {
			if (!pokemon.volatiles['zenmode'] || !pokemon.hp) return;
			pokemon.transformed = false;
			delete pokemon.volatiles['zenmode'];
			pokemon.formeChange('Darmanitan', this.effect, false, '[silent]');
		},
		effect: {
			onStart(pokemon) {
				if (pokemon.template.speciesid !== 'darmanitanzen') pokemon.formeChange('Darmanitan-Zen');
			},
			onEnd(pokemon) {
				pokemon.formeChange('Darmanitan');
			},
		},
		id: "zenmode",
		name: "Zen Mode",
		rating: -1,
	},
};

exports.BattleAbilities = BattleAbilities;
