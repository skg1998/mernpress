import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./store/components";

import Shops from './containers/shop/Shops';

//Pages
import Home from "./core/Home";
import Product from './core/Product';
import Categories from './core/Categories';
import Cart from './core/Cart';
import Signup from './core/signup';
import { Signin } from './core/login';
import Profile from './containers/user/Profile';
import NotFound from './core/NotFound';
import Checkout from "./core/Checkout";

//Admin
import { AdminLogin } from './admin/Pages/AdminLogin';
import AdminSignup from './admin/Pages/AdminSignup'
import Admin from "./admin/Pages/Admin";

const MainRouter = () => {

  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adminlogin" component={AdminLogin} />
        <Route exact path="/adminsignup" component={AdminSignup} />
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/user/:userId" component={Profile} />
        <Route path="/shops/all" component={Shops} />
        <Route path="/product/:productId" component={Product} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="/category" component={Categories} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default MainRouter;
