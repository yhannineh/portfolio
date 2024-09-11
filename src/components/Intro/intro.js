import React from 'react'
import './intro.css';
import profile from '../../assets/profile.png'
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
       <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Yaman</span> <br />Software Engineer</span>
            <p className="introPara">I am Senior IT student studying at NJIT, aspiring to be a Software Engineer.</p>
            <Link><button className="introBtn">Learn More</button></Link>
       </div>
       <img src={profile} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro
