import React from "react";
import {Link,Route, BrowserRouter as Router, withRouter 
} from "react-router-dom";
const ProjectDisplay = ({component, projectsList}) => {
    
  return(
      <Router>
        <div className="container">
        {projectsList.map(sub => (
                    <Route exact path={`/${sub.id}`} component={sub.component}  />
                ))}
        </div>
      </Router> 
  )
};

export default ProjectDisplay;
