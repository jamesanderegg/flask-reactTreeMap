import React from 'react';
import Map from "./Map";
import axios from 'axios';


export default class Denver311 extends React.Component {
    state = {
        data: []
    };

    componentDidMount(){
        const data = []
        axios.get('/denver311').then(response => {
            data.push(response.data.features)
            
            this.setState({ data: data})
            
        })
    }

    render(){
        const dataLoading = (<h2> Data Loading...</h2>)
        
        return(
        
            <div className="map">
                <h2>Denver 311 Help Center 2016</h2>
                <p>Denver has an open data catalog that has a variety of data. This is the Denver 311 Help Center database from 2016, Complaints. </p>
                {this.state.data.length >0? <br/> : <h1>DATA LOADING:</h1> }
            
            <Map props={this.state.data} />
            </div>
    )
}
}