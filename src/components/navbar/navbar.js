import React from 'react';
import './navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="navbarContent">
        {/* <img src={logo} alt="Logo" className="logo" /> */}
        <h2 className="desktopMenuListItem">&lt;Y/&gt;</h2>
        <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
            <Link activeClass='active' to='aboutMe' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">About</Link>
            <Link activeClass='active' to='projectsSection' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
        </div>
        <div className="contact">
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500}className="desktopMenuListItem">Contact</Link>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
