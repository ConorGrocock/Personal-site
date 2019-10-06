import React, { Component } from "react";

import "../../styles/css/LoadingIcon.css";

export class LoadingIcon extends Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spinner">
          <div />
          <div />
          <div />
        </div>
        <h2>{this.props.children}</h2>
      </div>
    );
  }
}

export default LoadingIcon;
