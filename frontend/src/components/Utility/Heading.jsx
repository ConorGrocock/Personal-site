import React, { Component } from "react";

import "../../styles/css/Heading.css";

export class Heading extends Component {
  render() {
    return (
      <div className="section-heading">
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default Heading;
