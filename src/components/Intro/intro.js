import React from "react";
import "./intro.css";
import profile from "../../assets/profile.png";

const Intro = () => {
  return (
    <div className="color">
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">
            I'm <span className="introName">Yaman</span> <br />
            a Software Engineer
          </span>
          <p className="introPara">
            Information Technology student with a passion for creating innovative solutions.
          </p>
          <a href="https://github.com/yhannineh" target="blank" rel="noopener noreferrer">
            <button className="introBtn">View Github</button>
          </a>
        </div>
        <img src={profile} alt="Profile" className="bg" />
      </section>
    </div>
  );
};

export default Intro;
