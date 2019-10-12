import React, { Component } from "react";
import "../../styles/css/Banner.css";
import SocialList from "./SocialList";
import ScrollArrow from "./ScrollArrow";
import TagLine from "./Tagline";

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div className="background">
          <picture>
            <source
              srcSet="https://assets.grocock.email/banner-background-xl.webp"
              media="(min-width: 1500px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-l.webp"
              media="(min-width: 800px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-m.webp"
              media="(min-width: 30000px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-s.webp"
              media="(min-width: 200px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-xs.webp"
              media="(max-width: 200px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-xl.jpg"
              media="(min-width: 1500px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-l.jpg"
              media="(min-width: 800px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-m.jpg"
              media="(min-width: 300px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-s.jpg"
              media="(min-width: 200px)"
            />
            <source
              srcSet="https://assets.grocock.email/banner-background-xs.jpg"
              media="(max-width: 200px)"
            />

            <img
              src="assets.grocock.email/banner-background-l.jpg"
              alt="Background showing mountains"
            />
          </picture>
        </div>
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
