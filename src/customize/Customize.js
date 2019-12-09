import React, { Component } from "react";
import Options from "./Options";
import "./customize.css";

class Customize extends Component {
  render() {
    return (
      <div className="customizeOptions">
        <h2>Customize your laptop</h2>
        <Options />
      </div>
    );
  }
}

export default Customize;
