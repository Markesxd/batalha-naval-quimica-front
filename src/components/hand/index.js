import Card from './card';
import style from './style.module.scss';

const Hand = ({cards}) => {

    return (
        <div className={style.hand}>
        {cards.map((card, i) => {
           return (
               <Card symbol={card.symbol} name={card.name} number={card.number} key={i}/>
           ) 
        })}
        </div>
    )
}

export default Hand;