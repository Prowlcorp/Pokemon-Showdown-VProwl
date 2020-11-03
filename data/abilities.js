export const Abilities: {[abilityid: string]: AbilityData} = {
	noability: {
		name: "No Ability",
	},
	acceleration: {
		onModifyMove(move, pokemon) {
			if (move.priority > 0) {
				move.accelerationBoosted = true;
			}
		},
		onBasePowerPriority: 8,
		onBasePower(basePower, pokemon, target, move) {
			if (move.accelerationBoosted) return this.chainModify(1.5);
		},
		name: "Acceleration",
	},
	adaptability: {
		onModifyMove(move) {
			move.stab = 2;
		},
		name: "Adaptability",
	},
	aerilate: {
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
		name: "Aerilate",
	},
	aftermath: {
		name: "Aftermath",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact'] && !target.hp) {
				this.damage(source.baseMaxhp / 4, source, target);
			}
		},
	},
	airlock: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Air Lock');
		},
		suppressWeather: true,
		name: "Air Lock",
	},
	alluringgarden: {
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
		name: "Alluring Garden",
	},
	analytic: {
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
		name: "Analytic",
	},
	angerpoint: {
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && target.getMoveHitData(move).crit) {
				target.setBoost({atk: 6});
				this.add('-setboost', target, 'atk', 12, '[from] ability: Anger Point');
			}
		},
		name: "Anger Point",
	},
	anticipation: {
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
		name: "Anticipation",
	},
	arenatrap: {
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
		name: "Arena Trap",
	},
	aromaveil: {
		onAllyTryAddVolatile(status, target, source, effect) {
			if (['attract', 'disable', 'encore', 'healblock', 'taunt', 'torment'].includes(status.id)) {
				if (effect.effectType === 'Move') {
					this.add('-activate', this.effectData.target, 'ability: Aroma Veil', '[of] ' + target);
				}
				return null;
			}
		},
		name: "Aroma Veil",
	},
	assassinate: {
		onBasePower(basePower, pokemon, target) {
			if (target.hp * 2 <= target.baseMaxhp) {
				return this.chainModify(2);
			}
		},
		name: "Assassinate",
	},
	aurabreak: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Aura Break');
		},
		onAnyTryPrimaryHit(target, source, move) {
			if (target === source || move.category === 'Status') return;
			move.hasAuraBreak = true;
		},
		name: "Aura Break",
	},
	baddreams: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.status === 'slp' || target.hasAbility('comatose')) {
					if(pokemon.template.speciesid === 'darkraimega')
						this.damage(target.baseMaxhp / 6, target, pokemon);
					else
						this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		name: "Bad Dreams",
	},
	ballfetch: {
		name: "Ball Fetch",
	},
	battery: {
		onAllyBasePowerPriority: 8,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectData.target && move.category === 'Special') {
				this.debug('Battery boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		name: "Battery",
	},
	battlearmor: {
		onCriticalHit: false,
		name: "Battle Armor",
	},
	battlebond: {
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
		name: "Battle Bond",
	},
	beastboost: {
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
		name: "Beast Boost",
	},
	berserk: {
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.baseMaxhp / 2 && target.hp + damage > target.baseMaxhp / 2) {
				this.boost({spa: 1});
			}
		},
		name: "Berserk",
	},
	bigpecks: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.def && boost.def < 0) {
				delete boost.def;
				if (!(/** @type {ActiveMove} */(effect)).secondaries) {
					this.add("-fail", target, "unboost", "Defense", "[from] ability: Big Pecks", "[of] " + target);
				}
			}
		},
		name: "Big Pecks",
	},
	bijuuboost: {
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
		name: "Bijuu Boost",
	},
	blaze: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Fire' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Blaze boost');
				return this.chainModify(1.5);
			}
		},
		name: "Blaze",
	},
	bulletproof: {
		onTryHit(pokemon, target, move) {
			if (move.flags['bullet']) {
				this.add('-immune', pokemon, '[from] ability: Bulletproof');
				return null;
			}
		},
		name: "Bulletproof",
	},
	cheekpouch: {
		onEatItem(item, pokemon) {
			this.heal(pokemon.baseMaxhp / 3);
		},
		name: "Cheek Pouch",
	},
	chillingsonata: {
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
		name: "Chilling Sonata",
	},
	chlorophyll: {
		onModifySpe(spe) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(2);
			}
		},
		name: "Chlorophyll",
	},
	clearbody: {
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
		name: "Clear Body",
	},
	climatezero: {
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
		name: "Climate Zero",
	},
	cloudnine: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Cloud Nine');
		},
		suppressWeather: true,
		name: "Cloud Nine",
	},
	colonize: {
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
		name: "Colonize",
	},
	colorchange: {
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
		name: "Color Change",
	},
	comatose: {
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
		name: "Comatose",
	},
	competitive: {
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
		name: "Competitive",
	},
	compoundeyes: {
		onSourceModifyAccuracy(accuracy) {
			if (typeof accuracy !== 'number') return;
			this.debug('compoundeyes - enhancing accuracy');
			return accuracy * 1.3;
		},
		name: "Compound Eyes",
	},
	contradict: {
		// This should be applied directly to the stat as opposed to chaining with the others
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Contradict');
		},
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.category === 'Status') {
				return;
			} else if (move.category === 'Physical') {
				move.category = 'Special';
			} else if (move.category === 'Special') {
				move.category = 'Physical';
			}
			if (move.self && move.self.boosts) {
				if (move.self.boosts.atk || move.self.boosts.spa) {
					const c = move.self.boosts.atk;
					move.self.boosts.atk = move.self.boosts.spa;
					move.self.boosts.spa = c;
				}
			}
		},
		name: "Contradict",
	},
	contrary: {
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= -1;
			}
		},
		name: "Contrary",
	},
	corrosion: {
		// Implemented in sim/pokemon.js:Pokemon#setStatus
		name: "Corrosion",
	},
	cottondown: {
		onDamagingHit(damage, target, source, move) {
			let activated = false;
			for (const pokemon of this.getAllActive()) {
				if (pokemon === target || pokemon.fainted) continue;
				if (!activated) {
					this.add('-ability', target, 'Cotton Down');
					activated = true;
				}
				this.boost({spe: -1}, pokemon, target, null, true);
			}
		},
		name: "Cotton Down",
	},
	crisisevolution: {
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
				attacker.hp = newHP - (attacker.baseMaxhp - attacker.hp);
				attacker.baseMaxhp = newHP;
				this.add('-heal', attacker, attacker.getHealth, '[silent]');
			}
		},
		onModifyMove(move) {
			move.stab = 1.7;
		},
		name: "Crisis Evolution",
	},
	cursedbody: {
		onDamagingHit(damage, target, source, move) {
			if (!source || source.volatiles['disable']) return;
			if (source !== target && move && move.effectType === 'Move' && !move.isFutureMove) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('disable', this.effectData.target);
				}
			}
		},
		name: "Cursed Body",
	},
	cutecharm: {
		onDamagingHit(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.addVolatile('attract', this.effectData.target);
				}
			}
		},
		name: "Cute Charm",
	},
	damp: {
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
	},
	dancer: {
		name: "Dancer",
		// implemented in runMove in scripts.js
	},
	darkaura: {
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
		name: "Dark Aura",
	},
	dauntlessshield: {
		onStart(pokemon) {
			this.boost({def: 1}, pokemon);
		},
		name: "Dauntless Shield",
	},
	dazzling: {
		onFoeTryMove(target, source, effect) {
			if ((source.side === this.effectData.target.side || effect.id === 'perishsong') && effect.priority > 0.1 && effect.target !== 'foeSide') {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Dazzling', effect, '[of] ' + target);
				return false;
			}
		},
		name: "Dazzling",
	},
	deathstare: { //Wonky?
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
		name: "Death Stare",
	},
	deepfreeze: {
		onDamagingHit(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('frz', target);
				}
			}
		},
		name: "Deep Freeze",
	},
	deepseamine: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
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
				this.damage(source.baseMaxhp / deepseaDamage, source, target);
			}
		},
		name: "Deepsea Mine",
	},
	defeatist: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.baseMaxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp <= pokemon.baseMaxhp / 2) {
				return this.chainModify(0.5);
			}
		},
		name: "Defeatist",
	},
	defiant: {
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
		name: "Defiant",
	},
	deltastream: {
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
		name: "Delta Stream",
	},
	desolateland: {
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
		name: "Desolate Land",
	},
	desperatestruggle: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp <= pokemon.baseMaxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (pokemon.hp <= pokemon.baseMaxhp / 2) {
				return this.chainModify(1.5);
			}
		},
		onModifySpe(spe, pokemon) {
			if (pokemon.hp <= pokemon.baseMaxhp / 2) {
				return this.chainModify(2);
			}
		},
		name: "Desperate Struggle",
	},
	direweb: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (!pokemon.hp) return;
			for (const target of pokemon.side.foe.active) {
				if (!target || !target.hp) continue;
				if (target.volatiles['trapped'] || target.volatiles['partiallytrapped']) {
					this.damage(target.baseMaxhp / 8, target, pokemon);
				}
			}
		},
		name: "Dire Web",
	},
	disguise: {
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
		name: "Disguise",
	},
	divashock: {
		onDamagingHit(damage, target, source, move) {
			if (source && source !== target && move && move.category !== 'Status') {
				if(!target.moveThisTurn) {
					this.damage(source.baseMaxhp / 16, source, target);
				}
			}
		},
		name: "Diva Shock",
	},
	download: {
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
		name: "Download",
	},
	dragonforce: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Dragon') {
				return this.chainModify(1.5);
			}
		},
		name: "Dragon Force",
	},
	dragonsmaw: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Dragon') {
				this.debug('Dragon\'s Maw boost');
				return this.chainModify(1.5);
			}
		},
		name: "Dragon's Maw",
	},
	dreamsembrace: {
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
		name: "Dream's Embrace",
	},
	drizzle: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'kyogre') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('raindance');
		},
		name: "Drizzle",
	},
	drought: {
		onStart(source) {
			for (const action of this.queue) {
				if (action.choice === 'runPrimal' && action.pokemon === source && source.template.speciesid === 'groudon') return;
				if (action.choice !== 'runSwitch' && action.choice !== 'runPrimal') break;
			}
			this.field.setWeather('sunnyday');
		},
		name: "Drought",
	},
	dryskin: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
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
				this.heal(target.baseMaxhp / 8);
			} else if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		name: "Dry Skin",
	},
	earlybird: {
		name: "Early Bird",
		// Implemented in statuses.js
	},
	effectspore: {
		onDamagingHit(damage, target, source, move) {
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
		name: "Effect Spore",
	},
	electricsurge: {
		onStart(source) {
			this.field.setTerrain('electricterrain');
		},
		name: "Electric Surge",
	},
	elementalist: {
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
		name: "Elementalist",
	},
	elementnegate: {
		onSourceModifyDamage(damage, source, target, move) {
		if (move.type === 'Electric' || move.type === 'Fire' || move.type === 'Water' || move.type === 'Ice') {
			let damageAmount = 0.5;
			let levelDiff = (target.level - source.level) / 100.0;
			damageAmount -= levelDiff;
			if (damageAmount > 1.0) {
				damageAmount = 1.0;
			}
			if (damageAmount < 0) {
				damageAmount = 0;
			}
			return this.chainModify(damageAmount);
			}
		},
		id: "elementnegate",
		name: "Element Negate",
		rating: 4,
	},
	emergencyexit: {
		onAfterMoveSecondary(target, source, move) {
			if (!source || source === target || !target.hp || !move.totalDamage) return;
			const lastAttackedBy = target.getLastAttackedBy();
			if (!lastAttackedBy) return;
			const damage = move.multihit ? move.totalDamage : lastAttackedBy.damage;
			if (target.hp <= target.baseMaxhp / 2 && target.hp + damage > target.baseMaxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				source.switchFlag = false;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		onDamagingHit(damage, target, source, effect) {
			if (!target.hp || effect.effectType === 'Move') return;
			if (target.hp <= target.baseMaxhp / 2 && target.hp + damage > target.baseMaxhp / 2) {
				if (!this.canSwitch(target.side) || target.forceSwitchFlag || target.switchFlag) return;
				target.switchFlag = true;
				this.add('-activate', target, 'ability: Emergency Exit');
			}
		},
		name: "Emergency Exit",
	},
	eternalbeach: {
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
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.type === 'Water') {
				this.boost({def: 2});
				this.boost({spd: 2});
			}
		},
		name: "Eternal Beach",
	},
	fairyaura: {
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
		name: "Fairy Aura",
	},
	filter: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Filter neutralize');
				return this.chainModify(0.75);
			}
		},
		name: "Filter",
	},
	firstforge: {
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
		name: "First Forge",
	},
	flamebody: {
		onDamagingHit(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		name: "Flame Body",
	},
	flareboost: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (attacker.status === 'brn' && move.category === 'Special') {
				return this.chainModify(1.5);
			}
		},
		name: "Flare Boost",
	},
	flashfire: {
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
		name: "Flash Fire",
	},
	flowergift: {
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
		name: "Flower Gift",
	},
	flowerveil: {
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
		name: "Flower Veil",
	},
	fluffy: {
		onSourceModifyDamage(damage, source, target, move) {
			let mod = 1;
			if (move.type === 'Fire') mod *= 2;
			if (move.flags['contact']) mod /= 2;
			return this.chainModify(mod);
		},
		name: "Fluffy",
	},
	forecast: {
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
		name: "Forecast",
	},
	forewarn: {
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
		name: "Forewarn",
	},
	friendguard: {
		name: "Friend Guard",
		onAnyModifyDamage(damage, source, target, move) {
			if (target !== this.effectData.target && target.side === this.effectData.target.side) {
				this.debug('Friend Guard weaken');
				return this.chainModify(0.75);
			}
		},
	},
	frisk: {
		onStart(pokemon) {
			for (const target of pokemon.side.foe.active) {
				if (!target || target.fainted) continue;
				if (target.item) {
					this.add('-item', target, target.getItem().name, '[from] ability: Frisk', '[of] ' + pokemon, '[identify]');
				}
			}
		},
		name: "Frisk",
	},
	fullmetalbody: {
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
		name: "Full Metal Body",
	},
	furcoat: {
		onModifyDefPriority: 6,
		onModifyDef(def) {
			return this.chainModify(2);
		},
		name: "Fur Coat",
	},
	galewings: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.type === 'Flying' && pokemon.hp === pokemon.baseMaxhp) return priority + 1;
		},
		name: "Gale Wings",
	},
	galvanize: {
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
		name: "Galvanize",
	},
	gigatonforce: {
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
		name: "Gigaton Force",
	},
	gluttony: {
		name: "Gluttony",
	},
	gooey: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-ability', target, 'Gooey');
				this.boost({spe: -1}, source, target, null, true);
			}
		},
		name: "Gooey",
	},
	grasspelt: {
		onModifyDefPriority: 6,
		onModifyDef(pokemon) {
			if (this.field.isTerrain('grassyterrain')) return this.chainModify(1.5);
		},
		name: "Grass Pelt",
	},
	grassysurge: {
		onStart(source) {
			this.field.setTerrain('grassyterrain');
		},
		name: "Grassy Surge",
	},
	gulpmissile: {
		onDamagingHit(damage, target, source, move) {
			if (target.transformed || target.isSemiInvulnerable()) return;
			if (['cramorantgulping', 'cramorantgorging'].includes(target.species.id)) {
				this.damage(source.baseMaxhp / 4, source, target);
				if (target.species.id === 'cramorantgulping') {
					this.boost({def: -1}, source, target, null, true);
				} else {
					source.trySetStatus('par', target, move);
				}
				target.formeChange('cramorant', move);
			}
		},
		// The Dive part of this mechanic is implemented in Dive's `onTryMove` in moves.ts
		onSourceTryPrimaryHit(target, source, effect) {
			if (
				effect && effect.id === 'surf' && source.hasAbility('gulpmissile') &&
				source.species.name === 'Cramorant' && !source.transformed
			) {
				const forme = source.hp <= source.baseMaxhp / 2 ? 'cramorantgorging' : 'cramorantgulping';
				source.formeChange(forme, effect);
			}
		},
		name: "Gulp Missile",
	},
	guts: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Guts",
	},
	harvest: {
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
	},
	healer: {
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
	},
	healerheart: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['heal']) {
				return this.chainModify(1.5);
			}
		},
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.hp && this.isAdjacent(pokemon, allyActive)) {
					this.add('-activate', pokemon, 'ability: Healer Heart');
					allyActive.heal(allyActive.baseMaxhp / 6);
				}
			}
		},
		name: "Healer Heart",
	},
	heatedcombat: {
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
		name: "Heated Combat",
	},
	heatproof: {
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
		name: "Heatproof",
	},
	heavensguidance: {
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
		onSetStatus(status, target, source, effect) {
			if (!effect || !effect.status) return false;
			this.add('-immune', target, '[from] ability: Heaven\'s Guidance');
			return false;
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
		name: "Heaven's Guidance",
	},
	heavymetal: {
		onModifyWeight(weight) {
			return weight * 2;
		},
		name: "Heavy Metal",
	},
	hellfield: {
		onStart(source) {
			this.field.setTerrain('hellfire');
		},
		name: "Hell Field",
	},
	hivemind: {
		onModifyMove(move) {
			if (move.id === 'attackorder') {
				move.basePower *= 1.5;
			} else if(move.id === 'healorder') {
				move.heal = [75,100];
			} else if(move.id === 'defendorder') {
				move.boosts = {def: 2, spd: 2,};
			}
		},
		name: "Hive Mind",
	},
	holytoxin: {
		onAnyModifyMove(move, pokemon) {
			if (move.type === 'Poison' && !pokemon.hasAbility('holytoxin')) {
				move.onTryMove = function(pokemon, target, move) {
					this.attrLastMove('[still]');
					return null;
				}
			}
		},
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.side.active.length === 1) {
				return;
			}
			for (const allyActive of pokemon.side.active) {
				if (allyActive && allyActive.hp && this.isAdjacent(pokemon, allyActive) && allyActive.status) {
					this.add('-activate', pokemon, 'ability: Holy Toxin');
					allyActive.cureStatus();
				}
			}
		},
		name: "Holy Toxin",
	},
	honeygather: {
		name: "Honey Gather",
	},
	hugepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		name: "Huge Power",
	},
	hustle: {
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
		name: "Hustle",
	},
	hydration: {
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.status && this.field.isWeather(['raindance', 'primordialsea'])) {
				this.debug('hydration');
				this.add('-activate', pokemon, 'ability: Hydration');
				pokemon.cureStatus();
			}
		},
		name: "Hydration",
	},
	hypercutter: {
		onBoost(boost, target, source, effect) {
			if (source && target === source) return;
			if (boost.atk && boost.atk < 0) {
				delete boost.atk;
				if (!(/** @type {ActiveMove} */(effect)).secondaries) {
					this.add("-fail", target, "unboost", "Attack", "[from] ability: Hyper Cutter", "[of] " + target);
				}
			}
		},
		name: "Hyper Cutter",
	},
	hypersubwoofer: {
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
		name: "Hyper Subwoofer",
	},
	icebody: {
		onWeather(target, source, effect) {
			if (effect.id === 'hail') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'hail') return false;
		},
		name: "Ice Body",
	},
	iceface: {
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
		name: "Ice Face",
	},
	iceforce: {
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
		name: "Ice Force",
	},
	icescales: {
		onModifySpD(spd) {
			return this.chainModify(2);
		},
		name: "Ice Scales",
	},
	illuminate: {
		onSourceModifyDamage(damage, source, target, move) {
			if (move.type === 'Ghost' || move.type === 'Dark') {
				this.debug('Illuminate weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Illuminate",
	},
	illusion: {
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
		onDamagingHit(damage, target, source, effect) {
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
		name: "Illusion",
	},
	immunity: {
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
		name: "Immunity",
	},
	imposter: {
		onStart(pokemon) {
			if (this.activeMove && this.activeMove.id === 'skillswap') return;
			let target = pokemon.side.foe.active[pokemon.side.foe.active.length - 1 - pokemon.position];
			if (target) {
				pokemon.transformInto(target, this.getAbility('imposter'));
			}
		},
		name: "Imposter",
	},
	infiltrator: {
		onModifyMove(move) {
			move.infiltrates = true;
		},
		name: "Infiltrator",
	},
	innardsout: {
		name: "Innards Out",
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (source && source !== target && move && move.effectType === 'Move' && !target.hp) {
				this.damage(damage, source, target);
			}
		},
	},
	innerfocus: {
		onFlinch: false,
		name: "Inner Focus",
	},
	insomnia: {
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
		name: "Insomnia",
	},
	intimidate: {
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
		name: "Intimidate",
	},
	intrepidsword: {
		onStart(pokemon) {
			this.boost({atk: 1}, pokemon);
		},
		name: "Intrepid Sword",
	},
	ironbarbs: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Iron Barbs",
	},
	ironfist: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['punch']) {
				this.debug('Iron Fist boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Iron Fist",
	},
	justified: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.type === 'Dark') {
				this.boost({atk: 1});
			}
		},
		name: "Justified",
	},
	keeneye: {
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
		name: "Keen Eye",
	},
	klutz: {
		// Item suppression implemented in Pokemon.ignoringItem() within sim/pokemon.js
		name: "Klutz",
	},
	leafguard: {
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
		name: "Leaf Guard",
	},
	levitate: {
		// airborneness implemented in sim/pokemon.js:Pokemon#isGrounded
		name: "Levitate",
	},
	libero: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			let type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		name: "Libero",
	},
	lightmetal: {
		onModifyWeight(weight) {
			return weight / 2;
		},
		name: "Light Metal",
	},
	lightningrod: {
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
		name: "Lightning Rod",
	},
	limber: {
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
		name: "Limber",
	},
	liquidooze: {
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
	},
	liquidvoice: {
		onModifyMovePriority: -1,
		onModifyMove(move) {
			if (move.flags['sound']) {
				move.type = 'Water';
			}
		},
		name: "Liquid Voice",
	},
	livingcastle: {
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
		name: "Living Castle",
	},
	longreach: {
		onModifyMove(move) {
			delete move.flags['contact'];
		},
		name: "Long Reach",
	},
	magicbounce: {
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
	},
	magicguard: {
		onDamage(damage, target, source, effect) {
			if (effect.effectType !== 'Move') {
				return false;
			}
		},
		name: "Magic Guard",
	},
	magician: {
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
		name: "Magician",
	},
	magmaarmor: {
		onUpdate(pokemon) {
			if (pokemon.status === 'frz') {
				this.add('-activate', pokemon, 'ability: Magma Armor');
				pokemon.cureStatus();
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		name: "Magma Armor",
	},
	magnetpull: {
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
		name: "Magnet Pull",
	},
	marvelscale: {
		onModifyDefPriority: 6,
		onModifyDef(def, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Marvel Scale",
	},
	megalauncher: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['pulse']) {
				return this.chainModify(1.5);
			}
		},
		name: "Mega Launcher",
	},
	merciless: {
		onModifyCritRatio(critRatio, source, target) {
			if (target && ['psn', 'tox'].includes(target.status)) return 5;
		},
		name: "Merciless",
	},
	minedeployment: {
		onStart(pokemon) {
			let move = 'minedeploy';
			this.add('-ability', pokemon, 'Mine Deployement');
			this.useMove(move, pokemon, move.target);
		},
		name: "Mine Deployment!",
	},
	minus: {
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
		name: "Minus",
	},
	mirrorarmor: {
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
		name: "Mirror Armor",
	},
	misdirection: {
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
		onDamagingHit(damage, target, source, effect) {
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
		name: "Misdirection",
	},
	mistysurge: {
		onStart(source) {
			this.field.setTerrain('mistyterrain');
		},
		name: "Misty Surge",
	},
	moldbreaker: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Mold Breaker');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Mold Breaker",
	},
	moltenscale: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.baseMaxhp / 8, source, target);
				if (this.randomChance(7, 20)) {
					source.trySetStatus('brn', target);
				}
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'frz') return false;
		},
		name: "Molten Scale",
	},
	moody: {
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
		name: "Moody",
	},
	motordrive: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.boost({spe: 1})) {
					this.add('-immune', target, '[from] ability: Motor Drive');
				}
				return null;
			}
		},
		name: "Motor Drive",
	},
	moxie: {
		onSourceFaint(target, source, effect) {
			if (effect && effect.effectType === 'Move') {
				this.boost({atk: 1}, source);
			}
		},
		name: "Moxie",
	},
	multiscale: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.baseMaxhp) {
				this.debug('Multiscale weaken');
				return this.chainModify(0.5);
			}
		},
		name: "Multiscale",
	},
	multitype: {
		// Multitype's type-changing itself is implemented in statuses.js
		name: "Multitype",
	},
	mummy: {
		name: "Mummy",
		onDamagingHit(damage, target, source, move) {
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
	},
	naturalcure: {
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
		name: "Natural Cure",
	},
	neuroforce: {
		onModifyDamage(damage, source, target, move) {
			if (move && target.getMoveHitData(move).typeMod > 0) {
				return this.chainModify([0x1400, 0x1000]);
			}
		},
		name: "Neuroforce",
	},
	neutralizinggas: {
		// Ability suppression implemented in sim/pokemon.ts:Pokemon#ignoringAbility
		// TODO Will abilities that already started start again? (Intimidate seems like a good test case)
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Neutralizing Gas');
			pokemon.abilityData.ending = false;
			for (const target of this.getAllActive()) {
				if (target.illusion) {
					this.singleEvent('End', this.dex.getAbility('Illusion'), target.abilityData, target, pokemon, 'neutralizinggas');
				}
				if (target.volatiles['slowstart']) {
					delete target.volatiles['slowstart'];
					this.add('-end', target, 'Slow Start', '[silent]');
				}
			}
		},
		onEnd(source) {
			// FIXME this happens before the pokemon switches out, should be the opposite order.
			// Not an easy fix since we cant use a supported event. Would need some kind of special event that
			// gathers events to run after the switch and then runs them when the ability is no longer accessible.
			// (If your tackling this, do note extreme weathers have the same issue)

			// Mark this pokemon's ability as ending so Pokemon#ignoringAbility skips it
			source.abilityData.ending = true;
			for (const pokemon of this.getAllActive()) {
				if (pokemon !== source) {
					// Will be suppressed by Pokemon#ignoringAbility if needed
					this.singleEvent('Start', pokemon.getAbility(), pokemon.abilityData, pokemon);
				}
			}
		},
		name: "Neutralizing Gas",
	},
	noguard: {
		onAnyAccuracy(accuracy, target, source, move) {
			if (move && (source === this.effectData.target || target === this.effectData.target)) {
				return true;
			}
			return accuracy;
		},
		name: "No Guard",
	},
	normalize: {
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
		name: "Normalize",
	},
	oblivious: {
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
		name: "Oblivious",
	},
	otherworldlure: {
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
		name: "Otherworld Lure",
	},
	overcoat: {
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
		name: "Overcoat",
	},
	overgrow: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Grass' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Overgrow boost');
				return this.chainModify(1.5);
			}
		},
		name: "Overgrow",
	},
	owntempo: {
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
		name: "Own Tempo",
	},
	parentalbond: {
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
		name: "Parental Bond",
	},
	pastelveil: {
		onStart(pokemon) {
			for (const ally of pokemon.allies()) {
				if (['psn', 'tox'].includes(ally.status)) {
					this.add('-activate', pokemon, 'ability: Pastel Veil');
					ally.cureStatus();
				}
			}
		},
		onUpdate(pokemon) {
			if (['psn', 'tox'].includes(pokemon.status)) {
				this.add('-activate', pokemon, 'ability: Pastel Veil');
				pokemon.cureStatus();
			}
		},
		onAllySwitchIn(pokemon) {
			if (['psn', 'tox'].includes(pokemon.status)) {
				this.add('-activate', this.effectData.target, 'ability: Pastel Veil');
				pokemon.cureStatus();
			}
		},
		onSetStatus(status, target, source, effect) {
			if (!['psn', 'tox'].includes(status.id)) return;
			if ((effect as Move)?.status) {
				this.add('-immune', target, '[from] ability: Pastel Veil');
			}
			return false;
		},
		onAllySetStatus(status, target, source, effect) {
			if (!['psn', 'tox'].includes(status.id)) return;
			if ((effect as Move)?.status) {
				const effectHolder = this.effectData.target;
				this.add('-block', target, 'ability: Pastel Veil', '[of] ' + effectHolder);
			}
			return false;
		},
		name: "Pastel Veil",
	},
	pickup: {
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
		name: "Pickup",
	},
	pickpocket: {
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
		name: "Pickpocket",
	},
	pixilate: {
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
		name: "Pixilate",
	},
	plasmaoverload: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.type === 'Electric') {
				return this.chainModify(1.7);
			}
		},
		onHit(target, source, move) {
			if (!target.hp) return;
			if (move && move.effectType === 'Move' && move.type === 'Electric') {
				this.damage((target.baseMaxhp * 3)/ 16, target, target);
			}
		},
		name: "Plasma Overload",
	},
	plus: {
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
		name: "Plus",
	},
	poisonheal: {
		onDamagePriority: 1,
		onDamage(damage, target, source, effect) {
			if (effect.id === 'psn' || effect.id === 'tox') {
				this.heal(target.baseMaxhp / 8);
				return false;
			}
		},
		name: "Poison Heal",
	},
	poisonpoint: {
		onDamagingHit(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('psn', target);
				}
			}
		},
		name: "Poison Point",
	},
	poisontouch: {
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
		name: "Poison Touch",
	},
	polaritysurge: {
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
		name: "Polarity Surge",
	},
	powerchord: {
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
		name: "Power Chord",
	},
	powerconstruct: {
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Zygarde' || pokemon.transformed || !pokemon.hp) return;
			if (pokemon.template.speciesid === 'zygardecomplete' || pokemon.hp > pokemon.baseMaxhp / 2) return;
			this.add('-activate', pokemon, 'ability: Power Construct');
			pokemon.formeChange('Zygarde-Complete', this.effect, true);
			let newHP = Math.floor(Math.floor(2 * pokemon.template.baseStats['hp'] + pokemon.set.ivs['hp'] + Math.floor(pokemon.set.evs['hp'] / 4) + 100) * pokemon.level / 100 + 10);
			pokemon.hp = newHP - (pokemon.baseMaxhp - pokemon.hp);
			pokemon.baseMaxhp = newHP;
			this.add('-heal', pokemon, pokemon.getHealth, '[silent]');
		},
		name: "Power Construct",
	},
	powerofalchemy: {
		onAllyFaint(target) {
			if (!this.effectData.target.hp) return;
			let ability = this.getAbility(target.ability);
			let bannedAbilities = ['battlebond', 'comatose', 'crisisevolution', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
			if (bannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectData.target, ability, '[from] ability: Power of Alchemy', '[of] ' + target);
			this.effectData.target.setAbility(ability);
		},
		name: "Power of Alchemy",
	},
	powerspot: {
		onAllyBasePowerPriority: 8,
		onAllyBasePower(basePower, attacker, defender, move) {
			if (attacker !== this.effectData.target) {
				this.debug('Power Spot boost');
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		name: "Power Spot",
	},
	prankster: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.category === 'Status') {
				move.pranksterBoosted = true;
				return priority + 1;
			}
		},
		name: "Prankster",
	},
	pressure: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Pressure');
		},
		onDeductPP(target, source) {
			if (target.side === source.side) return;
			return 1;
		},
		name: "Pressure",
	},
	primordialsea: {
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
		name: "Primordial Sea",
	},
	prismarmor: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod > 0) {
				this.debug('Prism Armor neutralize');
				return this.chainModify(0.75);
			}
		},
		isUnbreakable: true,
		name: "Prism Armor",
	},
	propellertail: {
		onModifyMove(move) {
			// this doesn't actually do anything because ModifyMove happens after the tracksTarget check
			// the actual implementation is in Battle#getTarget
			move.tracksTarget = true;
		},
		name: "Propeller Tail",
	},
	protean: {
		onPrepareHit(source, target, move) {
			if (move.hasBounced) return;
			let type = move.type;
			if (type && type !== '???' && source.getTypes().join() !== type) {
				if (!source.setType(type)) return;
				this.add('-start', source, 'typechange', type, '[from] ability: Protean');
			}
		},
		name: "Protean",
	},
	psychicsurge: {
		onStart(source) {
			this.field.setTerrain('psychicterrain');
		},
		name: "Psychic Surge",
	},
	punkrock: {
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
		name: "Punk Rock",
	},
	purepower: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk) {
			return this.chainModify(2);
		},
		name: "Pure Power",
	},
	queenlymajesty: {
		onFoeTryMove(target, source, effect) {
			if ((source.side === this.effectData.target.side || effect.id === 'perishsong') && effect.priority > 0.1 && effect.target !== 'foeSide') {
				this.attrLastMove('[still]');
				this.add('cant', this.effectData.target, 'ability: Queenly Majesty', effect, '[of] ' + target);
				return false;
			}
		},
		name: "Queenly Majesty",
	},
	quickfeet: {
		onModifySpe(spe, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		name: "Quick Feet",
	},
	raindish: {
		onWeather(target, source, effect) {
			if (effect.id === 'raindance' || effect.id === 'primordialsea') {
				this.heal(target.baseMaxhp / 16);
			}
		},
		name: "Rain Dish",
	},
	rattled: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && (effect.type === 'Dark' || effect.type === 'Bug' || effect.type === 'Ghost')) {
				this.boost({spe: 1});
			}
		},
		name: "Rattled",
	},
	receiver: {
		onAllyFaint(target) {
			if (!this.effectData.target.hp) return;
			let ability = this.getAbility(target.ability);
			let bannedAbilities = ['battlebond', 'comatose', 'crisisevolution', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'wonderguard', 'zenmode'];
			if (bannedAbilities.includes(target.ability)) return;
			this.add('-ability', this.effectData.target, ability, '[from] ability: Receiver', '[of] ' + target);
			this.effectData.target.setAbility(ability);
		},
		name: "Receiver",
	},
	reckless: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.recoil || move.hasCustomRecoil) {
				this.debug('Reckless boost');
				return this.chainModify([0x1333, 0x1000]);
			}
		},
		name: "Reckless",
	},
	refrigerate: {
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
		name: "Refrigerate",
	},
	regality: {
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
		name: "Regality",
	},
	regenerator: {
		onSwitchOut(pokemon) {
			pokemon.heal(pokemon.baseMaxhp / 3);
		},
		name: "Regenerator",
	},
	relentlessattack: {
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
		name: "Relentless Attack",
	},
	restrainedrage: {
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
		name: "Restrained Rage",
	},
	ripen: {
		onTryHeal(damage, target, source, effect) {
			if (!effect) return;
			if (effect.id === 'berryjuice' || effect.id === 'leftovers') {
				this.add('-activate', target, 'ability: Ripen');
			}
			if ((effect as Item).isBerry) return this.chainModify(2);
		},
		onBoost(boost, target, source, effect) {
			if (effect && (effect as Item).isBerry) {
				let b: BoostName;
				for (b in boost) {
					boost[b]! *= 2;
				}
			}
		},
		onSourceModifyDamagePriority: -1,
		onSourceModifyDamage(damage, source, target, move) {
			if (target.abilityData.berryWeaken) {
				return this.chainModify(0.5);
			}
		},
		onTryEatItemPriority: -1,
		onTryEatItem(item, pokemon) {
			this.add('-activate', pokemon, 'ability: Ripen');
		},
		onEatItem(item, pokemon) {
			const weakenBerries = [
				'Babiri Berry', 'Charti Berry', 'Chilan Berry', 'Chople Berry', 'Coba Berry', 'Colbur Berry', 'Haban Berry', 'Kasib Berry', 'Kebia Berry', 'Occa Berry', 'Passho Berry', 'Payapa Berry', 'Rindo Berry', 'Roseli Berry', 'Shuca Berry', 'Tanga Berry', 'Wacan Berry', 'Yache Berry',
			];
			// Record if the pokemon ate a berry to resist the attack
			pokemon.abilityData.berryWeaken = weakenBerries.includes(item.name);
		},
		name: "Ripen",
	},
	rivalry: {
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
		name: "Rivalry",
	},
	rkssystem: {
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
		name: "RKS System",
	},
	rockhead: {
		onDamage(damage, target, source, effect) {
			if (effect.id === 'recoil') {
				if (!this.activeMove) throw new Error("Battle.activeMove is null");
				if (this.activeMove.id !== 'struggle') return null;
			}
		},
		name: "Rock Head",
	},
	roughskin: {
		onDamagingHitOrder: 1,
		onDamagingHit(damage, target, source, move) {
			if (source && source !== target && move && move.flags['contact']) {
				this.damage(source.baseMaxhp / 8, source, target);
			}
		},
		name: "Rough Skin",
	},
	runaway: {
		name: "Run Away",
	},
	sanddefense: {
		onModifyDefPriority: 5,
		onModifyDef(def, pokemon) {
			if (pokemon.hp <= pokemon.baseMaxhp / 2) {
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
				if(target.hp <= target.baseMaxhp / 2) {
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
		name: "Sand Defense",
	},
	sandforce: {
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
		name: "Sand Force",
	},
	sandrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('sandstorm')) {
				return this.chainModify(2);
			}
		},
		onImmunity(type, pokemon) {
			if (type === 'sandstorm') return false;
		},
		name: "Sand Rush",
	},
	sandspit: {
		onDamagingHit(damage, target, source, move) {
			if (this.field.getWeather().id !== 'sandstorm') {
				this.field.setWeather('sandstorm');
			}
		},
		name: "Sand Spit",
	},
	sandstream: {
		onStart(source) {
			this.field.setWeather('sandstorm');
		},
		name: "Sand Stream",
	},
	sandveil: {
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
		name: "Sand Veil",
	},
	sapsipper: {
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
		name: "Sap Sipper",
	},
	savagestrike: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, pokemon) {
			if (pokemon.hp/pokemon.baseMaxhp <= 0.75) {
				if(pokemon.hp/pokemon.baseMaxhp <= 0.5) {
					if(pokemon.hp/pokemon.baseMaxhp <= 0.25) {
						return this.chainModify(3);
					}
					else return this.chainModify(2);
				}
				else return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, pokemon) {
			if (pokemon.hp/pokemon.baseMaxhp <= 0.75) {
				if(pokemon.hp/pokemon.baseMaxhp <= 0.5) {
					if(pokemon.hp/pokemon.baseMaxhp <= 0.25) {
						return this.chainModify(3);
					}
					else return this.chainModify(2);
				}
				else return this.chainModify(1.5);
			}
		},
		name: "Savage Strike",
	},
	schooling: {
		onStart(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Wishiwashi' || pokemon.level < 20 || pokemon.transformed) return;
			if (pokemon.hp > pokemon.baseMaxhp / 4) {
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
			if (pokemon.hp > pokemon.baseMaxhp / 4) {
				if (pokemon.template.speciesid === 'wishiwashi') {
					pokemon.formeChange('Wishiwashi-School');
				}
			} else {
				if (pokemon.template.speciesid === 'wishiwashischool') {
					pokemon.formeChange('Wishiwashi');
				}
			}
		},
		name: "Schooling",
	},
	scrappy: {
		onModifyMovePriority: -5,
		onModifyMove(move) {
			if (!move.ignoreImmunity) move.ignoreImmunity = {};
			if (move.ignoreImmunity !== true) {
				move.ignoreImmunity['Fighting'] = true;
				move.ignoreImmunity['Normal'] = true;
			}
		},
		name: "Scrappy",
	},
	serenegrace: {
		onModifyMovePriority: -2,
		onModifyMove(move) {
			if (move.secondaries) {
				this.debug('doubling secondary chance');
				for (const secondary of move.secondaries) {
					if (secondary.chance) secondary.chance *= 2;
				}
			}
		},
		name: "Serene Grace",
	},
	shadowshield: {
		onSourceModifyDamage(damage, source, target, move) {
			if (target.hp >= target.baseMaxhp) {
				this.debug('Shadow Shield weaken');
				return this.chainModify(0.5);
			}
		},
		isUnbreakable: true,
		name: "Shadow Shield",
	},//FIX SPREAD HIT
	shadowstrikesealed: {
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
		name: "Shadow Strike (Sealed)",
	},
	shadowtag: {
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
		name: "Shadow Tag",
	},
	shatterstrike: {
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				let currentBoost = 1;
				let power = .20 * defender.positiveBoosts();
				currentBoost += power;
				return this.chainModify(currentBoost);
			}
		},
		name: "Shatter Strike",
	},
	shedskin: {
		onResidualOrder: 5,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.hp && pokemon.status && this.randomChance(1, 3)) {
				this.debug('shed skin');
				this.add('-activate', pokemon, 'ability: Shed Skin');
				pokemon.cureStatus();
			}
		},
		name: "Shed Skin",
	},
	sheerforce: {
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
		name: "Sheer Force",
	},
	shielddust: {
		onModifySecondaries(secondaries) {
			this.debug('Shield Dust prevent secondary');
			return secondaries.filter(effect => !!(effect.self || effect.dustproof));
		},
		name: "Shield Dust",
	},
	shieldsdown: {
		onStart(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Minior' || pokemon.transformed) return;
			if (pokemon.hp > pokemon.baseMaxhp / 2) {
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
			if (pokemon.hp > pokemon.baseMaxhp / 2) {
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
		name: "Shields Down",
	},
	shiningaria: {
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
		name: "Shining Aria",
	},
	silentkiller: {
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
		name: "Silent Killer",
	},
	simple: {
		onBoost(boost, target, source, effect) {
			if (effect && effect.id === 'zpower') return;
			for (let i in boost) {
				// @ts-ignore
				boost[i] *= 2;
			}
		},
		name: "Simple",
	},
	skilllink: {
		onModifyMove(move) {
			if (move.multihit && Array.isArray(move.multihit) && move.multihit.length) {
				move.multihit = move.multihit[1];
			}
			if (move.multiaccuracy) {
				delete move.multiaccuracy;
			}
		},
		name: "Skill Link",
	},
	slowstart: {
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
		name: "Slow Start",
	},
	slushrush: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather('hail')) {
				return this.chainModify(2);
			}
		},
		name: "Slush Rush",
	},
	sniper: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).crit) {
				this.debug('Sniper boost');
				return this.chainModify(1.5);
			}
		},
		name: "Sniper",
	},
	snowcloak: {
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
		name: "Snow Cloak",
	},
	snowwarning: {
		onStart(source) {
			this.field.setWeather('hail');
		},
		name: "Snow Warning",
	},
	solarpower: {
		onModifySpAPriority: 5,
		onModifySpA(spa, pokemon) {
			if (this.field.isWeather(['sunnyday', 'desolateland'])) {
				return this.chainModify(1.5);
			}
		},
		onWeather(target, source, effect) {
			if (effect.id === 'sunnyday' || effect.id === 'desolateland') {
				this.damage(target.baseMaxhp / 8, target, target);
			}
		},
		name: "Solar Power",
	},
	soulheart: {
		onAnyFaintPriority: 1,
		onAnyFaint() {
			this.boost({spa: 1}, this.effectData.target);
		},
		name: "Soul-Heart",
	},
	soundproof: {
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
		name: "Soundproof",
	},
	speedboost: {
		onResidualOrder: 26,
		onResidualSubOrder: 1,
		onResidual(pokemon) {
			if (pokemon.activeTurns) {
				this.boost({spe: 1});
			}
		},
		name: "Speed Boost",
	},
	speedformation: {
		onStart(pokemon) {
			this.boost({evasion: 1});
		},
		name: "Speed Formation",
	},
	stakeout: {
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
		name: "Stakeout",
	},
	stall: {
		onModifyPriority(priority) {
			return Math.round(priority) - 0.1;
		},
		name: "Stall",
	},
	stalwart: {
		onRedirectTargetPriority: 3,
		onRedirectTarget(target, source, source2, move) {
			// Fires for all pokemon on the ability holder's side apparently
			// Ensure source is the ability holder
			if (source.hasAbility('Stalwart')) {
				this.debug(`Stalwart prevented redirection`);
				return target;
			}
		},
		name: "Stalwart",
	},
	stamina: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				this.boost({def: 1});
			}
		},
		name: "Stamina",
	},
	stancechange: {
		onBeforeMovePriority: 0.5,
		onBeforeMove(attacker, defender, move) {
			if (attacker.template.baseSpecies !== 'Aegislash' || attacker.transformed) return;
			if (move.category === 'Status' && move.id !== 'kingsshield') return;
			let targetSpecies = (move.id === 'kingsshield' ? 'Aegislash' : 'Aegislash-Blade');
			if (attacker.template.species !== targetSpecies) attacker.formeChange(targetSpecies);
		},
		name: "Stance Change",
	},
	static: {
		onDamagingHit(damage, target, source, move) {
			if (move && move.flags['contact']) {
				if (this.randomChance(3, 10)) {
					source.trySetStatus('par', target);
				}
			}
		},
		name: "Static",
	},
	steadfast: {
		onFlinch(pokemon) {
			this.boost({spe: 1});
		},
		name: "Steadfast",
	},
	steamengine: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && ['Water', 'Fire'].includes(effect.type)) {
				this.boost({spe: 6});
			}
		},
		name: "Steam Engine",
	},
	steelbreaker: {
		onStart(pokemon) {
			if(pokemon.template.species === 'Haxorus-Mega') {
				for (let moveSlot of pokemon.moveSlots) {
					if(moveSlot.id === 'slash') {
						let move = this.getMove('brutalslice');
						pokemon.moveSlots.push({
							move: move.name,
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
		name: "Steel Breaker",
	},
	steelworker: {
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
		name: "Steelworker",
	},
	stench: {
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
		name: "Stench",
	},
	stickyhold: {
		onTakeItem(item, pokemon, source) {
			if (this.suppressingAttackEvents() && pokemon !== this.activePokemon || !pokemon.hp || pokemon.item === 'stickybarb') return;
			if (!this.activeMove) throw new Error("Battle.activeMove is null");
			if ((source && source !== pokemon) || this.activeMove.id === 'knockoff') {
				this.add('-activate', pokemon, 'ability: Sticky Hold');
				return false;
			}
		},
		name: "Sticky Hold",
	},
	stormdrain: {
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
		name: "Storm Drain",
	},
	strongjaw: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['bite']) {
				return this.chainModify(1.5);
			}
		},
		name: "Strong Jaw",
	},
	sturdy: {
		onTryHit(pokemon, target, move) {
			if (move.ohko) {
				this.add('-immune', pokemon, '[from] ability: Sturdy');
				return null;
			}
		},
		onDamagePriority: -100,
		onDamage(damage, target, source, effect) {
			if (target.hp === target.baseMaxhp && damage >= target.hp && effect && effect.effectType === 'Move') {
				this.add('-ability', target, 'Sturdy');
				return target.hp - 1;
			}
		},
		name: "Sturdy",
	},
	suctioncups: {
		onDragOutPriority: 1,
		onDragOut(pokemon) {
			this.add('-activate', pokemon, 'ability: Suction Cups');
			return null;
		},
		name: "Suction Cups",
	},
//Does not show modded line
	superbrain: {
		onModifySpAPriority: 1,
		onModifySpA(spa) {
			return this.chainModify(2);
		},
		name: "Super Brain",
	},
	superdownload: {
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
		name: "Super Download",
	},
	superluck: {
		onModifyCritRatio(critRatio) {
			return critRatio + 1;
		},
		name: "Super Luck",
	},
	suresword: {
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
		name: "Sure Sword",
	},
	surgesurfer: {
		onModifySpe(spe) {
			if (this.field.isTerrain('electricterrain')) {
				return this.chainModify(2);
			}
		},
		name: "Surge Surfer",
	},
	swarm: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Bug' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Swarm boost');
				return this.chainModify(1.5);
			}
		},
		name: "Swarm",
	},
	sweetveil: {
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
	},
	swiftswim: {
		onModifySpe(spe, pokemon) {
			if (this.field.isWeather(['raindance', 'primordialsea'])) {
				return this.chainModify(2);
			}
		},
		name: "Swift Swim",
	},
	symbiosis: {
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
		name: "Symbiosis",
	},
	synchronize: {
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
		name: "Synchronize",
	},
	tangledfeet: {
		onModifyAccuracy(accuracy, target) {
			if (typeof accuracy !== 'number') return;
			if (target && target.volatiles['confusion']) {
				this.debug('Tangled Feet - decreasing accuracy');
				return accuracy * 0.5;
			}
		},
		name: "Tangled Feet",
	},
	tanglinghair: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.flags['contact']) {
				this.add('-ability', target, 'Tangling Hair');
				this.boost({spe: -1}, source, target, null, false, true);
			}
		},
		name: "Tangling Hair",
	},
	technician: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
		name: "Technician",
	},
	telepathy: {
		onTryHit(target, source, move) {
			if (target !== source && target.side === source.side && move.category !== 'Status') {
				this.add('-activate', target, 'ability: Telepathy');
				return null;
			}
		},
		name: "Telepathy",
	},
	temperamental: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.effectType === 'Move' && effect.id !== 'confused') {
				if (this.randomChance(1, 2)) {
					let statName = 'atk';
					if(target.storedStats.spa > target.storedStats.atk) statName = 'spa';
					this.boost({[statName]: 1});
				}
				else {
					this.boost({spe: 1});
				}
			}
			target.addVolatile('temperamental');
		},
		onEnd(pokemon) {
			pokemon.removeVolatile('temperamental');
		},
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			duration: 1,
			durationCallback(source, effect) {
				if (source && source.moveThisTurn) {
					return 2;
				}
				return 1;
			},
			onStart(target) {
				this.add('-start', target, 'ability: Temperamental');
			},
			onModifyAtkPriority: 5,
			onModifyAtk(atk, attacker, defender, move) {
				this.debug('Temperamental boost');
				return this.chainModify(1.3);
			},
			onModifySpAPriority: 5,
			onModifySpA(atk, attacker, defender, move) {
				this.debug('Temperamental boost');
				return this.chainModify(1.3);
			},
			onEnd(target) {
				this.add('-end', target, 'ability: Temperamental', '[silent]');
			},
		},
		name: "Temperamental",
	},
	teravolt: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Teravolt');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Teravolt",
	},
	thickfat: {
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
		name: "Thick Fat",
	},
	thirdeye: {
		onModifyMove(move) {
			delete move.flags['protect'];
			move.flags.authentic = true;
			move.ignoreImmunity = {'Ground': true, 'Psychic': true, 'Ghost': true, 'Normal': true, 'Fighting': true};
		},
		name: "Third Eye",
	},
	tintedlens: {
		onModifyDamage(damage, source, target, move) {
			if (target.getMoveHitData(move).typeMod < 0) {
				this.debug('Tinted Lens boost');
				return this.chainModify(2);
			}
		},
		name: "Tinted Lens",
	},
	torrent: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Water' && attacker.hp <= attacker.baseMaxhp / 3) {
				this.debug('Torrent boost');
				return this.chainModify(1.5);
			}
		},
		name: "Torrent",
	},
	toxicboost: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if ((attacker.status === 'psn' || attacker.status === 'tox') && move.category === 'Physical') {
				return this.chainModify(1.5);
			}
		},
		name: "Toxic Boost",
	},
	toughclaws: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['contact']) {
				return this.chainModify([0x14CD, 0x1000]);
			}
		},
		name: "Tough Claws",
	},
	trace: {
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
				let bannedAbilities = ['noability', 'battlebond', 'comatose', 'crisisevolution', 'disguise', 'flowergift', 'forecast', 'illusion', 'imposter', 'multitype', 'powerconstruct', 'powerofalchemy', 'receiver', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'trace', 'zenmode'];
				if (bannedAbilities.includes(target.ability)) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
				pokemon.setAbility(ability);
				return;
			}
		},
		name: "Trace",
	},
	trancetouch: {
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
		name: "Trance Touch",
	},
	transistor: {
		onModifyAtkPriority: 5,
		onModifyAtk(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		onModifySpAPriority: 5,
		onModifySpA(atk, attacker, defender, move) {
			if (move.type === 'Electric') {
				this.debug('Transistor boost');
				return this.chainModify(1.5);
			}
		},
		name: "Transistor",
	},
	triage: {
		onModifyPriority(priority, pokemon, target, move) {
			if (move && move.flags['heal']) return priority + 3;
		},
		name: "Triage",
	},
	triplethreat: {
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
		name: "Triple Threat",
	},
	truant: {
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
		name: "Truant",
	},
	turboblaze: {
		onStart(pokemon) {
			this.add('-ability', pokemon, 'Turboblaze');
		},
		onModifyMove(move) {
			move.ignoreAbility = true;
		},
		name: "Turboblaze",
	},
	twinterror: {
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
		name: "Twin Terror",
	},
	ultimatesparring: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.category !== 'Status') {
				return this.chainModify(2);
			}
		},
		onFoeModifyCritRatio(critRatio) {
			return 5;
		},
		name: "Ultimate Sparring",
	},
	unaware: {
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
	},
	unbendingblade: {
		onBasePowerPriority: 8,
		onBasePower(basePower, attacker, defender, move) {
			if (move.flags['sword']) {
				return this.chainModify(1.5);
			}
		},
		name: "Unbending Blade",
	},
	unburden: {
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
		name: "Unburden",
	},
	unnerve: {
		onPreStart(pokemon) {
			this.add('-ability', pokemon, 'Unnerve', pokemon.side.foe);
		},
		onFoeTryEatItem: false,
		name: "Unnerve",
	},
	unseenfist: {
		onModifyMove(move) {
			if (move.flags['contact']) delete move.flags['protect'];
		},
		name: "Unseen Fist",
	},
	victorystar: {
		onAllyModifyMove(move) {
			if (typeof move.accuracy === 'number') {
				move.accuracy *= 1.1;
			}
		},
		name: "Victory Star",
	},
	vitalspirit: {
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
		name: "Vital Spirit",
	},
	voltabsorb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Volt Absorb');
				}
				return null;
			}
		},
		name: "Volt Absorb",
	},
	voltconduit: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Electric') {
				this.boost({spa: 1});
				if (!this.heal(target.baseMaxhp / 4)) {
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
		name: "Volt Conduit",
	},
	wanderingspirit: {
		onDamagingHit(damage, target, source, move) {
			// Are these actually banned? Makes sense for them to be banned to me
			let bannedAbilities = ['battlebond', 'comatose', 'crisisevolution', 'disguise', 'iceface', 'illusion', 'multitype', 'powerconstruct', 'rkssystem', 'schooling', 'shieldsdown', 'stancechange', 'wonderguard', 'zenmode'];
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
		name: "Wandering Spirit",
		num: 254,
	},
	waterabsorb: {
		onTryHit(target, source, move) {
			if (target !== source && move.type === 'Water') {
				if (!this.heal(target.baseMaxhp / 4)) {
					this.add('-immune', target, '[from] ability: Water Absorb');
				}
				return null;
			}
		},
		name: "Water Absorb",
	},
	waterbubble: {
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
		name: "Water Bubble",
	},
	watercompaction: {
		onDamagingHit(damage, target, source, effect) {
			if (effect && effect.type === 'Water') {
				this.boost({def: 2});
			}
		},
		name: "Water Compaction",
	},
	waterveil: {
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
		name: "Water Veil",
	},
	weakarmor: {
		onDamagingHit(damage, target, source, move) {
			if (move.category === 'Physical') {
				this.boost({def: -1, spe: 2}, target, target);
			}
		},
		name: "Weak Armor",
	},
	whitesmoke: {
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
		name: "White Smoke",
	},
	wonderguard: {
		onTryHit(target, source, move) {
			if (target === source || move.category === 'Status' || move.type === '???' || move.id === 'struggle') return;
			this.debug('Wonder Guard immunity: ' + move.id);
			if (target.runEffectiveness(move) <= 0) {
				this.add('-immune', target, '[from] ability: Wonder Guard');
				return null;
			}
		},
		name: "Wonder Guard",
	},
	wonderskin: {
		onModifyAccuracyPriority: 10,
		onModifyAccuracy(accuracy, target, source, move) {
			if (move.category === 'Status' && typeof move.accuracy === 'number') {
				this.debug('Wonder Skin - setting accuracy to 50');
				return 50;
			}
		},
		name: "Wonder Skin",
	},
	zenmode: {
		onResidualOrder: 27,
		onResidual(pokemon) {
			if (pokemon.baseTemplate.baseSpecies !== 'Darmanitan' || pokemon.transformed) {
				return;
			}
			if (pokemon.hp <= pokemon.baseMaxhp / 2 && pokemon.template.speciesid === 'darmanitan') {
				pokemon.addVolatile('zenmode');
			} else if (pokemon.hp > pokemon.baseMaxhp / 2 && pokemon.template.speciesid === 'darmanitanzen') {
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
		name: "Zen Mode",
	},
};