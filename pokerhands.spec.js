const poker = require("./pokerhands");

describe('no game', () => {
	it('should have no one win', () => {
		expect(poker.player1Win("")).toEqual(false);
	});
});

describe('winning with high card', () => {
	it('player 1 should win with highest card 1st card on hand', () => {
		expect(poker.player1Win("AC 3C 4C 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
		expect(poker.player1Win("AH 2C 4C 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
		expect(poker.player1Win("2C AH 4C 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
		expect(poker.player1Win("2C 4C AH 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
	});

	it('player 1 should lose when player 2 has higher card', () => {
		expect(poker.player1Win("2H 3C 4C 8C 6C AH 3H 4H 5H 7H")).toEqual(false);
	});
});

describe('win with 1 pair', () => {
	it('player 1 should win when has only one pair in game', () => {
		expect(poker.player1Win("2H 2C 4C 8C 6C AH 3H 4H 5H 7H")).toEqual(true);
	});

	it('player 1 should lose when player2 has only one pair in game', () => {
		expect(poker.player1Win("AH 3C 4C 8C 6C 3H 3S 4H 5H 7H")).toEqual(false);
	});

	it('player 1 should win higher rank pair when both player have pair card', () => {
		expect(poker.player1Win("4C KH 8C 6C KC JH JS 4H 5H 7H")).toEqual(true);
		expect(poker.player1Win("6H 6S 4C 8C 6C AH AC 5S 5H 7H")).toEqual(false);
	});
});
