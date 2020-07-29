import React, { useState, useEffect } from 'react';
import pageData from './utilities/treeData'
import './App.css';
import Backdrop from './Components/Backdrop/Backdrop'
import TreeMap from './Components/TreeMap/TreeMap'


function App() {
  const [treeMap, setTreeMap] = useState(null);

  useEffect(() => {
    localStorage.setItem('usertoken', 0)
    
    setTreeMap(pageData[0])
  }, [])
  
  return (
    <div className="App">
      <header></header>
      <TreeMap treeMapData={treeMap}/>
    </div>
  );
}

export default App;
