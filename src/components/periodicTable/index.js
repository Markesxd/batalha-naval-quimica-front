import {cloneElement, useState} from 'react'
import style from './style.module.scss';
import { findElement } from '../../utils';
import { useGame } from '../../contexts/game';
import Jumbotron from '../jumbotron';

const PeriodicTable = ({content, elementsMissing, cards, children, answer, hand, updateHand, rounds, currentRound, setCurrentRound}) => {
    const {addScore, takeScore, score} = useGame();
    const [tableContent] = useState(content);
    const [right, setRight] = useState(0);

    const drop = (event) => {
        event.preventDefault();
        const givenAnswer = event.dataTransfer.getData('Text');
        if(givenAnswer === answer && givenAnswer === event.currentTarget.firstChild.innerText) {
            setRight(1);
            updateHand(cards, hand, givenAnswer);
            const {i, j} = findElement(content, givenAnswer);
            elementsMissing[i][j] = false;
            addScore();
            const nextRound = currentRound + 1;
            setCurrentRound(nextRound);
            if(!(currentRound > rounds)){
                setTimeout(() => {
                    setRight(0);
                }, 2000);
            }
        } else {
            setRight(2);
            takeScore()
            setTimeout(() => {
                setRight(0);
            }, 2000);            
        }
    }

    const allowDrop = (event) => {
        event.preventDefault();
    }

    const makeTable = () => tableContent.map((row, i) => {
            return(
                <tr key={i}>
                {row.map((el, j) => {
                    if(elementsMissing[i][j]){
                        return(
                        <td key={j} className={style.missing} onDragOver={(event) => allowDrop(event)} onDrop={(event) => drop(event)}>
                            <p>{el.symbol}</p>
                            <h4>?</h4>
                        </td>
                        )
                    }
                    if(el.symbol === '.'){
                        return (
                            <td key={j} ></td>
                        )
                    }
                    return (
                        <td key={j} className={style.element + ' ' + style[el.classification]}>
                            <span>{el.number}</span>
                            <h4>{el.symbol}</h4>
                            <span>{el.name}</span>
                        </td>
                    )
                })}
            </tr>
            )
        })

    return (
        <div className={style.table}>
            {cloneElement(children, {right, hand, gameover: currentRound > rounds   })}
            <Jumbotron round={currentRound} gameover={currentRound > rounds}/>
            <table>
                <tbody>{makeTable()}</tbody>
            </table>
        </div>
    )
}

export default PeriodicTable;