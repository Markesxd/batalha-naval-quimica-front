import style from './style.module.scss'

const Question = ({content}) => {
    const putQuestion = () => {
        return content
    }

    return (
        <div className={style.question}>
            <p>
            {putQuestion()}
            </p>
        </div>
    )   
}

export default Question;