import React, { Component } from "react";

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clocktime: new Date().toLocaleString()
    };
    this.timerInterval = null;
  }
  timer = () => {
    this.timerInterval = setInterval(() => {
      this.setState({ clocktime: new Date().toLocaleString() });
    }, 1000);
  };

  render() {
    return <div>{this.state.clocktime}</div>;
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnMount() {
    clearInterval(this.timerInterval);
  }
}

export default DigitalClock;
