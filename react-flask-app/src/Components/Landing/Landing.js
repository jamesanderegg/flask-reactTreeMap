import React from "react";
import RandoBarChart from "../RandoBarChart";
import "./Landing.css";

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
      <h5 style={{ textAlign: "center" }}>Click anywhere to enter!</h5>
      <ul className="layout-ul">
        <li className="layout-li">
          <i className="fas fa-database" id="layout-icon"></i>
          <p className="layout-p" id="layout-fullStack">
            Full Stack Development
          </p>
        </li>
        <li className="layout-li">
          <i className="fas fa-table" id="layout-icon"></i>
          <p className="layout-p" id="layout-wrangle">
            Data Wrangling
          </p>
        </li>
        <li className="layout-li">
          <i className="fas fa-chart-line" id="layout-icon"></i>

          <p className="layout-p" id="layout-dashboard">
            Dashboards
          </p>
        </li>
      </ul>
    </div>
  </div>
);

export default Landing;
