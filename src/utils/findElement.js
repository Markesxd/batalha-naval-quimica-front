const findElement = (table, element) => {
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 18; j++){
            if(table[i][j].symbol === element){
                return {i,j};
            }
        }
    }
}

export default findElement;