import React, { Component } from "react";

import Project from "./Project";

class WorkList extends Component {
  render() {
    return (
      <div id="work-list">
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    );
  }
}

export default WorkList;
