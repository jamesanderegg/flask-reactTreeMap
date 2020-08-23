import React from "react";
import Skills from "../Skills/Skills";
import "./about.css";
import Logos from "../Logos/Logos"
const About = () => {
  return (
    <div className="container">
      <h3 className="about-title">About me</h3>
      <p className="about-p">
        Born to think outside the box, attentive to detail and eager to
        learn. Always learning new talents and challenging myself. Team
        orientated and lover of all people. Born and raised in Golden,
        Colorado.
      </p>
      <h5 className="skills-title">My Best Tools:</h5>
      <Logos />
      <Skills />
      
    </div>
  );
};

export default About;
