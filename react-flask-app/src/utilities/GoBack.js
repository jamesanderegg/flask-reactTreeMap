import React from 'react';
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';

const GoBack = ({ registerProjectLoaded }) => {
    return(<Link className="go-back"
    to={`/`}
    
    onClick={registerProjectLoaded}
  >
  Go Back
  </Link>)
}

export default withRouter(GoBack);