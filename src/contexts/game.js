import { createContext, useContext, useState } from "react";
import { removeCard } from "../utils";

export const gameContext  = createContext();

const Game = ({children}) => {   
    let answer;
    const [score, setScore] = useState(100);

    function addScore(){
        setScore(score + 10);
    }

    function takeScore() {
        setScore(score - 5)
    }

    return (
        <gameContext.Provider value={{
            score,
            addScore,
            takeScore,
            answer
        }}>
            {children}
        </gameContext.Provider>
    )
}

export default Game;

export const useGame = () => useContext(gameContext);