import style from './style.module.scss';

const Acknowledge = ({right}) => {

    const handleAcknowlegement = () => {
       return right?
        (<div className={style.container}>
            {right === 1 ?
            <span className={style.right + ' ' + style.card}>Certa Resposta!</span>:
            <span className={style.wrong  + ' ' + style.card}>Resposta Errada</span>}
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