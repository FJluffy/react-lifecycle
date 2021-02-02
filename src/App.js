import React, { Component } from "react";
import Children from "./Children";
import DigitalClock from "./DigitalClock";
import ValidateNumber from "./ValidateNumber";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "123ew",
      error: "",
      showClock: true
    };
  }
  ValidateNumber = () => {
    const { number } = this.state;
    if (!isNaN(number)) {
      this.setState({ error: "" });
    } else {
      this.setState({ error: "Invalid Number" });
    }
  };
  render() {
    console.log("render:App");
    const { number, error, showClock } = this.state;
    return (
      <div>
        App Component
        <ValidateNumber
          value={number}
          error={error}
          onChange={(e) => this.setState({ number: e.target.value })}
          onClick={this.ValidateNumber}
        />
        <Children />
        {showClock && <DigitalClock />}
        <button
          onClick={() => {
            this.setState({ showClock: false });
          }}
        >
          remove clock
        </button>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount:App");
  }
}

export default App;
