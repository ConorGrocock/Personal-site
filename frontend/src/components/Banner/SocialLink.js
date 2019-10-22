import React, { Component } from "react";

class SocialLink extends Component {
  render() {
    var icon;
    if (this.props.fab)
      icon = (
        <i
          className={
            "fab fa-" + this.props.fab + " fa-stack-1x fa-inverse"
          }></i>
      );
    if (this.props.fas)
      icon = (
        <i
          className={
            "fas fa-" + this.props.fas + " fa-stack-1x fa-inverse"
          }></i>
      );
    return (
      <li>
        <a
          href={this.props.link}
          title={this.props.title}
          aria-label={this.props.title}
          target="_blank">
          <span className="fa-stack" style={{ verticalAlign: "center" }}>
            {icon}
          </span>
        </a>
      </li>
    );
  }
}

export default SocialLink;
