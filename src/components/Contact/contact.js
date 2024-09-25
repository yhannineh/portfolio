import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import emailjs from '@emailjs/browser';
import React, {useRef} from 'react'
import './contact.css';

const Contact = () => {
  const form = useRef();
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zwbisrt', 'template_ljwn09a', form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="color">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to get in touch with me.</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='from_name'/>
          <input type="text" className="email" placeholder='Your Email' name='from_email'/>
          <textarea className="msg" name="message" rows="3" placeholder='Your Message'></textarea>
          <button className="submitBtn" type="submit" value='Send'>Submit</button>
          <div className="links">
            <a className="link" href="https://www.linkedin.com/in/yamanhannineh/" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#0077B5" }} /></a>
            <a className="link" href="mailto: yamanhannineh@gmail.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} style={{ color: "#D44638" }} /></a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
