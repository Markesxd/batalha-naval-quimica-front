import Card from './card';
import style from './style.module.scss';

const Hand = ({content}) => {

    const cards = [1,2,3,4,5];

    return (
        <div className={style.hand}>
        {cards.map(card => {
           return (
               <Card symbol='H' name='Hidrogênio'/>
           ) 
        })}
        </div>
    )
}

export default Hand;