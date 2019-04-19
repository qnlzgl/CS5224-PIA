import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Analyse from "./Analyse";
import Rank from "./Rank";

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/analyse" component={Analyse} />
        <Route path="/rank" component={Rank} />
      </Switch>
    );
  }
}

export default Main;
