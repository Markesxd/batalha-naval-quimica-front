import style from './style.module.scss';
import { useState } from 'react';

const Question = ({content, click}) => {

    const [first, setFirst] = useState(false);

    const handleClick = () => {
        if(!first){
            click()
            setFirst(true);
        }
    }

    return (
        <div className={style.question} onClick={handleClick}>
            <p>{first?content:"Clique aqui para começar"}</p>
        </div>
    )   
}

export default Question;