import React from 'react';
import BenchIndexItem from './bench_index_item';

export default class BenchIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.fetchBenches();
    }

    render() {
        let display = null;
        if (Object.keys(this.props.benches).length === 0) {
            display = <div>nothing here</div>
        } else {
            display = Object.keys(this.props.benches).map(benchId => {
                return (
                <BenchIndexItem 
                    bench={this.props.benches[benchId]} 
                    key={this.props.benches[benchId].id} 
                />);
            });
        }

        return(
            <div>
                <h1>Benches: </h1>
                { display }
            </div>
        );

    }
}