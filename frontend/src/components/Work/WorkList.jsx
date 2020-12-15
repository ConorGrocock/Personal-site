import React, { Component } from "react";

import axios from "axios";

import Project from "./Project";
import LoadingIcon from "../Utility/LoadingIcon";

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      projects: [],
    };
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_API_URL + "/projects/all")
      .then(res => {
        this.setState({
          isLoaded: true,
          projects: res.data,
        });
      })
      .catch(error => {
        this.setState({
          error: error,
        });
      });
  }

  render() {
    const { error, isLoaded, projects } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <LoadingIcon>Loading the projects</LoadingIcon>;
    } else {
      return (
        <div id="work-list">
          {projects.map((project, _i) => (
            <Project
              name={project.name}
              image={project.image_path}
              description={project.brief_description}
              social={project.social_links}
            />
          ))}
        </div>
      );
    }
  }
}

export default WorkList;
