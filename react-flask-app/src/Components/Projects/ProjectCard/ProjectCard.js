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
            <h5 className="card-title">{project.name}</h5>
              <img
                className="card-img-top card-image"
                src={project.image}
                alt={project.id}
              />
              
            </div>
            <div className="back">
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <ul className="projects-tags-ul">
                  {project.tags.split(",").map((tag) => {
                    return (
                      <li key={tag} className="project-tag">
                        
                          {tag}{" "}
                        
                      </li>
                    );
                  })}
                </ul>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.url}
                  className="url-button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.urlText}
                </a>
                
                {project.website ? (<a
                  href={project.website}
                  className="website-button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Load Client Website
                </a>) : (null)}
                {project.component ? (<Link
                  to={`/${project.id}`}
                  className="load-button"
                  onClick={setLoadedProject}
                >
                  Load {project.type}
                </Link>) : (null)}
                
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
