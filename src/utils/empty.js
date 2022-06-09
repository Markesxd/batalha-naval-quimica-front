const empty = () => {

    const missingElements = [];
    
    for(let k = 0; k < 9; k++){
        missingElements[k] = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false];
    }
    
    const cards = [];
    for(let i = 0; i < 10; i++){
        cards.push({content: 'a', answer: 'H'});
    }
    const hand = [];
    for(let i = 0; i < 10; i++){
        hand.push(true)
    }
    
    return {missingElements, cards, hand}
}

export default empty;