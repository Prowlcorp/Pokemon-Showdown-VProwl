export const AbilitiesText = {
	noability: {
		name: "No Ability",
		shortDesc: "Does nothing.",
	},
	acceleration: {
		name: "Acceleration",
		desc: "This Pokemon's priority moves have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's priority moves have 1.5 times added power",
	},
	adaptability: {
		name: "Adaptability",
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
	},
	aerilate: {
		name: "Aerilate",
		desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",
	},
	aftermath: {
		name: "Aftermath",
		desc: "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	airlock: {
		name: "Air Lock",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",

		start: "  The effects of the weather disappeared.",
	},
	alluringgarden: {
		name: "Alluring Garden",
		shortDesc: "At the end of each turn, lowers other's defense, special defense, or speed by 1 stage.",
	},
	analytic: {
		name: "Analytic",
		desc: "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
		shortDesc: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
	},
	angerpoint: {
		name: "Anger Point",
		desc: "If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",

		boost: "  [POKEMON] maxed its Attack!",
	},
	anticipation: {
		name: "Anticipation",
		desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
		shortDesc: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.",

		activate: "  [POKEMON] shuddered!",
	},
	arenatrap: {
		name: "Arena Trap",
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they are airborne.",
	},
	aromaveil: {
		name: "Aroma Veil",
		desc: "This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.",
		shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",

		block: "  [POKEMON] is protected by an aromatic veil!",
	},
	assassinate: {
		name: "Assassinate",
		desc: "This Pokemon deals double damage to a pokemon below half health.",
		shortDesc: "This pokemon deals double damage to a pokemon below half health.",
	},
	aurabreak: {
		name: "Aura Break",
		desc: "While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.",
		shortDesc: "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.",

		start: "  [POKEMON] reversed all other Pok\u00E9mon's auras!",
	},
	baddreams: {
		name: "Bad Dreams",
		desc: "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
		shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",

		damage: "  [POKEMON] is tormented!",
	},
	ballfetch: {
		name: "Ball Fetch",
		shortDesc: "No competitive use.",
	},
	battery: {
		name: "Battery",
		shortDesc: "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",
	},
	battlearmor: {
		name: "Battle Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
	},
	battlebond: {
		name: "Battle Bond",
		desc: "If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.",
		shortDesc: "After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.",

		activate: "  [POKEMON] became fully charged due to its bond with its Trainer!",
		transform: "[POKEMON] became Ash-Greninja!",
	},
	beastboost: {
		name: "Beast Boost",
		desc: "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",
	},
	berserk: {
		name: "Berserk",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
	},
	bigpecks: {
		name: "Big Pecks",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",
	},
	bijuuboost: {
		name: "Bijuu Boost",
		shortDesc: "This Pokemon's stats except health are all doubled.",
	},
	blaze: {
		name: "Blaze",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks.",
	},
	bulletproof: {
		name: "Bulletproof",
		desc: "This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.",
		shortDesc: "Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).",
	},
	cheekpouch: {
		name: "Cheek Pouch",
		desc: "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect.",
		shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
	},
	chillingsonata: {
		name: "Chilling Sonata",
		desc: "Normal-Type sound moves become Ice-Type, others gain the Ice-Type.",
		shortDesc: "Normal-Type sound moves become Ice-Type, others gain the Ice-Type.",
	},
	chlorophyll: {
		name: "Chlorophyll",
		desc: "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled.",
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
	},
	clearbody: {
		name: "Clear Body",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	climatezero: {
		name: "Climate Zero",
		desc: "This Pokemon is immune to Ice-type moves. The first time it is hit by a Ice-type move, its attacking stat is multiplied by 1.5 while using a Ice-type attack as long as it remains active and has this Ability. ",
		shortDesc: "This Pokemon's Ice attacks do 1.5x damage if hit by one Ice move; Ice immunity.",
	},
	cloudnine: {
		name: "Cloud Nine",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",

		start: "#airlock",
	},
	colonize: {
		name: "Colonize",
		desc: "This Pokemon's Normal-type moves become Bug-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Bug type and have 1.2x power.",
	},
	colorchange: {
		name: "Color Change",
		desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
	},
	comatose: {
		name: "Comatose",
		desc: "This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "This Pokemon cannot be statused, and is considered to be asleep.",

		start: "  [POKEMON] is drowsing!",
	},
	competitive: {
		name: "Competitive",
		desc: "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
	},
	compoundeyes: {
		name: "Compound Eyes",
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
	},
	contradict: {
		name: "Contradict",
		desc: "The physical and special categories of this pokemon's attacks are swapped.",
		shortDesc: "The physical and special categories of this pokemon's attacks are swapped",
	},
	contrary: {
		name: "Contrary",
		desc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
		shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
	},
	corrosion: {
		name: "Corrosion",
		shortDesc: "This Pokemon can poison or badly poison other Pokemon regardless of their typing.",
	},
	cottondown: {
		name: "Cotton Down",
		desc: "When this Pokemon is hit by an attack, the Speed of all other Pokemon on the field is lowered by 1 stage.",
		shortDesc: "If this Pokemon is hit, it lowers the Speed of all other Pokemon on the field 1 stage.",
	},
	crisisevolution: {
		name: "Crisis Evolution",
		desc: "If this Pokemon is Vee, it changes to a typed form based upon the move it uses, if applicable, before attacking. STAB becomes 1.7X",
		shortDesc: "If Vee, changes Forme to typed form when attacking. 1.7X STAB",
	},
	cursedbody: {
		name: "Cursed Body",
		desc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
		shortDesc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.",
	},
	cutecharm: {
		name: "Cute Charm",
		desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.",
		shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
	},
	damp: {
		name: "Damp",
		desc: "While this Pokemon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.",

		block: "  [SOURCE] cannot use [MOVE]!",
	},
	dancer: {
		name: "Dancer",
		desc: "After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.",
		shortDesc: "After another Pokemon uses a dance move, this Pokemon uses the same move.",
	},
	darkaura: {
		name: "Dark Aura",
		desc: "While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a dark aura!",
	},
	dauntlessshield: {
		name: "Dauntless Shield",
		shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage.",
	},
	dazzling: {
		name: "Dazzling",
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",

		block: "#damp",
	},
	deathstare: {
		name: "Death Stare",
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping. Lowers opponents attack on switch in",
		shortDesc: "Prevents adjacent foes from choosing to switch. Lowers foe's Atk on swap in.",
	},
	deepfreeze: {
		name: "Deep Freeze",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be frozen.",
	},
	deepseamine: {
		name: "Deepsea Mine",
		desc: "Pokemon making contact with this Pokemon lose a random amount of their their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose a random amount of their max HP.",
	},
	defeatist: {
		name: "Defeatist",
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.",
	},
	defiant: {
		name: "Defiant",
		desc: "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
	},
	deltastream: {
		name: "Delta Stream",
		desc: "On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.",
		shortDesc: "On switch-in, strong winds begin until this Ability is not active in battle.",
	},
	desolateland: {
		name: "Desolate Land",
		desc: "On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.",
		shortDesc: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.",
	},
	desperatestruggle: {
		name: "Desperate Struggle",
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are 1.5X and it's speed is doubled.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Atk and Sp. Atk are 1.5X and its Spe is doubled.",
	},
	direweb: {
		name: "Dire Web",
		desc: "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
		shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",
	},
	disguise: {
		name: "Disguise",
		desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.",
		shortDesc: "(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.",

		block: "  Its disguise served it as a decoy!",
		transform: "[POKEMON]'s disguise was busted!",
	},
	divashock: {
		name: "Diva Shock",
		desc: "If an opponent attacks this pokemon with a damaging move before it moves, the opponent takes 1/16th of their health as damage.",
		shortDesc: "Opponent strikes before this pokemon it takes 1/16th max hp as damage.",
	},
	download: {
		name: "Download",
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
		shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
	},
	dragonforce: {
		name: "Dragon Force",
		desc: "This Pokemon's dragon-type attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's dragon-type attacks have 1.5x power. Bug Bite is not boosted.",
	},
	dragonsmaw: {
		name: "Dragon's Maw",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Dragon-type attack.",
	},
	dreamsembrace: {
		name: "Dream's Embrace",
		shortDesc: "Opponent Pokemon asleep at the end of the turn lose all stat changes.",
	},
	drizzle: {
		name: "Drizzle",
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
	},
	drought: {
		name: "Drought",
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
	},
	dryskin: {
		name: "Dry Skin",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokemon is holding Utility Umbrella, the effects of weather are nullified.",

		damage: "  ([POKEMON] was hurt by its Dry Skin.)",
	},
	earlybird: {
		name: "Early Bird",
		shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",
	},
	effectspore: {
		name: "Effect Spore",
		desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.",
		shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
	},
	electricsurge: {
		name: "Electric Surge",
		shortDesc: "On switch-in, this Pokemon summons Electric Terrain.",
	},
	elementalist: {
		name: "Elementalist",
		desc: "This Pokemon's Fire, Water, and Electric moves have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's Fire, Water, and Electric-type have 1.5x added power.",
	},
	elementnegate: {
		name: "Element Negate",
		desc: "This pokemon takes half damage from fire, electric, ice, and Water attacks from opponents of equal level with a 1% increase or decrease per level gap.",
		shortDesc: "This pokemon takes reduced damage based on the difference in levels.",
	},
	emergencyexit: {
		name: "Emergency Exit",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
	},
	eternalbeach: {
		name: "Eternal Beach",
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.",
		shortDesc: "Non-Airborne foes can't switch. +2 Def, SpD if damaged by a Water-type move.",
	},
	fairyaura: {
		name: "Fairy Aura",
		desc: "While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a fairy aura!",
	},
	filter: {
		name: "Filter",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	firstforge: {
		name: "First Forge",
		shortDesc: "This Pokemon cannot be burned or frozen. Gaining this Ability while burned or frozen cures it.",
	},
	flamebody: {
		name: "Flame Body",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned.",
	},
	flareboost: {
		name: "Flare Boost",
		desc: "While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is burned, its special attacks have 1.5x power.",
	},
	flashfire: {
		name: "Flash Fire",
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",

		start: "  The power of [POKEMON]'s Fire-type moves rose!",
	},
	flowergift: {
		name: "Flower Gift",
		desc: "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts.",
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
	},
	flowerveil: {
		name: "Flower Veil",
		desc: "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a non-volatile status condition inflicted on them by other Pokemon.",
		shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",

		block: "  [POKEMON] surrounded itself with a veil of petals!",
	},
	fluffy: {
		name: "Fluffy",
		desc: "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.",
		shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.",
	},
	forecast: {
		name: "Forecast",
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types.",
		shortDesc: "Castform's type changes to the current weather condition's type.",
	},
	forewarn: {
		name: "Forewarn",
		desc: "On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.",
		shortDesc: "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",

		activate: "  [TARGET]'s [MOVE] was revealed!",
		activateNoTarget: "  [POKEMON]'s Forewarn alerted it to [MOVE]!",
	},
	friendguard: {
		name: "Friend Guard",
		shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
	},
	frisk: {
		name: "Frisk",
		shortDesc: "On switch-in, this Pokemon identifies the held items of all opposing Pokemon.",

		activate: "  [POKEMON] frisked [TARGET] and found its [ITEM]!",
		activateNoTarget: "  [POKEMON] frisked its target and found one [ITEM]!",
	},
	fullmetalbody: {
		name: "Full Metal Body",
		desc: "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	furcoat: {
		name: "Fur Coat",
		shortDesc: "This Pokemon's Defense is doubled.",
	},
	galewings: {
		name: "Gale Wings",
		shortDesc: "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.",
	},
	galvanize: {
		name: "Galvanize",
		desc: "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",
	},
	gigatonforce: {
		name: "Gigaton Force",
		desc: "Contact destroys barriers and protect-like moves, has knock off effect on contact.",
		shortDesc: "Contact destroys protection and removes item",
	},
	gluttony: {
		name: "Gluttony",
		shortDesc: "When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.",
	},
	gooey: {
		name: "Gooey",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	gracideamastery: {
		name: "Gracidea Mastery",
		desc: "If this Pokemon is Shaymin-Sky, it will transform into Shaymin before using a status move or upon being attacked. After using the move or taking attack damage, if this Pokemon was originally in its base forme, it will transform back into Shaymin-Sky.",
		shortDesc: "Transforms into Shaymin when using status moves/being attacked.",
	},
	grasspelt: {
		name: "Grass Pelt",
		shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
	},
	grassysurge: {
		name: "Grassy Surge",
		shortDesc: "On switch-in, this Pokemon summons Grassy Terrain.",
	},
	gulpmissile: {
		name: "Gulp Missile",
		desc: "If this Pokemon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out.",
		shortDesc: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis.",
	},
	guts: {
		name: "Guts",
		desc: "If this Pokemon has a non-volatile status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored.",
		shortDesc: "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.",
	},
	harvest: {
		name: "Harvest",
		desc: "If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.",
		shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",

		addItem: "  [POKEMON] harvested one [ITEM]!",
	},
	healer: {
		name: "Healer",
		desc: "There is a 30% chance of curing an adjacent ally's non-volatile status condition at the end of each turn.",
		shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
	},
	healerheart: {
		name: "Healer Heart",
		desc: "Heals allies for 1/6th their maximum hp at the end of each turn. Healing moves used by this pokemon have increased power",
		shortDesc: "Allies heal 1/6th hp at end of turn. Healing moves gain power.",
	},
	heatedcombat: {
		name: "Heated Combat",
		desc: "This Pokemon's Fire-Type moves have a same-type attack bonus (STAB) of 1.7 instead of 1.5. Grants contact moves an additional 15% chance to burn.",
		shortDesc: "This Pokemon's Fire-type STAB is 1.7. Contact moves have an extra 15% brn chance.",
	},
	heatproof: {
		name: "Heatproof",
		desc: "The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.",
		shortDesc: "The power of Fire-type attacks against this Pokemon is halved; burn damage halved.",
	},
	heavensguidance: {
		name: "Heaven's Guidance",
		shortDesc: "Certain types of moves change in power and ability. Non-Volatiles statuses fail against this pokemon.",
	},
	heavymetal: {
		name: "Heavy Metal",
		shortDesc: "This Pokemon's weight is doubled.",
	},
	hellfield: {
		name: "Hell Field",
		shortDesc: "On switch-in, this Pokemon summons Hell Fire.",
	},
	hivemind: {
		name: "Hive Mind",
		desc: "Attack Order, Heal Order, and Defend Order are boosted in ability.",
		shortDesc: "This pokemon's signature moves are boosted.",
	},
	holytoxin: {
		name: "Holy Toxin",
		desc: "While this Pokemon is active, Poison-Type moves from opposing Pokemon are prevented from having an effect. Allies have status healed at the end of each turn",
		shortDesc: "While this Pokemon is active, Poison-Type moves can't be used. Allies heal status at turn end.",
	},
	honeygather: {
		name: "Honey Gather",
		shortDesc: "No competitive use.",
	},
	hugepower: {
		name: "Huge Power",
		shortDesc: "This Pokemon's Attack is doubled.",
	},
	hustle: {
		name: "Hustle",
		desc: "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
	},
	hydration: {
		name: "Hydration",
		desc: "This Pokemon has its non-volatile status condition cured at the end of each turn if Rain Dance is active. If this Pokemon is holding Utility Umbrella, its non-volatile status condition will not be cured.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
	},
	hypercutter: {
		name: "Hyper Cutter",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
	},
	hypersubwoofer: {
		name: "Hyper Subwoofer",
		desc: "This Pokemon's sound-based attacks have their power multiplied by 1.5 and protect moves fail against them. Modifies certain moves",
		shortDesc: "This Pokemon's sound-based attacks have 1.5x power. Protection fails. Modifies certain moves",
	},
	icebody: {
		name: "Ice Body",
		desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
	},
	iceface: {
		name: "Ice Face",
		desc: "If this Pokemon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Hail begins or when Eiscue switches in while Hail is active. Confusion damage also breaks the ice face.",
		shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail.",
	},
	iceforce: {
		name: "Ice Force",
		desc: "If Hail is active, this Pokemon's Ice-type attacks have their power multiplied by 1.5. This Pokemon takes no damage from Hail.",
		shortDesc: "This Pokemon's Ice attacks do 1.5x in Hail; immunity to it.",
	},
	icescales: {
		name: "Ice Scales",
		shortDesc: "This Pokemon receives 1/2 damage from special attacks.",
	},
	illuminate: {
		name: "Illuminate",
		shortDesc: "Halves damage from Dark and Ghost type moves.",
	},
	illusion: {
		name: "Illusion",
		desc: "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
		shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",

		end: "  [POKEMON]'s illusion wore off!",
	},
	immunity: {
		name: "Immunity",
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
	},
	imposter: {
		name: "Imposter",
		desc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.",
		shortDesc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.",
	},
	infiltrator: {
		name: "Infiltrator",
		desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil.",
		shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
	},
	innardsout: {
		name: "Innards Out",
		desc: "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
		shortDesc: "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",

		damage: "#aftermath",
	},
	innerfocus: {
		name: "Inner Focus",
		shortDesc: "This Pokemon cannot be made to flinch. Immune to Intimidate.",
	},
	insomnia: {
		name: "Insomnia",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
	},
	intimidate: {
		name: "Intimidate",
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
	},
	intrepidsword: {
		name: "Intrepid Sword",
		shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage.",
	},
	ironbarbs: {
		name: "Iron Barbs",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "#roughskin",
	},
	ironfist: {
		name: "Iron Fist",
		desc: "This Pokemon's punch-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
	},
	justified: {
		name: "Justified",
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
	},
	keeneye: {
		name: "Keen Eye",
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
	},
	klutz: {
		name: "Klutz",
		desc: "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
		shortDesc: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
	},
	leafguard: {
		name: "Leaf Guard",
		desc: "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a non-volatile status condition and Rest will fail for it.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
	},
	levitate: {
		name: "Levitate",
		desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
	},
	libero: {
		name: "Libero",
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
	},
	lightmetal: {
		name: "Light Metal",
		shortDesc: "This Pokemon's weight is halved.",
	},
	lightningrod: {
		name: "Lightning Rod",
		desc: "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",

		activate: "  [POKEMON] took the attack!",
	},
	limber: {
		name: "Limber",
		shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
	},
	liquidooze: {
		name: "Liquid Ooze",
		shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",

		damage: "  [POKEMON] sucked up the liquid ooze!",
	},
	liquidvoice: {
		name: "Liquid Voice",
		desc: "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Water type.",
	},
	livingcastle: {
		name: "Living Castle",
		desc: "This Pokemon cannot be struck by a critical hit and receives 3/4th damage from Super-Effective moves. Rock type moves used by this pokemon get STAB",
		shortDesc: "This Pokemon cannot be crit and receives 3/4th damage from SE moves. +Rock STAB",
	},
	longreach: {
		name: "Long Reach",
		shortDesc: "This Pokemon's attacks do not make contact with the target.",
	},
	magicbounce: {
		name: "Magic Bounce",
		desc: "This Pokemon blocks certain status moves and instead uses the move against the original user.",
		shortDesc: "This Pokemon blocks certain status moves and bounces them back to the user.",

		move: '#magiccoat',
	},
	magicguard: {
		name: "Magic Guard",
		desc: "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.",
		shortDesc: "This Pokemon can only be damaged by direct attacks.",
	},
	magician: {
		name: "Magician",
		desc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.",
		shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.",
	},
	magmaarmor: {
		name: "Magma Armor",
		shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",
	},
	magnetpull: {
		name: "Magnet Pull",
		desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.",
		shortDesc: "Prevents adjacent Steel-type foes from choosing to switch.",
	},
	marvelscale: {
		name: "Marvel Scale",
		desc: "If this Pokemon has a non-volatile status condition, its Defense is multiplied by 1.5.",
		shortDesc: "If this Pokemon is statused, its Defense is 1.5x.",
	},
	megalauncher: {
		name: "Mega Launcher",
		desc: "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
		shortDesc: "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
	},
	merciless: {
		name: "Merciless",
		shortDesc: "This Pokemon's attacks are critical hits if the target is poisoned.",
	},
	minedeployment: {
		name: "Mine Deployment",
		desc: "This pokemon deploys a mine field that deals 1/6th max hp damage on opponents that switch in.",
		shortDesc: "Mine field deploys that deals 1/6th max hp to foes.",
	},
	minus: {
		name: "Minus",
		desc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
	},
	mirrorarmor: {
		name: "Mirror Armor",
		desc: "When one of this Pokemon's stat stages would be lowered by another Pokemon, that Pokemon's stat stage is lowered instead. This effect does not happen if this Pokemon's stat stage was already -6.",
		shortDesc: "If this Pokemon's stat stages would be lowered, the attacker's are lowered instead.",
	},
	misdirection: {
		name: "Misdirection",
		desc: "Pokemon have a 50% chance to hit this pokemon that is not counted as evasion",
		shortDesc: "Pokemon have a 50% chance to hit this pokemon that is not counted as evasion",
	},
	mistysurge: {
		name: "Misty Surge",
		shortDesc: "On switch-in, this Pokemon summons Misty Terrain.",
	},
	moldbreaker: {
		name: "Mold Breaker",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",

		start: "  [POKEMON] breaks the mold!",
	},
	moltenscale: {
		name: "Molten Scale",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down, and have a 35% chance be burned.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP, may be burned.",
	},
	moody: {
		name: "Moody",
		desc: "This Pokemon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
		shortDesc: "Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn.",
	},
	motordrive: {
		name: "Motor Drive",
		desc: "This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
	},
	moxie: {
		name: "Moxie",
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	multiscale: {
		name: "Multiscale",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
	},
	multitype: {
		name: "Multitype",
		shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.",
	},
	mummy: {
		name: "Mummy",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect a Pokemon which already has Mummy or the Abilities Battle Bond, Comatose, Crisis Evolution, Disguise, Gracidea Mastery, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",

		changeAbility: "  [TARGET]'s Ability became Mummy!",
	},
	naturalcure: {
		name: "Natural Cure",
		shortDesc: "This Pokemon has its non-volatile status condition cured when it switches out.",

		activate: "  ([POKEMON] is cured by its Natural Cure!)",
	},
	neuroforce: {
		name: "Neuroforce",
		shortDesc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
	},
	neutralizinggas: {
		name: "Neutralizing Gas",
		desc: "While this Pokemon is active, Abilities have no effect. Does not affect the Abilities Battle Bond, Comatose, Crisis Evolution, Disguise, Gracidea Mastery, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.",
		shortDesc: "While this Pokemon is active, Abilities have no effect.",

		start: "  Neutralizing gas filled the area!",
		end: "  The effects of the neutralizing gas wore off!",
	},
	noguard: {
		name: "No Guard",
		shortDesc: "Every move used by or against this Pokemon will always hit.",
	},
	normalize: {
		name: "Normalize",
		desc: "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
	},
	oblivious: {
		name: "Oblivious",
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Immune to Intimidate.",
	},
	otherworldlure: {
		name: "Otherworld Lure",
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP. This pokemon's attacking moves restore 25% of the damage dealt to this pokemon.",
		shortDesc: "If targeted by foe's move, that move loses +1 PP. 25% of damage dealt recovered.",
	},
	overcoat: {
		name: "Overcoat",
		shortDesc: "This Pokemon is immune to powder moves and damage from Sandstorm or Hail.",
	},
	overgrow: {
		name: "Overgrow",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks.",
	},
	owntempo: {
		name: "Own Tempo",
		desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate.",
		shortDesc: "This Pokemon cannot be confused. Immune to Intimidate.",

		block: "  [POKEMON] cannot be confused!",
	},
	parentalbond: {
		name: "Parental Bond",
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
	},
	pastelveil: {
		name: "Pastel Veil",
		shortDesc: "This Pokemon and its allies cannot be poisoned. On switch-in, cures poisoned allies.",
	},
	pickpocket: {
		name: "Pickpocket",
		desc: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item.",
	},
	pickup: {
		name: "Pickup",
		shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",

		addItem: '#recycle',
	},
	pixilate: {
		name: "Pixilate",
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
	},
	plasmaoverload: {
		name: "Plasma Overload",
		desc: "Normal-Type sound moves become Electric-Type, others gain the Electric-type.",
		shortDesc: "Normal-Type sound moves become Electric-type, others gain the Electric-type.",
	},
	plus: {
		name: "Plus",
		desc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
	},
	poisonheal: {
		name: "Poison Heal",
		desc: "If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",
	},
	poisonpoint: {
		name: "Poison Point",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
	},
	poisontouch: {
		name: "Poison Touch",
		shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
	},
	polaritysurge: {
		name: "Polarity Surge",
		desc: "If an active ally has the Plus or Minus Ability, this Pokemon's Special Attack is multiplied by 2.",
		shortDesc: "If an active ally has the Plus or Minus Ability, this Pokemon's Sp. Atk is 2x.",
	},
	powerchord: {
		name: "Power Chord",
		desc: "Normal-Type sound moves become Electric-Type, others gain the Electric-type.",
		shortDesc: "Normal-Type sound moves become Electric-type, others gain the Electric-type.",
	},
	powerconstruct: {
		name: "Power Construct",
		desc: "If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.",
		shortDesc: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.",

		activate: "  You sense the presence of many!",
		transform: "[POKEMON] transformed into its Complete Forme!",
	},
	powerofalchemy: {
		name: "Power of Alchemy",
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are \"No Ability\", Battle Bond, Bijuu Boost, Comatose, Crisis Evolution, Disguise, Flower Gift, Forecast, Gracidea Mastery, Gulp Missile, Ice Face, Illusion, Imposter, Misdirection, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shadow Strike Sealed, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Power Spot",
		shortDesc: "This Pokemon's allies have the power of their moves multiplied by 1.3.",
	},
	prankster: {
		name: "Prankster",
		shortDesc: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
	},
	pressure: {
		name: "Pressure",
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP.",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",

		start: "  [POKEMON] is exerting its pressure!",
	},
	primordialsea: {
		name: "Primordial Sea",
		desc: "On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.",
		shortDesc: "On switch-in, heavy rain begins until this Ability is not active in battle.",
	},
	prismarmor: {
		name: "Prism Armor",
		desc: "This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	propellertail: {
		name: "Propeller Tail",
		shortDesc: "This Pokemon's moves cannot be redirected to a different target by any effect.",
	},
	protean: {
		name: "Protean",
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
	},
	psychicsurge: {
		name: "Psychic Surge",
		shortDesc: "On switch-in, this Pokemon summons Psychic Terrain.",
	},
	punkrock: {
		name: "Punk Rock",
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.",
		shortDesc: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.",
	},
	purepower: {
		name: "Pure Power",
		shortDesc: "This Pokemon's Attack is doubled.",
	},
	queenlymajesty: {
		name: "Queenly Majesty",
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",

		block: "#damp",
	},
	quickfeet: {
		name: "Quick Feet",
		desc: "If this Pokemon has a non-volatile status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.",
		shortDesc: "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.",
	},
	raindish: {
		name: "Rain Dish",
		desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.",
		shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",
	},
	rattled: {
		name: "Rattled",
		desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate.",
		shortDesc: "Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.",
	},
	receiver: {
		name: "Receiver",
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are \"No Ability\", Battle Bond, Bijuu Boost, Comatose, Crisis Evolution, Disguise, Flower Gift, Forecast, Gracidea Mastery, Gulp Missile, Ice Face, Illusion, Imposter, Misdirection, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shadow Strike Sealed, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",

		changeAbility: "  [SOURCE]'s [ABILITY] was taken over!",
	},
	reckless: {
		name: "Reckless",
		desc: "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
		shortDesc: "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
	},
	refrigerate: {
		name: "Refrigerate",
		desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",
	},
	regality: {
		name: "Regality",
		shortDesc: "Prevents this pokemons stats from dropping.",
	},
	regenerator: {
		name: "Regenerator",
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
	},
	relentlessattack: {
		name: "Relentless Attack",
		shortDesc: "If this pokemon is debuffed(including self debuff) by anything, it gains +1 attack",
	},
	restrainedrage: {
		name: "Restrained Rage",
		desc: "Prevents other Pokemon from lowering this Pokemon's attack. Buffs attack or speed if attempt is made. The next attack made by this pokemon if hit with a critical will be a crit.",
		shortDesc: "This pokemon powers up if it's attack is lowered. Next hit is critical if hit with a crit.",
	},
	ripen: {
		name: "Ripen",
		// TODO Needs research. Following berries aren't supported currently:
		// Custap, Jacoba, Rowap, Lanslat, Leppa, Micle
		// Check if they are affected by ripen.
		shortDesc: "When this Pokemon eats a Berry, its effect is doubled.",
	},
	rivalry: {
		name: "Rivalry",
		desc: "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
	},
	rkssystem: {
		name: "RKS System",
		shortDesc: "If this Pokemon is a Silvally, its type changes to match its held Memory.",
	},
	rockhead: {
		name: "Rock Head",
		desc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
	},
	roughskin: {
		name: "Rough Skin",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	runaway: {
		name: "Run Away",
		shortDesc: "No competitive use.",
	},
	sanddefense: {
		name: "Sand Defense",
		desc: "While above half health and this pokemon is out, a sandstorm is stirred up and cannot be replaced normally. When this pokemon falls below half health, it's defense doubles and sandstorm ends the next turn.",
		shortDesc: "Starts sandstorm, cannot be removed by normal means. Ends once health goes below half and boosts Def.",
	},
	sandforce: {
		name: "Sand Force",
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
	},
	sandrush: {
		name: "Sand Rush",
		desc: "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
	},
	sandspit: {
		name: "Sand Spit",
		desc: "When this Pokemon is hit by an attack, Sandstorm begins. This effect happens after the effects of Max and G-Max Moves.",
		shortDesc: "When this Pokemon is hit, Sandstorm begins.",
	},
	sandstream: {
		name: "Sand Stream",
		shortDesc: "On switch-in, this Pokemon summons Sandstorm.",
	},
	sandveil: {
		name: "Sand Veil",
		desc: "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
	},
	sapsipper: {
		name: "Sap Sipper",
		desc: "This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.",
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
	},
	savagestrike: {
		name: "Savage Strike",
		desc: "This pokemon's moves power up the lower its health gets.",
		shortDesc: "The more hurt this pokemon is the stronger its moves are.",
	},
	schooling: {
		name: "Schooling",
		desc: "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.",
		shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.",

		transform: "[POKEMON] formed a school!",
		transformEnd: "[POKEMON] stopped schooling!",
	},
	scrappy: {
		name: "Scrappy",
		desc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate.",
		shortDesc: "Fighting, Normal moves hit Ghost. Immune to Intimidate.",
	},
	serenegrace: {
		name: "Serene Grace",
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
	},
	shadowshield: {
		name: "Shadow Shield",
		desc: "If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
	},
	shadowstrikesealed: {
		name: "Shadow Strike (Sealed)",
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage halved. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
	},
	shadowtag: {
		name: "Shadow Tag",
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they also have this Ability.",
	},
	shatterstrike: {
		name: "Shatter Strike",
		desc: "This pokemon's contact moves power up based on the positive stat stages of the opponent.",
		shortDesc: "The more buffs the opponent has the stronger this pokemon's contact moves get.",
	},
	shedskin: {
		name: "Shed Skin",
		desc: "This Pokemon has a 33% chance to have its non-volatile status condition cured at the end of each turn.",
		shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn.",
	},
	sheerforce: {
		name: "Sheer Force",
		desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
	},
	shellarmor: {
		name: "Shell Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
	},
	shielddust: {
		name: "Shield Dust",
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
	},
	shieldsdown: {
		name: "Shields Down",
		desc: "If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by non-volatile status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.",
		// n.b. this isn't a bug, the game actually says "Shields Down deactivated" on first transformation
		// https://www.youtube.com/watch?v=SThjYBz4SEA

		transform: "Shields Down deactivated!\n([POKEMON] shielded itself.)",
		transformEnd: "Shields Down activated!\n([POKEMON] stopped shielding itself.)",
	},
	shiningaria: {
		name: "Shining Aria",
		desc: "Upon use of a sound move, there is a 30% chance of causing flinch",
		shortDesc: "Upon use of a sound move, there is a 30% chance of causing flinch",
	},
	silentkiller: {
		name: "Silent Killer",
		desc: "This pokemon has a much higher chance to crit and deals 1.25X damage with super effective hits. If this pokemon uses a status move, until it next move opponents have 0.7X accuracy against it.",
		shortDesc: "+2 Crit chance. SE: 1.25X damage. Status move: 0.7X accuracy against this pokemon.",
	},
	simple: {
		name: "Simple",
		desc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
		shortDesc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
	},
	skilllink: {
		name: "Skill Link",
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
	},
	slowstart: {
		name: "Slow Start",
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",

		start: "  [POKEMON] can't get it going!",
		end: "  [POKEMON] finally got its act together!",
	},
	slushrush: {
		name: "Slush Rush",
		shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
	},
	sniper: {
		name: "Sniper",
		shortDesc: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.",
	},
	snowcloak: {
		name: "Snow Cloak",
		desc: "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
	},
	snowwarning: {
		name: "Snow Warning",
		shortDesc: "On switch-in, this Pokemon summons Hail.",
	},
	solarpower: {
		name: "Solar Power",
		desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
	},
	solidrock: {
		name: "Solid Rock",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	soulheart: {
		name: "Soul-Heart",
		desc: "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints.",
	},
	soundproof: {
		name: "Soundproof",
		shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
	},
	speedboost: {
		name: "Speed Boost",
		desc: "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
		shortDesc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
	},
	speedformation: {
		name: "Speed Formation",
		desc: "On switch-in, this Pokemon raises its Evasion by 2 stages. ",
		shortDesc: "On switch-in, this Pokemon raises its Evasion by 2 stages.",
	},
	stakeout: {
		name: "Stakeout",
		shortDesc: "This Pokemon's attacking stat is doubled against a target that switched in this turn.",
	},
	stall: {
		name: "Stall",
		shortDesc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",
	},
	stalwart: {
		name: "Stalwart",
		shortDesc: "This Pokemon's moves cannot be redirected to a different target by any effect.",
	},
	stamina: {
		name: "Stamina",
		shortDesc: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
	},
	stancechange: {
		name: "Stance Change",
		desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",

		transform: "Changed to Blade Forme!",
		transformEnd: "Changed to Shield Forme!",
	},
	static: {
		name: "Static",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",
	},
	steadfast: {
		name: "Steadfast",
		shortDesc: "If this Pokemon flinches, its Speed is raised by 1 stage.",
	},
	steamengine: {
		name: "Steam Engine",
		shortDesc: "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves.",
	},
	steelbreaker: {
		name: "Steel Breaker",
		desc: "This deals double damage against steel types with slicing moves. Modifies Iron Tail and Slash. Powers up most slicing moves by 30%.",
		shortDesc: "Slicing moves: +30% power, 2X damage vs steel. Modifies 2 moves.",
	},
	steelworker: {
		name: "Steelworker",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
	},
	stench: {
		name: "Stench",
		desc: "This Pokemon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
		shortDesc: "This Pokemon's attacks without a chance to flinch gain a 10% chance to flinch.",
	},
	stickyhold: {
		name: "Sticky Hold",
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",

		block: "  [POKEMON]'s item cannot be removed!",
	},
	stormdrain: {
		name: "Storm Drain",
		desc: "This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.",

		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Strong Jaw",
		desc: "This Pokemon's bite-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
	},
	sturdy: {
		name: "Sturdy",
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",

		activate: "  [POKEMON] endured the hit!",
	},
	suctioncups: {
		name: "Suction Cups",
		shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",

		block: "  [POKEMON] is anchored in place with its suction cups!",
	},
	superbrain: {
		name: "Super Brain",
		shortDesc: "This Pokemon's Special Attack is doubled.",
	},
	superdownload: {
		name: "Super Download",
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 2 stages based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower, and this Pokemon's Defense or Special Defense is raised by 1 stages based on the stronger combined Offensive stat of all opposing Pokemon. Defense is raised if their Attack is higher, and Special Defense is raised if their Special Attack is the same or higher.",
		shortDesc: "On switch-in, Attack or Sp. Atk is raised 2 stage based on the foes' weaker Defense, Defense or Sp. Def is raised 1 stage based on foes' stronger Attack.",
	},
	superluck: {
		name: "Super Luck",
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",
	},
	suresword: {
		name: "Sure Sword",
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage. Ignores targets evasion.",
	},
	surgesurfer: {
		name: "Surge Surfer",
		shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",
	},
	swarm: {
		name: "Swarm",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks.",
	},
	sweetveil: {
		name: "Sweet Veil",
		shortDesc: "This Pokemon and its allies cannot fall asleep.",

		block: "  [POKEMON] can't fall asleep due to a veil of sweetness!",
	},
	swiftswim: {
		name: "Swift Swim",
		desc: "If Rain Dance is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled.",
		shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
	},
	symbiosis: {
		name: "Symbiosis",
		desc: "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
		shortDesc: "If an ally uses its item, this Pokemon gives its item to that ally immediately.",

		activate: "  [POKEMON] shared its [ITEM] with [TARGET]!",
	},
	synchronize: {
		name: "Synchronize",
		desc: "If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same non-volatile status condition.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
	},
	tangledfeet: {
		name: "Tangled Feet",
		shortDesc: "This Pokemon's evasiveness is doubled as long as it is confused.",
	},
	tanglinghair: {
		name: "Tangling Hair",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	technician: {
		name: "Technician",
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
	},
	telepathy: {
		name: "Telepathy",
		shortDesc: "This Pokemon does not take damage from attacks made by its allies.",

		block: "  [POKEMON] can't be hit by attacks from its ally Pok\u00E9mon!",
	},
	temperamental: {
		name: "Temperamental",
		desc: "This Pokemon's highest offense stat or speed is raised by 1 stage after it is damaged by a move. Next attack after being hit is 1.3X stronger",
		shortDesc: "Was hit: Random stat is boosted, next attack is stronger.",
	},
	teravolt: {
		name: "Teravolt",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",

		start: "  [POKEMON] is radiating a bursting aura!",
	},
	thickfat: {
		name: "Thick Fat",
		desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.",
	},
	thirdeye: {
		name: "Third Eye",
		shortDesc: "Protection, Substitute, and most Immunity fails when this pokemon attacks.",
	},
	tintedlens: {
		name: "Tinted Lens",
		shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",
	},
	torrent: {
		name: "Torrent",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks.",
	},
	toughclaws: {
		name: "Tough Claws",
		shortDesc: "This Pokemon's contact moves have their power multiplied by 1.3.",
	},
	toxicboost: {
		name: "Toxic Boost",
		desc: "While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is poisoned, its physical attacks have 1.5x power.",
	},
	trace: {
		name: "Trace",
		desc: "On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon's Ability. However, if one or more adjacent Pokemon has the Ability \"No Ability\", Trace won't copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned \"No Ability\", as well as \"No Ability\", Battle Bond, Bijuu Boost, Comatose, Crisis Evolution, Disguise, Flower Gift, Forecast, Gracidea Mastery, Gulp Missile, Ice Face, Illusion, Imposter, Misdirection, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shadow Strike Sealed, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",

		changeAbility: "  [POKEMON] traced [SOURCE]'s [ABILITY]!",
	},
	trancetouch: {
		name: "Trance Touch",
		desc: "Physical and Special moves made by this pokemon gain an individual 30% chance of inflicting the sleep status.",
		shortDesc: "30% chance of inflicting sleep when attacking.",
	},
	transistor: {
		name: "Transistor",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Electric-type attack.",
	},
	triage: {
		name: "Triage",
		shortDesc: "This Pokemon's healing moves have their priority increased by 3.",
	},
	triplethreat: {
		name: "Triple Threat",
		shortDesc: "This Pokemon's moves strike thrice at lower power with a third chance to activate secondaries. Tri attack modified.",
	},
	truant: {
		name: "Truant",
		shortDesc: "This Pokemon skips every other turn instead of using a move.",

		cant: "[POKEMON] is loafing around!",
	},
	turboblaze: {
		name: "Turboblaze",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",

		start: "  [POKEMON] is radiating a blazing aura!",
	},
	twinterror: {
		name: "Twin Terror",
		shortDesc: "This Pokemon's moves strike twice at lower power with a half chance to activate secondaries.",
	},
	ultimatesparring: {
		name: "Ultimate Sparring",
		shortDesc: "This Pokemon will always be critically hit. Grants 2X move BP",
	},
	unaware: {
		name: "Unaware",
		desc: "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
		shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
	},
	unbendingblade: {
		name: "Unbending Blade",
		desc: "This Pokemon's sword-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's sword-based attacks have 1.5x power.",
	},
	unburden: {
		name: "Unburden",
		desc: "If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
	},
	unnerve: {
		name: "Unnerve",
		desc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon's Speed tiers.",
		shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries.",

		start: "  [TEAM] is too nervous to eat Berries!",
	},
	unseenfist: {
		name: "Unseen Fist",
		desc: "All of this Pokemon's moves that make contact bypass protection.",
		shortDesc: "All contact moves hit through protection.",
	},
	victorystar: {
		name: "Victory Star",
		shortDesc: "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",
	},
	vitalspirit: {
		name: "Vital Spirit",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
	},
	voltabsorb: {
		name: "Volt Absorb",
		desc: "This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
	},
	voltconduit: {
		name: "Volt Conduit",
		desc: "This Pokemon is immune to Electric-type moves, and raises its Special Attack by 1 stage and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1, and heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
	},
	wanderingspirit: {
		name: "Wandering Spirit",
		desc: "Pokemon making contact with this Pokemon have their Ability swapped with this one. Does not affect a Pokemon which has the Ability Battle Bond, Comatose, Crisis Evolution, Disguise, Gracidea Mastery, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability swapped with this one.",

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Water Absorb",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
	},
	waterbubble: {
		name: "Water Bubble",
		desc: "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
	},
	watercompaction: {
		name: "Water Compaction",
		shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",
	},
	waterveil: {
		name: "Water Veil",
		shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
	},
	weakarmor: {
		name: "Weak Armor",
		desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.",
	},
	whitesmoke: {
		name: "White Smoke",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	wimpout: {
		name: "Wimp Out",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
	},
	wonderguard: {
		name: "Wonder Guard",
		shortDesc: "This Pokemon can only be damaged by supereffective moves and indirect damage.",
	},
	wonderskin: {
		name: "Wonder Skin",
		desc: "All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.",
		shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",
	},
	zenmode: {
		name: "Zen Mode",
		desc: "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.",
		shortDesc: "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.",

		transform: 'Zen Mode triggered!',
		transformEnd: 'Zen Mode ended!',
	},
};
