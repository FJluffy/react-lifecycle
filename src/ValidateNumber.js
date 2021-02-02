import React, { Component } from "react";

class ValidateNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ""
    };
  }
  static getDerivedStateFromProps(props, state) {
    return !isNaN(props.value) ? { error: "" } : { error: "Invalid Number" };
  }
  render() {
    const { onChange, value, onClick } = this.props;
    const { error } = this.state;
    return (
      <div>
        <input type="text" onChange={onChange} value={value} />
        <br />
        <div>{error}</div>
        <button onClick={onClick}>Validate Number</button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount:ValidateNumber");
  }
}

export default ValidateNumber;
