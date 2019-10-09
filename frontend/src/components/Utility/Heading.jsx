import React, { Component } from "react";

import "../../styles/css/Heading.css";

export class Heading extends Component {
  render() {
    return (
      <div className="section-heading">
        <h1>{this.props.children}</h1>
      </div>
    );
  }
}

export default Heading;
