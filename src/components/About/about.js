import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skills from './skillsData';
import './about.css'; 


const Skill = ({ name, icon, color }) => {
    return (
      <div className="skill">
        <FontAwesomeIcon icon={icon} style={{color: color}} />
        <span className="iconName">{name}</span>
      </div>
    );
  };


const About = () => {
    return (
        <section id="aboutMe">
        <span className="aboutMeTitle">Getting to Know Me</span>
        <p className="aboutMePara">Hi, I’m Yaman Hannineh, currently studying Information Technology at NJIT, where I’ve maintained a 3.9 GPA. I thrive on finding creative tech solutions, a skill I've developed further at Radical AI by integrating AI to personalize user experiences. Outside of tech, I manage at IHOP, where I’ve enhanced sales and improved team efficiency. I’m enthusiastic about the opportunity to leverage my tech expertise and leadership skills in dynamic environments, contributing to innovative IT projects across various industries. <br/><br/>Below are the technical skills I have obtained.
        </p>
        <div className="skillsList">
          {skills.map(skill => (
            <Skill key={skill.name} name={skill.name} icon={skill.icon} color={skill.color}  />
          ))}
        </div>
        </section>
      );
    };

export default About
