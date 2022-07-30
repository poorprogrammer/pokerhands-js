const player1Win = (input) => {
    if (!input) {
        return false;
    }

    if (player1WinWithHighCard(input)) {
        return true;
    }
    // } else if (player1WinWithOnePair(input)) {
    //     return true;
    // }
    return false;
    // return player1WinWithOnePair(input) || player1WinWithHighCard(input);
};


const player1WinWithHighCard = (cardsInput) => {
    hand1 = new PokerHand(cardsInput.substring(0, 14));
    hand2 = new PokerHand(cardsInput.substring(15, 29));
    return hand1.highestRank > hand2.highestRank;
}

const player1WinWithOnePair = (cardsInput) => {
    hand1 = new PokerHand(cardsInput.substring(0, 14));
    hand2 = new PokerHand(cardsInput.substring(15, 29));
    return hand1.has1Pair();
}

class PokerHand {
    constructor(fiveCardsInput) {
        this.cards = fiveCardsInput;
    }

    get highestRank() {
        return this.sortCardRanks()[0];
    };

    has1Pair() {
        return true;
    }

    get pairRank() {
        return 1;
    }

    sortCardRanks() {
        let cardRanks = [];
        this.cards.split(" ").forEach(card => {
            cardRanks.push("23456789TJQKA".indexOf(card[0]))
        });
        return cardRanks.sort(function (a, b) {
            return b - a;
        });
    }
}

module.exports = {
    player1Win
}