import React from "react";


const LoggedIn = (props) => {
  const container = {
    margin: "100px 000px 00px 000px",
  };

  return (
    <div className="container" style={container}>
      <h3>You're logged in!</h3>
      <p>
        This will always be a work in progress. Here's a list of features for
        users.
      </p>
      <ul>
        <li>Comment, edit and delete on projects</li>
        <li>Snake Highscore Board</li>
      </ul>
    </div>
  );
};

export default LoggedIn;
