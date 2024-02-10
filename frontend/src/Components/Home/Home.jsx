import React, { useEffect, useRef } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom'
import { features, footerLinks } from '../../Helper/Data';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaAngleRight } from 'react-icons/fa'

const Home = () => {
    // states
    const navigate = useNavigate();

    useEffect(()=>{
        document.addEventListener('scroll',()=>{
            const header = document.querySelector('header');
            if(window.scrollY>20)header?.classList.add('fixed')
            if(window.scrollY<20)header?.classList.remove('fixed')
        })
    },[])


  return (
    <div id="Home">
        <header>
            <div className="logo">
                <img src={require('../../Assets/Images/logo.png')} alt="" />
                <h1>DTU IRD</h1>
            </div>
            <nav>
                <a href="#hero">Home</a>
                <a href="#features">Features</a>
                <a href="#Start">Join</a>
            </nav>
            <button onClick={()=>navigate('/Login')}>Login</button>
        </header>
        <section id="hero">
            <div className="top">
                <h3>Discover of Project</h3>
                <h2>Efficiency with <span>DTU-IRD</span></h2>
                <p>Streamline project management with DTU IRD. From planning to execution, empower your team with efficient tools and collaborative workflows.</p>
                <div className="btns">
                    <button>Join as a Faculty</button>
                    <button>Projects Preview</button>
                </div>
            </div>
            <div className="bottom">
                <img src={require('../../Assets/Images/hero-1.png')} alt="" />
            </div>
        </section>
        <section id="features">
            <h2>Features</h2>
            <div className="data">
                {
                    features.map((feature,key)=>(
                        <div key={key} className="feature">
                            <h3>{feature.name}</h3>
                            <p>{feature.text}</p>
                            <img src={feature.img} alt="" />
                        </div>
                    ))
                }
            </div>
        </section>
        <div id="Start">
            <h3>Ready to Start your projects? Get Started Today!</h3>
            <button>
                <h3>Get Started</h3>
                <AiOutlineArrowRight className='icon'/>
            </button>
        </div>
        <footer>
            <div className="content">
                <div className="left">
                    <div className="logo">
                        <img src={require('../../Assets/Images/logo.png')} alt="" />
                        <h2>DTU IRD</h2>
                    </div>
                    <div className="newsletter">
                        <h3>Get Update our Newsletter</h3>
                        <div className="box">
                            <input type="email" placeholder='Your email adress' />
                            <button><FaAngleRight/></button>
                        </div>
                    </div>
                </div>
                <div className="right">
                    {
                        footerLinks.map(({name,links},i)=>(
                            <div key={i} className="content">
                                <h3>{name}</h3>
                                <div className="links">
                                    {
                                        links.map(({name,link},j)=>(
                                            <a href={link} key={j}>{name}</a>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <p>&copy;DTU-IRD {(new Date(Date.now())).getFullYear()}, All Rights Reserved.</p>
        </footer>
    </div>
  )
}

export default Home