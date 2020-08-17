import React from "react";
import { Link, Route } from "react-router-dom";
import "./projectCard.css";
import ScrollLock, { TouchScrollable } from 'react-scrolllock';

const ProjectCard = ({ projectList, setLoadedProject }) => {

  
  return (
    <div className="gallery" >
      {projectList.map((project) => (
        <div className="card-container" key={project.id}>
          <input type="checkbox" id={project.id} />
          <label className="card" key={project.id} htmlFor={project.id}>
            <div className="front front-overlay">
              <img
                className="card-img-top card-image"
                src={project.image}
                alt={project.id}
              />
              <h5 className="card-title">{project.name}</h5>
            </div>
            <div className="back">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <ul className="projects-tags-ul">
                  {project.tags.split(",").map((tag) => {
                    return (
                      <li key={tag} className="project-tag">
                        
                          {tag}{" "}
                        
                      </li>
                    );
                  })}
                </ul>
                <Link
                  to={`/${project.id}`}
                  className="load-button"
                  onClick={setLoadedProject}
                >
                  Load {project.id}
                </Link>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
