import React, { useState, useEffect } from "react";
import projects from "./projectsMap";
import Tags from "./Tags/Tags";
import ProjectCard from "./ProjectCard/ProjectCard"
const Projects = () => {
  const _ = require("lodash");
  const [tagProject, setTagProject] = useState("");

//   let projectList = [];
  const registerTag = (e) => {
    setTagProject(e.target.id);
  };

  let tags = [];
  let projectsList = []
  _.each(projects, (edge) => {
      
    if (_.get(edge, "tags")) {
      tags = tags.concat(edge.tags.split(", "));

      if(edge.tags.includes(tagProject)){
          
        projectsList = projectsList.concat(edge);
      }
    }
  });
  
  

  let tagCounts = {};
  tags.forEach((tag) => {
    //conditional if it doesnt exist make it 0 or add 1.
    tagCounts[tag] = (tagCounts[tag] || 0) + 1;
  });

  tags = _.uniq(tags);

  return (
    <>
      <Tags tags={tags} tagsCount={tagCounts} registerTag={registerTag} />
    <ProjectCard projectList={projectsList} />

    </>
  );
};

export default Projects;
