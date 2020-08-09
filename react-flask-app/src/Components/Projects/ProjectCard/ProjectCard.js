import React from "react";
import './projectCard.css'
const ProjectCard = ({ projectList }) => {
    
    projectList.map((project)=> {
      project.tags.split(',').map((el)=>console.log(el))
    })

    


  return (
    
      <div className="card-container">
      {projectList.map((project) => (
        <div className="card" key={project.id}>
        <img className="card-img-top card-image" src={project.image} alt={project.id} />
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
              {project.description}
            </p>
            <a href="#" className="btn btn-primary">
              Load {project.id} project
            </a>
            <ul className="projects-tags-ul">
        {project.tags.split(',').map((tag) => (
          <li key={tag} className="project-tag">
            <div className="projects-tags-button" id={tag}>
              {tag}{" "}
                            
            </div>
          </li>
        ))}
      </ul>
          </div>
        </div>
      ))}
      </div>
    
  );
};

export default ProjectCard;
