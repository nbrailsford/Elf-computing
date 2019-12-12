import React, { Component } from "react";

class Options extends Component {
  render() {
    return (
      <fieldset className="feature" key={this.props.featureH}>
        <legend className="feature__name">
          <h3>{this.props.feat}</h3>
        </legend>
        {this.props.option}
      </fieldset>
    );
  }
}

export default Options;
