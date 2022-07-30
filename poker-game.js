module.exports = class PokerGame {
    constructor(hand1, hand2) {
        this.hand1 = hand1;
        this.hand2 = hand2;
    }

    isPairGame() {
        return this.hand1.hasPair() || this.hand2.hasPair();
    }

    player1WinWithOnePair() {
        return this.hand1.pairRank > this.hand2.pairRank;
    }

    player1WinWithHighCard() {
        return this.hand1.highestRank > this.hand2.highestRank;
    }
}