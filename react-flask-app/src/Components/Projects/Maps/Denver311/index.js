import React from "react";
import Map from "./Map";
import axios from "axios";

export default class Denver311 extends React.Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const data = [];
    axios.get("/denver311").then((response) => {
      data.push(response.data.features);

      this.setState({ data: data });
    });
  }

  render() {
    const dataLoading = <h2> Data Loading...</h2>;

    return (
      <div className="map">
        <h2>Denver 311 Help Center 2016</h2>
        <h6>
          Denver has an open data catalog that has a variety of data. This is
          the Denver 311 Help Center database from 2016, sorted by complaints.
        </h6>{" "}
        <h6>
          I used LeafletJS, a loading spinner and a cluster library with the
          help of D3 to build this map. Leaflet has overlay css for building on
          top of the map. Try searching the database!
        </h6>
        {this.state.data.length > 0 ? (
          <br />
        ) : (
          <h3>Data is loading... please be patient.</h3>
        )}
        <Map props={this.state.data} />
      </div>
    );
  }
}
