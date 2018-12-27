import React, { Component } from "react";
import "./hourglass.css";

class HourglassSpinner extends Component {
  render() {
    return (
      <div className="loading">
        <div className="loading__hourglass" />
      </div>
    );
  }
}

export default HourglassSpinner;
