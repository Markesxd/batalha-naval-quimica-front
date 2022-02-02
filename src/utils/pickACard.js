const pickACard = (cards, hand) => {
    let i;
    let j = false;
    while(!j){
        i = parseInt(Math.random() * cards.length);
        j = hand[i];
    }
    return cards[i];
}

export default pickACard;