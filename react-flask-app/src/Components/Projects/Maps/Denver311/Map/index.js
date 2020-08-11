import React from 'react';
import L from 'leaflet';
import * as L1 from 'leaflet.markercluster'
import 'leaflet/dist/leaflet.css';
import 'leaflet-spin'
import 'leaflet.heat'
import * as d3 from "d3";
import LeafletControl from '../LeafletControl'
import styled from 'styled-components';


// API key
const API_KEY = "pk.eyJ1IjoianVpY3lqYW1lcyIsImEiOiJjazFzbXY3djcwaHI2M21xMnBub2c3d3JvIn0.nVANyOFAxNMCjO598ZACIg";

const Wrapper = styled.div`
    width: 100%;
    height: ${props => props.height};
    z-index: 3
    margin: 0 auto;
    min-width: 300px;
`;



delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            searchbox: '',
            data: [],
            originalData: [],
            loading: false
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.drawMarkers = this.drawMarkers.bind(this)
        
    }
    onChange(e){
         
        this.setState({[e.target.name]: e.target.value})
    }
    onSubmit(e){
        e.preventDefault();
        this.markers.remove()
        this.map.spin(true)
        this.searchData()
    }
    searchData(){
        let data = []
        
        for (var i = 0; i < this.state.originalData.length; i++){
            
            if(this.state.originalData[i]['properties']['Case Summary'] != null){
                let summary = this.state.originalData[i]['properties']['Case Summary'];

                let searchValue = this.state.searchbox
                if (summary.toUpperCase().includes(searchValue.toUpperCase())){
                    data.push(this.state.originalData[i])
                }
            }        
        }
        
        this.drawMarkers(data)
        this.setState({
            data: data
        })
    }
    drawMarkers(newProps){        

        this.markers = new L1.MarkerClusterGroup();
        
        for (var i = 0; i < newProps.length; i++){
            
            var geometry = newProps[i].geometry;
            var popup = L.popup({ className: 'if-you-need-a-class' })
            .setContent('<div class="if-you-need-div">' +
                '<h5>Case Summary</h5>'+
                '<p> Complaint: ' + newProps[i].properties['Case Summary'] + '</p>' +
                '<p> Agency: ' + newProps[i].properties['agency'] + '</p>' +
                '<p> Sourc: ' + newProps[i].properties['Case Source'] + '</p>' +
                '<p> Date: ' + newProps[i].properties['Case Date'] + '</p>' +
                '</\div>');
                
            if (geometry.coordinates[1] && geometry.coordinates[0]) {
                this.markers.addLayer(L.marker([geometry.coordinates[1], geometry.coordinates[0]])
                    .bindPopup(popup));
            }
        }
        
        var layer = this.map.addLayer(this.markers)
        this.map.spin(false);
    }
    
    componentDidMount(){
        this.map =L.map("map", {
            center: [39.7392, -104.9903],
            zoom: 11
        });

        L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
            attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
            maxZoom: 18,
            id: "mapbox.streets",
            accessToken: API_KEY
        }).addTo(this.map);

        var layer = L.geoJSON().addTo(this.map);
        this.map.spin(true);
    }
    componentWillReceiveProps(newProps){
        // Create a new marker cluster group
        let data= []
        console.log(newProps.props)
        if(newProps.props.length>0){
            for(let i=0; i< newProps.props[0].length; i++){
                data.push(newProps.props[0][i])
            }
            this.drawMarkers(data)
            
            this.setState({ 
                originalData: data,
                data: data});
        }
        
    }

    render(){    
        
        return <Wrapper width="100%" height="720px" id="map" >
            <LeafletControl onSubmit={this.onSubmit} onChange={this.onChange} searchbox={this.state.searchbox}/>
        </Wrapper>
        
    }
}