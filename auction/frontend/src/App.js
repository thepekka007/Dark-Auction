import logo from './logo.svg';
import './App.css';

import { Routes,Route  } from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='Home' element=<Home/>></Route>
    </Routes>
    </div>
  );
}

export default App;
