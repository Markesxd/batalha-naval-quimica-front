import style from './style.module.scss';

const Card = ({symbol, name}) => {
    return (
        <div className={style.card}>
            <h3>{symbol}</h3>
            <span>{name}</span>
        </div>
    )
}

export default Card;