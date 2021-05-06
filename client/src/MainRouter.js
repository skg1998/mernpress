import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./store/components";

import Shops from './containers/shop/Shops';

//Main
import Header from './components/Navbars/Header';
import Footer from './components/Footer/Footer';

//Pages
import Home from "./core/Home";
import Product from './core/Product';
import Categories from './core/Categories';
import Cart from './containers/cart/cart';
import Signup from './containers/user/Signup';
import Signin from './containers/auth/Signin';
import Profile from './containers/user/Profile';

//Admin
import { AdminLogin } from './admin/Pages/AdminLogin';
import AdminSignup from './admin/Pages/AdminSignup'
import Admin from "./admin/Pages/Admin";

const MainRouter = () => {

  let pathName = window.location.pathname;
  console.log('pathName==>', pathName);
  let adminloginpath = pathName === '/adminlogin'
  let adminsignupath = pathName === '/adminsignup'
  let adminpath = pathName === '/admin'
  let dashboardpath = pathName === '/admin/dashboard'

  return (
    <div>
      {(adminpath || dashboardpath || adminsignupath || adminloginpath) ? "" : <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/adminlogin" component={AdminLogin} />
        <Route exact path="/adminsignup" component={AdminSignup} />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/user/:userId" component={Profile} />
        <Route path="/shops/all" component={Shops} />
        <Route path="/product-detail/:productId" component={Product} />
        <Route path="/cart" component={Cart} />
        <Route path="/category" component={Categories} />
      </Switch>
      {(adminsignupath || adminloginpath) ? "" : <Footer />}
    </div>
  );
}

export default MainRouter;
