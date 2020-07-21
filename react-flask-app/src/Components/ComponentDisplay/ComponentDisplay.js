import React, { useState, useEffect } from "react";


// need to attach to node 1 if want to make work for entire page.
// import Background from '../../images/background.png'

// const background = {
//     width: "100%",
//     height: "100%",
// }

function ComponentDisplay(props) {
  useEffect(() => {
    // console.log("Component", props)
  }, [props]);

  return (
    <div
      className="container-fluid"
      style={{ marginTop: "70px", height: "100%" }}
    >
      {/* <h4>{props.data.name}</h4> */}
      {props.data.component}
    </div>
  );
} 

export default ComponentDisplay;
