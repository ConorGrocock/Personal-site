import React, { Component } from "react";

import Project from "./Project";
import axios from "axios";

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://api.blog.test/projects/all`)
      .then(res => {
        const projects = res.data;
        console.log(projects);
        this.setState({
          items: projects,
        });
      })
      .catch(function(error) {
        this.setState({
          error: error,
        });
      })
      .finally(() => {
        this.setState({
          isLoaded: true,
        });
      });
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div id="work-list">
          {items.map(item => (
            <Project />
          ))}
        </div>
      );
    }
  }
}

export default WorkList;
