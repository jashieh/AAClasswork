import React from 'react';
import { withRouter } from 'react-router-dom';


class BenchForm extends React.Component {
    constructor(props) {
        super(props);
        this.coords = { lat: props.lat, lng: props.lng };
        this.state = {
            description: '',
            seating: 2,
            lat: props.lat,
            lng: props.lng 
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.navigateToSearch = this.navigateToSearch.bind(this);
    };
    
    navigateToSearch() {
        this.props.history.push('/');
    }
    
    update(property) {
        return e => this.setState({
            [property]: e.target.value
        });
    }
    
    handleSubmit(e) {
        // e.preventDefault();
        // const formData = new FormData();
        // formData.append('bench[description]', this.state.description);
        // formData.append('bench[seating]', this.state.seating);
        // // add our coordinates
        // formData.append('bench[lat]', this.coords['lat']);
        // formData.append('bench[lng]', this.coords['lng']);
        
        // // This will fail because we do not have a AWS bucket set up for this project
        // // presently. 
        // this.props.createBench(formData);
        // this.navigateToSearch();
        e.preventDefault();
        this.props.createBench(this.state);
        
    }
    
    render() {
        const { description, seating } = this.state;
        const { lat, lng } = this.coords;
        return(
            <div className="new-bench-container">
            <div className="new-bench-form">
            <h3 className="new-bench-title">Create A Bench!</h3>
            
            <form onSubmit={this.handleSubmit}>
            <label className="bench-field">Description</label>
            <input
            type="text"
            value={description}
            onChange={this.update('description')}
            className="bench-field"
            />
            
            <label className="bench-field">Number of Seats</label>
            <input
            min="0"
            type="number"
            value={seating}
            onChange={this.update('seating')}
            className="bench-field"
            />
            
            <label className="bench-field">Latitude</label>
            <input
            type="text"
            disabled
            value={lat}
            className="bench-field"
            />
            
            <label className="bench-field">Longitude</label>
            <input
            type="text"
            disabled
            value={lng}
            className="bench-field"
            />
            
            <hr />
            
            <div className="button-holder">
            <input
            type="submit"
            value="Create Bench"
            className="new-bench-button"
            />
            </div>
            </form>
            
            <div className="button-holder">
            <button
            className="new-bench-button"
            onClick={this.navigateToSearch}
            >
            Cancel
            </button>
            </div>
            </div>
            </div>
            );
        }
    } 
    
    export default withRouter(BenchForm);