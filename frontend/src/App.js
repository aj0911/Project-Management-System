import { Route, Routes } from 'react-router-dom';
import './index.css';
import Login from './Components/Auth/Login';
import Home from './Components/Home/Home';
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import { useEffect, useRef } from 'react';
import { colors } from './Helper/Data';

function App() {
  // Toggling Day and Night mode
  const toggleDayNight = ()=>{
    const div = document.querySelector('.dayNightMode')
    if(div.classList.contains('night')){//Its Night mode already
      colors.day.map(obj=>{
        Object.keys(obj).map(key=>{
          document.documentElement.style.setProperty(key,obj[key])
        })
      })
    }
    else{
      colors.night.map(obj=>{
        Object.keys(obj).map(key=>{
          document.documentElement.style.setProperty(key,obj[key])
        })
      })
    }
    div.classList.toggle('night')
  }
  
  return (
    <>
      <Routes>
        <Route path='/Login' element={<Login />}/>
        <Route path='/Admin' element={<Dashboard />}/>
        <Route path='/'  element={<Home toggleDayNight={toggleDayNight}/>}/>
      </Routes>
    </>
  );
}

export default App;
