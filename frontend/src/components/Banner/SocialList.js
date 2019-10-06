import React, { Component } from "react";
import SocialLink from "./SocialLink";

class SocialList extends Component {
  render() {
    return (
      <div className="social">
        <ul>
          <SocialLink
            fab="github"
            link="https://github.com/ConorGrocock"
            showBackground={false}
          />
          <SocialLink
            fab="twitter"
            link="https://twitter.com/ConorGrocock"
            showBackground={false}
          />
          <SocialLink
            fas="newspaper"
            link="https://blog.grocock.email"
            showBackground={false}
          />
        </ul>
      </div>
    );
  }
}

export default SocialList;
