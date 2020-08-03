import React, { useEffect, useState } from "react";
// import * as d3 from 'd3';
import ReactDOM from "react-dom";
import Backdrop from "../Components/Backdrop/Backdrop";
import ComponentDisplay from "../Components/ComponentDisplay/ComponentDisplay";
import SidePanel from "../Components/SidePanel/SidePanel";

function StateManagement(props) {
  const [node, setNode] = useState(null);
  const [sidePanelOpen, setsidePanelOpen] = useState(false);
  const [userId, setUserId] = useState(null)
  
  const sidePanelOpenClickHandler = () => {
    setsidePanelOpen((prevState) => {
      return !prevState;
    });
  };
  
  if(props.clickData){
    
  }
  const backdropClickHandler = () => {
    setsidePanelOpen(false);
  };

 
  // THIS IS HOW I RENDER INDIVIDUAL COMPONENTS
  useEffect(() => {
    var newNode = null;
    //Make sure we have click Data to see what we will render
    if (props.clickData) {

      console.log(props.clickData.height)
      if (props.clickData.id == "datafluent") {
        newNode = document.getElementById(props.clickData.id);
        ReactDOM.render(
          <React.StrictMode>
            <ComponentDisplay data={props.treeMapData.children[0]} />
          </React.StrictMode>,
          newNode
        );
      } else if (props.clickData.height == 1) {
        // ABOUT ME
        newNode = document.getElementById(props.clickData.data.children[0].id);
        ReactDOM.render(
          <React.StrictMode>
            <ComponentDisplay data={props.treeMapData.children[0].children[0]} />
          </React.StrictMode>,
          newNode
        );
        setNode(newNode);
      } else if (props.clickData.height === 2) {
        
        newNode = document.getElementById(props.clickData.data.children[2].id);
        //CONTACT ME
        ReactDOM.render(
          <React.StrictMode>
            <ComponentDisplay data={props.treeMapData.children[0].children[2].children[0]} />
          </React.StrictMode>,
          newNode);
          //ABOUT ME
        //   newNode = document.getElementById(props.clickData.data.children[0].id);
        //   console.log(props.treeMapData.children[0].children[0])
        // ReactDOM.render(
        //   <React.StrictMode>
        //     <ComponentDisplay data={props.treeMapData.children[0].children[0]} />
        //   </React.StrictMode>,
        //   newNode);


        if (node) {
          // console.log(node.style)
          ReactDOM.unmountComponentAtNode(node);
        }
      }
    }
  }, [props, node]);

  useEffect(()=>{
    console.log("**userId: ", userId)
  }, [userId])
  // useEffect(() => {
  //   if(props.clickData){
  //     console.log(node)
  //     if(props.clickData.height ===2){
  //       ReactDOM.unmountComponentAtNode(node)
  //     }
  //   }

  // }, [props.clickData,node])

  return (
    <div className="state-managment">
      {sidePanelOpen ? <Backdrop /> : null}
      <SidePanel show={sidePanelOpen} hidePanel={backdropClickHandler} setUserId={setUserId} userId={userId}/>
      <nav>
        <div className="up">&uarr; UP</div>
        <div className="login" onClick={sidePanelOpenClickHandler}>
          &rarr; Login / Sign Up
        </div>
      </nav>
    </div>
  );
}
export default StateManagement;
