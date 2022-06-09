import {Acknowledge, Hand, PeriodicTable, Question} from '../../components';
import Game from '../../contexts/game';
import { tableContent, removeElements, pickACard, empty, removeCard } from '../../utils';
import { useEffect, useState, useRef } from 'react';
import api from '../../api';

const SinglePlayer = ({router, options}) => {

    const emptyHand = empty();
    const [missingElements, setMissingElements] = useState(emptyHand.missingElements);
    const [cards, setCards] = useState(emptyHand.cards);
    const [currentRound, setCurrentRound] = useState(1);
    const [hand, setHand] = useState(emptyHand.hand);
    const handRef = useRef(null);
    
    function updateHand(cards, hand, element){
        const newHand = removeCard(cards, hand, element)
        setHand(newHand);
    }

    const [question, setQuestion] = useState({content: 'Clique aqui Para Começar', answer: '?'});

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
        const extraCards = numberOfExtraCards();
        const removed = removeElements(tableContent, options.rounds + extraCards);    
        setMissingElements(removed.missingElements);
        setCards(removed.cards);
        setHand(initialHand(extraCards))
    }, [])

    const numberOfExtraCards = () => {
        if(options.difficulty === 'easy') return 1;
        if(options.difficulty === 'medium') return 2;
        if(options.difficulty === 'hard') return 3;
    }

    const initialHand = (extraCards) =>{
        const hand = [];
        for(let i = 0; i < options.rounds + extraCards; i++){
            hand.push(true);
        }
        return hand;
    }

    useEffect(getQuestion, [hand]);

    return (
        <Game>
            <PeriodicTable content={tableContent} elementsMissing={missingElements} cards={cards} answer={question.answer} updateHand={updateHand} hand={hand} router={router} rounds={options.rounds} currentRound={currentRound} setCurrentRound={setCurrentRound}>
                <Acknowledge/>
            </PeriodicTable>
            <Question handRef={handRef} click={getQuestion} content={question.content}/>
            {
                currentRound <= options.rounds?
                <Hand ref={handRef} cards={cards} hand={hand} difficulty={options.difficulty}/>:
                null
            }
        </Game>
    )
}

export default SinglePlayer;