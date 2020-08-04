import React, { useState } from "react";
import "./resume.css";
import axios from "axios";

function Resume() {
  const [textHidden, setTextHidden] = useState(false);

  const getResume = () => {
    return axios
      .get("/uploads/resume.pdf", {
        responseType: "blob",
      })
      .then((response) => {
        const file = new Blob([response.data], { type: "application/pdf" });

        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch((error) => {
        console.log(error);
      });
      
  };
  return (
    <div className="resume-ul">
      <div className="resume-div" onClick={getResume}>
        {" "}
        <i className="far fa-file fa-2x resume-button"></i>
        <h5>My Resume</h5>
      </div>
      <div className="resume-div">
        <a
          className="github-button"
          href="https://github.com/jamesanderegg"
          target="_blank"
        >
          <i className="fab fa-github fa-2x"></i>

          <h5>GitHub</h5>
        </a>
      </div>

      <div className="resume-div" onMouseEnter={() => setTextHidden(true)}
          onMouseLeave={() => setTextHidden(false)}
          onClick={() =>navigator.clipboard.writeText('jamesanderegg@jamesanderegg.com')}>
          <p className="copy-clip">Click to copy Email</p>
        <i className="fas fa-at fa-2x"></i>
        <h5
          
        >
          Email
        </h5>
        {textHidden && <>
        <p className="copy-email">jamesanderegg@jamesanderegg.com</p></>}
      </div>
    </div>
  );
}

export default Resume;
