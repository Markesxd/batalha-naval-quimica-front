const removeElements = (tableContent, numberOfelements = 10) => {
    let i
    let j;

    const missingElements = [];
    for(let k = 0; k < 9; k++){
        missingElements[k] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    }

    const cards = [];

    for(let k = 0; k < numberOfelements; k++){
        i = parseInt(Math.random() * 9);
        j = parseInt(Math.random() * 18);
        if(!tableContent[i][j] || missingElements[i][j]){
            k--;
            continue;
        }
        cards.push(tableContent[i][j]);
        missingElements[i][j] = 1;
    }
    

    return {missingElements, cards}
}

export default removeElements;