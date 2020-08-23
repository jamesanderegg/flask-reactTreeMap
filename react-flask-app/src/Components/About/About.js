import React from "react";
import Skills from "../Skills/Skills";
import "./about.css";
const About = () => {
  return (
    <div className="container">
      <h3 className="about-title">About me</h3>
      <p className="about-p">
        I was born to think outside the box, attentive to detail and eager to
        learn. Always learning new talents and challenging myself. Team
        orientated and lover of all people. I was born and raised in Golden,
        Colorado and I still live in Coloardo.   
      </p>
      <Skills />
    </div>
  );
};

export default About;
