import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { DashboardIndex, DashboardIndexSearch, DashboardMenus, DashboardOptions } from '../../../Helper/Data'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'
import PatentFilling from '../IPR/PatentFilling'

const Dashboard = () => {
  // States
  const [fullView,setFullView] = useState(true);
  const [navPointer,setNavPointer] = useState(0);
  const [data,setData] = useState(null);

  // Functions
  const handleSearchChange = (value)=>{
    if(value==='')setData(DashboardOptions)
    else{
      const menus = DashboardIndexSearch(value)
      setData([{
        name:'Search',
        menus
      }])
    }
  }

  // Rendering
  useEffect(()=>{
    setData(DashboardOptions)
  },[])

  return (
    <div id="Dashboard">
      <div className={`left ${fullView?'':'active'}`}>
        <div className="header">
          <div className="logo">
            <img src={require('../../../Assets/Images/logo.png')} alt="" />
            <h1>DTU-IRD</h1>
          </div>
          <div onClick={()=>setFullView(!fullView)} className={`menuBox`}>
            <div className="menu"></div>
          </div>
        </div>
        <nav>
          {
            data?.map((option,i)=>(
              <div className="set" key={i}>
                {
                  option.name?
                  <h3>{option.name}</h3>:''
                }
                {
                  option.menus.map((menu,j)=>(
                    <div onClick={()=>{setNavPointer(DashboardIndex(menu.name));
                      if(window.innerWidth<1000)setFullView(true);
                    }} key={j} className={`tag ${DashboardMenus[navPointer]?.name===menu.name?'active':''}`}>
                      <div className="icon">{menu.icon}</div>
                      <h3>{menu.name}</h3>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </nav>
      </div>
      <div className="right">
        <div className="header">
          <div className="left">
            <div onClick={()=>setFullView(!fullView)} className="menuBox">
              <div className="menu"></div>
            </div>
            <div className="content">
              <h3>
                Abhinav Jha
                <AiFillStar className='star'/>
              </h3>
              <div className="process">
                <div className="square"></div>
                <h5>On Track</h5>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="input">
              <AiOutlineSearch className='icon'/>
              <input onChange={event=>handleSearchChange(event.target.value)} type="text" placeholder='Search' />
            </div>
            <MdAdd className='add'/>
            <img src={require('../../../Assets/Images/logo.png')} />
          </div>
        </div>
        <div className="wrapper">
          {
            (()=>{
              switch(navPointer){
                case DashboardIndex('Patent Filling'):
                  return <PatentFilling/>
              }
            })()
          }
        </div>
      </div>
    </div>
  )
}

export default Dashboard