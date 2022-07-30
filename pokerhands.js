class PokerGame {
    constructor(hand1, hand2) {
        this.hand1 = hand1;
        this.hand2 = hand2;
    }

    isPairGame() {
        return this.hand1.hasPair() || this.hand2.hasPair();
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
    let hand1 = new PokerHand(input.substring(0, 14));
    let hand2 = new PokerHand(input.substring(15, 29));
    let game = new PokerGame(hand1, hand2)

    if (game.isPairGame()) {
        return player1WinWithOnePair(game)
    }
    return player1WinWithHighCard(hand1, hand2);
};

const player1WinWithOnePair = (game) => {
    return game.hand1.pairRank > game.hand2.pairRank;
}

const player1WinWithHighCard = (hand1, hand2) => {
    return hand1.highestRank > hand2.highestRank;
}


module.exports = {
    player1Win
}