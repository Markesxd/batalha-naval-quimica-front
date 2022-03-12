const checkGameover = (hand) => {
    for(const card of hand){
        if(card) return false;
    }
    return true;
}

export default checkGameover;