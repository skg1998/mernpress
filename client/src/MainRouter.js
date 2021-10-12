import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import Home from "./views/Home";
import Product from './views/Product';
import Categories from './views/Categories';
import Cart from './views/Cart';
import Signup from './views/signup';
import { Signin } from './views/login';
import ForgotPassword from "./views/forgetPassword";
import NotFound from './views/NotFound';
import Checkout from "./views/Checkout";
import Profile from './views/UserProfile';

//layout
import BlankLayout from './layouts/BlankLayout';
import MainLayout from './layouts/MainLayout';

/*****Routes******/
const MainRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <MainLayout>
          <Component {...matchProps} />
        </MainLayout>
      )}
    />
  );
};

const BlankRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <BlankLayout>
          <Component {...matchProps} />
        </BlankLayout>
      )}
    />
  );
};

const MainRouter = () => {
  return (
    <div>
      <Switch>
        <MainRoute exact path="/" component={Home} />
        <MainRoute path="/category" component={Categories} />
        <MainRoute path="/product/:productId" component={Product} />
        <MainRoute path="/cart" component={Cart} />
        <MainRoute path="/checkout" component={Checkout} />
        <MainRoute path="/profile" component={Profile} />

        <BlankRoute path="/signup" component={Signup} />
        <BlankRoute path="/signin" component={Signin} />
        <BlankRoute path="/forgot-password" component={ForgotPassword} />
        <BlankRoute component={NotFound} />
      </Switch>
    </div>
  );
}

export default MainRouter;
