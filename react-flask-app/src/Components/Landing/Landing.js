import React from "react";
import RandoBarChart from "../RandoBarChart";
import "./Landing.css";
import WhatIDo from '../WhatIDo/WhatIdo'
import Logos from '../Logos/Logos'
const Landing = (
  <div className="container">
    <div className="jumbotron mt-5 jumbo">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <RandoBarChart />
        </div>
        <div className="col-lg-7 mx-auto">
          <h1 className="display-6">WELCOME</h1>
          <p className="lead">
            My name is James Anderegg and I am an artist turned software
            developer. I work as a freelance Data Scientist and Web Developer
            doing business as DataFluent.{" "}
          </p>
        </div>
      </div>
      <div className="row landing-logos-row">
      <div className="col-lg landing-enter-col"><h3 style={{ margin: "20px" }}>Click anywhere to enter!</h3></div>
        <div className="col landing-logos-col"><Logos /></div>
      </div>
      
      
    </div>
    <WhatIDo />

  </div>
);

export default Landing;
