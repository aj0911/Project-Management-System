import React, { useState } from 'react'
import './Login.css'
import { FaEye, FaEyeSlash} from 'react-icons/fa'
import { frames, roles } from '../../Helper/Data';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // States
  const [isPassVisible,setIsPassVisible] = useState(false);
  const navigate = useNavigate();
  const [frame,setFrame] = useState(frames.LOGIN);

  // Functions
  const handleLogin = (e)=>{
    e.preventDefault();
    navigate('/Admin')
  }

  const handleRegister = (e)=>{
    e.preventDefault();
    navigate('/Admin')
  }


  return (
    <div className="auth">
      <div className={`login ${frame===frames.REGISTER?'register':'log'}`}>
        <div className="left">
          {
            frame===frames.LOGIN?
            <>
              <img src={require('../../Assets/Images/logo.png')} />
              <h3>Welcome back!</h3>
              <p>Enter to get unlimited access of the project management system</p>
              <form onSubmit={(e)=>handleLogin(e)}>
                <div className="formControl">
                  <h3>Email</h3>
                  <div className="input">
                    <input type="email" placeholder='Enter your email address' />
                  </div>
                </div>
                <div className="formControl">
                  <h3>Password</h3>
                  <div className="input">
                    <input type={isPassVisible?'text':'password'} placeholder='Enter password' />
                    {
                      isPassVisible?<FaEye className='icon' onClick={()=>setIsPassVisible(false)}/>:<FaEyeSlash className='icon'  onClick={()=>setIsPassVisible(true)}/>
                    }
                  </div>
                </div>
                <div className="formControl">
                  <h3>Select Role</h3>
                  <div className="input">
                    <select>
                      <option value="">Select Role</option>
                      {
                        Object.keys(roles).map((role,key)=>(
                          <option key={key} value={roles[role]}>{roles[role]}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <p className='forgot'>Forgot your password ?</p>
                <input type="submit" value="Log In" />
                <p>Don't have an account? <span onClick={()=>setFrame(frames.REGISTER)}>Register here</span></p>
              </form>
            </>:
            <>
              <img src={require('../../Assets/Images/logo.png')} />
              <h3>Register</h3>
              <p>Sign up to create an account for the project management system</p>
              <form onSubmit={(e)=>handleRegister(e)}>
                <div className="formControl">
                  <h3>Name</h3>
                  <div className="input">
                    <input type="text" placeholder='Enter your name' />
                  </div>
                </div>
                <div className="formControl">
                  <h3>Email</h3>
                  <div className="input">
                    <input type="email" placeholder='Enter your email address' />
                  </div>
                </div>
                <div className="formControl">
                  <h3>Password</h3>
                  <div className="input">
                    <input type={isPassVisible?'text':'password'} placeholder='Enter password' />
                    {
                      isPassVisible ? <FaEye className='icon' onClick={()=>setIsPassVisible(false)}/> :
                      <FaEyeSlash className='icon' onClick={()=>setIsPassVisible(true)}/>
                    }
                  </div>
                </div>
                <div className="formControl">
                  <h3>Select Role</h3>
                  <div className="input">
                    <select>
                      <option value="">Select Role</option>
                      {
                        Object.keys(roles).map((role,key)=>(
                          <option key={key} value={roles[role]}>{roles[role]}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
                <input type="submit" value="Register" />
                <p>Already have an account? <span onClick={()=>setFrame(frames.LOGIN)}>Login here</span></p>
              </form>
            </>
          }
        </div>
        <div className="right"><img src={require('../../Assets/Images/login.png')} /></div>
      </div>
    </div>
  )
}

export default Login