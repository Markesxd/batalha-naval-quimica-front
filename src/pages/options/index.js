import style from './style.module.scss';
import { Button } from '../../components';
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import SinglePlayer from '../singlePlayer';


const Options = () => {
    const [info, setInfo] = useState({difficulty: 'easy', rounds: 5});
    const [rounds, setRounds] = useState(5);
    const [toGame, setToGame] = useState(false);

    const handleRadio = (e) => {
        const newInfo = info;
        newInfo.difficulty = e.target.value;
        setInfo(newInfo);
    }

    const handleSlider = (amount) => {
        const newInfo = info;
        newInfo.rounds = amount;
        setRounds(amount)
        setInfo(newInfo)
    }
    
    const handleClick = () => {
        setToGame(true);
    }

    return (
            toGame?(
                <SinglePlayer options={info}/>
            ):(
                <section className={style.container}>
                    <section>
                        <div className={style.image}>
                            <h2>Opções da Sala</h2>
                        </div>
                        <label>Dificuldade:</label>
                        <span>
                            <span>
                                <input type='radio' onChange={(e) => handleRadio(e)} id='easy' name='difficulty' value='easy' defaultChecked/>
                                <label htmlFor='easy'>Fácil</label>
                            </span>
                            <span>
                                <input type='radio' onChange={(e) => handleRadio(e)} id='medium' name='difficulty' value='medium'/>
                                <label htmlFor='medium'>Médio</label>
                            </span>
                            <span>
                                <input type='radio' onChange={(e) => handleRadio(e)} id='hard' name='difficulty' value='hard'/>
                                <label htmlFor='hard'>Difícil</label>
                            </span>
                        </span>
                        <label>Rodadas:</label>
                        <span>
                            <Slider
                                className={style.bar}
                                onChange={handleSlider}
                                min={5}
                                max={25}
                                trackStyle={{backgroundColor: '#04d361'}}
                                railStyle={{backgroundColor: '#9f75ff'}}
                                handleStyle={{borderColor: '#04d361', borderWidth: 4}}
                            />
                            <span type='text' className={style.num}>{info.rounds}</span>
                        </span>
                        <Button onClick={handleClick}>Criar</Button>
                    </section>
                </section>
            )
    )
}

export default Options