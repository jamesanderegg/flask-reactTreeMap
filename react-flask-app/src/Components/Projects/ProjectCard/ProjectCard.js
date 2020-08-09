import React, {useState} from "react";
import './projectCard.css'
const ProjectCard = ({ projectList }) => {
    const [finalProjects, setFinalProjects] = useState()
    
  return (
    
      <div className="card-container">
      {projectList.map((project) => (
        <div className="card" key={project.id}>
          <div className="card-body">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text">
              {project.description}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
      </div>
    
  );
};

export default ProjectCard;
