const poker = require("./pokerhands");

it('should return false when have no game', () => {
	expect(poker.player1Win("")).toEqual(false);
});

it('should got player 1 win with highest card', () => {
	expect(poker.player1Win("AC 3C 4C 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
	expect(poker.player1Win("AH 2C 4C 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
	expect(poker.player1Win("2C AH 4C 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
	expect(poker.player1Win("2C 4C AH 8C 6C 2H 3H 4H 5H 7H")).toEqual(true);
});

it('should got player 1 lose with highest card', () => {
	expect(poker.player1Win("2H 3C 4C 8C 6C AH 3H 4H 5H 7H")).toEqual(false);
});

it('should got player 1 win with only 1 pair', () => {
	expect(poker.player1Win("2H 2C 4C 8C 6C AH 3H 4H 5H 7H")).toEqual(true);
});

it('should got player 1 lose with only 1 pair', () => {
	expect(poker.player1Win("AH 3C 4C 8C 6C 3H 3S 4H 5H 7H")).toEqual(false);
});

it('should got player 1 lose with higher rank pair ', () => {
	expect(poker.player1Win("3H 3S 4C 8C 6C AH AC 4H 5H 7H")).toEqual(false);
	expect(poker.player1Win("4C KH 8C 6C KC JH JS 4H 5H 7H")).toEqual(true);
});
