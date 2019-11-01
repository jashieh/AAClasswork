import React from 'react';

export default class BenchIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick() {

    }

    render() {
        return(
            <div>Bench: 
               { this.props.bench.description }
            </div>
        );
    }
}