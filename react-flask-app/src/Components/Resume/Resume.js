import React, {Link} from "react";
import "./resume.css";
import axios from "axios";
import { PDFDownloadLink, Document, Page } from "react-pdf";

const MyDoc = () => (
  <Document>
    <Page>// My document data</Page>
  </Document>
);

function Resume() {
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
      <a className="github-button" href="https://github.com/jamesanderegg" target="_blank">

        <i className="fab fa-github fa-2x"></i>
        
        <h5>GitHub</h5>
        </a>
      </div>
      
      <div className="resume-div">
        <i className="fas fa-at fa-3x"></i>
        <h5>Email</h5>
      </div>
    </div>
  );
}

export default Resume;
