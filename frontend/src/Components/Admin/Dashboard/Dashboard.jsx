import React from 'react'
import './Dashboard.css'
import { DashboardOptions } from '../../../Helper/Data'
import { AiFillStar, AiOutlineSearch } from 'react-icons/ai'
import { MdAdd } from 'react-icons/md'

const Dashboard = () => {
  return (
    <div id="Dashboard">
      <div className="left">
        <div className="header">
          <div className="logo">
            <img src={require('../../../Assets/Images/logo.png')} alt="" />
            <h1>DTU-IRD</h1>
          </div>
          <div className="menu"></div>
        </div>
        <nav>
          {
            DashboardOptions.map((option,i)=>(
              <div className="set" key={i}>
                {
                  option.name?
                  <h3>{option.name}</h3>:''
                }
                {
                  option.menus.map((menu,j)=>(
                    <div className="tag">
                      {menu.icon}
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
            <div className="box">
              <div className="menu"></div>
            </div>
            <div className="content">
              <h3>Abhinav Jha</h3>
              <div className="process">
                <div className="square"></div>
                <h5>On Track</h5>
              </div>
            </div>
            <AiFillStar/>
          </div>
          <div className="right">
            <div className="input">
              <AiOutlineSearch/>
              <input type="text" placeholder='Search' />
            </div>
            <MdAdd/>
            <img src={require('../../../Assets/Images/logo.png')} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard