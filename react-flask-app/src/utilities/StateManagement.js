import React, { useEffect, useState } from 'react';
// import * as d3 from 'd3';
import ReactDOM from 'react-dom';
import Backdrop from '../Components/Backdrop/Backdrop'
import ComponentDisplay from '../Components/ComponentDisplay/ComponentDisplay'
import SidePanel from '../Components/SidePanel/SidePanel'

import background from '../images/background.png'
function StateManagement(props) {
    const [node, setNode]= useState(null)
  const [sidePanelOpen, setsidePanelOpen] = useState(false);

  const sidePanelOpenClickHandler = () => {
    setsidePanelOpen(prevState => {
      
      return !prevState
    })
  }

  const backdropClickHandler = () => {
    setsidePanelOpen(false);
  };



    // console.log("clickData", props.clickData)
    // THIS IS HOW I RENDER INDIVIDUAL COMPONENTS
      useEffect(() => {      
        var newNode = null
        if(props.clickData){
          // console.log("CLICK HEIGHT: ",props.clickData.height)
          if(props.clickData.id === "datafluent"){
            newNode = document.getElementById(props.clickData.id)
            ReactDOM.render(
                  <React.StrictMode>
                    <ComponentDisplay data={props.treeMapData.children[0]} />
                  </React.StrictMode>
                  ,
                  (newNode)
                );
          }else if(props.clickData.height ===1){
            
            newNode = document.getElementById(props.clickData.data.children[0].id)
                ReactDOM.render(
              <React.StrictMode>
                  <h2>Hello Wordl</h2>
                <ComponentDisplay data={props.clickData.data} />
              </React.StrictMode>
              ,
              (newNode)
            );
            setNode(newNode)
          }else if(props.clickData.height === 2){
            if(node){
            // console.log(node.style)
              ReactDOM.unmountComponentAtNode(node)
            }
            
          }
        }
         
      }, [props, node])

      
      // useEffect(() => {
      //   if(props.clickData){
      //     console.log(node)
      //     if(props.clickData.height ===2){
      //       ReactDOM.unmountComponentAtNode(node)
      //     }
      //   }
        
      // }, [props.clickData,node])
     
  
    return (
        <div className="state-managment" >
        {(sidePanelOpen)? (<Backdrop />): (null)}
        <SidePanel show={sidePanelOpen} click={backdropClickHandler} />
          <nav >
            <div className="up">&uarr; UP</div>
            <div className="login" onClick={sidePanelOpenClickHandler}>&rarr; Login / Sign Up</div>
            
 
        </nav></div>
    )
}
export default StateManagement;
