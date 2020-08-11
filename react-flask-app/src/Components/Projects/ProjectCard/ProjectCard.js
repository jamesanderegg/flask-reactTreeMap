import React from "react";
import {Link,Route
} from "react-router-dom";
import "./projectCard.css";
const ProjectCard = ({ projectList, setLoadedProject }) => {
  return (
    <div className="card-container">
      {projectList.map((project) => (
        <div className="card" key={project.id}>
          <img
            className="card-img-top card-image"
            src={project.image}
            alt={project.id}
          />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">{project.description}</p>
            <ul className="projects-tags-ul">
              {project.tags.split(",").map((tag) => {
                return (
                  <li key={tag} className="project-tag">
                    <div className="projects-tags-button" id={tag}>
                      {tag}{" "}
                    </div>
                  </li>
                );
              })}
            </ul>
            <Link to={`/${project.id}`} className="load-button" onClick={setLoadedProject}>Load {project.id}</Link>
            {/* <a href="#" className="btn btn-primary">
              Load {project.id} project
            </a> */}
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
