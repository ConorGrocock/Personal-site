import React, { Component } from "react";
import smoothScroll from "../../utility/smoothScroll";

class ScrollArrow extends Component {
  render() {
    if (!process.env.scroll_enabled)
      return <div className="more-content-coming-soon"></div>;
    function scrollToContent() {
      smoothScroll.scrollTo(this.props.destination);
    }

    return (
      <div class="readmore" onClick={scrollToContent}>
        <h3>{this.props.content}</h3>
        <div className="arrow">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    );
  }
}

export default ScrollArrow;
