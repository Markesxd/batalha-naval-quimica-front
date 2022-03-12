import gameover from './checkGameover';

const pickACard = (cards, hand) => {
    if(gameover(hand)) return false;
    let i;
    let j = false;
    while(!j){
        i = parseInt(Math.random() * cards.length);
        j = hand[i];
    }
    return cards[i];
}

export default pickACard;