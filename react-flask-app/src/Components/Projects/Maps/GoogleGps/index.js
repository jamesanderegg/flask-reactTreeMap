import React from "react";
// import Map from "./Map";
import axios from 'axios';

export default class GoogleGps extends React.Component {
  state = {
    location: []
  };

  componentDidMount() {
    const data= []
    axios.get('/google_data').then(response =>{
      for (var i = 0; i < response.data.latitude.length; i++){
        data.push([response.data.latitude[i],response.data.longitude[i]])
      }
      this.setState({location: data})
    })
    
  }

  render() {
  
    return (
      
        <div className="col col-md-12">
        <div className="container">
                <h2>Heatmap of GPS Data</h2>
                <p>I mapped my google gps data.</p>
    
            </div>
          {/* <Map props={this.state.location} /> */}
        
        </div>
      
    );
  }
}
