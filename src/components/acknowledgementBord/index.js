import { useGame } from '../../contexts/game';
import Button from '../button';
import style from './style.module.scss';

const Acknowledge = ({right, hand, gameover, router}) => {
    const {score} = useGame();
    const handleAcknowlegement = () => {
        if(gameover){
            return (
                <div className={style.scoreBoard}>
                    <h2>Parabéns você Venceu!</h2>
                    <span>Pontuação: <strong>{score}</strong></span>
                    <Button onClick={() => router('landing')}>Voltar</Button>
                </div>
            );
        }
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