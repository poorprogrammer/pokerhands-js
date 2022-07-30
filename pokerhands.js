const PokerGame = require("./poker-game");
const PokerHand = require("./poker-hand");

const player1Win = (input) => {
    if (!input) {
        return false;
    }

    let game = new PokerGame(new PokerHand(input.substring(0, 14)), new PokerHand(input.substring(15, 29)));

    if (game.isPairGame()) {
        return game.player1WinWithOnePair()
    }
    return game.player1WinWithHighCard();
};

module.exports = {
    player1Win
}