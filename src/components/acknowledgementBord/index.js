import { useGame } from '../../contexts/game';
import style from './style.module.scss';

const Acknowledge = ({right}) => {

    const {score} = useGame();

    const handleAcknowlegement = () => {
       return right?
        (<div className={style.container}>
            {right === 1 ?
            <span className={style.right + ' ' + style.card}>Certa Resposta!<br/><span>{score} pontos</span></span>:
            <span className={style.wrong  + ' ' + style.card}>Resposta Errada<br/><span>{score} pontos</span></span>}
        </div>):
        null
    }

    return (
        <>
        {handleAcknowlegement()}
        </>
    )
}

export default Acknowledge;