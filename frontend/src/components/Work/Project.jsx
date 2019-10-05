import React, { Component } from "react";

export class Project extends Component {
  render() {
    return (
      <div className="project">
        <img
          src="https://via.placeholder.com/500"
          className="project-image"
          alt="Banner showing the project"></img>
        <h1 className="project-name">Project Name</h1>
        <p>Brief Description</p>
      </div>
    );
  }
}

export default Project;
