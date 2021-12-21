import style from './style.module.scss'

const Question = ({content}) => {
    return (
        <div className={style.question}>
            <p>
            {content.question}
            </p>
        </div>
    )   
}

export default Question;