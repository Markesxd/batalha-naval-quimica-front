import { createContext, useContext, useState } from "react";
import { removeCard } from "../utils";

export const gameContext  = createContext();

const Game = ({children}) => {

    const [hand, setHand] = useState([true,true,true,true,true,true,true,true,true,true]);
    
    function updateHand(cards, hand, element){
        const newHand = removeCard(cards, hand, element)
        setHand(newHand);
    }

    return (
        <gameContext.Provider value={{
            hand,
            updateHand
        }}>
            {children}
        </gameContext.Provider>
    )
}

export default Game;

export const useGame = () => useContext(gameContext);