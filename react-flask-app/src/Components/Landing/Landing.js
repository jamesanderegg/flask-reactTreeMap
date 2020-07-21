import React from "react";
import RandoBarChart from "../RandoBarChart";



const Landing = (
  <div className="container">
    <div className="jumbotron mt-5">
      
        <div className="row">
          <div className="col-md-5 mx-auto">
            <RandoBarChart />

          </div>
          <div className="col-lg-7 mx-auto">
            <h1 className="display-6">WELCOME</h1>
            <p className="lead">
              My name is James Anderegg and I am an Artist turned software developer. I work as a freelance Data Scientist
              and Web Developer doing business as DataFluent.  </p>
          </div>
        </div>
        <h5 style={{textAlign: 'center'}}>Click anywhere to Enter</h5>

        
      
    </div>
  </div>
);

export default Landing;
