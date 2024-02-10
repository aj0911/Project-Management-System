import { Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/Login' Component={Login}/>
        <Route path='/' Component={Home}/>
      </Routes>
    </>
  );
}

export default App;
