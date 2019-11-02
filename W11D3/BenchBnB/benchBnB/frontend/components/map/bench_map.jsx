import React from 'react';
import MarkerManager from '../../utils/marker_manager';
import { withRouter } from 'react-router-dom';


const getCoordsObj = latLng => ({
    lat: latLng.lat(),
    lng: latLng.lng()
});

class BenchMap extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(coords){
        this.props.history.push({
          pathname: "benches/new",
          search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 },
            zoom: 13
        };
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);

        google.maps.event.addListener(this.map, 'idle', () => {
            const directions = this.map.getBounds();
            const bounds = {
                northEast: directions.getNorthEast().toJSON(),
                southWest: directions.getSouthWest().toJSON()
            };
            this.props.updateFilter('bounds', bounds);
            // console.log(bounds);
        });

       
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
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

export default withRouter(BenchMap);
