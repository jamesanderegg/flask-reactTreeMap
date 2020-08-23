import React from "react";
import "./whatIdo.css";
const WhatIDo = () => {

  return (
    
      <div className="what-ul" id="dashboard">
        <div className="button-div" id="dashboard" >
          <div className="what-div" id="dashboard">
            <i className="fas fa-chart-line fa-2x" id="dashboard"></i>
            <h4 className="what-h4" id="dashboard">
              Dashboards
            </h4>
            <div className="hide-li">
              <ul>
                <li className="what-li">Power Bi</li>
                <li className="what-li">Tableau</li>

                <li className="what-li">MatPlotLib</li>
                <li className="what-li">D3</li>
                <li className="what-li">Excel/VBA</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="button-div" id="wrangle" >
          <div className="what-div" id="wrangle">
            <i className="fas fa-table fa-2x" id="wrangle"></i>
            <h4 className="what-h4" id="wrangle">
              Data Wrangling
            </h4>
            <div className="hide-li">
              <ul>
                <li className="what-li">Pandas / Numpy</li>
                <li className="what-li">BeautifulSoup</li>
                <li className="what-li">Selenium</li>

                <li className="what-li">SQL/noSQL</li>
                <li className="what-li">API connections</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="button-div" id="fullStack" >
          <div className="what-div" id="fullStack">
            <i className="fas fa-database fa-2x" id="fullStack"></i>
            <h4 className="what-h4" id="fullStack">
              Full Stack Development
            </h4>
            <div className="hide-li">
              <ul>
                <li className="what-li">Python Flask / Node</li>
                <li className="what-li">SQL / noSQL / AWS </li>
                <li className="what-li">HTML / CSS / JS</li>
                <li className="what-li">React / CMS</li>
              </ul>
            </div>
          </div>
        </div>
        <h6 className="bottom-h6">
          This website was built with a Python, Flask-backend and a Javascript,
          React front-end with a MySQL database. I used a D3 treemap for the
          layout.
        </h6>
      </div>
    
  );
};

export default WhatIDo;
