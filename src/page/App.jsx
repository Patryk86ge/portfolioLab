import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;