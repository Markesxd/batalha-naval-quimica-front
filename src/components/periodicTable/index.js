import {useState} from 'react'
import style from './style.module.scss';

const PeriodicTable = ({content, elementsMissing}) => {

    // console.log(ele)
    const [tableContent] = useState(content)
    const makeTable = () => {
        let table = '<table>';
        for(let i = 0; i < 9; i++){
            table += '<tr>';
            for(let j = 0; j < 18; j++){
                if(tableContent[i][j] && !elementsMissing[i][j]){ 
                    table += `<td class='${style.element}' >
                    <span>${tableContent[i][j].number}</span>
                    <h4>${tableContent[i][j].symbol}</h4>
                    <span>${tableContent[i][j].name}</span>
                    </td>`;
                } else if(elementsMissing[i][j]) {
                    table += `<td class='${style.missing}' >
                    <h4>?</h4>
                    </td>`;
                } else {
                    table += '<td></td>';
                }
            }
            table += '</tr>';
        }
        table +='</table>';
        return table;
    }

    return (
        <div dangerouslySetInnerHTML={{__html: makeTable()}} className={style.table}>
        </div>
    )
}

export default PeriodicTable;