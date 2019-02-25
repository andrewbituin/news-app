import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/home' component={Home} />
      </div>
    );
  }
}

export default App;
