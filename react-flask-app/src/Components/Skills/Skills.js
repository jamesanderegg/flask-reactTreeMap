import React from "react";
import "./skills.css";
const Skills = () => {
  return(
    <>
    <h5 className="skills-title">My Best Tools:</h5>
 <div className="row skills-row">
 
        <ul className="skills-ul">
        
          <h5 className="skills-title">Python</h5>
          <li className="skills-li">Pandas / Numpy</li>
          <li className="skills-li"> Flask</li>
          <li className="skills-li">BeautifulSoup/ Selenium</li>
          <li className="skills-li">API integration</li>
          <li className="skills-li"> Matplot Lib</li>
          <li className="skills-li"> SQLAlchemy</li>
        </ul>

        <ul className="skills-ul">
          <h5 className="skills-title">Javascript</h5>

          <li className="skills-li"> React</li>
          <li className="skills-li"> Lodash</li>
          <li className="skills-li"> D3</li>
          <li className="skills-li"> Leaflet</li>
          <li className="skills-li"> Seaborn</li>
          <li className="skills-li"> Plotly</li>
        </ul>

        <ul className="skills-ul">
          <h5 className="skills-title">Miscellaneous</h5>
          <li className="skills-li"> SQL</li>
          <li className="skills-li"> Excel</li>
          <li className="skills-li"> PowerBi</li>
          <li className="skills-li"> Machine Learning</li>
          <li className="skills-li"> Tableau</li>
          <li className="skills-li"> Kaggle</li>
        </ul>
      </div>
      </>
    
)};

export default Skills;
