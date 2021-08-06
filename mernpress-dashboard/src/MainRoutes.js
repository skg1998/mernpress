import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Dashboard from "./pages/App";
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import NotFound from './pages/NotFoundPage';

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/forgot-password" component={ForgotPassword} />
                <Route path="/" component={Dashboard} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default MainRouter;
