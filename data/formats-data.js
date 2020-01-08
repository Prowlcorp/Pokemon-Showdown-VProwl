'use strict';

/**@type {{[k: string]: TemplateFormatsData}} */
let BattleFormatsData = {
	bulbasaur: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "leechseed", "synthesis"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "LC",
	},
	ivysaur: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "leechseed", "synthesis"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "NFE",
	},
	venusaur: {
		randomBattleMoves: ["sunnyday", "sleeppowder", "gigadrain", "hiddenpowerfire", "sludgebomb", "leechseed", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	venusaurmega: {
		randomBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "sludgebomb", "leechseed", "synthesis", "earthquake", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "gigadrain", "hiddenpowerfire", "hiddenpowerice", "sludgebomb", "powerwhip", "protect"],
		requiredItem: "Venusaurite",
		tier: "UUBL",
		doublesTier: "DOU",
	},
	charmander: {
		randomBattleMoves: ["flamethrower", "overheat", "dragonpulse", "hiddenpowergrass", "fireblast"],
		randomDoubleBattleMoves: ["heatwave", "dragonpulse", "hiddenpowergrass", "fireblast", "protect"],
		tier: "LC",
	},
	charmeleon: {
		randomBattleMoves: ["flamethrower", "overheat", "dragonpulse", "hiddenpowergrass", "fireblast", "dragondance", "flareblitz", "shadowclaw", "dragonclaw"],
		randomDoubleBattleMoves: ["heatwave", "dragonpulse", "hiddenpowergrass", "fireblast", "protect"],
		tier: "NFE",
	},
	charizard: {
		randomBattleMoves: ["holdhands", "fireblast", "airslash", "earthquake", "roost"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "overheat", "dragonpulse", "roost", "tailwind", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	charizardmegax: {
		randomBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "roost", "willowisp"],
		randomDoubleBattleMoves: ["dragondance", "flareblitz", "dragonclaw", "earthquake", "rockslide", "roost", "substitute"],
		requiredItem: "Charizardite X",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	charizardmegay: {
		randomBattleMoves: ["fireblast", "airslash", "roost", "solarbeam", "focusblast", "dragonpulse"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "airslash", "roost", "solarbeam", "focusblast", "protect"],
		requiredItem: "Charizardite Y",
		tier: "OU",
		doublesTier: "DOU",
	},
	squirtle: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "aquajet", "toxic"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect"],
		tier: "LC",
	},
	wartortle: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "aquajet", "toxic"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect"],
		tier: "NFE",
	},
	blastoise: {
		randomBattleMoves: ["icebeam", "rapidspin", "scald", "toxic", "dragontail", "roar"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "followme", "icywind", "protect", "waterspout"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	blastoisemega: {
		randomBattleMoves: ["icebeam", "hydropump", "rapidspin", "scald", "dragontail", "darkpulse", "aurasphere"],
		randomDoubleBattleMoves: ["muddywater", "icebeam", "hydropump", "fakeout", "scald", "darkpulse", "aurasphere", "followme", "icywind", "protect"],
		requiredItem: "Blastoisinite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	caterpie: {
		randomBattleMoves: ["bugbite", "snore", "pound", "electroweb"],
		tier: "LC",
	},
	metapod: {
		randomBattleMoves: ["snore", "bugbite", "pound", "electroweb"],
		tier: "NFE",
	},
	butterfree: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "airslash", "gigadrain", "substitute"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "substitute", "sleeppowder", "airslash", "shadowball", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	//CHANGE
	butterfreemega: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "airslash", "gigadrain", "substitute"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "substitute", "sleeppowder", "airslash", "shadowball", "protect"],
		requiredItem: "Butterite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	weedle: {
		randomBattleMoves: ["bugbite", "stringshot", "poisonsting", "electroweb"],
		tier: "LC",
	},
	kakuna: {
		randomBattleMoves: ["electroweb", "bugbite", "irondefense", "poisonsting"],
		tier: "NFE",
	},
	beedrill: {
		randomBattleMoves: ["toxicspikes", "tailwind", "uturn", "endeavor", "poisonjab", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "poisonjab", "drillrun", "brickbreak", "knockoff", "protect", "stringshot"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	beedrillmega: {
		randomBattleMoves: ["xscissor", "swordsdance", "uturn", "poisonjab", "drillrun", "knockoff"],
		randomDoubleBattleMoves: ["xscissor", "uturn", "substitute", "poisonjab", "drillrun", "knockoff", "protect"],
		requiredItem: "Beedrillite",
		tier: "UU",
		doublesTier: "DUU",
	},
	pidgey: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "workup", "uturn", "thief"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "uturn", "tailwind", "protect"],
		tier: "LC",
	},
	pidgeotto: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "workup", "uturn", "thief"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "uturn", "tailwind", "protect"],
		tier: "NFE",
	},
	pidgeot: {
		randomBattleMoves: ["roost", "bravebird", "heatwave", "return", "uturn", "defog"],
		randomDoubleBattleMoves: ["bravebird", "heatwave", "return", "doubleedge", "uturn", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pidgeotmega: {
		randomBattleMoves: ["roost", "heatwave", "uturn", "hurricane", "defog"],
		randomDoubleBattleMoves: ["tailwind", "heatwave", "uturn", "hurricane", "protect"],
		requiredItem: "Pidgeotite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	rattata: {
		randomBattleMoves: ["facade", "flamewheel", "suckerpunch", "uturn", "wildcharge", "thunderwave", "crunch", "revenge"],
		randomDoubleBattleMoves: ["facade", "flamewheel", "suckerpunch", "uturn", "wildcharge", "superfang", "crunch", "protect"],
		tier: "LC",
	},
	rattataalola: {
		tier: "LC",
	},
	raticate: {
		randomBattleMoves: ["protect", "facade", "stompingtantrum", "suckerpunch", "uturn", "swordsdance"],
		randomDoubleBattleMoves: ["facade", "stompingtantrum", "suckerpunch", "uturn", "crunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	raticatealola: {
		randomBattleMoves: ["swordsdance", "return", "suckerpunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "protect", "crunch", "uturn"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	raticatealolatotem: {
	},
	ekans: {
		randomBattleMoves: ["coil", "gunkshot", "glare", "suckerpunch", "earthquake", "rest"],
		randomDoubleBattleMoves: ["gunkshot", "seedbomb", "suckerpunch", "aquatail", "earthquake", "rest", "rockslide", "protect"],
		tier: "LC",
	},
	arbok: {
		randomBattleMoves: ["coil", "gunkshot", "suckerpunch", "aquatail", "earthquake", "rest"],
		randomDoubleBattleMoves: ["gunkshot", "suckerpunch", "aquatail", "crunch", "earthquake", "rest", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pichu: {
		randomBattleMoves: ["fakeout", "volttackle", "encore", "irontail", "toxic", "thunderbolt"],
		randomDoubleBattleMoves: ["fakeout", "volttackle", "encore", "irontail", "protect", "thunderbolt"],

		tier: "LC",
	},
	pikachu: {
		randomBattleMoves: ["volttackle", "voltswitch", "grassknot", "hiddenpowerice", "knockoff", "irontail"],
		randomDoubleBattleMoves: ["fakeout", "thunderbolt", "volttackle", "voltswitch", "grassknot", "hiddenpowerice", "brickbreak", "extremespeed", "encore", "substitute", "knockoff", "protect", "discharge"],
		tier: "NFE",
	},
	pikachucosplay: {
		gen: 6,
		tier: "Illegal",
	},
	pikachurockstar: {
		gen: 6,
		tier: "Illegal",
	},
	pikachubelle: {
		gen: 6,
		tier: "Illegal",
	},
	pikachupopstar: {
		gen: 6,
		tier: "Illegal",
	},
	pikachuphd: {
		gen: 6,
		tier: "Illegal",
	},
	pikachulibre: {
		gen: 6,
		tier: "Illegal",
	},
	pikachuoriginal: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachuhoenn: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachusinnoh: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachuunova: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachukalos: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachualola: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pikachupartner: {
		gen: 7,
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	raichu: {
		randomBattleMoves: ["nastyplot", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["fakeout", "encore", "thunderbolt", "grassknot", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		tier: "(PU)",
		doublesTier: "DUU",
	},
	raichualola: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "psyshock", "focusblast", "voltswitch", "surf"],
		randomDoubleBattleMoves: ["thunderbolt", "fakeout", "encore", "psychic", "protect", "voltswitch"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	sandshrew: {
		randomBattleMoves: ["earthquake", "rockslide", "swordsdance", "rapidspin", "xscissor", "stealthrock", "toxic", "knockoff"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "swordsdance", "xscissor", "knockoff", "protect"],
		tier: "LC",
	},
	sandshrewalola: {
		tier: "LC",
	},
	sandslash: {
		randomBattleMoves: ["earthquake", "swordsdance", "rapidspin", "toxic", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "stoneedge", "swordsdance", "xscissor", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sandslashalola: {
		randomBattleMoves: ["swordsdance", "iciclecrash", "ironhead", "earthquake", "rapidspin", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "swordsdance", "iciclecrash", "ironhead", "earthquake", "rockslide"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	nidoranf: {
		randomBattleMoves: ["toxicspikes", "crunch", "poisonjab", "honeclaws"],
		randomDoubleBattleMoves: ["helpinghand", "crunch", "poisonjab", "protect"],
		tier: "LC",
	},
	nidorina: {
		randomBattleMoves: ["toxicspikes", "crunch", "poisonjab", "honeclaws", "icebeam", "thunderbolt", "shadowclaw"],
		randomDoubleBattleMoves: ["helpinghand", "crunch", "poisonjab", "protect", "icebeam", "thunderbolt", "shadowclaw"],
		tier: "NFE",
	},
	nidoqueen: {
		randomBattleMoves: ["toxicspikes", "stealthrock", "fireblast", "icebeam", "earthpower", "sludgewave"],
		randomDoubleBattleMoves: ["protect", "fireblast", "icebeam", "earthpower", "sludgebomb", "thunderbolt"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	nidoranm: {
		randomBattleMoves: ["suckerpunch", "poisonjab", "headsmash", "honeclaws", "shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch", "poisonjab", "shadowclaw", "helpinghand", "protect"],
		tier: "LC",
	},
	nidorino: {
		randomBattleMoves: ["suckerpunch", "poisonjab", "headsmash", "honeclaws", "shadowclaw"],
		randomDoubleBattleMoves: ["suckerpunch", "poisonjab", "shadowclaw", "helpinghand", "protect"],
		tier: "NFE",
	},
	nidoking: {
		randomBattleMoves: ["substitute", "fireblast", "icebeam", "earthpower", "sludgewave", "superpower"],
		randomDoubleBattleMoves: ["protect", "fireblast", "thunderbolt", "icebeam", "earthpower", "sludgebomb", "focusblast"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	cleffa: {
		randomBattleMoves: ["reflect", "thunderwave", "lightscreen", "toxic", "fireblast", "encore", "wish", "protect", "aromatherapy"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "protect"],
		tier: "LC",
	},
	clefairy: {
		randomBattleMoves: ["healingwish", "reflect", "thunderwave", "lightscreen", "toxic", "fireblast", "encore", "wish", "protect", "aromatherapy", "stealthrock", "moonblast", "knockoff", "moonlight"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "followme", "protect", "moonblast"],
		tier: "PU",
		doublesTier: "NFE",
	},
	clefable: {
		randomBattleMoves: ["calmmind", "softboiled", "fireblast", "moonblast", "stealthrock", "thunderwave"],
		randomDoubleBattleMoves: ["reflect", "thunderwave", "lightscreen", "safeguard", "fireblast", "followme", "protect", "moonblast", "dazzlinggleam", "softboiled"],
		tier: "OU",
		doublesTier: "DUU",
	},
	vulpix: {
		randomBattleMoves: ["flamethrower", "fireblast", "willowisp", "energyball", "substitute", "toxic", "hypnosis", "painsplit"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "willowisp", "energyball", "substitute", "protect"],

		tier: "LC Uber",
	},
	vulpixalola: {

		tier: "LC",
	},
	ninetales: {
		randomBattleMoves: ["fireblast", "willowisp", "solarbeam", "nastyplot", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["heatwave", "fireblast", "willowisp", "solarbeam", "substitute", "protect"],
		tier: "RU",
		doublesTier: "DUU",
	},
	ninetalesalola: {
		randomBattleMoves: ["nastyplot", "blizzard", "moonblast", "substitute", "hiddenpowerfire", "freezedry", "auroraveil"],
		randomDoubleBattleMoves: ["blizzard", "moonblast", "protect", "hiddenpowerfire", "freezedry", "auroraveil", "encore"],
		tier: "UUBL",
		doublesTier: "DOU",
	},
	igglybuff: {
		randomBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "healbell", "seismictoss", "counter", "protect"],
		randomDoubleBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "seismictoss", "protect"],
		tier: "LC",
	},
	jigglypuff: {
		randomBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "healbell", "seismictoss", "counter", "stealthrock", "protect", "knockoff", "dazzlinggleam"],
		randomDoubleBattleMoves: ["wish", "thunderwave", "reflect", "lightscreen", "seismictoss", "protect", "knockoff", "dazzlinggleam"],
		tier: "NFE",
	},
	wigglytuff: {
		randomBattleMoves: ["wish", "protect", "fireblast", "stealthrock", "dazzlinggleam", "hypervoice"],
		randomDoubleBattleMoves: ["thunderwave", "reflect", "lightscreen", "protect", "dazzlinggleam", "fireblast", "icebeam", "hypervoice"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	zubat: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "nastyplot", "gigadrain", "sludgebomb", "airslash", "uturn", "whirlwind", "heatwave", "superfang"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "nastyplot", "gigadrain", "sludgebomb", "airslash", "uturn", "protect", "heatwave", "superfang"],
		tier: "LC",
	},
	golbat: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "defog", "superfang", "uturn"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "nastyplot", "gigadrain", "sludgebomb", "airslash", "uturn", "protect", "heatwave", "superfang"],
		tier: "NU",
		doublesTier: "NFE",
	},
	crobat: {
		randomBattleMoves: ["bravebird", "roost", "toxic", "taunt", "defog", "uturn", "superfang"],
		randomDoubleBattleMoves: ["bravebird", "taunt", "tailwind", "crosspoison", "uturn", "protect", "superfang"],

		tier: "UU",
		doublesTier: "(DUU)",
	},
	oddish: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "synthesis", "sleeppowder", "stunspore", "toxic", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],

		tier: "LC",
	},
	gloom: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "synthesis", "sleeppowder", "stunspore", "toxic", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "leechseed", "dazzlinggleam", "sunnyday"],
		tier: "NFE",
	},
	vileplume: {
		randomBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "hiddenpowerfire", "aromatherapy", "strengthsap"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "moonblast"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	bellossom: {
		randomBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerfire", "hiddenpowerrock", "quiverdance", "moonblast"],
		randomDoubleBattleMoves: ["gigadrain", "sludgebomb", "sleeppowder", "stunspore", "protect", "hiddenpowerfire", "moonblast", "sunnyday", "solarbeam"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	paras: {
		randomBattleMoves: ["spore", "stunspore", "xscissor", "seedbomb", "synthesis", "leechseed", "aromatherapy", "knockoff"],
		randomDoubleBattleMoves: ["spore", "stunspore", "xscissor", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		tier: "LC",
	},
	parasect: {
		randomBattleMoves: ["spore", "substitute", "leechlife", "seedbomb", "leechseed", "knockoff"],
		randomDoubleBattleMoves: ["spore", "stunspore", "leechlife", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	venonat: {
		randomBattleMoves: ["sleeppowder", "morningsun", "toxicspikes", "sludgebomb", "signalbeam", "stunspore", "psychic"],
		randomDoubleBattleMoves: ["sleeppowder", "morningsun", "ragepowder", "sludgebomb", "signalbeam", "stunspore", "psychic", "protect"],
		tier: "LC",
	},
	venomoth: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "bugbuzz", "sludgebomb", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "roost", "ragepowder", "quiverdance", "protect", "bugbuzz", "sludgebomb", "gigadrain", "substitute", "psychic"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	diglett: {
		randomBattleMoves: ["earthquake", "rockslide", "stealthrock", "suckerpunch", "reversal", "substitute", "shadowclaw"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "protect", "suckerpunch", "shadowclaw"],
		tier: "LC",
	},
	diglettalola: {
		tier: "LC",
	},
	dugtrio: {
		randomBattleMoves: ["earthquake", "stoneedge", "stealthrock", "suckerpunch", "reversal", "substitute", "memento"],
		randomDoubleBattleMoves: ["earthquake", "rockslide", "protect", "suckerpunch", "stoneedge"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	dugtrioalola: {
		randomBattleMoves: ["earthquake", "ironhead", "substitute", "reversal", "stoneedge", "suckerpunch", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "ironhead", "protect", "rockslide", "stoneedge", "suckerpunch"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	meowth: {
		randomBattleMoves: ["fakeout", "uturn", "thief", "taunt", "return", "hypnosis"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "nightslash", "taunt", "return", "hypnosis", "feint", "protect"],

		tier: "LC",
	},
	meowthalola: {
		tier: "LC",
	},
	persian: {
		randomBattleMoves: ["fakeout", "uturn", "taunt", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "knockoff", "taunt", "return", "hypnosis", "feint", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	persianalola: {
		randomBattleMoves: ["nastyplot", "darkpulse", "powergem", "hypnosis", "hiddenpowerfighting"],
		randomDoubleBattleMoves: ["fakeout", "foulplay", "darkpulse", "powergem", "snarl", "hiddenpowerfighting", "partingshot", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	psyduck: {
		randomBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "crosschop", "encore", "psychic", "signalbeam"],
		randomDoubleBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "crosschop", "encore", "psychic", "signalbeam", "surf", "icywind", "protect"],

		tier: "LC",
	},
	golduck: {
		randomBattleMoves: ["hydropump", "scald", "icebeam", "psyshock", "encore", "calmmind", "substitute"],
		randomDoubleBattleMoves: ["hydropump", "scald", "icebeam", "hiddenpowergrass", "focusblast", "encore", "psychic", "icywind", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mankey: {
		randomBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab", "protect"],
		tier: "LC",
	},
	primeape: {
		randomBattleMoves: ["closecombat", "uturn", "icepunch", "stoneedge", "encore", "earthquake", "gunkshot"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "icepunch", "rockslide", "punishment", "earthquake", "poisonjab", "protect", "taunt", "stoneedge"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	growlithe: {
		randomBattleMoves: ["flareblitz", "wildcharge", "hiddenpowergrass", "closecombat", "morningsun", "willowisp", "toxic", "flamethrower"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "hiddenpowergrass", "closecombat", "willowisp", "snarl", "heatwave", "helpinghand", "protect"],

		tier: "LC",
	},
	arcanine: {
		randomBattleMoves: ["flareblitz", "wildcharge", "extremespeed", "closecombat", "morningsun", "willowisp", "toxic", "crunch", "roar"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "closecombat", "willowisp", "snarl", "protect", "extremespeed"],

		tier: "RU",
		doublesTier: "DUU",
	},
	poliwag: {
		randomBattleMoves: ["hydropump", "icebeam", "encore", "bellydrum", "hypnosis", "waterfall", "return"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "encore", "icywind", "hypnosis", "waterfall", "return", "protect", "helpinghand"],
		tier: "LC",
	},
	poliwhirl: {
		randomBattleMoves: ["hydropump", "icebeam", "encore", "bellydrum", "hypnosis", "waterfall", "return", "earthquake"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "encore", "icywind", "hypnosis", "waterfall", "return", "protect", "helpinghand", "earthquake"],
		tier: "NFE",
	},
	poliwrath: {
		randomBattleMoves: ["hydropump", "focusblast", "icepunch", "rest", "sleeptalk", "scald", "circlethrow", "raindance"],
		randomDoubleBattleMoves: ["bellydrum", "encore", "waterfall", "protect", "icepunch", "earthquake", "brickbreak", "rockslide"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	abra: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		tier: "LC",
	},
	kadabra: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "hiddenpowerfighting", "shadowball", "encore", "substitute"],
		tier: "NFE",
	},
	alakazam: {
		randomBattleMoves: ["psyshock", "psychic", "focusblast", "shadowball", "hiddenpowerice", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "focusblast", "shadowball", "encore", "substitute", "dazzlinggleam"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	alakazammega: {
		randomBattleMoves: ["calmmind", "psyshock", "focusblast", "shadowball", "encore", "substitute"],
		randomDoubleBattleMoves: ["protect", "psychic", "psyshock", "focusblast", "shadowball", "encore", "substitute", "dazzlinggleam"],
		requiredItem: "Alakazite",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	machop: {
		randomBattleMoves: ["dynamicpunch", "bulkup", "icepunch", "rockslide", "bulletpunch", "knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "rockslide", "bulletpunch", "knockoff"],
		tier: "LC",
	},
	machoke: {
		randomBattleMoves: ["dynamicpunch", "bulkup", "icepunch", "rockslide", "bulletpunch", "poweruppunch", "knockoff"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "rockslide", "bulletpunch", "knockoff"],
		tier: "NFE",
	},
	machamp: {
		randomBattleMoves: ["dynamicpunch", "icepunch", "stoneedge", "bulletpunch", "knockoff", "substitute"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "stoneedge", "rockslide", "bulletpunch", "knockoff", "wideguard"],

		tier: "RU",
		doublesTier: "(DUU)",
	},
	machampmega: { //CHANGE
		randomBattleMoves: ["dynamicpunch", "icepunch", "stoneedge", "bulletpunch", "knockoff", "substitute"],
		randomDoubleBattleMoves: ["dynamicpunch", "protect", "icepunch", "stoneedge", "rockslide", "bulletpunch", "knockoff", "wideguard"],

		requiredItem: "Machampite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	bellsprout: {
		randomBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb", "protect"],

		tier: "LC",
	},
	weepinbell: {
		randomBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "seedbomb", "knockoff", "protect"],
		tier: "NFE",
	},
	victreebel: {
		randomBattleMoves: ["sleeppowder", "sludgebomb", "gigadrain", "hiddenpowerfire", "suckerpunch", "swordsdance", "powerwhip", "knockoff"],
		randomDoubleBattleMoves: ["sleeppowder", "sunnyday", "growth", "solarbeam", "sludgebomb", "weatherball", "suckerpunch", "powerwhip", "knockoff", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	tentacool: {
		randomBattleMoves: ["toxicspikes", "rapidspin", "scald", "sludgebomb", "icebeam", "knockoff", "gigadrain", "toxic", "dazzlinggleam"],
		randomDoubleBattleMoves: ["muddywater", "scald", "sludgebomb", "icebeam", "knockoff", "gigadrain", "protect", "dazzlinggleam"],
		tier: "LC",
	},
	tentacruel: {
		randomBattleMoves: ["toxicspikes", "rapidspin", "scald", "sludgebomb", "acidspray", "knockoff"],
		randomDoubleBattleMoves: ["muddywater", "scald", "sludgebomb", "acidspray", "icebeam", "knockoff", "gigadrain", "protect", "dazzlinggleam"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	geodude: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		tier: "LC",
	},
	geodudealola: {
		tier: "LC",
	},
	graveler: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		tier: "NFE",
	},
	graveleralola: {
		tier: "NFE",
	},
	golem: {
		randomBattleMoves: ["stealthrock", "earthquake", "explosion", "suckerpunch", "toxic", "rockblast"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "suckerpunch", "hammerarm", "firepunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	golemalola: {
		randomBattleMoves: ["stealthrock", "stoneedge", "return", "thunderpunch", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["doubleedge", "stoneedge", "rockslide", "earthquake", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ponyta: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "hypnosis", "flamecharge"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "flamecharge"],
		tier: "LC",
	},
	rapidash: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "highhorsepower", "willowisp"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "flamecharge", "megahorn", "drillrun", "willowisp"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	slowpoke: {
		randomBattleMoves: ["scald", "aquatail", "zenheadbutt", "thunderwave", "toxic", "recover", "trickroom"],
		randomDoubleBattleMoves: ["scald", "aquatail", "zenheadbutt", "thunderwave", "recover", "trickroom", "protect"],

		tier: "LC",
	},
	slowbro: {
		randomBattleMoves: ["scald", "toxic", "thunderwave", "psyshock", "fireblast", "icebeam", "recover"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "recover", "trickroom", "protect", "psyshock"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	slowbromega: {
		randomBattleMoves: ["calmmind", "scald", "psyshock", "recover", "fireblast", "icebeam"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "thunderwave", "recover", "trickroom", "protect", "psyshock"],
		requiredItem: "Slowbronite",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	slowking: {
		randomBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "toxic", "recover", "trickroom", "nastyplot", "dragontail", "psyshock"],
		randomDoubleBattleMoves: ["scald", "fireblast", "icebeam", "psychic", "grassknot", "thunderwave", "recover", "trickroom", "protect", "psyshock"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	magnemite: {
		randomBattleMoves: ["thunderbolt", "thunderwave", "magnetrise", "substitute", "flashcannon", "hiddenpowerice", "voltswitch"],
		randomDoubleBattleMoves: ["thunderbolt", "thunderwave", "magnetrise", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge"],
		tier: "LC",
	},
	magneton: {
		randomBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "chargebeam", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt", "thunderwave", "magnetrise", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge", "hiddenpowerfire"],
		tier: "UU",
		doublesTier: "NFE",
	},
	magnezone: {
		randomBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["thunderbolt", "substitute", "flashcannon", "hiddenpowerice", "voltswitch", "protect", "electroweb", "discharge", "hiddenpowerfire"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	farfetchd: {
		randomBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "roost", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "protect", "knockoff"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	doduo: {
		randomBattleMoves: ["bravebird", "return", "doubleedge", "roost", "quickattack", "pursuit"],
		randomDoubleBattleMoves: ["bravebird", "return", "doubleedge", "quickattack", "protect"],
		tier: "LC",
	},
	dodrio: {
		randomBattleMoves: ["bravebird", "return", "swordsdance", "roost", "quickattack", "knockoff", "jumpkick"],
		randomDoubleBattleMoves: ["bravebird", "return", "doubleedge", "quickattack", "knockoff", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	seel: {
		randomBattleMoves: ["surf", "icebeam", "aquajet", "protect", "rest", "toxic", "drillrun"],
		randomDoubleBattleMoves: ["surf", "icebeam", "aquajet", "protect", "rest", "toxic", "fakeout", "drillrun", "icywind"],
		tier: "LC",
	},
	dewgong: {
		randomBattleMoves: ["surf", "icebeam", "perishsong", "encore", "toxic", "protect"],
		randomDoubleBattleMoves: ["surf", "icebeam", "protect", "perishsong", "fakeout", "encore", "toxic"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	grimer: {
		randomBattleMoves: ["curse", "gunkshot", "poisonjab", "shadowsneak", "painsplit", "icepunch", "firepunch", "memento"],
		randomDoubleBattleMoves: ["gunkshot", "poisonjab", "shadowsneak", "protect", "icepunch", "firepunch"],
		tier: "LC",
	},
	grimeralola: {
		tier: "LC",
	},
	muk: {
		randomBattleMoves: ["curse", "gunkshot", "poisonjab", "shadowsneak", "icepunch", "firepunch", "memento"],
		randomDoubleBattleMoves: ["gunkshot", "poisonjab", "shadowsneak", "protect", "icepunch", "firepunch", "brickbreak"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mukalola: {
		randomBattleMoves: ["curse", "gunkshot", "knockoff", "poisonjab", "shadowsneak", "pursuit", "icepunch", "firepunch"],
		randomDoubleBattleMoves: ["gunkshot", "knockoff", "stoneedge", "snarl", "protect", "poisonjab", "shadowsneak"],
		tier: "UU",
		doublesTier: "DUU",
	},
	shellder: {
		randomBattleMoves: ["shellsmash", "hydropump", "liquidation", "rockblast", "iciclespear", "rapidspin"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "liquidation", "rockblast", "iciclespear", "protect"],

		tier: "LC",
	},
	cloyster: {
		randomBattleMoves: ["shellsmash", "iciclespear", "hydropump", "rockblast", "iceshard", "spikes", "rapidspin"],
		randomDoubleBattleMoves: ["shellsmash", "hydropump", "liquidation", "rockblast", "iciclespear", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	gastly: {
		randomBattleMoves: ["shadowball", "sludgebomb", "hiddenpowerfighting", "thunderbolt", "substitute", "disable", "painsplit", "hypnosis", "gigadrain", "trick", "dazzlinggleam"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "hiddenpowerfighting", "thunderbolt", "substitute", "disable", "taunt", "hypnosis", "gigadrain", "trick", "dazzlinggleam", "protect"],
		tier: "LC",
	},
	haunter: {
		randomBattleMoves: ["shadowball", "sludgebomb", "dazzlinggleam", "substitute", "destinybond"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "hiddenpowerfighting", "thunderbolt", "substitute", "disable", "taunt", "hypnosis", "gigadrain", "trick", "dazzlinggleam", "protect"],
		tier: "PU",
		doublesTier: "NFE",
	},
	gengar: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "substitute", "disable", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],

		tier: "UU",
		doublesTier: "DUU",
	},
	gengarmega: {
		randomBattleMoves: ["shadowball", "sludgewave", "focusblast", "taunt", "destinybond", "disable", "perishsong", "protect"],
		randomDoubleBattleMoves: ["shadowball", "sludgebomb", "focusblast", "substitute", "disable", "taunt", "hypnosis", "willowisp", "dazzlinggleam", "protect"],
		requiredItem: "Gengarite",
		tier: "Uber",
		doublesTier: "DUber",
	},
	onix: {
		randomBattleMoves: ["stealthrock", "earthquake", "stoneedge", "dragontail", "curse"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "stoneedge", "rockslide", "protect", "explosion"],
		tier: "LC",
	},
	steelix: {
		randomBattleMoves: ["stealthrock", "earthquake", "ironhead", "roar", "toxic", "rockslide"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "ironhead", "rockslide", "protect", "explosion", "wideguard"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	steelixmega: {
		randomBattleMoves: ["stealthrock", "earthquake", "heavyslam", "roar", "toxic", "dragontail"],
		randomDoubleBattleMoves: ["stealthrock", "earthquake", "heavyslam", "rockslide", "protect", "explosion"],
		requiredItem: "Steelixite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	drowzee: {
		randomBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "toxic", "shadowball", "trickroom", "calmmind", "dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "hypnosis", "shadowball", "trickroom", "calmmind", "dazzlinggleam", "toxic"],
		tier: "LC",
	},
	hypno: {
		randomBattleMoves: ["psychic", "seismictoss", "foulplay", "wish", "protect", "thunderwave", "toxic"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "hypnosis", "trickroom", "dazzlinggleam", "foulplay"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	hypnomega: { //CHANGE
		randomBattleMoves: ["psychic", "seismictoss", "foulplay", "wish", "protect", "thunderwave", "toxic"],
		randomDoubleBattleMoves: ["psychic", "seismictoss", "thunderwave", "wish", "protect", "hypnosis", "trickroom", "dazzlinggleam", "foulplay"],
		requiredItem: "Hypnotite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	krabby: {
		randomBattleMoves: ["crabhammer", "swordsdance", "agility", "rockslide", "substitute", "xscissor", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["crabhammer", "swordsdance", "rockslide", "substitute", "xscissor", "superpower", "knockoff", "protect"],
		tier: "LC",
	},
	kingler: {
		randomBattleMoves: ["liquidation", "xscissor", "rockslide", "swordsdance", "agility", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["liquidation", "xscissor", "rockslide", "substitute", "superpower", "knockoff", "protect", "wideguard"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	voltorb: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowerice"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowerice", "protect", "thunderwave"],
		tier: "LC",
	},
	electrode: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "taunt", "foulplay", "hiddenpowergrass", "signalbeam"],
		randomDoubleBattleMoves: ["voltswitch", "discharge", "taunt", "foulplay", "hiddenpowerice", "protect", "thunderwave"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	exeggcute: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "stunspore", "hiddenpowerfire", "synthesis"],
		randomDoubleBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "stunspore", "hiddenpowerfire", "protect", "trickroom"],
		tier: "LC",
	},
	exeggutor: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "leechseed", "gigadrain", "psychic", "sleeppowder", "hiddenpowerfire", "protect", "trickroom", "psyshock"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	exeggutoralola: {
		randomBattleMoves: ["dracometeor", "leafstorm", "flamethrower", "gigadrain", "trickroom"],
		randomDoubleBattleMoves: ["dracometeor", "leafstorm", "protect", "flamethrower", "trickroom", "woodhammer", "dragonhammer"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	cubone: {
		randomBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake"],
		randomDoubleBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake", "protect"],
		tier: "LC",
	},
	marowak: {
		randomBattleMoves: ["bonemerang", "earthquake", "knockoff", "doubleedge", "stoneedge", "stealthrock", "substitute"],
		randomDoubleBattleMoves: ["substitute", "bonemerang", "doubleedge", "rockslide", "firepunch", "earthquake", "protect", "swordsdance"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	marowakalola: {
		randomBattleMoves: ["flamecharge", "shadowbone", "bonemerang", "willowisp", "stoneedge", "flareblitz", "substitute"],
		randomDoubleBattleMoves: ["shadowbone", "bonemerang", "willowisp", "stoneedge", "flareblitz", "protect"],
		tier: "RU",
		doublesTier: "DUU",
	},
	marowakalolatotem: {
	},
	tyrogue: {
		randomBattleMoves: ["highjumpkick", "rapidspin", "fakeout", "bulletpunch", "machpunch", "toxic", "counter"],
		randomDoubleBattleMoves: ["highjumpkick", "fakeout", "bulletpunch", "machpunch", "helpinghand", "protect"],
		tier: "LC",
	},
	hitmonlee: {
		randomBattleMoves: ["highjumpkick", "knockoff", "stoneedge", "rapidspin", "machpunch", "poisonjab", "fakeout"],
		randomDoubleBattleMoves: ["knockoff", "rockslide", "machpunch", "fakeout", "highjumpkick", "earthquake", "blazekick", "wideguard", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	hitmonchan: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "firepunch", "machpunch", "rapidspin"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "icepunch", "firepunch", "machpunch", "earthquake", "rockslide", "protect", "thunderpunch"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	hitmontop: {
		randomBattleMoves: ["suckerpunch", "stoneedge", "rapidspin", "closecombat", "toxic"],
		randomDoubleBattleMoves: ["fakeout", "feint", "suckerpunch", "closecombat", "helpinghand", "machpunch", "wideguard"],
		tier: "NU",
		doublesTier: "DUU",
	},
	lickitung: {
		randomBattleMoves: ["wish", "protect", "dragontail", "curse", "bodyslam", "return", "powerwhip", "swordsdance", "earthquake", "toxic", "healbell"],
		randomDoubleBattleMoves: ["wish", "protect", "dragontail", "knockoff", "bodyslam", "return", "powerwhip", "swordsdance", "earthquake"],

		tier: "LC",
	},
	lickilicky: {
		randomBattleMoves: ["wish", "protect", "bodyslam", "knockoff", "dragontail", "healbell", "swordsdance", "explosion", "earthquake", "powerwhip"],
		randomDoubleBattleMoves: ["wish", "protect", "dragontail", "knockoff", "bodyslam", "rockslide", "powerwhip", "earthquake", "explosion"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	koffing: {
		randomBattleMoves: ["painsplit", "sludgebomb", "willowisp", "fireblast", "toxic", "clearsmog", "rest", "sleeptalk", "thunderbolt"],
		randomDoubleBattleMoves: ["protect", "sludgebomb", "willowisp", "fireblast", "toxic", "rest", "sleeptalk", "thunderbolt"],
		tier: "LC",
	},
	weezing: {
		randomBattleMoves: ["painsplit", "sludgebomb", "willowisp", "fireblast", "protect", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "sludgebomb", "willowisp", "fireblast", "toxic", "painsplit", "thunderbolt", "explosion"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	rhyhorn: {
		randomBattleMoves: ["stoneedge", "earthquake", "aquatail", "megahorn", "stealthrock", "rockblast", "rockpolish"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "aquatail", "megahorn", "stealthrock", "rockslide", "protect"],
		tier: "LC",
	},
	rhydon: {
		randomBattleMoves: ["stealthrock", "earthquake", "rockblast", "roar", "swordsdance", "stoneedge", "megahorn", "rockpolish"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "aquatail", "megahorn", "stealthrock", "rockslide", "protect"],
		tier: "NU",
		doublesTier: "NFE",
	},
	rhyperior: {
		randomBattleMoves: ["stoneedge", "earthquake", "icepunch", "megahorn", "stealthrock", "rockblast", "rockpolish", "dragontail"],
		randomDoubleBattleMoves: ["stoneedge", "earthquake", "hammerarm", "megahorn", "stealthrock", "rockslide", "icepunch", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	happiny: {
		randomBattleMoves: ["aromatherapy", "toxic", "thunderwave", "counter", "endeavor", "lightscreen", "fireblast"],
		randomDoubleBattleMoves: ["aromatherapy", "toxic", "thunderwave", "helpinghand", "swagger", "lightscreen", "fireblast", "protect"],
		tier: "LC",
	},
	chansey: {
		randomBattleMoves: ["softboiled", "healbell", "stealthrock", "thunderwave", "toxic", "seismictoss", "wish"],
		randomDoubleBattleMoves: ["aromatherapy", "toxic", "thunderwave", "helpinghand", "softboiled", "lightscreen", "seismictoss", "protect", "wish"],

		tier: "OU",
		doublesTier: "NFE",
	},
	blissey: {
		randomBattleMoves: ["toxic", "flamethrower", "seismictoss", "softboiled", "healbell", "protect", "thunderwave", "stealthrock"],
		randomDoubleBattleMoves: ["wish", "softboiled", "protect", "toxic", "aromatherapy", "seismictoss", "helpinghand", "thunderwave", "flamethrower", "icebeam"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	tangela: {
		randomBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerfire", "hiddenpowerice", "leechseed", "knockoff", "leafstorm", "sludgebomb", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerrock", "hiddenpowerice", "leechseed", "knockoff", "leafstorm", "stunspore", "protect", "hiddenpowerfire"],
		tier: "PU",
		doublesTier: "LC Uber",
	},
	tangrowth: {
		randomBattleMoves: ["gigadrain", "leafstorm", "knockoff", "earthquake", "hiddenpowerfire", "rockslide", "sleeppowder", "leechseed", "synthesis"],
		randomDoubleBattleMoves: ["gigadrain", "sleeppowder", "hiddenpowerice", "leechseed", "knockoff", "ragepowder", "focusblast", "protect", "powerwhip", "earthquake"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	kangaskhan: {
		randomBattleMoves: ["return", "suckerpunch", "earthquake", "drainpunch", "crunch", "fakeout"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "drainpunch", "crunch", "protect"],

		tier: "PU",
		doublesTier: "(DUU)",
	},
	kangaskhanmega: {
		randomBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "poweruppunch", "crunch"],
		randomDoubleBattleMoves: ["fakeout", "return", "suckerpunch", "earthquake", "doubleedge", "poweruppunch", "drainpunch", "crunch", "protect"],
		requiredItem: "Kangaskhanite",
		tier: "Uber",
		doublesTier: "DUber",
	},
	horsea: {
		randomBattleMoves: ["hydropump", "icebeam", "substitute", "hiddenpowergrass", "raindance"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "substitute", "hiddenpowergrass", "raindance", "muddywater", "protect"],
		tier: "LC",
	},
	seadra: {
		randomBattleMoves: ["hydropump", "icebeam", "agility", "substitute", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "substitute", "hiddenpowergrass", "agility", "muddywater", "protect"],
		tier: "NFE",
	},
	kingdra: {
		randomBattleMoves: ["raindance", "hydropump", "dracometeor", "icebeam", "dragondance", "waterfall", "outrage"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "raindance", "dracometeor", "dragonpulse", "muddywater", "protect"],

		tier: "NUBL",
		doublesTier: "DOU",
	},
	goldeen: {
		randomBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "icebeam"],
		randomDoubleBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "icebeam", "protect"],
		tier: "LC",
	},
	seaking: {
		randomBattleMoves: ["waterfall", "megahorn", "knockoff", "drillrun", "scald", "icebeam"],
		randomDoubleBattleMoves: ["waterfall", "surf", "megahorn", "knockoff", "drillrun", "icebeam", "icywind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	staryu: {
		randomBattleMoves: ["scald", "thunderbolt", "icebeam", "rapidspin", "recover", "dazzlinggleam", "hydropump"],
		randomDoubleBattleMoves: ["scald", "thunderbolt", "icebeam", "protect", "recover", "dazzlinggleam", "hydropump"],

		tier: "LC",
	},
	starmie: {
		randomBattleMoves: ["thunderbolt", "icebeam", "rapidspin", "recover", "psyshock", "scald", "hydropump"],
		randomDoubleBattleMoves: ["surf", "thunderbolt", "icebeam", "protect", "recover", "psychic", "psyshock", "scald", "hydropump"],
		tier: "UU",
		doublesTier: "DUU",
	},
	mrmime: {
		randomBattleMoves: ["nastyplot", "psyshock", "dazzlinggleam", "shadowball", "focusblast", "healingwish", "encore"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "hiddenpowerfighting", "psychic", "thunderbolt", "encore", "icywind", "protect", "wideguard", "dazzlinggleam", "followme"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	scyther: {
		randomBattleMoves: ["swordsdance", "roost", "bugbite", "quickattack", "brickbreak", "aerialace", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "protect", "bugbite", "quickattack", "brickbreak", "aerialace", "feint", "uturn", "knockoff"],

		tier: "PU",
		doublesTier: "LC Uber",
	},
	scizor: {
		randomBattleMoves: ["swordsdance", "bulletpunch", "bugbite", "superpower", "uturn", "pursuit", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],

		tier: "UU",
		doublesTier: "(DUU)",
	},
	scizormega: {
		randomBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "defog", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "roost", "bulletpunch", "bugbite", "superpower", "uturn", "protect", "feint", "knockoff"],
		requiredItem: "Scizorite",
		tier: "OU",
		doublesTier: "DUU",
	},
	elekid: {
		randomBattleMoves: ["thunderbolt", "crosschop", "voltswitch", "substitute", "icepunch", "psychic", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["thunderbolt", "crosschop", "voltswitch", "substitute", "icepunch", "psychic", "hiddenpowergrass", "protect"],
		tier: "LC",
	},
	electabuzz: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "substitute", "hiddenpowerice", "hiddenpowergrass", "focusblast", "psychic"],
		randomDoubleBattleMoves: ["thunderbolt", "crosschop", "voltswitch", "substitute", "icepunch", "psychic", "hiddenpowergrass", "protect", "focusblast", "discharge"],

		tier: "NFE",
	},
	electivire: {
		randomBattleMoves: ["wildcharge", "crosschop", "icepunch", "flamethrower", "earthquake", "voltswitch"],
		randomDoubleBattleMoves: ["wildcharge", "crosschop", "icepunch", "substitute", "flamethrower", "earthquake", "protect", "followme"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	magby: {
		randomBattleMoves: ["flareblitz", "substitute", "fireblast", "hiddenpowergrass", "hiddenpowerice", "crosschop", "thunderpunch", "overheat"],
		tier: "LC",
	},
	magmar: {
		randomBattleMoves: ["flareblitz", "substitute", "fireblast", "hiddenpowergrass", "hiddenpowerice", "crosschop", "thunderpunch", "focusblast"],

		tier: "NFE",
	},
	magmortar: {
		randomBattleMoves: ["fireblast", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "earthquake", "substitute"],
		randomDoubleBattleMoves: ["fireblast", "taunt", "focusblast", "hiddenpowergrass", "hiddenpowerice", "thunderbolt", "heatwave", "willowisp", "protect", "followme"],

		tier: "NU",
		doublesTier: "(DUU)",
	},
	pinsir: {
		randomBattleMoves: ["earthquake", "xscissor", "closecombat", "stoneedge", "stealthrock", "knockoff"],
		randomDoubleBattleMoves: ["protect", "swordsdance", "xscissor", "earthquake", "closecombat", "substitute", "rockslide"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pinsirmega: {
		randomBattleMoves: ["swordsdance", "earthquake", "closecombat", "quickattack", "return"],
		randomDoubleBattleMoves: ["feint", "protect", "swordsdance", "xscissor", "earthquake", "closecombat", "substitute", "quickattack", "return", "rockslide"],
		requiredItem: "Pinsirite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	tauros: {
		randomBattleMoves: ["bodyslam", "earthquake", "zenheadbutt", "rockslide", "doubleedge"],
		randomDoubleBattleMoves: ["return", "earthquake", "zenheadbutt", "rockslide", "stoneedge", "protect", "doubleedge"],

		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	magikarp: {
		randomBattleMoves: ["bounce", "flail", "pound", "hydropump"],

		tier: "LC",
	},
	gyarados: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "dragontail", "stoneedge", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "taunt", "protect", "thunderwave", "stoneedge", "substitute", "icefang"],

		tier: "UUBL",
		doublesTier: "DUU",
	},
	gyaradosmega: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "substitute", "icefang", "crunch"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "bounce", "taunt", "protect", "thunderwave", "stoneedge", "substitute", "icefang", "crunch"],
		requiredItem: "Gyaradosite",
		tier: "OU",
		doublesTier: "DUU",
	},
	lapras: {
		randomBattleMoves: ["icebeam", "thunderbolt", "healbell", "toxic", "hydropump", "substitute"],
		randomDoubleBattleMoves: ["icebeam", "thunderbolt", "hydropump", "surf", "substitute", "protect", "iceshard", "icywind"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ditto: {
		randomBattleMoves: ["transform"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	eevee: {
		randomBattleMoves: ["quickattack", "return", "bite", "irontail", "yawn", "protect", "wish"],
		randomDoubleBattleMoves: ["quickattack", "return", "bite", "helpinghand", "irontail", "yawn", "protect", "wish"],

		tier: "LC",
	},
	vaporeon: {
		randomBattleMoves: ["wish", "protect", "scald", "roar", "icebeam", "healbell"],
		randomDoubleBattleMoves: ["helpinghand", "wish", "protect", "scald", "muddywater", "icebeam", "toxic", "hydropump"],

		tier: "NU",
		doublesTier: "(DUU)",
	},
	jolteon: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowerice", "shadowball", "signalbeam"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "hiddenpowergrass", "hiddenpowerice", "helpinghand", "protect", "substitute", "signalbeam"],

		tier: "RU",
		doublesTier: "(DUU)",
	},
	flareon: {
		randomBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "quickattack"],
		randomDoubleBattleMoves: ["flamecharge", "facade", "flareblitz", "superpower", "wish", "protect", "helpinghand"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	espeon: {
		randomBattleMoves: ["psychic", "psyshock", "substitute", "shadowball", "calmmind", "morningsun", "dazzlinggleam"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "substitute", "wish", "shadowball", "hiddenpowerfighting", "helpinghand", "protect", "dazzlinggleam"],

		tier: "RU",
		doublesTier: "(DUU)",
	},
	umbreon: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "foulplay"],
		randomDoubleBattleMoves: ["moonlight", "wish", "protect", "healbell", "snarl", "foulplay", "helpinghand"],

		tier: "RU",
		doublesTier: "(DUU)",
	},
	leafeon: {
		randomBattleMoves: ["swordsdance", "leafblade", "healbell", "xscissor", "synthesis", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "substitute", "xscissor", "protect", "helpinghand", "knockoff"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	glaceon: {
		randomBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "healbell", "wish", "protect", "toxic"],
		randomDoubleBattleMoves: ["icebeam", "hiddenpowerground", "shadowball", "wish", "protect", "healbell", "helpinghand"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	porygon: {
		randomBattleMoves: ["triattack", "icebeam", "recover", "toxic", "thunderwave", "discharge", "trick"],
		tier: "LC Uber",
	},
	porygon2: {
		randomBattleMoves: ["triattack", "icebeam", "recover", "toxic", "thunderwave", "thunderbolt"],
		randomDoubleBattleMoves: ["triattack", "icebeam", "discharge", "shadowball", "thunderbolt", "protect", "recover"],
		tier: "RU",
		doublesTier: "DOU",
	},
	porygonz: {
		randomBattleMoves: ["triattack", "shadowball", "icebeam", "thunderbolt", "trick", "nastyplot"],
		randomDoubleBattleMoves: ["protect", "triattack", "darkpulse", "hiddenpowerfighting", "icebeam", "thunderbolt", "agility", "trick", "nastyplot"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	porygonzmega: {//CHANGE
		randomBattleMoves: ["triattack", "shadowball", "icebeam", "thunderbolt", "trick", "nastyplot"],
		randomDoubleBattleMoves: ["protect", "triattack", "darkpulse", "hiddenpowerfighting", "icebeam", "thunderbolt", "agility", "trick", "nastyplot"],
		requiredItem: "Porygonite",
		tier: "UUBL",
		doublesTier: "DUU",
	},
	omanyte: {
		randomBattleMoves: ["shellsmash", "surf", "icebeam", "earthpower", "hiddenpowerelectric", "spikes", "toxicspikes", "stealthrock", "hydropump"],
		tier: "LC",
	},
	omastar: {
		randomBattleMoves: ["shellsmash", "scald", "icebeam", "earthpower", "spikes", "stealthrock", "hydropump"],
		randomDoubleBattleMoves: ["shellsmash", "muddywater", "icebeam", "earthpower", "hiddenpowerelectric", "protect", "hydropump"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	kabuto: {
		randomBattleMoves: ["aquajet", "rockslide", "rapidspin", "stealthrock", "honeclaws", "waterfall", "toxic"],
		tier: "LC",
	},
	kabutops: {
		randomBattleMoves: ["aquajet", "stoneedge", "rapidspin", "swordsdance", "liquidation", "knockoff"],
		randomDoubleBattleMoves: ["aquajet", "stoneedge", "protect", "rockslide", "swordsdance", "liquidation", "superpower", "knockoff"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	aerodactyl: {
		randomBattleMoves: ["stealthrock", "taunt", "defog", "roost", "stoneedge", "earthquake", "doubleedge", "pursuit"],
		randomDoubleBattleMoves: ["wideguard", "taunt", "stoneedge", "rockslide", "earthquake", "aquatail", "protect", "icefang", "skydrop", "tailwind"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	aerodactylmega: {
		randomBattleMoves: ["honeclaws", "stoneedge", "aerialace", "aquatail", "earthquake", "firefang", "roost"],
		randomDoubleBattleMoves: ["wideguard", "taunt", "stoneedge", "rockslide", "earthquake", "ironhead", "aerialace", "protect", "icefang", "skydrop", "tailwind"],
		requiredItem: "Aerodactylite",
		tier: "UU",
		doublesTier: "DUU",
	},
	munchlax: {
		randomBattleMoves: ["rest", "curse", "sleeptalk", "bodyslam", "earthquake", "return", "firepunch", "icepunch", "whirlwind", "toxic"],

		tier: "LC",
	},
	snorlax: {
		randomBattleMoves: ["rest", "curse", "sleeptalk", "bodyslam", "earthquake", "return", "firepunch", "crunch", "pursuit", "whirlwind"],
		randomDoubleBattleMoves: ["curse", "protect", "bodyslam", "earthquake", "return", "firepunch", "icepunch", "crunch", "selfdestruct"],

		tier: "RU",
		doublesTier: "DUber",
	},
	articuno: {
		randomBattleMoves: ["icebeam", "roost", "freezedry", "toxic", "substitute", "hurricane"],
		randomDoubleBattleMoves: ["freezedry", "roost", "protect", "substitute", "hurricane", "tailwind"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	zapdos: {
		randomBattleMoves: ["thunderbolt", "heatwave", "hiddenpowerice", "roost", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["thunderbolt", "heatwave", "hiddenpowergrass", "hiddenpowerice", "tailwind", "protect", "discharge"],
		tier: "OU",
		doublesTier: "DOU",
	},
	moltres: {
		randomBattleMoves: ["fireblast", "roost", "substitute", "toxic", "willowisp", "hurricane"],
		randomDoubleBattleMoves: ["fireblast", "airslash", "roost", "substitute", "protect", "uturn", "willowisp", "hurricane", "heatwave", "tailwind"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	dratini: {
		randomBattleMoves: ["dragondance", "outrage", "waterfall", "fireblast", "extremespeed", "dracometeor", "substitute"],
		tier: "LC",
	},
	dragonair: {
		randomBattleMoves: ["dragondance", "outrage", "waterfall", "fireblast", "extremespeed", "dracometeor", "substitute"],
		tier: "NFE",
	},
	dragonite: {
		randomBattleMoves: ["dragondance", "outrage", "firepunch", "extremespeed", "earthquake", "roost"],
		randomDoubleBattleMoves: ["dragondance", "firepunch", "extremespeed", "dragonclaw", "earthquake", "roost", "substitute", "superpower", "dracometeor", "protect", "skydrop"],

		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	mewtwo: {
		randomBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "recover"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "fireblast", "icebeam", "calmmind", "substitute", "recover", "thunderbolt", "willowisp", "taunt", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	mewtwomegax: {
		randomBattleMoves: ["bulkup", "drainpunch", "earthquake", "taunt", "stoneedge", "zenheadbutt", "icebeam"],
		randomDoubleBattleMoves: ["bulkup", "drainpunch", "earthquake", "taunt", "stoneedge", "zenheadbutt", "icebeam"],
		requiredItem: "Mewtwonite X",
		tier: "Uber",
		doublesTier: "DUber",
	},
	mewtwomegay: {
		randomBattleMoves: ["psystrike", "aurasphere", "shadowball", "fireblast", "icebeam", "calmmind", "recover", "willowisp", "taunt"],
		randomDoubleBattleMoves: ["psystrike", "aurasphere", "shadowball", "fireblast", "icebeam", "calmmind", "recover", "willowisp", "taunt"],
		requiredItem: "Mewtwonite Y",
		tier: "Uber",
		doublesTier: "DUber",
	},
	mew: {
		randomBattleMoves: ["defog", "roost", "willowisp", "knockoff", "taunt", "icebeam", "earthpower", "aurasphere", "stealthrock", "nastyplot", "psyshock"],
		randomDoubleBattleMoves: ["taunt", "willowisp", "transform", "roost", "psyshock", "nastyplot", "aurasphere", "fireblast", "icebeam", "thunderbolt", "protect", "fakeout", "helpinghand", "tailwind"],
		tier: "OU",
		doublesTier: "DOU",
	},
	mewmega: {
		randomBattleMoves: ["defog", "roost", "willowisp", "knockoff", "taunt", "icebeam", "earthpower", "aurasphere", "stealthrock", "nastyplot", "psyshock"],
		randomDoubleBattleMoves: ["taunt", "willowisp", "transform", "roost", "psyshock", "nastyplot", "aurasphere", "fireblast", "icebeam", "thunderbolt", "protect", "fakeout", "helpinghand", "tailwind"],
		requiredMove: "Angel Wings",
		tier: "OU",
		doublesTier: "DOU",
	},
	chikorita: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "grasswhistle", "leechseed", "toxic", "gigadrain", "synthesis"],
		tier: "LC",
	},
	bayleef: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "grasswhistle", "leechseed", "toxic", "gigadrain", "synthesis"],
		tier: "NFE",
	},
	meganium: {
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "leechseed", "toxic", "gigadrain", "synthesis", "dragontail"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "leechseed", "leafstorm", "gigadrain", "synthesis", "dragontail", "healpulse", "toxic", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	meganiummega: { //CHANGE
		randomBattleMoves: ["reflect", "lightscreen", "aromatherapy", "leechseed", "toxic", "gigadrain", "synthesis", "dragontail"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "leechseed", "leafstorm", "gigadrain", "synthesis", "dragontail", "healpulse", "toxic", "protect"],
		requiredItem: "Meganiumite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cyndaquil: {
		randomBattleMoves: ["eruption", "fireblast", "flamethrower", "hiddenpowergrass", "hiddenpowerice"],
		tier: "LC",
	},
	quilava: {
		randomBattleMoves: ["eruption", "fireblast", "flamethrower", "hiddenpowergrass", "hiddenpowerice"],
		tier: "NFE",
	},
	typhlosion: {
		randomBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast"],
		randomDoubleBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast", "heatwave", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	typhlosionmega: { //CHANGE
		randomBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast"],
		randomDoubleBattleMoves: ["eruption", "fireblast", "hiddenpowergrass", "extrasensory", "focusblast", "heatwave", "protect"],
		requiredItem: "Typhlosionite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	totodile: {
		randomBattleMoves: ["aquajet", "waterfall", "crunch", "icepunch", "superpower", "dragondance", "swordsdance"],
		tier: "LC",
	},
	croconaw: {
		randomBattleMoves: ["aquajet", "waterfall", "crunch", "icepunch", "superpower", "dragondance", "swordsdance"],
		tier: "NFE",
	},
	feraligatr: {
		randomBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake"],
		randomDoubleBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake", "protect"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	feraligatrmega: { //CHANGE
		randomBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake"],
		randomDoubleBattleMoves: ["aquajet", "liquidation", "crunch", "icepunch", "dragondance", "swordsdance", "earthquake", "protect"],
		requiredItem: "Feraligite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	sentret: {
		randomBattleMoves: ["superfang", "trick", "toxic", "uturn", "knockoff"],
		tier: "LC",
	},
	furret: {
		randomBattleMoves: ["uturn", "trick", "aquatail", "firepunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["uturn", "suckerpunch", "icepunch", "firepunch", "knockoff", "doubleedge", "superfang", "followme", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	furretmega: { //CHANGE
		randomBattleMoves: ["uturn", "trick", "aquatail", "firepunch", "knockoff", "doubleedge"],
		randomDoubleBattleMoves: ["uturn", "suckerpunch", "icepunch", "firepunch", "knockoff", "doubleedge", "superfang", "followme", "helpinghand", "protect"],
		requiredItem: "Furrite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	hoothoot: {
		randomBattleMoves: ["reflect", "toxic", "roost", "whirlwind", "nightshade", "magiccoat"],
		tier: "LC",
	},
	noctowl: {
		randomBattleMoves: ["roost", "whirlwind", "nightshade", "toxic", "defog", "hurricane", "heatwave"],
		randomDoubleBattleMoves: ["roost", "tailwind", "airslash", "hypervoice", "heatwave", "protect", "hypnosis"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ledyba: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic"],
		tier: "LC",
	},
	ledian: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic", "uturn"],
		randomDoubleBattleMoves: ["protect", "lightscreen", "encore", "reflect", "knockoff", "bugbuzz", "uturn", "tailwind"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	spinarak: {
		randomBattleMoves: ["toxic", "lunge", "toxicspikes", "poisonjab", "stickyweb"],
		tier: "LC",
	},
	ariados: {
		randomBattleMoves: ["megahorn", "toxicspikes", "poisonjab", "suckerpunch", "stickyweb"],
		randomDoubleBattleMoves: ["protect", "megahorn", "stringshot", "poisonjab", "stickyweb", "ragepowder"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ariadosmega: {//CHANGE
		randomBattleMoves: ["megahorn", "toxicspikes", "poisonjab", "suckerpunch", "stickyweb"],
		randomDoubleBattleMoves: ["protect", "megahorn", "stringshot", "poisonjab", "stickyweb", "ragepowder"],
		requiredItem: "Ariadite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	chinchou: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowergrass", "hydropump", "icebeam", "surf", "thunderwave", "scald", "discharge", "healbell"],
		tier: "LC",
	},
	lanturn: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "thunderbolt", "healbell", "toxic"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowergrass", "hydropump", "icebeam", "thunderwave", "scald", "discharge", "protect", "surf"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	togepi: {
		randomBattleMoves: ["protect", "fireblast", "toxic", "thunderwave", "softboiled", "dazzlinggleam"],

		tier: "LC",
	},
	togetic: {
		randomBattleMoves: ["nastyplot", "dazzlinggleam", "fireblast", "roost", "defog", "toxic", "thunderwave", "healbell"],
		tier: "NFE",
	},
	togekiss: {
		randomBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "aurasphere", "healbell", "defog"],
		randomDoubleBattleMoves: ["roost", "thunderwave", "nastyplot", "airslash", "followme", "dazzlinggleam", "tailwind", "protect"],
		tier: "UU",
		doublesTier: "DUU",
	},
	natu: {
		randomBattleMoves: ["thunderwave", "roost", "toxic", "reflect", "lightscreen", "uturn", "wish", "psychic", "nightshade"],
		tier: "LC",
	},
	xatu: {
		randomBattleMoves: ["thunderwave", "toxic", "roost", "psychic", "uturn", "reflect", "calmmind", "nightshade", "heatwave"],
		randomDoubleBattleMoves: ["thunderwave", "tailwind", "roost", "psychic", "uturn", "reflect", "lightscreen", "grassknot", "heatwave", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	mareep: {
		randomBattleMoves: ["reflect", "lightscreen", "thunderbolt", "discharge", "thunderwave", "toxic", "hiddenpowerice", "cottonguard", "powergem"],

		tier: "LC",
	},
	flaaffy: {
		randomBattleMoves: ["reflect", "lightscreen", "thunderbolt", "discharge", "thunderwave", "toxic", "hiddenpowerice", "cottonguard", "powergem"],
		tier: "NFE",
	},
	ampharos: {
		randomBattleMoves: ["voltswitch", "reflect", "lightscreen", "focusblast", "thunderbolt", "toxic", "healbell", "hiddenpowerice"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "discharge", "dragonpulse", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ampharosmega: {
		randomBattleMoves: ["voltswitch", "focusblast", "agility", "thunderbolt", "healbell", "dragonpulse"],
		randomDoubleBattleMoves: ["focusblast", "hiddenpowerice", "hiddenpowergrass", "thunderbolt", "discharge", "dragonpulse", "protect"],
		requiredItem: "Ampharosite",
		tier: "RU",
		doublesTier: "DUU",
	},
	azurill: {
		randomBattleMoves: ["scald", "return", "bodyslam", "encore", "toxic", "protect", "knockoff"],
		tier: "LC",
	},
	marill: {
		randomBattleMoves: ["waterfall", "knockoff", "encore", "toxic", "aquajet", "superpower", "icepunch", "protect", "playrough", "poweruppunch"],
		tier: "NFE",
	},
	azumarill: {
		randomBattleMoves: ["liquidation", "aquajet", "playrough", "superpower", "bellydrum", "knockoff"],
		randomDoubleBattleMoves: ["waterfall", "aquajet", "playrough", "superpower", "bellydrum", "knockoff", "protect"],
		tier: "OU",
		doublesTier: "DUU",
	},
	bonsly: {
		randomBattleMoves: ["rockslide", "brickbreak", "doubleedge", "toxic", "stealthrock", "suckerpunch", "explosion"],
		tier: "LC",
	},
	sudowoodo: {
		randomBattleMoves: ["headsmash", "earthquake", "suckerpunch", "woodhammer", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["headsmash", "earthquake", "suckerpunch", "woodhammer", "explosion", "stealthrock", "rockslide", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	hoppip: {
		randomBattleMoves: ["encore", "sleeppowder", "uturn", "toxic", "leechseed", "substitute", "protect"],
		tier: "LC",
	},
	skiploom: {
		randomBattleMoves: ["encore", "sleeppowder", "uturn", "toxic", "leechseed", "substitute", "protect"],
		tier: "NFE",
	},
	jumpluff: {
		randomBattleMoves: ["swordsdance", "sleeppowder", "uturn", "encore", "toxic", "acrobatics", "leechseed", "seedbomb", "substitute", "strengthsap"],
		randomDoubleBattleMoves: ["encore", "sleeppowder", "uturn", "helpinghand", "leechseed", "gigadrain", "ragepowder", "protect", "strengthsap"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	aipom: {
		randomBattleMoves: ["fakeout", "return", "brickbreak", "seedbomb", "knockoff", "uturn", "icepunch", "irontail"],
		tier: "LC Uber",
	},
	ambipom: {
		randomBattleMoves: ["fakeout", "return", "knockoff", "uturn", "switcheroo", "seedbomb", "lowkick"],
		randomDoubleBattleMoves: ["fakeout", "return", "knockoff", "uturn", "doublehit", "icepunch", "lowkick", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	sunkern: {
		randomBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "toxic", "earthpower", "leechseed"],
		tier: "LC",
	},
	sunflora: {
		randomBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "earthpower"],
		randomDoubleBattleMoves: ["sunnyday", "gigadrain", "solarbeam", "hiddenpowerfire", "hiddenpowerice", "earthpower", "protect", "encore"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	yanma: {
		randomBattleMoves: ["bugbuzz", "airslash", "hiddenpowerground", "uturn", "protect", "gigadrain", "ancientpower"],
		tier: "LC Uber",
	},
	yanmega: {
		randomBattleMoves: ["bugbuzz", "airslash", "ancientpower", "uturn", "protect", "gigadrain"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wooper: {
		randomBattleMoves: ["recover", "earthquake", "scald", "toxic", "stockpile", "yawn", "protect"],
		tier: "LC",
	},
	quagsire: {
		randomBattleMoves: ["recover", "earthquake", "scald", "toxic", "encore", "icebeam"],
		randomDoubleBattleMoves: ["icywind", "earthquake", "waterfall", "scald", "rockslide", "curse", "yawn", "icepunch", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	murkrow: {
		randomBattleMoves: ["substitute", "suckerpunch", "bravebird", "heatwave", "roost", "darkpulse", "thunderwave"],
		tier: "LC Uber",
	},
	honchkrow: {
		randomBattleMoves: ["substitute", "superpower", "suckerpunch", "bravebird", "roost", "heatwave", "pursuit"],
		randomDoubleBattleMoves: ["substitute", "superpower", "suckerpunch", "bravebird", "roost", "heatwave", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	misdreavus: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "dazzlinggleam", "willowisp", "shadowball", "taunt", "painsplit"],
		tier: "LC Uber",
	},
	mismagius: {
		randomBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "painsplit", "destinybond"],
		randomDoubleBattleMoves: ["nastyplot", "substitute", "willowisp", "shadowball", "thunderbolt", "dazzlinggleam", "taunt", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	wobbuffet: {
		randomBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond", "safeguard"],
		randomDoubleBattleMoves: ["counter", "mirrorcoat", "encore", "destinybond", "safeguard"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	girafarig: {
		randomBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "substitute", "hypervoice"],
		randomDoubleBattleMoves: ["psychic", "psyshock", "thunderbolt", "nastyplot", "protect", "agility", "hypervoice"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pineco: {
		randomBattleMoves: ["rapidspin", "toxicspikes", "spikes", "bugbite", "stealthrock"],

		tier: "LC",
	},
	forretress: {
		randomBattleMoves: ["rapidspin", "toxic", "spikes", "voltswitch", "stealthrock", "gyroball"],
		randomDoubleBattleMoves: ["rockslide", "drillrun", "toxic", "voltswitch", "stealthrock", "gyroball", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	dunsparce: {
		randomBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "roost", "stealthrock"],
		randomDoubleBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gligar: {
		randomBattleMoves: ["stealthrock", "toxic", "roost", "defog", "earthquake", "uturn", "knockoff"],
		tier: "UU",
		doublesTier: "LC Uber",
	},
	gliscor: {
		randomBattleMoves: ["roost", "taunt", "earthquake", "protect", "toxic", "stealthrock", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "substitute", "taunt", "earthquake", "protect", "stoneedge", "knockoff"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	snubbull: {
		randomBattleMoves: ["thunderwave", "firepunch", "crunch", "closecombat", "icepunch", "earthquake", "playrough"],
		tier: "LC",
	},
	granbull: {
		randomBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "healbell"],
		randomDoubleBattleMoves: ["thunderwave", "playrough", "crunch", "earthquake", "snarl", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	qwilfish: {
		randomBattleMoves: ["toxicspikes", "liquidation", "spikes", "painsplit", "thunderwave", "taunt", "destinybond"],
		randomDoubleBattleMoves: ["poisonjab", "liquidation", "swordsdance", "protect", "thunderwave", "taunt", "destinybond"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	shuckle: {
		randomBattleMoves: ["toxic", "encore", "stealthrock", "knockoff", "stickyweb", "infestation"],
		randomDoubleBattleMoves: ["encore", "stealthrock", "knockoff", "stickyweb", "guardsplit", "powersplit", "toxic", "helpinghand"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	heracross: {
		randomBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake"],
		randomDoubleBattleMoves: ["closecombat", "megahorn", "stoneedge", "swordsdance", "knockoff", "earthquake", "protect"],

		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	heracrossmega: {
		randomBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "pinmissile", "rockblast", "swordsdance", "bulletseed", "knockoff", "earthquake", "protect"],
		requiredItem: "Heracronite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	sneasel: {
		randomBattleMoves: ["iceshard", "iciclecrash", "lowkick", "pursuit", "swordsdance", "knockoff"],
		tier: "NU",
		doublesTier: "LC Uber",
	},
	weavile: {
		randomBattleMoves: ["iceshard", "iciclecrash", "knockoff", "pursuit", "swordsdance", "lowkick"],
		randomDoubleBattleMoves: ["iceshard", "iciclecrash", "knockoff", "fakeout", "swordsdance", "lowkick", "taunt", "protect", "feint"],

		tier: "UUBL",
		doublesTier: "DUU",
	},
	weavilemega: {//CHANGE
		randomBattleMoves: ["iceshard", "iciclecrash", "knockoff", "pursuit", "swordsdance", "lowkick"],
		randomDoubleBattleMoves: ["iceshard", "iciclecrash", "knockoff", "fakeout", "swordsdance", "lowkick", "taunt", "protect", "feint"],

		requiredItem: "Weavilite",
		tier: "UUBL",
		doublesTier: "DUU",
	},
	teddiursa: {
		randomBattleMoves: ["swordsdance", "protect", "facade", "closecombat", "firepunch", "crunch", "playrough", "gunkshot"],

		tier: "LC",
	},
	ursaring: {
		randomBattleMoves: ["swordsdance", "facade", "closecombat", "crunch", "protect"],
		randomDoubleBattleMoves: ["swordsdance", "facade", "closecombat", "earthquake", "crunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	slugma: {
		randomBattleMoves: ["stockpile", "recover", "lavaplume", "willowisp", "toxic", "hiddenpowergrass", "earthpower", "memento"],
		tier: "LC",
	},
	magcargo: {
		randomBattleMoves: ["recover", "lavaplume", "toxic", "hiddenpowergrass", "stealthrock", "fireblast", "earthpower", "shellsmash", "ancientpower"],
		randomDoubleBattleMoves: ["protect", "heatwave", "willowisp", "shellsmash", "hiddenpowergrass", "ancientpower", "stealthrock", "fireblast", "earthpower"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	swinub: {
		randomBattleMoves: ["earthquake", "iciclecrash", "iceshard", "superpower", "endeavor", "stealthrock"],
		tier: "LC",
	},
	piloswine: {
		randomBattleMoves: ["earthquake", "iciclecrash", "iceshard", "endeavor", "stealthrock"],
		tier: "NU",
		doublesTier: "NFE",
	},
	mamoswine: {
		randomBattleMoves: ["iceshard", "earthquake", "endeavor", "iciclecrash", "stealthrock", "superpower", "knockoff"],
		randomDoubleBattleMoves: ["iceshard", "earthquake", "rockslide", "iciclecrash", "protect", "superpower", "knockoff"],

		tier: "UU",
		doublesTier: "DUU",
	},
	corsola: {
		randomBattleMoves: ["recover", "toxic", "powergem", "scald", "stealthrock"],
		randomDoubleBattleMoves: ["protect", "icywind", "powergem", "scald", "stealthrock", "earthpower", "icebeam"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	remoraid: {
		randomBattleMoves: ["waterspout", "hydropump", "fireblast", "hiddenpowerground", "icebeam", "seedbomb", "rockblast"],
		tier: "LC",
	},
	octillery: {
		randomBattleMoves: ["hydropump", "fireblast", "icebeam", "energyball", "rockblast", "gunkshot", "scald"],
		randomDoubleBattleMoves: ["hydropump", "surf", "fireblast", "icebeam", "energyball", "chargebeam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	delibird: {
		randomBattleMoves: ["spikes", "rapidspin", "icywind", "freezedry", "destinybond"],
		randomDoubleBattleMoves: ["fakeout", "iceshard", "icepunch", "aerialace", "brickbreak", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mantyke: {
		randomBattleMoves: ["raindance", "hydropump", "scald", "airslash", "icebeam", "rest", "sleeptalk", "toxic"],
		tier: "LC",
	},
	mantine: {
		randomBattleMoves: ["scald", "airslash", "roost", "toxic", "defog"],
		randomDoubleBattleMoves: ["raindance", "scald", "airslash", "icebeam", "tailwind", "wideguard", "helpinghand", "protect", "surf"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	skarmory: {
		randomBattleMoves: ["whirlwind", "bravebird", "roost", "spikes", "stealthrock", "defog"],
		randomDoubleBattleMoves: ["skydrop", "bravebird", "tailwind", "taunt", "feint", "protect", "ironhead"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	houndour: {
		randomBattleMoves: ["pursuit", "suckerpunch", "fireblast", "darkpulse", "hiddenpowerfighting", "nastyplot"],

		tier: "LC",
	},
	houndoom: {
		randomBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "suckerpunch", "heatwave", "hiddenpowerfighting", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	houndoommega: {
		randomBattleMoves: ["nastyplot", "darkpulse", "taunt", "fireblast", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["nastyplot", "darkpulse", "taunt", "heatwave", "hiddenpowergrass", "protect"],
		requiredItem: "Houndoominite",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	phanpy: {
		randomBattleMoves: ["stealthrock", "earthquake", "iceshard", "headsmash", "knockoff", "seedbomb", "superpower", "playrough"],
		tier: "LC",
	},
	donphan: {
		randomBattleMoves: ["stealthrock", "rapidspin", "iceshard", "earthquake", "knockoff", "stoneedge"],
		randomDoubleBattleMoves: ["stealthrock", "knockoff", "iceshard", "earthquake", "rockslide", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	stantler: {
		randomBattleMoves: ["doubleedge", "megahorn", "jumpkick", "earthquake", "suckerpunch"],
		randomDoubleBattleMoves: ["return", "megahorn", "jumpkick", "earthquake", "suckerpunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	smeargle: {
		randomBattleMoves: ["spore", "stealthrock", "destinybond", "whirlwind", "stickyweb"],
		randomDoubleBattleMoves: ["spore", "fakeout", "wideguard", "helpinghand", "followme", "tailwind", "kingsshield", "transform"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pokestarsmeargle: {

		gen: 5,
		tier: "Illegal",
	},
	miltank: {
		randomBattleMoves: ["milkdrink", "stealthrock", "bodyslam", "healbell", "curse", "earthquake", "toxic"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bodyslam", "milkdrink", "curse", "earthquake", "thunderwave"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	raikou: {
		randomBattleMoves: ["thunderbolt", "hiddenpowerice", "aurasphere", "calmmind", "substitute", "voltswitch", "extrasensory"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "extrasensory", "calmmind", "substitute", "snarl", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	entei: {
		randomBattleMoves: ["extremespeed", "flareblitz", "stompingtantrum", "stoneedge", "sacredfire"],
		randomDoubleBattleMoves: ["extremespeed", "flareblitz", "ironhead", "bulldoze", "stoneedge", "sacredfire", "protect"],
		tier: "RUBL",
		doublesTier: "DUU",
	},
	suicune: {
		randomBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "rest", "sleeptalk", "calmmind"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "scald", "hiddenpowergrass", "snarl", "tailwind", "protect", "calmmind"],
		tier: "UU",
		doublesTier: "DOU",
	},
	larvitar: {
		randomBattleMoves: ["earthquake", "stoneedge", "facade", "dragondance", "superpower", "crunch"],

		tier: "LC",
	},
	pupitar: {
		randomBattleMoves: ["earthquake", "stoneedge", "crunch", "dragondance", "superpower", "stealthrock"],
		tier: "NFE",
	},
	tyranitar: {
		randomBattleMoves: ["crunch", "stoneedge", "pursuit", "earthquake", "fireblast", "icebeam", "stealthrock"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "rockslide", "earthquake", "firepunch", "icepunch", "stealthrock", "protect"],

		tier: "OU",
		doublesTier: "DOU",
	},
	tyranitarmega: {
		randomBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance"],
		randomDoubleBattleMoves: ["crunch", "stoneedge", "earthquake", "icepunch", "dragondance", "rockslide", "protect"],
		requiredItem: "Tyranitarite",
		tier: "OU",
		doublesTier: "DOU",
	},
	lugia: {
		randomBattleMoves: ["toxic", "roost", "substitute", "whirlwind", "thunderwave", "psychic"],
		randomDoubleBattleMoves: ["aeroblast", "roost", "substitute", "tailwind", "icebeam", "psychic", "calmmind", "skydrop", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	hooh: {
		randomBattleMoves: ["substitute", "sacredfire", "bravebird", "earthquake", "roost", "toxic", "flamecharge"],
		randomDoubleBattleMoves: ["substitute", "sacredfire", "bravebird", "earthquake", "roost", "toxic", "tailwind", "skydrop", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	celebi: {
		randomBattleMoves: ["nastyplot", "psychic", "gigadrain", "recover", "healbell", "earthpower", "hiddenpowerfire", "leafstorm", "uturn", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "psychic", "gigadrain", "leechseed", "recover", "earthpower", "hiddenpowerfire", "nastyplot", "leafstorm", "uturn", "thunderwave"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	treecko: {
		randomBattleMoves: ["substitute", "leechseed", "leafstorm", "hiddenpowerice", "hiddenpowerrock", "endeavor"],

		tier: "LC",
	},
	grovyle: {
		randomBattleMoves: ["substitute", "leechseed", "gigadrain", "leafstorm", "hiddenpowerice", "hiddenpowerrock", "endeavor"],
		tier: "NFE",
	},
	sceptile: {
		randomBattleMoves: ["gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerflying"],
		randomDoubleBattleMoves: ["gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "hiddenpowerfire", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	sceptilemega: {
		randomBattleMoves: ["substitute", "gigadrain", "dragonpulse", "focusblast", "swordsdance", "outrage", "leafblade", "earthquake", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["substitute", "gigadrain", "leafstorm", "hiddenpowerice", "focusblast", "dragonpulse", "hiddenpowerfire", "protect"],
		requiredItem: "Sceptilite",
		tier: "RU",
		doublesTier: "DUU",
	},
	torchic: {
		randomBattleMoves: ["protect", "substitute", "hiddenpowergrass", "swordsdance", "firepledge"],

		tier: "LC",
	},
	combusken: {
		randomBattleMoves: ["flareblitz", "skyuppercut", "protect", "swordsdance", "shadowclaw"],
		tier: "NFE",
	},
	blaziken: {
		randomBattleMoves: ["fireblast", "highjumpkick", "protect", "knockoff", "hiddenpowerice"],

		tier: "Uber",
		doublesTier: "(DUU)",
	},
	blazikenmega: {
		randomBattleMoves: ["flareblitz", "highjumpkick", "protect", "swordsdance", "stoneedge", "knockoff"],
		requiredItem: "Blazikenite",
		tier: "Uber",
		doublesTier: "DUU",
	},
	mudkip: {
		randomBattleMoves: ["hydropump", "earthpower", "hiddenpowerelectric", "icebeam", "sludgewave"],

		tier: "LC",
	},
	marshtomp: {
		randomBattleMoves: ["waterfall", "earthquake", "superpower", "icepunch", "rockslide", "stealthrock"],
		tier: "NFE",
	},
	swampert: {
		randomBattleMoves: ["stealthrock", "earthquake", "scald", "icebeam", "roar", "toxic", "protect"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "icebeam", "stealthrock", "wideguard", "scald", "rockslide", "muddywater", "protect", "icywind"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	swampertmega: {
		randomBattleMoves: ["raindance", "waterfall", "earthquake", "icepunch", "superpower"],
		randomDoubleBattleMoves: ["waterfall", "earthquake", "raindance", "icepunch", "superpower", "protect"],
		requiredItem: "Swampertite",
		tier: "OU",
		doublesTier: "DOU",
	},
	poochyena: {
		randomBattleMoves: ["superfang", "foulplay", "suckerpunch", "toxic", "crunch", "firefang", "icefang", "poisonfang"],
		tier: "LC",
	},
	mightyena: {
		randomBattleMoves: ["crunch", "suckerpunch", "playrough", "firefang", "irontail"],
		randomDoubleBattleMoves: ["suckerpunch", "crunch", "playrough", "firefang", "taunt", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mightyenamega: { //CHANGE
		randomBattleMoves: ["crunch", "suckerpunch", "playrough", "firefang", "irontail"],
		randomDoubleBattleMoves: ["suckerpunch", "crunch", "playrough", "firefang", "taunt", "protect"],
		requiredItem: "Mightyenite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	zigzagoon: {
		randomBattleMoves: ["trick", "thunderwave", "icebeam", "thunderbolt", "gunkshot", "lastresort"],
		tier: "LC",
	},
	zigzagoonkonor: {
		tier: "LC",
	},
	linoone: {
		randomBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "shadowclaw"],
		randomDoubleBattleMoves: ["bellydrum", "extremespeed", "stompingtantrum", "protect", "shadowclaw"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	linoonekonor: {
		tier: "NFE",
	},
	wurmple: {
		randomBattleMoves: ["bugbite", "poisonsting", "pound", "electroweb"],
		tier: "LC",
	},
	silcoon: {
		randomBattleMoves: ["bugbite", "poisonsting", "pound", "electroweb"],
		tier: "NFE",
	},
	beautifly: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "aircutter", "psychic", "gigadrain", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "gigadrain", "hiddenpowerrock", "aircutter", "tailwind", "stringshot", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cascoon: {
		randomBattleMoves: ["bugbite", "poisonsting", "pound", "electroweb"],
		tier: "NFE",
	},
	dustox: {
		randomBattleMoves: ["roost", "defog", "bugbuzz", "sludgebomb", "quiverdance", "uturn", "shadowball"],
		randomDoubleBattleMoves: ["tailwind", "stringshot", "strugglebug", "bugbuzz", "protect", "sludgebomb", "quiverdance", "shadowball"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lotad: {
		randomBattleMoves: ["gigadrain", "icebeam", "scald", "naturepower", "raindance"],
		tier: "LC",
	},
	lombre: {
		randomBattleMoves: ["fakeout", "swordsdance", "waterfall", "seedbomb", "icepunch", "firepunch", "thunderpunch", "poweruppunch", "gigadrain", "icebeam"],
		tier: "NFE",
	},
	ludicolo: {
		randomBattleMoves: ["raindance", "hydropump", "scald", "gigadrain", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["raindance", "hydropump", "surf", "gigadrain", "icebeam", "fakeout", "protect"],

		tier: "PU",
		doublesTier: "(DUU)",
	},
	seedot: {
		randomBattleMoves: ["defog", "naturepower", "seedbomb", "explosion", "foulplay"],

		tier: "LC",
	},
	nuzleaf: {
		randomBattleMoves: ["naturepower", "seedbomb", "explosion", "swordsdance", "rockslide", "lowsweep"],
		tier: "NFE",
	},
	shiftry: {
		randomBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "defog", "lowkick", "knockoff"],
		randomDoubleBattleMoves: ["leafstorm", "swordsdance", "leafblade", "suckerpunch", "knockoff", "lowkick", "fakeout", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	taillow: {
		randomBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		tier: "LC",
	},
	swellow: {
		randomBattleMoves: ["protect", "facade", "bravebird", "uturn", "quickattack"],
		randomDoubleBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	swellowmega: { //CHANGE
		randomBattleMoves: ["protect", "facade", "bravebird", "uturn", "quickattack"],
		randomDoubleBattleMoves: ["bravebird", "facade", "quickattack", "uturn", "protect"],
		requiredItem: "Swellite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wingull: {
		randomBattleMoves: ["scald", "icebeam", "tailwind", "uturn", "airslash", "knockoff", "defog"],
		tier: "LC Uber",
	},
	pelipper: {
		randomBattleMoves: ["scald", "uturn", "hurricane", "toxic", "roost", "defog", "knockoff"],
		randomDoubleBattleMoves: ["scald", "surf", "hurricane", "wideguard", "protect", "tailwind", "knockoff"],
		tier: "OU",
		doublesTier: "DOU",
	},
	ralts: {
		randomBattleMoves: ["trickroom", "destinybond", "psychic", "willowisp", "hypnosis", "dazzlinggleam", "substitute", "trick"],

		tier: "LC",
	},
	kirlia: {
		randomBattleMoves: ["trick", "dazzlinggleam", "psychic", "willowisp", "signalbeam", "thunderbolt", "destinybond", "substitute"],
		tier: "NFE",
	},
	gardevoir: {
		randomBattleMoves: ["psychic", "thunderbolt", "focusblast", "shadowball", "moonblast", "calmmind", "substitute", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "shadowball", "moonblast", "taunt", "willowisp", "thunderbolt", "trickroom", "helpinghand", "protect", "dazzlinggleam"],

		tier: "RU",
		doublesTier: "DUU",
	},
	gardevoirmega: {
		randomBattleMoves: ["calmmind", "hypervoice", "psyshock", "focusblast", "substitute", "taunt", "willowisp"],
		randomDoubleBattleMoves: ["psyshock", "focusblast", "shadowball", "calmmind", "thunderbolt", "hypervoice", "protect"],
		requiredItem: "Gardevoirite",
		tier: "UUBL",
		doublesTier: "DOU",
	},
	gallade: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "shadowsneak", "closecombat", "zenheadbutt", "knockoff", "trick"],
		randomDoubleBattleMoves: ["closecombat", "trick", "stoneedge", "shadowsneak", "drainpunch", "icepunch", "zenheadbutt", "knockoff", "trickroom", "protect", "helpinghand"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	gallademega: {
		randomBattleMoves: ["swordsdance", "closecombat", "drainpunch", "knockoff", "zenheadbutt", "substitute"],
		randomDoubleBattleMoves: ["closecombat", "stoneedge", "drainpunch", "icepunch", "zenheadbutt", "swordsdance", "knockoff", "protect"],
		requiredItem: "Galladite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	surskit: {
		randomBattleMoves: ["hydropump", "signalbeam", "hiddenpowerfire", "stickyweb", "gigadrain", "powersplit"],

		tier: "LC",
	},
	masquerain: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "hydropump", "roost", "stickyweb"],
		randomDoubleBattleMoves: ["hydropump", "bugbuzz", "airslash", "quiverdance", "tailwind", "roost", "strugglebug", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shroomish: {
		randomBattleMoves: ["spore", "substitute", "leechseed", "gigadrain", "protect", "toxic", "stunspore"],
		tier: "LC",
	},
	breloom: {
		randomBattleMoves: ["spore", "machpunch", "bulletseed", "rocktomb", "swordsdance"],
		randomDoubleBattleMoves: ["spore", "helpinghand", "machpunch", "bulletseed", "rocktomb", "protect", "drainpunch"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	breloommega: { //CHANGE
		randomBattleMoves: ["spore", "machpunch", "bulletseed", "rocktomb", "swordsdance"],
		randomDoubleBattleMoves: ["spore", "helpinghand", "machpunch", "bulletseed", "rocktomb", "protect", "drainpunch"],
		requiredItem: "Breloomite",
		tier: "UUBL",
		doublesTier: "DUU",
	},
	slakoth: {
		randomBattleMoves: ["doubleedge", "hammerarm", "firepunch", "counter", "retaliate", "toxic"],
		tier: "LC",
	},
	vigoroth: {
		randomBattleMoves: ["bulkup", "return", "earthquake", "firepunch", "suckerpunch", "recover", "icepunch", "lowkick"],
		tier: "NFE",
	},
	slaking: {
		randomBattleMoves: ["earthquake", "pursuit", "nightslash", "retaliate", "gigaimpact", "firepunch"],
		randomDoubleBattleMoves: ["earthquake", "nightslash", "doubleedge", "retaliate", "hammerarm", "rockslide"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	nincada: {
		randomBattleMoves: ["xscissor", "dig", "aerialace", "nightslash"],
		tier: "LC",
	},
	ninjask: {
		randomBattleMoves: ["swordsdance", "aerialace", "nightslash", "dig", "leechlife", "uturn"],
		randomDoubleBattleMoves: ["batonpass", "swordsdance", "substitute", "protect", "leechlife", "aerialace"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shedinja: {
		randomBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "shadowclaw"],
		randomDoubleBattleMoves: ["swordsdance", "willowisp", "xscissor", "shadowsneak", "shadowclaw", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	whismur: {
		randomBattleMoves: ["hypervoice", "fireblast", "shadowball", "icebeam", "extrasensory"],
		tier: "LC",
	},
	loudred: {
		randomBattleMoves: ["hypervoice", "fireblast", "shadowball", "icebeam", "circlethrow", "bodyslam"],
		tier: "NFE",
	},
	exploud: {
		randomBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast"],
		randomDoubleBattleMoves: ["boomburst", "fireblast", "icebeam", "surf", "focusblast", "protect", "hypervoice"],

		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	makuhita: {
		randomBattleMoves: ["crosschop", "bulletpunch", "closecombat", "icepunch", "bulkup", "fakeout", "earthquake"],
		tier: "LC",
	},
	hariyama: {
		randomBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["bulletpunch", "closecombat", "icepunch", "stoneedge", "fakeout", "knockoff", "helpinghand", "wideguard", "protect"],
		tier: "NU",
		doublesTier: "DUU",
	},
	nosepass: {
		randomBattleMoves: ["powergem", "thunderwave", "stealthrock", "painsplit", "explosion", "voltswitch"],
		tier: "LC",
	},
	probopass: {
		randomBattleMoves: ["stealthrock", "thunderwave", "toxic", "flashcannon", "voltswitch", "earthpower"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "helpinghand", "earthpower", "powergem", "wideguard", "protect", "flashcannon"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	skitty: {
		randomBattleMoves: ["doubleedge", "zenheadbutt", "thunderwave", "fakeout", "playrough", "healbell"],

		tier: "LC",
	},
	delcatty: {
		randomBattleMoves: ["doubleedge", "suckerpunch", "wildcharge", "fakeout", "thunderwave", "healbell"],
		randomDoubleBattleMoves: ["doubleedge", "suckerpunch", "playrough", "wildcharge", "fakeout", "thunderwave", "protect", "helpinghand"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sableye: {
		randomBattleMoves: ["recover", "willowisp", "taunt", "toxic", "knockoff", "foulplay"],
		randomDoubleBattleMoves: ["recover", "willowisp", "taunt", "fakeout", "knockoff", "foulplay", "helpinghand", "snarl", "protect"],

		tier: "PU",
		doublesTier: "DUU",
	},
	sableyemega: {
		randomBattleMoves: ["recover", "willowisp", "darkpulse", "calmmind", "shadowball"],
		randomDoubleBattleMoves: ["fakeout", "knockoff", "darkpulse", "shadowball", "willowisp", "protect"],
		requiredItem: "Sablenite",
		tier: "UUBL",
		doublesTier: "DUU",
	},
	mawile: {
		randomBattleMoves: ["swordsdance", "ironhead", "stealthrock", "playrough", "suckerpunch", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mawilemega: {
		randomBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "focuspunch"],
		randomDoubleBattleMoves: ["swordsdance", "ironhead", "firefang", "substitute", "playrough", "suckerpunch", "knockoff", "protect"],
		requiredItem: "Mawilite",
		tier: "OU",
		doublesTier: "DUU",
	},
	aron: {
		randomBattleMoves: ["headsmash", "ironhead", "earthquake", "superpower", "stealthrock", "endeavor"],
		tier: "LC",
	},
	lairon: {
		randomBattleMoves: ["headsmash", "ironhead", "earthquake", "superpower", "stealthrock"],
		tier: "NFE",
	},
	aggron: {
		randomBattleMoves: ["autotomize", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock"],
		randomDoubleBattleMoves: ["rockslide", "headsmash", "earthquake", "lowkick", "heavyslam", "aquatail", "stealthrock", "protect"],

		tier: "PU",
		doublesTier: "(DUU)",
	},
	aggronmega: {
		randomBattleMoves: ["earthquake", "heavyslam", "rockslide", "stealthrock", "thunderwave", "roar", "toxic"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "lowkick", "heavyslam", "aquatail", "protect"],
		requiredItem: "Aggronite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	meditite: {
		randomBattleMoves: ["highjumpkick", "psychocut", "icepunch", "thunderpunch", "trick", "fakeout", "bulletpunch", "drainpunch", "zenheadbutt"],

		tier: "LC Uber",
	},
	medicham: {
		randomBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	medichammega: {
		randomBattleMoves: ["highjumpkick", "zenheadbutt", "thunderpunch", "icepunch", "fakeout"],
		randomDoubleBattleMoves: ["highjumpkick", "drainpunch", "zenheadbutt", "icepunch", "bulletpunch", "protect", "fakeout"],
		requiredItem: "Medichamite",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	electrike: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "switcheroo", "flamethrower", "hiddenpowergrass"],
		tier: "LC",
	},
	manectric: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower", "snarl", "protect"],

		tier: "PU",
		doublesTier: "(DUU)",
	},
	manectricmega: {
		randomBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "hiddenpowerice", "hiddenpowergrass", "overheat", "flamethrower", "snarl", "protect"],
		requiredItem: "Manectite",
		tier: "UU",
		doublesTier: "DOU",
	},
	polaris: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "substitute", "hiddenpowerice", "encore"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "substitute", "protect", "hiddenpowerice", "encore", "helpinghand"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	volbeat: {
		randomBattleMoves: ["uturn", "roost", "thunderwave", "encore", "tailwind", "defog"],
		randomDoubleBattleMoves: ["stringshot", "strugglebug", "helpinghand", "thunderwave", "encore", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	illumise: {
		randomBattleMoves: ["uturn", "roost", "bugbuzz", "thunderwave", "encore", "wish", "defog"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "bugbuzz", "encore", "thunderbolt", "tailwind", "uturn"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	budew: {
		randomBattleMoves: ["spikes", "sludgebomb", "sleeppowder", "gigadrain", "stunspore", "rest"],
		tier: "LC",
	},
	roselia: {
		randomBattleMoves: ["spikes", "toxicspikes", "sleeppowder", "gigadrain", "stunspore", "rest", "sludgebomb", "synthesis"],

		tier: "PU",
		doublesTier: "NFE",
	},
	roserade: {
		randomBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "spikes", "toxicspikes", "rest", "synthesis", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["sludgebomb", "gigadrain", "sleeppowder", "leafstorm", "protect", "hiddenpowerfire"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	gulpin: {
		randomBattleMoves: ["stockpile", "sludgebomb", "sludgewave", "icebeam", "toxic", "painsplit", "yawn", "encore"],
		tier: "LC",
	},
	swalot: {
		randomBattleMoves: ["sludgebomb", "icebeam", "toxic", "yawn", "encore", "painsplit", "earthquake"],
		randomDoubleBattleMoves: ["sludgebomb", "icebeam", "protect", "yawn", "encore", "gunkshot", "earthquake"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	carvanha: {
		randomBattleMoves: ["protect", "hydropump", "icebeam", "waterfall", "crunch", "aquajet", "destinybond"],

		tier: "LC",
	},
	sharpedo: {
		randomBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "waterfall"],
		randomDoubleBattleMoves: ["protect", "icebeam", "crunch", "earthquake", "liquidation"],

		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	sharpedomega: {
		randomBattleMoves: ["protect", "crunch", "waterfall", "icefang", "psychicfangs", "destinybond"],
		randomDoubleBattleMoves: ["protect", "icefang", "crunch", "liquidation", "psychicfangs"],
		requiredItem: "Sharpedonite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	wailmer: {
		randomBattleMoves: ["waterspout", "surf", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerelectric"],
		tier: "LC",
	},
	wailord: {
		randomBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["waterspout", "hydropump", "icebeam", "hiddenpowergrass", "hiddenpowerfire", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	numel: {
		randomBattleMoves: ["curse", "earthquake", "rockslide", "fireblast", "flamecharge", "rest", "sleeptalk", "stockpile", "hiddenpowerelectric", "earthpower", "lavaplume"],

		tier: "LC",
	},
	camerupt: {
		randomBattleMoves: ["rockpolish", "fireblast", "earthpower", "lavaplume", "stealthrock", "hiddenpowergrass", "roar", "stoneedge"],
		randomDoubleBattleMoves: ["rockpolish", "fireblast", "earthpower", "heatwave", "eruption", "hiddenpowergrass", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cameruptmega: {
		randomBattleMoves: ["stealthrock", "fireblast", "earthpower", "ancientpower", "willowisp", "toxic"],
		randomDoubleBattleMoves: ["fireblast", "earthpower", "heatwave", "eruption", "rockslide", "protect"],
		requiredItem: "Cameruptite",
		tier: "NUBL",
		doublesTier: "DOU",
	},
	torkoal: {
		randomBattleMoves: ["shellsmash", "fireblast", "earthpower", "solarbeam", "stealthrock", "rapidspin", "yawn", "lavaplume"],
		randomDoubleBattleMoves: ["protect", "heatwave", "earthpower", "willowisp", "shellsmash", "fireblast", "solarbeam"],
		tier: "(PU)",
		doublesTier: "DUU",
	},
	trapinch: {
		randomBattleMoves: ["earthquake", "rockslide", "crunch", "quickattack", "superpower"],
		tier: "LC Uber",
	},
	vibrava: {
		randomBattleMoves: ["substitute", "earthquake", "outrage", "roost", "uturn", "superpower", "defog"],
		tier: "NFE",
	},
	flygon: {
		randomBattleMoves: ["earthquake", "outrage", "uturn", "roost", "defog", "firepunch", "dragondance"],
		randomDoubleBattleMoves: ["earthquake", "protect", "dragonclaw", "uturn", "rockslide", "firepunch", "fireblast", "tailwind", "dragondance"],

		tier: "RU",
		doublesTier: "(DUU)",
	},
	flygonmega: { //CHANGE
		randomBattleMoves: ["earthquake", "outrage", "uturn", "roost", "defog", "firepunch", "dragondance"],
		randomDoubleBattleMoves: ["earthquake", "protect", "dragonclaw", "uturn", "rockslide", "firepunch", "fireblast", "tailwind", "dragondance"],

		requiredItem: "Flygonite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	cacnea: {
		randomBattleMoves: ["swordsdance", "spikes", "suckerpunch", "seedbomb", "drainpunch"],
		tier: "LC",
	},
	cacturne: {
		randomBattleMoves: ["swordsdance", "spikes", "suckerpunch", "seedbomb", "drainpunch", "substitute", "darkpulse", "focusblast", "gigadrain"],
		randomDoubleBattleMoves: ["swordsdance", "spikyshield", "suckerpunch", "seedbomb", "drainpunch", "substitute"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	swablu: {
		randomBattleMoves: ["roost", "toxic", "cottonguard", "pluck", "hypervoice", "return"],

		tier: "LC",
	},
	altaria: {
		randomBattleMoves: ["dragondance", "dracometeor", "outrage", "dragonclaw", "earthquake", "roost", "fireblast", "healbell"],
		randomDoubleBattleMoves: ["dragondance", "dracometeor", "protect", "dragonclaw", "earthquake", "fireblast", "tailwind"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	altariamega: {
		randomBattleMoves: ["dragondance", "return", "hypervoice", "healbell", "earthquake", "roost", "dracometeor", "fireblast"],
		randomDoubleBattleMoves: ["dragondance", "return", "doubleedge", "dragonclaw", "earthquake", "protect", "fireblast"],
		requiredItem: "Altarianite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	zangoose: {
		randomBattleMoves: ["swordsdance", "closecombat", "knockoff", "quickattack", "facade"],
		randomDoubleBattleMoves: ["protect", "closecombat", "knockoff", "quickattack", "facade"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	zangoosemega: { //CHANGE
		randomBattleMoves: ["swordsdance", "closecombat", "knockoff", "quickattack", "facade"],
		randomDoubleBattleMoves: ["protect", "closecombat", "knockoff", "quickattack", "facade"],

		requiredItem: "Zangite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	seviper: {
		randomBattleMoves: ["flamethrower", "sludgewave", "gigadrain", "darkpulse", "switcheroo", "swordsdance", "earthquake", "poisonjab", "suckerpunch"],
		randomDoubleBattleMoves: ["flamethrower", "gigadrain", "earthquake", "suckerpunch", "aquatail", "protect", "glare", "poisonjab", "sludgebomb"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sevipermega: { //CHANGE
		randomBattleMoves: ["flamethrower", "sludgewave", "gigadrain", "darkpulse", "switcheroo", "swordsdance", "earthquake", "poisonjab", "suckerpunch"],
		randomDoubleBattleMoves: ["flamethrower", "gigadrain", "earthquake", "suckerpunch", "aquatail", "protect", "glare", "poisonjab", "sludgebomb"],

		requiredItem: "Sevipetite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lunatone: {
		randomBattleMoves: ["psychic", "earthpower", "stealthrock", "rockpolish", "calmmind", "icebeam", "powergem", "moonlight", "toxic"],
		randomDoubleBattleMoves: ["psychic", "earthpower", "rockpolish", "calmmind", "helpinghand", "icebeam", "powergem", "moonlight", "trickroom", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	solrock: {
		randomBattleMoves: ["stealthrock", "explosion", "rockslide", "reflect", "lightscreen", "willowisp", "morningsun"],
		randomDoubleBattleMoves: ["protect", "helpinghand", "stoneedge", "zenheadbutt", "willowisp", "trickroom", "rockslide"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	barboach: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "return", "bounce"],
		tier: "LC",
	},
	whiscash: {
		randomBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt"],
		randomDoubleBattleMoves: ["dragondance", "waterfall", "earthquake", "stoneedge", "zenheadbutt", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	corphish: {
		randomBattleMoves: ["dragondance", "waterfall", "crunch", "superpower", "swordsdance", "knockoff", "aquajet"],
		tier: "LC",
	},
	crawdaunt: {
		randomBattleMoves: ["dragondance", "crabhammer", "superpower", "swordsdance", "knockoff", "aquajet"],
		randomDoubleBattleMoves: ["dragondance", "liquidation", "crunch", "superpower", "swordsdance", "knockoff", "aquajet", "protect"],

		tier: "UU",
		doublesTier: "DUU",
	},
	baltoy: {
		randomBattleMoves: ["stealthrock", "earthquake", "toxic", "psychic", "reflect", "lightscreen", "icebeam", "rapidspin"],
		tier: "LC",
	},
	claydol: {
		randomBattleMoves: ["stealthrock", "toxic", "psychic", "icebeam", "earthquake", "rapidspin"],
		randomDoubleBattleMoves: ["earthpower", "trickroom", "psychic", "icebeam", "earthquake", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	lileep: {
		randomBattleMoves: ["stealthrock", "recover", "ancientpower", "hiddenpowerfire", "gigadrain", "stockpile"],
		tier: "LC",
	},
	cradily: {
		randomBattleMoves: ["stealthrock", "recover", "gigadrain", "toxic", "seedbomb", "rockslide", "curse"],
		randomDoubleBattleMoves: ["protect", "recover", "seedbomb", "rockslide", "earthquake", "curse", "swordsdance"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	anorith: {
		randomBattleMoves: ["stealthrock", "brickbreak", "toxic", "xscissor", "rockslide", "swordsdance", "rockpolish"],
		tier: "LC",
	},
	armaldo: {
		randomBattleMoves: ["stealthrock", "stoneedge", "toxic", "xscissor", "knockoff", "rapidspin", "earthquake"],
		randomDoubleBattleMoves: ["rockslide", "stoneedge", "stringshot", "xscissor", "swordsdance", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	feebas: {
		randomBattleMoves: ["protect", "confuseray", "hypnosis", "scald", "toxic"],
		tier: "LC",
	},
	milotic: {
		randomBattleMoves: ["recover", "scald", "toxic", "icebeam", "dragontail", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["recover", "scald", "hydropump", "icebeam", "dragontail", "hypnosis", "protect", "hiddenpowergrass"],

		tier: "RU",
		doublesTier: "DOU",
	},
	castform: {
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	castformsunny: {
		randomBattleMoves: ["sunnyday", "fireblast", "solarbeam", "icebeam"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	castformrainy: {
		randomBattleMoves: ["raindance", "hydropump", "thunder", "hurricane"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	castformsnowy: {
		randomBattleMoves: ["hail", "blizzard", "thunderbolt", "fireblast"],
		requiredAbility: 'Forecast',
		battleOnly: true,
	},
	kecleon: {
		randomBattleMoves: ["fakeout", "knockoff", "drainpunch", "suckerpunch", "shadowsneak", "stealthrock", "recover"],
		randomDoubleBattleMoves: ["knockoff", "fakeout", "trickroom", "recover", "drainpunch", "suckerpunch", "shadowsneak", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shuppet: {
		randomBattleMoves: ["trickroom", "destinybond", "taunt", "shadowsneak", "suckerpunch", "willowisp"],
		tier: "LC",
	},
	banette: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff"],
		randomDoubleBattleMoves: ["shadowclaw", "suckerpunch", "willowisp", "shadowsneak", "knockoff", "protect"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	banettemega: {
		randomBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff"],
		randomDoubleBattleMoves: ["destinybond", "taunt", "shadowclaw", "suckerpunch", "willowisp", "knockoff", "protect"],
		requiredItem: "Banettite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	duskull: {
		randomBattleMoves: ["willowisp", "shadowsneak", "painsplit", "substitute", "nightshade", "destinybond", "trickroom"],

		tier: "LC",
	},
	dusclops: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icebeam", "painsplit", "substitute", "seismictoss", "toxic", "trickroom"],
		tier: "NFE",
	},
	dusknoir: {
		randomBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "substitute", "earthquake", "focuspunch"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "icepunch", "painsplit", "protect", "earthquake", "helpinghand", "trickroom"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	tropius: {
		randomBattleMoves: ["leechseed", "substitute", "airslash", "gigadrain", "toxic", "protect"],
		randomDoubleBattleMoves: ["leechseed", "protect", "airslash", "gigadrain", "earthquake", "hiddenpowerfire", "tailwind", "sunnyday", "roost"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	chingling: {
		randomBattleMoves: ["hypnosis", "reflect", "lightscreen", "toxic", "recover", "psychic", "signalbeam", "healbell"],
		tier: "LC",
	},
	chimecho: {
		randomBattleMoves: ["psychic", "yawn", "recover", "calmmind", "shadowball", "healingwish", "healbell", "taunt"],
		randomDoubleBattleMoves: ["protect", "psychic", "thunderwave", "recover", "shadowball", "dazzlinggleam", "trickroom", "helpinghand", "taunt"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	absol: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "superpower", "pursuit", "playrough"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],

		tier: "PU",
		doublesTier: "(DUU)",
	},
	absolmega: {
		randomBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "pursuit", "playrough", "icebeam"],
		randomDoubleBattleMoves: ["swordsdance", "suckerpunch", "knockoff", "fireblast", "superpower", "protect", "playrough"],
		requiredItem: "Absolite",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	snorunt: {
		randomBattleMoves: ["spikes", "icebeam", "iceshard", "shadowball", "toxic"],
		tier: "LC",
	},
	glalie: {
		randomBattleMoves: ["spikes", "icebeam", "iceshard", "taunt", "earthquake", "explosion", "superfang"],
		randomDoubleBattleMoves: ["icebeam", "iceshard", "taunt", "earthquake", "freezedry", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	glaliemega: {
		randomBattleMoves: ["freezedry", "iceshard", "earthquake", "explosion", "return", "spikes"],
		randomDoubleBattleMoves: ["crunch", "iceshard", "freezedry", "earthquake", "explosion", "protect", "return"],
		requiredItem: "Glalitite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	froslass: {
		randomBattleMoves: ["icebeam", "spikes", "destinybond", "shadowball", "taunt", "thunderwave"],
		randomDoubleBattleMoves: ["icebeam", "protect", "destinybond", "shadowball", "taunt", "thunderwave"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	spheal: {
		randomBattleMoves: ["substitute", "protect", "toxic", "surf", "icebeam", "yawn", "superfang"],
		tier: "LC",
	},
	sealeo: {
		randomBattleMoves: ["substitute", "protect", "toxic", "surf", "icebeam", "yawn", "superfang"],
		tier: "NFE",
	},
	walrein: {
		randomBattleMoves: ["superfang", "protect", "toxic", "surf", "icebeam", "roar"],
		randomDoubleBattleMoves: ["protect", "icywind", "surf", "icebeam", "superfang", "roar"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	clamperl: {
		randomBattleMoves: ["shellsmash", "icebeam", "surf", "hiddenpowergrass", "hiddenpowerelectric", "substitute"],
		tier: "LC",
	},
	huntail: {
		randomBattleMoves: ["shellsmash", "waterfall", "icebeam", "substitute", "suckerpunch"],
		randomDoubleBattleMoves: ["shellsmash", "waterfall", "icefang", "batonpass", "suckerpunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gorebyss: {
		randomBattleMoves: ["shellsmash", "hydropump", "icebeam", "hiddenpowergrass", "substitute"],
		randomDoubleBattleMoves: ["shellsmash", "batonpass", "surf", "icebeam", "hiddenpowergrass", "substitute", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	relicanth: {
		randomBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "stealthrock", "toxic"],
		randomDoubleBattleMoves: ["headsmash", "waterfall", "earthquake", "doubleedge", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	bagon: {
		randomBattleMoves: ["outrage", "dragondance", "firefang", "rockslide", "dragonclaw"],

		tier: "LC",
	},
	shelgon: {
		randomBattleMoves: ["outrage", "brickbreak", "dragonclaw", "dragondance", "crunch", "zenheadbutt"],
		tier: "NFE",
	},
	salamence: {
		randomBattleMoves: ["outrage", "fireblast", "earthquake", "dracometeor", "dragondance", "dragonclaw", "fly"],
		randomDoubleBattleMoves: ["protect", "fireblast", "earthquake", "dracometeor", "tailwind", "dragondance", "dragonclaw", "hydropump", "rockslide"],

		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	salamencemega: {
		randomBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "roost", "dragondance"],
		randomDoubleBattleMoves: ["doubleedge", "return", "fireblast", "earthquake", "dracometeor", "protect", "dragondance", "dragonclaw"],
		requiredItem: "Salamencite",
		tier: "Uber",
		doublesTier: "DOU",
	},
	beldum: {
		randomBattleMoves: ["ironhead", "zenheadbutt", "headbutt", "irondefense"],
		tier: "LC",
	},
	metang: {
		randomBattleMoves: ["stealthrock", "meteormash", "toxic", "earthquake", "bulletpunch", "zenheadbutt"],
		tier: "NFE",
	},
	metagross: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "stealthrock", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "earthquake", "protect", "zenheadbutt", "bulletpunch", "thunderpunch", "explosion", "icepunch", "hammerarm"],

		tier: "RU",
		doublesTier: "DUU",
	},
	metagrossmega: {
		randomBattleMoves: ["meteormash", "earthquake", "agility", "zenheadbutt", "hammerarm", "icepunch"],
		randomDoubleBattleMoves: ["meteormash", "earthquake", "protect", "zenheadbutt", "thunderpunch", "icepunch"],
		requiredItem: "Metagrossite",
		tier: "Uber",
		doublesTier: "DOU",
	},
	regirock: {
		randomBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rest", "rockslide", "toxic"],
		randomDoubleBattleMoves: ["stealthrock", "thunderwave", "stoneedge", "drainpunch", "curse", "rockslide", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	regice: {
		randomBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "rest", "sleeptalk", "focusblast", "rockpolish"],
		randomDoubleBattleMoves: ["thunderwave", "icebeam", "thunderbolt", "icywind", "protect", "focusblast", "rockpolish"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	registeel: {
		randomBattleMoves: ["stealthrock", "thunderwave", "toxic", "protect", "seismictoss", "curse", "ironhead", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["stealthrock", "ironhead", "curse", "rest", "thunderwave", "protect", "seismictoss"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	latias: {
		randomBattleMoves: ["dracometeor", "psyshock", "hiddenpowerfire", "roost", "thunderbolt", "healingwish", "defog"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "lightscreen", "reflect", "protect"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	latiasmega: {
		randomBattleMoves: ["calmmind", "dragonpulse", "surf", "dracometeor", "roost", "hiddenpowerfire", "substitute", "psyshock"],
		randomDoubleBattleMoves: ["dragonpulse", "psychic", "tailwind", "helpinghand", "healpulse", "lightscreen", "reflect", "protect"],
		requiredItem: "Latiasite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	latios: {
		randomBattleMoves: ["dracometeor", "hiddenpowerfire", "surf", "thunderbolt", "psyshock", "roost", "trick", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "surf", "thunderbolt", "psyshock", "substitute", "trick", "tailwind", "protect", "hiddenpowerfire"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	latiosmega: {
		randomBattleMoves: ["calmmind", "dracometeor", "hiddenpowerfire", "psyshock", "roost", "defog"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "surf", "thunderbolt", "psyshock", "substitute", "tailwind", "protect", "hiddenpowerfire"],
		requiredItem: "Latiosite",
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	kyogre: {
		randomBattleMoves: ["waterspout", "originpulse", "scald", "thunder", "icebeam"],
		randomDoubleBattleMoves: ["waterspout", "muddywater", "originpulse", "thunder", "icebeam", "calmmind", "rest", "sleeptalk", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	kyogreprimal: {
		randomBattleMoves: ["calmmind", "originpulse", "scald", "thunder", "icebeam", "toxic", "rest", "sleeptalk"],
		randomDoubleBattleMoves: ["waterspout", "originpulse", "muddywater", "thunder", "icebeam", "calmmind", "rest", "sleeptalk", "protect"],
		requiredItem: "Blue Orb",
	},
	groudon: {
		randomBattleMoves: ["earthquake", "stealthrock", "lavaplume", "stoneedge", "roar", "toxic", "thunderwave", "dragonclaw", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "rockslide", "protect", "stoneedge", "swordsdance", "rockpolish", "dragonclaw", "firepunch"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	groudonprimal: {
		randomBattleMoves: ["stealthrock", "precipiceblades", "lavaplume", "stoneedge", "dragontail", "rockpolish", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["precipiceblades", "lavaplume", "rockslide", "stoneedge", "swordsdance", "overheat", "rockpolish", "firepunch", "protect"],
		requiredItem: "Red Orb",
	},
	rayquaza: {
		randomBattleMoves: ["outrage", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw"],
		randomDoubleBattleMoves: ["tailwind", "vcreate", "extremespeed", "dragondance", "earthquake", "dracometeor", "dragonclaw", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	rayquazamega: {
		// randomBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance"],
		randomDoubleBattleMoves: ["vcreate", "extremespeed", "swordsdance", "earthquake", "dragonascent", "dragonclaw", "dragondance", "protect"],
		requiredMove: "Dragon Ascent",
		tier: "AG",
		doublesTier: "DUber",
	},
	jirachi: {
		randomBattleMoves: ["ironhead", "uturn", "firepunch", "icepunch", "trick", "stealthrock", "bodyslam", "toxic", "wish", "substitute"],
		randomDoubleBattleMoves: ["bodyslam", "ironhead", "icywind", "thunderwave", "helpinghand", "trickroom", "uturn", "followme", "zenheadbutt", "protect"],
		tier: "OU",
		doublesTier: "DUber",
	},
	deoxys: {
		randomBattleMoves: ["psychoboost", "stealthrock", "spikes", "firepunch", "superpower", "extremespeed", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "thunderbolt", "firepunch", "protect", "knockoff", "psyshock"],
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	deoxysattack: {
		randomBattleMoves: ["psychoboost", "superpower", "icebeam", "knockoff", "extremespeed", "firepunch", "stealthrock"],
		randomDoubleBattleMoves: ["psychoboost", "superpower", "extremespeed", "icebeam", "thunderbolt", "firepunch", "protect", "knockoff"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	deoxysdefense: {
		randomBattleMoves: ["spikes", "stealthrock", "recover", "taunt", "toxic", "seismictoss", "knockoff"],
		randomDoubleBattleMoves: ["protect", "stealthrock", "recover", "taunt", "reflect", "seismictoss", "lightscreen", "trickroom", "psychic"],
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	deoxysspeed: {
		randomBattleMoves: ["spikes", "stealthrock", "superpower", "psychoboost", "taunt", "magiccoat", "knockoff"],
		randomDoubleBattleMoves: ["superpower", "icebeam", "psychoboost", "taunt", "lightscreen", "reflect", "protect", "knockoff"],
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	turtwig: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "seedbomb", "substitute", "leechseed", "toxic"],

		tier: "LC",
	},
	grotle: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "seedbomb", "substitute", "leechseed", "toxic"],
		tier: "NFE",
	},
	torterra: {
		randomBattleMoves: ["stealthrock", "earthquake", "woodhammer", "stoneedge", "synthesis", "rockpolish"],
		randomDoubleBattleMoves: ["protect", "earthquake", "woodhammer", "stoneedge", "rockslide", "wideguard", "rockpolish"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	torterramega: {
		randomBattleMoves: ["stealthrock", "earthquake", "woodhammer", "stoneedge", "synthesis", "rockpolish"],
		randomDoubleBattleMoves: ["protect", "earthquake", "woodhammer", "stoneedge", "rockslide", "wideguard", "rockpolish"],
		requiredItem: "Torterrite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	chimchar: {
		randomBattleMoves: ["stealthrock", "overheat", "hiddenpowergrass", "fakeout", "uturn", "gunkshot"],

		tier: "LC",
	},
	monferno: {
		randomBattleMoves: ["stealthrock", "overheat", "hiddenpowergrass", "fakeout", "vacuumwave", "uturn", "gunkshot"],
		tier: "NFE",
	},
	infernape: {
		randomBattleMoves: ["stealthrock", "uturn", "closecombat", "flareblitz", "stoneedge", "machpunch", "nastyplot", "fireblast", "focusblast", "vacuumwave", "grassknot"],
		randomDoubleBattleMoves: ["fakeout", "heatwave", "closecombat", "uturn", "grassknot", "stoneedge", "machpunch", "feint", "taunt", "flareblitz", "thunderpunch", "protect"],

		tier: "UU",
		doublesTier: "(DUU)",
	},
	infernapemega: {//CHANGE
		randomBattleMoves: ["stealthrock", "uturn", "closecombat", "flareblitz", "stoneedge", "machpunch", "nastyplot", "fireblast", "focusblast", "vacuumwave", "grassknot"],
		randomDoubleBattleMoves: ["fakeout", "heatwave", "closecombat", "uturn", "grassknot", "stoneedge", "machpunch", "feint", "taunt", "flareblitz", "thunderpunch", "protect"],

		requiredItem: "Infernite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	piplup: {
		randomBattleMoves: ["stealthrock", "hydropump", "scald", "icebeam", "hiddenpowerelectric", "hiddenpowerfire", "yawn", "defog"],

		tier: "LC",
	},
	prinplup: {
		randomBattleMoves: ["stealthrock", "hydropump", "scald", "icebeam", "hiddenpowerelectric", "hiddenpowerfire", "yawn", "defog"],
		tier: "NFE",
	},
	empoleon: {
		randomBattleMoves: ["hydropump", "flashcannon", "grassknot", "defog", "icebeam", "scald", "toxic", "roar", "stealthrock"],
		randomDoubleBattleMoves: ["icywind", "scald", "surf", "icebeam", "hiddenpowerelectric", "protect", "grassknot", "flashcannon"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	empoleonemega: {//CHANGE
		randomBattleMoves: ["hydropump", "flashcannon", "grassknot", "defog", "icebeam", "scald", "toxic", "roar", "stealthrock"],
		randomDoubleBattleMoves: ["icywind", "scald", "surf", "icebeam", "hiddenpowerelectric", "protect", "grassknot", "flashcannon"],
		requiredItem: "Emporite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	starly: {
		randomBattleMoves: ["bravebird", "return", "uturn", "pursuit"],
		tier: "LC",
	},
	staravia: {
		randomBattleMoves: ["bravebird", "return", "uturn", "pursuit", "defog"],
		tier: "NFE",
	},
	staraptor: {
		randomBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "roost", "doubleedge"],
		randomDoubleBattleMoves: ["bravebird", "closecombat", "uturn", "quickattack", "doubleedge", "tailwind", "protect"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	bidoof: {
		randomBattleMoves: ["return", "aquatail", "curse", "quickattack", "stealthrock", "superfang"],
		tier: "LC",
	},
	bibarel: {
		randomBattleMoves: ["return", "liquidation", "swordsdance", "quickattack", "aquajet"],
		randomDoubleBattleMoves: ["return", "liquidation", "curse", "aquajet", "quickattack", "protect", "rest"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shinx: {
		randomBattleMoves: ["wildcharge", "icefang", "firefang", "crunch"],
		tier: "LC",
	},
	luxio: {
		randomBattleMoves: ["wildcharge", "icefang", "firefang", "crunch"],
		tier: "NFE",
	},
	luxray: {
		randomBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade"],
		randomDoubleBattleMoves: ["wildcharge", "icefang", "voltswitch", "crunch", "superpower", "facade", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cranidos: {
		randomBattleMoves: ["headsmash", "rockslide", "earthquake", "zenheadbutt", "firepunch", "rockpolish", "crunch"],
		tier: "LC",
	},
	rampardos: {
		randomBattleMoves: ["headsmash", "earthquake", "rockpolish", "crunch", "rockslide", "firepunch"],
		randomDoubleBattleMoves: ["headsmash", "earthquake", "zenheadbutt", "rockslide", "crunch", "stoneedge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	shieldon: {
		randomBattleMoves: ["stealthrock", "metalburst", "fireblast", "icebeam", "protect", "toxic", "roar"],
		tier: "LC",
	},
	bastiodon: {
		randomBattleMoves: ["stealthrock", "rockblast", "metalburst", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["stealthrock", "stoneedge", "metalburst", "protect", "wideguard", "guardsplit"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	burmy: {
		randomBattleMoves: ["bugbite", "hiddenpowerice", "electroweb", "protect"],
		tier: "LC",
	},
	wormadam: {
		randomBattleMoves: ["gigadrain", "bugbuzz", "quiverdance", "hiddenpowerrock", "leafstorm"],
		randomDoubleBattleMoves: ["leafstorm", "gigadrain", "bugbuzz", "hiddenpowerice", "hiddenpowerrock", "stringshot", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wormadamsandy: {
		randomBattleMoves: ["earthquake", "toxic", "protect", "stealthrock"],
		randomDoubleBattleMoves: ["earthquake", "suckerpunch", "rockblast", "protect", "stringshot"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wormadamtrash: {
		randomBattleMoves: ["stealthrock", "toxic", "gyroball", "protect"],
		randomDoubleBattleMoves: ["strugglebug", "stringshot", "gyroball", "bugbuzz", "flashcannon", "suckerpunch", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mothim: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "airslash", "gigadrain", "hiddenpowerground", "uturn"],
		randomDoubleBattleMoves: ["quiverdance", "bugbuzz", "airslash", "gigadrain", "roost", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	combee: {
		randomBattleMoves: ["bugbuzz", "aircutter", "endeavor", "ominouswind", "tailwind"],
		tier: "LC",
	},
	vespiquen: {
		randomBattleMoves: ["substitute", "toxic", "roost", "attackorder", "destinybond", "tailwind"],
		randomDoubleBattleMoves: ["tailwind", "healorder", "stringshot", "attackorder", "strugglebug", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	vespiquenmega: {
		randomBattleMoves: ["substitute", "toxic", "roost", "attackorder", "destinybond", "tailwind"],
		randomDoubleBattleMoves: ["tailwind", "healorder", "stringshot", "attackorder", "strugglebug", "protect"],
		requiredItem: "Vespite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pachirisu: {
		randomBattleMoves: ["nuzzle", "thunderbolt", "superfang", "toxic", "uturn"],
		randomDoubleBattleMoves: ["nuzzle", "thunderbolt", "superfang", "followme", "uturn", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	buizel: {
		randomBattleMoves: ["waterfall", "aquajet", "switcheroo", "brickbreak", "bulkup", "icepunch"],
		tier: "LC",
	},
	floatzel: {
		randomBattleMoves: ["bulkup", "liquidation", "icepunch", "substitute", "taunt", "aquajet", "brickbreak"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "switcheroo", "raindance", "protect", "icepunch", "crunch", "taunt"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cherubi: {
		randomBattleMoves: ["sunnyday", "solarbeam", "weatherball", "hiddenpowerice", "aromatherapy", "dazzlinggleam"],
		tier: "LC",
	},
	cherrim: {
		randomBattleMoves: ["energyball", "dazzlinggleam", "hiddenpowerfire", "synthesis", "healingwish"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "weatherball", "gigadrain", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cherrimsunshine: {
		randomBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["sunnyday", "solarbeam", "gigadrain", "weatherball", "protect"],
		requiredAbility: 'Flower Gift',
		battleOnly: true,
	},
	shellos: {
		randomBattleMoves: ["scald", "clearsmog", "recover", "toxic", "icebeam", "stockpile"],
		tier: "LC",
	},
	gastrodon: {
		randomBattleMoves: ["earthquake", "icebeam", "scald", "toxic", "recover", "clearsmog"],
		randomDoubleBattleMoves: ["earthpower", "icebeam", "scald", "muddywater", "recover", "icywind", "protect"],
		tier: "PU",
		doublesTier: "DOU",
	},
	drifloon: {
		randomBattleMoves: ["shadowball", "substitute", "calmmind", "hypnosis", "hiddenpowerfighting", "thunderbolt", "destinybond", "willowisp"],
		tier: "LC Uber",
	},
	drifblim: {
		randomBattleMoves: ["acrobatics", "willowisp", "substitute", "destinybond", "shadowball", "hex"],
		randomDoubleBattleMoves: ["shadowball", "substitute", "hypnosis", "hiddenpowerfighting", "thunderbolt", "destinybond", "willowisp", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	buneary: {
		randomBattleMoves: ["fakeout", "return", "switcheroo", "thunderpunch", "jumpkick", "firepunch", "icepunch", "healingwish"],
		tier: "LC",
	},
	lopunny: {
		randomBattleMoves: ["return", "switcheroo", "highjumpkick", "icepunch", "healingwish"],
		randomDoubleBattleMoves: ["return", "switcheroo", "highjumpkick", "firepunch", "icepunch", "fakeout", "protect", "encore"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lopunnymega: {
		randomBattleMoves: ["return", "highjumpkick", "substitute", "fakeout", "icepunch"],
		randomDoubleBattleMoves: ["return", "highjumpkick", "protect", "fakeout", "icepunch", "encore"],
		requiredItem: "Lopunnite",
		tier: "OU",
		doublesTier: "DUU",
	},
	glameow: {
		randomBattleMoves: ["fakeout", "uturn", "suckerpunch", "hypnosis", "quickattack", "return", "foulplay"],
		tier: "LC",
	},
	purugly: {
		randomBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "uturn", "suckerpunch", "quickattack", "return", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	stunky: {
		randomBattleMoves: ["pursuit", "suckerpunch", "crunch", "fireblast", "explosion", "taunt", "playrough", "defog"],
		tier: "LC",
	},
	skuntank: {
		randomBattleMoves: ["pursuit", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "defog"],
		randomDoubleBattleMoves: ["protect", "suckerpunch", "crunch", "fireblast", "taunt", "poisonjab", "playrough", "snarl"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	bronzor: {
		randomBattleMoves: ["stealthrock", "psychic", "toxic", "hypnosis", "reflect", "lightscreen", "trickroom", "trick"],
		tier: "LC",
	},
	bronzong: {
		randomBattleMoves: ["stealthrock", "earthquake", "toxic", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		randomDoubleBattleMoves: ["earthquake", "protect", "reflect", "lightscreen", "trickroom", "explosion", "gyroball"],
		tier: "RU",
		doublesTier: "DUU",
	},
	chatot: {
		randomBattleMoves: ["nastyplot", "boomburst", "heatwave", "hiddenpowerground", "substitute", "chatter", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "heatwave", "encore", "substitute", "chatter", "uturn", "protect", "hypervoice", "boomburst"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	spiritomb: {
		randomBattleMoves: ["shadowsneak", "pursuit", "willowisp", "darkpulse", "rest", "sleeptalk", "foulplay", "calmmind"],
		randomDoubleBattleMoves: ["shadowsneak", "icywind", "willowisp", "snarl", "darkpulse", "protect", "foulplay", "painsplit"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	spiritombmega: {//CHANGE
		randomBattleMoves: ["shadowsneak", "pursuit", "willowisp", "darkpulse", "rest", "sleeptalk", "foulplay", "calmmind"],
		randomDoubleBattleMoves: ["shadowsneak", "icywind", "willowisp", "snarl", "darkpulse", "protect", "foulplay", "painsplit"],
		requiredItem: "Spiritnite",
		tier: "PU",
		doublesTier: "(DUU)",
	},
	gible: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "fireblast", "stoneedge", "stealthrock"],
		tier: "LC",
	},
	gabite: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "fireblast", "stoneedge", "stealthrock"],
		tier: "NFE",
	},
	garchomp: {
		randomBattleMoves: ["outrage", "dragonclaw", "earthquake", "stoneedge", "fireblast", "swordsdance", "stealthrock", "firefang"],
		randomDoubleBattleMoves: ["substitute", "dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect", "firefang"],

		tier: "OU",
		doublesTier: "DOU",
	},
	garchompmega: {
		randomBattleMoves: ["outrage", "dracometeor", "earthquake", "stoneedge", "fireblast", "swordsdance"],
		randomDoubleBattleMoves: ["substitute", "dragonclaw", "earthquake", "stoneedge", "rockslide", "swordsdance", "protect", "fireblast"],
		requiredItem: "Garchompite",
		tier: "(OU)",
		doublesTier: "(DOU)",
	},
	riolu: {
		randomBattleMoves: ["crunch", "rockslide", "copycat", "drainpunch", "highjumpkick", "icepunch", "swordsdance"],
		tier: "LC",
	},
	lucario: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "extremespeed", "icepunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "vacuumwave", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],

		tier: "UU",
		doublesTier: "(DUU)",
	},
	lucariomega: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "icepunch", "bulletpunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "meteormash", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		requiredItem: "Lucarionite",
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	giracario: { //CHANGE RANDOM
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "extremespeed", "icepunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "vacuumwave", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],

		tier: "UU",
		doublesTier: "(DUU)",
	},
	giracarioalt: {
		randomBattleMoves: ["swordsdance", "closecombat", "crunch", "icepunch", "bulletpunch", "meteormash", "nastyplot", "aurasphere", "darkpulse", "flashcannon"],
		randomDoubleBattleMoves: ["followme", "closecombat", "crunch", "extremespeed", "icepunch", "bulletpunch", "meteormash", "aurasphere", "darkpulse", "vacuumwave", "flashcannon", "protect"],
		requiredItem: "Giracario Crystal",
		tier: "Uber",
		doublesTier: "(DUU)",
	},
	hippopotas: {
		randomBattleMoves: ["earthquake", "recover", "whirlwind", "stealthrock", "protect", "toxic", "stockpile"],
		tier: "LC",
	},
	hippowdon: {
		randomBattleMoves: ["earthquake", "recover", "whirlwind", "stealthrock", "toxic", "stoneedge"],
		randomDoubleBattleMoves: ["earthquake", "recover", "rockslide", "stealthrock", "protect", "stoneedge", "whirlwind"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	skorupi: {
		randomBattleMoves: ["toxicspikes", "xscissor", "poisonjab", "knockoff", "pinmissile", "whirlwind"],
		tier: "LC",
	},
	drapion: {
		randomBattleMoves: ["knockoff", "taunt", "toxicspikes", "poisonjab", "whirlwind", "swordsdance", "aquatail", "earthquake"],
		randomDoubleBattleMoves: ["snarl", "taunt", "protect", "earthquake", "aquatail", "swordsdance", "poisonjab", "knockoff"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	croagunk: {
		randomBattleMoves: ["fakeout", "vacuumwave", "suckerpunch", "drainpunch", "darkpulse", "knockoff", "gunkshot", "toxic"],

		tier: "LC",
	},
	toxicroak: {
		randomBattleMoves: ["swordsdance", "gunkshot", "drainpunch", "suckerpunch", "icepunch", "substitute"],
		randomDoubleBattleMoves: ["suckerpunch", "drainpunch", "substitute", "swordsdance", "knockoff", "icepunch", "gunkshot", "fakeout", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	carnivine: {
		randomBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "powerwhip", "return", "sleeppowder", "substitute", "leechseed", "knockoff", "ragepowder", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	finneon: {
		randomBattleMoves: ["surf", "uturn", "icebeam", "hiddenpowerelectric", "hiddenpowergrass"],
		tier: "LC",
	},
	lumineon: {
		randomBattleMoves: ["scald", "icebeam", "uturn", "toxic", "defog"],
		randomDoubleBattleMoves: ["surf", "uturn", "icebeam", "toxic", "raindance", "tailwind", "scald", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	snover: {
		randomBattleMoves: ["blizzard", "iceshard", "gigadrain", "leechseed", "substitute", "woodhammer"],
		tier: "LC",
	},
	abomasnow: {
		randomBattleMoves: ["woodhammer", "iceshard", "blizzard", "gigadrain", "leechseed", "substitute", "focuspunch", "earthquake"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "focusblast", "woodhammer", "earthquake"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	abomasnowmega: {
		randomBattleMoves: ["blizzard", "gigadrain", "woodhammer", "earthquake", "iceshard", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["blizzard", "iceshard", "gigadrain", "protect", "focusblast", "woodhammer", "earthquake"],
		requiredItem: "Abomasite",
		tier: "PUBL",
		doublesTier: "DUU",
	},
	rotom: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp"],
		randomDoubleBattleMoves: ["thunderbolt", "voltswitch", "shadowball", "substitute", "painsplit", "hiddenpowerice", "trick", "willowisp", "electroweb", "protect"],

		tier: "NU",
		doublesTier: "(DUU)",
	},
	rotomheat: {
		randomBattleMoves: ["overheat", "thunderbolt", "voltswitch", "hiddenpowerice", "painsplit", "willowisp"],
		randomDoubleBattleMoves: ["overheat", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "electroweb", "protect"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	rotomwash: {
		randomBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "painsplit", "hiddenpowerice", "willowisp", "trick"],
		randomDoubleBattleMoves: ["hydropump", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "trick", "electroweb", "protect", "hiddenpowergrass"],
		tier: "OU",
		doublesTier: "DUU",
	},
	rotomfrost: {
		randomBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "substitute", "painsplit", "willowisp", "trick"],
		randomDoubleBattleMoves: ["blizzard", "thunderbolt", "voltswitch", "substitute", "painsplit", "willowisp", "trick", "electroweb", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	rotomfan: {
		randomBattleMoves: ["airslash", "thunderbolt", "voltswitch", "painsplit", "willowisp", "defog"],
		randomDoubleBattleMoves: ["airslash", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerice", "willowisp", "electroweb", "discharge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	rotommow: {
		randomBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "defog", "hiddenpowerfire", "willowisp", "trick"],
		randomDoubleBattleMoves: ["leafstorm", "thunderbolt", "voltswitch", "substitute", "painsplit", "hiddenpowerfire", "willowisp", "trick", "electroweb", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	uxie: {
		randomBattleMoves: ["stealthrock", "thunderwave", "psychic", "uturn", "healbell", "knockoff", "yawn"],
		randomDoubleBattleMoves: ["uturn", "psyshock", "yawn", "healbell", "stealthrock", "thunderbolt", "protect", "helpinghand", "thunderwave"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	mesprit: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "energyball", "signalbeam", "hiddenpowerfire", "icebeam", "healingwish", "stealthrock", "uturn"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "thunderbolt", "icebeam", "substitute", "uturn", "trick", "protect", "knockoff", "helpinghand"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	azelf: {
		randomBattleMoves: ["nastyplot", "psyshock", "fireblast", "dazzlinggleam", "stealthrock", "knockoff", "taunt", "explosion"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "fireblast", "thunderbolt", "icepunch", "knockoff", "zenheadbutt", "uturn", "taunt", "protect", "dazzlinggleam"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	dialga: {
		randomBattleMoves: ["stealthrock", "toxic", "dracometeor", "fireblast", "flashcannon", "roar", "thunderbolt"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "protect", "thunderbolt", "flashcannon", "earthpower", "fireblast", "aurasphere"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	palkia: {
		randomBattleMoves: ["spacialrend", "dracometeor", "hydropump", "thunderwave", "dragontail", "fireblast"],
		randomDoubleBattleMoves: ["spacialrend", "dracometeor", "surf", "hydropump", "thunderbolt", "fireblast", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	heatran: {
		randomBattleMoves: ["magmastorm", "lavaplume", "stealthrock", "earthpower", "flashcannon", "protect", "toxic", "roar"],
		randomDoubleBattleMoves: ["heatwave", "substitute", "earthpower", "protect", "eruption", "willowisp"],
		tier: "OU",
		doublesTier: "DOU",
	},
	regigigas: {
		randomBattleMoves: ["thunderwave", "confuseray", "substitute", "return", "knockoff", "drainpunch"],
		randomDoubleBattleMoves: ["thunderwave", "substitute", "return", "icywind", "rockslide", "earthquake", "knockoff", "wideguard"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	giratina: {
		randomBattleMoves: ["rest", "sleeptalk", "dragontail", "roar", "willowisp", "shadowball", "dragonpulse"],
		randomDoubleBattleMoves: ["tailwind", "shadowsneak", "protect", "dragontail", "willowisp", "calmmind", "dragonpulse", "shadowball"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	giratinaorigin: {
		randomBattleMoves: ["dracometeor", "shadowsneak", "dragontail", "willowisp", "defog", "toxic", "shadowball", "earthquake"],
		randomDoubleBattleMoves: ["dracometeor", "shadowsneak", "tailwind", "hiddenpowerfire", "willowisp", "calmmind", "substitute", "dragonpulse", "shadowball", "aurasphere", "protect", "earthquake"],
		requiredItem: "Griseous Orb",
		tier: "Uber",
		doublesTier: "DUber",
	},
	cresselia: {
		randomBattleMoves: ["moonlight", "psychic", "icebeam", "thunderwave", "toxic", "substitute", "psyshock", "moonblast", "calmmind"],
		randomDoubleBattleMoves: ["psyshock", "icywind", "thunderwave", "trickroom", "moonblast", "moonlight", "skillswap", "reflect", "lightscreen", "icebeam", "protect", "helpinghand"],
		tier: "RU",
		doublesTier: "DOU",
	},
	cresseliamega: {//CHANGE
		randomBattleMoves: ["moonlight", "psychic", "icebeam", "thunderwave", "toxic", "substitute", "psyshock", "moonblast", "calmmind"],
		randomDoubleBattleMoves: ["psyshock", "icywind", "thunderwave", "trickroom", "moonblast", "moonlight", "skillswap", "reflect", "lightscreen", "icebeam", "protect", "helpinghand"],
		requiredItem: "Cressite",
		tier: "RU",
		doublesTier: "DOU",
	},
	phione: {
		randomBattleMoves: ["raindance", "scald", "uturn", "rest", "icebeam"],
		randomDoubleBattleMoves: ["raindance", "scald", "uturn", "rest", "icebeam", "helpinghand", "icywind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	manaphy: {
		randomBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "psychic"],
		randomDoubleBattleMoves: ["tailglow", "surf", "icebeam", "energyball", "protect", "scald", "icywind", "helpinghand"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	darkrai: {
		randomBattleMoves: ["hypnosis", "darkpulse", "focusblast", "nastyplot", "substitute", "sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse", "focusblast", "nastyplot", "substitute", "snarl", "icebeam", "protect"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	darkraimega: { //CHANGE
		randomBattleMoves: ["hypnosis", "darkpulse", "focusblast", "nastyplot", "substitute", "sludgebomb"],
		randomDoubleBattleMoves: ["darkpulse", "focusblast", "nastyplot", "substitute", "snarl", "icebeam", "protect"],

		requiredItem: "Darkrite",
		tier: "Uber",
		doublesTier: "DUU",
	},
	shaymin: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "psychic", "rest", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "hiddenpowerfire", "rest", "substitute", "leechseed", "tailwind", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	shayminsky: {
		randomBattleMoves: ["seedflare", "earthpower", "airslash", "hiddenpowerice", "substitute", "leechseed", "healingwish"],
		randomDoubleBattleMoves: ["seedflare", "earthpower", "airslash", "rest", "substitute", "leechseed", "tailwind", "protect", "hiddenpowerice"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	arceus: {
		randomBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover"],
		randomDoubleBattleMoves: ["swordsdance", "extremespeed", "shadowclaw", "earthquake", "recover", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	arceusbug: {
		randomBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead"],
		randomDoubleBattleMoves: ["swordsdance", "xscissor", "stoneedge", "recover", "earthquake", "ironhead", "protect"],
		requiredItems: ["Insect Plate", "Buginium Z"],
	},
	arceusdark: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "fireblast", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "focusblast", "safeguard", "snarl", "willowisp", "protect"],
		requiredItems: ["Dread Plate", "Darkinium Z"],
	},
	arceusdragon: {
		randomBattleMoves: ["swordsdance", "outrage", "extremespeed", "earthquake", "recover", "judgment", "fireblast", "willowisp", "defog"],
		randomDoubleBattleMoves: ["swordsdance", "dragonclaw", "extremespeed", "earthquake", "recover", "protect"],
		requiredItems: ["Draco Plate", "Dragonium Z"],
	},
	arceuselectric: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "earthpower"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "icebeam", "protect"],
		requiredItems: ["Zap Plate", "Electrium Z"],
	},
	arceusfairy: {
		randomBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "defog", "earthpower", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "willowisp", "protect", "earthpower", "thunderbolt"],
		requiredItems: ["Pixie Plate", "Fairium Z"],
	},
	arceusfighting: {
		randomBattleMoves: ["calmmind", "judgment", "stoneedge", "shadowball", "recover", "roar", "icebeam"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "icebeam", "shadowball", "recover", "willowisp", "protect"],
		requiredItems: ["Fist Plate", "Fightinium Z"],
	},
	arceusfire: {
		randomBattleMoves: ["calmmind", "fireblast", "roar", "thunderbolt", "icebeam", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "recover", "heatwave", "protect", "willowisp"],
		requiredItems: ["Flame Plate", "Firium Z"],
	},
	arceusflying: {
		randomBattleMoves: ["calmmind", "judgment", "earthpower", "fireblast", "toxic", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "safeguard", "recover", "substitute", "tailwind", "protect"],
		requiredItems: ["Sky Plate", "Flyinium Z"],
	},
	arceusghost: {
		randomBattleMoves: ["swordsdance", "shadowforce", "shadowclaw", "brickbreak", "extremespeed", "recover", "judgment", "toxic", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "focusblast", "recover", "swordsdance", "shadowforce", "brickbreak", "willowisp", "protect"],
		requiredItems: ["Spooky Plate", "Ghostium Z"],
	},
	arceusgrass: {
		randomBattleMoves: ["judgment", "recover", "calmmind", "icebeam", "fireblast"],
		randomDoubleBattleMoves: ["calmmind", "icebeam", "judgment", "earthpower", "recover", "safeguard", "thunderwave", "protect"],
		requiredItems: ["Meadow Plate", "Grassium Z"],
	},
	arceusground: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "icebeam", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "calmmind", "judgment", "icebeam", "rockslide", "protect"],
		requiredItems: ["Earth Plate", "Groundium Z"],
	},
	arceusice: {
		randomBattleMoves: ["calmmind", "judgment", "thunderbolt", "fireblast", "recover"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "thunderbolt", "focusblast", "recover", "protect", "icywind"],
		requiredItems: ["Icicle Plate", "Icium Z"],
	},
	arceuspoison: {
		randomBattleMoves: ["calmmind", "sludgebomb", "fireblast", "recover", "icebeam", "defog"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "sludgebomb", "heatwave", "recover", "willowisp", "protect", "earthpower"],
		requiredItems: ["Toxic Plate", "Poisonium Z"],
	},
	arceuspsychic: {
		randomBattleMoves: ["judgment", "calmmind", "fireblast", "recover", "icebeam", "toxic"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "focusblast", "recover", "willowisp", "judgment", "protect"],
		requiredItems: ["Mind Plate", "Psychium Z"],
	},
	arceusrock: {
		randomBattleMoves: ["swordsdance", "earthquake", "stoneedge", "recover", "judgment", "willowisp", "stealthrock"],
		randomDoubleBattleMoves: ["swordsdance", "stoneedge", "recover", "rockslide", "earthquake", "protect"],
		requiredItems: ["Stone Plate", "Rockium Z"],
	},
	arceussteel: {
		randomBattleMoves: ["judgment", "recover", "willowisp", "defog", "roar", "swordsdance", "ironhead", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["calmmind", "judgment", "recover", "protect", "willowisp"],
		requiredItems: ["Iron Plate", "Steelium Z"],
	},
	arceuswater: {
		randomBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "toxic", "defog"],
		randomDoubleBattleMoves: ["recover", "calmmind", "judgment", "icebeam", "fireblast", "icywind", "surf", "protect"],
		requiredItems: ["Splash Plate", "Waterium Z"],
	},
	victini: {
		randomBattleMoves: ["vcreate", "boltstrike", "uturn", "zenheadbutt", "grassknot", "focusblast", "blueflare"],
		randomDoubleBattleMoves: ["vcreate", "boltstrike", "uturn", "psychic", "focusblast", "blueflare", "protect"],
		tier: "OU",
		doublesTier: "DOU",
	},
	snivy: {
		randomBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "leechseed", "hiddenpowerice", "gigadrain"],
		tier: "LC",
	},
	servine: {
		randomBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "leechseed", "hiddenpowerice", "gigadrain"],
		tier: "NFE",
	},
	serperior: {
		randomBattleMoves: ["leafstorm", "dragonpulse", "hiddenpowerfire", "substitute", "leechseed", "glare"],
		randomDoubleBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "taunt", "dragonpulse", "protect"],

		tier: "OU",
		doublesTier: "(DUU)",
	},
	serperiormega: { //CHANGE
		randomBattleMoves: ["leafstorm", "dragonpulse", "hiddenpowerfire", "substitute", "leechseed", "glare"],
		randomDoubleBattleMoves: ["leafstorm", "hiddenpowerfire", "substitute", "taunt", "dragonpulse", "protect"],

		requiredItem: "Serpentite",
		tier: "OU",
		doublesTier: "(DUU)",
	},
	tepig: {
		randomBattleMoves: ["flamecharge", "flareblitz", "wildcharge", "superpower", "headsmash"],
		tier: "LC",
	},
	pignite: {
		randomBattleMoves: ["flamecharge", "flareblitz", "wildcharge", "superpower", "headsmash"],
		tier: "NFE",
	},
	emboar: {
		randomBattleMoves: ["flareblitz", "superpower", "wildcharge", "headsmash", "fireblast", "grassknot", "suckerpunch"],
		randomDoubleBattleMoves: ["flareblitz", "superpower", "flamecharge", "wildcharge", "headsmash", "protect", "heatwave", "rockslide"],

		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	emboarmega: {//CHANGE
		randomBattleMoves: ["flareblitz", "superpower", "wildcharge", "headsmash", "fireblast", "grassknot", "suckerpunch"],
		randomDoubleBattleMoves: ["flareblitz", "superpower", "flamecharge", "wildcharge", "headsmash", "protect", "heatwave", "rockslide"],

		requiredItem: "Emboarite",
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	oshawott: {
		randomBattleMoves: ["swordsdance", "waterfall", "aquajet", "xscissor"],
		tier: "LC",
	},
	dewott: {
		randomBattleMoves: ["swordsdance", "waterfall", "aquajet", "xscissor"],
		tier: "NFE",
	},
	samurott: {
		randomBattleMoves: ["swordsdance", "liquidation", "aquajet", "megahorn", "sacredsword", "hydropump", "icebeam", "grassknot"],
		randomDoubleBattleMoves: ["hydropump", "aquajet", "icebeam", "scald", "hiddenpowergrass", "taunt", "helpinghand", "protect"],

		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	samurottmega: { //CHANGE
		randomBattleMoves: ["swordsdance", "liquidation", "aquajet", "megahorn", "sacredsword", "hydropump", "icebeam", "grassknot"],
		randomDoubleBattleMoves: ["hydropump", "aquajet", "icebeam", "scald", "hiddenpowergrass", "taunt", "helpinghand", "protect"],

		requiredItem: "Samurite",
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	patrat: {
		randomBattleMoves: ["swordsdance", "substitute", "hypnosis", "return", "superfang"],
		tier: "LC",
	},
	watchog: {
		randomBattleMoves: ["hypnosis", "substitute", "superfang", "swordsdance", "return", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "knockoff", "substitute", "hypnosis", "return", "superfang", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lillipup: {
		randomBattleMoves: ["return", "wildcharge", "firefang", "crunch", "icefang"],
		tier: "LC",
	},
	herdier: {
		randomBattleMoves: ["return", "wildcharge", "firefang", "crunch", "icefang"],
		tier: "NFE",
	},
	stoutland: {
		randomBattleMoves: ["return", "crunch", "wildcharge", "superpower", "icefang"],
		randomDoubleBattleMoves: ["return", "wildcharge", "superpower", "crunch", "icefang", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	purrloin: {
		randomBattleMoves: ["encore", "taunt", "uturn", "knockoff", "thunderwave"],
		tier: "LC",
	},
	liepard: {
		randomBattleMoves: ["knockoff", "encore", "suckerpunch", "thunderwave", "uturn", "substitute", "nastyplot", "darkpulse", "copycat"],
		randomDoubleBattleMoves: ["encore", "thunderwave", "substitute", "knockoff", "playrough", "uturn", "suckerpunch", "fakeout", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	pansage: {
		randomBattleMoves: ["leafstorm", "hiddenpowerfire", "hiddenpowerice", "gigadrain", "nastyplot", "substitute", "leechseed"],

		tier: "LC",
	},
	simisage: {
		randomBattleMoves: ["nastyplot", "gigadrain", "focusblast", "hiddenpowerice", "substitute", "leafstorm", "knockoff", "superpower"],
		randomDoubleBattleMoves: ["nastyplot", "leafstorm", "hiddenpowerfire", "hiddenpowerice", "gigadrain", "focusblast", "substitute", "taunt", "synthesis", "helpinghand", "spikyshield"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pansear: {
		randomBattleMoves: ["nastyplot", "fireblast", "hiddenpowerelectric", "hiddenpowerground", "sunnyday", "solarbeam", "overheat"],
		tier: "LC",
	},
	simisear: {
		randomBattleMoves: ["substitute", "nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["nastyplot", "fireblast", "focusblast", "grassknot", "hiddenpowerground", "substitute", "heatwave", "taunt", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	panpour: {
		randomBattleMoves: ["nastyplot", "hydropump", "hiddenpowergrass", "substitute", "surf", "icebeam"],
		tier: "LC",
	},
	simipour: {
		randomBattleMoves: ["substitute", "nastyplot", "hydropump", "icebeam", "focusblast"],
		randomDoubleBattleMoves: ["nastyplot", "hydropump", "icebeam", "substitute", "surf", "taunt", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	munna: {
		randomBattleMoves: ["psychic", "hiddenpowerfighting", "hypnosis", "calmmind", "moonlight", "thunderwave", "psyshock", "healbell", "signalbeam"],
		tier: "LC",
	},
	musharna: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "signalbeam", "moonlight", "healbell", "thunderwave"],
		randomDoubleBattleMoves: ["trickroom", "thunderwave", "moonlight", "psychic", "hiddenpowerfighting", "helpinghand", "psyshock", "hypnosis", "signalbeam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pidove: {
		randomBattleMoves: ["pluck", "uturn", "return", "detect", "roost", "wish"],
		tier: "LC",
	},
	tranquill: {
		randomBattleMoves: ["pluck", "uturn", "return", "detect", "roost", "wish"],
		tier: "NFE",
	},
	unfezant: {
		randomBattleMoves: ["return", "pluck", "hypnosis", "tailwind", "uturn", "roost", "nightslash"],
		randomDoubleBattleMoves: ["pluck", "uturn", "return", "protect", "tailwind", "taunt", "roost", "nightslash"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	blitzle: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "wildcharge", "mefirst"],
		tier: "LC",
	},
	zebstrika: {
		randomBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "thunderbolt"],
		randomDoubleBattleMoves: ["voltswitch", "hiddenpowergrass", "overheat", "wildcharge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	roggenrola: {
		randomBattleMoves: ["autotomize", "stoneedge", "stealthrock", "rockblast", "earthquake", "explosion"],
		tier: "LC",
	},
	boldore: {
		randomBattleMoves: ["autotomize", "stoneedge", "stealthrock", "rockblast", "earthquake", "explosion"],
		tier: "NFE",
	},
	gigalith: {
		randomBattleMoves: ["stealthrock", "rockblast", "earthquake", "explosion", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["stealthrock", "rockslide", "earthquake", "explosion", "stoneedge", "autotomize", "superpower", "wideguard", "protect"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	woobat: {
		randomBattleMoves: ["calmmind", "psychic", "airslash", "gigadrain", "roost", "heatwave", "storedpower"],
		tier: "LC",
	},
	swoobat: {
		randomBattleMoves: ["substitute", "calmmind", "storedpower", "heatwave", "psychic", "airslash", "roost"],
		randomDoubleBattleMoves: ["calmmind", "psychic", "airslash", "gigadrain", "protect", "heatwave", "tailwind"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	drilbur: {
		randomBattleMoves: ["swordsdance", "rapidspin", "earthquake", "rockslide", "shadowclaw", "return", "xscissor"],
		tier: "LC",
	},
	excadrill: {
		randomBattleMoves: ["swordsdance", "earthquake", "ironhead", "rockslide", "rapidspin"],
		randomDoubleBattleMoves: ["swordsdance", "drillrun", "earthquake", "rockslide", "ironhead", "substitute", "protect"],
		tier: "OU",
		doublesTier: "DOU",
	},
	audino: {
		randomBattleMoves: ["wish", "protect", "healbell", "toxic", "thunderwave", "reflect", "lightscreen", "doubleedge"],
		randomDoubleBattleMoves: ["healpulse", "protect", "healbell", "trickroom", "thunderwave", "reflect", "lightscreen", "doubleedge", "helpinghand", "hypervoice"],

		tier: "PU",
		doublesTier: "(DUU)",
	},
	audinomega: {
		randomBattleMoves: ["wish", "calmmind", "healbell", "dazzlinggleam", "hypervoice", "protect", "fireblast"],
		randomDoubleBattleMoves: ["healpulse", "protect", "healbell", "trickroom", "thunderwave", "hypervoice", "helpinghand", "dazzlinggleam"],
		requiredItem: "Audinite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	timburr: {
		randomBattleMoves: ["machpunch", "bulkup", "drainpunch", "icepunch", "knockoff"],
		tier: "LC",
	},
	gurdurr: {
		randomBattleMoves: ["bulkup", "machpunch", "drainpunch", "icepunch", "knockoff"],
		tier: "PU",
		doublesTier: "NFE",
	},
	conkeldurr: {
		randomBattleMoves: ["bulkup", "drainpunch", "icepunch", "knockoff", "machpunch"],
		randomDoubleBattleMoves: ["wideguard", "machpunch", "drainpunch", "icepunch", "knockoff", "protect"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	tympole: {
		randomBattleMoves: ["hydropump", "surf", "sludgewave", "earthpower", "hiddenpowerelectric"],
		tier: "LC",
	},
	palpitoad: {
		randomBattleMoves: ["hydropump", "surf", "sludgewave", "earthpower", "hiddenpowerelectric", "stealthrock"],
		tier: "NFE",
	},
	seismitoad: {
		randomBattleMoves: ["hydropump", "scald", "sludgewave", "earthquake", "knockoff", "stealthrock", "toxic", "raindance"],
		randomDoubleBattleMoves: ["hydropump", "muddywater", "sludgebomb", "earthquake", "hiddenpowerelectric", "icywind", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	throh: {
		randomBattleMoves: ["bulkup", "circlethrow", "icepunch", "stormthrow", "rest", "sleeptalk", "knockoff"],
		randomDoubleBattleMoves: ["helpinghand", "circlethrow", "icepunch", "stormthrow", "wideguard", "knockoff", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sawk: {
		randomBattleMoves: ["closecombat", "earthquake", "icepunch", "poisonjab", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "knockoff", "icepunch", "rockslide", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	sewaddle: {
		randomBattleMoves: ["calmmind", "gigadrain", "bugbuzz", "hiddenpowerfire", "hiddenpowerice", "airslash"],
		tier: "LC",
	},
	swadloon: {
		randomBattleMoves: ["calmmind", "gigadrain", "bugbuzz", "hiddenpowerfire", "hiddenpowerice", "airslash", "stickyweb"],
		tier: "NFE",
	},
	leavanny: {
		randomBattleMoves: ["stickyweb", "swordsdance", "leafblade", "xscissor", "knockoff"],
		randomDoubleBattleMoves: ["swordsdance", "leafblade", "xscissor", "protect", "stickyweb", "poisonjab"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	venipede: {
		randomBattleMoves: ["toxicspikes", "infestation", "spikes", "endeavor", "protect"],
		tier: "LC",
	},
	whirlipede: {
		randomBattleMoves: ["toxicspikes", "infestation", "spikes", "endeavor", "protect"],
		tier: "NFE",
	},
	scolipede: {
		randomBattleMoves: ["protect", "spikes", "toxicspikes", "megahorn", "rockslide", "earthquake", "swordsdance", "poisonjab"],
		randomDoubleBattleMoves: ["substitute", "protect", "megahorn", "rockslide", "poisonjab", "swordsdance", "batonpass", "aquatail", "superpower"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	cottonee: {
		randomBattleMoves: ["encore", "taunt", "substitute", "leechseed", "toxic", "stunspore"],
		tier: "LC",
	},
	whimsicott: {
		randomBattleMoves: ["encore", "taunt", "leechseed", "uturn", "toxic", "stunspore", "memento", "tailwind", "moonblast", "defog"],
		randomDoubleBattleMoves: ["encore", "taunt", "substitute", "leechseed", "uturn", "helpinghand", "stunspore", "moonblast", "tailwind", "dazzlinggleam", "gigadrain", "protect", "defog"],
		tier: "NU",
		doublesTier: "DOU",
	},
	petilil: {
		randomBattleMoves: ["sunnyday", "sleeppowder", "solarbeam", "hiddenpowerfire", "hiddenpowerice", "healingwish"],
		tier: "LC",
	},
	lilligant: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "petaldance", "gigadrain", "hiddenpowerfire", "hiddenpowerrock"],
		randomDoubleBattleMoves: ["quiverdance", "gigadrain", "sleeppowder", "hiddenpowerice", "hiddenpowerfire", "hiddenpowerrock", "petaldance", "helpinghand", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	basculin: {
		randomBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "headsmash"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "doubleedge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	basculinbluestriped: {
		randomBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "headsmash"],
		randomDoubleBattleMoves: ["liquidation", "aquajet", "superpower", "crunch", "doubleedge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	sandile: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "crunch"],
		tier: "LC",
	},
	krokorok: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "crunch"],
		tier: "NFE",
	},
	krookodile: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "knockoff", "stealthrock", "superpower"],
		randomDoubleBattleMoves: ["earthquake", "stoneedge", "protect", "knockoff", "superpower"],
		tier: "UU",
		doublesTier: "DUU",
	},
	krookodilemega: {
		randomBattleMoves: ["earthquake", "stoneedge", "pursuit", "knockoff", "stealthrock", "superpower"],
		randomDoubleBattleMoves: ["earthquake", "stoneedge", "protect", "knockoff", "superpower"],
		requiredItem: "Krookonite",
		tier: "UU",
		doublesTier: "DUU",
	},
	darumaka: {
		randomBattleMoves: ["uturn", "flareblitz", "firepunch", "rockslide", "superpower"],
		tier: "LC",
	},
	darmanitan: {
		randomBattleMoves: ["uturn", "flareblitz", "rockslide", "earthquake", "superpower"],
		randomDoubleBattleMoves: ["uturn", "flareblitz", "firepunch", "rockslide", "earthquake", "superpower", "protect"],

		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	darmanitanzen: {
		requiredAbility: "Zen Mode",
		battleOnly: true,
	},
	maractus: {
		randomBattleMoves: ["spikes", "gigadrain", "leechseed", "hiddenpowerfire", "toxic", "suckerpunch", "spikyshield"],
		randomDoubleBattleMoves: ["grassyterrain", "gigadrain", "leechseed", "hiddenpowerfire", "helpinghand", "suckerpunch", "spikyshield"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	dwebble: {
		randomBattleMoves: ["stealthrock", "spikes", "shellsmash", "earthquake", "rockblast", "xscissor", "stoneedge"],
		tier: "LC",
	},
	crustle: {
		randomBattleMoves: ["stealthrock", "spikes", "shellsmash", "earthquake", "rockblast", "xscissor", "stoneedge"],
		randomDoubleBattleMoves: ["protect", "shellsmash", "earthquake", "rockslide", "xscissor", "stoneedge"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	scraggy: {
		randomBattleMoves: ["dragondance", "icepunch", "highjumpkick", "drainpunch", "rest", "bulkup", "crunch", "knockoff"],
		tier: "LC",
	},
	scrafty: {
		randomBattleMoves: ["dragondance", "icepunch", "highjumpkick", "drainpunch", "rest", "bulkup", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "drainpunch", "knockoff", "icepunch", "stoneedge", "protect"],
		tier: "NU",
		doublesTier: "DOU",
	},
	sigilyph: {
		randomBattleMoves: ["cosmicpower", "roost", "storedpower", "psychoshift"],
		randomDoubleBattleMoves: ["psyshock", "heatwave", "icebeam", "airslash", "energyball", "shadowball", "tailwind", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	yamask: {
		randomBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "haze", "rest", "sleeptalk", "painsplit"],
		tier: "LC",
	},
	yamaskkonor: {
		tier: "LC",
	},
	cofagrigus: {
		randomBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "haze", "painsplit"],
		randomDoubleBattleMoves: ["nastyplot", "trickroom", "shadowball", "hiddenpowerfighting", "willowisp", "protect", "painsplit"],
		tier: "NUBL",
		doublesTier: "DUU",
	},
	tirtouga: {
		randomBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "stealthrock"],
		tier: "LC",
	},
	carracosta: {
		randomBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "stealthrock"],
		randomDoubleBattleMoves: ["shellsmash", "aquajet", "liquidation", "stoneedge", "earthquake", "protect", "wideguard", "rockslide"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	archen: {
		randomBattleMoves: ["stoneedge", "rockslide", "earthquake", "uturn", "pluck", "headsmash"],
		tier: "LC",
	},
	archeops: {
		randomBattleMoves: ["headsmash", "acrobatics", "stoneedge", "earthquake", "aquatail", "uturn", "tailwind"],
		randomDoubleBattleMoves: ["stoneedge", "rockslide", "earthquake", "uturn", "acrobatics", "tailwind", "taunt", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	trubbish: {
		randomBattleMoves: ["clearsmog", "toxicspikes", "spikes", "gunkshot", "painsplit", "toxic"],
		tier: "LC",
	},
	garbodor: {
		randomBattleMoves: ["spikes", "toxicspikes", "gunkshot", "haze", "painsplit", "toxic", "drainpunch"],
		randomDoubleBattleMoves: ["protect", "painsplit", "gunkshot", "seedbomb", "drainpunch", "explosion", "rockblast"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	zorua: {
		randomBattleMoves: ["suckerpunch", "extrasensory", "darkpulse", "hiddenpowerfighting", "uturn", "knockoff"],
		tier: "LC",
	},
	zoroark: {
		randomBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "trick", "sludgebomb"],
		randomDoubleBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "protect"],

		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	zoroarkmega: {
		randomBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "trick", "sludgebomb"],
		randomDoubleBattleMoves: ["suckerpunch", "darkpulse", "focusblast", "flamethrower", "uturn", "nastyplot", "knockoff", "protect"],

		requiredItem: "Illusory Chain",
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	minccino: {
		randomBattleMoves: ["return", "tailslap", "wakeupslap", "uturn", "aquatail"],
		tier: "LC",
	},
	cinccino: {
		randomBattleMoves: ["tailslap", "bulletseed", "rockblast", "knockoff", "uturn"],
		randomDoubleBattleMoves: ["tailslap", "aquatail", "uturn", "knockoff", "bulletseed", "rockblast", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	gothita: {
		randomBattleMoves: ["psychic", "thunderbolt", "hiddenpowerfighting", "shadowball", "substitute", "calmmind", "trick", "grassknot"],
		tier: "LC Uber",
	},
	gothorita: {
		randomBattleMoves: ["psychic", "psyshock", "thunderbolt", "hiddenpowerfighting", "shadowball", "substitute", "calmmind", "trick", "grassknot"],

		tier: "NFE",
	},
	gothitelle: {
		randomBattleMoves: ["psychic", "thunderbolt", "shadowball", "hiddenpowerfire", "hiddenpowerfighting", "substitute", "calmmind", "trick", "psyshock"],
		randomDoubleBattleMoves: ["psychic", "thunderbolt", "shadowball", "hiddenpowerfighting", "reflect", "lightscreen", "psyshock", "energyball", "trickroom", "taunt", "healpulse", "protect"],
		tier: "(PU)",
		doublesTier: "DOU",
	},
	solosis: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "hiddenpowerfighting", "shadowball", "trickroom", "psyshock"],
		tier: "LC",
	},
	duosion: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "hiddenpowerfighting", "shadowball", "trickroom", "psyshock"],
		tier: "NFE",
	},
	reuniclus: {
		randomBattleMoves: ["calmmind", "recover", "psychic", "focusblast", "shadowball", "trickroom", "psyshock"],
		randomDoubleBattleMoves: ["energyball", "helpinghand", "psychic", "focusblast", "shadowball", "trickroom", "psyshock", "hiddenpowerfire", "protect"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	ducklett: {
		randomBattleMoves: ["scald", "airslash", "roost", "hurricane", "icebeam", "hiddenpowergrass", "bravebird", "defog", "liquidation", "aquajet"],
		tier: "LC",
	},
	swanna: {
		randomBattleMoves: ["bravebird", "roost", "hurricane", "icebeam", "raindance", "defog", "scald"],
		randomDoubleBattleMoves: ["airslash", "roost", "hurricane", "surf", "icebeam", "raindance", "tailwind", "scald", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	vanillite: {
		randomBattleMoves: ["icebeam", "explosion", "hiddenpowerelectric", "hiddenpowerfighting", "autotomize"],
		tier: "LC",
	},
	vanillish: {
		randomBattleMoves: ["icebeam", "explosion", "hiddenpowerelectric", "hiddenpowerfighting", "autotomize"],
		tier: "NFE",
	},
	vanilluxe: {
		randomBattleMoves: ["blizzard", "explosion", "hiddenpowerground", "flashcannon", "autotomize", "freezedry"],
		randomDoubleBattleMoves: ["blizzard", "taunt", "hiddenpowerground", "flashcannon", "autotomize", "protect", "freezedry"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	deerling: {
		randomBattleMoves: ["agility", "seedbomb", "jumpkick", "synthesis", "return", "thunderwave"],
		tier: "LC",
	},
	sawsbuck: {
		randomBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute"],
		randomDoubleBattleMoves: ["swordsdance", "hornleech", "jumpkick", "return", "substitute", "synthesis", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	emolga: {
		randomBattleMoves: ["encore", "chargebeam", "uturn", "thunderbolt", "airslash", "roost"],
		randomDoubleBattleMoves: ["helpinghand", "tailwind", "encore", "substitute", "thunderbolt", "airslash", "roost", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	karrablast: {
		randomBattleMoves: ["swordsdance", "megahorn", "return", "substitute"],

		tier: "LC",
	},
	escavalier: {
		randomBattleMoves: ["megahorn", "pursuit", "ironhead", "knockoff", "swordsdance", "drillrun"],
		randomDoubleBattleMoves: ["megahorn", "protect", "ironhead", "knockoff", "swordsdance", "drillrun"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	foongus: {
		randomBattleMoves: ["spore", "stunspore", "gigadrain", "clearsmog", "hiddenpowerfire", "synthesis", "sludgebomb"],
		tier: "LC",
	},
	amoonguss: {
		randomBattleMoves: ["spore", "stunspore", "gigadrain", "clearsmog", "hiddenpowerfire", "synthesis", "sludgebomb", "foulplay"],
		randomDoubleBattleMoves: ["spore", "stunspore", "gigadrain", "ragepowder", "hiddenpowerfire", "synthesis", "sludgebomb", "protect"],
		tier: "UU",
		doublesTier: "DOU",
	},
	frillish: {
		randomBattleMoves: ["scald", "willowisp", "recover", "toxic", "shadowball", "taunt"],
		tier: "LC",
	},
	jellicent: {
		randomBattleMoves: ["scald", "willowisp", "recover", "toxic", "shadowball", "icebeam", "taunt"],
		randomDoubleBattleMoves: ["scald", "willowisp", "recover", "trickroom", "shadowball", "icebeam", "waterspout", "icywind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	joltik: {
		randomBattleMoves: ["thunderbolt", "bugbuzz", "hiddenpowerice", "gigadrain", "voltswitch"],
		tier: "LC",
	},
	galvantula: {
		randomBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb"],
		randomDoubleBattleMoves: ["thunder", "hiddenpowerice", "gigadrain", "bugbuzz", "voltswitch", "stickyweb", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	ferroseed: {
		randomBattleMoves: ["spikes", "stealthrock", "leechseed", "seedbomb", "protect", "thunderwave", "gyroball"],
		tier: "PU",
		doublesTier: "LC",
	},
	ferrothorn: {
		randomBattleMoves: ["spikes", "stealthrock", "leechseed", "powerwhip", "protect", "knockoff", "gyroball"],
		randomDoubleBattleMoves: ["gyroball", "stealthrock", "leechseed", "powerwhip", "knockoff", "protect"],
		tier: "OU",
		doublesTier: "DOU",
	},
	klink: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		tier: "LC",
	},
	klang: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		tier: "NFE",
	},
	klinklang: {
		randomBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "substitute"],
		randomDoubleBattleMoves: ["shiftgear", "return", "geargrind", "wildcharge", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	tynamo: {
		randomBattleMoves: ["spark", "chargebeam", "thunderwave", "pound"],
		tier: "LC",
	},
	eelektrik: {
		randomBattleMoves: ["uturn", "voltswitch", "acidspray", "wildcharge", "thunderbolt", "gigadrain", "aquatail", "coil"],
		tier: "NFE",
	},
	eelektross: {
		randomBattleMoves: ["thunderbolt", "flamethrower", "uturn", "voltswitch", "acidspray", "gigadrain", "knockoff", "superpower", "aquatail"],
		randomDoubleBattleMoves: ["thunderbolt", "flamethrower", "uturn", "voltswitch", "knockoff", "gigadrain", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	elgyem: {
		randomBattleMoves: ["nastyplot", "psychic", "thunderbolt", "hiddenpowerfighting", "recover", "trickroom", "signalbeam"],
		tier: "LC",
	},
	beheeyem: {
		randomBattleMoves: ["nastyplot", "psychic", "psyshock", "thunderbolt", "hiddenpowerfighting", "trick", "trickroom", "signalbeam"],
		randomDoubleBattleMoves: ["nastyplot", "psychic", "thunderbolt", "hiddenpowerfighting", "recover", "trick", "trickroom", "signalbeam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	litwick: {
		randomBattleMoves: ["shadowball", "energyball", "fireblast", "hiddenpowerground", "trickroom", "substitute", "painsplit"],
		tier: "LC",
	},
	lampent: {
		randomBattleMoves: ["calmmind", "shadowball", "energyball", "fireblast", "hiddenpowerground", "substitute", "painsplit"],
		tier: "NFE",
	},
	chandelure: {
		randomBattleMoves: ["calmmind", "shadowball", "energyball", "fireblast", "hiddenpowerground", "trick", "substitute", "painsplit"],
		randomDoubleBattleMoves: ["shadowball", "energyball", "overheat", "heatwave", "hiddenpowerice", "trick", "protect"],
		tier: "UU",
		doublesTier: "DUU",
	},
	axew: {
		randomBattleMoves: ["dragondance", "outrage", "dragonclaw", "swordsdance", "aquatail", "superpower", "poisonjab", "taunt", "substitute"],

		tier: "LC",
	},
	fraxure: {
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "dragonclaw", "aquatail", "superpower", "poisonjab", "taunt", "substitute"],
		tier: "NFE",
	},
	haxorus: {
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "earthquake", "poisonjab", "taunt"],
		randomDoubleBattleMoves: ["dragondance", "swordsdance", "protect", "dragonclaw", "earthquake", "poisonjab", "taunt"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	haxorusmega: {//CHANGE
		randomBattleMoves: ["dragondance", "swordsdance", "outrage", "earthquake", "poisonjab", "taunt"],
		randomDoubleBattleMoves: ["dragondance", "swordsdance", "protect", "dragonclaw", "earthquake", "poisonjab", "taunt"],
		requiredItem: "Haxorite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	cubchoo: {
		randomBattleMoves: ["icebeam", "surf", "hiddenpowergrass", "superpower"],
		tier: "LC",
	},
	beartic: {
		randomBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet"],
		randomDoubleBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	bearticmega: { //CHANGE
		randomBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet"],
		randomDoubleBattleMoves: ["iciclecrash", "superpower", "nightslash", "stoneedge", "swordsdance", "aquajet", "protect"],
		requiredItem: "Bearticite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	cryogonal: {
		randomBattleMoves: ["icebeam", "recover", "toxic", "rapidspin", "haze", "freezedry", "hiddenpowerground"],
		randomDoubleBattleMoves: ["icebeam", "recover", "icywind", "protect", "reflect", "freezedry", "hiddenpowerground"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	shelmet: {
		randomBattleMoves: ["spikes", "yawn", "substitute", "acidarmor", "recover", "toxic", "bugbuzz", "infestation", "toxicspikes"],

		tier: "LC",
	},
	accelgor: {
		randomBattleMoves: ["spikes", "yawn", "bugbuzz", "focusblast", "gigadrain", "hiddenpowerrock", "encore", "toxicspikes"],
		randomDoubleBattleMoves: ["protect", "yawn", "bugbuzz", "focusblast", "gigadrain", "hiddenpowerrock", "encore", "sludgebomb"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	stunfisk: {
		randomBattleMoves: ["discharge", "earthpower", "scald", "toxic", "rest", "sleeptalk", "stealthrock"],
		randomDoubleBattleMoves: ["discharge", "earthpower", "scald", "electroweb", "protect", "stealthrock"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mienfoo: {
		randomBattleMoves: ["uturn", "drainpunch", "stoneedge", "swordsdance", "highjumpkick", "fakeout", "knockoff"],
		tier: "LC",
	},
	mienshao: {
		randomBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "poisonjab", "swordsdance", "knockoff"],
		randomDoubleBattleMoves: ["uturn", "fakeout", "highjumpkick", "stoneedge", "drainpunch", "swordsdance", "wideguard", "knockoff", "feint", "protect"],
		tier: "RUBL",
		doublesTier: "DUU",
	},
	druddigon: {
		randomBattleMoves: ["outrage", "earthquake", "suckerpunch", "dragonclaw", "dragontail", "substitute", "glare", "stealthrock", "firepunch", "gunkshot"],
		randomDoubleBattleMoves: ["superpower", "earthquake", "suckerpunch", "dragonclaw", "glare", "protect", "firepunch", "thunderpunch"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	druddigonmega: { //CHANGE
		randomBattleMoves: ["outrage", "earthquake", "suckerpunch", "dragonclaw", "dragontail", "substitute", "glare", "stealthrock", "firepunch", "gunkshot"],
		randomDoubleBattleMoves: ["superpower", "earthquake", "suckerpunch", "dragonclaw", "glare", "protect", "firepunch", "thunderpunch"],
		requiredItem: "Druddite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	golett: {
		randomBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stealthrock", "rockpolish"],
		tier: "LC",
	},
	golurk: {
		randomBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stealthrock", "rockpolish"],
		randomDoubleBattleMoves: ["earthquake", "shadowpunch", "dynamicpunch", "icepunch", "stoneedge", "protect", "rockpolish"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	pawniard: {
		randomBattleMoves: ["swordsdance", "substitute", "suckerpunch", "ironhead", "brickbreak", "knockoff"],
		tier: "LC",
	},
	bisharp: {
		randomBattleMoves: ["swordsdance", "knockoff", "ironhead", "suckerpunch", "lowkick"],
		randomDoubleBattleMoves: ["swordsdance", "substitute", "suckerpunch", "ironhead", "brickbreak", "knockoff", "protect"],
		tier: "UU",
		doublesTier: "DUU",
	},
	bouffalant: {
		randomBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower"],
		randomDoubleBattleMoves: ["headcharge", "earthquake", "stoneedge", "megahorn", "swordsdance", "superpower", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	rufflet: {
		randomBattleMoves: ["bravebird", "rockslide", "return", "uturn", "substitute", "bulkup", "roost"],
		tier: "LC",
	},
	braviary: {
		randomBattleMoves: ["bravebird", "superpower", "return", "uturn", "substitute", "rockslide", "bulkup", "roost"],
		randomDoubleBattleMoves: ["bravebird", "superpower", "return", "uturn", "tailwind", "rockslide", "bulkup", "roost", "skydrop", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	vullaby: {
		randomBattleMoves: ["knockoff", "roost", "taunt", "whirlwind", "toxic", "defog", "uturn", "bravebird"],
		tier: "LC",
	},
	mandibuzz: {
		randomBattleMoves: ["foulplay", "bravebird", "roost", "taunt", "toxic", "uturn", "defog"],
		randomDoubleBattleMoves: ["knockoff", "roost", "taunt", "tailwind", "snarl", "uturn", "bravebird", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	heatmor: {
		randomBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "knockoff"],
		randomDoubleBattleMoves: ["fireblast", "suckerpunch", "focusblast", "gigadrain", "heatwave", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	durant: {
		randomBattleMoves: ["honeclaws", "ironhead", "xscissor", "stoneedge", "superpower"],
		randomDoubleBattleMoves: ["honeclaws", "ironhead", "xscissor", "rockslide", "protect", "superpower"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	deino: {
		randomBattleMoves: ["outrage", "crunch", "firefang", "dragontail", "thunderwave", "superpower"],
		tier: "LC",
	},
	zweilous: {
		randomBattleMoves: ["outrage", "crunch", "headsmash", "dragontail", "superpower", "rest", "sleeptalk"],
		tier: "NFE",
	},
	hydreigon: {
		randomBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower"],
		randomDoubleBattleMoves: ["uturn", "dracometeor", "dragonpulse", "earthpower", "fireblast", "darkpulse", "roost", "flashcannon", "superpower", "tailwind", "protect"],

		tier: "UU",
		doublesTier: "DUU",
	},
	larvesta: {
		randomBattleMoves: ["flareblitz", "uturn", "wildcharge", "zenheadbutt", "morningsun", "willowisp"],
		tier: "LC",
	},
	volcarona: {
		randomBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "hiddenpowerground"],
		randomDoubleBattleMoves: ["quiverdance", "fierydance", "fireblast", "bugbuzz", "roost", "gigadrain", "hiddenpowerice", "heatwave", "willowisp", "ragepowder", "tailwind", "protect"],

		tier: "OU",
		doublesTier: "DOU",
	},
	cobalion: {
		randomBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "voltswitch", "hiddenpowerice", "taunt", "stealthrock"],
		randomDoubleBattleMoves: ["closecombat", "ironhead", "swordsdance", "substitute", "stoneedge", "thunderwave", "protect"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	terrakion: {
		randomBattleMoves: ["swordsdance", "closecombat", "stoneedge", "earthquake", "stealthrock"],
		randomDoubleBattleMoves: ["stoneedge", "closecombat", "substitute", "rockslide", "earthquake", "taunt", "protect"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	virizion: {
		randomBattleMoves: ["swordsdance", "closecombat", "leafblade", "stoneedge", "calmmind", "focusblast", "gigadrain", "hiddenpowerice", "substitute"],
		randomDoubleBattleMoves: ["taunt", "closecombat", "stoneedge", "leafblade", "swordsdance", "synthesis", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	tornadus: {
		randomBattleMoves: ["bulkup", "acrobatics", "hurricane", "heatwave", "superpower", "uturn", "defog", "tailwind"],
		randomDoubleBattleMoves: ["hurricane", "airslash", "uturn", "superpower", "focusblast", "taunt", "substitute", "heatwave", "tailwind", "protect", "skydrop"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	tornadustherian: {
		randomBattleMoves: ["hurricane", "heatwave", "knockoff", "superpower", "uturn", "taunt"],
		randomDoubleBattleMoves: ["hurricane", "airslash", "focusblast", "uturn", "heatwave", "skydrop", "tailwind", "taunt", "protect"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	thundurus: {
		randomBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt"],
		randomDoubleBattleMoves: ["thunderwave", "nastyplot", "thunderbolt", "hiddenpowerice", "hiddenpowerflying", "focusblast", "substitute", "knockoff", "taunt", "protect"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	thundurustherian: {
		randomBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch"],
		randomDoubleBattleMoves: ["nastyplot", "thunderbolt", "hiddenpowerflying", "hiddenpowerice", "focusblast", "voltswitch", "protect"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	reshiram: {
		randomBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "toxic", "flamecharge", "stoneedge", "roost"],
		randomDoubleBattleMoves: ["blueflare", "dracometeor", "dragonpulse", "heatwave", "flamecharge", "roost", "protect", "tailwind"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	zekrom: {
		randomBattleMoves: ["boltstrike", "outrage", "dragonclaw", "dracometeor", "voltswitch", "honeclaws", "substitute", "roost"],
		randomDoubleBattleMoves: ["voltswitch", "protect", "dragonclaw", "boltstrike", "honeclaws", "substitute", "dracometeor", "fusionbolt", "roost", "tailwind"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	landorus: {
		randomBattleMoves: ["calmmind", "rockpolish", "earthpower", "focusblast", "psychic", "sludgewave", "stealthrock", "knockoff", "rockslide"],
		randomDoubleBattleMoves: ["earthpower", "focusblast", "hiddenpowerice", "psychic", "sludgebomb", "rockslide", "protect"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	landorustherian: {
		randomBattleMoves: ["swordsdance", "rockpolish", "earthquake", "stoneedge", "uturn", "superpower", "stealthrock", "fly"],
		randomDoubleBattleMoves: ["rockslide", "earthquake", "stoneedge", "uturn", "superpower", "knockoff", "protect"],
		tier: "OU",
		doublesTier: "DOU",
	},
	kyurem: {
		randomBattleMoves: ["dracometeor", "icebeam", "earthpower", "outrage", "substitute", "focusblast", "roost"],
		randomDoubleBattleMoves: ["substitute", "icebeam", "dracometeor", "dragonpulse", "focusblast", "glaciate", "earthpower", "roost", "protect"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	kyuremblack: {
		randomBattleMoves: ["outrage", "fusionbolt", "icebeam", "roost", "substitute", "earthpower", "dragonclaw"],
		randomDoubleBattleMoves: ["protect", "fusionbolt", "icebeam", "roost", "substitute", "honeclaws", "earthpower", "dragonclaw"],
		tier: "OU",
		doublesTier: "DOU",
	},
	kyuremwhite: {
		randomBattleMoves: ["dracometeor", "icebeam", "fusionflare", "earthpower", "focusblast", "dragonpulse", "substitute", "roost", "toxic"],
		randomDoubleBattleMoves: ["dracometeor", "dragonpulse", "icebeam", "fusionflare", "earthpower", "focusblast", "roost", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	keldeo: {
		randomBattleMoves: ["hydropump", "secretsword", "calmmind", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "scald", "icywind"],
		randomDoubleBattleMoves: ["hydropump", "secretsword", "protect", "hiddenpowerflying", "hiddenpowerelectric", "substitute", "surf", "icywind", "taunt"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	keldeoresolute: {
		requiredMove: "Secret Sword",
	},
	meloetta: {
		randomBattleMoves: ["uturn", "calmmind", "psyshock", "hypervoice", "shadowball", "focusblast"],
		randomDoubleBattleMoves: ["calmmind", "psyshock", "thunderbolt", "hypervoice", "shadowball", "focusblast", "protect"],
		tier: "RUBL",
		doublesTier: "(DUU)",
	},
	meloettapirouette: {
		randomBattleMoves: ["relicsong", "closecombat", "knockoff", "return"],
		randomDoubleBattleMoves: ["relicsong", "closecombat", "knockoff", "return", "protect"],
		requiredMove: "Relic Song",
		battleOnly: true,
	},
	genesect: {
		randomBattleMoves: ["technoblast", "uturn", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick"],
		randomDoubleBattleMoves: ["uturn", "bugbuzz", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick", "protect"],
		tier: "Uber",
		doublesTier: "DOU",
	},
	genesectmega: {//CHANGE
		randomBattleMoves: ["technoblast", "uturn", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick"],
		randomDoubleBattleMoves: ["uturn", "bugbuzz", "icebeam", "flamethrower", "thunderbolt", "ironhead", "shiftgear", "extremespeed", "blazekick", "protect"],
		requiredItem: "Genesectite",
		tier: "Uber",
		doublesTier: "DOU",
	},
	genesectburn: {
		requiredItem: "Burn Drive",
	},
	genesectchill: {
		requiredItem: "Chill Drive",
	},
	genesectdouse: {
		requiredItem: "Douse Drive",
	},
	genesectshock: {
		requiredItem: "Shock Drive",
	},
	chespin: {
		randomBattleMoves: ["curse", "gyroball", "seedbomb", "stoneedge", "spikes", "synthesis"],
		tier: "LC",
	},
	quilladin: {
		randomBattleMoves: ["curse", "gyroball", "seedbomb", "stoneedge", "spikes", "synthesis"],
		tier: "NFE",
	},
	chesnaught: {
		randomBattleMoves: ["leechseed", "synthesis", "spikes", "drainpunch", "spikyshield", "woodhammer"],
		randomDoubleBattleMoves: ["leechseed", "synthesis", "hammerarm", "spikyshield", "stoneedge", "woodhammer", "rockslide"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	fennekin: {
		randomBattleMoves: ["fireblast", "psychic", "psyshock", "grassknot", "willowisp", "hypnosis", "hiddenpowerrock", "flamecharge"],
		tier: "LC",
	},
	braixen: {
		randomBattleMoves: ["fireblast", "flamethrower", "psychic", "psyshock", "grassknot", "willowisp", "hiddenpowerrock"],
		tier: "NFE",
	},
	delphox: {
		randomBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball"],
		randomDoubleBattleMoves: ["calmmind", "fireblast", "psyshock", "grassknot", "switcheroo", "shadowball", "heatwave", "dazzlinggleam", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	froakie: {
		randomBattleMoves: ["quickattack", "hydropump", "icebeam", "waterfall", "toxicspikes", "poweruppunch", "uturn"],
		tier: "LC",
	},
	frogadier: {
		randomBattleMoves: ["hydropump", "surf", "icebeam", "uturn", "taunt", "toxicspikes"],
		tier: "NFE",
	},
	greninja: {
		randomBattleMoves: ["hydropump", "icebeam", "darkpulse", "gunkshot", "uturn", "spikes", "toxicspikes", "taunt"],
		randomDoubleBattleMoves: ["hydropump", "uturn", "surf", "icebeam", "matblock", "taunt", "darkpulse", "protect"],

		tier: "OU",
		doublesTier: "DUU",
	},
	greninjaash: {
		randomBattleMoves: ["hydropump", "icebeam", "darkpulse", "watershuriken", "uturn"],
		gen: 7,
		requiredAbility: "Battle Bond",
		battleOnly: true,
		tier: "OU",
		doublesTier: "DUU",
	},
	bunnelby: {
		randomBattleMoves: ["agility", "earthquake", "return", "quickattack", "uturn", "stoneedge", "spikes", "bounce"],
		tier: "LC",
	},
	diggersby: {
		randomBattleMoves: ["earthquake", "return", "wildcharge", "uturn", "swordsdance", "quickattack", "knockoff", "agility"],
		randomDoubleBattleMoves: ["earthquake", "uturn", "return", "wildcharge", "protect", "quickattack"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	fletchling: {
		randomBattleMoves: ["roost", "swordsdance", "uturn", "return", "overheat", "flamecharge"],
		tier: "LC",
	},
	fletchinder: {
		randomBattleMoves: ["roost", "swordsdance", "uturn", "return", "overheat", "flamecharge", "acrobatics"],
		tier: "NFE",
	},
	talonflame: {
		randomBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp"],
		randomDoubleBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "tailwind", "taunt", "protect"],
		tier: "RUBL",
		doublesTier: "DUU",
	},
	talonflamemega: {
		randomBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp"],
		randomDoubleBattleMoves: ["bravebird", "flareblitz", "roost", "swordsdance", "uturn", "willowisp", "tailwind", "taunt", "protect"],
		requiredItem: "Talonite",
		tier: "RUBL",
		doublesTier: "DUU",
	},
	scatterbug: {
		randomBattleMoves: ["pound", "stringshot", "stunspore", "bugbite", "poisonpowder"],
		tier: "LC",
	},
	spewpa: {
		randomBattleMoves: ["pound", "stringshot", "stunspore", "bugbite", "poisonpowder"],
		tier: "NFE",
	},
	vivillon: {
		randomBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "substitute"],
		randomDoubleBattleMoves: ["sleeppowder", "quiverdance", "hurricane", "bugbuzz", "roost", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	vivillonfancy: {
	},
	vivillonpokeball: {
	},
	litleo: {
		randomBattleMoves: ["hypervoice", "fireblast", "willowisp", "bulldoze", "yawn"],
		tier: "LC",
	},
	pyroar: {
		randomBattleMoves: ["sunnyday", "fireblast", "hypervoice", "solarbeam", "willowisp", "darkpulse"],
		randomDoubleBattleMoves: ["hypervoice", "fireblast", "willowisp", "protect", "sunnyday", "solarbeam"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	flabebe: {
		randomBattleMoves: ["moonblast", "toxic", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		tier: "LC",
	},
	floette: {
		randomBattleMoves: ["moonblast", "toxic", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		tier: "NFE",
	},
	floetteeternal: {
		randomBattleMoves: ["lightofruin", "psychic", "hiddenpowerfire", "hiddenpowerground", "moonblast"],
		randomDoubleBattleMoves: ["lightofruin", "dazzlinggleam", "wish", "psychic", "aromatherapy", "protect", "calmmind"],
		isUnreleased: true,
		tier: "Unreleased",
	},
	florges: {
		randomBattleMoves: ["calmmind", "moonblast", "synthesis", "aromatherapy", "wish", "toxic", "protect", "defog"],
		randomDoubleBattleMoves: ["moonblast", "dazzlinggleam", "wish", "psychic", "aromatherapy", "protect", "calmmind", "defog"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	skiddo: {
		randomBattleMoves: ["hornleech", "brickbreak", "bulkup", "leechseed", "milkdrink", "rockslide"],
		tier: "LC",
	},
	gogoat: {
		randomBattleMoves: ["bulkup", "hornleech", "earthquake", "rockslide", "substitute", "leechseed", "milkdrink"],
		randomDoubleBattleMoves: ["hornleech", "earthquake", "brickbreak", "bulkup", "leechseed", "milkdrink", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pancham: {
		randomBattleMoves: ["partingshot", "skyuppercut", "crunch", "stoneedge", "bulldoze", "shadowclaw", "bulkup"],
		tier: "LC",
	},
	pangoro: {
		randomBattleMoves: ["knockoff", "superpower", "gunkshot", "icepunch", "partingshot", "drainpunch"],
		randomDoubleBattleMoves: ["partingshot", "hammerarm", "crunch", "circlethrow", "icepunch", "earthquake", "poisonjab", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	pangoromega: { //CHANGE
		randomBattleMoves: ["knockoff", "superpower", "gunkshot", "icepunch", "partingshot", "drainpunch"],
		randomDoubleBattleMoves: ["partingshot", "hammerarm", "crunch", "circlethrow", "icepunch", "earthquake", "poisonjab", "protect"],
		requiredItem: "Pangorite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	furfrou: {
		randomBattleMoves: ["return", "cottonguard", "thunderwave", "substitute", "toxic", "suckerpunch", "uturn", "rest"],
		randomDoubleBattleMoves: ["return", "cottonguard", "uturn", "thunderwave", "suckerpunch", "snarl", "wildcharge", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	espurr: {
		randomBattleMoves: ["fakeout", "yawn", "thunderwave", "psychic", "trick", "darkpulse"],
		tier: "LC",
	},
	meowstic: {
		randomBattleMoves: ["toxic", "yawn", "thunderwave", "psychic", "reflect", "lightscreen", "healbell"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "psychic", "reflect", "lightscreen", "safeguard", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	meowsticmega: {//CHANGE
		randomBattleMoves: ["toxic", "yawn", "thunderwave", "psychic", "reflect", "lightscreen", "healbell"],
		randomDoubleBattleMoves: ["fakeout", "thunderwave", "psychic", "reflect", "lightscreen", "safeguard", "protect"],
		requiredItem: "Meowsticite",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	meowsticf: {
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "shadowball", "energyball", "thunderbolt"],
		randomDoubleBattleMoves: ["psyshock", "darkpulse", "fakeout", "energyball", "signalbeam", "thunderbolt", "protect", "helpinghand"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	meowsticfmega: {//CHANGE
		randomBattleMoves: ["calmmind", "psychic", "psyshock", "shadowball", "energyball", "thunderbolt"],
		randomDoubleBattleMoves: ["psyshock", "darkpulse", "fakeout", "energyball", "signalbeam", "thunderbolt", "protect", "helpinghand"],
		requiredItem: "MeowsticiteF",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	honedge: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "rockslide", "aerialace", "destinybond"],
		tier: "LC",
	},
	doublade: {
		randomBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword"],
		randomDoubleBattleMoves: ["swordsdance", "shadowclaw", "shadowsneak", "ironhead", "sacredsword", "rockslide", "protect"],
		tier: "UU",
		doublesTier: "NFE",
	},
	aegislash: {
		randomBattleMoves: ["kingsshield", "swordsdance", "shadowclaw", "sacredsword", "ironhead", "shadowsneak", "hiddenpowerice", "shadowball", "flashcannon"],
		randomDoubleBattleMoves: ["kingsshield", "swordsdance", "shadowclaw", "sacredsword", "ironhead", "shadowsneak", "wideguard", "hiddenpowerice", "shadowball", "flashcannon"],
		tier: "Uber",
		doublesTier: "DOU",
	},
	aegislashblade: {
		requiredAbility: 'Stance Change',
		battleOnly: true,
	},
	spritzee: {
		randomBattleMoves: ["calmmind", "drainingkiss", "moonblast", "psychic", "aromatherapy", "wish", "trickroom", "thunderbolt", "nastyplot"],
		tier: "LC",
	},
	aromatisse: {
		randomBattleMoves: ["wish", "protect", "moonblast", "aromatherapy", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["moonblast", "aromatherapy", "wish", "trickroom", "thunderbolt", "protect", "healpulse"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	swirlix: {
		randomBattleMoves: ["calmmind", "drainingkiss", "dazzlinggleam", "surf", "psychic", "flamethrower", "bellydrum", "thunderbolt", "return", "thief", "cottonguard"],
		tier: "LC Uber",
	},
	slurpuff: {
		randomBattleMoves: ["bellydrum", "playrough", "return", "drainpunch"],
		randomDoubleBattleMoves: ["substitute", "bellydrum", "playrough", "return", "drainpunch", "dazzlinggleam", "surf", "psychic", "flamethrower", "protect"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	inkay: {
		randomBattleMoves: ["topsyturvy", "switcheroo", "superpower", "psychocut", "flamethrower", "rockslide", "trickroom"],
		tier: "LC",
	},
	malamar: {
		randomBattleMoves: ["superpower", "knockoff", "psychocut", "rest", "sleeptalk", "happyhour"],
		randomDoubleBattleMoves: ["superpower", "psychocut", "rockslide", "trickroom", "knockoff", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	binacle: {
		randomBattleMoves: ["shellsmash", "liquidation", "stoneedge", "earthquake", "crosschop", "poisonjab", "xscissor", "rockslide"],
		tier: "LC",
	},
	barbaracle: {
		randomBattleMoves: ["shellsmash", "stoneedge", "liquidation", "earthquake", "crosschop", "stealthrock"],
		randomDoubleBattleMoves: ["shellsmash", "liquidation", "earthquake", "crosschop", "rockslide", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	skrelp: {
		randomBattleMoves: ["scald", "sludgebomb", "thunderbolt", "shadowball", "toxicspikes", "hydropump"],
		tier: "LC",
	},
	dragalge: {
		randomBattleMoves: ["dracometeor", "sludgewave", "focusblast", "scald", "hiddenpowerfire", "toxicspikes", "dragonpulse"],
		randomDoubleBattleMoves: ["dracometeor", "sludgebomb", "focusblast", "scald", "hiddenpowerfire", "protect", "dragonpulse"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	clauncher: {
		randomBattleMoves: ["waterpulse", "flashcannon", "uturn", "crabhammer", "aquajet", "sludgebomb"],
		tier: "LC",
	},
	clawitzer: {
		randomBattleMoves: ["scald", "waterpulse", "darkpulse", "aurasphere", "icebeam", "uturn"],
		randomDoubleBattleMoves: ["waterpulse", "icebeam", "uturn", "darkpulse", "aurasphere", "muddywater", "helpinghand", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	helioptile: {
		randomBattleMoves: ["surf", "voltswitch", "hiddenpowerice", "raindance", "thunder", "darkpulse", "thunderbolt"],
		tier: "LC",
	},
	heliolisk: {
		randomBattleMoves: ["raindance", "hypervoice", "surf", "darkpulse", "hiddenpowerice", "voltswitch", "thunderbolt"],
		randomDoubleBattleMoves: ["surf", "voltswitch", "hiddenpowerice", "raindance", "thunder", "darkpulse", "thunderbolt", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	tyrunt: {
		randomBattleMoves: ["stealthrock", "dragondance", "stoneedge", "dragonclaw", "earthquake", "icefang", "firefang"],
		tier: "LC",
	},
	tyrantrum: {
		randomBattleMoves: ["stealthrock", "dragondance", "dragonclaw", "earthquake", "superpower", "outrage", "headsmash"],
		randomDoubleBattleMoves: ["rockslide", "dragondance", "headsmash", "dragonclaw", "earthquake", "icefang", "firefang", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	amaura: {
		randomBattleMoves: ["hypervoice", "ancientpower", "thunderbolt", "darkpulse", "thunderwave", "dragontail", "flashcannon"],
		tier: "LC",
	},
	aurorus: {
		randomBattleMoves: ["ancientpower", "blizzard", "thunderwave", "earthpower", "freezedry", "hypervoice", "stealthrock"],
		randomDoubleBattleMoves: ["hypervoice", "ancientpower", "thunderwave", "flashcannon", "freezedry", "icywind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	sylveon: {
		randomBattleMoves: ["hypervoice", "calmmind", "wish", "protect", "psyshock", "shadowball"],
		randomDoubleBattleMoves: ["hypervoice", "calmmind", "wish", "protect", "psyshock", "helpinghand", "shadowball", "hiddenpowerground"],

		tier: "UU",
		doublesTier: "DUU",
	},
	hawlucha: {
		randomBattleMoves: ["substitute", "swordsdance", "highjumpkick", "acrobatics", "roost", "stoneedge"],
		randomDoubleBattleMoves: ["swordsdance", "highjumpkick", "uturn", "stoneedge", "skydrop", "encore", "protect"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	dedenne: {
		randomBattleMoves: ["substitute", "recycle", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "toxic"],
		randomDoubleBattleMoves: ["voltswitch", "thunderbolt", "nuzzle", "grassknot", "hiddenpowerice", "uturn", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	carbink: {
		randomBattleMoves: ["stealthrock", "lightscreen", "reflect", "explosion", "powergem", "moonblast"],
		randomDoubleBattleMoves: ["trickroom", "lightscreen", "reflect", "explosion", "powergem", "moonblast", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	goomy: {
		randomBattleMoves: ["sludgebomb", "thunderbolt", "toxic", "protect", "infestation"],
		tier: "LC",
	},
	sliggoo: {
		randomBattleMoves: ["sludgebomb", "thunderbolt", "toxic", "protect", "infestation", "icebeam"],
		tier: "NFE",
	},
	goodra: {
		randomBattleMoves: ["dracometeor", "dragonpulse", "fireblast", "sludgebomb", "thunderbolt", "earthquake", "dragontail"],
		randomDoubleBattleMoves: ["thunderbolt", "icebeam", "dragonpulse", "fireblast", "muddywater", "dracometeor", "focusblast", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	klefki: {
		randomBattleMoves: ["reflect", "lightscreen", "spikes", "magnetrise", "playrough", "thunderwave", "foulplay", "toxic"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "safeguard", "playrough", "substitute", "thunderwave", "protect", "flashcannon", "dazzlinggleam"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	klefkimega: { //CHANGE
		randomBattleMoves: ["reflect", "lightscreen", "spikes", "magnetrise", "playrough", "thunderwave", "foulplay", "toxic"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "safeguard", "playrough", "substitute", "thunderwave", "protect", "flashcannon", "dazzlinggleam"],
		requiredItem: "Klefkinite",
		tier: "UU",
		doublesTier: "(DUU)",
	},
	phantump: {
		randomBattleMoves: ["hornleech", "leechseed", "phantomforce", "substitute", "willowisp", "rest"],
		tier: "LC",
	},
	trevenant: {
		randomBattleMoves: ["hornleech", "shadowclaw", "leechseed", "willowisp", "rest", "substitute", "phantomforce"],
		randomDoubleBattleMoves: ["hornleech", "woodhammer", "leechseed", "shadowclaw", "willowisp", "trickroom", "earthquake", "rockslide", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pumpkaboo: {
		randomBattleMoves: ["willowisp", "shadowsneak", "destinybond", "synthesis", "seedbomb", "leechseed"],
		tier: "LC",
	},
	pumpkaboosmall: {
		randomBattleMoves: ["willowisp", "shadowsneak", "destinybond", "synthesis", "seedbomb"],
		tier: "LC",
	},
	pumpkaboolarge: {
		randomBattleMoves: ["willowisp", "shadowsneak", "leechseed", "synthesis", "seedbomb"],
		tier: "LC",
	},
	pumpkaboosuper: {
		randomBattleMoves: ["willowisp", "shadowsneak", "leechseed", "synthesis", "seedbomb"],
		tier: "LC",
	},
	gourgeist: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsmall: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gourgeistlarge: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect", "trickroom"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gourgeistsuper: {
		randomBattleMoves: ["willowisp", "seedbomb", "leechseed", "shadowsneak", "substitute", "synthesis"],
		randomDoubleBattleMoves: ["willowisp", "shadowsneak", "painsplit", "seedbomb", "leechseed", "phantomforce", "explosion", "protect", "trickroom"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	bergmite: {
		randomBattleMoves: ["avalanche", "recover", "stoneedge", "curse", "gyroball", "rapidspin"],
		tier: "LC",
	},
	avalugg: {
		randomBattleMoves: ["avalanche", "recover", "toxic", "rapidspin", "roar", "earthquake"],
		randomDoubleBattleMoves: ["avalanche", "recover", "earthquake", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	noibat: {
		randomBattleMoves: ["airslash", "hurricane", "dracometeor", "uturn", "roost", "switcheroo"],
		tier: "LC",
	},
	noivern: {
		randomBattleMoves: ["dracometeor", "hurricane", "flamethrower", "boomburst", "switcheroo", "uturn", "roost", "taunt"],
		randomDoubleBattleMoves: ["airslash", "hurricane", "dragonpulse", "dracometeor", "focusblast", "flamethrower", "uturn", "roost", "boomburst", "switcheroo", "tailwind", "taunt", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	noivernmega: {
		randomBattleMoves: ["dracometeor", "hurricane", "flamethrower", "boomburst", "switcheroo", "uturn", "roost", "taunt"],
		randomDoubleBattleMoves: ["airslash", "hurricane", "dragonpulse", "dracometeor", "focusblast", "flamethrower", "uturn", "roost", "boomburst", "switcheroo", "tailwind", "taunt", "protect"],
		requiredItem: "Noiverite",
		tier: "RU",
		doublesTier: "(DUU)",
	},
	xerneas: {
		randomBattleMoves: ["geomancy", "moonblast", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat"],
		randomDoubleBattleMoves: ["geomancy", "dazzlinggleam", "thunder", "focusblast", "thunderbolt", "hiddenpowerfire", "psyshock", "rockslide", "closecombat", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	yveltal: {
		randomBattleMoves: ["darkpulse", "oblivionwing", "focusblast", "uturn", "foulplay", "suckerpunch", "toxic", "taunt", "roost"],
		randomDoubleBattleMoves: ["darkpulse", "oblivionwing", "taunt", "focusblast", "hurricane", "roost", "suckerpunch", "snarl", "skydrop", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	zygarde: {
		randomBattleMoves: ["dragondance", "thousandarrows", "outrage", "extremespeed", "irontail"],
		randomDoubleBattleMoves: ["dragondance", "thousandarrows", "extremespeed", "rockslide", "coil", "stoneedge", "glare", "protect"],
		tier: "Uber",
		doublesTier: "DOU",
	},
	zygarde10: {
		randomBattleMoves: ["dragondance", "thousandarrows", "outrage", "extremespeed", "irontail", "substitute"],
		randomDoubleBattleMoves: ["dragondance", "thousandarrows", "extremespeed", "irontail", "protect"],
		gen: 7,
		tier: "RU",
		doublesTier: "(DUU)",
	},
	zygardecomplete: {
		gen: 7,
		requiredAbility: "Power Construct",
		battleOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	diancie: {
		randomBattleMoves: ["reflect", "lightscreen", "stealthrock", "diamondstorm", "moonblast", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "reflect", "lightscreen", "safeguard", "substitute", "calmmind", "psychic", "dazzlinggleam", "protect"],
		tier: "RU",
		doublesTier: "DOU",
	},
	dianciemega: {
		randomBattleMoves: ["calmmind", "moonblast", "earthpower", "hiddenpowerfire", "psyshock", "diamondstorm"],
		randomDoubleBattleMoves: ["diamondstorm", "moonblast", "calmmind", "psyshock", "earthpower", "hiddenpowerfire", "dazzlinggleam", "protect"],
		requiredItem: "Diancite",
		tier: "OU",
		doublesTier: "DOU",
	},
	hoopa: {
		randomBattleMoves: ["nastyplot", "psyshock", "shadowball", "focusblast", "trick"],
		randomDoubleBattleMoves: ["hyperspacehole", "shadowball", "focusblast", "protect", "psychic", "trickroom"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	hoopaunbound: {
		randomBattleMoves: ["nastyplot", "substitute", "psychic", "darkpulse", "focusblast", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot", "knockoff", "trick"],
		randomDoubleBattleMoves: ["psychic", "darkpulse", "focusblast", "protect", "hyperspacefury", "zenheadbutt", "icepunch", "drainpunch", "gunkshot"],
		tier: "UUBL",
		doublesTier: "DOU",
	},
	volcanion: {
		randomBattleMoves: ["substitute", "steameruption", "fireblast", "sludgewave", "hiddenpowerice", "earthpower", "superpower"],
		randomDoubleBattleMoves: ["substitute", "steameruption", "heatwave", "sludgebomb", "rockslide", "earthquake", "protect"],
		tier: "UU",
		doublesTier: "DOU",
	},
	rowlet: {
		tier: "LC",
	},
	dartrix: {
		tier: "NFE",
	},
	decidueye: {
		randomBattleMoves: ["spiritshackle", "uturn", "leafblade", "roost", "swordsdance", "suckerpunch"],
		randomDoubleBattleMoves: ["spiritshackle", "leafblade", "bravebird", "protect", "suckerpunch"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	litten: {
		tier: "LC",
	},
	torracat: {
		tier: "NFE",
	},
	incineroar: {
		randomBattleMoves: ["fakeout", "darkestlariat", "flareblitz", "uturn", "earthquake", "knockoff"],
		randomDoubleBattleMoves: ["fakeout", "darkestlariat", "flareblitz", "crosschop", "willowisp", "taunt", "snarl"],
		tier: "NU",
		doublesTier: "DOU",
	},
	popplio: {
		tier: "LC",
	},
	brionne: {
		tier: "NFE",
	},
	primarina: {
		randomBattleMoves: ["hydropump", "moonblast", "scald", "psychic", "hiddenpowerfire"],
		randomDoubleBattleMoves: ["hypervoice", "moonblast", "substitute", "protect", "icebeam"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	pikipek: {
		tier: "LC",
	},
	trumbeak: {
		tier: "NFE",
	},
	toucannon: {
		randomBattleMoves: ["return", "beakblast", "swordsdance", "roost", "brickbreak", "bulletseed"],
		randomDoubleBattleMoves: ["bulletseed", "rockblast", "bravebird", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	yungoos: {
		tier: "LC",
	},
	gumshoos: {
		randomBattleMoves: ["uturn", "return", "crunch", "earthquake", "firepunch"],
		randomDoubleBattleMoves: ["uturn", "return", "superfang", "protect", "crunch"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	gumshoostotem: {
	},
	grubbin: {
		tier: "LC",
	},
	charjabug: {
		tier: "NFE",
	},
	vikavolt: {
		randomBattleMoves: ["agility", "bugbuzz", "thunderbolt", "voltswitch", "energyball", "hiddenpowerice"],
		randomDoubleBattleMoves: ["thunderbolt", "bugbuzz", "stringshot", "protect", "voltswitch", "hiddenpowerice"],
		tier: "NU",
		doublesTier: "DUU",
	},
	vikavolttotem: {
	},
	crabrawler: {
		tier: "LC",
	},
	crabominable: {
		randomBattleMoves: ["icehammer", "closecombat", "earthquake", "stoneedge"],
		randomDoubleBattleMoves: ["icehammer", "closecombat", "stoneedge", "protect", "wideguard", "earthquake"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricorio: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricoriopompom: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	oricoriopau: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	oricoriosensu: {
		randomBattleMoves: ["calmmind", "revelationdance", "hurricane", "toxic", "roost", "uturn"],
		randomDoubleBattleMoves: ["revelationdance", "airslash", "hurricane", "tailwind", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	cutiefly: {
		tier: "LC Uber",
	},
	ribombee: {
		randomBattleMoves: ["quiverdance", "bugbuzz", "moonblast", "hiddenpowerfire", "roost"],
		randomDoubleBattleMoves: ["quiverdance", "pollenpuff", "moonblast", "protect", "batonpass"],
		tier: "NUBL",
		doublesTier: "(DUU)",
	},
	ribombeetotem: {
	},
	rockruff: {
		tier: "LC",
	},
	rockruffdusk: {

		tier: "LC",
	},
	lycanroc: {
		randomBattleMoves: ["swordsdance", "accelerock", "stoneedge", "drillrun", "firefang"],
		randomDoubleBattleMoves: ["accelerock", "stoneedge", "crunch", "firefang", "protect", "taunt"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	lycanrocmidnight: {
		randomBattleMoves: ["stoneedge", "stealthrock", "suckerpunch", "swordsdance", "firepunch"],
		randomDoubleBattleMoves: ["stoneedge", "suckerpunch", "swordsdance", "protect", "taunt"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lycanrocdusk: {
		randomBattleMoves: ["swordsdance", "accelerock", "stoneedge", "drillrun", "firefang", "return"],
		randomDoubleBattleMoves: ["accelerock", "stoneedge", "rockslide", "drillrun", "firefang", "protect"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	wishiwashi: {
		randomBattleMoves: ["scald", "hydropump", "icebeam", "hiddenpowergrass", "earthquake"],
		randomDoubleBattleMoves: ["hydropump", "icebeam", "endeavor", "protect", "hiddenpowergrass", "earthquake", "helpinghand"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	wishiwashischool: {
		requiredAbility: 'Schooling',
		battleOnly: true,
	},
	mareanie: {
		tier: "LC",
	},
	toxapex: {
		randomBattleMoves: ["toxicspikes", "banefulbunker", "recover", "scald", "haze"],
		randomDoubleBattleMoves: ["scald", "banefulbunker", "haze", "wideguard", "lightscreen"],
		tier: "OU",
		doublesTier: "(DUU)",
	},
	mudbray: {
		tier: "LC",
	},
	mudsdale: {
		randomBattleMoves: ["earthquake", "closecombat", "rockslide", "heavyslam", "stealthrock"],
		randomDoubleBattleMoves: ["highhorsepower", "heavyslam", "closecombat", "rockslide", "protect", "earthquake", "rocktomb"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	dewpider: {
		tier: "LC",
	},
	araquanid: {
		randomBattleMoves: ["liquidation", "leechlife", "lunge", "toxic", "mirrorcoat", "stickyweb"],
		randomDoubleBattleMoves: ["liquidation", "leechlife", "lunge", "poisonjab", "protect", "wideguard"],
		tier: "RU",
		doublesTier: "DUU",
	},
	araquanidtotem: {
	},
	fomantis: {
		tier: "LC",
	},
	lurantis: {
		randomBattleMoves: ["leafstorm", "hiddenpowerice", "superpower", "knockoff", "synthesis"],
		randomDoubleBattleMoves: ["leafstorm", "gigadrain", "hiddenpowerice", "hiddenpowerfire", "protect"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	lurantistotem: {
	},
	morelull: {
		tier: "LC",
	},
	shiinotic: {
		randomBattleMoves: ["spore", "strengthsap", "moonblast", "substitute", "leechseed"],
		randomDoubleBattleMoves: ["spore", "gigadrain", "moonblast", "sludgebomb", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	salandit: {
		tier: "LC",
	},
	salazzle: {
		randomBattleMoves: ["nastyplot", "fireblast", "sludgewave", "hiddenpowergrass"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "sludgebomb", "hiddenpowerground", "hiddenpowerice", "fakeout", "encore", "willowisp", "taunt"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	salazzletotem: {
	},
	stufful: {
		tier: "LC",
	},
	bewear: {
		randomBattleMoves: ["hammerarm", "icepunch", "swordsdance", "return", "shadowclaw", "doubleedge"],
		randomDoubleBattleMoves: ["hammerarm", "icepunch", "doubleedge", "protect", "wideguard"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	bounsweet: {
		tier: "LC",
	},
	steenee: {
		tier: "NFE",
	},
	tsareena: {
		randomBattleMoves: ["powerwhip", "highjumpkick", "knockoff", "uturn", "rapidspin", "synthesis"],
		randomDoubleBattleMoves: ["highjumpkick", "playrough", "tropkick", "uturn", "feint", "protect"],
		tier: "RU",
		doublesTier: "DUU",
	},
	comfey: {
		randomBattleMoves: ["aromatherapy", "drainingkiss", "toxic", "synthesis", "uturn"],
		randomDoubleBattleMoves: ["floralhealing", "drainingkiss", "uturn", "lightscreen", "taunt"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	oranguru: {
		randomBattleMoves: ["nastyplot", "psyshock", "focusblast", "thunderbolt", "trickroom"],
		randomDoubleBattleMoves: ["trickroom", "foulplay", "instruct", "psychic", "protect", "lightscreen", "reflect"],

		tier: "(PU)",
		doublesTier: "DUU",
	},
	passimian: {
		randomBattleMoves: ["rockslide", "closecombat", "earthquake", "ironhead", "uturn", "knockoff"],
		randomDoubleBattleMoves: ["closecombat", "uturn", "rockslide", "protect", "ironhead", "taunt"],

		tier: "NU",
		doublesTier: "(DUU)",
	},
	wimpod: {
		tier: "LC",
	},
	golisopod: {
		randomBattleMoves: ["spikes", "firstimpression", "liquidation", "aquajet", "toxic", "leechlife"],
		randomDoubleBattleMoves: ["firstimpression", "aquajet", "liquidation", "leechlife", "protect", "suckerpunch", "wideguard"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	sandygast: {
		tier: "LC",
	},
	palossand: {
		randomBattleMoves: ["shoreup", "earthpower", "shadowball", "protect", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["shoreup", "protect", "shadowball", "earthpower"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	palossandmega: { //CHANGE
		randomBattleMoves: ["shoreup", "earthpower", "shadowball", "protect", "toxic", "stealthrock"],
		randomDoubleBattleMoves: ["shoreup", "protect", "shadowball", "earthpower"],
		requiredItem: "Palonite",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	pyukumuku: {
		randomBattleMoves: ["toxic", "recover", "counter", "reflect", "lightscreen"],
		randomDoubleBattleMoves: ["reflect", "lightscreen", "counter", "helpinghand", "safeguard", "memento"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	typenull: {
		randomBattleMoves: ["return", "uturn", "swordsdance", "rest", "sleeptalk"],
		tier: "(PU)",
		doublesTier: "NFE",
	},
	silvally: {
		randomBattleMoves: ["swordsdance", "return", "doubleedge", "crunch", "flamecharge", "flamethrower", "icebeam", "uturn", "ironhead"],
		randomDoubleBattleMoves: ["protect", "doubleedge", "uturn", "crunch", "icebeam", "partingshot", "flamecharge", "swordsdance", "explosion"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallybug: {
		randomBattleMoves: ["flamethrower", "icebeam", "thunderbolt", "uturn", "defog"],
		randomDoubleBattleMoves: ["protect", "uturn", "flamethrower", "icebeam", "thunderbolt", "thunderwave"],
		requiredItem: "Bug Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallydark: {
		randomBattleMoves: ["multiattack", "swordsdance", "flamecharge", "ironhead"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "partingshot", "uturn", "snarl", "thunderwave"],
		requiredItem: "Dark Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallydragon: {
		randomBattleMoves: ["multiattack", "ironhead", "flamecharge", "flamethrower", "icebeam", "dracometeor", "swordsdance", "uturn"],
		randomDoubleBattleMoves: ["protect", "dracometeor", "icebeam", "flamethrower", "partingshot", "uturn", "thunderwave"],
		requiredItem: "Dragon Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyelectric: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "thunderbolt", "icebeam", "uturn", "partingshot", "snarl", "thunderwave"],
		requiredItem: "Electric Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyfairy: {
		randomBattleMoves: ["multiattack", "flamethrower", "rockslide", "thunderwave", "partingshot"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "icebeam", "partingshot", "flamethrower", "thunderwave"],
		requiredItem: "Fairy Memory",
		tier: "PU",
		doublesTier: "(DUU)",
	},
	silvallyfighting: {
		randomBattleMoves: ["swordsdance", "multiattack", "shadowclaw", "flamecharge", "ironhead"],
		randomDoubleBattleMoves: ["protect", "multiattack", "rockslide", "swordsdance", "flamecharge"],
		requiredItem: "Fighting Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyfire: {
		randomBattleMoves: ["multiattack", "icebeam", "thunderbolt", "uturn", "defog"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "snarl", "uturn", "thunderbolt", "icebeam", "thunderwave"],
		requiredItem: "Fire Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyflying: {
		randomBattleMoves: ["multiattack", "flamethrower", "ironhead", "partingshot", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "multiattack", "partingshot", "swordsdance", "flamecharge", "uturn", "ironhead", "thunderwave"],
		requiredItem: "Flying Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyghost: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "icebeam", "partingshot"],
		requiredItem: "Ghost Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallygrass: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "flamethrower", "multiattack", "icebeam", "uturn", "partingshot", "thunderwave"],
		requiredItem: "Grass Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyground: {
		randomBattleMoves: ["multiattack", "swordsdance", "flamecharge", "rockslide"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "thunderbolt", "flamecharge", "rockslide", "swordsdance"],
		requiredItem: "Ground Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyice: {
		randomBattleMoves: ["multiattack", "thunderbolt", "flamethrower", "uturn", "toxic"],
		randomDoubleBattleMoves: ["protect", "icebeam", "thunderbolt", "partingshot", "uturn", "thunderwave"],
		requiredItem: "Ice Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallypoison: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "multiattack", "uturn", "partingshot", "flamethrower", "icebeam", "thunderwave"],
		requiredItem: "Poison Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallypsychic: {
		randomBattleMoves: ["multiattack", "flamethrower", "rockslide", "partingshot", "thunderwave"],
		randomDoubleBattleMoves: ["protect", "multiattack", "partingshot", "uturn", "flamethrower", "thunderwave"],
		requiredItem: "Psychic Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallyrock: {
		randomBattleMoves: ["multiattack", "flamethrower", "icebeam", "partingshot", "toxic"],
		randomDoubleBattleMoves: ["protect", "rockslide", "uturn", "icebeam", "flamethrower", "partingshot"],
		requiredItem: "Rock Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	silvallysteel: {
		randomBattleMoves: ["multiattack", "crunch", "flamethrower", "thunderbolt", "defog"],
		randomDoubleBattleMoves: ["protect", "multiattack", "swordsdance", "rockslide", "flamecharge", "uturn", "partingshot"],
		requiredItem: "Steel Memory",
		tier: "NU",
		doublesTier: "(DUU)",
	},
	silvallywater: {
		randomBattleMoves: ["multiattack", "icebeam", "thunderbolt", "partingshot", "defog"],
		randomDoubleBattleMoves: ["protect", "multiattack", "icebeam", "thunderbolt", "flamethrower", "partingshot", "uturn", "thunderwave"],
		requiredItem: "Water Memory",
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	minior: {
		randomBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake"],
		randomDoubleBattleMoves: ["shellsmash", "powergem", "acrobatics", "earthquake", "protect"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	miniormeteor: {
		requiredAbility: 'Shields Down',
		battleOnly: true,
	},
	komala: {
		randomBattleMoves: ["return", "suckerpunch", "woodhammer", "earthquake", "playrough", "uturn"],
		randomDoubleBattleMoves: ["protect", "return", "uturn", "suckerpunch", "woodhammer", "shadowclaw", "playrough", "swordsdance"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	turtonator: {
		randomBattleMoves: ["fireblast", "shellsmash", "earthquake", "dragontail", "explosion", "dragonpulse", "dracometeor"],
		randomDoubleBattleMoves: ["dragonpulse", "dracometeor", "fireblast", "shellsmash", "protect", "focusblast", "explosion"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	togedemaru: {
		randomBattleMoves: ["ironhead", "spikyshield", "zingzap", "nuzzle", "uturn", "wish"],
		randomDoubleBattleMoves: ["ironhead", "zingzap", "nuzzle", "spikyshield", "encore", "fakeout", "uturn"],
		tier: "NU",
		doublesTier: "DOU",
	},
	togedemarutotem: {
	},
	mimikyu: {
		randomBattleMoves: ["swordsdance", "shadowsneak", "playrough", "taunt", "shadowclaw"],
		randomDoubleBattleMoves: ["trickroom", "shadowclaw", "playrough", "woodhammer", "willowisp", "shadowsneak", "swordsdance", "protect"],

		tier: "UU",
		doublesTier: "DOU",
	},
	mimikyubusted: {
		requiredAbility: 'Disguise',
		battleOnly: true,
	},
	mimikyutotem: {
	},
	mimikyubustedtotem: {
		requiredAbility: 'Disguise',
		battleOnly: true,
	},
	bruxish: {
		randomBattleMoves: ["psychicfangs", "crunch", "liquidation", "icefang", "aquajet", "swordsdance"],
		randomDoubleBattleMoves: ["psychicfangs", "crunch", "liquidation", "aquajet", "protect", "swordsdance"],
		tier: "NUBL",
		doublesTier: "DUU",
	},
	dhelmise: {
		randomBattleMoves: ["powerwhip", "anchorshot", "knockoff", "earthquake", "rapidspin", "synthesis"],
		randomDoubleBattleMoves: ["powerwhip", "shadowclaw", "anchorshot", "protect", "gyroball"],
		tier: "NU",
		doublesTier: "(DUU)",
	},
	jangmoo: {
		tier: "LC",
	},
	hakamoo: {
		tier: "NFE",
	},
	kommoo: {
		randomBattleMoves: ["dragondance", "outrage", "closecombat", "poisonjab", "clangingscales"],
		randomDoubleBattleMoves: ["clangingscales", "focusblast", "flashcannon", "substitute", "protect", "dracometeor"],
		tier: "OU",
		doublesTier: "DOU",
	},
	kommoototem: {
	},
	tapukoko: {
		randomBattleMoves: ["thunderbolt", "dazzlinggleam", "naturesmadness", "bravebird", "uturn", "defog"],
		randomDoubleBattleMoves: ["wildcharge", "voltswitch", "dazzlinggleam", "bravebird", "protect", "thunderbolt", "hiddenpowerice", "taunt", "skydrop", "naturesmadness", "uturn"],
		tier: "OU",
		doublesTier: "DOU",
	},
	tapulele: {
		randomBattleMoves: ["moonblast", "psychic", "psyshock", "calmmind", "focusblast", "hiddenpowerfire", "taunt"],
		randomDoubleBattleMoves: ["moonblast", "psychic", "dazzlinggleam", "focusblast", "protect", "taunt", "shadowball", "thunderbolt"],
		tier: "OU",
		doublesTier: "DOU",
	},
	tapubulu: {
		randomBattleMoves: ["woodhammer", "hornleech", "stoneedge", "superpower", "megahorn", "bulkup"],
		randomDoubleBattleMoves: ["woodhammer", "hornleech", "stoneedge", "superpower", "leechseed", "protect", "naturesmadness"],
		tier: "OU",
		doublesTier: "DOU",
	},
	tapufini: {
		randomBattleMoves: ["calmmind", "moonblast", "scald", "taunt", "icebeam", "hydropump"],
		randomDoubleBattleMoves: ["muddywater", "moonblast", "calmmind", "icebeam", "healpulse", "protect", "taunt", "swagger"],
		tier: "OU",
		doublesTier: "DOU",
	},
	cosmog: {
		tier: "LC",
	},
	cosmoem: {
		tier: "NFE",
	},
	solgaleo: {
		randomBattleMoves: ["sunsteelstrike", "zenheadbutt", "flareblitz", "morningsun", "stoneedge", "earthquake"],
		randomDoubleBattleMoves: ["wideguard", "protect", "sunsteelstrike", "morningsun", "zenheadbutt", "flareblitz"],

		tier: "Uber",
		doublesTier: "DUber",
	},
	lunala: {
		randomBattleMoves: ["moongeistbeam", "psyshock", "calmmind", "focusblast", "roost"],
		randomDoubleBattleMoves: ["wideguard", "protect", "roost", "moongeistbeam", "psychic", "focusblast"],

		tier: "Uber",
		doublesTier: "DUber",
	},
	nihilego: {
		randomBattleMoves: ["stealthrock", "toxicspikes", "sludgewave", "powergem", "thunderbolt", "grassknot"],
		randomDoubleBattleMoves: ["powergem", "sludgebomb", "grassknot", "protect", "thunderbolt", "hiddenpowerice"],
		tier: "UU",
		doublesTier: "(DUU)",
	},
	buzzwole: {
		randomBattleMoves: ["superpower", "drainpunch", "leechlife", "stoneedge", "poisonjab", "earthquake"],
		randomDoubleBattleMoves: ["drainpunch", "superpower", "leechlife", "icepunch", "poisonjab", "protect"],
		tier: "UUBL",
		doublesTier: "(DUU)",
	},
	pheromosa: {
		randomBattleMoves: ["highjumpkick", "uturn", "icebeam", "poisonjab", "bugbuzz"],
		randomDoubleBattleMoves: ["highjumpkick", "uturn", "icebeam", "poisonjab", "bugbuzz", "protect", "speedswap"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	xurkitree: {
		randomBattleMoves: ["thunderbolt", "voltswitch", "energyball", "dazzlinggleam", "hiddenpowerice", "electricterrain"],
		randomDoubleBattleMoves: ["thunderbolt", "hiddenpowerice", "tailglow", "protect", "energyball", "hypnosis"],
		tier: "UUBL",
		doublesTier: "DUU",
	},
	celesteela: {
		randomBattleMoves: ["autotomize", "heavyslam", "airslash", "fireblast", "earthquake", "leechseed", "protect"],
		randomDoubleBattleMoves: ["protect", "heavyslam", "fireblast", "earthquake", "wideguard", "leechseed", "flamethrower", "substitute"],
		tier: "OU",
		doublesTier: "DOU",
	},
	kartana: {
		randomBattleMoves: ["leafblade", "sacredsword", "smartstrike", "knockoff", "swordsdance"],
		randomDoubleBattleMoves: ["leafblade", "sacredsword", "smartstrike", "psychocut", "protect", "knockoff"],
		tier: "OU",
		doublesTier: "DOU",
	},
	guzzlord: {
		randomBattleMoves: ["dracometeor", "hammerarm", "knockoff", "earthquake", "fireblast"],
		randomDoubleBattleMoves: ["dracometeor", "crunch", "darkpulse", "wideguard", "fireblast", "protect"],
		tier: "PUBL",
		doublesTier: "(DUU)",
	},
	necrozma: {
		randomBattleMoves: ["calmmind", "photongeyser", "darkpulse", "moonlight", "stealthrock", "storedpower"],
		randomDoubleBattleMoves: ["calmmind", "trickroom", "moonlight", "storedpower", "psyshock", "darkpulse"],
		tier: "RU",
		doublesTier: "(DUU)",
	},
	necrozmaduskmane: {
		randomBattleMoves: ["swordsdance", "sunsteelstrike", "photongeyser", "earthquake", "knockoff", "autotomize"],
		randomDoubleBattleMoves: ["swordsdance", "sunsteelstrike", "photongeyser", "earthquake", "knockoff", "rockslide"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	necrozmadawnwings: {
		randomBattleMoves: ["calmmind", "moongeistbeam", "photongeyser", "heatwave", "powergem", "trickroom"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	necrozmaultra: {
		requiredItem: "Ultranecrozium Z",
		battleOnly: true,
		tier: "Uber",
		doublesTier: "DUber",
	},
	magearna: {
		randomBattleMoves: ["shiftgear", "ironhead", "calmmind", "fleurcannon", "flashcannon", "thunderbolt", "focusblast"],
		randomDoubleBattleMoves: ["dazzlinggleam", "flashcannon", "substitute", "protect", "trickroom", "fleurcannon", "aurasphere", "voltswitch"],
		tier: "OU",
		doublesTier: "DUber",
	},
	magearnaoriginal: {
		isUnreleased: true,
		tier: "Unreleased",
	},
	marshadow: {
		randomBattleMoves: ["bulkup", "spectralthief", "closecombat", "rocktomb", "shadowsneak", "icepunch"],
		randomDoubleBattleMoves: ["spectralthief", "closecombat", "shadowsneak", "icepunch", "protect"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	poipole: {
		tier: "NFE",
	},
	naganadel: {
		randomBattleMoves: ["nastyplot", "dragonpulse", "sludgewave", "fireblast", "dracometeor", "uturn"],
		randomDoubleBattleMoves: ["tailwind", "dragonpulse", "sludgebomb", "fireblast", "dracometeor", "uturn", "protect"],
		tier: "Uber",
		doublesTier: "DUU",
	},
	stakataka: {
		randomBattleMoves: ["gyroball", "stoneedge", "trickroom", "earthquake", "superpower", "stealthrock"],
		randomDoubleBattleMoves: ["gyroball", "stoneedge", "trickroom", "earthquake", "superpower", "stealthrock", "rockslide"],
		tier: "RUBL",
		doublesTier: "DOU",
	},
	blacephalon: {
		randomBattleMoves: ["mindblown", "fireblast", "shadowball", "hiddenpowerice", "trick", "explosion", "calmmind"],
		randomDoubleBattleMoves: ["willowisp", "fireblast", "shadowball", "hiddenpowerice", "heatwave", "protect"],
		tier: "OU",
		doublesTier: "DUU",
	},
	zeraora: {
		randomBattleMoves: ["plasmafists", "closecombat", "voltswitch", "hiddenpowerice", "knockoff", "grassknot", "workup"],
		randomDoubleBattleMoves: ["plasmafists", "closecombat", "voltswitch", "hiddenpowerice", "knockoff", "grassknot", "fakeout", "protect"],
		tier: "UU",
		doublesTier: "DOU",
	},
	obstagoon: {
		randomBattleMoves: ["bulkup", "closecombat", "facade", "gunkshot", "knockoff", "obstruct"],
		tier: "UU",
		doublesTier: "New",
	},
	runerigus: {
		randomBattleMoves: ["bodypress", "earthquake", "haze", "stealthrock", "toxicspikes", "willowisp"],
		tier: "UU",
		doublesTier: "New",
	},
	grookey: {
		tier: "LC",
	},
	thwackey: {
		tier: "NFE",
	},
	rillaboom: {
		randomBattleMoves: ["bulkup", "drumbeating", "highhorsepower", "substitute", "superpower", "uturn"],
		tier: "UU",
		doublesTier: "New",
	},
	scorbunny: {
		tier: "LC",
	},
	raboot: {
		tier: "NFE",
	},
	cinderace: {
		randomBattleMoves: ["courtchange", "gunkshot", "highjumpkick", "pyroball", "uturn", "zenheadbutt"],
		tier: "OU",
		doublesTier: "New",
	},
	sobble: {
		tier: "LC",
	},
	drizzile: {
		tier: "NFE",
	},
	inteleon: {
		randomBattleMoves: ["airslash", "darkpulse", "hydropump", "icebeam", "scald", "uturn"],
		tier: "UU",
		doublesTier: "New",
	},
	rookidee: {
		tier: "LC",
	},
	corvisquire: {
		tier: "NFE",
	},
	corviknight: {
		randomBattleMoves: ["bodypress", "bravebird", "bulkup", "defog", "roost"],
		tier: "OU",
		doublesTier: "New",
	},
	nickit: {
		tier: "LC",
	},
	thievul: {
		randomBattleMoves: ["darkpulse", "foulplay", "grassknot", "nastyplot", "partingshot", "psychic"],
		tier: "UU",
		doublesTier: "New",
	},
	rolycoly: {
		tier: "LC",
	},
	carkol: {
		tier: "NFE",
	},
	coalossal: {
		randomBattleMoves: ["bodypress", "fireblast", "rapidspin", "spikes", "stealthrock", "stoneedge"],
		tier: "UU",
		doublesTier: "New",
	},
	toxel: {
		tier: "LC",
	},
	toxtricity: {
		randomBattleMoves: ["boomburst", "overdrive", "shiftgear", "sludgewave", "voltswitch"],
		tier: "OU",
		doublesTier: "New",
	},
	toxtricitylowkey: {
		randomBattleMoves: ["boomburst", "overdrive", "sludgewave", "voltswitch"],
		tier: "OU",
		doublesTier: "New",
	},
	sizzlipede: {
		tier: "LC",
	},
	centiskorch: {
		randomBattleMoves: ["coil", "firelash", "knockoff", "leechlife", "powerwhip"],
		tier: "UU",
		doublesTier: "New",
	},
	hatenna: {
		tier: "LC",
	},
	hattrem: {
		tier: "NFE",
	},
	hatterene: {
		tier: "OU",
		doublesTier: "New",
	},
	impidimp: {
		tier: "LC",
	},
	morgrem: {
		tier: "NFE",
	},
	grimmsnarl: {
		randomBattleMoves: ["bulkup", "rest", "sleeptalk", "spiritbreak"],
		tier: "OU",
		doublesTier: "New",
	},
	grimmsnarlmega: {
		randomBattleMoves: ["bulkup", "darkestlariat", "playrough", "substitute", "suckerpunch", "thunderwave", "trick"],
		requiredItem: "Grimmite",
		tier: "OU",
	},
	milcery: {
		tier: "LC",
	},
	alcremie: {
		tier: "UU",
		doublesTier: "New",
	},
	falinks: {
		randomBattleMoves: ["closecombat", "noretreat", "poisonjab", "rockslide", "throatchop"],
		tier: "UU",
		doublesTier: "New",
	},
	stonjourner: {
		randomBattleMoves: ["earthquake", "heatcrash", "rockpolish", "stealthrock", "stoneedge"],
		tier: "UU",
		doublesTier: "New",
	},
	eiscue: {
		randomBattleMoves: ["bellydrum", "iciclecrash", "liquidation", "substitute", "zenheadbutt"],
		tier: "UU",
		doublesTier: "New",
	},
	eiscuenoice: {
		requiredAbility: "Ice Face",
		battleOnly: true,
	},
	dracozolt: {
		randomBattleMoves: ["aerialace", "boltbeak", "earthquake", "lowkick", "outrage"],
		tier: "OU",
		doublesTier: "New",
	},
	dracovish: {
		randomBattleMoves: ["crunch", "fishiousrend", "icefang", "lowkick", "psychicfangs"],
		tier: "OU",
		doublesTier: "New",
	},
	dreepy: {
		tier: "LC",
	},
	drakloak: {
		tier: "NFE",
	},
	dragapult: {
		randomBattleMoves: ["dracometeor", "fireblast", "shadowball", "thunderbolt", "uturn"],
		tier: "OU",
		doublesTier: "New",
	},
	parapod: {
		randomBattleMoves: ["spore", "substitute", "leechlife", "seedbomb", "leechseed", "knockoff"],
		randomDoubleBattleMoves: ["spore", "stunspore", "leechlife", "seedbomb", "ragepowder", "leechseed", "protect", "knockoff", "wideguard"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	pegasoltea: {
		randomBattleMoves: ["flareblitz", "wildcharge", "morningsun", "highhorsepower", "willowisp"],
		randomDoubleBattleMoves: ["flareblitz", "wildcharge", "protect", "hypnosis", "flamecharge", "megahorn", "drillrun", "willowisp"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mallarkee: {
		randomBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "roost", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "protect", "knockoff"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	mallarkeef: {
		randomBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "roost", "knockoff"],
		randomDoubleBattleMoves: ["bravebird", "swordsdance", "return", "leafblade", "protect", "knockoff"],

		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	lediosso: {
		randomBattleMoves: ["roost", "lightscreen", "encore", "reflect", "knockoff", "toxic", "uturn"],
		randomDoubleBattleMoves: ["protect", "lightscreen", "encore", "reflect", "knockoff", "bugbuzz", "uturn", "tailwind"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	Qwilomber: {
		randomBattleMoves: ["toxicspikes", "liquidation", "spikes", "painsplit", "thunderwave", "taunt", "destinybond"],
		randomDoubleBattleMoves: ["poisonjab", "liquidation", "swordsdance", "protect", "thunderwave", "taunt", "destinybond"],
		tier: "PU",
		doublesTier: "(DUU)",
	},
	trebil: {
		randomBattleMoves: ["nastyplot", "boomburst", "heatwave", "hiddenpowerground", "substitute", "chatter", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "heatwave", "encore", "substitute", "chatter", "uturn", "protect", "hypervoice", "boomburst"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	basclef: {
		randomBattleMoves: ["nastyplot", "boomburst", "heatwave", "hiddenpowerground", "substitute", "chatter", "uturn"],
		randomDoubleBattleMoves: ["nastyplot", "heatwave", "encore", "substitute", "chatter", "uturn", "protect", "hypervoice", "boomburst"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	ararisu: {
		randomBattleMoves: ["nuzzle", "thunderbolt", "superfang", "toxic", "uturn"],
		randomDoubleBattleMoves: ["nuzzle", "thunderbolt", "superfang", "followme", "uturn", "helpinghand", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	dunseraph: {
		randomBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "roost", "stealthrock"],
		randomDoubleBattleMoves: ["coil", "rockslide", "bite", "headbutt", "glare", "bodyslam", "protect"],
		tier: "(PU)",
		doublesTier: "(DUU)",
	},
	zacian: {
		randomBattleMoves: ["closecombat", "crunch", "playrough", "psychicfangs", "swordsdance"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	zaciancrowned: {
		randomBattleMoves: ["behemothblade", "closecombat", "crunch", "playrough", "psychicfangs", "swordsdance"],
		tier: "Uber",
		doublesTier: "DUber",
		requiredItem: "Rusted Sword",
	},
	zamazenta: {
		randomBattleMoves: ["closecombat", "crunch", "psychicfangs", "wildcharge"],
		tier: "Uber",
		doublesTier: "DUber",
	},
	zamazentacrowned: {
		randomBattleMoves: ["behemothbash", "closecombat", "crunch", "psychicfangs"],
		tier: "Uber",
		doublesTier: "DUber",
		requiredItem: "Rusted Shield",
	},
	kerberos: {
		tier: "Uber",
	},
	shukaku: {
		tier: "Uber",
	},
	kuramasmall: {
		tier: "Uber",
	},
	kuramamedium: {
		tier: "Uber",
	},
	kurama: {
		tier: "Uber",
   },
   drake: {
	  randomBattleMoves: ["crunch", "suckerpunch", "playrough", "firefang", "irontail"],
	  randomDoubleBattleMoves: ["suckerpunch", "crunch", "playrough", "firefang", "taunt", "protect"],
	  tier: "(PU)",
	  doublesTier: "(DUU)",
   },
	missingno: {
		randomBattleMoves: ["watergun", "skyattack", "doubleedge", "metronome"],
		tier: "Illegal",
	},
};

exports.BattleFormatsData = BattleFormatsData;
