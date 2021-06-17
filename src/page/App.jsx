import React from 'react';
import Signup from '../components/Signup'
import {AuthProvider} from "../contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from '../components/Dashboard';
import Login from '../components/Login'
import PrivateRoute from '../components/PrivateRoute'
import ForgotPassword from '../components/ForgotPassword'
import UpdateProfile from "../components/UpdateProfile";
import Home from '../components/Home'
import Logout from '../components/Logout'
import OddajRzeczy from "../components/OddajRzeczy";

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                        <PrivateRoute path='/update-profile' component={UpdateProfile}/>
                        <PrivateRoute path='/oddaj-rzeczy' component={OddajRzeczy}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/forgot-password" component={ForgotPassword}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </>


    );
}

export default App;

