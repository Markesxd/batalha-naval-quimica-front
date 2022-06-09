import style from './style.module.scss';

const Card = ({symbol, name, number, difficulty}) => {

    const dragStart = (event) => {
        event.dataTransfer.setData('Text', event.target.children[1].innerText)
    }

    return (
        <div draggable onDragStart={(e) => dragStart(e)} className={style.card}>
            {difficulty === 'hard'?null:<span>{number}</span>}
            <h3>{symbol}</h3>
            {difficulty === 'easy'?<span>{name}</span>:null}
        </div>
    )
}

export default Card;