import React from 'react';

export default class Weather extends React.Component {


  componentDidMount() {
    let pos = navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
    });
   
  }

  render() {
    return(
      <div>
        Rendered
      </div>
    );
  }
}
