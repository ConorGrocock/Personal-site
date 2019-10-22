import React, { Component } from "react";

export class Project extends Component {
  render() {
    var name = this.props.name;
    var image = this.props.image;
    var description = this.props.description;
    var social = this.props.social;
    return (
      <div className="project">
        <div className="content">
          <img
            srcSet={image}
            className="project-image"
            alt="Banner showing the project"></img>
          <h1 className="project-name">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="social-bar">
          {Object.keys(social).map(social_link => (
            <a
              href={social[social_link].link}
              title={social[social_link].title}
              target="_blank">
              <i className={social[social_link].icon} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
