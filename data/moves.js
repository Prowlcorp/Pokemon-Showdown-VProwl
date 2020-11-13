/*

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

export const Moves: {[moveid: string]: MoveData} = {
	"10000000voltthunderbolt": {
		accuracy: true,
		basePower: 195,
		category: "Special",
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
	},
	absorb: {
		accuracy: 100,
		basePower: 20,
		category: "Special",
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
	},
	abyssalcrush: {
		accuracy: 30,
		basePower: 0,
		category: "Special",
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
	},
	accelerock: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	acid: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	acidarmor: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	aciddownpour: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	acidspray: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	acrobatics: {
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
	},
	acupressure: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'crit2'},
	},
	aerialace: {
		accuracy: true,
		basePower: 60,
		category: "Physical",
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
	},
	aeroblast: {
		accuracy: 95,
		basePower: 100,
		category: "Special",
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
	},
	afteryou: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			let action = this.queue.willMove(target);
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
		zMove: {boost: {spe: 2}},
	},
	agility: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	aircutter: {
		accuracy: 95,
		basePower: 60,
		category: "Special",
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
	},
	airslash: {
		accuracy: 95,
		basePower: 75,
		category: "Special",
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
	},
	alloutpummeling: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	allycharge: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 2}},
	},
	allyswitch: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 2}},
	},
	amnesia: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	anchorshot: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	ancientpower: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	angelwings: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Angel Wings",
		pp: 5,
		priority: -2,
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
			spe: 2,
			evasion: 1,
		},
		volatileStatus: 'angelwings',
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	aquajet: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	aquaring: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	aquatail: {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
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
	},
	armthrust: {
		accuracy: 100,
		basePower: 15,
		category: "Physical",
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
	},
	aromatherapy: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	aromaticmist: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 2}},
	},
	assist: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
	},
	assurance: {
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
	},
	astonish: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
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
	},
	attackorder: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
//CHANGE
	attract: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
/*	"auraiaido": {
		accuracy: 95,
		basePower: 120,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles.auraiaido || move.hit === 1) {
				pokemon.addVolatile('auraiaido');
			}
			return this.clampIntRange(move.basePower / pokemon.volatiles.auraiaido.multiplier, 40, 120);
		},
		category: "Physical",
		defensiveCategory: "Special",
		name: "Aura Iaido",
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
		onModifyMove(move, source) {
			if(source.volatiles.auraiaido) {
				if(this.effectData.multiplier === 1) move.priority = 1;
				if(this.effectData.multiplier === 2) move.priority = 2;
				if(this.effectData.multiplier === 3) move.priority = 3;
			}
		},
		condition: {
			duration: 2,
			onStart() {
				this.effectData.multiplier = 1;
			},
			onRestart() {
				if (this.effectData.multiplier < 3) {
					this.effectData.multiplier <<= 1;
				}
				this.effectData.duration = 2;
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},*/
	aurarage: { 
		accuracy: 95,
		basePower: 90,
		category: "Special",
		defensiveCategory: "Physical",
		name: "Aura Rage",
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
			volatileStatus: 'aurarage',
		},
		condition: {
			duration: 1,
			onStart(pokemon) {
				this.add('-singleturn', pokemon, 'move: Aura Rage');
			},
			onEffectiveness(typeMod, target, type, move) {
				if (type === 'Steel') return 0;
			},
			onSourceModifyDamage(damage, source, target, move) {
				if(move.flags.contact && move.category === "Special") {
					this.add('-activate', target, 'move: Aura Rage');
					return this.chainModify(0.375);
				}
				if(move.flags.contact) {
					this.add('-activate', target, 'move: Aura Rage');
					return this.chainModify(0.5);
				}
				if(move.category === "Special") {
					this.add('-activate', target, 'move: Aura Rage');
					return this.chainModify(0.75);
				}
			},
		},
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	aurasealingstrike: { 
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			if(pokemon.sealing === (this.turn-1)) return 100;
			if(move.hit === 1) return 10;
			return 20 * (move.hit-1);
		},
		category: "Special",
		defensiveCategory: "Physical",
		name: "Aura Sealing Strike",
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
			if(move.hit === 1 && source.sealing === (this.turn-1)) {
				source.sealing = false;
				target.addVolatile('aurasealingstrike');
			}
			if(move.hit === 4) {
				if (target.lastMove && !target.lastMove.isZ) {
					let ppDeducted = target.deductPP(target.lastMove.id, 4);
					if (ppDeducted) {
						this.add("-activate", target, 'move: Aura Sealing Strike', this.getMove(target.lastMove.id).name, ppDeducted);
					}
				}
			}
			if(move.hit === 5) {
				if (target.lastMove && !target.lastMove.isZ) {
					let ppDeducted = target.deductPP(target.lastMove.id, 7);
					if (ppDeducted) {
						this.add("-activate", target, 'move: Aura Sealing Strike', this.getMove(target.lastMove.id).name, ppDeducted);
					}
				}
				source.sealing = this.turn;
			}
		},
		onTryHit(target, source, move) {
			if (move.hit === 2) {
				move.self = {boosts: {spe: 1}};
			}
			if(move.self && move.hit !== 2) {
				move.self = null;
			}
		},
		onModifyMove(move, pokemon, target) {
			if (pokemon.getStat('atk', false, true) > pokemon.getStat('spa', false, true)) move.category = 'Physical';
			if(pokemon.sealing === (this.turn-1)) {
				move.multihit = 1;
			}
		},
		condition: {
			onStart(target) {
				this.add('-start', target, 'Aura Sealing Strike');
			},
			onModifyMovePriority: -2,
			onModifyMove(move) {
				if (move.id !== 'struggle') {
					this.debug('Aura Sealing Strike making moves typeless');
					move.type = '???';
				}
			},
		},
		multihit: 5,
		multiaccuracy: true,
		secondary: null,
		target: "normal",
		type: "Fighting",
	},
	aurasphere: {
		accuracy: true,
		basePower: 80,
		category: "Special",
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
	},
	auricdoubleslash: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
		name: "Auric Double Slash",
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
		multihit: 2,
		secondary: {
			chance: 10,
			status: 'bld',
		},
		target: "normal",
		type: "Fighting",
	},
	aurorabeam: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	auroraveil: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 1}},
	},
	autotomize: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	avalanche: {
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
	},
	axestrike: {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
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
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.getEffectiveness('Steel', type);
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
			}, {
				chance: 50,
				status: 'bld',
			},
		],
		target: "normal",
		type: "Dragon",
	},
	babydolleyes: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	banefulbunker: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	barrage: {
		accuracy: 85,
		basePower: 15,
		category: "Physical",
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
	},
	barrier: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	batonpass: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	beakblast: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
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
		condition: {
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
	},
	beatup: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target, move) {
			// @ts-ignore
			return 5 + Math.floor(move.allies.shift().template.baseStats.atk / 10);
		},
		category: "Physical",
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
	},
	belch: {
		accuracy: 90,
		basePower: 120,
		category: "Special",
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
	},
	bellydrum: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	bestow: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 2}},
	},
	bide: {
		accuracy: true,
		basePower: 0,
		category: "Physical",
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
		condition: {
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
										name: "Bide",
						accuracy: true,
						damage: this.effectData.totalDamage * 2,
						category: "Physical",
						priority: 1,
						flags: {contact: 1, protect: 1},
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
	},
	bijuubomb: {
		accuracy: 85,
		basePower: 200,
		category: "Physical",
		defensiveCategory: "Special",
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
	},
	bind: {
		accuracy: 85,
		basePower: 15,
		category: "Physical",
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
	},
	bite: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	blackholeeclipse: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	blastburn: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
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
	},
	blazekick: {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
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
	},
	blizzard: {
		accuracy: 70,
		basePower: 110,
		category: "Special",
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
	},
	block: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	bloodscythe: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return pokemon.hp-1;
		},
		category: "Physical",
		name: "Blood Scythe",
		pp: 5,
		flags: {protect: 1, mirror: 1, distance: 1},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(pokemon, target, move) {
			if (pokemon.hp === 1) {
				this.add('-fail', pokemon, 'move: Blood Scythe');
				this.attrLastMove('[still]');
				return null;
			}
		},
		onTryHit(target) {
			if (target.hasType('Ghost')) {
				if(!target.addedType || (target.addedType && target.addedType !== 'Ghost')) {
					this.add('-immune', target);
					return null;
				}
			}
		},
		onEffectiveness(typeMod, target, type, move) {
			return typeMod + this.getEffectiveness('Poison', type);
		},
		onHit(target, pokemon) {
			pokemon.sethp(1);
			this.add('-sethp', pokemon, pokemon.getHealth, '[from] move: Blood Scythe');
		},
		priority: 0,
		secondary: {
			status: 'psn',
		},
		target: "any",
		type: "Psychic",
	},
	bloomdoom: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	blueflare: {
		accuracy: 85,
		basePower: 130,
		category: "Special",
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
	},
	bodyslam: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
	},
	boltbeak: {
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Bolt Beak damage boost');
				return move.basePower * 2;
			}
			this.debug('Bolt Beak NOT boosted');
			return move.basePower;
		},
		category: "Physical",
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
	boltstrike: {
		accuracy: 85,
		basePower: 130,
		category: "Physical",
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
	},
	boneclub: {
		accuracy: 85,
		basePower: 65,
		category: "Physical",
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
	},
	bonemerang: {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
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
	},
	bonerush: {
		accuracy: 90,
		basePower: 25,
		category: "Physical",
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
	},
	boomburst: {
		accuracy: 100,
		basePower: 140,
		category: "Special",
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
	},
	bounce: {
		accuracy: 85,
		basePower: 85,
		category: "Physical",
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
		condition: {
			duration: 2,
			onTryImmunity(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'helpinghand', 'tornadobacklash'].includes(move.id)) {
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
				if (move.id === 'gust' || move.id === 'twister' || move.id === 'tornadobacklash') {
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
	},
	branchpoke: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	bravebird: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	breakingswipe: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	breakneckblitz: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	breakstep: {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
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
	},
	brickbreak: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	brine: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	brutalslice: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
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
	},
	brutalswing: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	bubble: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	bubblebeam: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	bugbite: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	bugbuzz: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	bulkup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	bulldoze: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	bulletpunch: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	bulletseed: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
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
	},
	burnup: {
		accuracy: 100,
		basePower: 130,
		category: "Special",
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
	},
	calmmind: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	camouflage: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {evasion: 1}},
	},
	captivate: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 2}},
	},
	catastropika: {
		accuracy: true,
		basePower: 210,
		category: "Physical",
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
	},
	celebrate: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	charge: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	chargebeam: {
		accuracy: 90,
		basePower: 50,
		category: "Special",
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
	},
	charm: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	chatter: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	chipaway: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	circlethrow: {
		accuracy: 90,
		basePower: 60,
		category: "Physical",
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
	},
	clamp: {
		accuracy: 85,
		basePower: 35,
		category: "Physical",
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
	},
	clangingscales: {
		accuracy: 100,
		basePower: 110,
		category: "Special",
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
	},
	clangoroussoulblaze: {
		accuracy: true,
		basePower: 185,
		category: "Special",
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
	},
	clearsmog: {
		accuracy: true,
		basePower: 50,
		category: "Special",
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
	},
	closecombat: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	coil: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	cometpunch: {
		accuracy: 85,
		basePower: 18,
		category: "Physical",
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
	},
	confide: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	confuseray: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	confusion: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
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
	},
	constrict: {
		accuracy: 100,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'bld') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
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
	},
	continentalcrush: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	continuouscombat: {
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles.continuouscombat || move.hit === 1) {
				pokemon.addVolatile('continuouscombat');
			}
			return this.clampIntRange(move.basePower * pokemon.volatiles.continuouscombat.multiplier, 1, 160);
		},
		category: "Physical",
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
		condition: {
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
	},
	controlspore: {
		accuracy: 85,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1, spd: 1}},
	},
	conversion: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	conversion2: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	copycat: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {accuracy: 1}},
	},
	coreenforcer: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
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
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		onAfterSubDamage(damage, target) {
			if (target.getAbility().isPermanent) return;
			if (target.newlySwitched || this.queue.willMove(target)) return;
			target.addVolatile('gastroacid');
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "Dragon",
	},
	corkscrewcrash: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	corrode: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	cosmicpower: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	cottonguard: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	cottonspore: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	counter: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['counter']) return 0;
			return pokemon.volatiles['counter'].damage || 1;
		},
		category: "Physical",
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
		condition: {
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
	},
	courtchange: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	covet: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	crabhammer: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
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
	},
	craftyshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct();
		},
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	crosschop: {
		accuracy: 80,
		basePower: 100,
		category: "Physical",
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
	},
	crosspoison: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	crunch: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	crushclaw: {
		accuracy: 95,
		basePower: 75,
		category: "Physical",
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
	},
	crushgrip: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			return Math.floor(Math.floor((120 * (100 * Math.floor(target.hp * 4096 / target.maxhp)) + 2048 - 1) / 4096) / 100) || 1;
		},
		category: "Physical",
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
	},
	cryokick: {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
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
	},
	cryoslash: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	curse: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'curse'},
	},
	cut: {
		accuracy: 95,
		basePower: 50,
		category: "Physical",
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
	},
	darkepitaph: {
		accuracy: 30,
		basePower: 0,
		category: "Special",
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
	},
	darkestlariat: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
	},
	darkmatter: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
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
	},
	darkpulse: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	darkvoid: {
		accuracy: 50,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	dazzlinggleam: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	decorate: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'redirect'},
	},
	defendorder: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	defensecurl: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
			noCopy: true,
		},
		secondary: null,
		target: "self",
		type: "Normal",
		zMove: {boost: {accuracy: 1}},
	},
	defog: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {accuracy: 1}},
	},
	destinybond: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'redirect'},
	},
	detect: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		secondary: null,
		target: "self",
		type: "Fighting",
		zMove: {boost: {evasion: 1}},
	},
	devastatingdrake: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	devour: {
		accuracy: 120,
		basePower: 80,
		category: "Special",
		name: "Devour",
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
		type: "Dragon",
	},
	diamondstorm: {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
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
	},
	dig: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
		condition: {
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
	},
	disable: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
			duration: 5,
			noCopy: true, // doesn't get copied by Baton Pass
			onStart(pokemon, source, effect) {
				// The target hasn't taken its turn, or Cursed Body activated and the move was not used through Dancer or Instruct
				if (this.queue.willMove(pokemon) || (pokemon === this.activePokemon && this.activeMove && !this.activeMove.isExternal)) {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	disarmingvoice: {
		accuracy: true,
		basePower: 40,
		category: "Special",
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
	},
	discharge: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	dive: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
		condition: {
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
	},
	dizzypunch: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	doomdesire: {
		accuracy: 100,
		basePower: 140,
		category: "Special",
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
	},
	doubleedge: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	doublehit: {
		accuracy: 90,
		basePower: 35,
		category: "Physical",
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
	},
	doublekick: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
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
	},
	doubleslap: {
		accuracy: 85,
		basePower: 25,
		category: "Physical",
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
	},
	doubleteam: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	dracojet: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	dracometeor: {
		accuracy: 90,
		basePower: 130,
		category: "Special",
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
	},
	dragonascent: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	dragonbreath: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	dragonclaw: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	dragondance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	dragondarts: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},
	dragonhammer: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	dragonpulse: {
		accuracy: 100,
		basePower: 85,
		category: "Special",
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
	},
	dragonrage: {
		accuracy: 100,
		basePower: 0,
		damage: 40,
		category: "Special",
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
	},
	dragonrush: {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
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
	},
	dragontail: {
		accuracy: 90,
		basePower: 60,
		category: "Physical",
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
	},
	drainingkiss: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
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
	},
	drainpunch: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	drakonvoice: {
		accuracy: 90,
		basePower: 105,
		category: "Special",
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
	},
	dreameater: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
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
	},
	drillpeck: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	drillrun: {
		accuracy: 95,
		basePower: 80,
		category: "Physical",
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
	},
	drumbeating: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	dualchop: {
		accuracy: 90,
		basePower: 40,
		category: "Physical",
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
	},
	dynamicentry: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	dynamicpunch: {
		accuracy: 50,
		basePower: 100,
		category: "Physical",
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
	},
	earthpower: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	earthquake: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
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
	},
	echoedvoice: {
		accuracy: 100,
		basePower: 40,
		basePowerCallback() {
			if (this.field.pseudoWeather.echoedvoice) {
				return 40 * this.field.pseudoWeather.echoedvoice.multiplier;
			}
			return 40;
		},
		category: "Special",
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
		condition: {
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
	},
	echolocation: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'crit2'},
	},
	eerieimpulse: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	eggbomb: {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
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
	},
	electricterrain: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 1}},
	},
	electrify: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			if (!this.queue.willMove(target) && target.activeTurns) return false;
		},
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	electroball: {
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
	},
	electroweb: {
		accuracy: 95,
		basePower: 55,
		category: "Special",
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
	},
	embargo: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	ember: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	encore: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
				if (!this.queue.willMove(target)) {
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
		zMove: {boost: {spe: 1}},
	},
	endeavor: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon, target) {
			return target.hp - pokemon.hp;
		},
		category: "Physical",
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
	},
	endure: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	energyball: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	entrainment: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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

			const additionalBannedSourceAbilities = [
				'noability', 'bijuuboost', 'crisisevolution', 'flowergift', 'forecast', 'illusion', 'imposter', 'misdirection', 'neutralizinggas', 'powerofalchemy', 'receiver', 'shadowstrikesealed', 'trace', 'wonderguard'
			];
			if (
				target.ability === source.ability ||
				target.getAbility().isPermanent || target.ability === 'truant' ||
				source.getAbility().isPermanent || additionalBannedSourceAbilities.includes(source.ability)
			) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = target.setAbility(source.ability);
			if (oldAbility) {
				this.add('-ability', target, target.getAbility().name, '[from] move: Entrainment');
				if (target.side !== source.side) target.volatileStaleness = 'external';
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spd: 1}},
	},
	epicenter: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	eruption: {
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
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
	},
	evowavedestruction: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
		name: "Evo-Wave Destruction",
		pp: 5,
		priority: 0,
		flags: {protect: 1, reflectable: 1, mirror: 1},
		basePowerCallback(pokemon, target, move) {
			if (target.baseTemplate.prevo) return move.basePower * 2;
			return move.basePower;
		},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.level> 100) {
				let currentBoost = Math.floor((pokemon.level-100)/10);
				currentBoost = currentBoost/20+1;
				return this.chainModify(currentBoost);
			}
		},
		onTryMove(pokemon, target, move) {
			if (pokemon.baseTemplate.baseSpecies === 'Vee' && move.type !== "???") {
				return;
			}
			this.add('-fail', pokemon, 'move: Evo-Wave Destruction');
			this.hint("Only a Pokemon whose species is Vee and form is not base can use this move.");
			return null;
		},
		onModifyMove(move, pokemon, target) {
			if (pokemon.template.species !== 'Vee' && pokemon.template.baseSpecies === 'Vee') {
				move.type = pokemon.types[0];
			}
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
			move.secondaries = [];
			if (move.type === "Electric") {
				move.secondaries.push({
					chance: 40,
					status: 'par',
				});
			}
			if (move.type === "Fire") {
				move.secondaries.push({
					chance: 40,
					status: 'brn',
				});
			}
			if (move.type === "Ice") {
				move.secondaries.push({
					chance: 40,
					status: 'frz',
				});
			}
			if (move.type === "Psychic") {
				move.secondaries.push({
					chance: 40,
					status: 'slp',
				});
			}
			if (move.type === "Dark") {
				move.secondaries.push({
					chance: 40,
					volatileStatus: 'flinch',
				});
			}
			if (move.type === "Grass") {
				move.drain = [1,2];
			}
			if (move.type === "Water") {
				move.secondaries.push({
					boosts: {
						def: -1,
						spd: -1,
					},
				});
			}
			if (move.type === "Fairy") {
				move.stealsBoosts = true;
				// Boost stealing implemented in scripts.js
			}
		},
		onHit(target, pokemon, move) {
			if (pokemon.baseTemplate.baseSpecies === 'Vee' && !pokemon.transformed) {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				pokemon.formeChange('Vee', this.effect, false, '[msg]');
			}
		},
		secondary: null,
		target: "allAdjacentFoes",
		type: "???",
	},
	explosion: {
		accuracy: 100,
		basePower: 250,
		category: "Physical",
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
	},
	extrasensory: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	extremeevoboost: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
	},
	extremespeed: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	facade: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	fairylock: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	fairywind: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	fakeout: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	faketears: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	falsesurrender: {
		accuracy: true,
		basePower: 80,
		category: "Physical",
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
	falseswipe: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	featherdance: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	feint: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
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
	},
	feintattack: {
		accuracy: true,
		basePower: 60,
		category: "Physical",
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
	},
	fellstinger: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},
	fierydance: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	finalfeather: {
		accuracy: 100,
		basePower: 130,
		category: "Physical",
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
	},
	finalgambit: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			let damage = pokemon.hp;
			pokemon.faint();
			return damage;
		},
		category: "Special",
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
	},
	fireblast: {
		accuracy: 85,
		basePower: 110,
		category: "Special",
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
	},
	firefang: {
		accuracy: 95,
		basePower: 65,
		category: "Physical",
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
	},
	firelash: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	firepledge: {
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
/*
		basePowerCallback(target, source, move) {	//This goes on close combat
			if (['aurasphere'].includes(move.sourceEffect) && source.template.species === 'Zenkari') {
				this.add('-combine');
				return 150;
			}
			return 80;
		},
		onPrepareHit(target, source, move) { //this goes on aura sphere
			for (const action of this.queue) {
				// @ts-ignore
				if (!action.move || !action.pokemon || !action.pokemon.isActive || action.pokemon.fainted) continue;
				// @ts-ignore
				if (action.pokemon.side === source.side && ['closecombat'].includes(action.move.id)) {
					// @ts-ignore
					//this.prioritizeAction(action);
					this.add('-waiting', source, action.pokemon);
					return null;
				}
			}
		},
		onModifyMove(move) {
			if (move.sourceEffect === 'aurasphere') {
				move.onTryHit = function(target,pokemon) {
					this.useMove('hyperaurafisttag', pokemon, target);
					return null;
				}
			}
		},*/
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
		condition: {
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
	},
	firepunch: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	firespin: {
		accuracy: 85,
		basePower: 35,
		category: "Special",
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
	},
	firstimpression: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	fishiousrend: {
		accuracy: 100,
		basePower: 85,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Fishious Rend damage boost');
				return move.basePower * 2;
			}
			this.debug('Fishious Rend NOT boosted');
			return move.basePower;
		},
		category: "Physical",
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
	fissure: {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
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
	},
	flail: {
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
	},
	flameburst: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	flamecharge: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},
	flameimpact: {
		accuracy: 100,
		basePower: 55,
		category: "Physical",
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
	},
	flamewheel: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	flamethrower: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	flareblitz: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	flash: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {evasion: 1}},
	},
	flashcannon: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	flatter: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	fleurcannon: {
		accuracy: 90,
		basePower: 130,
		category: "Special",
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
	},
	fling: {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
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
	},
	floralhealing: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	flowershield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	fly: {
		accuracy: 95,
		basePower: 90,
		category: "Physical",
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
		condition: {
			duration: 2,
			onTryImmunity(target, source, move) {
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'helpinghand', 'tornadobacklash'].includes(move.id)) {
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
				if (move.id === 'gust' || move.id === 'twister' || move.id === 'tornadobacklash') {
					return this.chainModify(2);
				}
			},
		},
		secondary: null,
		target: "any",
		type: "Flying",
	},
	flyingpress: {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
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
	},
	focusblast: {
		accuracy: 70,
		basePower: 120,
		category: "Special",
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
	},
	focusenergy: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {accuracy: 1}},
	},
	focuspunch: {
		accuracy: 100,
		basePower: 150,
		category: "Physical",
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
		condition: {
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
	},
	followme: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	forcepalm: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	foresight: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'crit2'},
	},
	forestscurse: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	foulplay: {
		accuracy: 100,
		basePower: 95,
		category: "Physical",
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
	},
	freezedry: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	freezeshock: {
		accuracy: 90,
		basePower: 140,
		category: "Physical",
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
	},
	frenzyplant: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
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
	},
	frostbreath: {
		accuracy: 90,
		basePower: 60,
		category: "Special",
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
	},
	frustration: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor(((255 - pokemon.happiness) * 10) / 25) || 1;
		},
		category: "Physical",
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
	},
	furyattack: {
		accuracy: 100,
		basePower: 15,
		category: "Physical",
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
	},
	furycutter: {
		accuracy: 95,
		basePower: 40,
		basePowerCallback(pokemon, target, move) {
			if (!pokemon.volatiles.furycutter || move.hit === 1) {
				pokemon.addVolatile('furycutter');
			}
			return this.clampIntRange(move.basePower * pokemon.volatiles.furycutter.multiplier, 1, 160);
		},
		category: "Physical",
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
		condition: {
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
	},
	furyswipes: {
		accuracy: 100,
		basePower: 18,
		category: "Physical",
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
	},
	fusionbolt: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
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
	},
	fusionflare: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
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
	},
	futuresight: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
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
	},
	gastroacid: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		condition: {
			// Ability suppression implemented in Pokemon.ignoringAbility() within sim/pokemon.js
			onStart(pokemon) {
				this.add('-endability', pokemon);
				this.singleEvent('End', pokemon.getAbility(), pokemon.abilityData, pokemon, pokemon, 'gastroacid');
			},
			onCopy(pokemon) {
				if (pokemon.getAbility().isPermanent) pokemon.removeVolatile('gastroacid');
			},
		},
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {boost: {spe: 1}},
	},
	geargrind: {
		accuracy: 85,
		basePower: 50,
		category: "Physical",
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
	},
	gearup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	gemshatter: {
		accuracy: 95,
		basePower: 50,
		category: "Special",
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
	},
	gemstoneglimmer: {
		accuracy: 95,
		basePower: 75,
		category: "Special",
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
	},
	genesissupernova: {
		accuracy: true,
		basePower: 185,
		category: "Special",
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
	},
	geomancy: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	gigadrain: {
		accuracy: 100,
		basePower: 75,
		category: "Special",
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
	},
	gigaimpact: {
		accuracy: 90,
		basePower: 150,
		category: "Physical",
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
	},
	gigavolthavoc: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	glaciate: {
		accuracy: 95,
		basePower: 65,
		category: "Special",
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
	},
	glare: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	grassknot: {
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
	},
	grasspledge: {
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
		condition: {
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
	},
	grasswhistle: {
		accuracy: 55,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	grassyterrain: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	gravity: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	growl: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	growth: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	grudge: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'redirect'},
	},
	guardianofalola: {
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
	},
	guardsplit: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	guardswap: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	guillotine: {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
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
	},
	gunkshot: {
		accuracy: 80,
		basePower: 120,
		category: "Physical",
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
	},
	gust: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	gyroball: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = (Math.floor(25 * target.getStat('spe') / pokemon.getStat('spe')) || 1);
			if (power > 150) power = 150;
			this.debug('' + power + ' bp');
			return power;
		},
		category: "Physical",
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
	},
	hail: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	hammerarm: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
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
	},
	happyhour: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	harden: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	haze: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	headbutt: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	headcharge: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	headsmash: {
		accuracy: 80,
		basePower: 150,
		category: "Physical",
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
	},
	healbell: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	healblock: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 2}},
	},
	healingwish: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
	},
	healorder: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	healpulse: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			} else if (source.hasAbility('healerheart')) {
				success = !!this.heal(Math.ceil(target.maxhp * 0.75));
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
		zMove: {effect: 'clearnegativeboost'},
	},
	heartstamp: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	heartswap: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'crit2'},
	},
	heatcrash: {
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
	},
	heatwave: {
		accuracy: 90,
		basePower: 95,
		category: "Special",
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
	},
	heavyslam: {
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
	},
	hellfire: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
					return this.chainModify(1.75);
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
					if(this.field.isWeather(['sunnyday', 'desolateland'])) {
						if(pokemon.hasType('Rock')) damageDenom *=1.75;
						if(pokemon.hasType('Steel')) damageDenom /=2.5;
						if(pokemon.hasType('Grass')) damageDenom /=3;
						if(pokemon.hasType('Ice')) damageDenom /=2.5;
					}
					else {
						if(pokemon.hasType('Rock')) damageDenom *=2;
						if(pokemon.hasType('Steel')) damageDenom /=2;
						if(pokemon.hasType('Grass')) damageDenom /=2;
						if(pokemon.hasType('Ice')) damageDenom /=2;
					}
					if(this.field.isWeather(['raindance', 'primordialsea'])) {
						if(pokemon.hasType('Water')) damageDenom *=2.5;
						if(pokemon.hasType('Steel')) damageDenom /=1.5;
						if(pokemon.hasType('Grass')) damageDenom /=1.5;
						if(pokemon.hasType('Ice')) damageDenom /=1.5;
					}
					else {
						if(pokemon.hasType('Water')) damageDenom *=1.5;
						if(pokemon.hasType('Steel')) damageDenom /=2;
						if(pokemon.hasType('Grass')) damageDenom /=2;
						if(pokemon.hasType('Ice')) damageDenom /=2;
					}
					if(pokemon.hasType('Dragon')) damageDenom *=4;
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
		zMove: {boost: {spa: 1}},
	},
	helpinghand: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			if (!target.newlySwitched && !this.queue.willMove(target)) return false;
		},
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	hex: {
		accuracy: 100,
		basePower: 65,
		basePowerCallback(pokemon, target, move) {
			if (target.status || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Special",
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
	},
//FIX
	hiddenpower: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerbug: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerdark: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerdragon: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerelectric: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerfighting: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerfire: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerflying: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerghost: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowergrass: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerground: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerice: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerpoison: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerpsychic: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerrock: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowersteel: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	hiddenpowerwater: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	highhorsepower: {
		accuracy: 95,
		basePower: 95,
		category: "Physical",
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
	},
	highjumpkick: {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
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
	},
	holdback: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	holdhands: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	honeclaws: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	hornattack: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
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
	},
	horndrill: {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
		name: "Horn Drill",
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
	},
	hornleech: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	howl: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	hurricane: {
		accuracy: 70,
		basePower: 110,
		category: "Special",
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
	},
	hydrocannon: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
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
	},
	hydropump: {
		accuracy: 80,
		basePower: 110,
		category: "Special",
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
	},
	hydrovortex: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	hyperbeam: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
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
	},
	hyperfang: {
		accuracy: 90,
		basePower: 80,
		category: "Physical",
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
	},
	hyperscan: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	hyperspacefury: {
		accuracy: true,
		basePower: 100,
		category: "Physical",
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
	},
	hyperspacehole: {
		accuracy: true,
		basePower: 80,
		category: "Special",
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
	},
	hypervoice: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	hypnosis: {
		accuracy: 60,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	iceball: {
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
		condition: {
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
	},
	icebeam: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	iceburn: {
		accuracy: 90,
		basePower: 140,
		category: "Special",
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
	},
	icefang: {
		accuracy: 95,
		basePower: 65,
		category: "Physical",
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
	},
	icehammer: {
		accuracy: 90,
		basePower: 100,
		category: "Physical",
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
	},
	icepunch: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	iceshard: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	iciclecrash: {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
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
	},
	iciclespear: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
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
	},
	icywind: {
		accuracy: 95,
		basePower: 55,
		category: "Special",
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
	},
	imprison: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 2}},
	},
	incinerate: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	infernalblade: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	inferno: {
		accuracy: 50,
		basePower: 100,
		category: "Special",
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
	},
	infernooverdrive: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	infestation: {
		accuracy: 100,
		basePower: 20,
		category: "Special",
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
	},
	ingrain: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	instruct: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	iondeluge: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	irondefense: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	ironhead: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	irontail: {
		accuracy: 75,
		basePower: 100,
		category: "Physical",
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
	},
	jawlock: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	judgment: {
		accuracy: 100,
		basePower: 130,
		category: "Special",
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
	},
	jumpkick: {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
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
	},
	karatechop: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},
	kinesis: {
		accuracy: 80,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {evasion: 1}},
	},
	kingsshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	knockoff: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
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
	},
	kyuubiburn: {
		accuracy: 90,
		basePower: 130,
		category: "Physical",
		defensiveCategory: "Special",
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
		condition: {
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
	},
	landswrath: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	laserfocus: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {atk: 1}},
	},
	lastresort: {
		accuracy: 100,
		basePower: 140,
		category: "Physical",
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
	},
	lavaplume: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	leafage: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	leafblade: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	leafstorm: {
		accuracy: 90,
		basePower: 130,
		category: "Special",
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
	},
	leaftornado: {
		accuracy: 90,
		basePower: 65,
		category: "Special",
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
	},
	leechlife: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	leechseed: {
		accuracy: 90,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	leer: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	legacyshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	letssnuggleforever: {
		accuracy: true,
		basePower: 190,
		category: "Physical",
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
	},
	lick: {
		accuracy: 100,
		basePower: 30,
		category: "Physical",
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
	},
	lifedew: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
				if (source.hasAbility('healerheart')) {
					this.heal(Math.ceil(pokemon.maxhp * 0.37), pokemon, source);
				} else {
					this.heal(Math.ceil(pokemon.maxhp / 4), pokemon, source);
				}
			}
		},
		secondary: null,
		target: "allyTeam",
		type: "Water",
		zMove: {effect: 'clearnegativeboost'},
	},
	lightofruin: {
		accuracy: 90,
		basePower: 140,
		category: "Special",
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
	},
	lightscreen: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	lightthatburnsthesky: {
		accuracy: true,
		basePower: 200,
		category: "Special",
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
	},
	liquidation: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
	},
	livewire: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	lockon: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 2,
			onSourceAccuracy(accuracy, target, source, move) {
				if (move && source === this.effectData.target && target === this.effectData.source) return true;
			},
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spe: 1}},
	},
	lovelykiss: {
		accuracy: 75,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	lowkick: {
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
	},
	lowsweep: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
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
	},
	luckychant: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {evasion: 1}},
	},
	lunardance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
	},
	lunge: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	lusterpurge: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	machpunch: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	magicalleaf: {
		accuracy: true,
		basePower: 60,
		category: "Special",
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
	},
	magiccoat: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 2}},
	},
	magicroom: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	magmadrift: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	magmastorm: {
		accuracy: 75,
		basePower: 100,
		category: "Special",
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
	},
	magnetbomb: {
		accuracy: true,
		basePower: 60,
		category: "Physical",
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
	},
	magneticflux: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	magnetrise: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {evasion: 1}},
	},
	magnitude: {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
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
	},
	maliciousmoonsault: {
		accuracy: true,
		basePower: 180,
		category: "Physical",
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
	},
	matblock: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	meanlook: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	meditate: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	mefirst: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			let action = this.queue.willMove(target);
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
		condition: {
			duration: 1,
			onBasePowerPriority: 4,
			onBasePower(basePower) {
				return this.chainModify(1.5);
			},
		},
		secondary: null,
		target: "adjacentFoe",
		type: "Normal",
		zMove: {boost: {spe: 2}},
	},
	megadrain: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	megahorn: {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
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
	},
	megakick: {
		accuracy: 75,
		basePower: 120,
		category: "Physical",
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
	},
	megapunch: {
		accuracy: 85,
		basePower: 80,
		category: "Physical",
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
	},
	memento: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'healreplacement'},
	},
	menacingmoonrazemaelstrom: {
		accuracy: true,
		basePower: 200,
		category: "Special",
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
	},
	metalburst: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['metalburst']) return 0;
			return pokemon.volatiles['metalburst'].damage || 1;
		},
		category: "Physical",
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
		condition: {
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
	},
	metalclaw: {
		accuracy: 95,
		basePower: 50,
		category: "Physical",
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
	},
	metalsound: {
		accuracy: 85,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	metalwhip: {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
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
	},
	meteorassault: {
		accuracy: 100,
		basePower: 150,
		category: "Physical",
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
	meteormash: {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
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
	},
	metronome: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
				if (move.isZ) continue;
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
	},
	milkdrink: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	mimic: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {accuracy: 1}},
	},
	mindblown: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
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
	},
	mindreader: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	minedeploy: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 2}},
	},
	minimize: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	miracleeye: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	mirrorcoat: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			if (!pokemon.volatiles['mirrorcoat']) return 0;
			return pokemon.volatiles['mirrorcoat'].damage || 1;
		},
		category: "Special",
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
		condition: {
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
	},
	mirrormove: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 2}},
	},
	mirrorshot: {
		accuracy: 85,
		basePower: 65,
		category: "Special",
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
	},
	mist: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'heal'},
	},
	mistball: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	mistyterrain: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	moonblast: {
		accuracy: 100,
		basePower: 95,
		category: "Special",
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
	},
	moongeistbeam: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
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
	},
	moonlight: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	morningsun: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	mudbomb: {
		accuracy: 85,
		basePower: 65,
		category: "Special",
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
	},
	mudshot: {
		accuracy: 95,
		basePower: 55,
		category: "Special",
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
	},
	mudslap: {
		accuracy: 100,
		basePower: 20,
		category: "Special",
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
	},
	mudsport: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	muddywater: {
		accuracy: 85,
		basePower: 90,
		category: "Special",
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
	},
	multiattack: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	mysticalfire: {
		accuracy: 100,
		basePower: 75,
		category: "Special",
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
	},
	nastyplot: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	naturalgift: {
		accuracy: 100,
		basePower: 0,
		category: "Physical",
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
	},
//FIX
	naturepower: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			} else if (this.field.isTerrain('soundstage')) {
				move = 'hypervoice';
			}
			this.useMove(move, pokemon, target);
			return null;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	naturesmadness: {
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.hp / 2), 1);
		},
		category: "Special",
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
	},
	needlearm: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	nervalcut: {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
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
	},
	neverendingnightmare: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	nightdaze: {
		accuracy: 95,
		basePower: 85,
		category: "Special",
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
	},
	nightmare: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	nightshade: {
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Special",
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
	},
	nightslash: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	nobleroar: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	noretreat: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	nuzzle: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
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
	},
	oblivionwing: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	obstruct: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	oceanicoperetta: {
		accuracy: true,
		basePower: 195,
		category: "Special",
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
	},
	octazooka: {
		accuracy: 85,
		basePower: 65,
		category: "Special",
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
	},
	odorsleuth: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	ominouswind: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	originpulse: {
		accuracy: 85,
		basePower: 110,
		category: "Special",
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
	},
	outrage: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	overdrive: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	overheat: {
		accuracy: 90,
		basePower: 130,
		category: "Special",
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
	},
	painsplit: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	paleowave: {
		accuracy: 100,
		basePower: 85,
		category: "Special",
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
	},
	paraboliccharge: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	partingshot: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'healreplacement'},
	},
	payback: {
		accuracy: 100,
		basePower: 50,
		basePowerCallback(pokemon, target, move) {
			if (target.newlySwitched || this.queue.willMove(target)) {
				this.debug('Payback NOT boosted');
				return move.basePower;
			}
			this.debug('Payback damage boost');
			return move.basePower * 2;
		},
		category: "Physical",
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
	},
	payday: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	peck: {
		accuracy: 100,
		basePower: 35,
		category: "Physical",
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
	},
	perishsong: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	permafrost: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	petalblizzard: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	petaldance: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
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
	},
	phantomforce: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
		condition: {
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
	},
//CHANGE
	pherogas: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		secondary: null,
		target: "normal",
		type: "Poison",
		zMove: {effect: 'clearnegativeboost'},
	},
	photonblade: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		defensiveCategory: "Physical",
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
	},
	photongeyser: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
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
	},
	photonkick: {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
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
	},
	pinmissile: {
		accuracy: 95,
		basePower: 25,
		category: "Physical",
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
	},
	plasmafists: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
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
	},
	playnice: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	playrough: {
		accuracy: 90,
		basePower: 90,
		category: "Physical",
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
	},
	pluck: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	poisonfang: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},
	poisongas: {
		accuracy: 90,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	poisonjab: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	poisonpowder: {
		accuracy: 75,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	poisonsting: {
		accuracy: 100,
		basePower: 15,
		category: "Physical",
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
	},
	poisontail: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},
	pollenpuff: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	pound: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	powder: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 2}},
	},
	powdersnow: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	powergem: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	powersplit: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	powerswap: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	powertrick: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {atk: 1}},
	},
	powertrip: {
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return move.basePower + 20 * pokemon.positiveBoosts();
		},
		category: "Physical",
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
	},
	poweruppunch: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	powerwhip: {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
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
	},
	precipiceblades: {
		accuracy: 85,
		basePower: 120,
		category: "Physical",
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
	},
	present: {
		accuracy: 90,
		basePower: 0,
		category: "Physical",
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
	},
	prismaticlaser: {
		accuracy: 100,
		basePower: 160,
		category: "Special",
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
	},
	protect: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', pokemon);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	psybeam: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	psychup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	psychic: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	psychicfangs: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
	},
	psychicterrain: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	psychoboost: {
		accuracy: 90,
		basePower: 140,
		category: "Special",
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
	},
	psychocut: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	psychoshift: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 2}},
	},
	psyshock: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		defensiveCategory: "Physical",
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
	},
	psystrike: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
		defensiveCategory: "Physical",
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
	},
	psywave: {
		accuracy: 100,
		basePower: 0,
		damageCallback(pokemon) {
			return (this.random(50, 151) * pokemon.level) / 100;
		},
		category: "Special",
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
	},
	pulverizingpancake: {
		accuracy: true,
		basePower: 210,
		category: "Physical",
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
	},
	punishment: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			let power = 60 + 20 * target.positiveBoosts();
			if (power > 200) power = 200;
			return power;
		},
		category: "Physical",
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
	},
	purify: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	pursuit: {
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
		condition: {
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
	},
	pyroball: {
		accuracy: 90,
		basePower: 120,
		category: "Physical",
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
	quash: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
			let action = this.queue.willMove(target);
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
		zMove: {boost: {spe: 1}},
	},
	quickattack: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	quickguard: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	quiverdance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	rage: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
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
		condition: {
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
	},
	ragepowder: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	raindance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	rapidspin: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
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
	},
	razorleaf: {
		accuracy: 95,
		basePower: 55,
		category: "Physical",
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
	},
	razorshell: {
		accuracy: 95,
		basePower: 75,
		category: "Physical",
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
	},
	razorwhip: {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
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
	},
	razorwind: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	recover: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	recycle: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 2}},
	},
	reflect: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	reflecttype: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	refresh: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	relicsong: {
		accuracy: 100,
		basePower: 75,
		category: "Special",
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
	},
	rest: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	retaliate: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	return: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			return Math.floor((pokemon.happiness * 10) / 25) || 1;
		},
		category: "Physical",
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
	},
	revelationdance: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	revenge: {
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
	},
	reversal: {
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
	},
	roar: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	roaroftime: {
		accuracy: 90,
		basePower: 150,
		category: "Special",
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
	},
	rockblast: {
		accuracy: 90,
		basePower: 25,
		category: "Physical",
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
	},
	rockclimb: {
		accuracy: 85,
		basePower: 90,
		category: "Physical",
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
	},
	rockpolish: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	rockslide: {
		accuracy: 90,
		basePower: 75,
		category: "Physical",
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
	},
	rocksmash: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	rockthrow: {
		accuracy: 90,
		basePower: 50,
		category: "Physical",
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
	},
	rocktomb: {
		accuracy: 95,
		basePower: 60,
		category: "Physical",
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
	},
	rockwrecker: {
		accuracy: 90,
		basePower: 150,
		category: "Physical",
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
	},
	roleplay: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			if (target.ability === source.ability) return false;

			const additionalBannedTargetAbilities = [
				'bijuuboost', 'crisisevolution', 'flowergift', 'forecast', 'illusion', 'imposter', 'misdirection', 'neutralizinggas', 'powerofalchemy', 'receiver', 'shadowstrikesealed', 'trace', 'wonderguard'
			];

			if (target.getAbility().isPermanent || additionalBannedTargetAbilities.includes(target.ability) ||
				source.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(target, source) {
			const oldAbility = source.setAbility(target.ability);
			if (oldAbility) {
				this.add('-ability', source, source.getAbility().name, '[from] move: Role Play', '[of] ' + target);
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
	},
	rollingkick: {
		accuracy: 85,
		basePower: 60,
		category: "Physical",
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
	},
	rollout: {
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
		condition: {
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
	},
	roost: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	rototiller: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	round: {
		accuracy: 100,
		basePower: 60,
		basePowerCallback(target, source, move) {
			if (move.sourceEffect === 'round') {
				return move.basePower * 2;
			}
			return move.basePower;
		},
		category: "Special",
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
	},
	sacredfire: {
		accuracy: 95,
		basePower: 100,
		category: "Physical",
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
	},
	sacredsword: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	safeguard: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 1}},
	},
	sandattack: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {evasion: 1}},
	},
	sandburial: {
		accuracy: true,
		basePower: 130,
		category: "Physical",
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
	},
	sandcoffin: {
		accuracy: 95,
		basePower: 50,
		category: "Physical",
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
		condition: {
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
	},
	sandstorm: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	sandtomb: {
		accuracy: 85,
		basePower: 35,
		category: "Physical",
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
	},
	satellitedefense: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		 return !!this.queue.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
		 pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {boost: {def: 1, spd: 1}},
	},
	satellitestrike: {
		accuracy: 100,
		basePower: 300,
		category: "Special",
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
	},
	savagespinout: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	scald: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	scaryface: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	scratch: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	screech: {
		accuracy: 85,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	searingshot: {
		accuracy: 100,
		basePower: 100,
		category: "Special",
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
	},
	searingsunrazesmash: {
		accuracy: true,
		basePower: 200,
		category: "Physical",
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
	},
	secretpower: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
			} else if (this.field.isTerrain('soundstage')) {
				move.secondaries.push({
					chance: 30,
					volatileStatus: 'confusion',
				});
			}
		},
		secondary: {
			chance: 30,
			status: 'par',
		},
		target: "normal",
		type: "Normal",
	},
	secretsword: {
		accuracy: 100,
		basePower: 85,
		category: "Special",
		defensiveCategory: "Physical",
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
	},
	seedbomb: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	seedflare: {
		accuracy: 85,
		basePower: 120,
		category: "Special",
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
	},
	seismictoss: {
		accuracy: 100,
		basePower: 0,
		damage: 'level',
		category: "Physical",
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
	},
	selfdestruct: {
		accuracy: 100,
		basePower: 200,
		category: "Physical",
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
	},
	shadowball: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	shadowbone: {
		accuracy: 100,
		basePower: 85,
		category: "Physical",
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
	},
	shadowclaw: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	shadowforce: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
		condition: {
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
	},
	shadowpunch: {
		accuracy: true,
		basePower: 60,
		category: "Physical",
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
	},
	shadowsneak: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	sharpen: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	shatteredpsyche: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	sheercold: {
		accuracy: 30,
		basePower: 0,
		category: "Special",
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
	},
	shellsmash: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	shelltrap: {
		accuracy: 100,
		basePower: 150,
		category: "Special",
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
		condition: {
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
	},
	shiftgear: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	shiveringconduct: {
		accuracy: 95,
		basePower: 80,
		category: "Special",
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
	},
	shockwave: {
		accuracy: true,
		basePower: 60,
		category: "Special",
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
	},
	shoreup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	signalbeam: {
		accuracy: 100,
		basePower: 75,
		category: "Special",
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
	},
	silverwind: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	simplebeam: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		onTryHit(target) {
			if (target.getAbility().isPermanent || target.ability === 'simple' || target.ability === 'truant') {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('simple');
			if (oldAbility) {
				this.add('-ability', pokemon, 'Simple', '[from] move: Simple Beam');
				return;
			}
			return false;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMove: {boost: {spa: 1}},
	},
	sing: {
		accuracy: 55,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	sinisterarrowraid: {
		accuracy: true,
		basePower: 180,
		category: "Physical",
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
	},
	sketch: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	skillswap: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			const additionalBannedAbilities = ['bijuuboost', 'crisisevolution', 'flowergift', 'forecast', 'illusion', 'imposter', 'misdirection', 'neutralizinggas', 'powerofalchemy', 'receiver', 'shadowstrikesealed', 'trace', 'wonderguard'];
			if (
				target.getAbility().isPermanent || source.getAbility().isPermanent ||
				additionalBannedAbilities.includes(target.ability) || additionalBannedAbilities.includes(source.ability)
			) {
				return false;
			}
		},
		onHit(target, source, move) {
			const targetAbility = target.getAbility();
			const sourceAbility = source.getAbility();
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
				source.abilityData = {id: this.toID(source.ability), target: source};
				target.abilityData = {id: this.toID(target.ability), target: target};
				if (target.side !== source.side) target.volatileStaleness = 'external';
			}
			this.singleEvent('Start', targetAbility, source.abilityData, source);
			this.singleEvent('Start', sourceAbility, target.abilityData, target);
		},
		secondary: null,
		target: "normal",
		type: "Psychic",
		zMove: {boost: {spe: 1}},
	},
	skullbash: {
		accuracy: 100,
		basePower: 130,
		category: "Physical",
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
	},
	skyattack: {
		accuracy: 90,
		basePower: 140,
		category: "Physical",
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
	},
	skydrop: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
		condition: {
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
				if (['gust', 'twister', 'skyuppercut', 'thunder', 'hurricane', 'smackdown', 'thousandarrows', 'helpinghand', 'tornadobacklash'].includes(move.id)) {
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
				if (move.id === 'gust' || move.id === 'twister' || move.id === 'tornadobacklash') {
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
	},
	skyuppercut: {
		accuracy: 90,
		basePower: 85,
		category: "Physical",
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
	},
	slam: {
		accuracy: 75,
		basePower: 80,
		category: "Physical",
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
	},
	slash: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	sleeppowder: {
		accuracy: 75,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	sleeptalk: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'crit2'},
	},
	sludge: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	sludgebomb: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	sludgewave: {
		accuracy: 100,
		basePower: 95,
		category: "Special",
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
	},
	smackdown: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
		condition: {
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
	},
	smartstrike: {
		accuracy: true,
		basePower: 70,
		category: "Physical",
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
	},
	smellingsalts: {
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'par') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
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
	},
	smog: {
		accuracy: 70,
		basePower: 30,
		category: "Special",
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
	},
	smokescreen: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {evasion: 1}},
	},
	snarl: {
		accuracy: 95,
		basePower: 55,
		category: "Special",
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
	},
	snatch: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 2}},
	},
	snipeshot: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	snore: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
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
	},
	soak: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	softboiled: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	solarbeam: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
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
	},
	solarblade: {
		accuracy: 100,
		basePower: 125,
		category: "Physical",
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
	},
	sonicboom: {
		accuracy: 90,
		basePower: 0,
		damage: 20,
		category: "Special",
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
	},
	soulstealing7starstrike: {
		accuracy: true,
		basePower: 195,
		category: "Physical",
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
	},
	soulwrecker: {
		accuracy: 30,
		basePower: 0,
		category: "Special",
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
	},
	soundstage: {
		accuracy: true,
		basePower: 0,
		category: "Status",
		name: "Sound Stage",
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
		terrain: 'soundstage',
		condition: {
			duration: 5,
			durationCallback(source, effect) {
				if (source && source.hasItem('terrainextender')) {
					return 8;
				}
				return 5;
			},
			onSetStatus(status, target, source, effect) {
				if (status.id === 'slp' && !target.isSemiInvulnerable()) {
					if (effect.effectType === 'Move' && !effect.secondaries) {
						this.add('-activate', target, 'move: Sound Stage');
					}
					return false;
				}
			},
			onTryAddVolatile(status, target) {
				if (target.isSemiInvulnerable()) return;
				if (status.id === 'yawn') {
					this.add('-activate', target, 'move: Sound Stage');
					return null;
				}
			},
			onBasePower(basePower, attacker, defender, move) {
				if (move.flags.sound && !attacker.isSemiInvulnerable()) {
					this.debug('sound stage boost');
					return this.chainModify(2);
				}
			},
			onStart(battle, source, effect) {
				if (effect && effect.effectType === 'Ability') {
					this.add('-fieldstart', 'move: Sound Stage', '[from] ability: ' + effect, '[of] ' + source);
				} else {
					this.add('-fieldstart', 'move: Sound Stage');
				}
			},
			onResidualOrder: 21,
			onResidualSubOrder: 2,
			onEnd() {
				this.add('-fieldend', 'move: Sound Stage');
			},
		},
		secondary: null,
		target: "all",
		type: "Normal",
		zMove: {boost: {spa: 1}},
	},
	spacialrend: {
		accuracy: 95,
		basePower: 100,
		category: "Special",
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
	},
	spark: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
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
	},
	sparklingaria: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	spectralthief: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	speedswap: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	spiderweb: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	spikecannon: {
		accuracy: 100,
		basePower: 20,
		category: "Physical",
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
	},
	spikes: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	spikyshield: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct() && this.runEvent('StallMove', target);
		},
		onHit(pokemon) {
			pokemon.addVolatile('stall');
		},
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	spiritbreak: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	spiritshackle: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	spitup: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon) {
			if (!pokemon.volatiles['stockpile'] || !pokemon.volatiles['stockpile'].layers) return false;
			return pokemon.volatiles['stockpile'].layers * 100;
		},
		category: "Special",
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
	},
	spite: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	splash: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 3}},
	},
	splinteredstormshards: {
		accuracy: true,
		basePower: 190,
		category: "Physical",
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
	},
	spore: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	spotlight: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	squawk: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	stealthrock: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	steameruption: {
		accuracy: 95,
		basePower: 110,
		category: "Special",
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
	},
	steamroller: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
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
	},
	steelwing: {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
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
	},
	stickyweb: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 1}},
	},
	stockpile: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'heal'},
	},
	stokedsparksurfer: {
		accuracy: true,
		basePower: 175,
		category: "Special",
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
	},
	stomp: {
		accuracy: 100,
		basePower: 65,
		category: "Physical",
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
	},
	stompingtantrum: {
		accuracy: 100,
		basePower: 75,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.moveLastTurnResult === false) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
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
	},
	stoneedge: {
		accuracy: 80,
		basePower: 100,
		category: "Physical",
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
	},
	storedpower: {
		accuracy: 100,
		basePower: 20,
		basePowerCallback(pokemon, target, move) {
			return move.basePower + 20 * pokemon.positiveBoosts();
		},
		category: "Special",
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
	},
	stormthrow: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	strength: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	strengthsap: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	stringshot: {
		accuracy: 95,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	struggle: {
		accuracy: true,
		basePower: 50,
		category: "Physical",
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
	},
	strugglebug: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
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
	},
	stunspore: {
		accuracy: 75,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	submission: {
		accuracy: 80,
		basePower: 80,
		category: "Physical",
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
	},
	substitute: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {effect: 'clearnegativeboost'},
	},
	subzeroslammer: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	suckerpunch: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
			let action = this.queue.willMove(target);
			if (!action || action.choice !== 'move' || (action.move.category === 'Status' && action.move.id !== 'mefirst') || target.volatiles.mustrecharge) {
				this.add('-fail', source);
				this.attrLastMove('[still]');
				return null;
			}
		},
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	suddenstrike: {
		accuracy: 100,
		basePower: 40,
		category: "Physical",
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
	},
	sunnyday: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	sunsteelstrike: {
		accuracy: 100,
		basePower: 100,
		category: "Physical",
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
	},
	superfang: {
		accuracy: 90,
		basePower: 0,
		damageCallback(pokemon, target) {
			return this.clampIntRange(Math.floor(target.hp / 2), 1);
		},
		category: "Physical",
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
	},
	supernova: {
		accuracy: 100,
		basePower: 225,
		category: "Special",
		name: "Supernova",
		pp: 5,
		priority: 0,
		flags: {recharge: 1, protect: 1, defrost: 1},
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
		secondaries: [
			{
				chance: 40,
				onHit(target) {
					if (target.status === 'bld') target.cureStatus();
				},
			}, {
				chance: 20,
				status: 'brn',
			},
		],
		target: "normal",
		type: "Fire",
	},
	superpower: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	supersonic: {
		accuracy: 55,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	supersonicskystrike: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	surf: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	swagger: {
		accuracy: 85,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	swallow: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	sweetkiss: {
		accuracy: 75,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	sweetscent: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {accuracy: 1}},
	},
	swift: {
		accuracy: true,
		basePower: 60,
		category: "Special",
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
	},
	switcheroo: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 2}},
	},
	swordsdance: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	symphonicdiscord: {
		accuracy: 95,
		basePower: 80,
		category: "Physical",
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
	},
	synchronoise: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
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
	},
	synthesis: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	tailglow: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'clearnegativeboost'},
	},
	tailslap: {
		accuracy: 85,
		basePower: 25,
		category: "Physical",
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
	},
	tailwind: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
			duration: 4,
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
		zMove: {effect: 'crit2'},
	},
	takedown: {
		accuracy: 85,
		basePower: 90,
		category: "Physical",
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
	},
	talonswipe: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	taunt: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
			duration: 3,
			onStart(target) {
				if (target.activeTurns && !this.queue.willMove(target)) {
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
		zMove: {boost: {atk: 1}},
	},
	tearfullook: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	technoblast: {
		accuracy: 100,
		basePower: 120,
		category: "Special",
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
	},
	tectonicrage: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	teeterdance: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spa: 1}},
	},
	telekinesis: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spa: 1}},
	},
	teleport: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	thief: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	thousandarrows: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	thousandwaves: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	thrash: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	throatchop: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
		condition: {
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
	},
	thunder: {
		accuracy: 70,
		basePower: 110,
		category: "Special",
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
	},
	thunderbolt: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
	},
	thunderfang: {
		accuracy: 95,
		basePower: 65,
		category: "Physical",
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
	},
	thunderpunch: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	thundershock: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	thunderwave: {
		accuracy: 90,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	tickle: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	titanicforce: {
		accuracy: 30,
		basePower: 0,
		category: "Physical",
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
	},
	topsyturvy: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	torment: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	tornadoclaw: {
		accuracy: 90,
		basePower: 70,
		category: "Physical",
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
	},
	toxic: {
		accuracy: 90,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	toxicspikes: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	toxicthread: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 1}},
	},
	transform: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {effect: 'heal'},
	},
	triattack: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
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
	},
	trick: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spe: 2}},
	},
	trickortreat: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
				const action = this.queue.willMove(target);
				if (action && action.move.id === 'curse') {
					action.targetLoc = -1;
				}
			}
		},
		secondary: null,
		target: "normal",
		type: "Ghost",
		zMove: {boost: {atk: 1, def: 1, spa: 1, spd: 1, spe: 1}},
	},
	trickroom: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {accuracy: 1}},
	},
	triplekick: {
		accuracy: 90,
		basePower: 10,
		basePowerCallback(pokemon, target, move) {
			return 10 * move.hit;
		},
		category: "Physical",
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
	},
	tropkick: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	trumpcard: {
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
	},
	twineedle: {
		accuracy: 100,
		basePower: 25,
		category: "Physical",
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
	},
	twinkletackle: {
		accuracy: true,
		basePower: 1,
		category: "Physical",
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
	},
	twister: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	uturn: {
		accuracy: 100,
		basePower: 70,
		category: "Physical",
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
	},
	uproar: {
		accuracy: 100,
		basePower: 90,
		category: "Special",
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
		condition: {
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
	},
	vacuumwave: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	vampiricbite: {
		accuracy: 100,
		basePower: 75,
		category: "Physical",
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
	},
	vcreate: {
		accuracy: 95,
		basePower: 180,
		category: "Physical",
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
	},
	venomdrench: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	venoshock: {
		accuracy: 100,
		basePower: 65,
		category: "Special",
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
	},
	vicegrip: {
		accuracy: 100,
		basePower: 55,
		category: "Physical",
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
	},
	vinewhip: {
		accuracy: 100,
		basePower: 45,
		category: "Physical",
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
	},
	vitalthrow: {
		accuracy: true,
		basePower: 70,
		category: "Physical",
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
	},
	voltswitch: {
		accuracy: 100,
		basePower: 70,
		category: "Special",
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
	},
	volttackle: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	wakeupslap: {
		accuracy: 100,
		basePower: 70,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'slp' || target.hasAbility('comatose')) return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
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
	},
	waterfall: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	watergun: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	waterpledge: {
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
		condition: {
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
	},
	waterpulse: {
		accuracy: 100,
		basePower: 60,
		category: "Special",
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
	},
	watershuriken: {
		accuracy: 100,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (pokemon.template.species === 'Greninja-Ash' && pokemon.hasAbility('battlebond')) {
				return move.basePower + 5;
			}
			return move.basePower;
		},
		category: "Special",
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
	},
	watersport: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	waterspout: {
		accuracy: 100,
		basePower: 150,
		basePowerCallback(pokemon, target, move) {
			return move.basePower * pokemon.hp / pokemon.maxhp;
		},
		category: "Special",
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
	},
	weatherball: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
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
	},
	whirlpool: {
		accuracy: 85,
		basePower: 35,
		category: "Special",
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
	},
	whirlwind: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {spd: 1}},
	},
	wideguard: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
			return !!this.queue.willAct();
		},
		onHitSide(side, source) {
			source.addVolatile('stall');
		},
		condition: {
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
		zMove: {boost: {def: 1}},
	},
	wildcharge: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
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
	},
	willowisp: {
		accuracy: 85,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	wingattack: {
		accuracy: 100,
		basePower: 60,
		category: "Physical",
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
	},
	wish: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	withdraw: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {def: 1}},
	},
	wonderroom: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spd: 1}},
	},
	woodhammer: {
		accuracy: 100,
		basePower: 120,
		category: "Physical",
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
	},
	workup: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		zMove: {boost: {atk: 1}},
	},
	wormhole: {
		accuracy: 100,
		basePower: 40,
		category: "Special",
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
	},
	worryseed: {
		accuracy: 100,
		basePower: 0,
		category: "Status",
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
		onTryImmunity(target) {
			// Truant and Insomnia have special treatment; they fail before
			// checking accuracy and will double Stomping Tantrum's BP
			if (target.ability === 'truant' || target.ability === 'insomnia') {
				return false;
			}
		},
		onTryHit(target) {
			if (target.getAbility().isPermanent) {
				return false;
			}
		},
		onHit(pokemon) {
			const oldAbility = pokemon.setAbility('insomnia');
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
		zMove: {boost: {spe: 1}},
	},
	wrap: {
		accuracy: 90,
		basePower: 15,
		basePowerCallback(pokemon, target, move) {
			if (target.status === 'bld') return move.basePower * 2;
			return move.basePower;
		},
		category: "Physical",
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
	},
	wringout: {
		accuracy: 100,
		basePower: 0,
		basePowerCallback(pokemon, target) {
			return Math.floor(Math.floor((120 * (100 * Math.floor(target.hp * 4096 / target.maxhp)) + 2048 - 1) / 4096) / 100) || 1;
		},
		category: "Special",
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
	},
	xscissor: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	yawn: {
		accuracy: true,
		basePower: 0,
		category: "Status",
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
		condition: {
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
		zMove: {boost: {spe: 1}},
	},
	zapcannon: {
		accuracy: 50,
		basePower: 120,
		category: "Special",
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
	},
	zenheadbutt: {
		accuracy: 90,
		basePower: 80,
		category: "Physical",
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
	},
	zingzap: {
		accuracy: 100,
		basePower: 80,
		category: "Physical",
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
	},
	zippyzap: {
		accuracy: 100,
		basePower: 50,
		category: "Physical",
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
	},



	tornadobacklash: {
		accuracy: 95,
		basePower: 60,
		category: "Special",
		name: "Tornado Backlash",
		pp: 20,
		priority: 0,
		flags: {protect: 1, mirror: 1, sword: 1}, //Sword skill potential tag
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
		volatileStatus: 'tornadobacklash',
		condition: {
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
				this.add('-start', pokemon, 'Tornado Backlash');
			},
			onRestart(pokemon) {
				if (pokemon.removeVolatile('fly') || pokemon.removeVolatile('bounce')) {
					this.cancelMove(pokemon);
					this.add('-start', pokemon, 'Tornado Backlash');
				}
			},
			// groundedness implemented in battle.engine.js:BattlePokemon#isGrounded
		},
		secondary: null,
		target: "normal",
		type: "Flying",
	},
};