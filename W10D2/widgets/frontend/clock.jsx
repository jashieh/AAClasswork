import React from 'react';

export default class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.handle = null;
    let that = this;
    this.state = {
      time: new Date()
    };
    // setInterval(this.componentDidMount.bind(that), 1000);
  }

  componentDidMount() {
    console.log(this.state.time);
    let that = this;
    this.handle = setInterval(that.tick.bind(that), 1000);
    // console.log(handle);
  }

  componentWillUnmount() {
    console.log("unmount");
    clearInterval(this.handle);
    this.handle = 0;
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  render() {
    return (
      <div className="outer">
        {/* <h1>Clock</h1> */}

      <div className="clock-box">
        <div className='time'>
          <h1 className='time-header'>Time: </h1>
          <h1 className='time-num'> {this.state.time.getHours() + ':' + this.state.time.getMinutes() + 
          ':' + this.state.time.getSeconds()} </h1>
        </div>
        <div className='date'>
          <h1 className='date-header'>Date: </h1>
          <h1 className='date-num'> {this.state.time.toDateString() } </h1>
        </div>
      </div>
      </div>
    );
  }
}