import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";

import Game from "./components/Game/Game";
//import registerServiceWorker from './registerServiceWorker';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/game/:id" component={Game} />
        </Switch>
      </BrowserRouter>
    );
  }
}
