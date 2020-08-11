import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import projects from "./projectsMap";
import Tags from "./Tags/Tags";
import ProjectCard from "./ProjectCard/ProjectCard";
import ProjectDisplay from "./ProjectDisplay";

const Projects = () => {
  const _ = require("lodash");
  const [tagProject, setTagProject] = useState("");
  const [loadedProject, setLoadedProject] = useState(false);

  const registerProjectLoaded = (e) => {
    setLoadedProject((prevState) => {
      return !prevState;
    });
  };
  //   let projectList = [];
  const registerTag = (e) => {
    setTagProject(e.target.id);
  };

  let tags = [];
  let projectsList = [];
  _.each(projects, (edge) => {
    if (_.get(edge, "tags")) {
      tags = tags.concat(edge.tags.split(", "));

      if (edge.tags.includes(tagProject)) {
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
    <Router>
      {loadedProject ? (
        projectsList.map((project) => {
          return (
            <Route
              exact
              path={`/${project.id}`}
              component={() => (
                <ProjectDisplay
                  component={project.component}
                  projectsList={projectsList}
                  registerProjectLoaded={registerProjectLoaded}
                />
              )}
              key={project.id}
            />
          );
        })
      ) : (
        <>
          <Tags tags={tags} tagsCount={tagCounts} registerTag={registerTag} />
          <ProjectCard
            projectList={projectsList}
            setLoadedProject={registerProjectLoaded}
          />
        </>
      )}
    </Router>
  );
};

export default Projects;
