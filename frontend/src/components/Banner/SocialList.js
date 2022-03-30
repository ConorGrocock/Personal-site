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
            title="Github Profile"
          />
          <SocialLink
            fab="twitter"
            link="https://twitter.com/ConorGrocock"
            showBackground={false}
            title="Twitter Profile"
          />
          <SocialLink
            fas="newspaper"
            link="https://grocock.email/blog"
            showBackground={false}
            title="Blog"
          />
        </ul>
      </div>
    );
  }
}

export default SocialList;
