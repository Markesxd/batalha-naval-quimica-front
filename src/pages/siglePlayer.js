import {Hand, PeriodicTable, Question} from '../components'
import { tableContent, removeElements } from '../utils'

const SinglePlayer = () => {

    const {missingElements, cards} = removeElements(tableContent);
    return (
        <div>
            <PeriodicTable content={tableContent} elementsMissing={missingElements}/>
            <Question content={{question: 'Qual o elemento que começa com Hidro e termina com gênio?', answer: 'H'}}/>
            <Hand cards={cards}/>
        </div>
    )
}

export default SinglePlayer;