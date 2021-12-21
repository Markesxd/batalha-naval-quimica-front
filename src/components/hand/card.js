import style from './style.module.scss';

const Card = ({symbol, name, number}) => {
    return (
        <div className={style.card}>
            <span>{number}</span>
            <h3>{symbol}</h3>
            <span>{name}</span>
        </div>
    )
}

export default Card;