import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../assets/scss/elements/whoweHelp.scss";
import Foundation from './Foundation'
import Organization from "./Organization";
import Collection from "./Collection";

const WhoWeHelp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Foundation} />
        <Route exact path="/Organization" component={Organization} />
        <Route exact path="/Collection" component={Collection} />
      </Switch>
    </BrowserRouter>
  );
};

export default WhoWeHelp;
