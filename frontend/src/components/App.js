import React, { Component } from "react";
import "../styles/css/App.css";

import Banner from "./Banner/Banner";
import Work from "./Work/Work";

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Work />
      </div>
    );
  }
}

export default App;
