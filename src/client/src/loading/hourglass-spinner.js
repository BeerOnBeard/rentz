import React, { Component } from "react";
import "./hourglass.css";

class HourglassSpinner extends Component {
  render() {
    return (
      <div class="loading-outer">
        <div class="lds-hourglass" />
      </div>
    );
  }
}

export default HourglassSpinner;
