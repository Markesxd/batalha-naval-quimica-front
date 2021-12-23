import {Acknowledge, Hand, PeriodicTable, Question} from '../components'
import { tableContent, removeElements } from '../utils'
import api from '../api';
import { useEffect, useState } from 'react';

const SinglePlayer = () => {

    const {missingElements, cards} = removeElements(tableContent);
    const [question, setQuestion] = useState({content: 'Loading', answer: '?'});
    
    const getQuestion = () => {
        api.get('/question/H')
        .then(({data}) => {
            setQuestion(data)
        });
    }

    useEffect(getQuestion, [])

    return (
        <div>
            <PeriodicTable content={tableContent} elementsMissing={missingElements} answer={question.answer}>
                <Acknowledge />
            </PeriodicTable>
            <Question content={question.content}/>
            <Hand cards={cards}/>
        </div>
    )
}

export default SinglePlayer;