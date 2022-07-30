module.exports = class PokerHand {
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