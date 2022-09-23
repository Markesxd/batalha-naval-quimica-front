import { useState } from 'react';
import {Landing} from './pages';
import './general.scss';
import Options from './pages/options';

function App() {

  const [router, setRouter] = useState({page: 'landing', data: null});
  const handleRoutes = (page, data) => {
    setRouter({page, data});
  }

  const Router = () => {
    switch(router.page){
      case 'single':
        return <Options select={'single'} router={handleRoutes}/>
      case 'create':
        return <Options select={'create'} router={handleRoutes}/>
      case 'join':
        return <Options select={'join'} router={handleRoutes}/>
      default:
        return <Landing router={handleRoutes}/>
    }
  }

  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
