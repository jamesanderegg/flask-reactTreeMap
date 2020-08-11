import React from "react";
import {Link,Route, BrowserRouter as Router, withRouter 
} from "react-router-dom";
import './projectsDisplay.css'
import GoBack from '../../utilities/GoBack'
const ProjectDisplay = ({component, projectsList, registerProjectLoaded}) => {
    
  return(
      <Router>
        <div className="display-container">
          <GoBack registerProjectLoaded={registerProjectLoaded}/>
        {projectsList.map(sub => (
                    <Route exact path={`/${sub.id}`} component={sub.component} key={sub.id}  />
                ))}
        </div>
      </Router> 
  )
};

export default ProjectDisplay;
