import api from '../../api';
import Card from './card';
import style from './style.module.scss';

const Team = ({teamName, students, num, select, setStudents}) => {

    const getCollor = () => {
        switch(num){
            case 8:
                return '#392F5A';
            case 1:
                return '#9DD9D2';
            case 2:
                return '#414288';
            case 3:
                return '#682D63';
            case 4:
                return '#04E824';
            case 5:
                return '#A11692';
            case 6:
                return '#FFC857';
            case 7:
                return '#92140C';
            default:
                return 'gray';
        }
    }

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const drop = (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('Text');
        const newStudents = students
        newStudents.forEach(student => {
            if(student.id === id){
                student.team = num;
                return;
            } 
        });
        api.put('/player', {id: id, team: num});
        setStudents(newStudents);
    }

    const handelStudents = () => {
        const teamStudents = students.filter((student) => {
            if(student.team === num) return true;
            return false;
        })
        return teamStudents.map((student) => {
            return <Card num={student.id} key={student.id} name={student.name} select={select}/>
        });
    }
    return (
        <div className={style.container} style={{background: getCollor()}} onDragOver={select === 'create' ? e => allowDrop(e) : null} onDrop={select === 'create' ? e => drop(e) : null}>
            <h4>{teamName}</h4>
            {handelStudents()}
        </div>
    )
}

export default Team