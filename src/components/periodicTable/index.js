import {useState} from 'react'
import style from './style.module.scss';

const PeriodicTable = ({content}) => {

    
    const [tableContent] = useState(content)

    const makeTable = () => {
        let table = '<table>';
        for(let i = 0; i < 9; i++){
            table += '<tr>';
            for(let j = 0; j < 19; j++){
                if(tableContent[i][j]){ 
                    table += `<td class='${style.element} ${style.blue}' >
                    <h4>${tableContent[i][j].symbol}</h4>
                    <span>${tableContent[i][j].number}</span>
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