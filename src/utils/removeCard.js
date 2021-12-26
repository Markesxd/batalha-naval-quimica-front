const removeCard = (cards, hand, element) => {
    return cards.map((card, i) => card.symbol === element ? false : hand[i])
}

module.exports = removeCard;