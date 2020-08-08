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
        Colorado and I still live in Coloardo. I originally went to school for
        Fine Art, with an emphasis in painting but I began teaching myself to
        code about 5 years ago.
      </p>
      <Skills />
    </div>
  );
};

export default About;
