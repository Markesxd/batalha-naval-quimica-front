import style from './style.module.scss';
import { Button } from '../../components';
import { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import SinglePlayer from '../singlePlayer';
import WaitingRoom from '../waitingRoom';
import api from '../../api';


const Options = ({select, router}) => {
    const [info, setInfo] = useState({difficulty: 'easy', rounds: 5, players: 2, time: 10, name: 'Aluno', key: 'carregando...', teacher: 'Professor', students: []});
    const [rounds, setRounds] = useState(5);
    const [players, setPlayers] = useState(2);
    const [toRoom, setToRoom] = useState(false);

    const handleRadio = (e) => {
        const newInfo = info;
        newInfo.difficulty = e.target.value;
        setInfo(newInfo);
    }

    const handleSlider = (amount, field) => {
        const newInfo = info;
        newInfo[field] = amount;
        setRounds(amount)
        setInfo(newInfo)
    }
    
    const handleClick = async(e) => {
        e.target.disabled = true;
        switch(select){
            case 'create':
                    const {data} = await createRoom();
                    const newInfo = info;
                    newInfo.key = data.key;
                    setInfo(newInfo);
                break;
                case 'join':
                    try{
                        joinRoom();
                    }
                    catch(error){
                        console.log(error)
                        return 
                    }
                break;
                default:
        }
        setToRoom(true);
    }
    
    const createRoom = async () => {
        const body = {
            difficulty: info.difficulty,
            rounds: info.rounds,
            time: info.time,
            teacher: info.teacher,
            numberOfTeams: info.players
        }
        try{
            return await api.post(`/room`, body);
        } catch(error){
            return false;
        }
    }

    const joinRoom = async () => {
        const body = {
            name: info.name
        }

        await api.post(`/room/${info.key}/join`, body);
    }

    const handleAttribute = (e, atribute) => {
        const newInfo = info;
        newInfo[atribute] = e.target.value;
        setInfo(newInfo);
    }

    const handleEntry = () => {
        return select === 'join'?
        (<>
            <label>Nome:</label>
            <input onChange={(e) => handleAttribute(e, 'name')}/>
            <label>Sala:</label>
            <input onChange={(e) => handleAttribute(e, 'key')}/>
        </>):
        (<>
                {select === 'create'?<>
                <label>Nome:</label>
                <input onChange={(e) => handleAttribute(e, 'teacher')}/>
            </>:null}                        
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
                    onChange={(amount)=>{handleSlider(amount, 'rounds')}}
                    min={5}
                    max={25}
                    trackStyle={{backgroundColor: '#04d361'}}
                    railStyle={{backgroundColor: '#9f75ff'}}
                    handleStyle={{borderColor: '#04d361', borderWidth: 4}}
                />
                <span type='text' className={style.num}>{info.rounds}</span>
            </span>
            {select === 'create'?
                (<>
                    <label>Número de Equipes:</label>
                    <span>
                        <Slider
                            className={style.bar}
                            onChange={(amount)=>{handleSlider(amount, 'players')}}
                            min={2}
                            max={4}
                            trackStyle={{backgroundColor: '#04d361'}}
                            railStyle={{backgroundColor: '#9f75ff'}}
                            handleStyle={{borderColor: '#04d361', borderWidth: 4}}
                        />
                        <span type='text' className={style.num}>{info.players}</span>
                    </span>
                    <label>Tempo da Rodada:</label>
                    <span>
                        <Slider
                            className={style.bar}
                            onChange={(amount)=>{handleSlider(amount, 'time')}}
                            min={10}
                            max={45}
                            step={5}
                            trackStyle={{backgroundColor: '#04d361'}}
                            railStyle={{backgroundColor: '#9f75ff'}}
                            handleStyle={{borderColor: '#04d361', borderWidth: 4}}
                        />
                        <span type='text' className={style.num}>{info.time} s</span>
                    </span>
                </>):null
            } 
        </>)
    }

    return (
            toRoom?(
                select === 'single'?
                <SinglePlayer info={info} router={router}/>:
                <WaitingRoom info={info} setInfo={setInfo} router={router} select={select}/>
            ):(
                <section className={style.container}>
                    <section>
                        <div className={style.image}>
                            {
                            select === 'join'?
                            <h2>Entrar</h2>:
                            <h2>Opções {select === 'create'?'da Sala':null}</h2>
                            }
                        </div>
                        {handleEntry()}
                        <Button onClick={(e) => handleClick(e)}>{select === 'create'?'Criar':'Jogar'}</Button>
                    </section>
                </section>
            )
    )
}

export default Options