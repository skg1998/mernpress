import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./store/components";

//Pages
import Home from "./core/Home";
import Product from './core/Product';
import Categories from './core/Categories';
import Cart from './core/Cart';
import Signup from './core/signup';
import { Signin } from './core/login';
import ForgotPassword from "./core/forgetPassword";
import NotFound from './core/NotFound';
import Checkout from "./core/Checkout";
import Profile from './core/UserProfile';

const MainRouter = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/category" component={Categories} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default MainRouter;
