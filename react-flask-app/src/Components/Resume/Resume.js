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
        <div className="resume-button">
        <i className="far fa-file fa-2x resume-button"></i>
        <h5>My Resume</h5>
        </div>
      </div>
      <div className="resume-div" >
        <div
          className="github-button" onClick={e => window.open("https://github.com/jamesanderegg")}>
          
          <i className="fab fa-github fa-2x"></i>

          <h5>GitHub</h5>
        </div>
      </div>
      <div
        className="resume-div"
        onMouseEnter={() => setTextHidden(true)}
        onMouseLeave={() => setTextHidden(false)}
        onClick={() =>
          navigator.clipboard.writeText("jamesanderegg@jamesanderegg.com")
        }
      >
      <div className="email-button">
        <i className="fas fa-at fa-2x"></i>
        <h5>Email</h5>
        <h6>Click to copy to clipboard</h6>
        
        {textHidden && (
          <>
            <p className="copy-email">jamesanderegg@jamesanderegg.com</p>
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export default Resume;
