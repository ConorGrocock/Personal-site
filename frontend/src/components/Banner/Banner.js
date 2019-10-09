import React, { Component } from "react";
import "../../styles/css/Banner.css";
import SocialList from "./SocialList";
import ScrollArrow from "./ScrollArrow";
import TagLine from "./Tagline";

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div className="background"></div>
        <div className="content">
          <div className="info">
            <h1 className="name">Conor Grocock</h1>
            <TagLine />
          </div>
          <SocialList />
          <ScrollArrow content="Read more" destination="work" />
        </div>
      </div>
    );
  }
}

export default Banner;
