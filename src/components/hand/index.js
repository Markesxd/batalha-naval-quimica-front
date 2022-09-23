import Card from './card';
import style from './style.module.scss';
import { useGame } from '../../contexts/game';

const Hand = ({cards, hand, difficulty, fowardedRef}) => {
    
    const makeHand = () => {
        return (
            cards.map((card, i) => {
                return (
                    hand[i]?
                    <Card difficulty={difficulty} symbol={card.symbol} name={card.name} number={card.number} key={i}/>:
                    null
                ) 
             })
        )
    }
    return (
        <div ref={fowardedRef} className={style.hand}>
        {makeHand()}
        </div>
    )
}

export default Hand;