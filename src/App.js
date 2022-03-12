import { useState } from 'react';
import {SinglePlayer} from './pages';
import './general.scss';

function App() {

  const [router, setRouter] = useState({page: 'single', data: null});
  let score;
  const handleRoutes = (page, data) => {
    setRouter({page, data});
  }

  const cpScore = (value) => {
    score = value;
  }

  const Router = () => {
    switch(router.page){
      case 'single':
        return <SinglePlayer router={handleRoutes} setScore={cpScore}/>;
      case 'score':
        return( 
        <>
          <h1>Você fez {score} pontos</h1>
        </>);
      default:
        return <h1>default</h1>
    }
  }

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
