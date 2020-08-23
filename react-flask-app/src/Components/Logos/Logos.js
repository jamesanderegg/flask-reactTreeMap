import React from "react";
import "./logos.css";

const Logos = () => {
  return (
    <ul className="logos-ul">
      <li className="logos-li">
        <i className="fab fa-python python fa-2x" alt="Python"></i> Python
      </li>
      <li className="logos-li">
      <i className="fab fa-js javascript fa-2x" alt="Javascript"></i> JavaScript 
      </li>
      <li className="logos-li">
        <i className="fab fa-react react fa-2x" alt="React"></i> React
      </li>
      <li className="logos-li">
        <img
          className="logos-image"
          src="https://www.jamesanderegg.com/uploads/images/power-bi.png"
          alt="Microsoft Power Bi"
        ></img>{" "}
        PowerBi
      </li>
    </ul>
  );
};
export default Logos;
