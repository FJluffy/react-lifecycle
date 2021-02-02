import React, { Component } from "react";

class Children extends Component {
  // shouldComponentUpdate(prevProps, prevState) {
  //   if (prevProps.label !== this.props.label) {
  //     return true;
  //   }
  //   return false;
  // }

  render() {
    console.log("render:Children");
    return <div>{this.props.label}</div>;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate:children");
    return { name: "jay" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate:children");
    console.log(snapshot);
  }
}

export default Children;
