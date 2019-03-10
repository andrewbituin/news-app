import React, { Component } from "react";
import { Route } from "react-router";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' />
        <Route exact path='/user' />
      </div>
    );
  }
}

export default App;
