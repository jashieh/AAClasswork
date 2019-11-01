import React from 'react';
import MarkerManager from '../../utils/marker_manager';

export default class BenchMap extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        console.log(this.props.benches);
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches);
    }
    
    render() {
        return(
            <div id="map-container" ref={map => this.mapNode = map}>
            </div>
        );
    }
}