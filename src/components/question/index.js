import style from './style.module.scss';
import { useState } from 'react';

const Question = ({content, click, handRef}) => {

    const [first, setFirst] = useState(true);

    const handleClick = () => {
        if(first){
            setFirst(false);
            click();
            handRef.current.scrollIntoView();
        }
    }

    return (
        <div className={style.question} onClick={handleClick}>
            <p>{first?"Clique aqui para começar":content}</p>
        </div>
    )   
}

export default Question;