import React, { Component } from "react";

export class Project extends Component {
  render() {
    var name = this.props.name;
    var image = this.props.image;
    var description = this.props.description;
    var social = this.props.social;
    console.log(social["web"]);
    return (
      <div className="project">
        <div className="content">
          <img
            src={image}
            className="project-image"
            alt="Banner showing the project"></img>
          <h1 className="project-name">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="social-bar">
          {Object.keys(social).map(social_link => (
            <a
              href={social[social_link].link}
              title={social[social_link].title}>
              <i className={social[social_link].icon} />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export default Project;
