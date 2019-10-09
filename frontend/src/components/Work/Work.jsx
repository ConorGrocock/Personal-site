import React, { Component } from "react";
import "../../styles/css/Work.css";

import WorkList from "./WorkList";
import Heading from "../Utility/Heading";

class Work extends Component {
  render() {
    return (
      <div className="work">
        <Heading>Projects</Heading>
        <WorkList></WorkList>
      </div>
    );
  }
}

export default Work;
