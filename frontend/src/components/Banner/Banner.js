import React, { Component } from 'react';
import '../../styles/css/Banner.css'
import SocialList from './SocialList';
import ScrollArrow from './ScrollArrow';
import TagLine from './Tagline';

class Banner extends Component {

  render() {

    return (
      <div id="banner">
        <div class="background"></div>
        <div class="content">
          <div class="info">
            <h1 class="name">Conor Grocock</h1>
            <TagLine />
          </div>
          <SocialList />
          <ScrollArrow content="Read more" destination="work" />
        </div>
      </div>
    )
  }
}

export default Banner