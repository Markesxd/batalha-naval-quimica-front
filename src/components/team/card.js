import style from './style.module.scss';

const Card = ({name, num, select}) => {

    const dragStart = (e) => {
        e.dataTransfer.setData('Text', num);
    }

    return(
        <div draggable onDragStart={select === 'create' ? (e) => dragStart(e) : null} className={style.card}>
            <span></span>
            <h3>{name}</h3>
        </div>
    )
}

export default Card;