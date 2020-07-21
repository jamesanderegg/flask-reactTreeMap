import React from 'react';

import  './SidePanel.css';


const SidePanel = (props) => {
    let panelClasses = 'side-panel';
    
    if(props.show) {
        panelClasses = 'side-panel open';
    }
    
    return (
    <div className= {panelClasses} onClick={props.click} >
        <h1>Hello World</h1>
    </div>
    );
}

export default SidePanel;