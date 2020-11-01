'use strict';

const assert = require('./../../assert');
const common = require('./../../common');

let battle;

describe('Illusion', function () {
	afterEach(function () {
		battle.destroy();
	});

	it(`should instantly wear off before using a Z-move`, function () {
		battle = common.gen(7).createBattle([[
			{species: "Zoroark", ability: 'illusion', item: 'fightiniumz', moves: ['machpunch', 'sleeptalk']},
			{species: "Octillery", moves: ['sleeptalk']},
		], [
			{species: "Wynaut", moves: ['sleeptalk']},
		]]);

		battle.makeChoices('move machpunch zmove', 'auto');
		assert(battle.log.some(line => line.includes('|-end|p1a: Zoroark|Illusion')));
	});
});
