import React, { Component } from 'react';
import smoothScroll from '../../utility/smoothScroll';

class ScrollArrow extends Component {
    render() {
        if (!process.env.scroll_enabled) return (
            <div class="more-content-coming-soon"></div>
        );
        function scrollToContent() {
            smoothScroll.scrollTo(this.props.destination);
        }

        return (
            <div class="readmore" onClick={scrollToContent}>
                <h3>{this.props.content}</h3>
                <div class="arrow"><i class="fas fa-chevron-down"></i></div>
            </div>
        )
    }
}

export default ScrollArrow
