import React from 'react';
import './LeafletControl.css'

class LeafletControl extends React.Component {
    constructor(props){
        super(props);
        this.state ={isChecked: false};
        this.handleChecked = this.handleChecked.bind(this);
        
    }
    handleChecked(){
        this.setState({isChecked: !this.state.isChecked});
    }
    render(){
        
        
        return(
            <div className="leaflet-top leaflet-left">
                <div className="classname leaflet-control">
                    <div className="container-leaf">
                        <input id="toggle-leaf" type="checkbox" onChange={ this.handleChecked} />
                        <label id="label-leaf" for="toggle-leaf" ><h4>Search</h4></label>
                        <div id="expand-leaf">
                            <form noValidate onSubmit={this.props.onSubmit}>
                                <input id="search-box" type="search" name="searchbox" placeholder="Search" onChange={this.props.onChange} value={this.props.searchbox}/>
                                <button id="search-btn" className="form-control" type="submit">Go!</button>
                            </form>
                            <br />
                            <ul>
                                <p>It is not case sensitive.  Search words not phrases.</p>
                                <h4>Interesting Searches</h4>
                                    <li>Bed Bugs</li>
                                    <li>Turtles</li>
                                    <li>Dogs</li>
                                </ul>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        )}
}
export default LeafletControl;