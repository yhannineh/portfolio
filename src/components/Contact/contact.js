import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin} from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import './contact.css';

const contact = () => {
  return (
    <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className="contactForm">
            <input type="text" className="name" placeholder='Your Name'/>
            <input type="text" className="email" placeholder='Your Email'/>
            <textarea className="msg" name="message" rows="3" placeholder='Your Message'></textarea>
            <button className="submitBtn" type="submit" value='Send'>Submit</button>
            <div className="links">
                <a className="link" href="https://www.linkedin.com/in/yamanhannineh/" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={ {color: "#0077B5"}}/></a>
                <a className="link" href="mailto: yamanhannineh@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} style={ {color: "#D44638"}}/></a>
            </div>
        </form>
      
    </div>
  )
}

export default contact
