import React from "react";
import "./logos.css";

const Logos = () => {
  return (
    <ul className="logos-ul">
      <li className="logos-li">
        <i className="fab fa-python python" alt="Python"></i> Python
      </li>
      <li className="logos-li">
        JavaScript <i className="fab fa-js javascript" alt="Javascript"></i>
      </li>
      <li className="logos-li">
        D3 <i className="fab fa-react react" alt="React"></i>React
      </li>
      <li className="logos-li">
        <img
          className="logos-image"
          src="https://jamesanderegg/uploads/images/power-bi.png"
          alt="Microsoft Power Bi"
        ></img>{" "}
        Power Bi
      </li>
    </ul>
  );
};
export default Logos;
