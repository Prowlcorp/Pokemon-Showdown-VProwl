/*
current: 768
List of flags and their descriptions:

authentic: Ignores a target's substitute.
bite: Power is multiplied by 1.5 when used by a Pokemon with the Strong Jaw Ability.
bullet: Has no effect on Pokemon with the Bulletproof Ability.
charge: The user is unable to make a move between turns.
contact: Makes contact.
dance: When used by a Pokemon, other Pokemon with the Dancer Ability can attempt to execute the same move.
defrost: Thaws the user if executed successfully while the user is frozen.
distance: Can target a Pokemon positioned anywhere in a Triple Battle.
gravity: Prevented from being executed or selected during Gravity's effect.
heal: Prevented from being executed or selected during Heal Block's effect.
mirror: Can be copied by Mirror Move.
mystery: Unknown effect.
powder: Has no effect on Grass-type Pokemon, Pokemon with the Overcoat Ability, and Pokemon holding Safety Goggles.
protect: Blocked by Detect, Protect, Spiky Shield, and if not a Status move, King's Shield.
pulse: Power is multiplied by 1.5 when used by a Pokemon with the Mega Launcher Ability.
punch: Power is multiplied by 1.2 when used by a Pokemon with the Iron Fist Ability.
recharge: If this move is successful, the user must recharge on the following turn and cannot make a move.
reflectable: Bounced back to the original user by Magic Coat or the Magic Bounce Ability.
snatch: Can be stolen from the original user and instead used by another Pokemon using Snatch.
sound: Has no effect on Pokemon with the Soundproof Ability.
sword: Power is multiplied by 1.5 when used by a pokemon with the Unbending Blade ability.

*/

'use strict';

/**@type {{[k: string]: MoveData}} */
let BattleMovedex = {
	"10000000voltthunderbolt": {
		accuracy: true,
		basePower: 195,
		category: "Special",
		desc: "Has a very high chance for a critical hit.",
		shortDesc: "Very high critical hit ratio.",
		id: "10000000voltthunderbolt",
		name: "10,000,000 Volt Thunderbolt",
		pp: 1,
		priority: 0,
		flags: {distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "pikashuniumz",
		critRatio: 3,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	"absorb": {
		accuracy: 100,
		basePower: 20,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "absorb",
		name: "Absorb",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 100,
		contestType: "Clever",
	},
	"abyssalcrush": {
		accuracy: 30,
		basePower: 0,
		category: "Special",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "abyssalcrush",
		name: "Abyssal Crush",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 180,
		contestType: "Tough",
	},
	"accelerock": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "accelerock",
		name: "Accelerock",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 100,
		contestType: "Cool",
	},
	"acid": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the foe(s) Sp. Def by 1.",
		id: "acid",
		name: "Acid",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: [
			{
				chance: 10,
				boosts: {
					spd: -1,
				},
			}, {
				chance: 10,
				status: 'brn',
			},
		],
		target: "allAdjacentFoes",
		type: "Poison",
		zMovePower: 100,
		contestType: "Clever",
	},
	"acidarmor": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2.",
		id: "acidarmor",
		name: "Acid Armor",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"aciddownpour": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "aciddownpour",
		name: "Acid Downpour",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "poisoniumz",
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Cool",
	},
	"acidspray": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Special Defense by 2 stages.",
		shortDesc: "100% chance to lower the target's Sp. Def by 2.",
		id: "acidspray",
		name: "Acid Spray",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Poison",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"acrobatics": {
		accuracy: 100,
		basePower: 55,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.item) {
				this.debug("Power doubled for no item");
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		shortDesc: "Power doubles if the user has no held item.",
		id: "acrobatics",
		name: "Acrobatics",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 100,
		contestType: "Cool",
	},
	"acupressure": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises a random stat by 2 stages as long as the stat is not already at stage 6. The user can choose to use this move on itself or an adjacent ally. Fails if no stat stage can be raised or if used on an ally with a substitute.",
		shortDesc: "Raises a random stat of the user or an ally by 2.",
		id: "acupressure",
		name: "Acupressure",
		pp: 30,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			let stats = [];
			for (let stat in target.boosts) {
				// @ts-ignore
				if (target.boosts[stat] < 6) {
					stats.push(stat);
				}
			}
			if (stats.length) {
				let randomStat = this.sample(stats);
				/**@type {{[k: string]: number}} */
				let boost = {};
				boost[randomStat] = 2;
				this.boost(boost);
			} else {
				return false;
			}
		},
		secondary: null,
		target: "adjacentAllyOrSelf",
		type: "Normal",
		zMoveEffect: 'crit2',
		contestType: "Tough",
	},
	"aerialace": {
		accuracy: true,
		basePower: 60,
		category: "Physical",
		shortDesc: "This move does not check accuracy.",
		id: "aerialace",
		name: "Aerial Ace",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 120,
		contestType: "Cool",
	},
	"aeroblast": {
		accuracy: 95,
		basePower: 100,
		category: "Special",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "aeroblast",
		name: "Aeroblast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 180,
		contestType: "Cool",
	},
	"afteryou": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target makes its move immediately after the user this turn, no matter the priority of its selected move. Fails if the target would have moved next anyway, or if the target already moved this turn.",
		shortDesc: "The target makes its move right after the user.",
		id: "afteryou",
		name: "After You",
		pp: 15,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.side.active.length < 2) return false; // fails in singles
			let action = this.willMove(target);
			if (action) {
				this.cancelMove(target);
				this.queue.unshift(action);
				this.add('-activate', target, 'move: After You');
			} else {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 2},
		contestType: "Cute",
	},
	"agility": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Speed by 2 stages.",
		shortDesc: "Raises the user's Speed by 2.",
		id: "agility",
		name: "Agility",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"aircutter": {
		accuracy: 95,
		basePower: 60,
		category: "Special",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. Hits adjacent foes.",
		id: "aircutter",
		name: "Air Cutter",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		zMovePower: 120,
		contestType: "Cool",
	},
	"airslash": {
		accuracy: 95,
		basePower: 75,
		category: "Special",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "airslash",
		name: "Air Slash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		zMovePower: 140,
		contestType: "Cool",
	},
	"alloutpummeling": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "alloutpummeling",
		name: "All-Out Pummeling",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "fightiniumz",
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Cool",
	},
	"allyswitch": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps positions with its ally. Fails if the user is the only Pokemon on its side.",
		shortDesc: "The user swaps positions with its ally.",
		id: "allyswitch",
		name: "Ally Switch",
		pp: 15,
		priority: 2,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(source) {
			if (source.side.active.length === 1) return false;
			if (source.side.active.length === 3 && source.position === 1) return false;
		},
		onHit(pokemon) {
			let newPosition = (pokemon.position === 0 ? pokemon.side.active.length - 1 : 0);
			if (!pokemon.side.active[newPosition]) return false;
			if (pokemon.side.active[newPosition].fainted) return false;
			this.swapPosition(pokemon, newPosition, '[from] move: Ally Switch');
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveBoost: {spe: 2},
		contestType: "Clever",
	},
	"amnesia": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Defense by 2 stages.",
		shortDesc: "Raises the user's Sp. Def by 2.",
		id: "amnesia",
		name: "Amnesia",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spd: 2,
		},
		secondary: {
			chance: 20,
			boosts: {
				spa: -1,
			},
		},
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"anchorshot": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		id: "anchorshot",
		name: "Anchor Shot",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Tough",
	},
	"ancientpower": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
		id: "ancientpower",
		name: "Ancient Power",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Rock",
		zMovePower: 120,
		contestType: "Tough",
	},
	"angelwings": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sharply raises Special Attack and Attack and raises speed. Gain weakness to all types. Can only be used once",
		shortDesc: "Sharply raises SpA and Atk, raises speed. Weak to all types.",
		id: "angelwings",
		name: "Angel Wings",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 2,
			spa: 2,
			spe: 1,
		},
		volatileStatus: 'angelwings',
		effect: {
			noCopy: true,
			onStart(target, source, effect) {
				if (effect && effect.id === 'zpower') {
					this.add('-start', target, 'move: Angel Wings', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Angel Wings', '[silent]');
				} else {
					this.add('-start', target, 'move: Angel Wings');
				}
			},
			onNegateImmunity(pokemon, type) {
				return false;
			},
			onEffectiveness(typeMod, target, type, move) {
				if(target.angelChecked) return 0;
				target.angelChecked = true;
				return 1;
			},
			onAfterDamage(damage, target, source, effect) {
				delete target.angelChecked;
			},
		},
		onTryMove(pokemon, target, move) {
			if (!pokemon.volatiles['angelwings']) return;
			this.add('-fail', pokemon, 'move: Angel Wings');
			this.attrLastMove('[still]');
			return null;
		},
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"aquajet": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "aquajet",
		name: "Aqua Jet",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Cool",
	},
	"aquaring": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user has 1/16 of its maximum HP, rounded down, restored at the end of each turn while it remains active. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. If the user uses Baton Pass, the replacement will receive the healing effect.",
		shortDesc: "User recovers 1/16 max HP per turn.",
		id: "aquaring",
		name: "Aqua Ring",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'aquaring',
		effect: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Aqua Ring');
			},
			onResidualOrder: 6,
			onResidual(pokemon) {
				this.heal(pokemon.maxhp / 16);
			},
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMoveBoost: {def: 1},
		contestType: "Beautiful",
	},
	"aquatail": {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "aquatail",
		name: "Aqua Tail",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"armthrust": {
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "armthrust",
		name: "Arm Thrust",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"aromatherapy": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Every Pokemon in the user's party is cured of its major status condition. Active Pokemon with the Sap Sipper Ability are not cured, unless they are the user.",
		shortDesc: "Cures the user's party of all status conditions.",
		id: "aromatherapy",
		name: "Aromatherapy",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon, source, move) {
			this.add('-activate', source, 'move: Aromatherapy');
			let success = false;
			for (const ally of pokemon.side.pokemon) {
				if (ally !== source && ((ally.hasAbility('sapsipper')) ||
						(ally.volatiles['substitute'] && !move.infiltrates))) {
					continue;
				}
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Grass",
		zMoveEffect: 'heal',
		contestType: "Clever",
	},
	"aromaticmist": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the target's Special Defense by 1 stage. Fails if there is no ally adjacent to the user.",
		shortDesc: "Raises an ally's Sp. Def by 1.",
		id: "aromaticmist",
		name: "Aromatic Mist",
		pp: 20,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Fairy",
		zMoveBoost: {spd: 2},
		contestType: "Beautiful",
	},
	"assist": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "A random move among those known by the user's party members is selected for use. Does not select Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Bounce, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dig, Dive, Dragon Tail, Endure, Feint, Fly, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Phantom Force, Protect, Rage Powder, Roar, Shadow Force, Shell Trap, Sketch, Sky Drop, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
		shortDesc: "Uses a random move known by a team member.",
		id: "assist",
		name: "Assist",
		pp: 20,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			let moves = [];
			for (const pokemon of target.side.pokemon) {
				if (pokemon === target) continue;
				for (const moveSlot of pokemon.moveSlots) {
					let move = moveSlot.id;
					let noAssist = [
						'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'bounce', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dig', 'dive', 'dragontail', 'endure', 'feint', 'fly', 'focuspunch', 'followme', 'helpinghand', 'holdhands', 'kingsshield', 'matblock', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'phantomforce', 'protect', 'ragepowder', 'roar', 'shadowforce', 'shelltrap', 'sketch', 'skydrop', 'sleeptalk', 'snatch', 'spikyshield', 'spotlight', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind',
					];
					if (!noAssist.includes(move) && !this.getMove(move).isZ) {
						moves.push(move);
					}
				}
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},
	"assurance": {
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			if (target.hurtThisTurn) {
				this.debug('Boosted for being damaged this turn');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the target has already taken damage this turn, other than direct damage from Belly Drum, confusion, Curse, or Pain Split.",
		shortDesc: "Power doubles if target was damaged this turn.",
		id: "assurance",
		name: "Assurance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 120,
		contestType: "Clever",
	},
	"astonish": {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "astonish",
		name: "Astonish",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 100,
		contestType: "Cute",
	},
	"attackorder": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "attackorder",
		name: "Attack Order",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 175,
		contestType: "Clever",
	},
//CHANGE
	"attract": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
		shortDesc: "A target of the opposite gender gets infatuated.",
		id: "attract",
		name: "Attract",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'attract',
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.id === 'cutecharm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate(pokemon) {
				if (this.effectData.source && !this.effectData.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectData.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"aurasphere": {
		accuracy: true,
		basePower: 80,
		category: "Special",
		shortDesc: "This move does not check accuracy.",
		id: "aurasphere",
		name: "Aura Sphere",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, pulse: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"aurorabeam": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
		shortDesc: "10% chance to lower the target's Attack by 1.",
		id: "aurorabeam",
		name: "Aurora Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Ice",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"auroraveil": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members take 0.5x damage from physical and special attacks, or 0.66x damage if in a Double Battle; does not reduce damage further with Reflect or Light Screen. Critical hits ignore this protection. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Brick Break and Psychic Fangs remove the effect before damage is calculated. Lasts for 8 turns if the user is holding Light Clay. Fails unless the weather is Hail.",
		shortDesc: "For 5 turns, damage to allies is halved. Hail only.",
		id: "auroraveil",
		name: "Aurora Veil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'auroraveil',
		onTryHitSide() {
			if (!this.field.isWeather('hail')) return false;
		},
		effect: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source && source.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target) {
					if ((target.side.getSideCondition('reflect') && this.getCategory(move) === 'Physical') ||
							(target.side.getSideCondition('lightscreen') && this.getCategory(move) === 'Special')) {
						return;
					}
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Aurora Veil weaken');
						if (target.side.active.length > 1) return this.chainModify([0xAAC, 0x1000]);
						return this.chainModify(0.5);
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Aurora Veil');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 1,
			onEnd(side) {
				this.add('-sideend', side, 'move: Aurora Veil');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"autotomize": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Speed by 2 stages. If the user's Speed was changed, the user's weight is reduced by 100 kg as long as it remains active. This effect is stackable but cannot reduce the user's weight to less than 0.1 kg.",
		shortDesc: "Raises the user's Speed by 2; user loses 100 kg.",
		id: "autotomize",
		name: "Autotomize",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			let hasContrary = pokemon.hasAbility('contrary');
			if ((!hasContrary && pokemon.boosts.spe === 6) || (hasContrary && pokemon.boosts.spe === -6)) {
				return false;
			}
		},
		boosts: {
			spe: 2,
		},
		volatileStatus: 'autotomize',
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon) {
				if (pokemon.template.weightkg > 0.1) {
					this.effectData.multiplier = 1;
					this.add('-start', pokemon, 'Autotomize');
				}
			},
			onRestart(pokemon) {
				if (pokemon.template.weightkg - (this.effectData.multiplier * 100) > 0.1) {
					this.effectData.multiplier++;
					this.add('-start', pokemon, 'Autotomize');
				}
			},
			onModifyWeightPriority: 1,
			onModifyWeight(weight, pokemon) {
				if (this.effectData.multiplier) {
					weight -= this.effectData.multiplier * 100;
					if (weight < 0.1) weight = 0.1;
					return weight;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"avalanche": {
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			let damagedByTarget = pokemon.attackedBy.some(p =>
				p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('Boosted for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the user was hit by the target this turn.",
		shortDesc: "Power doubles if user is damaged by the target.",
		id: "avalanche",
		name: "Avalanche",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"axestrike": {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		desc: "Lowers own defense one stage. Has a 50% chance to cause bleeding. Two 30% chances to lower opponents defense. ",
		shortDesc: "Lowers own defense. Half chance of causing bld. Twin chances of dropping opponent def.",
		id: "axestrike",
		name: "Axe Strike",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(pokemon, target, move) {
			if (pokemon.template.species === 'Haxorus-Mega' || move.hasBounced) {
				return;
			}
			this.add('-fail', pokemon, 'move: Axe Strike');
			this.hint("Only a Pokemon whose form is Haxorus-Mega can use this move.");
			return null;
		},
		self: {
			boosts: {
				def: -1,
			},
		},
		secondaries: [
			{
				chance: 30,
				boosts: {
					def: -1,
				},
			}, {
				chance: 30,
				boosts: {
					def: -1,
				},
			},
		],
		target: "normal",
		type: "Steel",
		zMovePower: 190,
		contestType: "Cool",
	},
	"babydolleyes": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack by 1.",
		id: "babydolleyes",
		name: "Baby-Doll Eyes",
		pp: 30,
		priority: 1,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"banefulbunker": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user become poisoned. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from moves. Contact: poison.",
		id: "banefulbunker",
		name: "Baneful Bunker",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'banefulbunker',
		onTryHit(target, source, move) {
			return !!this.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					source.trySetStatus('psn', target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZPowered && move.flags['contact']) {
					source.trySetStatus('psn', target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"barrage": {
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "barrage",
		name: "Barrage",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cute",
	},
	"barrier": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2.",
		id: "barrier",
		name: "Barrier",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"batonpass": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is replaced with another Pokemon in its party. The selected Pokemon has the user's stat stage changes, confusion, and certain move effects transferred to it.",
		shortDesc: "User switches, passing stat changes and more.",
		id: "batonpass",
		name: "Baton Pass",
		pp: 40,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfSwitch: 'copyvolatile',
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"beakblast": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "If the user is hit by a contact move this turn before it can execute this move, the attacker is burned.",
		shortDesc: "Burns on contact with the user before it moves.",
		id: "beakblast",
		name: "Beak Blast",
		pp: 15,
		priority: -3,
		flags: {bullet: 1, protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('beakblast');
		},
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Beak Blast');
			},
			onHit(pokemon, source, move) {
				if (move.flags['contact']) {
					source.trySetStatus('brn', pokemon);
				}
			},
		},
		// FIXME: onMoveAborted(pokemon) {pokemon.removeVolatile('beakblast')},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('beakblast');
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMovePower: 180,
		contestType: "Tough",
	},
	"beatup": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			// @ts-ignore
			return 5 + Math.floor(move.allies.shift().template.baseStats.atk / 10);
		},
		category: "Physical",
		desc: "Hits one time for the user and one time for each unfainted Pokemon without a major status condition in the user's party. The power of each hit is equal to 5+(X/10), where X is each participating Pokemon's base Attack; each hit is considered to come from the user.",
		shortDesc: "All healthy allies aid in damaging the target.",
		id: "beatup",
		name: "Beat Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			move.allies = pokemon.side.pokemon.filter(ally => ally === pokemon || !ally.fainted && !ally.status);
			move.multihit = move.allies.length;
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 100,
		contestType: "Clever",
	},
	"kyuubiburn": {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		defensiveCategory: "Special",
		desc: "Crushes the target in a hand then burns them with intense flames sure to leave a bad burn that remains until swapping which then leaves the burn status. Hard for this pokemon to evade after this.",
		shortDesc: "Crushes target and badly burns them. Lowers own evasion",
		id: "kyuubiburn",
		name: "Kyuubi Burn",
		pp: 10,
		priority: 0,
		flags: {protect: 1, contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'kyuubiburn',
		effect: {
			onStart(target) {
				this.add('-start', target, 'move: Kyuubi Burn');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				let target = this.effectData.source.side.active[pokemon.volatiles['kyuubiburn'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to burn');
					return;
				}
				this.damage(pokemon.maxhp / 8, pokemon, target);
			},
			onBeforeSwitchOut(pokemon) {
				pokemon.trySetStatus('Brn');
			},
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					evasion: -1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 190,
		contestType: "Tough",
	},
	"belch": {
		accuracy: 90,
		basePower: 120,
		category: "Special",
		desc: "This move cannot be selected until the user eats a Berry, either by eating one that was held, stealing and eating one off another Pokemon with Bug Bite or Pluck, or eating one that was thrown at it with Fling. Once the condition is met, this move can be selected and used for the rest of the battle even if the user gains or uses another item or switches out. Consuming a Berry with Natural Gift does not count for the purposes of eating one.",
		shortDesc: "Cannot be selected until the user eats a Berry.",
		id: "belch",
		name: "Belch",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		// Move disabling implemented in Battle#nextTurn in sim/battle.js
		secondary: null,
		target: "normal",
		type: "Poison",
		zMovePower: 190,
		contestType: "Tough",
	},
	"bellydrum": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 12 stages in exchange for the user losing 1/2 of its maximum HP, rounded down. Fails if the user would faint or if its Attack stat stage is 6.",
		shortDesc: "User loses 50% max HP. Maximizes Attack.",
		id: "bellydrum",
		name: "Belly Drum",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.hp <= target.maxhp / 2 || target.boosts.atk >= 6 || target.maxhp === 1) { // Shedinja clause
				return false;
			}
			this.directDamage(target.maxhp / 2);
			this.boost({atk: 12}, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Cute",
	},
	"bestow": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target receives the user's held item. Fails if the user has no item or is holding a Mail or Z-Crystal, if the target is already holding an item, if the user is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, a Pokemon that can Mega Evolve holding the Mega Stone for its species, or if the target is one of those Pokemon and the user is holding the respective item.",
		shortDesc: "User passes its held item to the target.",
		id: "bestow",
		name: "Bestow",
		pp: 15,
		priority: 0,
		flags: {mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			if (target.item) {
				return false;
			}
			let myItem = source.takeItem();
			if (!myItem) return false;
			if (!this.singleEvent('TakeItem', myItem, source.itemData, target, source, move, myItem) || !target.setItem(myItem)) {
				source.item = myItem.id;
				return false;
			}
			this.add('-item', target, myItem.name, '[from] move: Bestow', '[of] ' + source);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 2},
		contestType: "Cute",
	},
	"bide": {
		accuracy: true,
		basePower: 0,
		category: "Physical",
		desc: "The user spends two turns locked into this move and then, on the second turn after using this move, the user attacks the last Pokemon that hit it, inflicting double the damage in HP it lost to attacks during the two turns. If the last Pokemon that hit it is no longer active, the user attacks a random opposing Pokemon instead. If the user is prevented from moving during this move's use, the effect ends. This move does not check accuracy and does not ignore type immunity.",
		shortDesc: "Waits 2 turns; deals double the damage taken.",
		id: "bide",
		name: "Bide",
		pp: 10,
		priority: 1,
		flags: {contact: 1, protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'bide',
		ignoreImmunity: true,
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['bide']) return true;
		},
		effect: {
			duration: 3,
			onLockMove: 'bide',
			onStart(pokemon) {
				this.effectData.totalDamage = 0;
				this.add('-start', pokemon, 'move: Bide');
			},
			onDamagePriority: -101,
			onDamage(damage, target, source, move) {
				if (!move || move.effectType !== 'Move' || !source) return;
				this.effectData.totalDamage += damage;
				this.effectData.lastDamageSource = source;
			},
			onBeforeMove(pokemon, target, move) {
				if (this.effectData.duration === 1) {
					this.add('-end', pokemon, 'move: Bide');
					target = this.effectData.lastDamageSource;
					if (!target || !this.effectData.totalDamage) {
						this.attrLastMove('[still]');
						this.add('-fail', pokemon);
						return false;
					}
					if (!target.isActive) {
						const possibleTarget = this.resolveTarget(pokemon, this.getMove('pound'));
						if (!possibleTarget) {
							this.add('-miss', pokemon);
							return false;
						}
						target = possibleTarget;
					}
					let moveData = {
						id: 'bide',
						name: "Bide",
						accuracy: true,
						damage: this.effectData.totalDamage * 2,
						category: "Physical",
						priority: 1,
						flags: {contact: 1, protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
						effectType: 'Move',
						type: 'Normal',
					};
					// @ts-ignore
					this.tryMoveHit(target, pokemon, moveData);
					return false;
				}
				this.add('-activate', pokemon, 'move: Bide');
			},
			onMoveAborted(pokemon) {
				pokemon.removeVolatile('bide');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Bide', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"bijuubomb": {
		accuracy: 85,
		basePower: 200,
		category: "Physical",
		defensiveCategory: "Special",
		desc: "This move becomes a Special attack if the user's Special Attack is greater than its Attack, including stat stage changes. Hits physical defense. If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "Special if user's Sp. Atk > Atk. Hits def. User cannot move next turn.",
		id: "bijuubomb",
		name: "Bijuu Bomb",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, recharge: 1},
		self: {
			volatileStatus: 'mustrecharge',
		},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
			if (pokemon.template.species === 'Shukaku') {
				move.type='Ground';
			}
			if (pokemon.template.species === 'Kurama' || pokemon.template.species === 'Kurama-Medium' || pokemon.template.species === 'Kurama-Small') {
				move.type='Fire';
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.getEffectiveness('Dark', type);
		},
		secondary: null,
		target: "normal",
		type: "???",
		zMovePower: 200,
		contestType: "Cool",
	},
	"bind": {
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "bind",
		name: "Bind",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"bite": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "bite",
		name: "Bite",
		pp: 25,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dark",
		zMovePower: 120,
		contestType: "Tough",
	},
	"blackholeeclipse": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "blackholeeclipse",
		name: "Black Hole Eclipse",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "darkiniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	"blastburn": {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot make a move. Has a 20% chance to cauterize wounds.",
		shortDesc: "User cannot move next turn. May stop bleeding.",
		id: "blastburn",
		name: "Blast Burn",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: {
			chance: 20,
			onHit(target) {
				if (target.status === 'bld') target.cureStatus();
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"blazekick": {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "Has a 10% chance to burn the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to burn.",
		id: "blazekick",
		name: "Blaze Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		zMovePower: 160,
		contestType: "Cool",
	},
	"blizzard": {
		accuracy: 70,
		basePower: 110,
		category: "Special",
		desc: "Has a 10% chance to freeze the target. If the weather is Hail, this move does not check accuracy.",
		shortDesc: "10% chance to freeze foe(s). Can't miss in hail.",
		id: "blizzard",
		name: "Blizzard",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move) {
			if (this.field.isWeather('hail')) move.accuracy = true;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		zMovePower: 185,
		contestType: "Beautiful",
	},
	"block": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		id: "block",
		name: "Block",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"bloomdoom": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "bloomdoom",
		name: "Bloom Doom",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "grassiumz",
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Cool",
	},
	"blueflare": {
		accuracy: 85,
		basePower: 130,
		category: "Special",
		desc: "Has a 20% chance to burn the target. Will cure bleed if burns.",
		shortDesc: "20% chance to burn the target. Will cure bleed if burns.",
		id: "blueflare",
		name: "Blue Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"bodyslam": {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to paralyze the target.",
		id: "bodyslam",
		name: "Body Slam",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Tough",
	},
	"boltbeak": {
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.willMove(target)) {
				this.debug('Bolt Beak damage boost');
				return move.basePower * 2;
			}
			this.debug('Bolt Beak NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		desc: "If the user moves before the target, this move's power is doubled.",
		shortDesc: "Double power if the user moves first.",
		id: "boltbeak",
		isViable: true,
		name: "Bolt Beak",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
	},
	"boltstrike": {
		accuracy: 85,
		basePower: 130,
		category: "Physical",
		desc: "Has a 20% chance to paralyze the target.",
		shortDesc: "20% chance to paralyze the target.",
		id: "boltstrike",
		name: "Bolt Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"boneclub": {
		accuracy: 85,
		basePower: 65,
		category: "Physical",
		desc: "Has a 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target.",
		id: "boneclub",
		name: "Bone Club",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ground",
		zMovePower: 120,
		contestType: "Tough",
	},
	"bonemerang": {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		id: "bonemerang",
		name: "Bonemerang",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 100,
		contestType: "Tough",
	},
	"bonerush": {
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "bonerush",
		name: "Bone Rush",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 140,
		contestType: "Tough",
	},
	"boomburst": {
		accuracy: 100,
		basePower: 140,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		id: "boomburst",
		name: "Boomburst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMovePower: 200,
		contestType: "Tough",
	},
	"bounce": {
		accuracy: 85,
		basePower: 85,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Bounces turn 1. Hits turn 2. 30% paralyze.",
		id: "bounce",
		name: "Bounce",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onTryImmunity(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'helpinghand'].includes(move.id)) {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
			onSourceBasePower(basePower, target, source, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "any",
		type: "Flying",
		zMovePower: 160,
		contestType: "Cute",
	},
	"branchpoke": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "branchpoke",
		name: "Branch Poke",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
	},
	"bravebird": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
		id: "bravebird",
		name: "Brave Bird",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [33, 100],
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 190,
		contestType: "Cool",
	},
	"breakingswipe": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "100% chance to lower the foe's Attack by 1 stage. Hits all adjecent foes.",
		shortDesc: "100% chance to lower adjacent foes' Atk by 1.",
		id: "breakingswipe",
		name: "Breaking Swipe",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dragon",
	},
	"breakneckblitz": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "breakneckblitz",
		name: "Breakneck Blitz",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "normaliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	"breakstep": {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Has a 100% chance to raise the user's Evasion by 1 stage.",
		shortDesc: "100% chance to raise the user's Evasion by 1.",
		id: "breakstep",
		name: "Break Step",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					evasion: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"brickbreak": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, unless the target is immune.",
		id: "brickbreak",
		name: "Brick Break",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Fighting')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 140,
		contestType: "Cool",
	},
	"brine": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Power doubles if the target has less than or equal to half of its maximum HP remaining.",
		shortDesc: "Power doubles if the target's HP is 50% or less.",
		id: "brine",
		name: "Brine",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (target.hp * 2 <= target.maxhp) {
				currentBoost *=2;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 120,
		contestType: "Tough",
	},
	"brutalslice": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Will cause bleeding.",
		shortDesc: "High critical hit ratio. Will cause bleeding.",
		id: "brutalslice",
		name: "Brutal Slice",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		onTryMove(pokemon, target, move) {
			if (pokemon.template.species === 'Haxorus-Mega' || move.hasBounced) {
				return;
			}
			this.add('-fail', pokemon, 'move: Brutal Slice');
			this.hint("Only a Pokemon whose form is Haxorus-Mega can use this move.");
			return null;
		},
		secondary: {
			status: 'bld',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 180,
		contestType: "Cool",
	},
	"brutalswing": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		id: "brutalswing",
		name: "Brutal Swing",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Dark",
		zMovePower: 120,
		contestType: "Tough",
	},
	"bubble": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the foe(s) Speed by 1.",
		id: "bubble",
		name: "Bubble",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		zMovePower: 100,
		contestType: "Cute",
	},
	"bubblebeam": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1.",
		id: "bubblebeam",
		name: "Bubble Beam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Water",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"bugbite": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "User steals and eats the target's Berry.",
		id: "bugbite",
		name: "Bug Bite",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Bug Bite', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 120,
		contestType: "Cute",
	},
	"bugbuzz": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "bugbuzz",
		name: "Bug Buzz",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Bug",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"bulkup": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and Defense by 1 stage.",
		shortDesc: "Raises the user's Attack and Defense by 1.",
		id: "bulkup",
		name: "Bulk Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMoveBoost: {atk: 1},
		contestType: "Cool",
	},
	"bulldoze": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance lower adjacent Pkmn Speed by 1.",
		id: "bulldoze",
		name: "Bulldoze",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacent",
		type: "Ground",
		zMovePower: 120,
		contestType: "Tough",
	},
	"bulletpunch": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "bulletpunch",
		name: "Bullet Punch",
		pp: 30,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 100,
		contestType: "Tough",
	},
	"bulletseed": {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "bulletseed",
		name: "Bullet Seed",
		pp: 30,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 140,
		contestType: "Cool",
	},
	"burnup": {
		accuracy: 100,
		basePower: 130,
		category: "Special",
		desc: "Fails unless the user is a Fire type. If this move is successful, the user's Fire type becomes typeless as long as it remains active.",
		shortDesc: "User's Fire type becomes typeless; must be Fire.",
		id: "burnup",
		name: "Burn Up",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Fire')) return;
			this.add('-fail', pokemon, 'move: Burn Up');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Fire" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Burn Up');
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 195,
		contestType: "Clever",
	},
	"calmmind": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Attack and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk and Sp. Def by 1.",
		id: "calmmind",
		name: "Calm Mind",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spa: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"camouflage": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user's type changes based on the battle terrain. Normal type on the regular Wi-Fi terrain, Electric type during Electric Terrain, Fairy type during Misty Terrain, Grass type during Grassy Terrain, and Psychic type during Psychic Terrain. Fails if the user's type cannot be changed or if the user is already purely that type.",
		shortDesc: "Changes user's type by terrain (default Normal).",
		id: "camouflage",
		name: "Camouflage",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			let newType = 'Normal';
			if (this.field.isTerrain('electricterrain')) {
				newType = 'Electric';
			} else if (this.field.isTerrain('grassyterrain')) {
				newType = 'Grass';
			} else if (this.field.isTerrain('mistyterrain')) {
				newType = 'Fairy';
			} else if (this.field.isTerrain('psychicterrain')) {
				newType = 'Psychic';
			} else if (this.field.isTerrain('hellfire')) {
				newType = ['Fire', 'Dark'];
			}

			if (target.getTypes().join() === newType || !target.setType(newType)) return false;
			this.add('-start', target, 'typechange', newType);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {evasion: 1},
		contestType: "Clever",
	},
	"captivate": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Attack by 2 stages. The target is unaffected if both the user and the target are the same gender, or if either is genderless. Pokemon with the Oblivious Ability are immune.",
		shortDesc: "Lowers the foe(s) Sp. Atk by 2 if opposite gender.",
		id: "captivate",
		name: "Captivate",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon, source) {
			if ((pokemon.gender === 'M' && source.gender === 'F') || (pokemon.gender === 'F' && source.gender === 'M')) {
				return;
			}
			return false;
		},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMoveBoost: {spd: 2},
		contestType: "Cute",
	},
	"catastropika": {
		accuracy: true,
		basePower: 210,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "catastropika",
		name: "Catastropika",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "pikaniumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	"celebrate": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "No competitive use.",
		id: "celebrate",
		name: "Celebrate",
		pp: 40,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			this.add('-activate', target, 'move: Celebrate');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Cute",
   },
	"allycharge": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises an ally's Special Defense by 2 stage. If the ally uses an Electric-type attack on the next turn, its power will be doubled. Will move before some attacks",
		shortDesc: "+2 SpD, ally's Electric move next turn 2x power. +1 priority",
		id: "allycharge",
		name: "Ally Charge",
		pp: 20,
		priority: 1,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'allycharge',
		onHit(pokemon) {
			this.add('-activate', pokemon, 'move: Ally Charge');
		},
		effect: {
			duration: 2,
			onRestart(pokemon) {
				this.effectData.duration = 2;
			},
			onBasePowerPriority: 3,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('ally charge boost');
					return this.chainModify(2);
				}
			},
		},
		boosts: {
			spd: 2,
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Electric",
		zMoveBoost: {spd: 2},
		contestType: "Beautiful",
	},
	"charge": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Defense by 1 stage. If the user uses an Electric-type attack on the next turn, its power will be doubled.",
		shortDesc: "+1 SpD, user's Electric move next turn 2x power.",
		id: "charge",
		name: "Charge",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'charge',
		onHit(pokemon) {
			this.add('-activate', pokemon, 'move: Charge');
		},
		effect: {
			duration: 2,
			onRestart(pokemon) {
				this.effectData.duration = 2;
			},
			onBasePowerPriority: 3,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('charge boost');
					return this.chainModify(2);
				}
			},
		},
		boosts: {
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"chargebeam": {
		accuracy: 90,
		basePower: 50,
		category: "Special",
		desc: "Has a 70% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "70% chance to raise the user's Sp. Atk by 1.",
		id: "chargebeam",
		name: "Charge Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 70,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Electric",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"charm": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 2 stages.",
		shortDesc: "Lowers the target's Attack by 2.",
		id: "charm",
		name: "Charm",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"chatter": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 100% chance to confuse the target.",
		shortDesc: "100% chance to confuse the target.",
		id: "chatter",
		name: "Chatter",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, distance: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		noSketch: true,
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		zMovePower: 120,
		contestType: "Cute",
	},
	"chipaway": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes.",
		id: "chipaway",
		name: "Chip Away",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreDefensive: true,
		ignoreEvasion: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Tough",
	},
	"circlethrow": {
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target is under the effect of Ingrain, has the Suction Cups Ability, or this move hit a substitute.",
		shortDesc: "Forces the target to switch to a random ally.",
		id: "circlethrow",
		name: "Circle Throw",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		forceSwitch: true,
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Cool",
	},
	"clamp": {
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "clamp",
		name: "Clamp",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Tough",
	},
	"clangingscales": {
		accuracy: 100,
		basePower: 110,
		category: "Special",
		desc: "Lowers the user's Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense by 1.",
		id: "clangingscales",
		name: "Clanging Scales",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfBoost: {
			boosts: {
				def: -1,
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMovePower: 185,
		contestType: "Tough",
	},
	"clangoroussoulblaze": {
		accuracy: true,
		basePower: 185,
		category: "Special",
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "Raises the user's Atk/Def/SpAtk/SpDef/Spe by 1.",
		id: "clangoroussoulblaze",
		name: "Clangorous Soulblaze",
		pp: 1,
		priority: 0,
		flags: {sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfBoost: {
			boosts: {
				atk: 1,
				def: 1,
				spa: 1,
				spd: 1,
				spe: 1,
			},
		},
		isZ: "kommoniumz",
		secondary: {
			// Sheer Force negates the selfBoost even though it is not secondary
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		contestType: "Cool",
	},
	"clearsmog": {
		accuracy: true,
		basePower: 50,
		category: "Special",
		shortDesc: "Resets all of the target's stat stages to 0.",
		id: "clearsmog",
		name: "Clear Smog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			target.clearBoosts();
			this.add('-clearboost', target);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"closecombat": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Lowers the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
		id: "closecombat",
		name: "Close Combat",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 190,
		contestType: "Tough",
	},
	"coil": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack, Defense, and accuracy by 1 stage.",
		shortDesc: "Raises user's Attack, Defense, accuracy by 1.",
		id: "coil",
		name: "Coil",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
			def: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Poison",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"cometpunch": {
		accuracy: 85,
		basePower: 18,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "cometpunch",
		name: "Comet Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"confide": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Attack by 1 stage.",
		shortDesc: "Lowers the target's Sp. Atk by 1.",
		id: "confide",
		name: "Confide",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Cute",
	},
	"confuseray": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to become confused.",
		shortDesc: "Confuses the target.",
		id: "confuseray",
		name: "Confuse Ray",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"confusion": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target.",
		id: "confusion",
		name: "Confusion",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 100,
		contestType: "Clever",
	},
	"constrict": {
		accuracy: 100,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'bld') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		desc: "Has a 10% chance to lower the target's Speed by 1 stage.",
		shortDesc: "10% chance to lower the target's Speed by 1.",
		id: "constrict",
		name: "Constrict",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"continentalcrush": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "continentalcrush",
		name: "Continental Crush",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "rockiumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	"continuouscombat": {
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles.continuouscombat || move.hit === 1) {
				pokemon.addVolatile('continuouscombat');
			}
			return this.clampIntRange(move.basePower * pokemon.volatiles.continuouscombat.multiplier, 1, 160);
		},
		category: "Physical",
		desc: "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used.",
		shortDesc: "Power doubles with each hit, up to 160.",
		id: "continuouscombat",
		name: "Continuous Combat",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		effect: {
			duration: 2,
			onStart() {
				this.effectData.multiplier = 1;
			},
			onRestart() {
				if (this.effectData.multiplier < 4) {
					this.effectData.multiplier <<= 1;
				}
				this.effectData.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Cool",
	},
	"controlspore": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		shortDesc: "Confuses and binds the opponent.",
		id: "controlspore",
		name: "Control Spore",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		target: "normal",
		type: "Bug",
		zMoveBoost: {def: 1, spd: 1},
		contestType: "Beautiful",
	},
	"conversion": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user's type changes to match the original type of the move in its first move slot. Fails if the user cannot change its type, or if the type is one of the user's current types.",
		shortDesc: "Changes user's type to match its first move.",
		id: "conversion",
		name: "Conversion",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			let type = this.getMove(target.moveSlots[0].id).type;
			if (target.hasType(type) || !target.setType(type)) return false;
			this.add('-start', target, 'typechange', type);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Beautiful",
	},
	"conversion2": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user's type changes to match a type that resists or is immune to the type of the last move used by the target, but not either of its current types. The determined type of the move is used rather than the original type. Fails if the target has not made a move, if the user cannot change its type, or if this move would only be able to select one of the user's current types.",
		shortDesc: "Changes user's type to resist target's last move.",
		id: "conversion2",
		name: "Conversion 2",
		pp: 30,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			if (!target.lastMove) {
				return false;
			}
			let possibleTypes = [];
			let attackType = target.lastMove.type;
			for (let type in this.data.TypeChart) {
				if (source.hasType(type)) continue;
				let typeCheck = this.data.TypeChart[type].damageTaken[attackType];
				if (typeCheck === 2 || typeCheck === 3) {
					possibleTypes.push(type);
				}
			}
			if (!possibleTypes.length) {
				return false;
			}
			let randomType = this.sample(possibleTypes);

			if (!source.setType(randomType)) return false;
			this.add('-start', source, 'typechange', randomType);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Beautiful",
	},
	"copycat": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user uses the last move used by any Pokemon, including itself. Fails if no move has been used, or if the last move used was Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Circle Throw, Copycat, Counter, Covet, Destiny Bond, Detect, Dragon Tail, Endure, Feint, Focus Punch, Follow Me, Helping Hand, Hold Hands, King's Shield, Mat Block, Me First, Metronome, Mimic, Mirror Coat, Mirror Move, Nature Power, Protect, Rage Powder, Roar, Shell Trap, Sketch, Sleep Talk, Snatch, Spiky Shield, Spotlight, Struggle, Switcheroo, Thief, Transform, Trick, Whirlwind, or any Z-Move.",
		shortDesc: "Uses the last move used in the battle.",
		id: "copycat",
		name: "Copycat",
		pp: 20,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			let noCopycat = ['assist', 'banefulbunker', 'bestow', 'celebrate', 'chatter', 'circlethrow', 'copycat', 'counter', 'covet', 'destinybond', 'detect', 'dragontail', 'endure', 'feint', 'focuspunch', 'followme', 'helpinghand', 'mefirst', 'metronome', 'mimic', 'mirrorcoat', 'mirrormove', 'naturepower', 'protect', 'ragepowder', 'roar', 'sketch', 'sleeptalk', 'snatch', 'struggle', 'switcheroo', 'thief', 'transform', 'trick', 'whirlwind'];
			if (!this.lastMove || noCopycat.includes(this.lastMove.id) || this.lastMove.isZ) {
				return false;
			}
			this.useMove(this.lastMove.id, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {accuracy: 1},
		contestType: "Cute",
	},
	"coreenforcer": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "If the user moves after the target, the target's Ability is rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this effect does not happen, and receiving the effect through Baton Pass ends the effect immediately.",
		shortDesc: "Nullifies the foe(s) Ability if the foe(s) move first.",
		id: "coreenforcer",
		name: "Core Enforcer",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'zenmode'].includes(target.ability)) return;
			if (target.newlySwitched || this.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'zenmode'].includes(target.ability)) return;
			if (target.newlySwitched || this.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMovePower: 140,
		contestType: "Tough",
	},
	"corkscrewcrash": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "corkscrewcrash",
		name: "Corkscrew Crash",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "steeliumz",
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	"corrode": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "Has a 10% chance to poison the target. This move's type effectiveness against Steel is changed to be super effective no matter what this move's type is.",
		shortDesc: "10% chance to poison. Super effective on Steel.",
		id: "corrode",
		name: "Corrode",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreImmunity: {'Poison': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Steel') return 1;
		},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"cosmicpower": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Defense and Sp. Def by 1.",
		id: "cosmicpower",
		name: "Cosmic Power",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveBoost: {spd: 1},
		contestType: "Beautiful",
	},
	"cottonguard": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 3 stages.",
		shortDesc: "Raises the user's Defense by 3.",
		id: "cottonguard",
		name: "Cotton Guard",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 3,
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"cottonspore": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2.",
		id: "cottonspore",
		name: "Cotton Spore",
		pp: 40,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"counter": {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['counter']) return 0;
			return pokemon.volatiles['counter'].damage || 1;
		},
		category: "Physical",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a physical attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's physical attack this turn.",
		shortDesc: "If hit by physical attack, returns double damage.",
		id: "counter",
		name: "Counter",
		pp: 20,
		priority: -5,
		flags: {contact: 1, protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('counter');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['counter']) return false;
			if (source.volatiles['counter'].position === null) return false;
		},
		effect: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onAfterDamage(damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && source.side !== target.side && this.getCategory(effect) === 'Physical') {
					this.effectData.position = source.position;
					this.effectData.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"courtchange": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Switches the Spikes, Toxic Spikes, Stealth Rock, Sticky Web, Light Screen, Reflect, Aurora Veil, and Tailwind from the user's side to the target's side and vice versa.",
		shortDesc: "Switches sides of field effects",
		id: "courtchange",
		isViable: true,
		name: "Court Change",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitField(target, source) {
			const sourceSide = source.side;
			const targetSide = source.side.foe;
			const sideConditions = [
				'spikes', 'toxicspikes', 'stealthrock', 'stickyweb', 'lightscreen', 'reflect', 'auroraveil', 'tailwind',
			];
			let success = false;
			for (let id of sideConditions) {
				const effectName = this.dex.getEffect(id).name;
				if (sourceSide.sideConditions[id] && targetSide.sideConditions[id]) {
					[sourceSide.sideConditions[id], targetSide.sideConditions[id]] = [targetSide.sideConditions[id], sourceSide.sideConditions[id]];
					this.add('-sideend', sourceSide, effectName, '[silent]');
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else if (sourceSide.sideConditions[id] && !targetSide.sideConditions[id]) {
					targetSide.sideConditions[id] = sourceSide.sideConditions[id];
					delete sourceSide.sideConditions[id];
					this.add('-sideend', sourceSide, effectName, '[silent]');
				} else if (targetSide.sideConditions[id] && !sourceSide.sideConditions[id]) {
					sourceSide.sideConditions[id] = targetSide.sideConditions[id];
					delete targetSide.sideConditions[id];
					this.add('-sideend', targetSide, effectName, '[silent]');
				} else {
					continue;
				}
				let sourceLayers = sourceSide.sideConditions[id] ? (sourceSide.sideConditions[id].layers || 1) : 0;
				let targetLayers = targetSide.sideConditions[id] ? (targetSide.sideConditions[id].layers || 1) : 0;
				for (; sourceLayers > 0; sourceLayers--) {
					this.add('-sidestart', sourceSide, effectName, '[silent]');
				}
				for (; targetLayers > 0; targetLayers--) {
					this.add('-sidestart', targetSide, effectName, '[silent]');
				}
				success = true;
			}
			if (!success) return false;
			this.add('-activate', source, 'move: Court Change');
		},
		secondary: null,
		target: "all",
		type: "Normal",
	},
	"covet": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "If the user has no item, it steals the target's.",
		id: "covet",
		name: "Covet",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onAfterHit(target, source, move) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			let yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem) || !source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Covet', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 120,
		contestType: "Cute",
	},
	"crabhammer": {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "crabhammer",
		name: "Crabhammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 180,
		contestType: "Tough",
	},
	"craftyshield": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and its party members are protected from non-damaging attacks made by other Pokemon, including allies, during this turn. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from Status moves this turn.",
		id: "craftyshield",
		name: "Crafty Shield",
		pp: 10,
		priority: 3,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'craftyshield',
		onTryHitSide(side, source) {
			return !!this.willAct();
		},
		effect: {
			duration: 1,
			onStart(target, source) {
				this.add('-singleturn', source, 'Crafty Shield');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (move && (move.target === 'self' || move.category !== 'Status')) return;
				this.add('-activate', target, 'move: Crafty Shield');
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fairy",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"crosschop": {
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "crosschop",
		name: "Cross Chop",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 180,
		contestType: "Cool",
	},
	"crosspoison": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to poison.",
		id: "crosspoison",
		name: "Cross Poison",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		critRatio: 2,
		target: "normal",
		type: "Poison",
		zMovePower: 140,
		contestType: "Cool",
	},
	"crunch": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		id: "crunch",
		name: "Crunch",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Tough",
	},
	"crushclaw": {
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1.",
		id: "crushclaw",
		name: "Crush Claw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cool",
	},
	"crushgrip": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			return Math.floor(Math.floor((120 * (100 * Math.floor(target.hp * 4096 / target.maxhp)) + 2048 - 1) / 4096) / 100) || 1;
		},
		category: "Physical",
		desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
		shortDesc: "More power the more HP the target has left.",
		id: "crushgrip",
		name: "Crush Grip",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Tough",
	},
	"cryokick": {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "Has a 10% chance to freeze the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to freeze.",
		id: "cryokick",
		name: "Cryo Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 160,
		contestType: "Cool",
	},
	"cryoslash": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 10% chance to freeze. Has a 15% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. 10% chance to freeze 15% chance to cause bld.",
		id: "cryoslash",
		name: "Cryo Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 1,
		secondaries: [
			{
				chance: 10,
				status: 'frz',
			}, {
				chance: 15,
				status: 'bld',
			},
		],
		target: "normal",
		type: "Ice",
		zMovePower: 140,
		contestType: "Cool",
	},
	"curse": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "If the user is not a Ghost type, lowers the user's Speed by 1 stage and raises the user's Attack and Defense by 1 stage. If the user is a Ghost type, the user loses 1/2 of its maximum HP, rounded down and even if it would cause fainting, in exchange for the target losing 1/4 of its maximum HP, rounded down, at the end of each turn while it is active. If the target uses Baton Pass, the replacement will continue to be affected. Fails if there is no target or if the target is already affected.",
		shortDesc: "Curses if Ghost, else -1 Spe, +1 Atk, +1 Def.",
		id: "curse",
		name: "Curse",
		pp: 10,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'curse',
		onModifyMove(move, source, target) {
			if (!source.hasType('Ghost')) {
				// @ts-ignore
				move.target = move.nonGhostTarget;
			}
		},
		onTryHit(target, source, move) {
			if (!source.hasType('Ghost')) {
				delete move.volatileStatus;
				delete move.onHit;
				move.self = {boosts: {spe: -1, atk: 1, def: 1}};
			} else if (move.volatileStatus && target.volatiles.curse) {
				return false;
			}
		},
		onHit(target, source) {
			this.directDamage(source.maxhp / 2, source, source);
		},
		effect: {
			onStart(pokemon, source) {
				this.add('-start', pokemon, 'Curse', '[of] ' + source);
			},
			onResidualOrder: 10,
			onResidual(pokemon) {
				this.damage(pokemon.maxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		nonGhostTarget: "self",
		type: "Ghost",
		zMoveEffect: 'curse',
		contestType: "Tough",
	},
	"cut": {
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		shortDesc: "May cause bleeding.",
		id: "cut",
		name: "Cut",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'bld',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"darkepitaph": {
		accuracy: 30,
		basePower: 0,
		category: "Special",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "darkepitaph",
		name: "Dark Epitaph",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 180,
		contestType: "Tough",
	},
	"darkestlariat": {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes.",
		id: "darkestlariat",
		name: "Darkest Lariat",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Cool",
	},
	"darkmatter": {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "darkmatter",
		name: "Dark Matter",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 200,
		contestType: "Cool",
	},
	"darkpulse": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to flinch the target.",
		id: "darkpulse",
		name: "Dark Pulse",
		pp: 15,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Dark",
		zMovePower: 160,
		contestType: "Cool",
	},
	"darkvoid": {
		accuracy: 50,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to fall asleep. This move cannot be used successfully unless the user's current form, while considering Transform, is Darkrai.",
		shortDesc: "Darkrai: Causes the foe(s) to fall asleep.",
		id: "darkvoid",
		name: "Dark Void",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		onTryMove(pokemon, target, move) {
			if (pokemon.template.species === 'Darkrai' || move.hasBounced) {
				return;
			}
			this.add('-fail', pokemon, 'move: Dark Void');
			this.hint("Only a Pokemon whose form is Darkrai can use this move.");
			return null;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dark",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"dazzlinggleam": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "dazzlinggleam",
		name: "Dazzling Gleam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"decorate": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sharply raises the target's Attack and Special Attack stats.",
		shortDesc: "Raises the target's Atk and Sp. Atk by 2.",
		id: "decorate",
		name: "Decorate",
		pp: 15,
		priority: 0,
		flags: {mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		boosts: {
			atk: 2,
			spa: 2,
		},
		target: "normal",
		type: "Fairy",
	},
	"defendorder": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Raises the user's Defense and Sp. Def by 1.",
		id: "defendorder",
		name: "Defend Order",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 1,
			spd: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"defensecurl": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 1 stage. As long as the user remains active, the power of the user's Ice Ball and Rollout will be doubled (this effect is not stackable).",
		shortDesc: "Raises the user's Defense by 1.",
		id: "defensecurl",
		name: "Defense Curl",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 1,
		},
		volatileStatus: 'defensecurl',
		effect: {
			noCopy: true,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {accuracy: 1},
		contestType: "Cute",
	},
	"defog": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's evasiveness by 1 stage. If this move is successful and whether or not the target's evasiveness was affected, the effects of Reflect, Light Screen, Aurora Veil, Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the target's side, and the effects of Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's side. Ignores a target's substitute, although a substitute will still block the lowering of evasiveness.",
		shortDesc: "-1 evasion; clears user and target side's hazards.",
		id: "defog",
		name: "Defog",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			let success = false;
			if (!target.volatiles['substitute'] || move.infiltrates) success = !!this.boost({evasion: -1});
			let removeTarget = ['reflect', 'lightscreen', 'auroraveil', 'safeguard', 'mist', 'spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
			let removeAll = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
			for (const targetCondition of removeTarget) {
				if (target.side.removeSideCondition(targetCondition)) {
					if (!removeAll.includes(targetCondition)) continue;
					this.add('-sideend', target.side, this.getEffect(targetCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			for (const sideCondition of removeAll) {
				if (source.side.removeSideCondition(sideCondition)) {
					this.add('-sideend', source.side, this.getEffect(sideCondition).name, '[from] move: Defog', '[of] ' + source);
					success = true;
				}
			}
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMoveBoost: {accuracy: 1},
		contestType: "Cool",
	},
	"destinybond": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the user's next move, if an opposing Pokemon's attack knocks the user out, that Pokemon faints as well, unless the attack was Doom Desire or Future Sight. Fails if the user used this move successfully as its last move, disregarding moves used through the Dancer Ability.",
		shortDesc: "If an opponent knocks out the user, it also faints.",
		id: "destinybond",
		name: "Destiny Bond",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'destinybond',
		onPrepareHit(pokemon) {
			return !pokemon.removeVolatile('destinybond');
		},
		effect: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Destiny Bond');
			},
			onFaint(target, source, effect) {
				if (!source || !effect || target.side === source.side) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove) {
					this.add('-activate', target, 'move: Destiny Bond');
					source.faint();
				}
			},
			onBeforeMovePriority: -1,
			onBeforeMove(pokemon, target, move) {
				if (move.id === 'destinybond') return;
				this.debug('removing Destiny Bond before attack');
				pokemon.removeVolatile('destinybond');
			},
			onMoveAborted(pokemon, target, move) {
				pokemon.removeVolatile('destinybond');
			},
			onBeforeSwitchOutPriority: 1,
			onBeforeSwitchOut(pokemon) {
				pokemon.removeVolatile('destinybond');
			},
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMoveEffect: 'redirect',
		contestType: "Clever",
	},
	"detect": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn.",
		id: "detect",
		name: "Detect",
		pp: 5,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMoveBoost: {evasion: 1},
		contestType: "Cool",
	},
	"devastatingdrake": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "devastatingdrake",
		name: "Devastating Drake",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "dragoniumz",
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Cool",
	},
	"devour": {
		accuracy: 120,
		basePower: 80,
		category: "Special",
		desc: "Regain hp equal to half the damage dealt.",
		shortDesc: "Regain hp equal to half the damage dealt.",
		id: "devour",
		name: "Devour",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 160,
		contestType: "Cool",
	},
	"diamondstorm": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "Has a 50% chance to raise the user's Defense by 2 stages.",
		shortDesc: "50% chance to raise user's Def by 2 for each hit.",
		id: "diamondstorm",
		name: "Diamond Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					def: 2,
				},
			},
		},
		target: "allAdjacentFoes",
		type: "Rock",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"dig": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Earthquake and Magnitude but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Digs underground turn 1, strikes turn 2.",
		id: "dig",
		name: "Dig",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onTryImmunity(target, source, move) {
				if (['earthquake', 'magnitude', 'helpinghand'].includes(move.id)) {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
			   if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'earthquake' || move.id === 'magnitude') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 160,
		contestType: "Tough",
	},
	"disable": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "For 4 turns, the target's last move used becomes disabled. Fails if one of the target's moves is already disabled, if the target has not made a move, or if the target no longer knows the move.",
		shortDesc: "For 4 turns, disables the target's last move used.",
		id: "disable",
		name: "Disable",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'disable',
		onTryHit(target) {
			if (!target.lastMove || target.lastMove.isZ) {
				return false;
			}
		},
		effect: {
			duration: 5,
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				// The target hasn't taken its turn, or Cursed Body activated and the move was not used through Dancer or Instruct
				if (this.willMove(pokemon) || (pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal)) {
					this.effectData.duration--;
				}
				if (!pokemon.lastMove) {
					this.debug('pokemon hasn\'t moved yet');
					return false;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === pokemon.lastMove.id) {
						if (!moveSlot.pp) {
							this.debug('Move out of PP');
							return false;
						} else {
							if (effect.id === 'cursedbody') {
								this.add('-start', pokemon, 'Disable', moveSlot.move, '[from] ability: Cursed Body', '[of] ' + source);
							} else {
								this.add('-start', pokemon, 'Disable', moveSlot.move);
							}
							this.effectData.move = pokemon.lastMove.id;
							return;
						}
					}
				}
				// this can happen if Disable works on a Z-move
				return false;
			},
			onResidualOrder: 14,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Disable');
			},
			onBeforeMovePriority: 7,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && move.id === this.effectData.move) {
					this.add('cant', attacker, 'Disable', move);
					return false;
				}
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id === this.effectData.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"disarmingvoice": {
		accuracy: true,
		basePower: 40,
		category: "Special",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Hits foes.",
		id: "disarmingvoice",
		name: "Disarming Voice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fairy",
		zMovePower: 100,
		contestType: "Cute",
	},
	"discharge": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze adjacent Pokemon.",
		id: "discharge",
		name: "Discharge",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "allAdjacent",
		type: "Electric",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"dive": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Surf and Whirlpool but takes double damage from them, and is also unaffected by weather. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Dives underwater turn 1, strikes turn 2.",
		id: "dive",
		name: "Dive",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onImmunity(type, pokemon) {
				if (type === 'sandstorm' || type === 'hail') return false;
			},
			onTryImmunity(target, source, move) {
				if (['surf', 'whirlpool', 'helpinghand'].includes(move.id)) {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'surf' || move.id === 'whirlpool') {
					return this.chainModify(2);
				}
				if (move.id === 'magmadrift') {
					return this.chainModify(0.5);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"dizzypunch": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		id: "dizzypunch",
		name: "Dizzy Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cute",
	},
	"doomdesire": {
		accuracy: 100,
		basePower: 140,
		category: "Special",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Future Sight is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used.",
		id: "doomdesire",
		name: "Doom Desire",
		pp: 5,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				move: 'doomdesire',
				source: source,
				moveData: {
					id: 'doomdesire',
					name: "Doom Desire",
					accuracy: 100,
					basePower: 140,
					category: "Special",
					priority: 0,
					flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
					effectType: 'Move',
					isFutureMove: true,
					type: 'Steel',
				},
			});
			this.add('-start', source, 'Doom Desire');
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"doubleedge": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
		id: "doubleedge",
		name: "Double-Edge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Tough",
	},
	"doublehit": {
		accuracy: 90,
		basePower: 35,
		category: "Physical",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		id: "doublehit",
		name: "Double Hit",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cool",
	},
	"doublekick": {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		id: "doublekick",
		name: "Double Kick",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Cool",
	},
	"doubleslap": {
		accuracy: 85,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "doubleslap",
		name: "Double Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cute",
	},
	"doubleteam": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's evasiveness by 1 stage.",
		shortDesc: "Raises the user's evasiveness by 1.",
		id: "doubleteam",
		name: "Double Team",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			evasion: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"dracometeor": {
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "dracometeor",
		name: "Draco Meteor",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"dragonascent": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Lowers the user's Defense and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
		id: "dragonascent",
		name: "Dragon Ascent",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				def: -1,
				spd: -1,
			},
		},
		target: "any",
		type: "Flying",
		zMovePower: 190,
		contestType: "Beautiful",
	},
	"dragonbreath": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		id: "dragonbreath",
		name: "Dragon Breath",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Dragon",
		zMovePower: 120,
		contestType: "Cool",
	},
	"dragonclaw": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "dragonclaw",
		name: "Dragon Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 160,
		contestType: "Cool",
	},
	"dragondance": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and Speed by 1 stage.",
		shortDesc: "Raises the user's Attack and Speed by 1.",
		id: "dragondance",
		name: "Dragon Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Dragon",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"dragondarts": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "In singles, this move hits the target twice. In doubles, this move hits each target once.",
		shortDesc: "Singles: Hits twice. Doubles: Hits each once.",
		id: "dragondarts",
		name: "Dragon Darts",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		onModifyMove(move, pokemon, target) {
			if (target.side.active.length === 2) {
				move.multihit = 1;
				move.spreadModifier = 1;
				move.target = "allAdjacentFoes";
				for (const currentTarget of target.side.active) {
					if (currentTarget.volatiles['protect'] || !currentTarget.runImmunity('Dragon') || currentTarget.fainted) {
						move.multihit = 2;
						break;
					}
				}
			}
		},
		target: "normal",
		type: "Dragon",
		gmaxPower: 130,
	},
	"dragonhammer": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "dragonhammer",
		name: "Dragon Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 175,
		contestType: "Tough",
	},
	"dracojet": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "dracojet",
		name: "Draco Jet",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 100,
		contestType: "Cool",
	},
	"dragonpulse": {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "dragonpulse",
		name: "Dragon Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Dragon",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"dragonrage": {
		accuracy: 100,
		basePower: 0,
		damage: 40,
		category: "Special",
		shortDesc: "Deals 40 HP of damage to the target.",
		id: "dragonrage",
		name: "Dragon Rage",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 100,
		contestType: "Cool",
	},
	"dragonrush": {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		desc: "Has a 20% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "20% chance to flinch the target.",
		id: "dragonrush",
		name: "Dragon Rush",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Dragon",
		zMovePower: 180,
		contestType: "Tough",
	},
	"dragontail": {
		accuracy: 90,
		basePower: 60,
		category: "Physical",
		desc: "If both the user and the target have not fainted, the target is forced to switch out and be replaced with a random unfainted ally. This effect fails if the target used Ingrain previously, has the Suction Cups Ability, or this move hit a substitute.",
		shortDesc: "Forces the target to switch to a random ally.",
		id: "dragontail",
		name: "Dragon Tail",
		pp: 10,
		priority: -6,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		forceSwitch: true,
		target: "normal",
		type: "Dragon",
		zMovePower: 120,
		contestType: "Tough",
	},
	"drainingkiss": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 75% of the damage dealt.",
		id: "drainingkiss",
		name: "Draining Kiss",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [3, 4],
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMovePower: 100,
		contestType: "Cute",
	},
	"drainpunch": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "drainpunch",
		name: "Drain Punch",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 140,
		contestType: "Tough",
	},
	"drakonvoice": {
		accuracy: 85,
		basePower: 105,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "drakonvoice",
		name: "Drakon Voice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
		zMovePower: 180,
		contestType: "Cool",
	},
	"dreameater": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "The target is unaffected by this move unless it is asleep. The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User gains 1/2 HP inflicted. Sleeping target only.",
		id: "dreameater",
		name: "Dream Eater",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		onTryHit(target) {
			if (target.status !== 'slp' && !target.hasAbility('comatose')) {
				this.add('-immune', target);
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 180,
		contestType: "Clever",
	},
	"drillpeck": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "drillpeck",
		name: "Drill Peck",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 160,
		contestType: "Cool",
	},
	"drillrun": {
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "drillrun",
		name: "Drill Run",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 160,
		contestType: "Tough",
	},
	"drumbeating": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1.",
		id: "drumbeating",
		isViable: true,
		name: "Drum Beating",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Grass",
	},
	"dualchop": {
		accuracy: 90,
		basePower: 40,
		category: "Physical",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		id: "dualchop",
		name: "Dual Chop",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 100,
		contestType: "Tough",
	},
	"dynamicentry": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only.",
		id: "dynamicentry",
		name: "Dynamic Entry",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry(pokemon, target) {
			if (pokemon.activeTurns > 1) {
				this.add('-fail', pokemon);
				this.attrLastMove('[still]');
				this.hint("Dynamic Entry only works on your first turn out.");
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 175,
		contestType: "Cute",
	},
	"dynamicpunch": {
		accuracy: 50,
		basePower: 100,
		category: "Physical",
		desc: "Has a 100% chance to confuse the target.",
		shortDesc: "100% chance to confuse the target.",
		id: "dynamicpunch",
		name: "Dynamic Punch",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 180,
		contestType: "Cool",
	},
	"earthpower": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "earthpower",
		name: "Earth Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ground",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"earthquake": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Damage doubles if the target is using Dig.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dig.",
		id: "earthquake",
		name: "Earthquake",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		zMovePower: 180,
		contestType: "Tough",
	},
	"echoedvoice": {
		accuracy: 100,
		basePower: 40,
		basePowerCallback() {
			if (this.field.pseudoWeather.echoedvoice) {
				return 40 * this.field.pseudoWeather.echoedvoice.multiplier;
			}
			return 40;
		},
		category: "Special",
		desc: "For every consecutive turn that this move is used by at least one Pokemon, this move's power is multiplied by the number of turns to pass, but not more than 5.",
		shortDesc: "Power increases when used on consecutive turns.",
		id: "echoedvoice",
		name: "Echoed Voice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry() {
			this.field.addPseudoWeather('echoedvoice');
		},
		effect: {
			duration: 2,
			onStart() {
				this.effectData.multiplier = 1;
			},
			onRestart() {
				if (this.effectData.duration !== 2) {
					this.effectData.duration = 2;
					if (this.effectData.multiplier < 5) {
						this.effectData.multiplier++;
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"echolocation": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's accuracy by 2 stages.",
		shortDesc: "Raises the user's accuracy by 2.",
		id: "echolocation",
		name: "Echolocation",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			accuracy: 2,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMoveEffect: 'crit2',
		contestType: "Cute",
	},
	"eerieimpulse": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Attack by 2 stages.",
		shortDesc: "Lowers the target's Sp. Atk by 2.",
		id: "eerieimpulse",
		name: "Eerie Impulse",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spa: -2,
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"eggbomb": {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "eggbomb",
		name: "Egg Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 180,
		contestType: "Cute",
	},
	"electricterrain": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the terrain becomes Electric Terrain. During the effect, the power of Electric-type attacks made by grounded Pokemon is multiplied by 1.5 and grounded Pokemon cannot fall asleep; Pokemon already asleep do not wake up. Camouflage transforms the user into an Electric type, Nature Power becomes Thunderbolt, and Secret Power has a 30% chance to cause paralysis. Fails if the current terrain is Electric Terrain.",
		shortDesc: "5 turns. Grounded: +Electric power, can't sleep.",
		id: "electricterrain",
		name: "Electric Terrain",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		terrain: 'electricterrain',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && target.isGrounded() && !target.isSemiInvulnerable()) {
					if (effect.effectType === 'Move' && !effect.secondaries) {
						this.add('-activate', target, 'move: Electric Terrain');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Electric Terrain');
					return null;
				}
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('electric terrain boost');
					return this.chainModify(1.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Electric Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Electric Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Electric Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"electrify": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's move to become Electric type this turn. Among effects that can change a move's type, this effect happens last. Fails if the target already moved this turn.",
		shortDesc: "Changes the target's move to Electric this turn.",
		id: "electrify",
		name: "Electrify",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'electrify',
		onTryHit(target) {
			if (!this.willMove(target) && target.activeTurns) return false;
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Electrify');
			},
			onModifyMovePriority: -2,
			onModifyMove(move) {
				if (move.id !== 'struggle') {
					this.debug('Electrify making move type electric');
					move.type = 'Electric';
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"electroball": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = (pokemon.getStat('spe') / target.getStat('spe'));
			this.debug([40, 60, 80, 120, 150][(Math.floor(ratio) > 4 ? 4 : Math.floor(ratio))] + ' bp');
			if (ratio >= 4) {
				return 150;
			}
			if (ratio >= 3) {
				return 120;
			}
			if (ratio >= 2) {
				return 80;
			}
			if (ratio >= 1) {
				return 60;
			}
			return 40;
		},
		category: "Special",
		desc: "The power of this move depends on (user's current Speed / target's current Speed), rounded down. Power is equal to 150 if the result is 4 or more, 120 if 3, 80 if 2, 60 if 1, 40 if less than 1. If the target's current Speed is 0, this move's power is 40.",
		shortDesc: "More power the faster the user is than the target.",
		id: "electroball",
		name: "Electro Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 160,
		contestType: "Cool",
	},
	"electroweb": {
		accuracy: 95,
		basePower: 55,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1.",
		id: "electroweb",
		name: "Electroweb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Electric",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"embargo": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the target's held item has no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by the target. Items thrown at the target with Fling will still activate for it. If the target uses Baton Pass, the replacement will remain unable to use items.",
		shortDesc: "For 5 turns, the target's item has no effect.",
		id: "embargo",
		name: "Embargo",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'embargo',
		effect: {
			duration: 5,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Embargo');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onResidualOrder: 18,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Embargo');
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"ember": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 10% chance to burn the target and stop bleed.",
		shortDesc: "10% chance to burn the target and stop bleed.",
		id: "ember",
		name: "Ember",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 100,
		contestType: "Cute",
	},
	"encore": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "For its next 3 turns, the target is forced to repeat its last move used. If the affected move runs out of PP, the effect ends. Fails if the target is already under this effect, if it has not made a move, if the move has 0 PP, or if the move is Assist, Copycat, Encore, Me First, Metronome, Mimic, Mirror Move, Nature Power, Sketch, Sleep Talk, Struggle, Transform, or any Z-Move.",
		shortDesc: "Target repeats its last move for its next 3 turns.",
		id: "encore",
		name: "Encore",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'encore',
		effect: {
			duration: 3,
			noCopy: true, // doesn't get copied by Z-Baton Pass
			onStart(target) {
				let noEncore = ['assist', 'copycat', 'encore', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'sketch', 'sleeptalk', 'struggle', 'transform'];
				let moveIndex = target.lastMove ? target.moves.indexOf(target.lastMove.id) : -1;
				if (!target.lastMove || target.lastMove.isZ || noEncore.includes(target.lastMove.id) || !target.moveSlots[moveIndex] || target.moveSlots[moveIndex].pp <= 0) {
					// it failed
					delete target.volatiles['encore'];
					return false;
				}
				this.effectData.move = target.lastMove.id;
				this.add('-start', target, 'Encore');
				if (!this.willMove(target)) {
					this.effectData.duration++;
				}
			},
			onOverrideAction(pokemon, target, move) {
				if (move.id !== this.effectData.move) return this.effectData.move;
			},
			onResidualOrder: 13,
			onResidual(target) {
				if (target.moves.includes(this.effectData.move) && target.moveSlots[target.moves.indexOf(this.effectData.move)].pp <= 0) {
					// early termination if you run out of PP
					delete target.volatiles.encore;
					this.add('-end', target, 'Encore');
				}
			},
			onEnd(target) {
				this.add('-end', target, 'Encore');
			},
			onDisableMove(pokemon) {
				if (!this.effectData.move || !pokemon.hasMove(this.effectData.move)) {
					return;
				}
				for (const moveSlot of pokemon.moveSlots) {
					if (moveSlot.id !== this.effectData.move) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Cute",
	},
	"endeavor": {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
			return target.hp - pokemon.hp;
		},
		category: "Physical",
		desc: "Deals damage to the target equal to (target's current HP - user's current HP). The target is unaffected if its current HP is less than or equal to the user's current HP.",
		shortDesc: "Lowers the target's HP to the user's HP.",
		id: "endeavor",
		name: "Endeavor",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry(pokemon, target) {
			if (pokemon.hp >= target.hp) {
				this.add('-immune', target);
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Tough",
	},
	"endure": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user will survive attacks made by other Pokemon during this turn with at least 1 HP. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "User survives attacks this turn with at least 1 HP.",
		id: "endure",
		name: "Endure",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'endure',
		onTryHit(pokemon) {
			return this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Endure');
			},
			onDamagePriority: -10,
			onDamage(damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && damage >= target.hp) {
					this.add('-activate', target, 'move: Endure');
					return target.hp - 1;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"energyball": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "energyball",
		name: "Energy Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Grass",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"entrainment": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's Ability to become the same as the user's. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or the same Ability as the user, or if the user's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, or Zen Mode.",
		shortDesc: "The target's Ability changes to match the user's.",
		id: "entrainment",
		name: "Entrainment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			if (target === source) return false;
			let bannedTargetAbilities = ['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'truant'];
			let bannedSourceAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'zenmode'];
			if (bannedTargetAbilities.includes(target.ability) || bannedSourceAbilities.includes(source.ability) || target.ability === source.ability) {
				return false;
			}
		},
		onHit(target, source) {
			let oldAbility = target.setAbility(source.ability);
			if (oldAbility) {
				this.add('-ability', target, this.getAbility(target.ability).name, '[from] move: Entrainment');
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Cute",
	},
	"epicenter": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's accuracy by 2 stages.",
		shortDesc: "Raises the user's accuracy by 2.",
		id: "epicenter",
		name: "Epicenter",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			accuracy: 2,
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"eruption": {
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
		desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s).",
		id: "eruption",
		name: "Eruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"explosion": {
		accuracy: 100,
		basePower: 250,
		category: "Physical",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		id: "explosion",
		name: "Explosion",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"extrasensory": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target.",
		id: "extrasensory",
		name: "Extrasensory",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 160,
		contestType: "Cool",
	},
	"extremeevoboost": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack, Defense, Special Attack, Special Defense, and Speed by 2 stages.",
		shortDesc: "Raises user's Atk, Def, SpA, SpD, and Spe by 2.",
		id: "extremeevoboost",
		name: "Extreme Evoboost",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "eeviumz",
		boosts: {
			atk: 2,
			def: 2,
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Beautiful",
	},
	"extremespeed": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Nearly always goes first.",
		id: "extremespeed",
		name: "Extreme Speed",
		pp: 5,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cool",
	},
	"facade": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Power doubles if the user is burned, paralyzed, or poisoned. The physical damage halving effect from the user's burn is ignored.",
		shortDesc: "Power doubles if user is burn/poison/paralyzed.",
		id: "facade",
		name: "Facade",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (pokemon.status && pokemon.status !== 'slp') {
				currentBoost *=2;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cute",
	},
	"fairylock": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Prevents all active Pokemon from switching next turn. A Pokemon can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. Fails if the effect is already active.",
		shortDesc: "Prevents all Pokemon from switching next turn.",
		id: "fairylock",
		name: "Fairy Lock",
		pp: 10,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'fairylock',
		effect: {
			duration: 2,
			onStart(target) {
				this.add('-fieldactivate', 'move: Fairy Lock');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"fairywind": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "fairywind",
		name: "Fairy Wind",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"fakeout": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Has a 100% chance to flinch the target. Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only. 100% flinch chance.",
		id: "fakeout",
		name: "Fake Out",
		pp: 10,
		priority: 3,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry(pokemon, target) {
			if (pokemon.activeTurns > 1) {
				this.attrLastMove('[still]');
				this.add('-fail', pokemon);
				this.hint("Fake Out only works on your first turn out.");
				return null;
			}
		},
		secondary: {
			chance: 100,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cute",
	},
	"faketears": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Defense by 2 stages.",
		shortDesc: "Lowers the target's Sp. Def by 2.",
		id: "faketears",
		name: "Fake Tears",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {spa: 1},
		contestType: "Cute",
	},
	"falsesurrender": {
		accuracy: true,
		basePower: 80,
		category: "Physical",
		shortDesc: "This move does not check accuracy.",
		id: "falsesurrender",
		isViable: true,
		name: "False Surrender",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	"falseswipe": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Leaves the target with at least 1 HP.",
		shortDesc: "Always leaves the target with at least 1 HP.",
		id: "falseswipe",
		name: "False Swipe",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		noFaint: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"featherdance": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 2 stages.",
		shortDesc: "Lowers the target's Attack by 2.",
		id: "featherdance",
		name: "Feather Dance",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -2,
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMoveBoost: {def: 1},
		contestType: "Beautiful",
	},
	"feint": {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Nullifies Detect, Protect, and Quick/Wide Guard.",
		id: "feint",
		name: "Feint",
		pp: 10,
		priority: 2,
		flags: {mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		breaksProtect: true,
		// Breaking protection implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Clever",
	},
	"feintattack": {
		accuracy: true,
		basePower: 60,
		category: "Physical",
		shortDesc: "This move does not check accuracy.",
		id: "feintattack",
		name: "Feint Attack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 120,
		contestType: "Clever",
	},
	"fellstinger": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Raises the user's Attack by 3 stages if this move knocks out the target.",
		shortDesc: "Raises user's Attack by 3 if this KOes the target.",
		id: "fellstinger",
		name: "Fell Stinger",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (!target || target.fainted || target.hp <= 0) this.boost({atk: 3}, pokemon, pokemon, move);
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cool",
	},
	"fierydance": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 50% chance to raise the user's Special Attack by 1 stage.",
		shortDesc: "50% chance to raise the user's Sp. Atk by 1.",
		id: "fierydance",
		name: "Fiery Dance",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			self: {
				boosts: {
					spa: 1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"finalfeather": {
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		desc: "Fails unless the user is a Flying type. If this move is successful, the user's Flying type becomes typeless as long as it remains active.",
		shortDesc: "User's Flying type becomes typeless; must be Flying.",
		id: "finalfeather",
		name: "Final Feather",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(pokemon, target, move) {
			if (pokemon.hasType('Flying')) return;
			this.add('-fail', pokemon, 'move: Final Feather');
			this.attrLastMove('[still]');
			return null;
		},
		self: {
			onHit(pokemon) {
				pokemon.setType(pokemon.getTypes(true).map(type => type === "Flying" ? "???" : type));
				this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Final Feather');
			},
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMovePower: 195,
		contestType: "Clever",
	},
	"finalgambit": {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			let damage = pokemon.hp;
			pokemon.faint();
			return damage;
		},
		category: "Special",
		desc: "Deals damage to the target equal to the user's current HP. If this move is successful, the user faints.",
		shortDesc: "Does damage equal to the user's HP. User faints.",
		id: "finalgambit",
		name: "Final Gambit",
		pp: 5,
		priority: 0,
		flags: {protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 180,
		contestType: "Tough",
	},
	"fireblast": {
		accuracy: 85,
		basePower: 110,
		category: "Special",
		desc: "Has a 10% chance to burn the target. Will stop bleeding if burned",
		shortDesc: "10% chance to burn the target, stops bleeding",
		id: "fireblast",
		name: "Fire Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 185,
		contestType: "Beautiful",
	},
	"firefang": {
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		desc: "Has a 10% chance to burn the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to burn. 10% chance to flinch.",
		id: "firefang",
		name: "Fire Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 10,
				status: 'brn',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Fire",
		zMovePower: 120,
		contestType: "Cool",
	},
	"firelash": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Defense by 1 stage.",
		shortDesc: "100% chance to lower the target's Defense by 1.",
		id: "firelash",
		name: "Fire Lash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 160,
		contestType: "Cute",
	},
	"firepledge": {
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['grasspledge', 'waterpledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		desc: "If one of the user's allies chose to use Grass Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Grass Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances but does not stack with the Serene Grace Ability. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Fire Gem.",
		shortDesc: "Use with Grass or Water Pledge for added effect.",
		id: "firepledge",
		name: "Fire Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onPrepareHit(target, source, move) {
			for (const action of this.queue) {
				// @ts-ignore
				if (!action.move || !action.pokemon || !action.pokemon.isActive || action.pokemon.fainted) continue;
				// @ts-ignore
				if (action.pokemon.side === source.side && ['grasspledge', 'waterpledge'].includes(action.move.id)) {
					// @ts-ignore
					this.prioritizeAction(action);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'waterpledge') {
				move.type = 'Water';
				move.forceSTAB = true;
			}
			if (move.sourceEffect === 'grasspledge') {
				move.type = 'Fire';
				move.forceSTAB = true;
			}
		},
		onHit(target, source, move) {
			if (move.sourceEffect === 'grasspledge') {
				target.side.addSideCondition('firepledge');
			}
			if (move.sourceEffect === 'waterpledge') {
				source.side.addSideCondition('waterpledge');
			}
		},
		effect: {
			duration: 4,
			onStart(targetSide) {
				this.add('-sidestart', targetSide, 'Fire Pledge');
			},
			onEnd(targetSide) {
				this.add('-sideend', targetSide, 'Fire Pledge');
			},
			onResidual(side) {
				for (const pokemon of side.active) {
					if (pokemon && !pokemon.hasType('Fire')) {
						this.damage(pokemon.maxhp / 8, pokemon);
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"firepunch": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target.",
		id: "firepunch",
		name: "Fire Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		zMovePower: 140,
		contestType: "Tough",
	},
	"firespin": {
		accuracy: 85,
		basePower: 35,
		category: "Special",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "firespin",
		name: "Fire Spin",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"firstimpression": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Fails unless it is the user's first turn on the field.",
		shortDesc: "Hits first. First turn out only.",
		id: "firstimpression",
		name: "First Impression",
		pp: 10,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry(pokemon, target) {
			if (pokemon.activeTurns > 1) {
				this.add('-fail', pokemon);
				this.attrLastMove('[still]');
				this.hint("First Impression only works on your first turn out.");
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 175,
		contestType: "Cute",
	},
	"fishiousrend": {
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.willMove(target)) {
				this.debug('Fishious Rend damage boost');
				return move.basePower * 2;
			}
			this.debug('Fishious Rend NOT boosted');
			return move.basePower;
		},
		category: "Physical",
		desc: "If the user moves before the target, this move's power is doubled.",
		shortDesc: "Double power if the user moves first.",
		id: "fishiousrend",
		isViable: true,
		name: "Fishious Rend",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
	},
	"fissure": {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "fissure",
		name: "Fissure",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 180,
		contestType: "Tough",
	},
	"flail": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = pokemon.hp * 48 / pokemon.maxhp;
			if (ratio < 2) {
				return 200;
			}
			if (ratio < 5) {
				return 150;
			}
			if (ratio < 10) {
				return 100;
			}
			if (ratio < 17) {
				return 80;
			}
			if (ratio < 33) {
				return 40;
			}
			return 20;
		},
		category: "Physical",
		desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
		shortDesc: "More power the less HP the user has left.",
		id: "flail",
		name: "Flail",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cute",
	},
	"flameburst": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "If this move is successful, the target's ally loses 1/16 of its maximum HP, rounded down, unless it has the Magic Guard Ability.",
		shortDesc: "Damages Pokemon next to the target as well.",
		id: "flameburst",
		name: "Flame Burst",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			if (target.side.active.length === 1) {
				return;
			}
			for (const ally of target.side.active) {
				if (ally && this.isAdjacent(target, ally)) {
					this.damage(ally.maxhp / 16, ally, source, this.getEffect('Flame Burst'));
				}
			}
		},
		onAfterSubDamage(damage, target, source, move) {
			if (target.side.active.length === 1) {
				return;
			}
			for (const ally of target.side.active) {
				if (ally && this.isAdjacent(target, ally)) {
					this.damage(ally.maxhp / 16, ally, source, this.getEffect('Flame Burst'));
				}
			}
		},
		secondary: {
			chance: 20,
			onHit(target) {
				if (target.status === 'bld') target.cureStatus();
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"flamecharge": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a 100% chance to raise the user's Speed by 1 stage.",
		shortDesc: "100% chance to raise the user's Speed by 1.",
		id: "flamecharge",
		name: "Flame Charge",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 100,
		contestType: "Cool",
	},
	"flameimpact": {
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "flameimpact",
		name: "Flame Impact",
		pp: 20,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 100,
		contestType: "Cool",
	},
	"flamewheel": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target. Thaws user.",
		id: "flamewheel",
		name: "Flame Wheel",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"flamethrower": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to burn the target. Has a 30% chance to stop bleeding.",
		shortDesc: "10% chance to burn the target. 30% chance to stop bleed.",
		id: "flamethrower",
		name: "Flamethrower",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 30,
				onHit(target) {
					if (target.status === 'bld') target.cureStatus();
				},
			}, {
				chance: 10,
				status: 'brn',
			},
		],
		target: "normal",
		type: "Fire",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"flareblitz": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Has a 10% chance to burn the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to burn. Thaws user.",
		id: "flareblitz",
		name: "Flare Blitz",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 190,
		contestType: "Cool",
	},
	"flash": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1.",
		id: "flash",
		name: "Flash",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {evasion: 1},
		contestType: "Beautiful",
	},
	"flashcannon": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "flashcannon",
		name: "Flash Cannon",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"flatter": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Raises the target's Special Attack by 1 stage and confuses it.",
		shortDesc: "Raises the target's Sp. Atk by 1 and confuses it.",
		id: "flatter",
		name: "Flatter",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		boosts: {
			spa: 1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"fleurcannon": {
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "fleurcannon",
		name: "Fleur Cannon",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"fling": {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		desc: "The power of this move is based on the user's held item. The held item is lost and it activates for the target if applicable. If there is no target or the target avoids this move by protecting itself, the user's held item is still lost. The user can regain a thrown item with Recycle or the Harvest Ability. Fails if the user has no held item, if the held item cannot be thrown, if the user is under the effect of Embargo or Magic Room, or if the user has the Klutz Ability.",
		shortDesc: "Flings the user's item at the target. Power varies.",
		id: "fling",
		name: "Fling",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onPrepareHit(target, source, move) {
			if (source.ignoringItem()) return false;
			let item = source.getItem();
			if (!this.singleEvent('TakeItem', item, source.itemData, source, source, move, item)) return false;
			if (!item.fling) return false;
			move.basePower = item.fling.basePower;
			if (item.isBerry) {
				move.onHit = function (foe) {
					if (this.singleEvent('Eat', item, null, foe, null, null)) {
						this.runEvent('EatItem', foe, null, null, item);
					}
					if (item.onEat) foe.ateBerry = true;
				};
			} else if (item.fling.effect) {
				move.onHit = item.fling.effect;
			} else {
				if (!move.secondaries) move.secondaries = [];
				if (item.fling.status) {
					move.secondaries.push({status: item.fling.status});
				} else if (item.fling.volatileStatus) {
					move.secondaries.push({volatileStatus: item.fling.volatileStatus});
				}
			}
			source.setItem('');
			source.lastItem = item.id;
			source.usedItemThisTurn = true;
			this.add("-enditem", source, item.name, '[from] move: Fling');
			this.runEvent('AfterUseItem', source, null, null, item);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 100,
		contestType: "Cute",
	},
	"floralhealing": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target restores 1/2 of its maximum HP, rounded half up. If the terrain is Grassy Terrain, the target instead restores 2/3 of its maximum HP, rounded half down.",
		shortDesc: "Heals the target by 50% of its max HP.",
		id: "floralhealing",
		name: "Floral Healing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let success = false;
			if (this.field.isTerrain('grassyterrain')) {
				success = !!this.heal(this.modify(target.maxhp, 0.667)); // TODO: find out the real value
			} else {
				success = !!this.heal(Math.ceil(target.maxhp * 0.5));
			}
			if (success && target.side.id !== source.side.id) {
				target.staleness = 'external';
			}
			return success;
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"flowershield": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the Defense of all active Grass-type Pokemon by 1 stage. Fails if there are no active Grass-type Pokemon.",
		shortDesc: "Raises Defense by 1 of all active Grass types.",
		id: "flowershield",
		name: "Flower Shield",
		pp: 10,
		priority: 0,
		flags: {distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitField(target, source, move) {
			let targets = [];
			for (const pokemon of this.getAllActive()) {
				if (pokemon.hasType('Grass')) {
					// This move affects every Grass-type Pokemon in play.
					targets.push(pokemon);
				}
			}
			let success = false;
			for (const target of targets) {
				success = this.boost({def: 1}, target, source, move) || success;
			}
			return success;
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMoveBoost: {def: 1},
		contestType: "Beautiful",
	},
	"fly": {
		accuracy: 95,
		basePower: 90,
		category: "Physical",
		desc: "This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister, and Gust and Twister have doubled power when used against it. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Flies up on first turn, then strikes the next turn.",
		id: "fly",
		name: "Fly",
		pp: 15,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onTryImmunity(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'helpinghand'].includes(move.id)) {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 175,
		contestType: "Clever",
	},
	"flyingpress": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "This move combines Flying in its type effectiveness against the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "Combines Flying in its type effectiveness.",
		id: "flyingpress",
		name: "Flying Press",
		pp: 10,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.getEffectiveness('Flying', type);
		},
		priority: 0,
		secondary: null,
		target: "any",
		type: "Fighting",
		zMovePower: 170,
		contestType: "Tough",
	},
	"focusblast": {
		accuracy: 70,
		basePower: 120,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "focusblast",
		name: "Focus Blast",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 190,
		contestType: "Cool",
	},
	"focusenergy": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's chance for a critical hit by 2 stages. Fails if the user already has the effect. Baton Pass can be used to transfer this effect to an ally.",
		shortDesc: "Raises the user's critical hit ratio by 2.",
		id: "focusenergy",
		name: "Focus Energy",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'focusenergy',
		effect: {
			onStart(target, source, effect) {
				if (effect && effect.id === 'zpower') {
					this.add('-start', target, 'move: Focus Energy', '[zeffect]');
				} else if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', target, 'move: Focus Energy', '[silent]');
				} else {
					this.add('-start', target, 'move: Focus Energy');
				}
			},
			onModifyCritRatio(critRatio) {
				return critRatio + 2;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {accuracy: 1},
		contestType: "Cool",
	},
	"focuspunch": {
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		desc: "The user loses its focus and does nothing if it is hit by a damaging attack this turn before it can execute the move.",
		shortDesc: "Fails if the user takes damage before it hits.",
		id: "focuspunch",
		name: "Focus Punch",
		pp: 20,
		priority: -3,
		flags: {contact: 1, protect: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('focuspunch');
		},
		beforeMoveCallback(pokemon) {
			if (pokemon.volatiles['focuspunch'] && pokemon.volatiles['focuspunch'].lostFocus) {
				this.add('cant', pokemon, 'Focus Punch', 'Focus Punch');
				return true;
			}
		},
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Focus Punch');
			},
			onHit(pokemon, source, move) {
				if (move.category !== 'Status') {
					pokemon.volatiles['focuspunch'].lostFocus = true;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 200,
		contestType: "Tough",
	},
	"followme": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "The foes' moves target the user on the turn used.",
		id: "followme",
		name: "Follow Me",
		pp: 20,
		priority: 2,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'followme',
		onTryHit(target) {
			if (target.side.active.length < 2) return false;
		},
		effect: {
			duration: 1,
			onStart(target, source, effect) {
				if (effect && effect.id === 'zpower') {
					this.add('-singleturn', target, 'move: Follow Me', '[zeffect]');
				} else {
					this.add('-singleturn', target, 'move: Follow Me');
				}
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectData.target.isSkyDropped() && this.validTarget(this.effectData.target, source, move.target)) {
					this.debug("Follow Me redirected target of move");
					return this.effectData.target;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"forcepalm": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		id: "forcepalm",
		name: "Force Palm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Cool",
	},
	"foresight": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Miracle Eye or Odor Sleuth.",
		shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored.",
		id: "foresight",
		name: "Foresight",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'foresight',
		onTryHit(target) {
			if (target.volatiles['miracleeye']) return false;
		},
		effect: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Foresight');
			},
			onNegateImmunity(pokemon, type) {
				if (pokemon.hasType('Ghost') && ['Normal', 'Fighting'].includes(type)) return false;
			},
			onModifyBoost(boosts) {
				if (boosts.evasion && boosts.evasion > 0) {
					boosts.evasion = 0;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'crit2',
		contestType: "Clever",
	},
	"forestscurse": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the Grass type to be added to the target, effectively making it have two or three types. Fails if the target is already a Grass type. If Trick-or-Treat adds a type to the target, it replaces the type added by this move and vice versa.",
		shortDesc: "Adds Grass to the target's type(s).",
		id: "forestscurse",
		name: "Forest's Curse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.hasType('Grass')) return false;
			if (!target.addType('Grass')) return false;
			this.add('-start', target, 'typeadd', 'Grass', '[from] move: Forest\'s Curse');
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Clever",
	},
	"foulplay": {
		accuracy: 100,
		basePower: 95,
		category: "Physical",
		desc: "Damage is calculated using the target's Attack stat, including stat stage changes. The user's Ability, item, and burn are used as normal.",
		shortDesc: "Uses target's Attack stat in damage calculation.",
		id: "foulplay",
		name: "Foul Play",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		useTargetOffensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 175,
		contestType: "Clever",
	},
	"freezedry": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "Has a 10% chance to freeze the target. This move's type effectiveness against Water is changed to be super effective no matter what this move's type is.",
		shortDesc: "10% chance to freeze. Super effective on Water.",
		id: "freezedry",
		name: "Freeze-Dry",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Water') return 1;
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"freezeshock": {
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. 30% paralyze.",
		id: "freezeshock",
		name: "Freeze Shock",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"frenzyplant": {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "frenzyplant",
		name: "Frenzy Plant",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 200,
		contestType: "Cool",
	},
	"frostbreath": {
		accuracy: 90,
		basePower: 60,
		category: "Special",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit.",
		id: "frostbreath",
		name: "Frost Breath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Ice",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"frustration": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
		},
		category: "Physical",
		desc: "Power is equal to the greater of ((255 - user's Happiness) * 2/5), rounded down, or 1.",
		shortDesc: "Max 102 power at minimum Happiness.",
		id: "frustration",
		name: "Frustration",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cute",
	},
	"furyattack": {
		accuracy: 85,
		basePower: 15,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "furyattack",
		name: "Fury Attack",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"furycutter": {
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles.furycutter || move.hit === 1) {
				pokemon.addVolatile('furycutter');
			}
			return this.clampIntRange(move.basePower * pokemon.volatiles.furycutter.multiplier, 1, 160);
		},
		category: "Physical",
		desc: "Power doubles with each successful hit, up to a maximum of 160 power. The power is reset if this move misses or another move is used. Has a 10% chance to cause bleeding.",
		shortDesc: "Power doubles with each hit, up to 160. 10% chance to cause bleed",
		id: "furycutter",
		name: "Fury Cutter",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		effect: {
			duration: 2,
			onStart() {
				this.effectData.multiplier = 1;
			},
			onRestart() {
				if (this.effectData.multiplier < 4) {
					this.effectData.multiplier <<= 1;
				}
				this.effectData.duration = 2;
			},
		},
		secondary: {
			chance: 10,
			status: 'bld',
		},
		target: "normal",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cool",
	},
	"furyswipes": {
		accuracy: 80,
		basePower: 18,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "furyswipes",
		name: "Fury Swipes",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"fusionbolt": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "Power doubles if the last move used by any Pokemon this turn was Fusion Flare.",
		shortDesc: "Power doubles if used after Fusion Flare.",
		id: "fusionbolt",
		name: "Fusion Bolt",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (this.lastMoveThisTurn && this.lastMoveThisTurn.id === 'fusionflare') {
				this.debug('double power');
				currentBoost *=2;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 180,
		contestType: "Cool",
	},
	"fusionflare": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "Power doubles if the last move used by any Pokemon this turn was Fusion Bolt. Has a 20% chance to cauterize wounds.",
		shortDesc: "Power doubles if used after Fusion Bolt. 20% chance to stop bleed.",
		id: "fusionflare",
		name: "Fusion Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (this.lastMoveThisTurn && this.lastMoveThisTurn.id === 'fusionbolt') {
				this.debug('double power');
				currentBoost *=2;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		secondary: {
			chance: 20,
			onHit(target) {
				if (target.status === 'bld') target.cureStatus();
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"futuresight": {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "Deals damage two turns after this move is used. At the end of that turn, the damage is calculated at that time and dealt to the Pokemon at the position the target had when the move was used. If the user is no longer active at the time, damage is calculated based on the user's natural Special Attack stat, types, and level, with no boosts from its held item or Ability. Fails if this move or Doom Desire is already in effect for the target's position.",
		shortDesc: "Hits two turns after being used.",
		id: "futuresight",
		name: "Future Sight",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreImmunity: true,
		isFutureMove: true,
		onTry(source, target) {
			if (!target.side.addSlotCondition(target, 'futuremove')) return false;
			Object.assign(target.side.slotConditions[target.position]['futuremove'], {
				duration: 3,
				move: 'futuresight',
				source: source,
				moveData: {
					id: 'futuresight',
					name: "Future Sight",
					accuracy: 100,
					basePower: 120,
					category: "Special",
					priority: 0,
					flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
					ignoreImmunity: false,
					effectType: 'Move',
					isFutureMove: true,
					type: 'Psychic',
				},
			});
			this.add('-start', source, 'move: Future Sight');
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 190,
		contestType: "Clever",
	},
	"gastroacid": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's Ability to be rendered ineffective as long as it remains active. If the target uses Baton Pass, the replacement will remain under this effect. If the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode, this move fails, and receiving the effect through Baton Pass ends the effect immediately.",
		shortDesc: "Nullifies the target's Ability.",
		id: "gastroacid",
		name: "Gastro Acid",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'gastroacid',
		onTryHit(pokemon) {
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'zenmode'];
			if (bannedAbilities.includes(pokemon.ability)) {
				return false;
			}
		},
		effect: {
			// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.js
			onStart(pokemon) {
				this.add('-endability', pokemon);
				this.singleEvent('End', this.getAbility(pokemon.ability), pokemon.abilityData, pokemon, pokemon, 'gastroacid');
			},
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMoveBoost: {spe: 1},
		contestType: "Tough",
	},
	"geargrind": {
		accuracy: 85,
		basePower: 50,
		category: "Physical",
		desc: "Hits twice. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times in one turn.",
		id: "geargrind",
		name: "Gear Grind",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 180,
		contestType: "Clever",
	},
	"gearup": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the Attack and Special Attack of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
		shortDesc: "Raises Atk, Sp. Atk of allies with Plus/Minus by 1.",
		id: "gearup",
		name: "Gear Up",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitSide(side, source, move) {
			const targets = [];
			for (const pokemon of side.active) {
				if (pokemon.hasAbility(['plus', 'minus'])) {
					targets.push(pokemon);
				}
			}
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({atk: 1, spa: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Steel",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"gemshatter": {
		accuracy: 95,
		basePower: 50,
		category: "Special",
		desc: "15% chance to cause a random status not including infatuated",
		shortDesc: "15% chance to cause a random status",
		id: "gemshatter",
		name: "Gem Shatter",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 15,
			onHit(target, source) {
				let result = this.random(10);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else if (result === 2){
					target.trySetStatus('frz', source);
				} else if (result === 3){
					target.trySetStatus('bld', source);
				} else if (result === 4){
					target.trySetStatus('psn', source);
				} else if (result === 5){
					target.trySetStatus('tox', source);
				} else if (result === 6){
					target.trySetStatus('slp', source);
				} else if (result === 7) {
					target.addVolatile('confusion', source);
				} else if (result === 8) {
					target.addVolatile('mustrecharge', source);
				} else if (result === 9) {
					target.addVolatile('flinch', source);
				}
			},
		},
		target: "normal",
		type: "Rock",
		zMovePower: 100,
		contestType: "Cool",
	},
	"genesissupernova": {
		accuracy: true,
		basePower: 185,
		category: "Special",
		desc: "If this move is successful, the terrain becomes Psychic Terrain.",
		shortDesc: "Summons Psychic Terrain.",
		id: "genesissupernova",
		name: "Genesis Supernova",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "mewniumz",
		secondary: {
			chance: 100,
			self: {
				onHit() {
					this.field.setTerrain('psychicterrain');
				},
			},
		},
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	"gemstoneglimmer": {
		accuracy: 95,
		basePower: 75,
		category: "Special",
		desc: "25% chance to lower opponent's accuracy.",
		shortDesc: "25% chance to lower opponent's accuracy.",
		id: "gemstoneglimmer",
		name: "Gemstone Glimmer",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 25,
			boosts: {
				accuracy: -1
			},
		},
		target: "normal",
		type: "Rock",
		zMovePower: 140,
		contestType: "Cool",
	},
	"geomancy": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Attack, Special Defense, and Speed by 2 stages. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then raises SpA, SpD, Spe by 2 turn 2.",
		id: "geomancy",
		name: "Geomancy",
		pp: 10,
		priority: 0,
		flags: {charge: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		boosts: {
			spa: 2,
			spd: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Beautiful",
	},
	"gigadrain": {
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "gigadrain",
		name: "Giga Drain",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 140,
		contestType: "Clever",
	},
	"gigaimpact": {
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "gigaimpact",
		name: "Giga Impact",
		pp: 5,
		priority: 0,
		flags: {contact: 1, recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 200,
		contestType: "Tough",
	},
	"gigavolthavoc": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "gigavolthavoc",
		name: "Gigavolt Havoc",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "electriumz",
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	"glaciate": {
		accuracy: 95,
		basePower: 65,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1.",
		id: "glaciate",
		name: "Glaciate",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"glare": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target.",
		id: "glare",
		name: "Glare",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Tough",
	},
	"grassknot": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let targetWeight = target.getWeight();
			if (targetWeight >= 200) {
				this.debug('120 bp');
				return 120;
			}
			if (targetWeight >= 100) {
				this.debug('100 bp');
				return 100;
			}
			if (targetWeight >= 50) {
				this.debug('80 bp');
				return 80;
			}
			if (targetWeight >= 25) {
				this.debug('60 bp');
				return 60;
			}
			if (targetWeight >= 10) {
				this.debug('40 bp');
				return 40;
			}
			this.debug('20 bp');
			return 20;
		},
		category: "Special",
		desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
		shortDesc: "More power the heavier the target.",
		id: "grassknot",
		name: "Grass Knot",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 160,
		contestType: "Cute",
	},
	"grasspledge": {
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['waterpledge', 'firepledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		desc: "If one of the user's allies chose to use Fire Pledge or Water Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Fire Pledge with 150 power and a sea of fire appears on the target's side for 4 turns, which causes damage to non-Fire types equal to 1/8 of their maximum HP, rounded down, at the end of each turn during effect, including the last turn. If combined with Water Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Grass Gem.",
		shortDesc: "Use with Fire or Water Pledge for added effect.",
		id: "grasspledge",
		name: "Grass Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onPrepareHit(target, source, move) {
			for (const action of this.queue) {
				// @ts-ignore
				if (!action.move || !action.pokemon || !action.pokemon.isActive || action.pokemon.fainted) continue;
				// @ts-ignore
				if (action.pokemon.side === source.side && ['waterpledge', 'firepledge'].includes(action.move.id)) {
					// @ts-ignore
					this.prioritizeAction(action);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'waterpledge') {
				move.type = 'Grass';
				move.forceSTAB = true;
			}
			if (move.sourceEffect === 'firepledge') {
				move.type = 'Fire';
				move.forceSTAB = true;
			}
		},
		onHit(target, source, move) {
			if (move.sourceEffect === 'waterpledge') {
				target.side.addSideCondition('grasspledge');
			}
			if (move.sourceEffect === 'firepledge') {
				target.side.addSideCondition('firepledge');
			}
		},
		effect: {
			duration: 4,
			onStart(targetSide) {
				this.add('-sidestart', targetSide, 'Grass Pledge');
			},
			onEnd(targetSide) {
				this.add('-sideend', targetSide, 'Grass Pledge');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(0.25);
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"grasswhistle": {
		accuracy: 55,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to fall asleep.",
		id: "grasswhistle",
		name: "Grass Whistle",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"grassyterrain": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the terrain becomes Grassy Terrain. During the effect, the power of Grass-type attacks used by grounded Pokemon is multiplied by 1.5, the power of Bulldoze, Earthquake, and Magnitude used against grounded Pokemon is multiplied by 0.5, and grounded Pokemon have 1/16 of their maximum HP, rounded down, restored at the end of each turn, including the last turn. Camouflage transforms the user into a Grass type, Nature Power becomes Energy Ball, and Secret Power has a 30% chance to cause sleep. Fails if the current terrain is Grassy Terrain.",
		shortDesc: "5 turns. Grounded: +Grass power,+1/16 max HP.",
		id: "grassyterrain",
		name: "Grassy Terrain",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		terrain: 'grassyterrain',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePower(basePower, attacker, defender, move) {
				let weakenedMoves = ['earthquake', 'bulldoze', 'magnitude'];
				if (weakenedMoves.includes(move.id)) {
					this.debug('move weakened by grassy terrain');
					return this.chainModify(0.5);
				}
				if (move.type === 'Grass' && attacker.isGrounded()) {
					this.debug('grassy terrain boost');
					return this.chainModify(1.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Grassy Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Grassy Terrain');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 3,
			onResidual() {
				this.eachEvent('Terrain');
			},
			onTerrain(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.debug('Pokemon is grounded, healing through Grassy Terrain.');
					this.heal(pokemon.maxhp / 16, pokemon, pokemon);
				}
			},
			onEnd() {
				if (!this.effectData.duration) this.eachEvent('Terrain');
				this.add('-fieldend', 'move: Grassy Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Grass",
		zMoveBoost: {def: 1},
		contestType: "Beautiful",
	},
	"gravity": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the evasiveness of all active Pokemon is multiplied by 0.6. At the time of use, Bounce, Fly, Magnet Rise, Sky Drop, and Telekinesis end immediately for all active Pokemon. During the effect, Bounce, Fly, Flying Press, High Jump Kick, Jump Kick, Magnet Rise, Sky Drop, Splash, and Telekinesis are prevented from being used by all active Pokemon. Ground-type attacks, Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability can affect Flying types or Pokemon with the Levitate Ability. Fails if this move is already in effect.",
		shortDesc: "For 5 turns, negates all Ground immunities.",
		id: "gravity",
		name: "Gravity",
		pp: 5,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'gravity',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onStart() {
				this.add('-fieldstart', 'move: Gravity');
				for (const pokemon of this.getAllActive()) {
					let applies = false;
					if (pokemon.removeVolatile('bounce') || pokemon.removeVolatile('fly')) {
						applies = true;
						this.cancelMove(pokemon);
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['skydrop']) {
						applies = true;
						this.cancelMove(pokemon);

						if (pokemon.volatiles['skydrop'].source) {
							this.add('-end', pokemon.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
						}
						pokemon.removeVolatile('skydrop');
						pokemon.removeVolatile('twoturnmove');
					}
					if (pokemon.volatiles['magnetrise']) {
						applies = true;
						delete pokemon.volatiles['magnetrise'];
					}
					if (pokemon.volatiles['telekinesis']) {
						applies = true;
						delete pokemon.volatiles['telekinesis'];
					}
					if (applies) this.add('-activate', pokemon, 'move: Gravity');
				}
			},
			onModifyAccuracy(accuracy) {
				if (typeof accuracy !== 'number') return;
				return accuracy * 5 / 3;
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.getMove(moveSlot.id).flags['gravity']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['gravity']) {
					this.add('cant', pokemon, 'move: Gravity', move);
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd() {
				this.add('-fieldend', 'move: Gravity');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"growl": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the foe(s) Attack by 1.",
		id: "growl",
		name: "Growl",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"growth": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and Special Attack by 1 stage. If the weather is Sunny Day, raises the user's Attack and Special Attack by 2 stages.",
		shortDesc: "Raises user's Attack and Sp. Atk by 1; 2 in Sun.",
		id: "growth",
		name: "Growth",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) move.boosts = {atk: 2, spa: 2};
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {spa: 1},
		contestType: "Beautiful",
	},
	"grudge": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the user's next turn, if an opposing Pokemon's attack knocks the user out, that move loses all its remaining PP.",
		shortDesc: "If the user faints, the attack used loses all its PP.",
		id: "grudge",
		name: "Grudge",
		pp: 5,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'grudge',
		effect: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Grudge');
			},
			onFaint(target, source, effect) {
				if (!source || source.fainted || !effect) return;
				if (effect.effectType === 'Move' && !effect.isFutureMove && source.lastMove) {
					for (const moveSlot of source.moveSlots) {
						if (moveSlot.id === source.lastMove.id) {
							moveSlot.pp = 0;
							this.add('-activate', source, 'move: Grudge', this.getMove(source.lastMove.id).name);
						}
					}
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Grudge before attack');
				pokemon.removeVolatile('grudge');
			},
		},
		secondary: null,
		target: "self",
		type: "Ghost",
		zMoveEffect: 'redirect',
		contestType: "Tough",
	},
	"guardianofalola": {
		accuracy: true,
		basePower: 0,
		damageCallback(pokemon, target) {
			if (target.volatiles['banefulbunker'] || target.volatiles['kingsshield'] || target.side.getSideCondition('matblock') || target.volatiles['protect'] || target.volatiles['spikyshield']) {
				this.add('-zbroken', target);
				return this.clampIntRange(Math.ceil(Math.floor(target.hp * 3 / 4) / 4 - 0.5), 1);
			}
			return this.clampIntRange(Math.floor(target.hp * 3 / 4), 1);
		},
		category: "Special",
		desc: "Deals damage to the target equal to 3/4 of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 3/4 target's current HP.",
		id: "guardianofalola",
		name: "Guardian of Alola",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "tapuniumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Tough",
	},
	"guardsplit": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and the target have their Defense and Special Defense stats set to be equal to the average of the user and the target's Defense and Special Defense stats, respectively, rounded down. Stat stage changes are unaffected.",
		shortDesc: "Averages Defense and Sp. Def stats with target.",
		id: "guardsplit",
		name: "Guard Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let newdef = Math.floor((target.storedStats.def + source.storedStats.def) / 2);
			target.storedStats.def = newdef;
			source.storedStats.def = newdef;
			let newspd = Math.floor((target.storedStats.spd + source.storedStats.spd) / 2);
			target.storedStats.spd = newspd;
			source.storedStats.spd = newspd;
			this.add('-activate', source, 'move: Guard Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"guardswap": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its Defense and Special Defense stat stage changes with the target.",
		shortDesc: "Swaps Defense and Sp. Def changes with target.",
		id: "guardswap",
		name: "Guard Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let targetBoosts = {};
			let sourceBoosts = {};

			for (const stat of ['def', 'spd']) {
				// @ts-ignore
				targetBoosts[stat] = target.boosts[stat];
				// @ts-ignore
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'def, spd', '[from] move: Guard Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"guillotine": {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "guillotine",
		name: "Guillotine",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 180,
		contestType: "Cool",
	},
	"gunkshot": {
		accuracy: 80,
		basePower: 120,
		category: "Physical",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		id: "gunkshot",
		name: "Gunk Shot",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 190,
		contestType: "Tough",
	},
	"gust": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "Power doubles during Bounce, Fly, and Sky Drop.",
		id: "gust",
		name: "Gust",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 100,
		contestType: "Clever",
	},
	"gyroball": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = (Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) || 1);
			if (power > 150) power = 150;
			this.debug('' + power + ' bp');
			return power;
		},
		category: "Physical",
		desc: "Power is equal to (25 * target's current Speed / user's current Speed) + 1, rounded down, but not more than 150. If the user's current Speed is 0, this move's power is 1.",
		shortDesc: "More power the slower the user than the target.",
		id: "gyroball",
		name: "Gyro Ball",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Cool",
	},
	"hail": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the weather becomes Hail. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are an Ice type or have the Ice Body, Magic Guard, Overcoat, or Snow Cloak Abilities. Lasts for 8 turns if the user is holding Icy Rock. Fails if the current weather is Hail.",
		shortDesc: "For 5 turns, hail crashes down.",
		id: "hail",
		name: "Hail",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		weather: 'hail',
		secondary: null,
		target: "all",
		type: "Ice",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"hammerarm": {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		desc: "Lowers the user's Speed by 1 stage.",
		shortDesc: "Lowers the user's Speed by 1.",
		id: "hammerarm",
		name: "Hammer Arm",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 180,
		contestType: "Tough",
	},
	"happyhour": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "No competitive use.",
		id: "happyhour",
		name: "Happy Hour",
		pp: 30,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			this.add('-activate', target, 'move: Happy Hour');
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Cute",
	},
	"harden": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1.",
		id: "harden",
		name: "Harden",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"haze": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Resets the stat stages of all active Pokemon to 0.",
		shortDesc: "Eliminates all stat changes.",
		id: "haze",
		name: "Haze",
		pp: 30,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitField() {
			this.add('-clearallboost');
			for (const pokemon of this.getAllActive()) {
				pokemon.clearBoosts();
			}
		},
		secondary: null,
		target: "all",
		type: "Ice",
		zMoveEffect: 'heal',
		contestType: "Beautiful",
	},
	"headbutt": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "headbutt",
		name: "Headbutt",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Tough",
	},
	"headcharge": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
		id: "headcharge",
		name: "Head Charge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Tough",
	},
	"headsmash": {
		accuracy: 80,
		basePower: 150,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/2 recoil.",
		id: "headsmash",
		name: "Head Smash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 200,
		contestType: "Tough",
	},
	"healbell": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Every Pokemon in the user's party is cured of its major status condition. Active Pokemon with the Soundproof Ability are not cured.",
		shortDesc: "Cures the user's party of all status conditions.",
		id: "healbell",
		name: "Heal Bell",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, sound: 1, distance: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon, source) {
			this.add('-activate', source, 'move: Heal Bell');
			let side = pokemon.side;
			let success = false;
			for (const ally of side.pokemon) {
				if (ally.hasAbility('soundproof')) continue;
				if (ally.cureStatus()) success = true;
			}
			return success;
		},
		target: "allyTeam",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Beautiful",
	},
	"healblock": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the target is prevented from restoring any HP as long as it remains active. During the effect, healing and draining moves are unusable, and Abilities and items that grant healing will not heal the user. If an affected Pokemon uses Baton Pass, the replacement will remain unable to restore its HP. Pain Split and the Regenerator Ability are unaffected.",
		shortDesc: "For 5 turns, the foe(s) is prevented from healing.",
		id: "healblock",
		name: "Heal Block",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'healblock',
		effect: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Heal Block');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.getMove(moveSlot.id).flags['heal']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (move.flags['heal'] && !move.isZ) {
					this.add('cant', pokemon, 'move: Heal Block', move);
					return false;
				}
			},
			onResidualOrder: 17,
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Heal Block');
			},
			onTryHeal(damage, target, source, effect) {
				if ((effect && effect.id === 'zpower') || this.effectData.isZ) return damage;
				return false;
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Psychic",
		zMoveBoost: {spa: 2},
		contestType: "Clever",
	},
	"healingwish": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user faints and the Pokemon brought out to replace it has its HP fully restored along with having any major status condition cured. The new Pokemon is sent out at the end of the turn, and the healing happens before hazards take effect. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Replacement is fully healed.",
		id: "healingwish",
		name: "Healing Wish",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon, target, move) {
			if (!this.canSwitch(pokemon.side)) {
				delete move.selfdestruct;
				return false;
			}
		},
		selfdestruct: "ifHit",
		slotCondition: 'healingwish',
		effect: {
			duration: 2,
			onSwitchInPriority: 1,
			onSwitchIn(target) {
				if (!target.fainted) {
					target.heal(target.maxhp);
					target.setStatus('');
					this.add('-heal', target, target.getHealth, '[from] move: Healing Wish');
					target.side.removeSlotCondition(target, 'healingwish');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},
	"healorder": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "healorder",
		name: "Heal Order",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Bug",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"healpulse": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target restores 1/2 of its maximum HP, rounded half up. If the user has the Mega Launcher Ability, the target instead restores 3/4 of its maximum HP, rounded half down.",
		shortDesc: "Heals the target by 50% of its max HP.",
		id: "healpulse",
		name: "Heal Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, reflectable: 1, distance: 1, heal: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let success = false;
			if (source.hasAbility('megalauncher')) {
				success = !!this.heal(this.modify(target.maxhp, 0.75));
			} else {
				success = !!this.heal(Math.ceil(target.maxhp * 0.5));
			}
			if (success && target.side.id !== source.side.id) {
				target.staleness = 'external';
			}
			return success;
		},
		secondary: null,
		target: "any",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"heartstamp": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "heartstamp",
		name: "Heart Stamp",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 120,
		contestType: "Cute",
	},
	"heartswap": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps all its stat stage changes with the target.",
		shortDesc: "Swaps all stat changes with target.",
		id: "heartswap",
		name: "Heart Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let targetBoosts = {};
			let sourceBoosts = {};

			for (let i in target.boosts) {
				// @ts-ignore
				targetBoosts[i] = target.boosts[i];
				// @ts-ignore
				sourceBoosts[i] = source.boosts[i];
			}

			target.setBoost(sourceBoosts);
			source.setBoost(targetBoosts);

			this.add('-swapboost', source, target, '[from] move: Heart Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveEffect: 'crit2',
		contestType: "Clever",
	},
	"heatcrash": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let targetWeight = target.getWeight();
			let pokemonWeight = pokemon.getWeight();
			if (pokemonWeight > targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight > targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight > targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight > targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		desc: "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "More power the heavier the user than the target.",
		id: "heatcrash",
		name: "Heat Crash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 160,
		contestType: "Tough",
	},
	"heatwave": {
		accuracy: 90,
		basePower: 95,
		category: "Special",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the foe(s).",
		id: "heatwave",
		name: "Heat Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "allAdjacentFoes",
		type: "Fire",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"heavyslam": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let targetWeight = target.getWeight();
			let pokemonWeight = pokemon.getWeight();
			if (pokemonWeight > targetWeight * 5) {
				return 120;
			}
			if (pokemonWeight > targetWeight * 4) {
				return 100;
			}
			if (pokemonWeight > targetWeight * 3) {
				return 80;
			}
			if (pokemonWeight > targetWeight * 2) {
				return 60;
			}
			return 40;
		},
		category: "Physical",
		desc: "The power of this move depends on (user's weight / target's weight), rounded down. Power is equal to 120 if the result is 5 or more, 100 if 4, 80 if 3, 60 if 2, and 40 if 1 or less. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "More power the heavier the user than the target.",
		id: "heavyslam",
		name: "Heavy Slam",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Tough",
	},
	"hellfire": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the terrain becomes Hell Fire. During the effect, the power of Fire-type attacks made by grounded Pokemon is multiplied by 2, the power of Dark-type attacks made by grounded Pokemon is multiplied by 1.25 and Pokemon are damaged for varying amounts. Camouflage transforms the user into an Fire/Dark type, Nature Power becomes Flamethrower, and Secret Power has a 30% chance to cause burn. Fails if the current terrain is Hell Fire.",
		shortDesc: "5 turns. Grounded: +Fire power, +Dark power, damaged.",
		id: "hellfire",
		name: "Hell Fire",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		terrain: 'hellfire',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasAbility('hellfield')) {
					return 99;
				}
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Fire' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('Hell Fire boost');
					return this.chainModify(2);
				}
				if (move.type === 'Dark' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('Hell Fire boost');
					return this.chainModify(1.25);
				}
				if (move.type === 'Water' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('Hell Fire nerf');
					return this.chainModify(0.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Hell Fire', '[from] ability: ' + effect, '[of] ' + source);

				} else {
					this.add('-fieldstart', 'move: Hell Fire');
				}
			},
			onResidualOrder: 5,
			onResidualSubOrder: 3,
			onResidual() {
				this.eachEvent('Terrain');
			},
			onTerrain(pokemon) {
				if (pokemon.isGrounded() && !pokemon.isSemiInvulnerable()) {
					this.debug('Pokemon is grounded, damaging through Hell Fire.');
					if(pokemon.hasType('Fire')) return;
					let damageDenom = 16;
					if(pokemon.hasType('Dragon')) damageDenom *=4;
					if(pokemon.hasType('Rock')) damageDenom *=2;
					if(pokemon.hasType('Water')) damageDenom *=1.5;
					if(pokemon.hasType('Steel')) damageDenom /=2;
					if(pokemon.hasType('Grass')) damageDenom /=2;
					if(pokemon.hasType('Ice')) damageDenom /=2;
					if(pokemon.hasType('Bug')) damageDenom /=2;
					this.damage(pokemon.maxhp / damageDenom, pokemon, pokemon);
				}
			},
			onEnd() {
				if (!this.effectData.duration) this.eachEvent('Terrain');
				this.add('-fieldend', 'move: Hell Fire');
			},
		},
		secondary: null,
		target: "all",
		type: "Fire",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"helpinghand": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The power of the target's attack this turn is multiplied by 1.5 (this effect is stackable). Fails if there is no ally adjacent to the user or if the ally already moved this turn, but does not fail if the ally is using a two-turn move.",
		shortDesc: "One adjacent ally's move power is 1.5x this turn.",
		id: "helpinghand",
		name: "Helping Hand",
		pp: 20,
		priority: 5,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'helpinghand',
		onTryHit(target) {
			if (!target.newlySwitched && !this.willMove(target)) return false;
		},
		effect: {
			duration: 1,
			onStart(target, source) {
				this.effectData.multiplier = 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onRestart(target, source) {
				this.effectData.multiplier *= 1.5;
				this.add('-singleturn', target, 'Helping Hand', '[of] ' + source);
			},
			onBasePowerPriority: 3,
			onBasePower(basePower) {
				this.debug('Boosting from Helping Hand: ' + this.effectData.multiplier);
				return this.chainModify(this.effectData.multiplier);
			},
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"hex": {
		accuracy: 100,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
		desc: "Power doubles if the target has a major status condition.",
		shortDesc: "Power doubles if the target has a status ailment.",
		id: "hex",
		name: "Hex",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 160,
		contestType: "Clever",
	},
//FIX
	"hiddenpower": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "This move's type depends on the user's individual values (IVs), and can be any type but Fairy and Normal.",
		shortDesc: "Varies in type based on the user's IVs.",
		id: "hiddenpower",
		name: "Hidden Power",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			move.type = pokemon.hpType || 'Dark';
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 120,
		contestType: "Clever",
	},
	"hiddenpowerbug": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Bug",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Clever",
	},
	"hiddenpowerdark": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Dark",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Clever",
	},
	"hiddenpowerdragon": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Dragon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		contestType: "Clever",
	},
	"hiddenpowerelectric": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Electric",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Clever",
	},
	"hiddenpowerfighting": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Fighting",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		contestType: "Clever",
	},
	"hiddenpowerfire": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Fire",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Clever",
	},
	"hiddenpowerflying": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Flying",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Clever",
	},
	"hiddenpowerghost": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Ghost",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Clever",
	},
	"hiddenpowergrass": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Grass",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		contestType: "Clever",
	},
	"hiddenpowerground": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Ground",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Clever",
	},
	"hiddenpowerice": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Ice",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Clever",
	},
	"hiddenpowerpoison": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Poison",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	"hiddenpowerpsychic": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Psychic",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Clever",
	},
	"hiddenpowerrock": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Rock",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Clever",
	},
	"hiddenpowersteel": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Steel",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Clever",
	},
	"hiddenpowerwater": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "",
		shortDesc: "",
		id: "hiddenpower",
		name: "Hidden Power Water",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Clever",
	},
	"highhorsepower": {
		accuracy: 95,
		basePower: 95,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "highhorsepower",
		name: "High Horsepower",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 175,
		contestType: "Tough",
	},
	"highjumpkick": {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses.",
		id: "highjumpkick",
		name: "High Jump Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		hasCustomRecoil: true,
		onMoveFail(target, source, move) {
			this.damage(source.maxhp / 2, source, source, this.getEffect('High Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 195,
		contestType: "Cool",
	},
	"holdback": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Leaves the target with at least 1 HP.",
		shortDesc: "Always leaves the target with at least 1 HP.",
		id: "holdback",
		name: "Hold Back",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		noFaint: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"holdhands": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "No competitive use. Fails if there is no ally adjacent to the user.",
		shortDesc: "No competitive use.",
		id: "holdhands",
		name: "Hold Hands",
		pp: 40,
		priority: 0,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "adjacentAlly",
		type: "Normal",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Cute",
	},
	"honeclaws": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and accuracy by 1 stage.",
		shortDesc: "Raises the user's Attack and accuracy by 1.",
		id: "honeclaws",
		name: "Hone Claws",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
			accuracy: 1,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMoveBoost: {atk: 1},
		contestType: "Cute",
	},
	"hornattack": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "hornattack",
		name: "Horn Attack",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 120,
		contestType: "Cool",
	},
	"hornleech": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "hornleech",
		name: "Horn Leech",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 140,
		contestType: "Tough",
	},
	"howl": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1.",
		id: "howl",
		name: "Howl",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Cool",
	},
	"hurricane": {
		accuracy: 70,
		basePower: 110,
		category: "Special",
		desc: "Has a 30% chance to confuse the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%.",
		shortDesc: "30% chance to confuse target. Can't miss in rain.",
		id: "hurricane",
		name: "Hurricane",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move) {
			if (this.field.isWeather(['raindance', 'primordialsea'])) {
				move.accuracy = true;
			} else if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				move.accuracy = 50;
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Flying",
		zMovePower: 185,
		contestType: "Tough",
	},
	"hydrocannon": {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "hydrocannon",
		name: "Hydro Cannon",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"hydropump": {
		accuracy: 80,
		basePower: 110,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "hydropump",
		name: "Hydro Pump",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 185,
		contestType: "Beautiful",
	},
	"hydrovortex": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "hydrovortex",
		name: "Hydro Vortex",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "wateriumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	"hyperbeam": {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "hyperbeam",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 200,
		contestType: "Cool",
	},
	"hyperfang": {
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		desc: "Has a 10% chance to flinch the target.",
		shortDesc: "10% chance to flinch the target.",
		id: "hyperfang",
		name: "Hyper Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cool",
   },
   "hyperscan": {
	  accuracy: true,
	  basePower: 0,
	  category: "Status",
	  desc: "Enables Sattelite Strike to be used without a charge turn. Has varying chances to add an effect to a move from; lock on, guaranteed crit, choose the weaker defense, ignore ability, and boost priority.",
	  shortDesc: "Satellite Strike skips the charge. Varying chance to add an effect to a move.",
	  id: "hyperscan",
	  name: "Hyper Scan",
	  pp: 20,
	  priority: 0,
	  flags: {},
	  onBasePower(basePower, pokemon, target) {
		 if (pokemon.level > 100) {
			let currentBoost = Math.floor((pokemon.level - 100) / 10);
			currentBoost = currentBoost / 20 + 1;
			return this.chainModify(currentBoost);
		 }
	  },
	  onTryHit(target, source) {
		 if (source.volatiles['hyperscan']) return false;
	  },
	  onHit(pokemon) {
		 pokemon.addVolatile('hyperscan', pokemon);
		 this.add('-activate', pokemon, 'move: Hyper Scan', '[of] ' + target);
	  },
	  effect: {
		 noCopy: true,
		 duration: 3,
		 onRestart(pokemon) {
			this.effectData.duration = 3;
		 },
		 onModifyMovePriority: -2,
		 onModifyMove(move, source, target) {
			if (move.category !== "Status") {
			   if (this.randomChance(7, 10)) {
				  source.addVolatile('lockon');
			   }
			   if (this.randomChance(4, 10)) {
				  move.willCrit = true;
			   }
			   if (this.randomChance(6, 10)) {
				  if (target.getStat('def', false, true) > target.getStat('spd', false, true)) move.defensiveCategory = 'Special';
				  else move.defensiveCategory = 'Physical';
			   }
			   if (this.randomChance(6, 10)) {
				  move.ignoreAbility = true;
			   }
			   if (this.randomChance(5, 10)) {
				  if (move.priority >= 2) return;
				  move.priority = 2;
			   }
			}
		 },
	  },
	  secondary: null,
	  target: "self",
	  type: "???",
	  zMoveEffect: 'clearnegativeboost',
	  contestType: "Clever",
   },
	"hyperspacefury": {
		accuracy: true,
		basePower: 100,
		category: "Physical",
		desc: "Lowers the user's Defense by 1 stage. This move cannot be used successfully unless the user's current form, while considering Transform, is Hoopa Unbound. If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Hoopa-U: Lowers user's Def by 1; breaks protect.",
		id: "hyperspacefury",
		name: "Hyperspace Fury",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		breaksProtect: true,
		onTry(pokemon) {
			if (pokemon.template.species === 'Hoopa-Unbound' || pokemon.template.species === 'Mew-Mega') {
				return;
			}
			this.hint("Only a Pokemon whose form is Hoopa Unbound can use this move.");
			if (pokemon.template.species === 'Hoopa') {
				this.add('-fail', pokemon, 'move: Hyperspace Fury', '[forme]');
				return null;
			}
			this.add('-fail', pokemon, 'move: Hyperspace Fury');
			return null;
		},
		self: {
			boosts: {
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 180,
		contestType: "Tough",
	},
	"hyperspacehole": {
		accuracy: true,
		basePower: 80,
		category: "Special",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally.",
		shortDesc: "Breaks the target's protection for this turn.",
		id: "hyperspacehole",
		name: "Hyperspace Hole",
		pp: 5,
		priority: 0,
		flags: {mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		breaksProtect: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 160,
		contestType: "Clever",
	},
	"hypervoice": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "hypervoice",
		name: "Hyper Voice",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMovePower: 175,
		contestType: "Cool",
	},
	"hypnosis": {
		accuracy: 60,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to fall asleep.",
		id: "hypnosis",
		name: "Hypnosis",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"iceball": {
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			if (pokemon.volatiles.iceball && pokemon.volatiles.iceball.hitCount) {
				bp *= Math.pow(2, pokemon.volatiles.iceball.hitCount);
			}
			if (pokemon.status !== 'slp') pokemon.addVolatile('iceball');
			if (pokemon.volatiles.defensecurl) {
				bp *= 2;
			}
			this.debug("Ice Ball bp: " + bp);
			return bp;
		},
		category: "Physical",
		desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user's next move after this effect ends.",
		shortDesc: "Power doubles with each hit. Repeats for 5 turns.",
		id: "iceball",
		name: "Ice Ball",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		effect: {
			duration: 2,
			onLockMove: 'iceball',
			onStart() {
				this.effectData.hitCount = 1;
			},
			onRestart() {
				this.effectData.hitCount++;
				if (this.effectData.hitCount < 5) {
					this.effectData.duration = 2;
				}
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['iceball'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"icebeam": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the target.",
		id: "icebeam",
		name: "Ice Beam",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"iceburn": {
		accuracy: 90,
		basePower: 140,
		category: "Special",
		desc: "Has a 30% chance to burn the target. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. 30% burn.",
		id: "iceburn",
		name: "Ice Burn",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"icefang": {
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		desc: "Has a 10% chance to freeze the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to freeze. 10% chance to flinch.",
		id: "icefang",
		name: "Ice Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 10,
				status: 'frz',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Ice",
		zMovePower: 120,
		contestType: "Cool",
	},
	"icehammer": {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		desc: "Lowers the user's Speed by 1 stage.",
		shortDesc: "Lowers the user's Speed by 1.",
		id: "icehammer",
		name: "Ice Hammer",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spe: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMovePower: 180,
		contestType: "Tough",
	},
	"icepunch": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the target.",
		id: "icepunch",
		name: "Ice Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"iceshard": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "iceshard",
		name: "Ice Shard",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ice",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"iciclecrash": {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "iciclecrash",
		name: "Icicle Crash",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Ice",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"iciclespear": {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "iciclespear",
		name: "Icicle Spear",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Ice",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"icywind": {
		accuracy: 95,
		basePower: 55,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Speed by 1.",
		id: "icywind",
		name: "Icy Wind",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Ice",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"imprison": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user prevents all opposing Pokemon from using any moves that the user also knows as long as the user remains active.",
		shortDesc: "No foe can use any move known by the user.",
		id: "imprison",
		name: "Imprison",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'imprison',
		effect: {
			noCopy: true,
			onStart(target) {
				this.add('-start', target, 'move: Imprison');
			},
			onFoeDisableMove(pokemon) {
				for (const moveSlot of this.effectData.source.moveSlots) {
					if (moveSlot.id === 'struggle') continue;
					pokemon.disableMove(moveSlot.id, 'hidden');
				}
				pokemon.maybeDisabled = true;
			},
			onFoeBeforeMovePriority: 4,
			onFoeBeforeMove(attacker, defender, move) {
				if (move.id !== 'struggle' && this.effectData.source.hasMove(move.id) && !move.isZ) {
					this.add('cant', attacker, 'move: Imprison', move);
					return false;
				}
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Psychic",
		zMoveBoost: {spd: 2},
		contestType: "Clever",
	},
	"incinerate": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "The target loses its held item if it is a Berry or a Gem. This move cannot cause Pokemon with the Sticky Hold Ability to lose their held item. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "Destroys the foe(s) Berry/Gem.",
		id: "incinerate",
		name: "Incinerate",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon, source) {
			let item = pokemon.getItem();
			if ((item.isBerry || item.isGem) && pokemon.takeItem(source)) {
				this.add('-enditem', pokemon, item.name, '[from] move: Incinerate');
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		zMovePower: 120,
		contestType: "Tough",
	},
	"infernalblade": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "If this hits a fairy type it will deal Super-Effective damage regardless of the other type. Has 20% chance to bleed",
		shortDesc: "Hit's fairy for super effective regardless of typing. 20% bld chance",
		id: "infernalblade",
		name: "Infernal Blade",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if(type === 'Fairy') return 1;
			if(target.hasType('Fairy')) return 0;
		},
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "normal",
		type: "Fire",
		zMovePower: 175,
		contestType: "Cool",
	},
	"inferno": {
		accuracy: 50,
		basePower: 100,
		category: "Special",
		desc: "Has a 100% chance to burn the target.",
		shortDesc: "100% chance to burn the target.",
		id: "inferno",
		name: "Inferno",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"infernooverdrive": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "infernooverdrive",
		name: "Inferno Overdrive",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "firiumz",
		secondary: null,
		target: "normal",
		type: "Fire",
		contestType: "Cool",
	},
	"infestation": {
		accuracy: 100,
		basePower: 20,
		category: "Special",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "infestation",
		name: "Infestation",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cute",
	},
	"ingrain": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user has 1/16 of its maximum HP restored at the end of each turn, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped and still receive the healing effect. During the effect, the user can be hit normally by Ground-type attacks and be affected by Spikes, Toxic Spikes, and Sticky Web, even if the user is a Flying type or has the Levitate Ability.",
		shortDesc: "Traps/grounds user; heals 1/16 max HP per turn.",
		id: "ingrain",
		name: "Ingrain",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'ingrain',
		effect: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: Ingrain');
			},
			onResidualOrder: 7,
			onResidual(pokemon) {
				this.heal(pokemon.maxhp / 16);
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: Ingrain');
				return null;
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"instruct": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target immediately uses its last used move. Fails if the target has not made a move, if the move has 0 PP, if the target is preparing to use Beak Blast, Focus Punch, or Shell Trap, or if the move is Assist, Beak Blast, Belch, Bide, Celebrate, Copycat, Focus Punch, Ice Ball, Instruct, King's Shield, Me First, Metronome, Mimic, Mirror Move, Nature Power, Outrage, Petal Dance, Rollout, Shell Trap, Sketch, Sleep Talk, Struggle, Thrash, Transform, Uproar, any two-turn move, any recharge move, or any Z-Move.",
		shortDesc: "The target immediately uses its last used move.",
		id: "instruct",
		name: "Instruct",
		pp: 15,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			if (!target.lastMove) return false;
			let lastMove = target.lastMove;
			let moveIndex = target.moves.indexOf(lastMove.id);
			let noInstruct = [
				'assist', 'beakblast', 'bide', 'celebrate', 'copycat', 'focuspunch', 'iceball', 'instruct', 'kingsshield', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'outrage', 'petaldance', 'rollout', 'shelltrap', 'sketch', 'sleeptalk', 'thrash', 'transform',
			];
			if (noInstruct.includes(lastMove.id) || lastMove.isZ || lastMove.flags['charge'] || lastMove.flags['recharge'] || target.volatiles['beakblast'] || target.volatiles['focuspunch'] || target.volatiles['shelltrap'] || (target.moveSlots[moveIndex] && target.moveSlots[moveIndex].pp <= 0)) {
				return false;
			}
			// Instructed Fake Out etc. should fail
			target.activeTurns++;
			this.add('-singleturn', target, 'move: Instruct', '[of] ' + source);
			this.runMove(target.lastMove.id, target, /** @type {number} */(target.lastMoveTargetLoc));
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"iondeluge": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes Normal-type moves to become Electric type this turn. The effect happens after other effects that change a move's type.",
		shortDesc: "Normal moves become Electric type this turn.",
		id: "iondeluge",
		name: "Ion Deluge",
		pp: 25,
		priority: 1,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'iondeluge',
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-fieldactivate', 'move: Ion Deluge');
			},
			onModifyMovePriority: -2,
			onModifyMove(move) {
				if (move.type === 'Normal') {
					move.type = 'Electric';
					this.debug(move.name + "'s type changed to Electric");
				}
			},
		},
		secondary: null,
		target: "all",
		type: "Electric",
		zMoveBoost: {spa: 1},
		contestType: "Beautiful",
	},
	"irondefense": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 2 stages.",
		shortDesc: "Raises the user's Defense by 2.",
		id: "irondefense",
		name: "Iron Defense",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 2,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"ironhead": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "ironhead",
		name: "Iron Head",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Steel",
		zMovePower: 160,
		contestType: "Tough",
	},
	"irontail": {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
		desc: "Has a 30% chance to lower the target's Defense by 1 stage.",
		shortDesc: "30% chance to lower the target's Defense by 1.",
		id: "irontail",
		name: "Iron Tail",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 180,
		contestType: "Cool",
	},
	"jawlock": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Prevents the user and the target from switching out. The user and the target can still switch out if either of them is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if either Pokemon faints.",
		shortDesc: "Prevents the user and the target from switching out.",
		id: "jawlock",
		name: "Jaw Lock",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			source.addVolatile('trapped', target, move, 'trapper');
			target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	"judgment": {
		accuracy: 100,
		basePower: 130,
		category: "Special",
		desc: "This move's type depends on the user's held Plate.",
		shortDesc: "Type varies based on the held Plate.",
		id: "judgment",
		name: "Judgment",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			const item = pokemon.getItem();
			if (item.id && item.onPlate && !item.zMove) {
				move.type = item.onPlate;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"jumpkick": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "If this attack is not successful, the user loses half of its maximum HP, rounded down, as crash damage. Pokemon with the Magic Guard Ability are unaffected by crash damage.",
		shortDesc: "User is hurt by 50% of its max HP if it misses.",
		id: "jumpkick",
		name: "Jump Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, gravity: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		hasCustomRecoil: true,
		onMoveFail(target, source, move) {
			this.damage(source.maxhp / 2, source, source, this.getEffect('Jump Kick'));
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 180,
		contestType: "Cool",
	},
	"karatechop": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "karatechop",
		name: "Karate Chop",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"kinesis": {
		accuracy: 80,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1.",
		id: "kinesis",
		name: "Kinesis",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {evasion: 1},
		contestType: "Clever",
	},
	"kingsshield": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Attack lowered by 2 stages. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from attacks. Contact: lowers Atk by 2.",
		id: "kingsshield",
		name: "King's Shield",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'kingsshield',
		onTryHit(pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.boost({atk: -2}, source, target, this.getActiveMove("King's Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZPowered && move.flags['contact']) {
					this.boost({atk: -2}, source, target, this.getActiveMove("King's Shield"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"knockoff": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "If the target is holding an item that can be removed from it, ignoring the Sticky Hold Ability, this move's power is multiplied by 1.5. If the user has not fainted, the target loses its held item. This move cannot remove Z-Crystals, cause Pokemon with the Sticky Hold Ability to lose their held item, cause Pokemon that can Mega Evolve to lose the Mega Stone for their species, or cause a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally to lose their Blue Orb, Red Orb, Griseous Orb, Plate, Drive, or Memory respectively. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "1.5x damage if foe holds an item. Removes item.",
		id: "knockoff",
		name: "Knock Off",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target, move) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			let item = target.getItem();
			if (!this.singleEvent('TakeItem', item, target.itemData, target, target, move, item)) return;
			if (item.id) {
				currentBoost *=1.5;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		onAfterHit(target, source) {
			if (source.hp) {
				let item = target.takeItem();
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 120,
		contestType: "Clever",
	},
	"landswrath": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "landswrath",
		name: "Land's Wrath",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMovePower: 185,
		contestType: "Beautiful",
	},
	"laserfocus": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the next turn, the user's attacks will be critical hits.",
		shortDesc: "Until the end of the next turn, user's moves crit.",
		id: "laserfocus",
		name: "Laser Focus",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'laserfocus',
		effect: {
			duration: 2,
			onStart(pokemon, source, effect) {
				if (effect && (['imposter', 'psychup', 'transform'].includes(effect.id))) {
					this.add('-start', pokemon, 'move: Laser Focus', '[silent]');
				} else {
					this.add('-start', pokemon, 'move: Laser Focus');
				}
			},
			onRestart(pokemon) {
				this.effectData.duration = 2;
				this.add('-start', pokemon, 'move: Laser Focus');
			},
			onModifyCritRatio(critRatio) {
				return 5;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'move: Laser Focus', '[silent]');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Cool",
	},
	"lastresort": {
		accuracy: 100,
		basePower: 140,
		category: "Physical",
		desc: "This move fails unless the user knows this move and at least one other move, and has used all the other moves it knows at least once each since it became active or Transformed.",
		shortDesc: "Fails unless each known move has been used.",
		id: "lastresort",
		name: "Last Resort",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			if (source.moveSlots.length < 2) return false; // Last Resort fails unless the user knows at least 2 moves
			let hasLastResort = false; // User must actually have Last Resort for it to succeed
			for (const moveSlot of source.moveSlots) {
				if (moveSlot.id === 'lastresort') {
					hasLastResort = true;
					continue;
				}
				if (!moveSlot.used) return false;
			}
			return hasLastResort;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 200,
		contestType: "Cute",
	},
	"lavaplume": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 30% chance to burn the target.",
		shortDesc: "30% chance to burn adjacent Pokemon.",
		id: "lavaplume",
		name: "Lava Plume",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "allAdjacent",
		type: "Fire",
		zMovePower: 160,
		contestType: "Tough",
	},
	"leafage": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "leafage",
		name: "Leafage",
		pp: 40,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 100,
		contestType: "Tough",
	},
	"leafblade": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 20% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. 20% chance to cause bleed.",
		id: "leafblade",
		name: "Leaf Blade",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "normal",
		type: "Grass",
		zMovePower: 175,
		contestType: "Cool",
	},
	"leafstorm": {
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "leafstorm",
		name: "Leaf Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"leaftornado": {
		accuracy: 90,
		basePower: 65,
		category: "Special",
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1.",
		id: "leaftornado",
		name: "Leaf Tornado",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Grass",
		zMovePower: 120,
		contestType: "Cool",
	},
	"leechlife": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "leechlife",
		name: "Leech Life",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 160,
		contestType: "Clever",
	},
	"leechseed": {
		accuracy: 90,
		basePower: 0,
		category: "Status",
		desc: "The Pokemon at the user's position steals 1/8 of the target's maximum HP, rounded down, at the end of each turn. If Big Root is held by the recipient, the HP recovered is 1.3x normal, rounded half down. If the target uses Baton Pass, the replacement will continue being leeched. If the target switches out or uses Rapid Spin successfully, the effect ends. Grass-type Pokemon are immune to this move on use, but not its effect.",
		shortDesc: "1/8 of target's HP is restored to user every turn.",
		id: "leechseed",
		name: "Leech Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'leechseed',
		effect: {
			onStart(target) {
				this.add('-start', target, 'move: Leech Seed');
			},
			onResidualOrder: 8,
			onResidual(pokemon) {
				let target = this.effectData.source.side.active[pokemon.volatiles['leechseed'].sourcePosition];
				if (!target || target.fainted || target.hp <= 0) {
					this.debug('Nothing to leech into');
					return;
				}
				let damage = this.damage(pokemon.maxhp / 8, pokemon, target);
				if (damage) {
					this.heal(damage, target, pokemon);
				}
			},
		},
		onTryHit(target) {
			if (target.hasType('Grass')) {
				this.add('-immune', target);
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"leer": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Defense by 1 stage.",
		shortDesc: "Lowers the foe(s) Defense by 1.",
		id: "leer",
		name: "Leer",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: -1,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Cool",
	},
	"legacyshield": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and this pokemon raises its Defense or Special Defense by 1 stage based on the attack used. Non-damaging moves go through this protection. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from attacks. Raises own Def or SpD by 1.",
		id: "legacyshield",
		name: "Legacy Shield",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'legacyshield',
		onTryHit(pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect'] || move.category === 'Status') {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.category === 'Physical') {
					this.boost({def: 1}, target, target, this.getActiveMove("Legacy Shield"));
				}
				if (move.category === 'Special') {
					this.boost({spd: 1}, target, target, this.getActiveMove("Legacy Shield"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZPowered && move.category === 'Physical') {
					this.boost({def: 1}, target, target, this.getActiveMove("Legacy Shield"));
				}
				if (move.isZPowered && move.category === 'Special') {
					this.boost({spd: 1}, target, target, this.getActiveMove("Legacy Shield"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cool",
	},
	"letssnuggleforever": {
		accuracy: true,
		basePower: 190,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "letssnuggleforever",
		name: "Let's Snuggle Forever",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "mimikiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	"lick": {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		id: "lick",
		name: "Lick",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 100,
		contestType: "Cute",
	},
	"lifedew": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/4 of its maximum HP, rounded half up. If there is an adjacent ally, the user restores 1/4 of both its and its ally's maximum HP, rounded up.",
		shortDesc: "Heals the user (and allies) by 1/4 amount.",
		id: "lifedew",
		isViable: true,
		name: "Life Dew",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			for (const pokemon of source.side.active) {
				this.heal(Math.ceil(pokemon.maxhp / 4), pokemon, source);
			}
		},
		secondary: null,
		target: "allyTeam",
		type: "Water",
	},
	"lightofruin": {
		accuracy: 90,
		basePower: 140,
		category: "Special",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/2 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/2 recoil.",
		id: "lightofruin",
		name: "Light of Ruin",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isUnreleased: true,
		recoil: [1, 2],
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"lightscreen": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members take 0.5x damage from special attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, special damage to allies is halved.",
		id: "lightscreen",
		name: "Light Screen",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'lightscreen',
		effect: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source && source.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target && this.getCategory(move) === 'Special') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Light Screen weaken');
						if (target.side.active.length > 1) return this.chainModify([0xAAC, 0x1000]);
						return this.chainModify(0.5);
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Light Screen');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 1,
			onEnd(side) {
				this.add('-sideend', side, 'move: Light Screen');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMoveBoost: {spd: 1},
		contestType: "Beautiful",
	},
	"lightthatburnsthesky": {
		accuracy: true,
		basePower: 200,
		category: "Special",
		desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
		id: "lightthatburnsthesky",
		name: "Light That Burns the Sky",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		isZ: "ultranecroziumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	"liquidation": {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		id: "liquidation",
		name: "Liquidation",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Water",
		zMovePower: 160,
		contestType: "Cool",
	},
	"livewire": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, paralyzing each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog, or a grounded Electric-type Pokemon switches in. Safeguard prevents the opposing party from being paralyzed on switch-in, but a substitute does not.",
		shortDesc: "Paralyzes grounded foes on switch-in.",
		id: "livewire",
		name: "Livewire",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'livewire',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Livewire');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 1) return false;
				this.add('-sidestart', side, 'move: Livewire');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Electric')) {
					this.add('-sideend', pokemon.side, 'move: Livewire', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('livewire');
				} else {
					pokemon.trySetStatus('par', pokemon.side.foe.active[0]);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Electric",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"lockon": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target.",
		id: "lockon",
		name: "Lock-On",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			if (source.volatiles['lockon']) return false;
		},
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Lock-On', '[of] ' + target);
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onSourceAccuracy(accuracy, target, source, move) {
				if (move && source === this.effectData.target && target === this.effectData.source) return true;
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"lovelykiss": {
		accuracy: 75,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to fall asleep.",
		id: "lovelykiss",
		name: "Lovely Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"lowkick": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let targetWeight = target.getWeight();
			if (targetWeight >= 200) {
				return 120;
			}
			if (targetWeight >= 100) {
				return 100;
			}
			if (targetWeight >= 50) {
				return 80;
			}
			if (targetWeight >= 25) {
				return 60;
			}
			if (targetWeight >= 10) {
				return 40;
			}
			return 20;
		},
		category: "Physical",
		desc: "This move's power is 20 if the target weighs less than 10 kg, 40 if less than 25 kg, 60 if less than 50 kg, 80 if less than 100 kg, 100 if less than 200 kg, and 120 if greater than or equal to 200 kg.",
		shortDesc: "More power the heavier the target.",
		id: "lowkick",
		name: "Low Kick",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Tough",
	},
	"lowsweep": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1.",
		id: "lowsweep",
		name: "Low Sweep",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Clever",
	},
	"luckychant": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members cannot be struck by a critical hit. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, shields user's party from critical hits.",
		id: "luckychant",
		name: "Lucky Chant",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'luckychant',
		effect: {
			duration: 5,
			onStart(side) {
				this.add('-sidestart', side, 'move: Lucky Chant'); // "The Lucky Chant shielded [side.name]'s team from critical hits!"
			},
			onCriticalHit: false,
			onResidualOrder: 21,
			onResidualSubOrder: 5,
			onEnd(side) {
				this.add('-sideend', side, 'move: Lucky Chant'); // "[side.name]'s team's Lucky Chant wore off!"
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMoveBoost: {evasion: 1},
		contestType: "Cute",
	},
	"lunardance": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user faints and the Pokemon brought out to replace it has its HP and PP fully restored along with having any major status condition cured. The new Pokemon is sent out at the end of the turn, and the healing happens before hazards take effect. Fails if the user is the last unfainted Pokemon in its party.",
		shortDesc: "User faints. Replacement is fully healed, with PP.",
		id: "lunardance",
		name: "Lunar Dance",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon, target, move) {
			if (!this.canSwitch(pokemon.side)) {
				delete move.selfdestruct;
				return false;
			}
		},
		selfdestruct: "ifHit",
		sideCondition: 'lunardance',
		effect: {
			duration: 2,
			onStart(side, source) {
				this.debug('Lunar Dance started on ' + side.name);
				this.effectData.positions = [];
				for (const i of side.active.keys()) {
					this.effectData.positions[i] = false;
				}
				this.effectData.positions[source.position] = true;
			},
			onRestart(side, source) {
				this.effectData.positions[source.position] = true;
			},
			onSwitchInPriority: 1,
			onSwitchIn(target) {
				const positions = /**@type {boolean[]} */ (this.effectData.positions);
				if (target.position !== this.effectData.sourcePosition) {
					return;
				}
				if (!target.fainted) {
					target.heal(target.maxhp);
					target.setStatus('');
					for (const moveSlot of target.moveSlots) {
						moveSlot.pp = moveSlot.maxpp;
					}
					this.add('-heal', target, target.getHealth, '[from] move: Lunar Dance');
					positions[target.position] = false;
				}
				if (!positions.some(affected => affected === true)) {
					target.side.removeSideCondition('lunardance');
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		contestType: "Beautiful",
	},
	"lunge": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Attack by 1.",
		id: "lunge",
		name: "Lunge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Bug",
		zMovePower: 160,
		contestType: "Cute",
	},
	"lusterpurge": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "Has a 50% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Sp. Def by 1.",
		id: "lusterpurge",
		name: "Luster Purge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 140,
		contestType: "Clever",
	},
	"machpunch": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "machpunch",
		name: "Mach Punch",
		pp: 30,
		priority: 2,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Cool",
	},
	"magicalleaf": {
		accuracy: true,
		basePower: 60,
		category: "Special",
		shortDesc: "This move does not check accuracy.",
		id: "magicalleaf",
		name: "Magical Leaf",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"magiccoat": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the turn, the user is unaffected by certain non-damaging moves directed at it and will instead use such moves against the original user. Moves reflected in this way are unable to be reflected again by this or the Magic Bounce Ability's effect. Spikes, Stealth Rock, Sticky Web, and Toxic Spikes can only be reflected once per side, by the leftmost Pokemon under this or the Magic Bounce Ability's effect. The Lightning Rod and Storm Drain Abilities redirect their respective moves before this move takes effect.",
		shortDesc: "Bounces back certain non-damaging moves.",
		id: "magiccoat",
		name: "Magic Coat",
		pp: 15,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'magiccoat',
		effect: {
			duration: 1,
			onStart(target, source, effect) {
				this.add('-singleturn', target, 'move: Magic Coat');
				if (effect && effect.effectType === 'Move') {
					this.effectData.pranksterBoosted = effect.pranksterBoosted;
				}
			},
			onTryHitPriority: 2,
			onTryHit(target, source, move) {
				if (target === source || move.hasBounced || !move.flags['reflectable']) {
					return;
				}
				let newMove = this.getActiveMove(move.id);
				newMove.hasBounced = true;
				newMove.pranksterBoosted = this.effectData.pranksterBoosted;
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
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveBoost: {spd: 2},
		contestType: "Beautiful",
	},
	"magicroom": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the held items of all active Pokemon have no effect. An item's effect of causing forme changes is unaffected, but any other effects from such items are negated. During the effect, Fling and Natural Gift are prevented from being used by all active Pokemon. If this move is used during the effect, the effect ends.",
		shortDesc: "For 5 turns, all held items have no effect.",
		id: "magicroom",
		name: "Magic Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'magicroom',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onStart(target, source) {
				this.add('-fieldstart', 'move: Magic Room', '[of] ' + source);
			},
			onRestart(target, source) {
				this.field.removePseudoWeather('magicroom');
			},
			// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
			onResidualOrder: 25,
			onEnd() {
				this.add('-fieldend', 'move: Magic Room', '[of] ' + this.effectData.source);
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"magmadrift": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Damage doubles if the target is using Dive.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dive.",
		id: "magmadrift",
		name: "Magma Drift",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"magmastorm": {
		accuracy: 75,
		basePower: 100,
		category: "Special",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "magmastorm",
		name: "Magma Storm",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 180,
		contestType: "Tough",
	},
	"magnetbomb": {
		accuracy: true,
		basePower: 60,
		category: "Physical",
		shortDesc: "This move does not check accuracy.",
		id: "magnetbomb",
		name: "Magnet Bomb",
		pp: 20,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 120,
		contestType: "Cool",
	},
	"magneticflux": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the Defense and Special Defense of Pokemon on the user's side with the Plus or Minus Abilities by 1 stage.",
		shortDesc: "Raises Def, Sp. Def of allies with Plus/Minus by 1.",
		id: "magneticflux",
		name: "Magnetic Flux",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, distance: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitSide(side, source, move) {
			const targets = [];
			for (const pokemon of side.active) {
				if (pokemon.hasAbility(['plus', 'minus'])) {
					targets.push(pokemon);
				}
			}
			if (!targets.length) return false;
			let didSomething = false;
			for (const target of targets) {
				didSomething = this.boost({def: 1, spd: 1}, target, source, move, false, true) || didSomething;
			}
			return didSomething;
		},
		secondary: null,
		target: "allySide",
		type: "Electric",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"magnetrise": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the user uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the user is under any of their effects. Fails if the user is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows.",
		shortDesc: "For 5 turns, the user has immunity to Ground.",
		id: "magnetrise",
		name: "Magnet Rise",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, gravity: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'magnetrise',
		effect: {
			duration: 5,
			onStart(target) {
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Magnet Rise');
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onResidualOrder: 15,
			onEnd(target) {
				this.add('-end', target, 'Magnet Rise');
			},
		},
		secondary: null,
		target: "self",
		type: "Electric",
		zMoveBoost: {evasion: 1},
		contestType: "Clever",
	},
	"magnitude": {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		desc: "The power of this move varies; 5% chances for 10 and 150 power, 10% chances for 30 and 110 power, 20% chances for 50 and 90 power, and 30% chance for 70 power. Damage doubles if the target is using Dig.",
		shortDesc: "Hits adjacent Pokemon. Power varies; 2x on Dig.",
		id: "magnitude",
		name: "Magnitude",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			let i = this.random(100);
			if (i < 5) {
				move.magnitude = 4;
				move.basePower = 10;
			} else if (i < 15) {
				move.magnitude = 5;
				move.basePower = 30;
			} else if (i < 35) {
				move.magnitude = 6;
				move.basePower = 50;
			} else if (i < 65) {
				move.magnitude = 7;
				move.basePower = 70;
			} else if (i < 85) {
				move.magnitude = 8;
				move.basePower = 90;
			} else if (i < 95) {
				move.magnitude = 9;
				move.basePower = 110;
			} else {
				move.magnitude = 10;
				move.basePower = 150;
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			this.add('-activate', pokemon, 'move: Magnitude', move.magnitude);
		},
		secondary: null,
		target: "allAdjacent",
		type: "Ground",
		zMovePower: 140,
		contestType: "Tough",
	},
	"maliciousmoonsault": {
		accuracy: true,
		basePower: 180,
		category: "Physical",
		desc: "Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "Damage doubles if the target used Minimize.",
		id: "maliciousmoonsault",
		name: "Malicious Moonsault",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "inciniumz",
		secondary: null,
		target: "normal",
		type: "Dark",
		contestType: "Cool",
	},
	"matblock": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and its party members are protected from damaging attacks made by other Pokemon, including allies, during this turn. Fails unless it is the user's first turn on the field, if the user moves last this turn, or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from attacks. First turn out only.",
		id: "matblock",
		name: "Mat Block",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		sideCondition: 'matblock',
		onTryHitSide(side, source) {
			if (source.activeTurns > 1) {
				this.hint("Mat Block only works on your first turn out.");
				return false;
			}
		},
		effect: {
			duration: 1,
			onStart(target, source) {
				this.add('-singleturn', source, 'Mat Block');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				if (move && (move.target === 'self' || move.category === 'Status')) return;
				this.add('-activate', target, 'move: Mat Block', move.name);
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMoveBoost: {def: 1},
		contestType: "Cool",
	},
	"meanlook": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		id: "meanlook",
		name: "Mean Look",
		pp: 5,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Beautiful",
	},
	"meditate": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1.",
		id: "meditate",
		name: "Meditate",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveBoost: {atk: 1},
		contestType: "Beautiful",
	},
	"mefirst": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user uses the move the target chose for use this turn against it, if possible, with its power multiplied by 1.5. The move must be a damaging move other than Beak Blast, Chatter, Counter, Covet, Focus Punch, Me First, Metal Burst, Mirror Coat, Shell Trap, Struggle, Thief, or any Z-Move. Fails if the target moves before the user. Ignores the target's substitute for the purpose of copying the move.",
		shortDesc: "Copies a foe at 1.5x power. User must be faster.",
		id: "mefirst",
		name: "Me First",
		pp: 20,
		priority: 0,
		flags: {protect: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, pokemon) {
			let action = this.willMove(target);
			if (action) {
				let noMeFirst = [
					'beakblast', 'chatter', 'counter', 'covet', 'focuspunch', 'mefirst', 'metalburst', 'mirrorcoat', 'shelltrap', 'struggle', 'thief',
				];
				let move = this.getActiveMove(action.move.id);
				if (!action.zmove && !move.isZ && move.category !== 'Status' && !noMeFirst.includes(move.id)) {
					pokemon.addVolatile('mefirst');
					this.useMove(move, pokemon, target);
					return null;
				}
			}
			return false;
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 4,
			onBasePower(basePower) {
				return this.chainModify(1.5);
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		zMoveBoost: {spe: 2},
		contestType: "Clever",
	},
	"megadrain": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "megadrain",
		name: "Mega Drain",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 120,
		contestType: "Clever",
	},
	"megahorn": {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "megahorn",
		name: "Megahorn",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 190,
		contestType: "Cool",
	},
	"megakick": {
		accuracy: 75,
		basePower: 120,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "megakick",
		name: "Mega Kick",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Cool",
	},
	"megapunch": {
		accuracy: 85,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "megapunch",
		name: "Mega Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Tough",
	},
	"memento": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack and Special Attack by 2 stages. The user faints unless this move misses or there is no target. Fails entirely if this move hits a substitute, but does not fail if the target's stats cannot be changed.",
		shortDesc: "Lowers target's Attack, Sp. Atk by 2. User faints.",
		id: "memento",
		name: "Memento",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -2,
			spa: -2,
		},
		selfdestruct: "ifHit",
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveEffect: 'healreplacement',
		contestType: "Tough",
	},
	"menacingmoonrazemaelstrom": {
		accuracy: true,
		basePower: 200,
		category: "Special",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon.",
		id: "menacingmoonrazemaelstrom",
		name: "Menacing Moonraze Maelstrom",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "lunaliumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	"metalburst": {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['metalburst']) return 0;
			return pokemon.volatiles['metalburst'].damage || 1;
		},
		category: "Physical",
		desc: "Deals damage to the last opposing Pokemon to hit the user with an attack this turn equal to 1.5 times the HP lost by the user from that attack, rounded down. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's attack this turn.",
		shortDesc: "If hit by an attack, returns 1.5x damage.",
		id: "metalburst",
		name: "Metal Burst",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('metalburst');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['metalburst']) return false;
			if (source.volatiles['metalburst'].position === null) return false;
		},
		effect: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onAfterDamage(damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && source.side !== target.side) {
					this.effectData.position = source.position;
					this.effectData.damage = 1.5 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Steel",
		zMovePower: 100,
		contestType: "Cool",
	},
	"metalclaw": {
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		desc: "Has a 10% chance to raise the user's Attack by 1 stage. Has a 10% chance to cause bleeding.",
		shortDesc: "10% chance to raise the user's Attack by 1. 10% chance of bleed.",
		id: "metalclaw",
		name: "Metal Claw",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 10,
				self: {
					boosts: {
						atk: 1,
					},
				},
			}, {
				chance: 10,
				status: 'bld',
			},
		],
		target: "normal",
		type: "Steel",
		zMovePower: 100,
		contestType: "Cool",
	},
	"metalsound": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Special Defense by 2 stages.",
		shortDesc: "Lowers the target's Sp. Def by 2.",
		id: "metalsound",
		name: "Metal Sound",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spd: -2,
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"metalwhip": {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		desc: "Prevents the target from switching. Causes damage to the target equal to 1/16 of its maximum HP (1/12 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target.",
		id: "metalwhip",
		name: "Metal Whip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 100,
		contestType: "Cute",
	},
	"meteorassault": {
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "meteorassault",
		name: "Meteor Assault",
		pp: 5,
		priority: 0,
		flags: {protect: 1, recharge: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	"meteormash": {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		desc: "Has a 20% chance to raise the user's Attack by 1 stage.",
		shortDesc: "20% chance to raise the user's Attack by 1.",
		id: "meteormash",
		name: "Meteor Mash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 175,
		contestType: "Cool",
	},
	"metronome": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "A random move is selected for use, other than After You, Assist, Baneful Bunker, Beak Blast, Belch, Bestow, Celebrate, Chatter, Copycat, Counter, Covet, Crafty Shield, Destiny Bond, Detect, Diamond Storm, Endure, Feint, Fleur Cannon, Focus Punch, Follow Me, Freeze Shock, Helping Hand, Hold Hands, Hyperspace Hole, Ice Burn, Instruct, King's Shield, Light of Ruin, Mat Block, Me First, Metronome, Mimic, Mind Blown, Mirror Coat, Mirror Move, Nature Power, Photon Geyser, Plasma Fists, Protect, Quash, Quick Guard, Rage Powder, Relic Song, Secret Sword, Shell Trap, Sketch, Sleep Talk, Snarl, Snatch, Snore, Spectral Thief, Spiky Shield, Spotlight, Steam Eruption, Struggle, Switcheroo, Techno Blast, Thief, Thousand Arrows, Thousand Waves, Transform, Trick, V-create, or Wide Guard.",
		shortDesc: "Picks a random move.",
		id: "metronome",
		name: "Metronome",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		noMetronome: ['afteryou', 'assist', 'banefulbunker', 'beakblast', 'belch', 'bestow', 'celebrate', 'chatter', 'copycat', 'counter', 'covet', 'craftyshield', 'destinybond', 'detect', 'diamondstorm', 'dragonascent', 'endure', 'feint', 'fleurcannon', 'focuspunch', 'followme', 'freezeshock', 'helpinghand', 'holdhands', 'hyperspacefury', 'hyperspacehole', 'iceburn', 'instruct', 'kingsshield', 'lightofruin', 'matblock', 'mefirst', 'metronome', 'mimic', 'mindblown', 'mirrorcoat', 'mirrormove', 'naturepower', 'originpulse', 'photongeyser', 'plasmafists', 'precipiceblades', 'protect', 'quash', 'quickguard', 'ragepowder', 'relicsong', 'secretsword', 'shelltrap', 'sketch', 'sleeptalk', 'snarl', 'snatch', 'snore', 'spectralthief', 'spikyshield', 'spotlight', 'steameruption', 'struggle', 'switcheroo', 'technoblast', 'thief', 'thousandarrows', 'thousandwaves', 'transform', 'trick', 'vcreate', 'wideguard'],
		onHit(target, source, effect) {
			let moves = [];
			for (let i in exports.BattleMovedex) {
				let move = exports.BattleMovedex[i];
				if (i !== move.id) continue;
				if (move.isZ || move.isNonstandard) continue;
				// @ts-ignore
				if (effect.noMetronome.includes(move.id)) continue;
				if (this.getMove(i).gen > this.gen) continue;
				moves.push(move);
			}
			let randomMove = '';
			if (moves.length) {
				moves.sort((a, b) => a.num - b.num);
				randomMove = this.sample(moves).id;
			}
			if (!randomMove) {
				return false;
			}
			this.useMove(randomMove, target);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		contestType: "Cute",
	},
	"milkdrink": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "milkdrink",
		name: "Milk Drink",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"mimic": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "While the user remains active, this move is replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, if the user already knows the move, or if the move is Chatter, Mimic, Sketch, Struggle, Transform, or any Z-Move.",
		shortDesc: "The last move the target used replaces this one.",
		id: "mimic",
		name: "Mimic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let disallowedMoves = ['chatter', 'mimic', 'sketch', 'struggle', 'transform'];
			if (source.transformed || !target.lastMove || disallowedMoves.includes(target.lastMove.id) || source.moves.indexOf(target.lastMove.id) >= 0 || target.lastMove.isZ) return false;
			let mimicIndex = source.moves.indexOf('mimic');
			if (mimicIndex < 0) return false;
			let move = this.getMove(target.lastMove.id);
			source.moveSlots[mimicIndex] = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
				virtual: true,
			};
			this.add('-start', source, 'Mimic', move.name);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {accuracy: 1},
		contestType: "Cute",
	},
	"mindblown": {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "Whether or not this move is successful and even if it would cause fainting, the user loses 1/2 of its maximum HP, rounded up, unless the user has the Magic Guard Ability. This move is prevented from executing and the user does not lose HP if any active Pokemon has the Damp Ability, or if this move is Fire type and the user is affected by Powder or the weather is Primordial Sea.",
		shortDesc: "User loses 50% max HP. Hits adjacent Pokemon.",
		id: "mindblown",
		name: "Mind Blown",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		mindBlownRecoil: true,
		onAfterMove(pokemon, target, move) {
			if (move.mindBlownRecoil && !move.multihit) {
				this.damage(Math.round(pokemon.maxhp / 2), pokemon, pokemon, this.getEffect('Mind Blown'), true);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Fire",
		zMovePower: 200,
		contestType: "Cool",
	},
	"mindreader": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the next turn, the target cannot avoid the user's moves, even if the target is in the middle of a two-turn move. The effect ends if either the user or the target leaves the field. Fails if this effect is active for the user.",
		shortDesc: "User's next move will not miss the target.",
		id: "mindreader",
		name: "Mind Reader",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			if (source.volatiles['lockon']) return false;
		},
		onHit(target, source) {
			source.addVolatile('lockon', target);
			this.add('-activate', source, 'move: Mind Reader', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"minedeploy": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "This pokemon deploys a mine field that deals 1/6th max hp damage on opponents that switch in.",
		shortDesc: "Mine field deploys that deals 1/6th max hp to foes.",
		id: "minedeploy",
		name: "Mine Deploy",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'minedeploy',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Mine Deploy');
			},
			onSwitchIn(pokemon) {
				this.damage(pokemon.maxhp / 6);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Steel",
		zMoveBoost: {spe: 2},
		contestType: "Cool",
	},
	"minimize": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's evasiveness by 2 stages. Whether or not the user's evasiveness was changed, Body Slam, Dragon Rush, Flying Press, Heat Crash, Heavy Slam, Malicious Moonsault, Steamroller, and Stomp will not check accuracy and have their damage doubled if used against the user while it is active.",
		shortDesc: "Raises the user's evasiveness by 2.",
		id: "minimize",
		name: "Minimize",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'minimize',
		effect: {
			noCopy: true,
			onSourceModifyDamage(damage, source, target, move) {
				if (['stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault'].includes(move.id)) {
					return this.chainModify(2);
				}
			},
			onAccuracy(accuracy, target, source, move) {
				if (['stomp', 'steamroller', 'bodyslam', 'flyingpress', 'dragonrush', 'heatcrash', 'heavyslam', 'maliciousmoonsault'].includes(move.id)) {
					return true;
				}
				return accuracy;
			},
		},
		boosts: {
			evasion: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"miracleeye": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Psychic-type attacks can hit the target if it is a Dark type. Fails if the target is already affected, or affected by Foresight or Odor Sleuth.",
		shortDesc: "Psychic hits Dark. Evasiveness ignored.",
		id: "miracleeye",
		name: "Miracle Eye",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'miracleeye',
		onTryHit(target) {
			if (target.volatiles['foresight']) return false;
		},
		effect: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Miracle Eye');
			},
			onNegateImmunity(pokemon, type) {
				if (pokemon.hasType('Dark') && type === 'Psychic') return false;
			},
			onModifyBoost(boosts) {
				if (boosts.evasion && boosts.evasion > 0) {
					boosts.evasion = 0;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"mirrorcoat": {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['mirrorcoat']) return 0;
			return pokemon.volatiles['mirrorcoat'].damage || 1;
		},
		category: "Special",
		desc: "Deals damage to the last opposing Pokemon to hit the user with a special attack this turn equal to twice the HP lost by the user from that attack. If the user did not lose HP from the attack, this move deals 1 HP of damage instead. If that opposing Pokemon's position is no longer in use and there is another opposing Pokemon on the field, the damage is done to it instead. Only the last hit of a multi-hit attack is counted. Fails if the user was not hit by an opposing Pokemon's special attack this turn.",
		shortDesc: "If hit by special attack, returns double damage.",
		id: "mirrorcoat",
		name: "Mirror Coat",
		pp: 20,
		priority: -5,
		flags: {protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('mirrorcoat');
		},
		onTryHit(target, source, move) {
			if (!source.volatiles['mirrorcoat']) return false;
			if (source.volatiles['mirrorcoat'].position === null) return false;
		},
		effect: {
			duration: 1,
			noCopy: true,
			onStart(target, source, move) {
				this.effectData.position = null;
				this.effectData.damage = 0;
			},
			onRedirectTargetPriority: -1,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				return source.side.foe.active[this.effectData.position];
			},
			onAfterDamage(damage, target, source, effect) {
				if (effect && effect.effectType === 'Move' && source.side !== target.side && this.getCategory(effect) === 'Special') {
					this.effectData.position = source.position;
					this.effectData.damage = 2 * damage;
				}
			},
		},
		secondary: null,
		target: "scripted",
		type: "Psychic",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"mirrormove": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user uses the last move used by the target. The copied move is used against that target, if possible. Fails if the target has not made a move, or if the last move used cannot be copied by this move.",
		shortDesc: "User uses the target's last used move against it.",
		id: "mirrormove",
		name: "Mirror Move",
		pp: 20,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, pokemon) {
			if (!target.lastMove || !target.lastMove.flags['mirror'] || target.lastMove.isZ) {
				return false;
			}
			this.useMove(target.lastMove.id, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Flying",
		zMoveBoost: {atk: 2},
		contestType: "Clever",
	},
	"mirrorshot": {
		accuracy: 85,
		basePower: 65,
		category: "Special",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the target's accuracy by 1.",
		id: "mirrorshot",
		name: "Mirror Shot",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"mist": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members are protected from having their stat stages lowered by other Pokemon. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects user's party from stat drops.",
		id: "mist",
		name: "Mist",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'mist',
		effect: {
			duration: 5,
			onBoost(boost, target, source, effect) {
				if (effect.effectType === 'Move' && effect.infiltrates && target.side !== source.side) return;
				if (source && target !== source) {
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
						this.add('-activate', target, 'move: Mist');
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'Mist');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 3,
			onEnd(side) {
				this.add('-sideend', side, 'Mist');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Ice",
		zMoveEffect: 'heal',
		contestType: "Beautiful",
	},
	"mistball": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "Has a 50% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "50% chance to lower the target's Sp. Atk by 1.",
		id: "mistball",
		name: "Mist Ball",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 140,
		contestType: "Clever",
	},
	"mistyterrain": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the terrain becomes Misty Terrain. During the effect, the power of Dragon-type attacks used against grounded Pokemon is multiplied by 0.5 and grounded Pokemon cannot be inflicted with a major status condition nor confusion. Camouflage transforms the user into a Fairy type, Nature Power becomes Moonblast, and Secret Power has a 30% chance to lower Special Attack by 1 stage. Fails if the current terrain is Misty Terrain.",
		shortDesc: "5 turns. Can't status,-Dragon power vs grounded.",
		id: "mistyterrain",
		name: "Misty Terrain",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		terrain: 'mistyterrain',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (effect && effect.status) {
					this.add('-activate', target, 'move: Misty Terrain');
				}
				return false;
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable()) return;
				if (status.id === 'confusion') {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Misty Terrain');
					return null;
				}
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Dragon' && defender.isGrounded() && !defender.isSemiInvulnerable()) {
					this.debug('misty terrain weaken');
					return this.chainModify(0.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Misty Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Misty Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd(side) {
				this.add('-fieldend', 'Misty Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Fairy",
		zMoveBoost: {spd: 1},
		contestType: "Beautiful",
	},
	"moonblast": {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "Has a 30% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "30% chance to lower the target's Sp. Atk by 1.",
		id: "moonblast",
		name: "Moonblast",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"moongeistbeam": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon.",
		id: "moongeistbeam",
		name: "Moongeist Beam",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 180,
		contestType: "Cool",
	},
	"moonlight": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "moonlight",
		name: "Moonlight",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				factor = 0.667;
			} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				factor = 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Fairy",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"morningsun": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "morningsun",
		name: "Morning Sun",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				factor = 0.667;
			} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				factor = 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"mudbomb": {
		accuracy: 85,
		basePower: 65,
		category: "Special",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the target's accuracy by 1.",
		id: "mudbomb",
		name: "Mud Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		zMovePower: 120,
		contestType: "Cute",
	},
	"mudshot": {
		accuracy: 95,
		basePower: 55,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1.",
		id: "mudshot",
		name: "Mud Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Ground",
		zMovePower: 100,
		contestType: "Tough",
	},
	"mudslap": {
		accuracy: 100,
		basePower: 20,
		category: "Special",
		desc: "Has a 100% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "100% chance to lower the target's accuracy by 1.",
		id: "mudslap",
		name: "Mud-Slap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Ground",
		zMovePower: 100,
		contestType: "Cute",
	},
	"mudsport": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all Electric-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Electric-type attacks have 1/3 power.",
		id: "mudsport",
		name: "Mud Sport",
		pp: 15,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'mudsport',
		effect: {
			duration: 5,
			onStart(side, source) {
				this.add('-fieldstart', 'move: Mud Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Electric') {
					this.debug('mud sport weaken');
					return this.chainModify([0x548, 0x1000]);
				}
			},
			onResidualOrder: 21,
			onEnd() {
				this.add('-fieldend', 'move: Mud Sport');
			},
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMoveBoost: {spd: 1},
		contestType: "Cute",
	},
	"muddywater": {
		accuracy: 85,
		basePower: 90,
		category: "Special",
		desc: "Has a 30% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "30% chance to lower the foe(s) accuracy by 1.",
		id: "muddywater",
		name: "Muddy Water",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.getEffectiveness('Ground', type);
		},
		secondary: {
			chance: 30,
			boosts: {
				accuracy: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Water",
		zMovePower: 175,
		contestType: "Tough",
	},
	"multiattack": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "This move's type depends on the user's held Memory.",
		shortDesc: "Type varies based on the held Memory.",
		id: "multiattack",
		name: "Multi-Attack",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('Memory', pokemon, null, move, 'Normal');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 185,
		contestType: "Tough",
	},
	"mysticalfire": {
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
		id: "mysticalfire",
		name: "Mystical Fire",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fire",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"nastyplot": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Attack by 2 stages.",
		shortDesc: "Raises the user's Sp. Atk by 2.",
		id: "nastyplot",
		name: "Nasty Plot",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spa: 2,
		},
		secondary: null,
		target: "self",
		type: "Dark",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"naturalgift": {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
		desc: "The type and power of this move depend on the user's held Berry, and the Berry is lost. Fails if the user is not holding a Berry, if the user has the Klutz Ability, or if Embargo or Magic Room is in effect for the user.",
		shortDesc: "Power and type depends on the user's Berry.",
		id: "naturalgift",
		name: "Natural Gift",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onPrepareHit(target, pokemon, move) {
			if (pokemon.ignoringItem()) return false;
			let item = pokemon.getItem();
			if (!item.naturalGift) return false;
			move.basePower = item.naturalGift.basePower;
			move.type = item.naturalGift.type;
			pokemon.setItem('');
			pokemon.lastItem = item.id;
			pokemon.usedItemThisTurn = true;
			this.runEvent('AfterUseItem', pokemon, null, null, item);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Clever",
	},
//FIX
	"naturepower": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "This move calls another move for use based on the battle terrain. Tri Attack on the regular Wi-Fi terrain, Thunderbolt during Electric Terrain, Moonblast during Misty Terrain, Energy Ball during Grassy Terrain, and Psychic during Psychic Terrain.",
		shortDesc: "Attack depends on terrain (default Tri Attack).",
		id: "naturepower",
		name: "Nature Power",
		pp: 20,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, pokemon) {
			let move = 'triattack';
			if (this.field.isTerrain('electricterrain')) {
				move = 'thunderbolt';
			} else if (this.field.isTerrain('grassyterrain')) {
				move = 'energyball';
			} else if (this.field.isTerrain('mistyterrain')) {
				move = 'moonblast';
			} else if (this.field.isTerrain('psychicterrain')) {
				move = 'psychic';
			} else if (this.field.isTerrain('hellfire')) {
				move = 'flamethrower';
			}
			this.useMove(move, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Beautiful",
	},
	"naturesmadness": {
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.hp / 2), 1);
		},
		category: "Special",
		desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 1/2 target's current HP.",
		id: "naturesmadness",
		name: "Nature's Madness",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMovePower: 100,
		contestType: "Tough",
	},
	"needlearm": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "needlearm",
		name: "Needle Arm",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Grass",
		zMovePower: 120,
		contestType: "Clever",
	},
	"nervalcut": {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "nervalcut",
		name: "Nerval Cut",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 180,
		contestType: "Tough",
	},
	"neverendingnightmare": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "neverendingnightmare",
		name: "Never-Ending Nightmare",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "ghostiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	"nightdaze": {
		accuracy: 95,
		basePower: 85,
		category: "Special",
		desc: "Has a 40% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "40% chance to lower the target's accuracy by 1.",
		id: "nightdaze",
		name: "Night Daze",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 40,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Cool",
	},
	"nightmare": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to lose 1/4 of its maximum HP, rounded down, at the end of each turn as long as it is asleep. This move does not affect the target unless it is asleep. The effect ends when the target wakes up, even if it falls asleep again in the same turn.",
		shortDesc: "A sleeping target is hurt by 1/4 max HP per turn.",
		id: "nightmare",
		name: "Nightmare",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'nightmare',
		effect: {
			noCopy: true,
			onStart(pokemon) {
				if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) {
					return false;
				}
				this.add('-start', pokemon, 'Nightmare');
			},
			onResidualOrder: 9,
			onResidual(pokemon) {
				this.damage(pokemon.maxhp / 4);
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"nightshade": {
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
		desc: "Deals damage to the target equal to the user's level.",
		shortDesc: "Does damage equal to the user's level.",
		id: "nightshade",
		name: "Night Shade",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 100,
		contestType: "Clever",
	},
	"nightslash": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 20% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. 20% chance to cause bleed.",
		id: "nightslash",
		name: "Night Slash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "normal",
		type: "Dark",
		zMovePower: 140,
		contestType: "Cool",
	},
	"nobleroar": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack and Special Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
		id: "nobleroar",
		name: "Noble Roar",
		pp: 30,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"noretreat": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user raises each of its stats by one stage, but it is prevented from switching out and other Pokemon cannot force the user to switch out. The user can still switch out if it uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the user leaves the field using Baton Pass, the replacement will remain trapped. Can only be used once while on the field.",
		shortDesc: "Raises all stats by 1 (not acc/eva). Traps user.",
		id: "noretreat",
		isViable: true,
		name: "No Retreat",
		pp: 5,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'noretreat',
		effect: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'move: No Retreat');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
			// TODO: Check if No Retreat traps the user like Ingrain
			onDragOut(pokemon) {
				this.add('-activate', pokemon, 'move: No Retreat');
				return null;
			},
		},
		boosts: {
			atk: 1,
			def: 1,
			spa: 1,
			spd: 1,
			spe: 1,
		},
		onTryMove(pokemon, target, move) {
			if (!pokemon.volatiles['noretreat']) return;
			this.add('-fail', pokemon, 'move: No Retreat');
			this.attrLastMove('[still]');
			return null;
		},
		secondary: null,
		target: "self",
		type: "Fighting",
	},
	"nuzzle": {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target.",
		id: "nuzzle",
		name: "Nuzzle",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 100,
		contestType: "Cute",
	},
	"oblivionwing": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "The user recovers 3/4 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 75% of the damage dealt.",
		id: "oblivionwing",
		name: "Oblivion Wing",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, distance: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [3, 4],
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 160,
		contestType: "Cool",
	},
	"obstruct": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from attacks made by other Pokemon during this turn, and Pokemon trying to make contact with the user have their Defense lowered by 2 stages. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Obstruct, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from attacks. Contact: lowers Def by 2.",
		id: "obstruct",
		isViable: true,
		name: "Obstruct",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'obstruct',
		onTryHit(pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ || move.isMax) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZPowered && move.flags['contact']) {
					this.boost({def: -2}, source, target, this.dex.getActiveMove("Obstruct"));
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Dark",
	},
	"oceanicoperetta": {
		accuracy: true,
		basePower: 195,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "oceanicoperetta",
		name: "Oceanic Operetta",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "primariumz",
		secondary: null,
		target: "normal",
		type: "Water",
		contestType: "Cool",
	},
	"octazooka": {
		accuracy: 85,
		basePower: 65,
		category: "Special",
		desc: "Has a 50% chance to lower the target's accuracy by 1 stage.",
		shortDesc: "50% chance to lower the target's accuracy by 1.",
		id: "octazooka",
		name: "Octazooka",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				accuracy: -1,
			},
		},
		target: "normal",
		type: "Water",
		zMovePower: 120,
		contestType: "Tough",
	},
	"odorsleuth": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "As long as the target remains active, its evasiveness stat stage is ignored during accuracy checks against it if it is greater than 0, and Normal- and Fighting-type attacks can hit the target if it is a Ghost type. Fails if the target is already affected, or affected by Foresight or Miracle Eye.",
		shortDesc: "Fighting, Normal hit Ghost. Evasiveness ignored.",
		id: "odorsleuth",
		name: "Odor Sleuth",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'foresight',
		onTryHit(target) {
			if (target.volatiles['miracleeye']) return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Clever",
	},
	"ominouswind": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
		id: "ominouswind",
		name: "Ominous Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"originpulse": {
		accuracy: 85,
		basePower: 110,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "originpulse",
		name: "Origin Pulse",
		pp: 10,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		target: "allAdjacentFoes",
		type: "Water",
		zMovePower: 185,
		contestType: "Beautiful",
	},
	"outrage": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		id: "outrage",
		name: "Outrage",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Dragon",
		zMovePower: 190,
		contestType: "Cool",
	},
	"overdrive": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "No additional effect.",
		id: "overdrive",
		isViable: true,
		name: "Overdrive",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Electric",
	},
	"overheat": {
		accuracy: 90,
		basePower: 130,
		category: "Special",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "overheat",
		name: "Overheat",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 195,
		contestType: "Beautiful",
	},
	"painsplit": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and the target's HP become the average of their current HP, rounded down, but not more than the maximum HP of either one.",
		shortDesc: "Shares HP of user and target equally.",
		id: "painsplit",
		name: "Pain Split",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, pokemon) {
			let averagehp = Math.floor((target.hp + pokemon.hp) / 2) || 1;
			target.sethp(averagehp);
			this.add('-sethp', target, target.getHealth, '[from] move: Pain Split', '[silent]');
			pokemon.sethp(averagehp);
			this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Pain Split');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"paleowave": {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		desc: "Has a 20% chance to lower the target's Attack by 1 stage.",
		shortDesc: "20% chance to lower the target's Attack by 1.",
		id: "paleowave",
		isNonstandard: "CAP",
		name: "Paleo Wave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Rock",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"paraboliccharge": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "paraboliccharge",
		name: "Parabolic Charge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "allAdjacent",
		type: "Electric",
		zMovePower: 120,
		contestType: "Clever",
	},
	"partingshot": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack and Special Attack by 1 stage. If this move is successful, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if the target's Attack and Special Attack stat stages were both unchanged, or if there are no unfainted party members.",
		shortDesc: "Lowers target's Atk, Sp. Atk by 1. User switches.",
		id: "partingshot",
		name: "Parting Shot",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfSwitch: true,
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveEffect: 'healreplacement',
		contestType: "Cool",
	},
	"payback": {
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.willMove(target)) {
				this.debug('Payback NOT boosted');
				return move.basePower;
			}
			this.debug('Payback damage boost');
			return move.basePower * 2;
		},
		category: "Physical",
		desc: "Power doubles if the user moves after the target this turn, including actions taken through Instruct or the Dancer Ability. Switching in does not count as an action.",
		shortDesc: "Power doubles if the user moves after the target.",
		id: "payback",
		name: "Payback",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 100,
		contestType: "Tough",
	},
	"payday": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Scatters coins.",
		id: "payday",
		name: "Pay Day",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit() {
			this.add('-fieldactivate', 'move: Pay Day');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Clever",
	},
	"peck": {
		accuracy: 100,
		basePower: 35,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "peck",
		name: "Peck",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 100,
		contestType: "Cool",
	},
	"perishsong": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Each active Pokemon receives a perish count of 4 if it doesn't already have a perish count. At the end of each turn including the turn used, the perish count of all active Pokemon lowers by 1 and Pokemon faint if the number reaches 0. The perish count is removed from Pokemon that switch out. If a Pokemon uses Baton Pass while it has a perish count, the replacement will gain the perish count and continue to count down.",
		shortDesc: "All active Pokemon will faint in 3 turns.",
		id: "perishsong",
		name: "Perish Song",
		pp: 5,
		priority: 0,
		flags: {sound: 1, distance: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitField(target, source, move) {
			let result = false;
			let message = false;
			for (const pokemon of this.getAllActive()) {
				if (!this.runEvent('Accuracy', pokemon, source, move, true)) {
					this.add('-miss', source, pokemon);
					result = true;
				} else if (this.runEvent('TryHit', pokemon, source, move) === null) {
					result = true;
				} else if (!pokemon.volatiles['perishsong']) {
					pokemon.addVolatile('perishsong');
					this.add('-start', pokemon, 'perish3', '[silent]');
					result = true;
					message = true;
				}
			}
			if (!result) return false;
			if (message) this.add('-fieldactivate', 'move: Perish Song');
		},
		effect: {
			duration: 4,
			onEnd(target) {
				this.add('-start', target, 'perish0');
				target.faint();
			},
			onResidualOrder: 20,
			onResidual(pokemon) {
				let duration = pokemon.volatiles['perishsong'].duration;
				this.add('-start', pokemon, 'perish' + duration);
			},
		},
		secondary: null,
		target: "all",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"permafrost": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, harshly slowing each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become slowed with one layer and frozen with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog, or a grounded Ice-type Pokemon switches in. Safeguard prevents the opposing party from being frozen on switch-in, but a substitute does not.",
		shortDesc: "Slows or freezes grounded foes on switch-in. Max 2 layers.",
		id: "permafrost",
		name: "Permafrost",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'permafrost',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Permafrost');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Permafrost');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Ice')||pokemon.hasType('Fire')) {
					this.add('-sideend', pokemon.side, 'move: Permafrost', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('permafrost');
				} else if (this.effectData.layers >= 2) {
					pokemon.trySetStatus('frz', pokemon.side.foe.active[0]);
				} else {
					this.add('-activate', pokemon, 'move: Permafrost');
					this.boost({spe: -2}, pokemon, pokemon.side.foe.active[0], this.getActiveMove('permafrost'));
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ice",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"petalblizzard": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent Pokemon.",
		id: "petalblizzard",
		name: "Petal Blizzard",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Grass",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"petaldance": {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		id: "petaldance",
		name: "Petal Dance",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Grass",
		zMovePower: 190,
		contestType: "Beautiful",
	},
	"phantomforce": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection.",
		id: "phantomforce",
		name: "Phantom Force",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		breaksProtect: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onTryImmunity(target, source, move) {
				if (move.id === 'helpinghand') {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 175,
		contestType: "Cool",
	},
//CHANGE
	"pherogas": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to become infatuated, making it unable to attack 50% of the time. Fails if both the user and the target are the same gender, if either is genderless, or if the target is already infatuated. The effect ends when either the user or the target is no longer active. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune. Target pokemon gets poisoned",
		shortDesc: "A target of the opposite gender gets infatuated. Target Pokemon gets poisoned.",
		id: "pherogas",
		name: "Phero Gas",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'psn',
		volatileStatus: 'attract',
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				if (!(pokemon.gender === 'M' && source.gender === 'F') && !(pokemon.gender === 'F' && source.gender === 'M')) {
					this.debug('incompatible gender');
					return false;
				}
				if (!this.runEvent('Attract', pokemon, source)) {
					this.debug('Attract event failed');
					return false;
				}

				if (effect.id === 'cutecharm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
			},
			onUpdate(pokemon) {
				if (this.effectData.source && !this.effectData.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
				}
			},
			onBeforeMovePriority: 2,
			onBeforeMove(pokemon, target, move) {
				this.add('-activate', pokemon, 'move: Attract', '[of] ' + this.effectData.source);
				if (this.randomChance(1, 2)) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Attract', '[silent]');
			},
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"photonblade": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		defensiveCategory: "Physical",
		desc: "This move becomes a Special attack if the user's Special Attack is greater than its Attack, including stat stage changes. Has a 15% chance to bleed, a higher critical rate, and hits physical defense",
		shortDesc: "Special if user's Sp. Atk > Atk. 15% bleed chance. Higher crit. Hits def.",
		id: "photonblade",
		name: "Photon Blade",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		critRatio: 1,
		secondary: {
			chance: 15,
			status: 'bld',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 175,
		contestType: "Cool",
	},
	"photongeyser": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "This move becomes a physical attack if the user's Attack is greater than its Special Attack, including stat stage changes. This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Physical if user's Atk > Sp. Atk. Ignores Abilities.",
		id: "photongeyser",
		name: "Photon Geyser",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 180,
		contestType: "Cool",
	},
	"photonkick": {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "Has a 10% chance to paralyze the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to paralyze.",
		id: "photonkick",
		name: "Photon Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 160,
		contestType: "Cool",
	},
	"pinmissile": {
		accuracy: 95,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "pinmissile",
		name: "Pin Missile",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 140,
		contestType: "Cool",
	},
	"plasmafists": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "If this move is successful, causes Normal-type moves to become Electric type this turn.",
		shortDesc: "Normal moves become Electric type this turn.",
		id: "plasmafists",
		name: "Plasma Fists",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'iondeluge',
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 180,
		contestType: "Cool",
	},
	"playnice": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack by 1.",
		id: "playnice",
		name: "Play Nice",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"playrough": {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
		desc: "Has a 10% chance to lower the target's Attack by 1 stage.",
		shortDesc: "10% chance to lower the target's Attack by 1.",
		id: "playrough",
		name: "Play Rough",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Fairy",
		zMovePower: 175,
		contestType: "Cute",
	},
	"pluck": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, it steals the target's held Berry if it is holding one and eats it immediately, gaining its effects even if the user's item is being ignored. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "User steals and eats the target's Berry.",
		id: "pluck",
		name: "Pluck",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let item = target.getItem();
			if (source.hp && item.isBerry && target.takeItem(source)) {
				this.add('-enditem', target, item.name, '[from] stealeat', '[move] Pluck', '[of] ' + source);
				if (this.singleEvent('Eat', item, null, source, null, null)) {
					this.runEvent('EatItem', source, null, null, item);
				}
				if (item.onEat) source.ateBerry = true;
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 120,
		contestType: "Cute",
	},
	"poisonfang": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a 50% chance to badly poison the target.",
		shortDesc: "50% chance to badly poison the target.",
		id: "poisonfang",
		name: "Poison Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			status: 'tox',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 100,
		contestType: "Clever",
	},
	"poisongas": {
		accuracy: 90,
		basePower: 0,
		category: "Status",
		desc: "Poisons the target.",
		shortDesc: "Poisons the foe(s).",
		id: "poisongas",
		name: "Poison Gas",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'psn',
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"poisonjab": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		id: "poisonjab",
		name: "Poison Jab",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 160,
		contestType: "Tough",
	},
	"poisonpowder": {
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Poisons the target.",
		shortDesc: "Poisons the target.",
		id: "poisonpowder",
		name: "Poison Powder",
		pp: 35,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'psn',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"poisonsting": {
		accuracy: 100,
		basePower: 15,
		category: "Physical",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		id: "poisonsting",
		name: "Poison Sting",
		pp: 35,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 100,
		contestType: "Clever",
	},
	"poisontail": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Has a 10% chance to poison the target and a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio. 10% chance to poison.",
		id: "poisontail",
		name: "Poison Tail",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 100,
		contestType: "Clever",
	},
	"pollenpuff": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "If the target is an ally, this move restores 1/2 of its maximum HP, rounded down, instead of dealing damage.",
		shortDesc: "If the target is an ally, heals 50% of its max HP.",
		id: "pollenpuff",
		name: "Pollen Puff",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source, move) {
			if (source.side === target.side) {
				move.basePower = 0;
				move.heal = [1, 2];
			}
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 175,
		contestType: "Cute",
	},
	"pound": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "pound",
		name: "Pound",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"powder": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "If the target uses a Fire-type move this turn, it is prevented from executing and the target loses 1/4 of its maximum HP, rounded half up. This effect does not happen if the Fire-type move is prevented by Primordial Sea.",
		shortDesc: "If using a Fire move, target loses 1/4 max HP.",
		id: "powder",
		name: "Powder",
		pp: 20,
		priority: 1,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'powder',
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Powder');
			},
			onTryMovePriority: -1,
			onTryMove(pokemon, target, move) {
				if (move.type === 'Fire') {
					this.add('-activate', pokemon, 'move: Powder');
					this.damage(this.clampIntRange(Math.round(pokemon.maxhp / 4), 1));
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMoveBoost: {spd: 2},
		contestType: "Clever",
	},
	"powdersnow": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 10% chance to freeze the target.",
		shortDesc: "10% chance to freeze the foe(s).",
		id: "powdersnow",
		name: "Powder Snow",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'frz',
		},
		target: "allAdjacentFoes",
		type: "Ice",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"powergem": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "powergem",
		name: "Power Gem",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"powersplit": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and the target have their Attack and Special Attack stats set to be equal to the average of the user and the target's Attack and Special Attack stats, respectively, rounded down. Stat stage changes are unaffected.",
		shortDesc: "Averages Attack and Sp. Atk stats with target.",
		id: "powersplit",
		name: "Power Split",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let newatk = Math.floor((target.storedStats.atk + source.storedStats.atk) / 2);
			target.storedStats.atk = newatk;
			source.storedStats.atk = newatk;
			let newspa = Math.floor((target.storedStats.spa + source.storedStats.spa) / 2);
			target.storedStats.spa = newspa;
			source.storedStats.spa = newspa;
			this.add('-activate', source, 'move: Power Split', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"powerswap": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its Attack and Special Attack stat stage changes with the target.",
		shortDesc: "Swaps Attack and Sp. Atk stat stages with target.",
		id: "powerswap",
		name: "Power Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let targetBoosts = {};
			let sourceBoosts = {};

			for (const stat of ['atk', 'spa']) {
				// @ts-ignore
				targetBoosts[stat] = target.boosts[stat];
				// @ts-ignore
				sourceBoosts[stat] = source.boosts[stat];
			}

			source.setBoost(targetBoosts);
			target.setBoost(sourceBoosts);

			this.add('-swapboost', source, target, 'atk, spa', '[from] move: Power Swap');
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"powertrick": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its Attack and Defense stats, and stat stage changes remain on their respective stats. This move can be used again to swap the stats back. If the user uses Baton Pass, the replacement will have its Attack and Defense stats swapped if the effect is active. If the user has its stats recalculated by changing forme while its stats are swapped, this effect is ignored but is still active for the purposes of Baton Pass.",
		shortDesc: "Switches user's Attack and Defense stats.",
		id: "powertrick",
		name: "Power Trick",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'powertrick',
		effect: {
			onStart(pokemon) {
				this.add('-start', pokemon, 'Power Trick');
				let newatk = pokemon.storedStats.def;
				let newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onCopy(pokemon) {
				let newatk = pokemon.storedStats.def;
				let newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Power Trick');
				let newatk = pokemon.storedStats.def;
				let newdef = pokemon.storedStats.atk;
				pokemon.storedStats.atk = newatk;
				pokemon.storedStats.def = newdef;
			},
			onRestart(pokemon) {
				pokemon.removeVolatile('Power Trick');
			},
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveBoost: {atk: 1},
		contestType: "Clever",
	},
	"powertrip": {
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return move.basePower + 20 * pokemon.positiveBoosts();
		},
		category: "Physical",
		desc: "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
		shortDesc: " + 20 power for each of the user's stat boosts.",
		id: "powertrip",
		name: "Power Trip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Clever",
	},
	"poweruppunch": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Has a 100% chance to raise the user's Attack by 1 stage.",
		shortDesc: "100% chance to raise the user's Attack by 1.",
		id: "poweruppunch",
		name: "Power-Up Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			self: {
				boosts: {
					atk: 1,
				},
			},
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"powerwhip": {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "powerwhip",
		name: "Power Whip",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 190,
		contestType: "Tough",
	},
	"precipiceblades": {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "No additional effect. Hits adjacent foes.",
		id: "precipiceblades",
		name: "Precipice Blades",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		target: "allAdjacentFoes",
		type: "Ground",
		zMovePower: 190,
		contestType: "Cool",
	},
	"present": {
		accuracy: 90,
		basePower: 0,
		category: "Physical",
		desc: "If this move is successful, it deals damage or heals the target. 40% chance for 40 power, 30% chance for 80 power, 10% chance for 120 power, and 20% chance to heal the target by 1/4 of its maximum HP, rounded down.",
		shortDesc: "40, 80, 120 power, or heals target 1/4 max HP.",
		id: "present",
		name: "Present",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon, target) {
			let rand = this.random(10);
			if (rand < 2) {
				move.heal = [1, 4];
			} else if (rand < 6) {
				move.basePower = 40;
			} else if (rand < 9) {
				move.basePower = 80;
			} else {
				move.basePower = 120;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cute",
	},
	"prismaticlaser": {
		accuracy: 100,
		basePower: 160,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "prismaticlaser",
		name: "Prismatic Laser",
		pp: 10,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 200,
		contestType: "Cool",
	},
	"protect": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Prevents moves from affecting the user this turn.",
		id: "protect",
		name: "Protect",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'protect',
		onPrepareHit(pokemon) {
			return !!this.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"psybeam": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target.",
		id: "psybeam",
		name: "Psybeam",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"psychup": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user copies all of the target's current stat stage changes.",
		shortDesc: "Copies the target's current stat stages.",
		id: "psychup",
		name: "Psych Up",
		pp: 10,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			for (let i in target.boosts) {
				// @ts-ignore
				source.boosts[i] = target.boosts[i];
			}
			const volatilesToCopy = ['focusenergy', 'laserfocus'];
			for (const volatile of volatilesToCopy) {
				if (target.volatiles[volatile]) {
					source.addVolatile(volatile);
				} else {
					source.removeVolatile(volatile);
				}
			}
			this.add('-copyboost', source, target, '[from] move: Psych Up');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Clever",
	},
	"psychic": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "10% chance to lower the target's Sp. Def by 1.",
		id: "psychic",
		name: "Psychic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 175,
		contestType: "Clever",
	},
	"psychicfangs": {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "If this attack does not miss, the effects of Reflect, Light Screen, and Aurora Veil end for the target's side of the field before damage is calculated.",
		shortDesc: "Destroys screens, unless the target is immune.",
		id: "psychicfangs",
		name: "Psychic Fangs",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			// will shatter screens through sub, before you hit
			if (pokemon.runImmunity('Psychic')) {
				pokemon.side.removeSideCondition('reflect');
				pokemon.side.removeSideCondition('lightscreen');
				pokemon.side.removeSideCondition('auroraveil');
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 160,
		contestType: "Clever",
	},
	"psychicterrain": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the terrain becomes Psychic Terrain. During the effect, the power of Psychic-type attacks made by grounded Pokemon is multiplied by 1.5 and grounded Pokemon cannot be hit by moves with priority greater than 0, unless the target is an ally. Camouflage transforms the user into a Psychic type, Nature Power becomes Psychic, and Secret Power has a 30% chance to lower the target's Speed by 1 stage. Fails if the current terrain is Psychic Terrain.",
		shortDesc: "5 turns. Grounded: +Psychic power, priority-safe.",
		id: "psychicterrain",
		name: "Psychic Terrain",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		terrain: 'psychicterrain',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onTryHitPriority: 4,
			onTryHit(target, source, effect) {
				if (!target.isGrounded() || target.isSemiInvulnerable() || target.side === source.side) return;
				if (effect && (effect.priority <= 0.1 || effect.target === 'self')) {
					return;
				}
				this.add('-activate', target, 'move: Psychic Terrain');
				return null;
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Psychic' && attacker.isGrounded() && !attacker.isSemiInvulnerable()) {
					this.debug('psychic terrain boost');
					return this.chainModify(1.5);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Psychic Terrain', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Psychic Terrain');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Psychic Terrain');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"psychoboost": {
		accuracy: 90,
		basePower: 140,
		category: "Special",
		desc: "Lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "psychoboost",
		name: "Psycho Boost",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spa: -2,
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 200,
		contestType: "Clever",
	},
	"psychocut": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 20% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. 20% chance to cause bleed.",
		id: "psychocut",
		name: "Psycho Cut",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 140,
		contestType: "Cool",
	},
	"psychoshift": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "The user's major status condition is transferred to the target, and the user is then cured. Fails if the user has no major status condition or if the target already has one.",
		shortDesc: "Transfers the user's status ailment to the target.",
		id: "psychoshift",
		name: "Psycho Shift",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onPrepareHit(target, source, move) {
			if (!source.status) return false;
			move.status = source.status;
		},
		self: {
			onHit(pokemon) {
				pokemon.cureStatus();
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spa: 2},
		contestType: "Clever",
	},
	"psyshock": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		defensiveCategory: "Physical",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
		id: "psyshock",
		name: "Psyshock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"psystrike": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		defensiveCategory: "Physical",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
		id: "psystrike",
		name: "Psystrike",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 180,
		contestType: "Cool",
	},
	"psywave": {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			return (this.random(50, 151) * pokemon.level) / 100;
		},
		category: "Special",
		desc: "Deals damage to the target equal to (user's level) * (X + 50) / 100, where X is a random number from 0 to 100, rounded down, but not less than 1 HP.",
		shortDesc: "Random damage equal to 0.5x-1.5x user's level.",
		id: "psywave",
		name: "Psywave",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 100,
		contestType: "Clever",
	},
	"pulverizingpancake": {
		accuracy: true,
		basePower: 210,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "pulverizingpancake",
		name: "Pulverizing Pancake",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "snorliumz",
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cool",
	},
	"punishment": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = 60 + 20 * target.positiveBoosts();
			if (power > 200) power = 200;
			return power;
		},
		category: "Physical",
		desc: "Power is equal to 60+(X*20), where X is the target's total stat stage changes that are greater than 0, but not more than 200 power.",
		shortDesc: "60 power +20 for each of the target's stat boosts.",
		id: "punishment",
		name: "Punishment",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Cool",
	},
	"purify": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target is cured if it has a major status condition. If the target was cured, the user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Cures target's status; heals user 1/2 max HP if so.",
		id: "purify",
		name: "Purify",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			if (!target.cureStatus()) return false;
			this.heal(Math.ceil(source.maxhp * 0.5), source);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Beautiful",
	},
	"pursuit": {
		accuracy: 100,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			// You can't get here unless the pursuit succeeds
			if (target.beingCalledBack) {
				this.debug('Pursuit damage boost');
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		desc: "If an opposing Pokemon switches out this turn, this move hits that Pokemon before it leaves the field, even if it was not the original target. If the user moves after an opponent using Parting Shot, U-turn, or Volt Switch, but not Baton Pass, it will hit that opponent before it leaves the field. Power doubles and no accuracy check is done if the user hits an opponent switching out, and the user's turn is over; if an opponent faints from this, the replacement Pokemon does not become active until the end of the turn.",
		shortDesc: "Power doubles if a foe is switching out.",
		id: "pursuit",
		name: "Pursuit",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			for (const side of this.sides) {
				if (side === pokemon.side) continue;
				side.addSideCondition('pursuit', pokemon);
				const data = side.getSideConditionData('pursuit');
				if (!data.sources) {
					data.sources = [];
				}
				data.sources.push(pokemon);
			}
		},
		onModifyMove(move, source, target) {
			if (target && target.beingCalledBack) move.accuracy = true;
		},
		onTryHit(target, pokemon) {
			target.side.removeSideCondition('pursuit');
		},
		effect: {
			duration: 1,
			onBeforeSwitchOut(pokemon) {
				this.debug('Pursuit start');
				let alreadyAdded = false;
				for (const source of this.effectData.sources) {
					if (!this.cancelMove(source) || !source.hp) continue;
					if (!alreadyAdded) {
						this.add('-activate', pokemon, 'move: Pursuit');
						alreadyAdded = true;
					}
					// Run through each action in queue to check if the Pursuit user is supposed to Mega Evolve this turn.
					// If it is, then Mega Evolve before moving.
					if (source.canMegaEvo || source.canUltraBurst) {
						for (const [actionIndex, action] of this.queue.entries()) {
							if (action.pokemon === source && action.choice === 'megaEvo') {
								this.runMegaEvo(source);
								this.queue.splice(actionIndex, 1);
								break;
							}
						}
					}
					this.runMove('pursuit', source, this.getTargetLoc(pokemon, source));
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 100,
		contestType: "Clever",
	},
	"pyroball": {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
		desc: "Has a 10% chance to burn the target.",
		shortDesc: "10% chance to burn the target.",
		id: "pyroball",
		isViable: true,
		name: "Pyro Ball",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1, bullet: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
	},
	"quash": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to take its turn after all other Pokemon this turn, no matter the priority of its selected move. Fails if the target already moved this turn.",
		shortDesc: "Forces the target to move last this turn.",
		id: "quash",
		name: "Quash",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.side.active.length < 2) return false; // fails in singles
			let action = this.willMove(target);
			if (action) {
				action.priority = -7.1;
				this.cancelMove(target);
				for (let i = this.queue.length - 1; i >= 0; i--) {
					if (this.queue[i].choice === 'residual') {
						this.queue.splice(i, 0, action);
						break;
					}
				}
				this.add('-activate', target, 'move: Quash');
			} else {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"quickattack": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "quickattack",
		name: "Quick Attack",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"quickguard": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and its party members are protected from attacks with original or altered priority greater than 0 made by other Pokemon, including allies, during this turn. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from priority attacks this turn.",
		id: "quickguard",
		name: "Quick Guard",
		pp: 15,
		priority: 3,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'quickguard',
		onTryHitSide(side, source) {
			return !!this.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target, source) {
				this.add('-singleturn', source, 'Quick Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Quick Guard blocks moves with positive priority, even those given increased priority by Prankster or Gale Wings.
				// (e.g. it blocks 0 priority moves boosted by Prankster or Gale Wings; Quick Claw/Custap Berry do not count)
				if (move.priority <= 0.1) return;
				if (!move.flags['protect']) {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Quick Guard');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Fighting",
		zMoveBoost: {def: 1},
		contestType: "Cool",
	},
	"quiverdance": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "Raises the user's Sp. Atk, Sp. Def, Speed by 1.",
		id: "quiverdance",
		name: "Quiver Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spa: 1,
			spd: 1,
			spe: 1,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"rage": {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		desc: "Once this move is successfully used, the user's Attack is raised by 1 stage every time it is hit by another Pokemon's attack as long as this move is chosen for use.",
		shortDesc: "Raises the user's Attack by 1 if hit during use.",
		id: "rage",
		name: "Rage",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'rage',
		},
		effect: {
			onStart(pokemon) {
				this.add('-singlemove', pokemon, 'Rage');
			},
			onHit(target, source, move) {
				if (target !== source && move.category !== 'Status') {
					this.boost({atk: 1});
				}
			},
			onBeforeMovePriority: 100,
			onBeforeMove(pokemon) {
				this.debug('removing Rage before attack');
				pokemon.removeVolatile('rage');
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"ragepowder": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the turn, all single-target attacks from the opposing side are redirected to the user. Such attacks are redirected to the user before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "The foes' moves target the user on the turn used.",
		id: "ragepowder",
		name: "Rage Powder",
		pp: 20,
		priority: 2,
		flags: {powder: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'ragepowder',
		onTryHit(target) {
			if (target.side.active.length < 2) return false;
		},
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Rage Powder');
			},
			onFoeRedirectTargetPriority: 1,
			onFoeRedirectTarget(target, source, source2, move) {
				if (!this.effectData.target.isSkyDropped() && source.runStatusImmunity('powder') && this.validTarget(this.effectData.target, source, move.target)) {
					this.debug("Rage Powder redirected target of move");
					return this.effectData.target;
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"raindance": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the weather becomes Rain Dance. The damage of Water-type attacks is multiplied by 1.5 and the damage of Fire-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is Rain Dance.",
		shortDesc: "For 5 turns, heavy rain powers Water moves.",
		id: "raindance",
		name: "Rain Dance",
		pp: 5,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		weather: 'RainDance',
		secondary: null,
		target: "all",
		type: "Water",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"rapidspin": {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, the effects of Leech Seed and binding moves end for the user, and all hazards are removed from the user's side of the field.",
		shortDesc: "Frees user from hazards, binding, Leech Seed.",
		id: "rapidspin",
		name: "Rapid Spin",
		pp: 40,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			onHit(pokemon) {
				if (pokemon.hp && pokemon.removeVolatile('leechseed')) {
					this.add('-end', pokemon, 'Leech Seed', '[from] move: Rapid Spin', '[of] ' + pokemon);
				}
				let sideConditions = ['spikes', 'toxicspikes', 'stealthrock', 'stickyweb'];
				for (const condition of sideConditions) {
					if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
						this.add('-sideend', pokemon.side, this.getEffect(condition).name, '[from] move: Rapid Spin', '[of] ' + pokemon);
					}
				}
				if (pokemon.hp && pokemon.volatiles['partiallytrapped']) {
					pokemon.removeVolatile('partiallytrapped');
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"razorleaf": {
		accuracy: 95,
		basePower: 55,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 10% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. Hits adjacent foes. 10% chance to cause bleed.",
		id: "razorleaf",
		name: "Razor Leaf",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'bld',
		},
		target: "allAdjacentFoes",
		type: "Grass",
		zMovePower: 100,
		contestType: "Cool",
	},
	"razorshell": {
		accuracy: 95,
		basePower: 75,
		category: "Physical",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage. Has a 10% chance to cause bleeding.",
		shortDesc: "50% chance to lower the target's Defense by 1. 10% chance to cause bleed.",
		id: "razorshell",
		name: "Razor Shell",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 50,
				boosts: {
					def: -1,
				},
			}, {
				chance: 10,
				status: 'bld',
			},
		],
		target: "normal",
		type: "Water",
		zMovePower: 140,
		contestType: "Cool",
	},
	"razorwhip": {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance to crit. 30% chance to cause Bleeding.",
		shortDesc: "Has a higher chance to crit. 30% chance to cause Bleeding.",
		id: "razorwhip",
		name: "Razor Whip",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 30,
			status: 'bld',
		},
		target: "normal",
		type: "Steel",
		zMovePower: 140,
		contestType: "Cool",
	},
	"razorwind": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn. Has a 20% chance to cause bleeding.",
		shortDesc: "Charges, then hits foe(s) turn 2. High crit ratio. 20% chance to cause bleed.",
		id: "razorwind",
		name: "Razor Wind",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		critRatio: 2,
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "allAdjacentFoes",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cool",
	},
	"recover": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "recover",
		name: "Recover",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"recycle": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user regains the item it last used. Fails if the user is holding an item, if the user has not held an item, if the item was a popped Air Balloon, if the item was picked up by a Pokemon with the Pickup Ability, or if the item was lost to Bug Bite, Covet, Incinerate, Knock Off, Pluck, or Thief. Items thrown with Fling can be regained.",
		shortDesc: "Restores the item the user last used.",
		id: "recycle",
		name: "Recycle",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			if (pokemon.item || !pokemon.lastItem) return false;
			let item = pokemon.lastItem;
			pokemon.lastItem = '';
			this.add('-item', pokemon, this.getItem(item), '[from] move: Recycle');
			pokemon.setItem(item);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {spe: 2},
		contestType: "Clever",
	},
	"reflect": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members take 0.5x damage from physical attacks, or 0.66x damage if in a Double Battle. Damage is not reduced further with Aurora Veil. Critical hits ignore this effect. It is removed from the user's side if the user or an ally is successfully hit by Brick Break, Psychic Fangs, or Defog. Lasts for 8 turns if the user is holding Light Clay. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, physical damage to allies is halved.",
		id: "reflect",
		name: "Reflect",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'reflect',
		effect: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source && source.hasItem('lightclay')) {
					return 8;
				}
				return 5;
			},
			onAnyModifyDamage(damage, source, target, move) {
				if (target !== source && target.side === this.effectData.target && this.getCategory(move) === 'Physical') {
					if (!target.getMoveHitData(move).crit && !move.infiltrates) {
						this.debug('Reflect weaken');
						if (target.side.active.length > 1) return this.chainModify([0xAAC, 0x1000]);
						return this.chainModify(0.5);
					}
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'Reflect');
			},
			onResidualOrder: 21,
			onEnd(side) {
				this.add('-sideend', side, 'Reflect');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Psychic",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"reflecttype": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes the user's types to become the same as the current types of the target. If the target's current types include typeless and a non-added type, typeless is ignored. If the target's current types include typeless and an added type from Forest's Curse or Trick-or-Treat, typeless is copied as the Normal type instead. Fails if the user is an Arceus or a Silvally, or if the target's current type is typeless alone.",
		shortDesc: "User becomes the same type as the target.",
		id: "reflecttype",
		name: "Reflect Type",
		pp: 15,
		priority: 0,
		flags: {protect: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			if (source.template && (source.template.num === 493 || source.template.num === 773)) return false;
			let newBaseTypes = target.getTypes(true).filter(type => type !== '???');
			if (!newBaseTypes.length) {
				if (target.addedType) {
					newBaseTypes = ['Normal'];
				} else {
					return false;
				}
			}
			this.add('-start', source, 'typechange', '[from] move: Reflect Type', '[of] ' + target);
			source.setType(newBaseTypes);
			source.addedType = target.addedType;
			source.knownType = target.side === source.side && target.knownType;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"refresh": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user cures its burn, poison, or paralysis. Fails if the user is not burned, poisoned, or paralyzed.",
		shortDesc: "User cures its burn, poison, or paralysis.",
		id: "refresh",
		name: "Refresh",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			if (['', 'slp', 'frz'].includes(pokemon.status)) return false;
			pokemon.cureStatus();
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Cute",
	},
	"relicsong": {
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "Has a 10% chance to cause the target to fall asleep. If this move is successful on at least one target and the user is a Meloetta, it changes to Pirouette Forme if it is currently in Aria Forme, or changes to Aria Forme if it is currently in Pirouette Forme. This forme change does not happen if the Meloetta has the Sheer Force Ability. The Pirouette Forme reverts to Aria Forme when Meloetta is not active.",
		shortDesc: "10% chance to sleep foe(s). Meloetta transforms.",
		id: "relicsong",
		name: "Relic Song",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'slp',
		},
		onHit(target, pokemon, move) {
			if (pokemon.baseTemplate.baseSpecies === 'Meloetta' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				pokemon.formeChange(pokemon.template.speciesid === 'meloettapirouette' ? 'Meloetta' : 'Meloetta-Pirouette', this.effect, false, '[msg]');
			}
		},
		target: "allAdjacentFoes",
		type: "Normal",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"rest": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user falls asleep for the next two turns and restores all of its HP, curing itself of any major status condition in the process. Fails if the user has full HP, is already asleep, or if another effect is preventing sleep.",
		shortDesc: "User sleeps 2 turns and restores HP and status.",
		id: "rest",
		name: "Rest",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(pokemon) {
			if (pokemon.hp < pokemon.maxhp && pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) return;
			this.add('-fail', pokemon);
			return null;
		},
		onHit(target, source, move) {
			if (!target.setStatus('slp', source, move)) return false;
			target.statusData.time = 3;
			target.statusData.startTime = 3;
			this.heal(target.maxhp); // Aesthetic only as the healing happens after you fall asleep in-game
		},
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"retaliate": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Power doubles if one of the user's party members fainted last turn.",
		shortDesc: "Power doubles if an ally fainted last turn.",
		id: "retaliate",
		name: "Retaliate",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (pokemon.side.faintedLastTurn) {
				this.debug('Boosted for a faint last turn');
				currentBoost *=2;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cool",
	},
	"return": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
		desc: "Power is equal to the greater of (user's Happiness * 2/5), rounded down, or 1.",
		shortDesc: "Max 102 power at maximum Happiness.",
		id: "return",
		name: "Return",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cute",
	},
	"revelationdance": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "This move's type depends on the user's primary type. If the user's primary type is typeless, this move's type is the user's secondary type if it has one, otherwise the added type from Forest's Curse or Trick-or-Treat. This move is typeless if the user's type is typeless alone.",
		shortDesc: "Type varies based on the user's primary type.",
		id: "revelationdance",
		name: "Revelation Dance",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"revenge": {
		accuracy: 100,
		basePower: 60,
		basePowerCallback(pokemon, target, move) {
			let damagedByTarget = pokemon.attackedBy.some(p =>
				p.source === target && p.damage > 0 && p.thisTurn
			);
			if (damagedByTarget) {
				this.debug('Boosted for getting hit by ' + target);
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the user was hit by the target this turn.",
		shortDesc: "Power doubles if user is damaged by the target.",
		id: "revenge",
		name: "Revenge",
		pp: 10,
		priority: -4,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Tough",
	},
	"reversal": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let ratio = pokemon.hp * 48 / pokemon.maxhp;
			if (ratio < 2) {
				return 200;
			}
			if (ratio < 5) {
				return 150;
			}
			if (ratio < 10) {
				return 100;
			}
			if (ratio < 17) {
				return 80;
			}
			if (ratio < 33) {
				return 40;
			}
			return 20;
		},
		category: "Physical",
		desc: "The power of this move is 20 if X is 33 to 48, 40 if X is 17 to 32, 80 if X is 10 to 16, 100 if X is 5 to 9, 150 if X is 2 to 4, and 200 if X is 0 or 1, where X is equal to (user's current HP * 48 / user's maximum HP), rounded down.",
		shortDesc: "More power the less HP the user has left.",
		id: "reversal",
		name: "Reversal",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Cool",
	},
	"roar": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally.",
		id: "roar",
		name: "Roar",
		pp: 20,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Cool",
	},
	"roaroftime": {
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "roaroftime",
		name: "Roar of Time",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"rockblast": {
		accuracy: 90,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "rockblast",
		name: "Rock Blast",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 140,
		contestType: "Tough",
	},
	"rockclimb": {
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		id: "rockclimb",
		name: "Rock Climb",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 175,
		contestType: "Tough",
	},
	"rockpolish": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Speed by 2 stages.",
		shortDesc: "Raises the user's Speed by 2.",
		id: "rockpolish",
		name: "Rock Polish",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Rock",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"rockslide": {
		accuracy: 90,
		basePower: 75,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the foe(s).",
		id: "rockslide",
		name: "Rock Slide",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Rock",
		zMovePower: 140,
		contestType: "Tough",
	},
	"rocksmash": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1.",
		id: "rocksmash",
		name: "Rock Smash",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"rockthrow": {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "rockthrow",
		name: "Rock Throw",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 100,
		contestType: "Tough",
	},
	"rocktomb": {
		accuracy: 95,
		basePower: 60,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Speed by 1 stage.",
		shortDesc: "100% chance to lower the target's Speed by 1.",
		id: "rocktomb",
		name: "Rock Tomb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spe: -1,
			},
		},
		target: "normal",
		type: "Rock",
		zMovePower: 120,
		contestType: "Clever",
	},
	"rockwrecker": {
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		desc: "If this move is successful, the user must recharge on the following turn and cannot select a move.",
		shortDesc: "User cannot move next turn.",
		id: "rockwrecker",
		name: "Rock Wrecker",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, recharge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'mustrecharge',
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 200,
		contestType: "Tough",
	},
	"roleplay": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user's Ability changes to match the target's Ability. Fails if the user's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or already matches the target, or if the target's Ability is Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, or Zen Mode.",
		shortDesc: "User replaces its Ability with the target's.",
		id: "roleplay",
		name: "Role Play",
		pp: 10,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			let bannedTargetAbilities = ['battlebond', 'comatose', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
			let bannedSourceAbilities = ['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange'];
			if (bannedTargetAbilities.includes(target.ability) || bannedSourceAbilities.includes(source.ability) || target.ability === source.ability) {
				return false;
			}
		},
		onHit(target, source) {
			let oldAbility = source.setAbility(target.ability);
			if (oldAbility) {
				this.add('-ability', source, this.getAbility(source.ability).name, '[from] move: Role Play', '[of] ' + target);
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Cute",
	},
	"rollingkick": {
		accuracy: 85,
		basePower: 60,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "rollingkick",
		name: "Rolling Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Cool",
	},
	"rollout": {
		accuracy: 90,
		basePower: 30,
		basePowerCallback(pokemon, target, move) {
			let bp = move.basePower;
			if (pokemon.volatiles.rollout && pokemon.volatiles.rollout.hitCount) {
				bp *= Math.pow(2, pokemon.volatiles.rollout.hitCount);
			}
			if (pokemon.status !== 'slp') pokemon.addVolatile('rollout');
			if (pokemon.volatiles.defensecurl) {
				bp *= 2;
			}
			this.debug("Rollout bp: " + bp);
			return bp;
		},
		category: "Physical",
		desc: "If this move is successful, the user is locked into this move and cannot make another move until it misses, 5 turns have passed, or the attack cannot be used. Power doubles with each successful hit of this move and doubles again if Defense Curl was used previously by the user. If this move is called by Sleep Talk, the move is used for one turn. If this move hits an active Disguise during the effect, the power multiplier is paused but the turn counter is not, potentially allowing the multiplier to be used on the user's next move after this effect ends.",
		shortDesc: "Power doubles with each hit. Repeats for 5 turns.",
		id: "rollout",
		name: "Rollout",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		effect: {
			duration: 2,
			onLockMove: 'rollout',
			onStart() {
				this.effectData.hitCount = 1;
			},
			onRestart() {
				this.effectData.hitCount++;
				if (this.effectData.hitCount < 5) {
					this.effectData.duration = 2;
				}
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['rollout'];
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 100,
		contestType: "Cute",
	},
	"roost": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up. Until the end of the turn, Flying-type users lose their Flying type and pure Flying-type users become Normal type. Does nothing if the user's HP is full.",
		shortDesc: "Heals 50% HP. Flying-type removed 'til turn ends.",
		id: "roost",
		name: "Roost",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		heal: [1, 2],
		self: {
			volatileStatus: 'roost',
		},
		effect: {
			duration: 1,
			onResidualOrder: 20,
			onStart(target) {
				this.add('-singleturn', target, 'move: Roost');
			},
			onTypePriority: -1,
			onType(types, pokemon) {
				this.effectData.typeWas = types;
				return types.filter(type => type !== 'Flying');
			},
		},
		secondary: null,
		target: "self",
		type: "Flying",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"rototiller": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the Attack and Special Attack of all grounded Grass-type Pokemon on the field by 1 stage.",
		shortDesc: "Raises Atk/Sp. Atk of grounded Grass types by 1.",
		id: "rototiller",
		name: "Rototiller",
		pp: 10,
		priority: 0,
		flags: {distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHitField(target, source) {
			let targets = [];
			let anyAirborne = false;
			for (const pokemon of this.getAllActive()) {
				if (!pokemon.runImmunity('Ground')) {
					this.add('-immune', pokemon);
					anyAirborne = true;
					continue;
				}
				if (pokemon.hasType('Grass')) {
					// This move affects every grounded Grass-type Pokemon in play.
					targets.push(pokemon);
				}
			}
			if (!targets.length && !anyAirborne) return false; // Fails when there are no grounded Grass types or airborne Pokemon
			for (const pokemon of targets) {
				this.boost({atk: 1, spa: 1}, pokemon, source);
			}
		},
		secondary: null,
		target: "all",
		type: "Ground",
		zMoveBoost: {atk: 1},
		contestType: "Tough",
	},
	"round": {
		accuracy: 100,
		basePower: 60,
		basePowerCallback(target, source, move) {
			if (move.sourceEffect === 'round') {
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
		desc: "If there are other active Pokemon that chose this move for use this turn, those Pokemon take their turn immediately after the user, in Speed order, and this move's power is 120 for each other user.",
		shortDesc: "Power doubles if others used Round this turn.",
		id: "round",
		name: "Round",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry() {
			for (const action of this.queue) {
				// @ts-ignore
				if (!action.pokemon || !action.move) continue;
				// @ts-ignore
				if (action.move.id === 'round') {
					// @ts-ignore
					this.prioritizeAction(action);
					return;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"sacredfire": {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "Has a 50% chance to burn the target. Cures bleed from attacker and opponent",
		shortDesc: "50% chance to burn the target. Thaws user. Cures bleed on both.",
		id: "sacredfire",
		name: "Sacred Fire",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			if (target.status === 'bld') target.cureStatus();
			if (source.status === 'bld') source.cureStatus();
		},
		secondary: {
			chance: 50,
			status: 'brn',
		},
		target: "normal",
		type: "Fire",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"sacredsword": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Ignores the target's stat stage changes, including evasiveness.",
		shortDesc: "Ignores the target's stat stage changes.",
		id: "sacredsword",
		name: "Sacred Sword",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreEvasion: true,
		ignoreDefensive: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 175,
		contestType: "Cool",
	},
	"safeguard": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the user and its party members cannot have major status conditions or confusion inflicted on them by other Pokemon. It is removed from the user's side if the user or an ally is successfully hit by Defog. Fails if the effect is already active on the user's side.",
		shortDesc: "For 5 turns, protects user's party from status.",
		id: "safeguard",
		name: "Safeguard",
		pp: 25,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'safeguard',
		effect: {
			duration: 5,
			durationCallback(target, source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && target.side !== source.side) return;
				if (target !== source) {
					this.debug('interrupting setStatus');
					if (effect.id === 'synchronize' || (effect.effectType === 'Move' && !effect.secondaries)) {
						this.add('-activate', target, 'move: Safeguard');
					}
					return null;
				}
			},
			onTryAddVolatile(status, target, source, effect) {
				if (!effect || !source) return;
				if (effect.effectType === 'Move' && effect.infiltrates && target.side !== source.side) return;
				if ((status.id === 'confusion' || status.id === 'yawn') && target !== source) {
					if (effect.effectType === 'Move' && !effect.secondaries) this.add('-activate', target, 'move: Safeguard');
					return null;
				}
			},
			onStart(side) {
				this.add('-sidestart', side, 'Safeguard');
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd(side) {
				this.add('-sideend', side, 'Safeguard');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"sandattack": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1.",
		id: "sandattack",
		name: "Sand Attack",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMoveBoost: {evasion: 1},
		contestType: "Cute",
	},
	"sandburial": {
		accuracy: true,
		basePower: 130,
		category: "Physical",
		desc: "Fails if opponent is not trapped in Sand Coffin. Lowers all opponent stats. Causes bleed. Negates ground immunity.",
		shortDesc: "Fails without Sand Coffin status. Lowers all stats. Causes bleed. Negates ground immunity.",
		id: "sandburial",
		name: "Sand Burial",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target) {
			if (!target.volatiles['sandcoffin']) {
				return false;
			}
		},
		ignoreImmunity: {'Ground': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Flying') return 0;
		},
		secondaries: [
			{
				chance: 100,
				status: 'bld',
			}, {
				chance: 100,
				boosts: {
					atk: -1,
					def: -1,
					spa: -1,
					spd: -1,
					spe: -1,
					evasion: -1,
					accuracy: -1,
				},
			},
		],
		target: "normal",
		type: "Ground",
		zMovePower: 195,
		contestType: "Clever",
	},
	"sandcoffin": {
		accuracy: 95,
		basePower: 50,
		category: "Physical",
		desc: "Prevents the target from switching next turn. A Pokemon can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. Fails if the effect is already active. Has a chance to render the pokemon unable to act. Negates ground immunity.",
		shortDesc: "Prevents the target from switching next turn. Chance to render the pokemon unable to act. Negates ground immunity",
		id: "sandcoffin",
		name: "Sand Coffin",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'sandcoffin',
		effect: {
			duration: 2,
			onStart(target) {
				this.add('-fieldactivate', 'move: Sand Coffin');
			},
			onTrapPokemon(pokemon) {
				pokemon.tryTrap();
			},
		},
		ignoreImmunity: {'Ground': true},
		onEffectiveness(typeMod, target, type) {
			if (type === 'Flying') return 0;
		},
		secondary: {
			chance: 10,
			volatileStatus: 'mustrecharge',
		},
		target: "normal",
		type: "Ground",
		zMovePower: 100,
		contestType: "Clever",
	},
	"sandstorm": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the weather becomes Sandstorm. At the end of each turn except the last, all active Pokemon lose 1/16 of their maximum HP, rounded down, unless they are a Ground, Rock, or Steel type, or have the Magic Guard, Overcoat, Sand Force, Sand Rush, or Sand Veil Abilities. During the effect, the Special Defense of Rock-type Pokemon is multiplied by 1.5 when taking damage from a special attack. Lasts for 8 turns if the user is holding Smooth Rock. Fails if the current weather is Sandstorm.",
		shortDesc: "For 5 turns, a sandstorm rages.",
		id: "sandstorm",
		name: "Sandstorm",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		weather: 'Sandstorm',
		secondary: null,
		target: "all",
		type: "Rock",
		zMoveBoost: {spe: 1},
		contestType: "Tough",
	},
	"sandtomb": {
		accuracy: 85,
		basePower: 35,
		category: "Physical",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "sandtomb",
		name: "Sand Tomb",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 100,
		contestType: "Clever",
   },
   "satellitedefense": {
	  accuracy: true,
	  basePower: 0,
	  category: "Status",
	  desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
	  shortDesc: "Protects from moves. Contact: loses 1/8 max HP.",
	  id: "satellitedefense",
	  name: "Satellite Defense",
	  pp: 10,
	  priority: 4,
	  flags: {},
	  onBasePower(basePower, pokemon, target) {
		 if (pokemon.level > 100) {
			let currentBoost = Math.floor((pokemon.level - 100) / 10);
			currentBoost = currentBoost / 20 + 1;
			return this.chainModify(currentBoost);
		 }
	  },
	  stallingMove: true,
	  volatileStatus: 'satellitedefense',
	  onTryHit(target, source, move) {
		 return !!this.willAct() && this.runEvent('StallMove', target);
	  },
	  onHit(pokemon) {
		 pokemon.addVolatile('stall');
	  },
	  effect: {
		 duration: 1,
		 onStart(target) {
			this.add('-singleturn', target, 'move: Protect');
		 },
		 onTryHitPriority: 3,
		 onTryHit(target, source, move) {
			if (!move.flags['protect']) {
			   if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
			   return;
			}
			this.add('-activate', target, 'move: Protect');
			let lockedmove = source.getVolatile('lockedmove');
			if (lockedmove) {
			   // Outrage counter is reset
			   if (source.volatiles['lockedmove'].duration === 2) {
				  delete source.volatiles['lockedmove'];
			   }
			}
			if (move.flags['contact']) {
			   this.damage(source.maxhp / 6, source, target);
			}
			return this.NOT_FAIL;
		 },
		 onHit(target, source, move) {
			if (move.isZPowered && move.flags['contact']) {
			   this.damage(source.maxhp / 6, source, target);
			}
		 },
	  },
	  secondary: null,
	  target: "self",
	  type: "???",
	  zMoveBoost: { def: 1 },
	  contestType: "Tough",
   },
   "satellitestrike": {
	  accuracy: 100,
	  basePower: 300,
	  category: "Special",
	  desc: "This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn. User must recharge after use",
	  shortDesc: "Charges turn 1. Hits turn 2. Must recharge",
	  id: "satellitestrike",
	  name: "Satellite Strike",
	  pp: 10,
	  priority: 0,
	  flags: { charge: 1, protect: 1, recharge: 1 },
	  onBasePower(basePower, pokemon, target) {
		 let currentBoost = 1;
		 if (pokemon.level > 100) {
			currentBoost = Math.floor((pokemon.level - 100) / 10);
			currentBoost = currentBoost / 20 + 1;
		 }
		 return this.chainModify(currentBoost);
	  },
	  onTryMove(attacker, defender, move) {
		 if (attacker.removeVolatile(move.id)) {
			return;
		 }
		 this.add('-prepare', attacker, move.name, defender);
		 if (attacker.volatiles['hyperscan']) {
			this.attrLastMove('[still]');
			this.addMove('-anim', attacker, move.name, defender);
			return;
		 }
		 if (!this.runEvent('ChargeMove', attacker, defender, move)) {
			return;
		 }
		 attacker.addVolatile('twoturnmove', defender);
		 return null;
	  },
	  self: {
		 volatileStatus: 'mustrecharge',
	  },
	  secondary: null,
	  target: "normal",
	  type: "???",
	  zMovePower: 190,
	  contestType: "Cool",
   },
	"savagespinout": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "savagespinout",
		name: "Savage Spin-Out",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "buginiumz",
		secondary: null,
		target: "normal",
		type: "Bug",
		contestType: "Cool",
	},
	"scald": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target. Thaws target.",
		id: "scald",
		name: "Scald",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		zMovePower: 160,
		contestType: "Tough",
	},
	"scaryface": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the target's Speed by 2.",
		id: "scaryface",
		name: "Scary Face",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Tough",
	},
	"scratch": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "scratch",
		name: "Scratch",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"screech": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Defense by 2 stages.",
		shortDesc: "Lowers the target's Defense by 2.",
		id: "screech",
		name: "Screech",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: -2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Clever",
	},
	"searingshot": {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "Has a 30% chance to burn the target.",
		shortDesc: "30% chance to burn adjacent Pokemon.",
		id: "searingshot",
		name: "Searing Shot",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			onHit(target, source) {
				if (target.status === 'bld') {
					target.cureStatus();
					target.trySetStatus('brn', source);
				} else {
					target.trySetStatus('brn', source);
				}
			},
		},
		target: "allAdjacent",
		type: "Fire",
		zMovePower: 180,
		contestType: "Cool",
	},
	"searingsunrazesmash": {
		accuracy: true,
		basePower: 200,
		category: "Physical",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon.",
		id: "searingsunrazesmash",
		name: "Searing Sunraze Smash",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "solganiumz",
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		contestType: "Cool",
	},
	"secretpower": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a 30% chance to cause a secondary effect on the target based on the battle terrain. Causes paralysis on the regular Wi-Fi terrain, causes paralysis during Electric Terrain, lowers Special Attack by 1 stage during Misty Terrain, causes sleep during Grassy Terrain and lowers Speed by 1 stage during Psychic Terrain.",
		shortDesc: "Effect varies with terrain. (30% paralysis chance)",
		id: "secretpower",
		name: "Secret Power",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.isTerrain('')) return;
			move.secondaries = [];
			if (this.field.isTerrain('electricterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'par',
				});
			} else if (this.field.isTerrain('grassyterrain')) {
				move.secondaries.push({
					chance: 30,
					status: 'slp',
				});
			} else if (this.field.isTerrain('hellfire')) {
				move.secondaries.push({
					chance: 30,
					status: 'brn',
				});
			} else if (this.field.isTerrain('mistyterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spa: -1,
					},
				});
			} else if (this.field.isTerrain('psychicterrain')) {
				move.secondaries.push({
					chance: 30,
					boosts: {
						spe: -1,
					},
				});
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Clever",
	},
	"secretsword": {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		defensiveCategory: "Physical",
		desc: "Deals damage to the target based on its Defense instead of Special Defense.",
		shortDesc: "Damages target based on Defense, not Sp. Def.",
		id: "secretsword",
		name: "Secret Sword",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"seedbomb": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "seedbomb",
		name: "Seed Bomb",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 160,
		contestType: "Tough",
	},
	"seedflare": {
		accuracy: 85,
		basePower: 120,
		category: "Special",
		desc: "Has a 40% chance to lower the target's Special Defense by 2 stages.",
		shortDesc: "40% chance to lower the target's Sp. Def by 2.",
		id: "seedflare",
		name: "Seed Flare",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 40,
			boosts: {
				spd: -2,
			},
		},
		target: "normal",
		type: "Grass",
		zMovePower: 190,
		contestType: "Beautiful",
	},
	"seismictoss": {
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
		desc: "Deals damage to the target equal to the user's level.",
		shortDesc: "Does damage equal to the user's level.",
		id: "seismictoss",
		name: "Seismic Toss",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Tough",
	},
	"selfdestruct": {
		accuracy: 100,
		basePower: 200,
		category: "Physical",
		desc: "The user faints after using this move, even if this move fails for having no target. This move is prevented from executing if any active Pokemon has the Damp Ability.",
		shortDesc: "Hits adjacent Pokemon. The user faints.",
		id: "selfdestruct",
		name: "Self-Destruct",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfdestruct: "always",
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"shadowball": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 20% chance to lower the target's Special Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Sp. Def by 1.",
		id: "shadowball",
		name: "Shadow Ball",
		pp: 15,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			boosts: {
				spd: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 160,
		contestType: "Clever",
	},
	"shadowbone": {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
		desc: "Has a 20% chance to lower the target's Defense by 1 stage.",
		shortDesc: "20% chance to lower the target's Defense by 1.",
		id: "shadowbone",
		name: "Shadow Bone",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 160,
		contestType: "Cool",
	},
	"shadowclaw": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 10% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. 10% chance to cause bleed.",
		id: "shadowclaw",
		name: "Shadow Claw",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 10,
			status: 'bld',
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 140,
		contestType: "Cool",
	},
	"shadowforce": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "If this move is successful, it breaks through the target's Baneful Bunker, Detect, King's Shield, Protect, or Spiky Shield for this turn, allowing other Pokemon to attack the target normally. If the target's side is protected by Crafty Shield, Mat Block, Quick Guard, or Wide Guard, that protection is also broken for this turn and other Pokemon may attack the target's side normally. This attack charges on the first turn and executes on the second. On the first turn, the user avoids all attacks. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Disappears turn 1. Hits turn 2. Breaks protection.",
		id: "shadowforce",
		name: "Shadow Force",
		pp: 5,
		priority: 0,
		flags: {contact: 1, charge: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		breaksProtect: true,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		effect: {
			duration: 2,
			onTryImmunity(target, source, move) {
				if (move.id === 'helpinghand') {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 190,
		contestType: "Cool",
	},
	"shadowpunch": {
		accuracy: true,
		basePower: 60,
		category: "Physical",
		shortDesc: "This move does not check accuracy.",
		id: "shadowpunch",
		name: "Shadow Punch",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 120,
		contestType: "Clever",
	},
	"shadowsneak": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "shadowsneak",
		name: "Shadow Sneak",
		pp: 30,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 100,
		contestType: "Clever",
	},
	"shadowstrike": {
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		desc: "Has a 50% chance to lower the target's Defense by 1 stage.",
		shortDesc: "50% chance to lower the target's Defense by 1.",
		id: "shadowstrike",
		isNonstandard: "CAP",
		name: "Shadow Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 50,
			boosts: {
				def: -1,
			},
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 160,
		contestType: "Clever",
	},
	"sharpen": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 1 stage.",
		shortDesc: "Raises the user's Attack by 1.",
		id: "sharpen",
		name: "Sharpen",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Cute",
	},
	"shatteredpsyche": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "shatteredpsyche",
		name: "Shattered Psyche",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "psychiumz",
		secondary: null,
		target: "normal",
		type: "Psychic",
		contestType: "Cool",
	},
	"sheercold": {
		accuracy: 30,
		basePower: 0,
		category: "Special",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + X)%, where X is 30 if the user is an Ice type and 20 otherwise, and fails if the target is at a higher level. Ice-type Pokemon and Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs non-Ice targets. Fails if user's lower level.",
		id: "sheercold",
		name: "Sheer Cold",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		ohko: 'Ice',
		target: "normal",
		type: "Ice",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"shellsmash": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers the user's Defense and Special Defense by 1 stage. Raises the user's Attack, Special Attack, and Speed by 2 stages.",
		shortDesc: "Lowers Def, SpD by 1; raises Atk, SpA, Spe by 2.",
		id: "shellsmash",
		name: "Shell Smash",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: -1,
			spd: -1,
			atk: 2,
			spa: 2,
			spe: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"shelltrap": {
		accuracy: 100,
		basePower: 150,
		category: "Special",
		desc: "Fails unless the user is hit by a physical attack from an opponent this turn before it can execute the move. If the user was hit and has not fainted, it attacks immediately after being hit, and the effect ends. If the opponent's physical attack had a secondary effect removed by the Sheer Force Ability, it does not count for the purposes of this effect.",
		shortDesc: "User must take physical damage before moving.",
		id: "shelltrap",
		name: "Shell Trap",
		pp: 5,
		priority: -3,
		flags: {protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		beforeTurnCallback(pokemon) {
			pokemon.addVolatile('shelltrap');
		},
		// TODO: In order to correct PP usage, after spread move order has been reworked,
		// switch this to `onTry` + add `this.attrLastMove('[still]');`.
		beforeMoveCallback(pokemon) {
			if (!pokemon.volatiles['shelltrap'] || !pokemon.volatiles['shelltrap'].gotHit) {
				this.add('cant', pokemon, 'Shell Trap', 'Shell Trap');
				return true;
			}
		},
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Shell Trap');
			},
			onHit(pokemon, source, move) {
				if (pokemon.side !== source.side && move.category === 'Physical') {
					pokemon.volatiles['shelltrap'].gotHit = true;
				}
			},
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Fire",
		zMovePower: 200,
		contestType: "Tough",
	},
	"shiftgear": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Speed by 2 stages and its Attack by 1 stage.",
		shortDesc: "Raises the user's Speed by 2 and Attack by 1.",
		id: "shiftgear",
		name: "Shift Gear",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spe: 2,
			atk: 1,
		},
		secondary: null,
		target: "self",
		type: "Steel",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
	"shiveringconduct": {
		accuracy: 95,
		basePower: 80,
		category: "Special",
		desc: "Has a 10% chance to burn the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to burn. 10% chance to flinch.",
		id: "shiveringconduct",
		name: "Shivering Conduct",
		pp: 15,
		priority: 0,
		flags: {sound: 1, protect: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 10,
				status: 'slp',
			}, {
				chance: 10,
				status: 'frz',
			},
		],
		target: "normal",
		type: "Ice",
		zMovePower: 160,
		contestType: "Cool",
	},
	"shockwave": {
		accuracy: true,
		basePower: 60,
		category: "Special",
		shortDesc: "This move does not check accuracy.",
		id: "shockwave",
		name: "Shock Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 120,
		contestType: "Cool",
	},
	"shoreup": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half down. If the weather is Sandstorm, the user instead restores 2/3 of its maximum HP, rounded half down.",
		shortDesc: "User restores 1/2 its max HP; 2/3 in Sandstorm.",
		id: "shoreup",
		name: "Shore Up",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather('sandstorm')) {
				factor = 0.667;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Ground",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"signalbeam": {
		accuracy: 100,
		basePower: 75,
		category: "Special",
		desc: "Has a 10% chance to confuse the target.",
		shortDesc: "10% chance to confuse the target.",
		id: "signalbeam",
		name: "Signal Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			volatileStatus: 'confusion',
		},
		target: "normal",
		type: "Bug",
		zMovePower: 140,
		contestType: "Beautiful",
	},
	"silverwind": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Has a 10% chance to raise the user's Attack, Defense, Special Attack, Special Defense, and Speed by 1 stage.",
		shortDesc: "10% chance to raise all stats by 1 (not acc/eva).",
		id: "silverwind",
		name: "Silver Wind",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					atk: 1,
					def: 1,
					spa: 1,
					spd: 1,
					spe: 1,
				},
			},
		},
		target: "normal",
		type: "Bug",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"simplebeam": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's Ability to become Simple. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Simple, Stance Change, Truant, or Zen Mode.",
		shortDesc: "The target's Ability becomes Simple.",
		id: "simplebeam",
		name: "Simple Beam",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'simple', 'stancechange', 'truant', 'zenmode'];
			if (bannedAbilities.includes(pokemon.ability)) {
				return false;
			}
		},
		onHit(pokemon) {
			let oldAbility = pokemon.setAbility('simple');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Simple', '[from] move: Simple Beam');
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spa: 1},
		contestType: "Cute",
	},
	"sing": {
		accuracy: 55,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to fall asleep.",
		id: "sing",
		name: "Sing",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Cute",
	},
	"sinisterarrowraid": {
		accuracy: true,
		basePower: 180,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "sinisterarrowraid",
		name: "Sinister Arrow Raid",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "decidiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	"sketch": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "This move is permanently replaced by the last move used by the target. The copied move has the maximum PP for that move. Fails if the target has not made a move, if the user has Transformed, or if the move is Chatter, Sketch, Struggle, or any move the user knows.",
		shortDesc: "Permanently copies the last move target used.",
		id: "sketch",
		name: "Sketch",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			let disallowedMoves = ['chatter', 'sketch', 'struggle'];
			if (source.transformed || !target.lastMove || disallowedMoves.includes(target.lastMove.id) || source.moves.indexOf(target.lastMove.id) >= 0 || target.lastMove.isZ) return false;
			let sketchIndex = source.moves.indexOf('sketch');
			if (sketchIndex < 0) return false;
			let move = this.getMove(target.lastMove);
			let sketchedMove = {
				move: move.name,
				id: move.id,
				pp: move.pp,
				maxpp: move.pp,
				target: move.target,
				disabled: false,
				used: false,
			};
			source.moveSlots[sketchIndex] = sketchedMove;
			source.baseMoveSlots[sketchIndex] = sketchedMove;
			this.add('-activate', source, 'move: Sketch', move.name);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Clever",
	},
	"skillswap": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its Ability with the target's Ability. Fails if either the user or the target's Ability is Battle Bond, Comatose, Disguise, Illusion, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Wonder Guard, or Zen Mode.",
		shortDesc: "The user and the target trade Abilities.",
		id: "skillswap",
		name: "Skill Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'illusion', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'wonderguard', 'zenmode'];
			if (bannedAbilities.includes(target.ability) || bannedAbilities.includes(source.ability)) {
				return false;
			}
		},
		onHit(target, source, move) {
			let targetAbility = this.getAbility(target.ability);
			let sourceAbility = this.getAbility(source.ability);
			if (target.side === source.side) {
				this.add('-activate', source, 'move: Skill Swap', '', '', '[of] ' + target);
			} else {
				this.add('-activate', source, 'move: Skill Swap', targetAbility, sourceAbility, '[of] ' + target);
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
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"skullbash": {
		accuracy: 100,
		basePower: 130,
		category: "Physical",
		desc: "This attack charges on the first turn and executes on the second. Raises the user's Defense by 1 stage on the first turn. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Raises user's Defense by 1 on turn 1. Hits turn 2.",
		id: "skullbash",
		name: "Skull Bash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			this.boost({def: 1}, attacker, attacker, move);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 195,
		contestType: "Tough",
	},
	"skyattack": {
		accuracy: 90,
		basePower: 140,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target and a higher chance for a critical hit. This attack charges on the first turn and executes on the second. If the user is holding a Power Herb, the move completes in one turn.",
		shortDesc: "Charges, then hits turn 2. 30% flinch. High crit.",
		id: "skyattack",
		name: "Sky Attack",
		pp: 5,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "any",
		type: "Flying",
		zMovePower: 200,
		contestType: "Cool",
	},
	"skydrop": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "This attack takes the target into the air with the user on the first turn and executes on the second. Pokemon weighing 200 kg or more cannot be lifted. On the first turn, the user and the target avoid all attacks other than Gust, Hurricane, Sky Uppercut, Smack Down, Thousand Arrows, Thunder, and Twister. The user and the target cannot make a move between turns, but the target can select a move to use. This move cannot damage Flying-type Pokemon. Fails on the first turn if the target is an ally, if the target has a substitute, or if the target is using Bounce, Dig, Dive, Fly, Phantom Force, Shadow Force, or Sky Drop.",
		shortDesc: "User and foe fly up turn 1. Damages on turn 2.",
		id: "skydrop",
		name: "Sky Drop",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, gravity: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, source) {
			if (!source.volatiles['skydrop']) {
				move.accuracy = true;
				move.flags.contact = 0;
			}
		},
		onMoveFail(target, source) {
			if (source.volatiles['twoturnmove'] && source.volatiles['twoturnmove'].duration === 1) {
				source.removeVolatile('skydrop');
				source.removeVolatile('twoturnmove');
				this.add('-end', target, 'Sky Drop', '[interrupt]');
			}
		},
		onTryHit(target, source, move) {
			if (target.fainted) return false;
			if (source.removeVolatile(move.id)) {
				if (target !== source.volatiles['twoturnmove'].source) return false;

				if (target.hasType('Flying')) {
					this.add('-immune', target);
					return null;
				}
			} else {
				if (target.volatiles['substitute'] || target.side === source.side) {
					return false;
				}
				if (target.getWeight() >= 200) {
					this.add('-fail', target, 'move: Sky Drop', '[heavy]');
					return null;
				}

				this.add('-prepare', source, move.name, target);
				source.addVolatile('twoturnmove', target);
				return null;
			}
		},
		onHit(target, source) {
			this.add('-end', target, 'Sky Drop');
		},
		effect: {
			duration: 2,
			onAnyDragOut(pokemon) {
				if (pokemon === this.effectData.target || pokemon === this.effectData.source) return false;
			},
			onFoeTrapPokemonPriority: -15,
			onFoeTrapPokemon(defender) {
				if (defender !== this.effectData.source) return;
				defender.trapped = true;
			},
			onFoeBeforeMovePriority: 12,
			onFoeBeforeMove(attacker, defender, move) {
				if (attacker === this.effectData.source) {
					this.effectData.source.activeTurns--;
					this.debug('Sky drop nullifying.');
					return null;
				}
			},
			onRedirectTargetPriority: 99,
			onRedirectTarget(target, source, source2) {
				if (source !== this.effectData.target) return;
				if (this.effectData.source.fainted) return;
				return this.effectData.source;
			},
			onAnyTryImmunity(target, source, move) {
				if (target !== this.effectData.target && target !== this.effectData.source) {
					return;
				}
				if (source === this.effectData.target && target === this.effectData.source) {
					return;
				}
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'helpinghand'].includes(move.id)) {
					return;
				}
				if (source.hasAbility('noguard') || target.hasAbility('noguard')) {
					return;
				}
				if (source.volatiles['lockon'] && target === source.volatiles['lockon'].source) return;
				if (move.id === 'toxic' && source.hasType('Poison')) return;
				return false;
			},
			onAnyBasePower(basePower, target, source, move) {
				if (target !== this.effectData.target && target !== this.effectData.source) {
					return;
				}
				if (source === this.effectData.target && target === this.effectData.source) {
					return;
				}
				if (move.id === 'gust' || move.id === 'twister') {
					return this.chainModify(2);
				}
			},
			onFaint(target) {
				if (target.volatiles['skydrop'] && target.volatiles['twoturnmove'].source) {
					this.add('-end', target.volatiles['twoturnmove'].source, 'Sky Drop', '[interrupt]');
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 120,
		contestType: "Tough",
	},
	"skyuppercut": {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
		desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "Can hit Pokemon using Bounce, Fly, or Sky Drop.",
		id: "skyuppercut",
		name: "Sky Uppercut",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Cool",
	},
	"slam": {
		accuracy: 75,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "slam",
		name: "Slam",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Tough",
	},
	"slash": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance for a critical hit. Has a 30% chance to cause bleeding.",
		shortDesc: "High critical hit ratio. 30% chance to cause bleed.",
		id: "slash",
		name: "Slash",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 30,
			status: 'bld',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cool",
	},
	"sleeppowder": {
		accuracy: 75,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to fall asleep.",
		id: "sleeppowder",
		name: "Sleep Powder",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"sleeptalk": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "One of the user's known moves, besides this move, is selected for use at random. Fails if the user is not asleep. The selected move does not have PP deducted from it, and can currently have 0 PP. This move cannot select Assist, Beak Blast, Belch, Bide, Celebrate, Chatter, Copycat, Focus Punch, Hold Hands, Me First, Metronome, Mimic, Mirror Move, Nature Power, Shell Trap, Sketch, Sleep Talk, Struggle, Uproar, any two-turn move, or any Z-Move.",
		shortDesc: "User must be asleep. Uses another known move.",
		id: "sleeptalk",
		name: "Sleep Talk",
		pp: 10,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sleepUsable: true,
		onTryHit(pokemon) {
			if (pokemon.status !== 'slp' && !pokemon.hasAbility('comatose')) return false;
		},
		onHit(pokemon) {
			let moves = [];
			for (const moveSlot of pokemon.moveSlots) {
				const move = moveSlot.id;
				const noSleepTalk = [
					'assist', 'beakblast', 'belch', 'bide', 'celebrate', 'chatter', 'copycat', 'focuspunch', 'mefirst', 'metronome', 'mimic', 'mirrormove', 'naturepower', 'shelltrap', 'sketch', 'sleeptalk', 'uproar',
				];
				if (move && !(noSleepTalk.includes(move) || this.getMove(move).flags['charge'] || (this.getMove(move).isZ && this.getMove(move).basePower !== 1))) {
					moves.push(move);
				}
			}
			let randomMove = '';
			if (moves.length) randomMove = this.sample(moves);
			if (!randomMove) {
				return false;
			}
			this.useMove(randomMove, pokemon);
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'crit2',
		contestType: "Cute",
	},
	"sludge": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		id: "sludge",
		name: "Sludge",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 120,
		contestType: "Tough",
	},
	"sludgebomb": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 30% chance to poison the target.",
		shortDesc: "30% chance to poison the target.",
		id: "sludgebomb",
		name: "Sludge Bomb",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 175,
		contestType: "Tough",
	},
	"sludgewave": {
		accuracy: 100,
		basePower: 95,
		category: "Special",
		desc: "Has a 10% chance to poison the target.",
		shortDesc: "10% chance to poison adjacent Pokemon.",
		id: "sludgewave",
		name: "Sludge Wave",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'psn',
		},
		target: "allAdjacent",
		type: "Poison",
		zMovePower: 175,
		contestType: "Tough",
	},
	"smackdown": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
		shortDesc: "Removes the target's Ground immunity.",
		id: "smackdown",
		name: "Smack Down",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'smackdown',
		effect: {
			noCopy: true,
			onStart(pokemon) {
				let applies = false;
				if (pokemon.hasType('Flying') || pokemon.hasAbility('levitate')) applies = true;
				if (pokemon.hasItem('ironball') || pokemon.volatiles['ingrain'] || this.field.getPseudoWeather('gravity')) applies = false;
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					applies = true;
					this.cancelMove(pokemon);
					pokemon.removeVolatile('twoturnmove');
				}
				if (pokemon.volatiles['magnetrise']) {
					applies = true;
					delete pokemon.volatiles['magnetrise'];
				}
				if (pokemon.volatiles['telekinesis']) {
					applies = true;
					delete pokemon.volatiles['telekinesis'];
				}
				if (!applies) return false;
				this.add('-start', pokemon, 'Smack Down');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.cancelMove(pokemon);
					this.add('-start', pokemon, 'Smack Down');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 100,
		contestType: "Tough",
	},
	"smartstrike": {
		accuracy: true,
		basePower: 70,
		category: "Physical",
		shortDesc: "This move does not check accuracy.",
		id: "smartstrike",
		name: "Smart Strike",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 140,
		contestType: "Cool",
	},
	"smellingsalts": {
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'par') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the target is paralyzed. If the user has not fainted, the target is cured of paralysis.",
		shortDesc: "Power doubles if target is paralyzed, and cures it.",
		id: "smellingsalts",
		name: "Smelling Salts",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.status === 'par') target.cureStatus();
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Tough",
	},
	"smog": {
		accuracy: 70,
		basePower: 30,
		category: "Special",
		desc: "Has a 40% chance to poison the target.",
		shortDesc: "40% chance to poison the target.",
		id: "smog",
		name: "Smog",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 40,
			status: 'psn',
		},
		target: "normal",
		type: "Poison",
		zMovePower: 100,
		contestType: "Tough",
	},
	"smokescreen": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's accuracy by 1 stage.",
		shortDesc: "Lowers the target's accuracy by 1.",
		id: "smokescreen",
		name: "Smokescreen",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			accuracy: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {evasion: 1},
		contestType: "Clever",
	},
	"snarl": {
		accuracy: 95,
		basePower: 55,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Sp. Atk by 1.",
		id: "snarl",
		name: "Snarl",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Dark",
		zMovePower: 100,
		contestType: "Tough",
	},
	"snatch": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "If another Pokemon uses certain non-damaging moves this turn, the user steals that move to use itself. If multiple Pokemon use one of those moves this turn, the applicable moves are all stolen by the first Pokemon in turn order that used this move this turn. This effect is ignored while the user is under the effect of Sky Drop.",
		shortDesc: "User steals certain support moves to use itself.",
		id: "snatch",
		name: "Snatch",
		pp: 10,
		priority: 4,
		flags: {authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'snatch',
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'Snatch');
			},
			onAnyTryMove(source, target, move) {
				let snatchUser = this.effectData.source;
				if (snatchUser.isSkyDropped()) return;
				if (move && !move.isZ && move.flags['snatch'] && move.sourceEffect !== 'snatch') {
					snatchUser.removeVolatile('snatch');
					this.add('-activate', snatchUser, 'move: Snatch', '[of] ' + source);
					this.useMove(move.id, snatchUser);
					return null;
				}
			},
		},
		secondary: null,
		pressureTarget: "foeSide",
		target: "self",
		type: "Dark",
		zMoveBoost: {spe: 2},
		contestType: "Clever",
	},
	"snipeshot": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "snipeshot",
		name: "Snipe Shot",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Water",
	},
	"snore": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "Has a 30% chance to flinch the target. Fails if the user is not asleep.",
		shortDesc: "User must be asleep. 30% chance to flinch target.",
		id: "snore",
		name: "Snore",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sleepUsable: true,
		onTryHit(target, source) {
			if (source.status !== 'slp' && !source.hasAbility('comatose')) return false;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cute",
	},
	"soak": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to become a Water type. Fails if the target is an Arceus or a Silvally, or if the target is already purely Water type.",
		shortDesc: "Changes the target's type to Water.",
		id: "soak",
		name: "Soak",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.getTypes().join() === 'Water' || !target.setType('Water')) {
				// Soak should animate even when it fails.
				// Returning false would suppress the animation.
				this.add('-fail', target);
				return null;
			}
			this.add('-start', target, 'typechange', 'Water');
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMoveBoost: {spa: 1},
		contestType: "Cute",
	},
	"softboiled": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP, rounded half up.",
		shortDesc: "Heals the user by 50% of its max HP.",
		id: "softboiled",
		name: "Soft-Boiled",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		heal: [1, 2],
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
   },
	"solarbeam": {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight.",
		id: "solarbeam",
		name: "Solar Beam",
		pp: 10,
		priority: 0,
		flags: {charge: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				this.debug('weakened by weather');
				currentBoost *= 0.5;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 190,
		contestType: "Cool",
	},
	"solarblade": {
		accuracy: 100,
		basePower: 125,
		category: "Physical",
		desc: "This attack charges on the first turn and executes on the second. Power is halved if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm. If the user is holding a Power Herb or the weather is Desolate Land or Sunny Day, the move completes in one turn.",
		shortDesc: "Charges turn 1. Hits turn 2. No charge in sunlight.",
		id: "solarblade",
		name: "Solar Blade",
		pp: 10,
		priority: 0,
		flags: {contact: 1, charge: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				this.debug('weakened by weather');
				currentBoost *=0.5;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		onTryMove(attacker, defender, move) {
			if (attacker.removeVolatile(move.id)) {
				return;
			}
			this.add('-prepare', attacker, move.name, defender);
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				this.attrLastMove('[still]');
				this.addMove('-anim', attacker, move.name, defender);
				return;
			}
			if (!this.runEvent('ChargeMove', attacker, defender, move)) {
				return;
			}
			attacker.addVolatile('twoturnmove', defender);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 190,
		contestType: "Cool",
	},
	"sonicboom": {
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Special",
		desc: "Deals 20 HP of damage to the target.",
		shortDesc: "Always does 20 HP of damage.",
		id: "sonicboom",
		name: "Sonic Boom",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"soulstealing7starstrike": {
		accuracy: true,
		basePower: 195,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "soulstealing7starstrike",
		name: "Soul-Stealing 7-Star Strike",
		pp: 1,
		priority: 0,
		flags: {contact: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "marshadiumz",
		secondary: null,
		target: "normal",
		type: "Ghost",
		contestType: "Cool",
	},
	"soulwrecker": {
		accuracy: 30,
		basePower: 0,
		category: "Special",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "fissure",
		name: "Fissure",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 180,
		contestType: "Tough",
	},
	"spacialrend": {
		accuracy: 95,
		basePower: 100,
		category: "Special",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "spacialrend",
		name: "Spacial Rend",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Dragon",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"spark": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "Has a 30% chance to paralyze the target.",
		shortDesc: "30% chance to paralyze the target.",
		id: "spark",
		name: "Spark",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 120,
		contestType: "Cool",
	},
	"sparklingaria": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "If the user has not fainted, the target is cured of its burn.",
		shortDesc: "The target is cured of its burn.",
		id: "sparklingaria",
		name: "Sparkling Aria",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			dustproof: true,
			chance: 100,
			onHit(target) {
				if (target.status === 'brn') target.cureStatus();
			},
		},
		target: "allAdjacent",
		type: "Water",
		zMovePower: 175,
		contestType: "Tough",
	},
	"spectralthief": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "The target's stat stages greater than 0 are stolen from it and applied to the user before dealing damage.",
		shortDesc: "Steals target's boosts before dealing damage.",
		id: "spectralthief",
		name: "Spectral Thief",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stealsBoosts: true,
		// Boost stealing implemented in scripts.js
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMovePower: 175,
		contestType: "Cool",
	},
	"speedswap": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its Speed stat with the target. Stat stage changes are unaffected.",
		shortDesc: "Swaps Speed stat with target.",
		id: "speedswap",
		name: "Speed Swap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			const targetSpe = target.storedStats.spe;
			target.storedStats.spe = source.storedStats.spe;
			source.storedStats.spe = targetSpe;
			this.add('-activate', source, 'move: Speed Swap', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"spiderweb": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		id: "spiderweb",
		name: "Spider Web",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			return target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "normal",
		type: "Bug",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"spikecannon": {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "spikecannon",
		name: "Spike Cannon",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Cool",
	},
	"spikes": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to three times before failing. Opponents lose 1/8 of their maximum HP with one layer, 1/6 of their maximum HP with two layers, and 1/4 of their maximum HP with three layers, all rounded down. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts grounded foes on switch-in. Max 3 layers.",
		id: "spikes",
		name: "Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'spikes',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 3) return false;
				this.add('-sidestart', side, 'Spikes');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				let damageAmounts = [0, 3, 4, 6]; // 1/8, 1/6, 1/4
				this.damage(damageAmounts[this.effectData.layers] * pokemon.maxhp / 24);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Ground",
		zMoveBoost: {def: 1},
		contestType: "Clever",
   },
	"spikyshield": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user is protected from most attacks made by other Pokemon during this turn, and Pokemon making contact with the user lose 1/8 of their maximum HP, rounded down. This move has a 1/X chance of being successful, where X starts at 1 and triples each time this move is successfully used. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn.",
		shortDesc: "Protects from moves. Contact: loses 1/8 max HP.",
		id: "spikyshield",
		name: "Spiky Shield",
		pp: 10,
		priority: 4,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		stallingMove: true,
		volatileStatus: 'spikyshield',
		onTryHit(target, source, move) {
			return !!this.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target) {
				this.add('-singleturn', target, 'move: Protect');
			},
			onTryHitPriority: 3,
			onTryHit(target, source, move) {
				if (!move.flags['protect']) {
					if (move.isZ) target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Protect');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				if (move.flags['contact']) {
					this.damage(source.maxhp / 8, source, target);
				}
				return this.NOT_FAIL;
			},
			onHit(target, source, move) {
				if (move.isZPowered && move.flags['contact']) {
					this.damage(source.maxhp / 8, source, target);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"spiritbreak": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Sp. Atk by 1.",
		id: "spiritbreak",
		isViable: true,
		name: "Spirit Break",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "normal",
		type: "Fairy",
	},
	"spiritshackle": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Prevents the target from switching out.",
		id: "spiritshackle",
		name: "Spirit Shackle",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			onHit(target, source, move) {
				if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
			},
		},
		target: "normal",
		type: "Ghost",
		zMovePower: 160,
		contestType: "Tough",
	},
	"spitup": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			if (!pokemon.volatiles['stockpile'] || !pokemon.volatiles['stockpile'].layers) return false;
			return pokemon.volatiles['stockpile'].layers * 100;
		},
		category: "Special",
		desc: "Power is equal to 100 times the user's Stockpile count. Fails if the user's Stockpile count is 0. Whether or not this move is successful, the user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
		shortDesc: "More power with more uses of Stockpile.",
		id: "spitup",
		name: "Spit Up",
		pp: 10,
		priority: 0,
		flags: {protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry(pokemon) {
			if (!pokemon.volatiles['stockpile']) {
				return false;
			}
		},
		onAfterMove(pokemon) {
			pokemon.removeVolatile('stockpile');
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"spite": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's last move used to lose 4 PP. Fails if the target has not made a move, if the move has 0 PP, or if it no longer knows the move.",
		shortDesc: "Lowers the PP of the target's last move by 4.",
		id: "spite",
		name: "Spite",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.lastMove && !target.lastMove.isZ) {
				let ppDeducted = target.deductPP(target.lastMove.id, 4);
				if (ppDeducted) {
					this.add("-activate", target, 'move: Spite', this.getMove(target.lastMove.id).name, ppDeducted);
					return;
				}
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMoveEffect: 'heal',
		contestType: "Tough",
	},
	"splash": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "No competitive use.",
		id: "splash",
		name: "Splash",
		pp: 40,
		priority: 0,
		flags: {gravity: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			this.add('-nothing');
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 3},
		contestType: "Cute",
	},
	"splinteredstormshards": {
		accuracy: true,
		basePower: 190,
		category: "Physical",
		desc: "Ends the effects of Electric Terrain, Grassy Terrain, Misty Terrain, and Psychic Terrain.",
		shortDesc: "Ends the effects of Terrain.",
		id: "splinteredstormshards",
		name: "Splintered Stormshards",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit() {
			this.field.clearTerrain();
		},
		isZ: "lycaniumz",
		secondary: null,
		target: "normal",
		type: "Rock",
		contestType: "Cool",
	},
	"spore": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to fall asleep.",
		id: "spore",
		name: "Spore",
		pp: 15,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'slp',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"spotlight": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Until the end of the turn, all single-target attacks from opponents of the target are redirected to the target. Such attacks are redirected to the target before they can be reflected by Magic Coat or the Magic Bounce Ability, or drawn in by the Lightning Rod or Storm Drain Abilities. Fails if it is not a Double Battle or Battle Royal.",
		shortDesc: "Target's foes' moves are redirected to it this turn.",
		id: "spotlight",
		name: "Spotlight",
		pp: 15,
		priority: 3,
		flags: {protect: 1, reflectable: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'spotlight',
		onTryHit(target) {
			if (target.side.active.length < 2) return false;
		},
		effect: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Spotlight');
			},
			onFoeRedirectTargetPriority: 2,
			onFoeRedirectTarget(target, source, source2, move) {
				if (this.validTarget(this.effectData.target, source, move.target)) {
					this.debug("Spotlight redirected target of move");
					return this.effectData.target;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Cute",
	},
	"squawk": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "Has a 10% chance to lower Special Attack",
		shortDesc: "Has a 10% chance to lower Special Attack. Hits adjacent foes.",
		id: "squawk",
		name: "Squawk",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Flying",
		zMovePower: 140,
		contestType: "Cool",
	},
	"stealthrock": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, damaging each opposing Pokemon that switches in. Fails if the effect is already active on the opposing side. Foes lose 1/32, 1/16, 1/8, 1/4, or 1/2 of their maximum HP, rounded down, based on their weakness to the Rock type; 0.25x, 0.5x, neutral, 2x, or 4x, respectively. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Hurts foes on switch-in. Factors Rock weakness.",
		id: "stealthrock",
		name: "Stealth Rock",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'stealthrock',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Stealth Rock');
			},
			onSwitchIn(pokemon) {
				let typeMod = this.clampIntRange(pokemon.runEffectiveness(this.getActiveMove('stealthrock')), -6, 6);
				this.damage(pokemon.maxhp * Math.pow(2, typeMod) / 8);
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Rock",
		zMoveBoost: {def: 1},
		contestType: "Cool",
	},
	"steameruption": {
		accuracy: 95,
		basePower: 110,
		category: "Special",
		desc: "Has a 30% chance to burn the target. The target thaws out if it is frozen.",
		shortDesc: "30% chance to burn the target.",
		id: "steameruption",
		name: "Steam Eruption",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1, defrost: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		thawsTarget: true,
		secondary: {
			chance: 30,
			status: 'brn',
		},
		target: "normal",
		type: "Water",
		zMovePower: 185,
		contestType: "Beautiful",
	},
	"steamroller": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to flinch the target.",
		id: "steamroller",
		name: "Steamroller",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Bug",
		zMovePower: 120,
		contestType: "Tough",
	},
	"steelwing": {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		desc: "Has a 10% chance to raise the user's Defense by 1 stage.",
		shortDesc: "10% chance to raise the user's Defense by 1.",
		id: "steelwing",
		name: "Steel Wing",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			self: {
				boosts: {
					def: 1,
				},
			},
		},
		target: "normal",
		type: "Steel",
		zMovePower: 140,
		contestType: "Cool",
	},
	"stickyweb": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, lowering the Speed by 1 stage of each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Fails if the effect is already active on the opposing side. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, or is hit by Defog.",
		shortDesc: "Lowers Speed of grounded foes by 1 on switch-in.",
		id: "stickyweb",
		name: "Sticky Web",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'stickyweb',
		effect: {
			onStart(side) {
				this.add('-sidestart', side, 'move: Sticky Web');
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				this.add('-activate', pokemon, 'move: Sticky Web');
				this.boost({spe: -1}, pokemon, pokemon.side.foe.active[0], this.getActiveMove('stickyweb'));
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Bug",
		zMoveBoost: {spe: 1},
		contestType: "Tough",
	},
	"stockpile": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense and Special Defense by 1 stage. The user's Stockpile count increases by 1. Fails if the user's Stockpile count is 3. The user's Stockpile count is reset to 0 when it is no longer active.",
		shortDesc: "Raises user's Defense, Sp. Def by 1. Max 3 uses.",
		id: "stockpile",
		name: "Stockpile",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			if (pokemon.volatiles['stockpile'] && pokemon.volatiles['stockpile'].layers >= 3) return false;
		},
		volatileStatus: 'stockpile',
		effect: {
			noCopy: true,
			onStart(target) {
				this.effectData.layers = 1;
				this.effectData.def = 0;
				this.effectData.spd = 0;
				this.add('-start', target, 'stockpile' + this.effectData.layers);
				let [curDef, curSpD] = [target.boosts.def, target.boosts.spd];
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectData.def--;
				if (curSpD !== target.boosts.spd) this.effectData.spd--;
			},
			onRestart(target) {
				if (this.effectData.layers >= 3) return false;
				this.effectData.layers++;
				this.add('-start', target, 'stockpile' + this.effectData.layers);
				const curDef = target.boosts.def;
				const curSpD = target.boosts.spd;
				this.boost({def: 1, spd: 1}, target, target);
				if (curDef !== target.boosts.def) this.effectData.def--;
				if (curSpD !== target.boosts.spd) this.effectData.spd--;
			},
			onEnd(target) {
				if (this.effectData.def || this.effectData.spd) {
					/** @type {SparseBoostsTable} */
					let boosts = {};
					if (this.effectData.def) boosts.def = this.effectData.def;
					if (this.effectData.spd) boosts.spd = this.effectData.spd;
					this.boost(boosts, target, target);
				}
				this.add('-end', target, 'Stockpile');
				if (this.effectData.def !== this.effectData.layers * -1 || this.effectData.spd !== this.effectData.layers * -1) {
					this.hint("In Gen 7, Stockpile keeps track of how many times it successfully altered each stat individually.");
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Tough",
	},
	"stokedsparksurfer": {
		accuracy: true,
		basePower: 175,
		category: "Special",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target.",
		id: "stokedsparksurfer",
		name: "Stoked Sparksurfer",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "aloraichiumz",
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
	"stomp": {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target. Damage doubles and no accuracy check is done if the target has used Minimize while active.",
		shortDesc: "30% chance to flinch the target.",
		id: "stomp",
		name: "Stomp",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Normal",
		zMovePower: 120,
		contestType: "Tough",
	},
	"stompingtantrum": {
		accuracy: 100,
		basePower: 75,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.moveLastTurnResult === false) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the user's last move on the previous turn, including moves called by other moves or those used through Instruct, Magic Coat, Snatch, or the Dancer or Magic Bounce Abilities, failed to do any of its normal effects, not including damage from an unsuccessful High Jump Kick, Jump Kick, or Mind Blown, or if the user was prevented from moving by any effect other than recharging or Sky Drop. A move that was blocked by Baneful Bunker, Detect, King's Shield, Protect, Spiky Shield, Crafty Shield, Mat Block, Quick Guard, or Wide Guard will not double this move's power, nor will Bounce or Fly ending early due to the effect of Gravity, Smack Down, or Thousand Arrows.",
		shortDesc: "Power doubles if the user's last move failed.",
		id: "stompingtantrum",
		name: "Stomping Tantrum",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Ground",
		zMovePower: 140,
		contestType: "Tough",
	},
	"stoneedge": {
		accuracy: 80,
		basePower: 100,
		category: "Physical",
		desc: "Has a higher chance for a critical hit.",
		shortDesc: "High critical hit ratio.",
		id: "stoneedge",
		name: "Stone Edge",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: null,
		target: "normal",
		type: "Rock",
		zMovePower: 180,
		contestType: "Tough",
	},
	"storedpower": {
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return move.basePower + 20 * pokemon.positiveBoosts();
		},
		category: "Special",
		desc: "Power is equal to 20+(X*20), where X is the user's total stat stage changes that are greater than 0.",
		shortDesc: " + 20 power for each of the user's stat boosts.",
		id: "storedpower",
		name: "Stored Power",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 160,
		contestType: "Clever",
	},
	"stormthrow": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "This move is always a critical hit unless the target is under the effect of Lucky Chant or has the Battle Armor or Shell Armor Abilities.",
		shortDesc: "Always results in a critical hit.",
		id: "stormthrow",
		name: "Storm Throw",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Cool",
	},
	"strength": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "strength",
		name: "Strength",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Tough",
	},
	"strengthsap": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack by 1 stage. The user restores its HP equal to the target's Attack stat calculated with its stat stage before this move was used. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down. Fails if the target's Attack stat stage is -6.",
		shortDesc: "User heals HP=target's Atk stat. Lowers Atk by 1.",
		id: "strengthsap",
		name: "Strength Sap",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source) {
			if (target.boosts.atk === -6) return false;
			let atk = target.getStat('atk', false, true);
			let success = this.boost({atk: -1}, target, source, null, false, true);
			return !!(this.heal(atk, source, target) || success);
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"stringshot": {
		accuracy: 95,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Speed by 2 stages.",
		shortDesc: "Lowers the foe(s) Speed by 2.",
		id: "stringshot",
		name: "String Shot",
		pp: 40,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spe: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Bug",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"struggle": {
		accuracy: true,
		basePower: 50,
		category: "Physical",
		desc: "Deals typeless damage to a random opposing Pokemon. If this move was successful, the user loses 1/4 of its maximum HP, rounded half up, and the Rock Head Ability does not prevent this. This move is automatically used if none of the user's known moves can be selected.",
		shortDesc: "User loses 1/4 of its max HP.",
		id: "struggle",
		name: "Struggle",
		pp: 1,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		noSketch: true,
		onModifyMove(move, pokemon, target) {
			move.type = '???';
			this.add('-activate', pokemon, 'move: Struggle');
		},
		struggleRecoil: true,
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		zMovePower: 1,
		contestType: "Tough",
	},
	"strugglebug": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "Has a 100% chance to lower the target's Special Attack by 1 stage.",
		shortDesc: "100% chance to lower the foe(s) Sp. Atk by 1.",
		id: "strugglebug",
		name: "Struggle Bug",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				spa: -1,
			},
		},
		target: "allAdjacentFoes",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cute",
	},
	"stunspore": {
		accuracy: 75,
		basePower: 0,
		category: "Status",
		desc: "Paralyzes the target.",
		shortDesc: "Paralyzes the target.",
		id: "stunspore",
		name: "Stun Spore",
		pp: 30,
		priority: 0,
		flags: {powder: 1, protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'par',
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"submission": {
		accuracy: 80,
		basePower: 80,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
		id: "submission",
		name: "Submission",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 160,
		contestType: "Cool",
	},
	"substitute": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user takes 1/4 of its maximum HP, rounded down, and puts it into a substitute to take its place in battle. The substitute is removed once enough damage is inflicted on it, or if the user switches out or faints. Baton Pass can be used to transfer the substitute to an ally, and the substitute will keep its remaining HP. Until the substitute is broken, it receives damage from all attacks made by other Pokemon and shields the user from status effects and stat stage changes caused by other Pokemon. Sound-based moves and Pokemon with the Infiltrator Ability ignore substitutes. The user still takes normal damage from weather and status effects while behind its substitute. If the substitute breaks during a multi-hit attack, the user will take damage from any remaining hits. If a substitute is created while the user is trapped by a binding move, the binding effect ends immediately. Fails if the user does not have enough HP remaining to create a substitute without fainting, or if it already has a substitute.",
		shortDesc: "User takes 1/4 its max HP to put in a substitute.",
		id: "substitute",
		name: "Substitute",
		pp: 10,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'substitute',
		onTryHit(target) {
			if (target.volatiles['substitute']) {
				this.add('-fail', target, 'move: Substitute');
				return null;
			}
			if (target.hp <= target.maxhp / 4 || target.maxhp === 1) { // Shedinja clause
				this.add('-fail', target, 'move: Substitute', '[weak]');
				return null;
			}
		},
		onHit(target) {
			this.directDamage(target.maxhp / 4);
		},
		effect: {
			onStart(target) {
				this.add('-start', target, 'Substitute');
				this.effectData.hp = Math.floor(target.maxhp / 4);
				delete target.volatiles['partiallytrapped'];
			},
			onTryPrimaryHitPriority: -1,
			onTryPrimaryHit(target, source, move) {
				if (target === source || move.flags['authentic'] || move.infiltrates) {
					return;
				}
				let damage = this.getDamage(source, target, move);
				if (!damage && damage !== 0) {
					this.add('-fail', source);
					this.attrLastMove('[still]');
					return null;
				}
				damage = this.runEvent('SubDamage', target, source, move, damage);
				if (!damage) {
					return damage;
				}
				if (damage > target.volatiles['substitute'].hp) {
					damage = /** @type {number} */ (target.volatiles['substitute'].hp);
				}
				target.volatiles['substitute'].hp -= damage;
				source.lastDamage = damage;
				if (target.volatiles['substitute'].hp <= 0) {
					target.removeVolatile('substitute');
				} else {
					this.add('-activate', target, 'move: Substitute', '[damage]');
				}
				if (move.recoil) {
					this.damage(this.calcRecoilDamage(damage, move), source, target, 'recoil');
				}
				if (move.drain) {
					this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
				}
				this.singleEvent('AfterSubDamage', move, null, target, source, move, damage);
				this.runEvent('AfterSubDamage', target, source, move, damage);
				return 0; // hit
			},
			onEnd(target) {
				this.add('-end', target, 'Substitute');
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"subzeroslammer": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "subzeroslammer",
		name: "Subzero Slammer",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "iciumz",
		secondary: null,
		target: "normal",
		type: "Ice",
		contestType: "Cool",
	},
	"suckerpunch": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Fails if the target did not select a physical attack, special attack, or Me First for use this turn, or if the target moves before the user.",
		shortDesc: "Usually goes first. Fails if target is not attacking.",
		id: "suckerpunch",
		name: "Sucker Punch",
		pp: 5,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTry(source, target) {
			let action = this.willMove(target);
			if (!action || action.choice !== 'move' || (action.move.category === 'Status' && action.move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 140,
		contestType: "Clever",
	},
	"suddenstrike": {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "suddenstrike",
		name: "Sudden Strike",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 100,
		contestType: "Cool",
	},
	"sunnyday": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the weather becomes Sunny Day. The damage of Fire-type attacks is multiplied by 1.5 and the damage of Water-type attacks is multiplied by 0.5 during the effect. Lasts for 8 turns if the user is holding Heat Rock. Fails if the current weather is Sunny Day.",
		shortDesc: "For 5 turns, intense sunlight powers Fire moves.",
		id: "sunnyday",
		name: "Sunny Day",
		pp: 5,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		weather: 'sunnyday',
		secondary: null,
		target: "all",
		type: "Fire",
		zMoveBoost: {spe: 1},
		contestType: "Beautiful",
	},
	"sunsteelstrike": {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
		desc: "This move and its effects ignore the Abilities of other Pokemon.",
		shortDesc: "Ignores the Abilities of other Pokemon.",
		id: "sunsteelstrike",
		name: "Sunsteel Strike",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ignoreAbility: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 180,
		contestType: "Cool",
	},
	"superfang": {
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.hp / 2), 1);
		},
		category: "Physical",
		desc: "Deals damage to the target equal to half of its current HP, rounded down, but not less than 1 HP.",
		shortDesc: "Does damage equal to 1/2 target's current HP.",
		id: "superfang",
		name: "Super Fang",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"superpower": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Lowers the user's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the user's Attack and Defense by 1.",
		id: "superpower",
		name: "Superpower",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				atk: -1,
				def: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 190,
		contestType: "Tough",
	},
	"supersonic": {
		accuracy: 55,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to become confused.",
		id: "supersonic",
		name: "Supersonic",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"supersonicskystrike": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "supersonicskystrike",
		name: "Supersonic Skystrike",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "flyiniumz",
		secondary: null,
		target: "normal",
		type: "Flying",
		contestType: "Cool",
	},
	"surf": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Damage doubles if the target is using Dive.",
		shortDesc: "Hits adjacent Pokemon. Double damage on Dive.",
		id: "surf",
		name: "Surf",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Water",
		zMovePower: 175,
		contestType: "Beautiful",
	},
	"swagger": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		desc: "Raises the target's Attack by 2 stages and confuses it.",
		shortDesc: "Raises the target's Attack by 2 and confuses it.",
		id: "swagger",
		name: "Swagger",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Cute",
	},
	"swallow": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores its HP based on its Stockpile count. Restores 1/4 of its maximum HP if it's 1, 1/2 of its maximum HP if it's 2, both rounded half down, and all of its HP if it's 3. Fails if the user's Stockpile count is 0. The user's Defense and Special Defense decrease by as many stages as Stockpile had increased them, and the user's Stockpile count resets to 0.",
		shortDesc: "Heals the user based on uses of Stockpile.",
		id: "swallow",
		name: "Swallow",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			if (!pokemon.volatiles['stockpile'] || !pokemon.volatiles['stockpile'].layers) return false;
		},
		onHit(pokemon) {
			let healAmount = [0.25, 0.5, 1];
			let healedBy = this.heal(this.modify(pokemon.maxhp, healAmount[(pokemon.volatiles['stockpile'].layers - 1)]));
			pokemon.removeVolatile('stockpile');
			return !!healedBy;
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Tough",
	},
	"sweetkiss": {
		accuracy: 75,
		basePower: 0,
		category: "Status",
		shortDesc: "Causes the target to become confused.",
		id: "sweetkiss",
		name: "Sweet Kiss",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		secondary: null,
		target: "normal",
		type: "Fairy",
		zMoveBoost: {spa: 1},
		contestType: "Cute",
	},
	"sweetscent": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's evasiveness by 2 stages.",
		shortDesc: "Lowers the foe(s) evasiveness by 2.",
		id: "sweetscent",
		name: "Sweet Scent",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			evasion: -2,
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMoveBoost: {accuracy: 1},
		contestType: "Cute",
	},
	"swift": {
		accuracy: true,
		basePower: 60,
		category: "Special",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Hits foes.",
		id: "swift",
		name: "Swift",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Normal",
		zMovePower: 120,
		contestType: "Cool",
	},
	"switcheroo": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		shortDesc: "User switches its held item with the target's.",
		id: "switcheroo",
		name: "Switcheroo",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target) {
			if (target.hasAbility('stickyhold')) {
				this.add('-immune', target);
				return null;
			}
		},
		onHit(target, source, move) {
			let yourItem = target.takeItem(source);
			let myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if ((myItem && !this.singleEvent('TakeItem', myItem, source.itemData, target, source, move, myItem)) || (yourItem && !this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem))) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Switcheroo');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Switcheroo');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Switcheroo');
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {spe: 2},
		contestType: "Clever",
	},
	"swordsdance": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack by 2 stages.",
		shortDesc: "Raises the user's Attack by 2.",
		id: "swordsdance",
		name: "Swords Dance",
		pp: 20,
		priority: 0,
		flags: {snatch: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 2,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"symphonicdiscord": {
		accuracy: 95,
		basePower: 80,
		category: "Physical",
		desc: "Has a 10% chance to flinch the target and a 10% chance to paralyze it.",
		shortDesc: "10% chance to flinch. 10% chance to paralyze.",
		id: "symphonicdiscord",
		name: "Symphonic Discord",
		pp: 15,
		priority: 0,
		flags: {sound: 1, contact: 1, protect: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 10,
				status: 'par',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Electric",
		zMovePower: 160,
		contestType: "Cool",
	},
	"synchronoise": {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "The target is immune if it does not share a type with the user.",
		shortDesc: "Hits adjacent Pokemon sharing the user's type.",
		id: "synchronoise",
		name: "Synchronoise",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target, source) {
			if (!target.hasType(source.getTypes())) {
				this.add('-immune', target);
				return null;
			}
		},
		secondary: null,
		target: "allAdjacent",
		type: "Psychic",
		zMovePower: 190,
		contestType: "Clever",
	},
	"synthesis": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user restores 1/2 of its maximum HP if Delta Stream or no weather conditions are in effect, 2/3 of its maximum HP if the weather is Desolate Land or Sunny Day, and 1/4 of its maximum HP if the weather is Hail, Primordial Sea, Rain Dance, or Sandstorm, all rounded half down.",
		shortDesc: "Heals the user by a weather-dependent amount.",
		id: "synthesis",
		name: "Synthesis",
		pp: 5,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(pokemon) {
			let factor = 0.5;
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				factor = 0.667;
			} else if (this.field.isWeather(['raindance', 'primordialsea', 'sandstorm', 'hail'])) {
				factor = 0.25;
			}
			return !!this.heal(this.modify(pokemon.maxhp, factor));
		},
		secondary: null,
		target: "self",
		type: "Grass",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Clever",
	},
/*SLOT
	"": {
		accuracy: 100,
		basePower: 40,
		category: "",
		shortDesc: "",
		id: "",
		name: "",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},*/
	"tailglow": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Special Attack by 3 stages.",
		shortDesc: "Raises the user's Sp. Atk by 3.",
		id: "tailglow",
		name: "Tail Glow",
		pp: 20,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			spa: 3,
		},
		secondary: null,
		target: "self",
		type: "Bug",
		zMoveEffect: 'clearnegativeboost',
		contestType: "Beautiful",
	},
	"tailslap": {
		accuracy: 85,
		basePower: 25,
		category: "Physical",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times.",
		shortDesc: "Hits 2-5 times in one turn.",
		id: "tailslap",
		name: "Tail Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 140,
		contestType: "Cute",
	},
	"tailwind": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 4 turns, the user and its party members have their Speed doubled. Fails if this move is already in effect for the user's side.",
		shortDesc: "For 4 turns, allies' Speed is doubled.",
		id: "tailwind",
		name: "Tailwind",
		pp: 15,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'tailwind',
		effect: {
			duration: 4,
			durationCallback(target, source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 6;
				}
				return 4;
			},
			onStart(side) {
				this.add('-sidestart', side, 'move: Tailwind');
			},
			onModifySpe(spe, pokemon) {
				return this.chainModify(2);
			},
			onResidualOrder: 21,
			onResidualSubOrder: 4,
			onEnd(side) {
				this.add('-sideend', side, 'move: Tailwind');
			},
		},
		secondary: null,
		target: "allySide",
		type: "Flying",
		zMoveEffect: 'crit2',
		contestType: "Cool",
	},
	"takedown": {
		accuracy: 85,
		basePower: 90,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
		id: "takedown",
		name: "Take Down",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 175,
		contestType: "Tough",
	},
	"talonswipe": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a higher chance to land a critical hit and a 20% chance to inflict the bleed status.",
		shortDesc: "Higher crit chance and may inflict bld",
		id: "talonswipe",
		name: "Talon Swipe",
		pp: 20,
		priority: 0,
		flags: {protect: 1, contact: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		critRatio: 2,
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "normal",
		type: "Flying",
		zMovePower: 140,
		contestType: "Cool",
	},
	"taunt": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Prevents the target from using non-damaging moves for its next three turns. Pokemon with the Oblivious Ability or protected by the Aroma Veil Ability are immune.",
		shortDesc: "Target can't use status moves its next 3 turns.",
		id: "taunt",
		name: "Taunt",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'taunt',
		effect: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.willMove(target)) {
					this.effectData.duration++;
				}
				this.add('-start', target, 'move: Taunt');
			},
			onResidualOrder: 12,
			onEnd(target) {
				this.add('-end', target, 'move: Taunt');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.getMove(moveSlot.id).category === 'Status') {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 5,
			onBeforeMove(attacker, defender, move) {
				if (!move.isZ && move.category === 'Status') {
					this.add('cant', attacker, 'move: Taunt', move);
					return false;
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {atk: 1},
		contestType: "Clever",
	},
	"tearfullook": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack and Special Attack by 1 stage.",
		shortDesc: "Lowers the target's Attack and Sp. Atk by 1.",
		id: "tearfullook",
		name: "Tearful Look",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -1,
			spa: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"technoblast": {
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "This move's type depends on the user's held Drive.",
		shortDesc: "Type varies based on the held Drive.",
		id: "technoblast",
		name: "Techno Blast",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move, pokemon) {
			if (pokemon.ignoringItem()) return;
			move.type = this.runEvent('Drive', pokemon, null, move, 'Normal');
			if(pokemon.template.speciesid === 'genesectmega') {
				move.priority = 2;
				move.basePower = 80;
				move.technoSuper = true;
				if (!move.secondaries) {
					move.secondaries = [];
				}
				move.secondaries.push({
					chance: 20,
					onHit(target, source) {
						let result = this.random(3);
						if (result === 0) {
							target.trySetStatus('brn', source);
						} else if (result === 1) {
							target.trySetStatus('par', source);
						} else {
							target.trySetStatus('frz', source);
						}
					},
				});
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (move.technoSuper) return 1;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Cool",
	},
	"tectonicrage": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "tectonicrage",
		name: "Tectonic Rage",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "groundiumz",
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Cool",
	},
	"teeterdance": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to become confused.",
		shortDesc: "Confuses adjacent Pokemon.",
		id: "teeterdance",
		name: "Teeter Dance",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, dance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'confusion',
		secondary: null,
		target: "allAdjacent",
		type: "Normal",
		zMoveBoost: {spa: 1},
		contestType: "Cute",
	},
	"telekinesis": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 3 turns, the target cannot avoid any attacks made against it, other than OHKO moves, as long as it remains active. During the effect, the target is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability as long as it remains active. If the target uses Baton Pass, the replacement will gain the effect. Ingrain, Smack Down, Thousand Arrows, and Iron Ball override this move if the target is under any of their effects. Fails if the target is already under this effect or the effects of Ingrain, Smack Down, or Thousand Arrows. The target is immune to this move on use if its species is Diglett, Dugtrio, Alolan Diglett, Alolan Dugtrio, Sandygast, Palossand, or Gengar while Mega-Evolved. Mega Gengar cannot be under this effect by any means.",
		shortDesc: "For 3 turns, target floats but moves can't miss it.",
		id: "telekinesis",
		name: "Telekinesis",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, gravity: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'telekinesis',
		effect: {
			duration: 3,
			onStart(target) {
				if (['Diglett', 'Dugtrio', 'Palossand', 'Sandygast'].includes(target.baseTemplate.baseSpecies) ||
						target.baseTemplate.species === 'Gengar-Mega') {
					this.add('-immune', target);
					return null;
				}
				if (target.volatiles['smackdown'] || target.volatiles['ingrain']) return false;
				this.add('-start', target, 'Telekinesis');
			},
			onAccuracyPriority: -1,
			onAccuracy(accuracy, target, source, move) {
				if (move && !move.ohko) return true;
			},
			onImmunity(type) {
				if (type === 'Ground') return false;
			},
			onUpdate(pokemon) {
				if (pokemon.baseTemplate.species === 'Gengar-Mega') {
					delete pokemon.volatiles['telekinesis'];
					this.add('-end', pokemon, 'Telekinesis', '[silent]');
				}
			},
			onResidualOrder: 16,
			onEnd(target) {
				this.add('-end', target, 'Telekinesis');
			},
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spa: 1},
		contestType: "Clever",
	},
	"teleport": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		shortDesc: "Fails when used.",
		id: "teleport",
		name: "Teleport",
		pp: 20,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit: false,
		secondary: null,
		target: "self",
		type: "Psychic",
		zMoveEffect: 'heal',
		contestType: "Cool",
	},
	"thief": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		desc: "If this attack was successful and the user has not fainted, it steals the target's held item if the user is not holding one. The target's item is not stolen if it is a Mail or Z-Crystal, or if the target is a Kyogre holding a Blue Orb, a Groudon holding a Red Orb, a Giratina holding a Griseous Orb, an Arceus holding a Plate, a Genesect holding a Drive, a Silvally holding a Memory, or a Pokemon that can Mega Evolve holding the Mega Stone for its species. Items lost to this move cannot be regained with Recycle or the Harvest Ability.",
		shortDesc: "If the user has no item, it steals the target's.",
		id: "thief",
		name: "Thief",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onAfterHit(target, source, move) {
			if (source.item || source.volatiles['gem']) {
				return;
			}
			let yourItem = target.takeItem(source);
			if (!yourItem) {
				return;
			}
			if (!this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem) || !source.setItem(yourItem)) {
				target.item = yourItem.id; // bypass setItem so we don't break choicelock or anything
				return;
			}
			this.add('-item', source, yourItem, '[from] move: Thief', '[of] ' + target);
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 120,
		contestType: "Tough",
	},
	"thousandarrows": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "This move can hit airborne Pokemon, which includes Flying-type Pokemon, Pokemon with the Levitate Ability, Pokemon holding an Air Balloon, and Pokemon under the effect of Magnet Rise or Telekinesis. If the target is a Flying type and is not already grounded, this move deals neutral damage regardless of its other type(s). This move can hit a target using Bounce, Fly, or Sky Drop. If this move hits a target under the effect of Bounce, Fly, Magnet Rise, or Telekinesis, the effect ends. If the target is a Flying type that has not used Roost this turn or a Pokemon with the Levitate Ability, it loses its immunity to Ground-type attacks and the Arena Trap Ability as long as it remains active. During the effect, Magnet Rise fails for the target and Telekinesis fails against the target.",
		shortDesc: "Grounds adjacent foes. First hit neutral on Flying.",
		id: "thousandarrows",
		name: "Thousand Arrows",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			if (move.type !== 'Ground') return;
			if (!target) return; // avoid crashing when called from a chat plugin
			// ignore effectiveness if the target is Flying type and immune to Ground
			if (!target.runImmunity('Ground')) {
				if (target.hasType('Flying')) return 0;
			}
		},
		volatileStatus: 'smackdown',
		ignoreImmunity: {'Ground': true},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMovePower: 180,
		contestType: "Beautiful",
	},
	"thousandwaves": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "Prevents the target from switching out. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. If the target leaves the field using Baton Pass, the replacement will remain trapped. The effect ends if the user leaves the field.",
		shortDesc: "Hits adjacent foes. Prevents them from switching.",
		id: "thousandwaves",
		name: "Thousand Waves",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			if (source.isActive) target.addVolatile('trapped', source, move, 'trapper');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Ground",
		zMovePower: 175,
		contestType: "Tough",
	},
	"thrash": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "The user spends two or three turns locked into this move and becomes confused immediately after its move on the last turn of the effect if it is not already. This move targets an opposing Pokemon at random on each turn. If the user is prevented from moving, is asleep at the beginning of a turn, or the attack is not successful against the target on the first turn of the effect or the second turn of a three-turn effect, the effect ends without causing confusion. If this move is called by Sleep Talk and the user is asleep, the move is used for one turn and does not confuse the user.",
		shortDesc: "Lasts 2-3 turns. Confuses the user afterwards.",
		id: "thrash",
		name: "Thrash",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'lockedmove',
		},
		onAfterMove(pokemon) {
			if (pokemon.volatiles['lockedmove'] && pokemon.volatiles['lockedmove'].duration === 1) {
				pokemon.removeVolatile('lockedmove');
			}
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Tough",
	},
	"throatchop": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "For 2 turns, the target cannot use sound-based moves.",
		shortDesc: "For 2 turns, the target cannot use sound moves.",
		id: "throatchop",
		name: "Throat Chop",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		effect: {
			duration: 2,
			onStart(target) {
				this.add('-start', target, 'Throat Chop', '[silent]');
			},
			onDisableMove(pokemon) {
				for (const moveSlot of pokemon.moveSlots) {
					if (this.getMove(moveSlot.id).flags['sound']) {
						pokemon.disableMove(moveSlot.id);
					}
				}
			},
			onBeforeMovePriority: 6,
			onBeforeMove(pokemon, target, move) {
				if (!move.isZ && move.flags['sound']) {
					this.add('cant', pokemon, 'move: Throat Chop');
					return false;
				}
			},
			onResidualOrder: 22,
			onEnd(target) {
				this.add('-end', target, 'Throat Chop', '[silent]');
			},
		},
		secondary: {
			chance: 100,
			onHit(target) {
				target.addVolatile('throatchop');
			},
		},
		target: "normal",
		type: "Dark",
		zMovePower: 160,
		contestType: "Clever",
	},
	"thunder": {
		accuracy: 70,
		basePower: 110,
		category: "Special",
		desc: "Has a 30% chance to paralyze the target. This move can hit a target using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop. If the weather is Primordial Sea or Rain Dance, this move does not check accuracy. If the weather is Desolate Land or Sunny Day, this move's accuracy is 50%.",
		shortDesc: "30% chance to paralyze. Can't miss in rain.",
		id: "thunder",
		name: "Thunder",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move) {
			if (this.field.isWeather(['raindance', 'primordialsea'])) {
				move.accuracy = true;
			} else if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				move.accuracy = 50;
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 185,
		contestType: "Cool",
	},
	"thunderbolt": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target.",
		id: "thunderbolt",
		name: "Thunderbolt",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 175,
		contestType: "Cool",
	},
	"thunderfang": {
		accuracy: 95,
		basePower: 65,
		category: "Physical",
		desc: "Has a 10% chance to paralyze the target and a 10% chance to flinch it.",
		shortDesc: "10% chance to paralyze. 10% chance to flinch.",
		id: "thunderfang",
		name: "Thunder Fang",
		pp: 15,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondaries: [
			{
				chance: 10,
				status: 'par',
			}, {
				chance: 10,
				volatileStatus: 'flinch',
			},
		],
		target: "normal",
		type: "Electric",
		zMovePower: 120,
		contestType: "Cool",
	},
	"thunderpunch": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target.",
		id: "thunderpunch",
		name: "Thunder Punch",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 140,
		contestType: "Cool",
	},
	"thundershock": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 10% chance to paralyze the target.",
		shortDesc: "10% chance to paralyze the target.",
		id: "thundershock",
		name: "Thunder Shock",
		pp: 30,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 100,
		contestType: "Cool",
	},
	"thunderwave": {
		accuracy: 90,
		basePower: 0,
		category: "Status",
		desc: "Paralyzes the target. This move does not ignore type immunity.",
		shortDesc: "Paralyzes the target.",
		id: "thunderwave",
		name: "Thunder Wave",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'par',
		ignoreImmunity: false,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMoveBoost: {spd: 1},
		contestType: "Cool",
	},
	"tickle": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack and Defense by 1 stage.",
		shortDesc: "Lowers the target's Attack and Defense by 1.",
		id: "tickle",
		name: "Tickle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: -1,
			def: -1,
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"titanicforce": {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		desc: "Deals damage to the target equal to the target's maximum HP. Ignores accuracy and evasiveness modifiers. This attack's accuracy is equal to (user's level - target's level + 30)%, and fails if the target is at a higher level. Pokemon with the Sturdy Ability are immune.",
		shortDesc: "OHKOs the target. Fails if user is a lower level.",
		id: "titanicforce",
		name: "Titantic Force",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		ohko: true,
		secondary: null,
		target: "normal",
		type: "Steel",
		zMovePower: 180,
		contestType: "Tough",
	},
	"topsyturvy": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target's positive stat stages become negative and vice versa. Fails if all of the target's stat stages are 0.",
		shortDesc: "Inverts the target's stat stages.",
		id: "topsyturvy",
		name: "Topsy-Turvy",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			let success = false;
			for (let i in target.boosts) {
				// @ts-ignore
				if (target.boosts[i] === 0) continue;
				// @ts-ignore
				target.boosts[i] = -target.boosts[i];
				success = true;
			}
			if (!success) return false;
			this.add('-invertboost', target, '[from] move: Topsy-Turvy');
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {atk: 1},
		contestType: "Clever",
	},
	"torment": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Prevents the target from selecting the same move for use two turns in a row. This effect ends when the target is no longer active.",
		shortDesc: "Target can't select the same move twice in a row.",
		id: "torment",
		name: "Torment",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'torment',
		effect: {
			noCopy: true,
			onStart(pokemon) {
				this.add('-start', pokemon, 'Torment');
			},
			onEnd(pokemon) {
				this.add('-end', pokemon, 'Torment');
			},
			onDisableMove(pokemon) {
				if (pokemon.lastMove && pokemon.lastMove.id !== 'struggle') pokemon.disableMove(pokemon.lastMove.id);
			},
		},
		secondary: null,
		target: "normal",
		type: "Dark",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"tornadoclaw": {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
		desc: "No additional effect.",
		shortDesc: "Hits adjacent pokemon.",
		id: "tornadoclaw",
		name: "Tornado Claw",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Flying",
		zMovePower: 140,
		contestType: "Cool",
	},
	"toxic": {
		accuracy: 90,
		basePower: 0,
		category: "Status",
		desc: "Badly poisons the target. If a Poison-type Pokemon uses this move, the target cannot avoid the attack, even if the target is in the middle of a two-turn move.",
		shortDesc: "Badly poisons the target. Poison types can't miss.",
		id: "toxic",
		name: "Toxic",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		// No Guard-like effect for Poison-type users implemented in BattleScripts#tryMoveHit
		status: 'tox',
		secondary: null,
		target: "normal",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"toxicspikes": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Sets up a hazard on the opposing side of the field, poisoning each opposing Pokemon that switches in, unless it is a Flying-type Pokemon or has the Levitate Ability. Can be used up to two times before failing. Opposing Pokemon become poisoned with one layer and badly poisoned with two layers. Can be removed from the opposing side if any opposing Pokemon uses Rapid Spin or Defog successfully, is hit by Defog, or a grounded Poison-type Pokemon switches in. Safeguard prevents the opposing party from being poisoned on switch-in, but a substitute does not.",
		shortDesc: "Poisons grounded foes on switch-in. Max 2 layers.",
		id: "toxicspikes",
		name: "Toxic Spikes",
		pp: 20,
		priority: 0,
		flags: {reflectable: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'toxicspikes',
		effect: {
			// this is a side condition
			onStart(side) {
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers = 1;
			},
			onRestart(side) {
				if (this.effectData.layers >= 2) return false;
				this.add('-sidestart', side, 'move: Toxic Spikes');
				this.effectData.layers++;
			},
			onSwitchIn(pokemon) {
				if (!pokemon.isGrounded()) return;
				if (pokemon.hasType('Poison')) {
					this.add('-sideend', pokemon.side, 'move: Toxic Spikes', '[of] ' + pokemon);
					pokemon.side.removeSideCondition('toxicspikes');
				} else if (pokemon.hasType('Steel')) {
					return;
				} else if (this.effectData.layers >= 2) {
					pokemon.trySetStatus('tox', pokemon.side.foe.active[0]);
				} else {
					pokemon.trySetStatus('psn', pokemon.side.foe.active[0]);
				}
			},
		},
		secondary: null,
		target: "foeSide",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"toxicthread": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Speed by 1 stage and poisons it.",
		shortDesc: "Lowers the target's Speed by 1 and poisons it.",
		id: "toxicthread",
		name: "Toxic Thread",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'psn',
		boosts: {
			spe: -1,
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMoveBoost: {spe: 1},
		contestType: "Tough",
	},
	"transform": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user transforms into the target. The target's current stats, stat stages, types, moves, Ability, weight, gender, and sprite are copied. The user's level and HP remain the same and each copied move receives only 5 PP, with a maximum of 5 PP each. The user can no longer change formes if it would have the ability to do so. This move fails if it hits a substitute, if either the user or the target is already transformed, or if either is behind an Illusion.",
		shortDesc: "Copies target's stats, moves, types, and Ability.",
		id: "transform",
		name: "Transform",
		pp: 10,
		priority: 0,
		flags: {mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, pokemon) {
			if (!pokemon.transformInto(target)) {
				return false;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveEffect: 'heal',
		contestType: "Clever",
	},
	"triattack": {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		desc: "Has a 20% chance to either burn, freeze, or paralyze the target.",
		shortDesc: "20% chance to paralyze or burn or freeze target.",
		id: "triattack",
		name: "Tri Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			onHit(target, source) {
				let result = this.random(3);
				if (result === 0) {
					target.trySetStatus('brn', source);
				} else if (result === 1) {
					target.trySetStatus('par', source);
				} else {
					target.trySetStatus('frz', source);
				}
			},
		},
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"trick": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "The user swaps its held item with the target's held item. Fails if either the user or the target is holding a Mail or Z-Crystal, if neither is holding an item, if the user is trying to give or take a Mega Stone to or from the species that can Mega Evolve with it, or if the user is trying to give or take a Blue Orb, a Red Orb, a Griseous Orb, a Plate, a Drive, or a Memory to or from a Kyogre, a Groudon, a Giratina, an Arceus, a Genesect, or a Silvally, respectively. The target is immune to this move if it has the Sticky Hold Ability.",
		shortDesc: "User switches its held item with the target's.",
		id: "trick",
		name: "Trick",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(target) {
			if (target.hasAbility('stickyhold')) {
				this.add('-immune', target);
				return null;
			}
		},
		onHit(target, source, move) {
			let yourItem = target.takeItem(source);
			let myItem = source.takeItem();
			if (target.item || source.item || (!yourItem && !myItem)) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			if ((myItem && !this.singleEvent('TakeItem', myItem, source.itemData, target, source, move, myItem)) || (yourItem && !this.singleEvent('TakeItem', yourItem, target.itemData, source, target, move, yourItem))) {
				if (yourItem) target.item = yourItem.id;
				if (myItem) source.item = myItem.id;
				return false;
			}
			this.add('-activate', source, 'move: Trick', '[of] ' + target);
			if (myItem) {
				target.setItem(myItem);
				this.add('-item', target, myItem, '[from] move: Trick');
			} else {
				this.add('-enditem', target, yourItem, '[silent]', '[from] move: Trick');
			}
			if (yourItem) {
				source.setItem(yourItem);
				this.add('-item', source, yourItem, '[from] move: Trick');
			} else {
				this.add('-enditem', source, myItem, '[silent]', '[from] move: Trick');
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMoveBoost: {spe: 2},
		contestType: "Clever",
	},
	"trickortreat": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the Ghost type to be added to the target, effectively making it have two or three types. Fails if the target is already a Ghost type. If Forest's Curse adds a type to the target, it replaces the type added by this move and vice versa.",
		shortDesc: "Adds Ghost to the target's type(s).",
		id: "trickortreat",
		name: "Trick-or-Treat",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.hasType('Ghost')) return false;
			if (!target.addType('Ghost')) return false;
			this.add('-start', target, 'typeadd', 'Ghost', '[from] move: Trick-or-Treat');

			if (target.side.active.length === 2 && target.position === 1) {
				// Curse Glitch
				const action = this.willMove(target);
				if (action && action.move.id === 'curse') {
					action.targetLoc = -1;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMoveBoost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1},
		contestType: "Cute",
	},
	"trickroom": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the Speed of every Pokemon is recalculated for the purposes of determining turn order. During the effect, each Pokemon's Speed is considered to be (10000 - its normal Speed), and if this value is greater than 8191, 8192 is subtracted from it. If this move is used during the effect, the effect ends.",
		shortDesc: "Goes last. For 5 turns, turn order is reversed.",
		id: "trickroom",
		name: "Trick Room",
		pp: 5,
		priority: -7,
		flags: {mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'trickroom',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onStart(target, source) {
				this.add('-fieldstart', 'move: Trick Room', '[of] ' + source);
			},
			onRestart(target, source) {
				this.field.removePseudoWeather('trickroom');
			},
			// Speed modification is changed in Pokemon.getActionSpeed() in sim/pokemon.js
			onResidualOrder: 23,
			onEnd() {
				this.add('-fieldend', 'move: Trick Room');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMoveBoost: {accuracy: 1},
		contestType: "Clever",
	},
	"triplekick": {
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			return 10 * move.hit;
		},
		category: "Physical",
		desc: "Hits three times. Power increases to 20 for the second hit and 30 for the third. This move checks accuracy for each hit, and the attack ends if the target avoids a hit. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit three times.",
		shortDesc: "Hits 3 times. Each hit can miss, but power rises.",
		id: "triplekick",
		name: "Triple Kick",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 3,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 120,
		contestType: "Cool",
	},
	"tropkick": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "Has a 100% chance to lower the target's Attack by 1 stage.",
		shortDesc: "100% chance to lower the target's Attack by 1.",
		id: "tropkick",
		name: "Trop Kick",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			boosts: {
				atk: -1,
			},
		},
		target: "normal",
		type: "Grass",
		zMovePower: 140,
		contestType: "Cute",
	},
	"trumpcard": {
		accuracy: true,
		basePower: 0,
		basePowerCallback(source, target, move) {
			const callerMoveId = move.sourceEffect || move.id;
			const moveSlot = callerMoveId === 'instruct' ? source.getMoveData(move.id) : source.getMoveData(callerMoveId);
			if (!moveSlot) return 40;
			switch (moveSlot.pp) {
			case 0:
				return 200;
			case 1:
				return 80;
			case 2:
				return 60;
			case 3:
				return 50;
			default:
				return 40;
			}
		},
		category: "Special",
		desc: "The power of this move is based on the amount of PP remaining after normal PP reduction and the Pressure Ability resolve. 200 power for 0 PP, 80 power for 1 PP, 60 power for 2 PP, 50 power for 3 PP, and 40 power for 4 or more PP.",
		shortDesc: "More power the fewer PP this move has left.",
		id: "trumpcard",
		name: "Trump Card",
		pp: 5,
		noPPBoosts: true,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Cool",
	},
	"twineedle": {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
		desc: "Hits twice, with each hit having a 20% chance to poison the target. If the first hit breaks the target's substitute, it will take damage for the second hit.",
		shortDesc: "Hits 2 times. Each hit has 20% chance to poison.",
		id: "twineedle",
		name: "Twineedle",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: 2,
		secondary: {
			chance: 20,
			status: 'psn',
		},
		target: "normal",
		type: "Bug",
		zMovePower: 100,
		contestType: "Cool",
	},
	"twinkletackle": {
		accuracy: true,
		basePower: 1,
		category: "Physical",
		shortDesc: "Power is equal to the base move's Z-Power.",
		id: "twinkletackle",
		name: "Twinkle Tackle",
		pp: 1,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		isZ: "fairiumz",
		secondary: null,
		target: "normal",
		type: "Fairy",
		contestType: "Cool",
	},
	"twister": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "Has a 20% chance to flinch the target. Power doubles if the target is using Bounce, Fly, or Sky Drop, or is under the effect of Sky Drop.",
		shortDesc: "20% chance to flinch the foe(s).",
		id: "twister",
		name: "Twister",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "allAdjacentFoes",
		type: "Dragon",
		zMovePower: 100,
		contestType: "Cool",
	},
	"uturn": {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit Ability.",
		shortDesc: "User switches out after damaging the target.",
		id: "uturn",
		name: "U-turn",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Bug",
		zMovePower: 140,
		contestType: "Cute",
	},
	"uproar": {
		accuracy: 100,
		basePower: 90,
		category: "Special",
		desc: "The user spends three turns locked into this move. This move targets an opponent at random on each turn. On the first of the three turns, all sleeping active Pokemon wake up. During the three turns, no active Pokemon can fall asleep by any means, and Pokemon switched in during the effect do not wake up. If the user is prevented from moving or the attack is not successful against the target during one of the turns, the effect ends.",
		shortDesc: "Lasts 3 turns. Active Pokemon cannot fall asleep.",
		id: "uproar",
		name: "Uproar",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, sound: 1, authentic: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			volatileStatus: 'uproar',
		},
		onTryHit(target) {
			for (const [i, allyActive] of target.side.active.entries()) {
				if (allyActive && allyActive.status === 'slp') allyActive.cureStatus();
				let foeActive = target.side.foe.active[i];
				if (foeActive && foeActive.status === 'slp') foeActive.cureStatus();
			}
		},
		effect: {
			duration: 3,
			onStart(target) {
				this.add('-start', target, 'Uproar');
			},
			onResidual(target) {
				if (target.lastMove && target.lastMove.id === 'struggle') {
					// don't lock
					delete target.volatiles['uproar'];
				}
				this.add('-start', target, 'Uproar', '[upkeep]');
			},
			onEnd(target) {
				this.add('-end', target, 'Uproar');
			},
			onLockMove: 'uproar',
			onAnySetStatus(status, pokemon) {
				if (status.id === 'slp') {
					if (pokemon === this.effectData.target) {
						this.add('-fail', pokemon, 'slp', '[from] Uproar', '[msg]');
					} else {
						this.add('-fail', pokemon, 'slp', '[from] Uproar');
					}
					return null;
				}
			},
		},
		secondary: null,
		target: "randomNormal",
		type: "Normal",
		zMovePower: 175,
		contestType: "Cute",
	},
	"vacuumwave": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "vacuumwave",
		name: "Vacuum Wave",
		pp: 30,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 100,
		contestType: "Cool",
	},
	"vampiricbite": {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
		desc: "Regain hp equal to half the damage dealt.",
		shortDesc: "Regain hp equal to half the damage dealt.",
		id: "vampiricbite",
		name: "Vampiric Bite",
		pp: 10,
		priority: 0,
		flags: {bite: 1, contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		drain: [1, 2],
		secondary: null,
		target: "normal",
		type: "Dark",
		zMovePower: 140,
		contestType: "Cool",
	},
	"vcreate": {
		accuracy: 95,
		basePower: 180,
		category: "Physical",
		desc: "Lowers the user's Speed, Defense, and Special Defense by 1 stage.",
		shortDesc: "Lowers the user's Defense, Sp. Def, Speed by 1.",
		id: "vcreate",
		name: "V-create",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		self: {
			boosts: {
				spe: -1,
				def: -1,
				spd: -1,
			},
		},
		secondary: null,
		target: "normal",
		type: "Fire",
		zMovePower: 220,
		contestType: "Cool",
	},
	"venomdrench": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Lowers the target's Attack, Special Attack, and Speed by 1 stage if the target is poisoned. Fails if the target is not poisoned.",
		shortDesc: "Lowers Atk/Sp. Atk/Speed of poisoned foes by 1.",
		id: "venomdrench",
		name: "Venom Drench",
		pp: 20,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target, source, move) {
			if (target.status === 'psn' || target.status === 'tox') {
				return !!this.boost({atk: -1, spa: -1, spe: -1}, target, source, move);
			}
			return false;
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Poison",
		zMoveBoost: {def: 1},
		contestType: "Clever",
	},
	"venoshock": {
		accuracy: 100,
		basePower: 65,
		category: "Special",
		desc: "Power doubles if the target is poisoned.",
		shortDesc: "Power doubles if the target is poisoned.",
		id: "venoshock",
		name: "Venoshock",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			let currentBoost = 1;
			if (pokemon.level> 100) {
				currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
			}
			if (target.status === 'psn' || target.status === 'tox') {
				currentBoost *=2;
				return this.chainModify(currentBoost);
			}
			return this.chainModify(currentBoost);
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"vicegrip": {
		accuracy: 100,
		basePower: 55,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "vicegrip",
		name: "Vice Grip",
		pp: 30,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"vinewhip": {
		accuracy: 100,
		basePower: 45,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "vinewhip",
		name: "Vine Whip",
		pp: 25,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 100,
		contestType: "Cool",
	},
	"vitalthrow": {
		accuracy: true,
		basePower: 70,
		category: "Physical",
		desc: "This move does not check accuracy.",
		shortDesc: "This move does not check accuracy. Goes last.",
		id: "vitalthrow",
		name: "Vital Throw",
		pp: 10,
		priority: -1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 140,
		contestType: "Cool",
	},
	"voltswitch": {
		accuracy: 100,
		basePower: 70,
		category: "Special",
		desc: "If this move is successful and the user has not fainted, the user switches out even if it is trapped and is replaced immediately by a selected party member. The user does not switch out if there are no unfainted party members, or if the target switched out using an Eject Button or through the effect of the Emergency Exit Ability.",
		shortDesc: "User switches out after damaging the target.",
		id: "voltswitch",
		name: "Volt Switch",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 140,
		contestType: "Cool",
	},
	"volttackle": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "Has a 10% chance to paralyze the target. If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil. 10% chance to paralyze target.",
		id: "volttackle",
		name: "Volt Tackle",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [33, 100],
		secondary: {
			chance: 10,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 190,
		contestType: "Cool",
	},
	"wakeupslap": {
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'slp' || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		desc: "Power doubles if the target is asleep. If the user has not fainted, the target wakes up.",
		shortDesc: "Power doubles if target is asleep, and wakes it.",
		id: "wakeupslap",
		name: "Wake-Up Slap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onHit(target) {
			if (target.status === 'slp') target.cureStatus();
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
		zMovePower: 140,
		contestType: "Tough",
	},
	"waterfall": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to flinch the target.",
		id: "waterfall",
		name: "Waterfall",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Water",
		zMovePower: 160,
		contestType: "Tough",
	},
	"watergun": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		shortDesc: "No additional effect.",
		id: "watergun",
		name: "Water Gun",
		pp: 25,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Cute",
	},
	"waterpledge": {
		accuracy: 100,
		basePower: 80,
		basePowerCallback(target, source, move) {
			if (['firepledge', 'grasspledge'].includes(move.sourceEffect)) {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		category: "Special",
		desc: "If one of the user's allies chose to use Fire Pledge or Grass Pledge this turn and has not moved yet, it takes its turn immediately after the user and the user's move does nothing. If combined with Fire Pledge, the ally uses Water Pledge with 150 power and a rainbow appears on the user's side for 4 turns, which doubles secondary effect chances but does not stack with the Serene Grace Ability. If combined with Grass Pledge, the ally uses Grass Pledge with 150 power and a swamp appears on the target's side for 4 turns, which quarters the Speed of each Pokemon on that side. When used as a combined move, this move gains STAB no matter what the user's type is. This move does not consume the user's Water Gem, and cannot be redirected by the Storm Drain Ability.",
		shortDesc: "Use with Grass or Fire Pledge for added effect.",
		id: "waterpledge",
		name: "Water Pledge",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onPrepareHit(target, source, move) {
			for (const action of this.queue) {
				// @ts-ignore
				if (!action.move || !action.pokemon || !action.pokemon.isActive || action.pokemon.fainted) continue;
				// @ts-ignore
				if (action.pokemon.side === source.side && ['firepledge', 'grasspledge'].includes(action.move.id)) {
					// @ts-ignore
					this.prioritizeAction(action);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'grasspledge') {
				move.type = 'Grass';
				move.forceSTAB = true;
			}
			if (move.sourceEffect === 'firepledge') {
				move.type = 'Water';
				move.forceSTAB = true;
			}
		},
		onHit(target, source, move) {
			if (move.sourceEffect === 'firepledge') {
				source.side.addSideCondition('waterpledge');
			}
			if (move.sourceEffect === 'grasspledge') {
				target.side.addSideCondition('grasspledge');
			}
		},
		effect: {
			duration: 4,
			onStart(targetSide) {
				this.add('-sidestart', targetSide, 'Water Pledge');
			},
			onEnd(targetSide) {
				this.add('-sideend', targetSide, 'Water Pledge');
			},
			onModifyMove(move) {
				if (move.secondaries && move.id !== 'secretpower') {
					this.debug('doubling secondary chance');
					for (const secondary of move.secondaries) {
						if (secondary.chance) secondary.chance *= 2;
					}
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"waterpulse": {
		accuracy: 100,
		basePower: 60,
		category: "Special",
		desc: "Has a 20% chance to confuse the target.",
		shortDesc: "20% chance to confuse the target.",
		id: "waterpulse",
		name: "Water Pulse",
		pp: 20,
		priority: 0,
		flags: {protect: 1, pulse: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'confusion',
		},
		target: "any",
		type: "Water",
		zMovePower: 120,
		contestType: "Beautiful",
	},
	"watershuriken": {
		accuracy: 100,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.template.species === 'Greninja-Ash' && pokemon.hasAbility('battlebond')) {
				return move.basePower + 5;
			}
			return move.basePower;
		},
		category: "Special",
		desc: "Hits two to five times. Has a 1/3 chance to hit two or three times, and a 1/6 chance to hit four or five times. If one of the hits breaks the target's substitute, it will take damage for the remaining hits. If the user has the Skill Link Ability, this move will always hit five times. If the user is an Ash-Greninja with the Battle Bond Ability, this move has a power of 20 and always hits three times. Has a 10% chance to cause bleeding each hit.",
		shortDesc: "Usually goes first. Hits 2-5 times in one turn. 10% chance of bleed each hit.",
		id: "watershuriken",
		name: "Water Shuriken",
		pp: 20,
		priority: 1,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		multihit: [2, 5],
		secondary: {
			chance: 10,
			status: 'bld',
		},
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Cool",
	},
	"watersport": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all Fire-type attacks used by any active Pokemon have their power multiplied by 0.33. Fails if this effect is already active.",
		shortDesc: "For 5 turns, Fire-type attacks have 1/3 power.",
		id: "watersport",
		name: "Water Sport",
		pp: 15,
		priority: 0,
		flags: {},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'watersport',
		effect: {
			duration: 5,
			onStart(side, source) {
				this.add('-fieldstart', 'move: Water Sport', '[of] ' + source);
			},
			onBasePowerPriority: 1,
			onBasePower(basePower, attacker, defender, move) {
				if (move.type === 'Fire') {
					this.debug('water sport weaken');
					return this.chainModify([0x548, 0x1000]);
				}
			},
			onResidualOrder: 21,
			onEnd() {
				this.add('-fieldend', 'move: Water Sport');
			},
		},
		secondary: null,
		target: "all",
		type: "Water",
		zMoveBoost: {spd: 1},
		contestType: "Cute",
	},
	"waterspout": {
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
		desc: "Power is equal to (user's current HP * 150 / user's maximum HP), rounded down, but not less than 1.",
		shortDesc: "Less power as user's HP decreases. Hits foe(s).",
		id: "waterspout",
		name: "Water Spout",
		pp: 5,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Water",
		zMovePower: 200,
		contestType: "Beautiful",
	},
	"weatherball": {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		desc: "Power doubles if a weather condition other than Delta Stream is active, and this move's type changes to match. Ice type during Hail, Water type during Primordial Sea or Rain Dance, Rock type during Sandstorm, and Fire type during Desolate Land or Sunny Day.",
		shortDesc: "Power doubles and type varies in each weather.",
		id: "weatherball",
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onModifyMove(move) {
			switch (this.field.effectiveWeather()) {
			case 'sunnyday':
			case 'desolateland':
				move.type = 'Fire';
				move.basePower *= 2;
				break;
			case 'raindance':
			case 'primordialsea':
				move.type = 'Water';
				move.basePower *= 2;
				break;
			case 'sandstorm':
				move.type = 'Rock';
				move.basePower *= 2;
				break;
			case 'hail':
				move.type = 'Ice';
				move.basePower *= 2;
				break;
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	"whirlpool": {
		accuracy: 85,
		basePower: 35,
		category: "Special",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "whirlpool",
		name: "Whirlpool",
		pp: 15,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Water",
		zMovePower: 100,
		contestType: "Beautiful",
	},
	"whirlwind": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The target is forced to switch out and be replaced with a random unfainted ally. Fails if the target is the last unfainted Pokemon in its party, or if the target used Ingrain previously or has the Suction Cups Ability.",
		shortDesc: "Forces the target to switch to a random ally.",
		id: "whirlwind",
		name: "Whirlwind",
		pp: 20,
		priority: -6,
		flags: {reflectable: 1, mirror: 1, authentic: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		forceSwitch: true,
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"wideguard": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "The user and its party members are protected from moves made by other Pokemon, including allies, during this turn that target all adjacent foes or all adjacent Pokemon. This move modifies the same 1/X chance of being successful used by other protection moves, where X starts at 1 and triples each time this move is successfully used, but does not use the chance to check for failure. X resets to 1 if this move fails, if the user's last move used is not Baneful Bunker, Detect, Endure, King's Shield, Protect, Quick Guard, Spiky Shield, or Wide Guard, or if it was one of those moves and the user's protection was broken. Fails if the user moves last this turn or if this move is already in effect for the user's side.",
		shortDesc: "Protects allies from multi-target moves this turn.",
		id: "wideguard",
		name: "Wide Guard",
		pp: 10,
		priority: 3,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		sideCondition: 'wideguard',
		onTryHitSide(side, source) {
			return !!this.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		effect: {
			duration: 1,
			onStart(target, source) {
				this.add('-singleturn', source, 'Wide Guard');
			},
			onTryHitPriority: 4,
			onTryHit(target, source, move) {
				// Wide Guard blocks all spread moves
				if (move && move.target !== 'allAdjacent' && move.target !== 'allAdjacentFoes') {
					return;
				}
				if (move.isZ) {
					target.getMoveHitData(move).zBrokeProtect = true;
					return;
				}
				this.add('-activate', target, 'move: Wide Guard');
				let lockedmove = source.getVolatile('lockedmove');
				if (lockedmove) {
					// Outrage counter is reset
					if (source.volatiles['lockedmove'].duration === 2) {
						delete source.volatiles['lockedmove'];
					}
				}
				return this.NOT_FAIL;
			},
		},
		secondary: null,
		target: "allySide",
		type: "Rock",
		zMoveBoost: {def: 1},
		contestType: "Tough",
	},
	"wildcharge": {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 1/4 the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 1/4 recoil.",
		id: "wildcharge",
		name: "Wild Charge",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [1, 4],
		secondary: null,
		target: "normal",
		type: "Electric",
		zMovePower: 175,
		contestType: "Tough",
	},
	"willowisp": {
		accuracy: 85,
		basePower: 0,
		category: "Status",
		desc: "Burns the target.",
		shortDesc: "Burns the target.",
		id: "willowisp",
		name: "Will-O-Wisp",
		pp: 15,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		status: 'brn',
		secondary: null,
		target: "normal",
		type: "Fire",
		zMoveBoost: {atk: 1},
		contestType: "Beautiful",
	},
	"wingattack": {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		shortDesc: "No additional effect.",
		id: "wingattack",
		name: "Wing Attack",
		pp: 35,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "any",
		type: "Flying",
		zMovePower: 120,
		contestType: "Cool",
	},
	"wish": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "At the end of the next turn, the Pokemon at the user's position has 1/2 of the user's maximum HP restored to it, rounded half up. Fails if this move is already in effect for the user's position.",
		shortDesc: "Next turn, 50% of the user's max HP is restored.",
		id: "wish",
		name: "Wish",
		pp: 10,
		priority: 0,
		flags: {snatch: 1, heal: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		slotCondition: 'Wish',
		effect: {
			duration: 2,
			onStart(pokemon, source) {
				this.effectData.hp = source.maxhp / 2;
			},
			onResidualOrder: 4,
			onEnd(target) {
				if (target && !target.fainted) {
					let damage = this.heal(this.effectData.hp, target, target);
					if (damage) this.add('-heal', target, target.getHealth, '[from] move: Wish', '[wisher] ' + this.effectData.source.name);
				}
			},
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {spd: 1},
		contestType: "Cute",
	},
	"withdraw": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Defense by 1 stage.",
		shortDesc: "Raises the user's Defense by 1.",
		id: "withdraw",
		name: "Withdraw",
		pp: 40,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			def: 1,
		},
		secondary: null,
		target: "self",
		type: "Water",
		zMoveBoost: {def: 1},
		contestType: "Cute",
	},
	"wonderroom": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, all active Pokemon have their Defense and Special Defense stats swapped. Stat stage changes are unaffected. If this move is used during the effect, the effect ends.",
		shortDesc: "For 5 turns, all Defense and Sp. Def stats switch.",
		id: "wonderroom",
		name: "Wonder Room",
		pp: 10,
		priority: 0,
		flags: {mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		pseudoWeather: 'wonderroom',
		effect: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasAbility('persistent')) {
					this.add('-activate', source, 'ability: Persistent', effect);
					return 7;
				}
				return 5;
			},
			onStart(side, source) {
				this.add('-fieldstart', 'move: Wonder Room', '[of] ' + source);
			},
			onRestart(target, source) {
				this.field.removePseudoWeather('wonderroom');
			},
			// Swapping defenses implemented in sim/pokemon.js:Pokemon#calculateStat and Pokemon#getStat
			onResidualOrder: 24,
			onEnd() {
				this.add('-fieldend', 'move: Wonder Room');
			},
		},
		secondary: null,
		target: "all",
		type: "Psychic",
		zMoveBoost: {spd: 1},
		contestType: "Clever",
	},
	"woodhammer": {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		desc: "If the target lost HP, the user takes recoil damage equal to 33% the HP lost by the target, rounded half up, but not less than 1 HP.",
		shortDesc: "Has 33% recoil.",
		id: "woodhammer",
		name: "Wood Hammer",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		recoil: [33, 100],
		secondary: null,
		target: "normal",
		type: "Grass",
		zMovePower: 190,
		contestType: "Tough",
	},
	"workup": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Raises the user's Attack and Special Attack by 1 stage.",
		shortDesc: "Raises the user's Attack and Sp. Atk by 1.",
		id: "workup",
		name: "Work Up",
		pp: 30,
		priority: 0,
		flags: {snatch: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		boosts: {
			atk: 1,
			spa: 1,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMoveBoost: {atk: 1},
		contestType: "Tough",
	},
	"wormhole": {
		accuracy: 100,
		basePower: 40,
		category: "Special",
		desc: "No additional effect.",
		shortDesc: "Usually goes first.",
		id: "wormhole",
		name: "Wormhole",
		pp: 20,
		priority: 1,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMovePower: 100,
		contestType: "Cool",
	},
	"worryseed": {
		accuracy: 100,
		basePower: 0,
		category: "Status",
		desc: "Causes the target's Ability to become Insomnia. Fails if the target's Ability is Battle Bond, Comatose, Disguise, Insomnia, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, Truant, or Zen Mode.",
		shortDesc: "The target's Ability becomes Insomnia.",
		id: "worryseed",
		name: "Worry Seed",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1, mystery: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryHit(pokemon) {
			let bannedAbilities = ['battlebond', 'comatose', 'disguise', 'insomnia', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'truant', 'zenmode'];
			if (bannedAbilities.includes(pokemon.ability)) {
				return false;
			}
		},
		onHit(pokemon) {
			let oldAbility = pokemon.setAbility('insomnia');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Insomnia', '[from] move: Worry Seed');
				if (pokemon.status === 'slp') {
					pokemon.cureStatus();
				}
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Grass",
		zMoveBoost: {spe: 1},
		contestType: "Clever",
	},
	"wrap": {
		accuracy: 90,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'bld') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
		desc: "Prevents the target from switching for four or five turns (seven turns if the user is holding Grip Claw). Causes damage to the target equal to 1/8 of its maximum HP (1/6 if the user is holding Binding Band), rounded down, at the end of each turn during effect. The target can still switch out if it is holding Shed Shell or uses Baton Pass, Parting Shot, U-turn, or Volt Switch. The effect ends if either the user or the target leaves the field, or if the target uses Rapid Spin or Substitute successfully. This effect is not stackable or reset by using this or another binding move.",
		shortDesc: "Traps and damages the target for 4-5 turns.",
		id: "wrap",
		name: "Wrap",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'partiallytrapped',
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 100,
		contestType: "Tough",
	},
	"wringout": {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			return Math.floor(Math.floor((120 * (100 * Math.floor(target.hp * 4096 / target.maxhp)) + 2048 - 1) / 4096) / 100) || 1;
		},
		category: "Special",
		desc: "Power is equal to 120 * (target's current HP / target's maximum HP), rounded half down, but not less than 1.",
		shortDesc: "More power the more HP the target has left.",
		id: "wringout",
		name: "Wring Out",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 190,
		contestType: "Tough",
	},
	"xscissor": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		shortDesc: "Has a 20% chance to cause bleeding.",
		id: "xscissor",
		name: "X-Scissor",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, sword: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			status: 'bld',
		},
		target: "normal",
		type: "Bug",
		zMovePower: 160,
		contestType: "Cool",
	},
	"yawn": {
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Causes the target to fall asleep at the end of the next turn. Fails when used if the target cannot fall asleep or if it already has a major status condition. At the end of the next turn, if the target is still active, does not have a major status condition, and can fall asleep, it falls asleep. If the target becomes affected, this effect cannot be prevented by Safeguard or a substitute, or by falling asleep and waking up during the effect.",
		shortDesc: "Puts the target to sleep after 1 turn.",
		id: "yawn",
		name: "Yawn",
		pp: 10,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		volatileStatus: 'yawn',
		onTryHit(target) {
			if (target.status || !target.runStatusImmunity('slp')) {
				return false;
			}
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onStart(target, source) {
				this.add('-start', target, 'move: Yawn', '[of] ' + source);
			},
			onResidualOrder: 19,
			onEnd(target) {
				this.add('-end', target, 'move: Yawn', '[silent]');
				target.trySetStatus('slp', this.effectData.source);
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMoveBoost: {spe: 1},
		contestType: "Cute",
	},
	"zapcannon": {
		accuracy: 50,
		basePower: 120,
		category: "Special",
		desc: "Has a 100% chance to paralyze the target.",
		shortDesc: "100% chance to paralyze the target.",
		id: "zapcannon",
		name: "Zap Cannon",
		pp: 5,
		priority: 0,
		flags: {bullet: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 100,
			status: 'par',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 190,
		contestType: "Cool",
	},
	"zenheadbutt": {
		accuracy: 90,
		basePower: 80,
		category: "Physical",
		desc: "Has a 20% chance to flinch the target.",
		shortDesc: "20% chance to flinch the target.",
		id: "zenheadbutt",
		name: "Zen Headbutt",
		pp: 15,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 20,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Psychic",
		zMovePower: 160,
		contestType: "Clever",
	},
	"zingzap": {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
		desc: "Has a 30% chance to flinch the target.",
		shortDesc: "30% chance to flinch the target.",
		id: "zingzap",
		name: "Zing Zap",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		secondary: {
			chance: 30,
			volatileStatus: 'flinch',
		},
		target: "normal",
		type: "Electric",
		zMovePower: 160,
		contestType: "Cool",
	},
	"zippyzap": {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		desc: "Will always result in a critical hit.",
		shortDesc: "Nearly always goes first. Always crits.",
		id: "zippyzap",
		isNonstandard: "LGPE",
		isUnreleased: true,
		name: "Zippy Zap",
		pp: 15,
		priority: 2,
		flags: {contact: 1, protect: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		willCrit: true,
		secondary: null,
		target: "normal",
		type: "Electric",
		contestType: "Cool",
	},
};

exports.BattleMovedex = BattleMovedex;
