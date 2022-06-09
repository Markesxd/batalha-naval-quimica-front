import style from './style.module.scss';

const Jumbotron = ({round, gameover}) => {

    return (
            gameover ?
            null:
            (<span className={style.jumbo}>
                Rodada {round}
            </span>
    ))
}

export default Jumbotron;