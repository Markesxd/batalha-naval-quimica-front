import style from './style.module.scss';

const Card = ({symbol, name, number}) => {

    const dragStart = (event) => {
        event.dataTransfer.setData('Text', event.target.children[1].innerText)
    }

    return (
        <div draggable onDragStart={(e) => dragStart(e)} className={style.card}>
            <span>{number}</span>
            <h3>{symbol}</h3>
            <span>{name}</span>
        </div>
    )
}

export default Card;