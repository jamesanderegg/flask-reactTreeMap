import React from 'react';
import { withRouter } from 'react-router-dom';

const GoBack = ({ registerProjectLoaded }) => {
    console.log('hello')
    return(<div className="go-back" onClick={registerProjectLoaded} alt="Go back">Go Back</div>)
}

export default withRouter(GoBack);