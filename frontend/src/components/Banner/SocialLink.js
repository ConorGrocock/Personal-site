import React, { Component } from 'react'

class SocialLink extends Component {
  render() {
    var icon;
    if (this.props.fab)
      icon = <i class={"fab fa-" + this.props.fab + " fa-stack-1x fa-inverse"}></i>
    if (this.props.fas)
      icon = <i class={"fas fa-" + this.props.fas + " fa-stack-1x fa-inverse"}></i>
  return (
    <li>
    <a href={ this.props.link }>
      <span class="fa-stack" style={{"vertical-align": "top"}}>
        {icon}
      </span>
    </a>
    </li>
  )
  }
}

export default SocialLink