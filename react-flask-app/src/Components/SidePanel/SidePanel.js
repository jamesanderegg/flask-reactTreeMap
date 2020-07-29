import React, { useState, useEffect } from "react";

import "./SidePanel.css";
import Login from "../User/Login";
import Register from "../User/Register";
import LoggedIn from "../User/LoggedIn"
const SidePanel = (props) => {
  const [userTokenId, setUserTokenId] = useState(null);
  const [registerOpen, setRegisterOpen] = useState(false);

  const registerClickHandler = () => {
    setRegisterOpen((prevState) => {
      return !prevState;
    });
  };

  let panelClasses = "side-panel";

  if (props.show) {
    panelClasses = "side-panel open";
  }
  return (
    <div className={panelClasses}>
      <div className="hidePanel" onClick={props.hidePanel}>
        {" "}
        &rarr; Hide Panel
      </div>

      {/* <div className="login-nav">Login </div> */}

      {!props.userId ? (
        <>
          <div className="row" style={{ margin: "60px 10px 10px" }}>
            
            {registerOpen ? (
              <>
              <div className="signup-nav" onClick={registerClickHandler}>
        
        &larr; Go Back-Sign Up
      </div>
              <Register registerClickHandler={registerClickHandler}/>
              </>
            ) : (
              <>
              <p style={{ margin: "14px" }}>
              {" "}
              I built a user database for people to leave comments and a few
              other features as well. If you are already a member, sign in
              below or click the register Sign up button.{" "}
            </p>
              <div className="signup-nav" onClick={registerClickHandler}>
              Sign Up
            </div>
              <Login userId={props.userId} setUserId={props.setUserId} />
              </>
            )}
            
          </div>
        </>
      ) : (
        <LoggedIn userId={props.userId}/>
      )}
    </div>
  );
};

export default SidePanel;
