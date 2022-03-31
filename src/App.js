import { useState } from 'react';
import {SinglePlayer, Landing} from './pages';
import './general.scss';

function App() {

  const [router, setRouter] = useState({page: 'landing', data: null});
  const handleRoutes = (page, data) => {
    setRouter({page, data});
  }

  const Router = () => {
    switch(router.page){
      case 'single':
        return <SinglePlayer router={handleRoutes}/>;
      case 'landing':
        return <Landing router={handleRoutes}/>
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
