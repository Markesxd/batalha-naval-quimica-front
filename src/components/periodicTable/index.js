import {cloneElement, useState} from 'react'
import style from './style.module.scss';

const PeriodicTable = ({content, elementsMissing, answer, children}) => {

    const [tableContent] = useState(content);
    const [right, setRight] = useState(0);

    const drop = (event) => {
        event.preventDefault();
        const givenAnswer = event.dataTransfer.getData('Text');
        if(givenAnswer === answer) {
            setRight(1);
            setTimeout(() => {
                setRight(0);
            }, 2000);
        } else {
            setRight(2);
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
            {cloneElement(children, {right})}
           <table>
               <tbody>{makeTable()}</tbody>
            </table> 
        </div>
    )
}

export default PeriodicTable;