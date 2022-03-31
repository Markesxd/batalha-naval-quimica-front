import {Acknowledge, Hand, PeriodicTable, Question} from '../../components';
import Game from '../../contexts/game';
import { tableContent, removeElements, pickACard, empty, removeCard } from '../../utils';
import { useEffect, useState } from 'react';
import api from '../../api';

const SinglePlayer = ({router}) => {

    const emptyHand = empty();
    const [missingElements, setMissingElements] = useState(emptyHand.missingElements);
    const [cards, setCards] = useState(emptyHand.cards);
    const [hand, setHand] = useState([true,true,true,true,true,true,true,true,true,true]);
    
    function updateHand(cards, hand, element){
        const newHand = removeCard(cards, hand, element)
        setHand(newHand);
    }

    const [question, setQuestion] = useState({content: 'Clique aqui Para Começar', answer: 'H'});

    const getQuestion = () => {
        const card = pickACard(cards, hand);
        if(card === false) return;
        api.get(`/question/${card.symbol}`)
        .then(({data}) => {
            setQuestion(data);
        })
        .catch((err) => {
            setQuestion({content: card.name, answer: card.symbol});
        })
    }

    useEffect(() => {
        const removed = removeElements(tableContent, 1);    
        setMissingElements(removed.missingElements);
        setCards(removed.cards);
    }, [])

    useEffect(getQuestion, [hand]);

    return (
        <Game>
            <PeriodicTable content={tableContent} elementsMissing={missingElements} cards={cards} answer={question.answer} updateHand={updateHand} hand={hand} router={router}>
                <Acknowledge/>
            </PeriodicTable>
            <Question click={getQuestion} content={question.content}/>
            <Hand cards={cards} hand={hand}/>
        </Game>
    )
}

export default SinglePlayer;