class PokerGame {
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

class PokerHand {
    constructor(fiveCardsInput) {
        this.cards = this.sortByCardRanks(fiveCardsInput)
    }

    get highestRank() {
        return this.cards[0];
    };

    get pairRank() {
        if (this.hasPair()) {
            return this.pairCardRank[0];
        }
        return -1;
    }

    hasPair() {
        this.pairCardRank = this.cards.filter((card, index) => index !== this.cards.indexOf(card))
        return this.pairCardRank.length === 1;
    }

    sortByCardRanks(cards) {
        let cardRanks = [];
        cards.split(" ").forEach(card => {
            cardRanks.push("23456789TJQKA".indexOf(card[0]))
        });
        return cardRanks.sort(function (a, b) {
            return b - a;
        });
    }
}

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