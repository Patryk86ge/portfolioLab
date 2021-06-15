import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from '../components/Home';
import Login from "../components/Login";
import Signup from "../components/Signup";
import Logout from "../components/Logout";


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;