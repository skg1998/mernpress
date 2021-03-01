import React from "react";
import { Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./store/components";

import Users from './containers/user/Users';
import NewShop from './containers/shop/NewShop';
import Shops from './containers/shop/Shops';
import MyShops from './containers/shop/MyShops';
import Shop from './containers/shop/Shop';
import EditShop from './containers/shop/EditShop';
import NewProduct from './containers/product/NewProduct';
import EditProduct from './containers/product/EditProduct';
import StripeConnect from './containers/user/StripeConnect';
import ShopOrders from './containers/order/ShopOrders';

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
import EditProfile from './containers/user/EditProfile';

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
        <PrivateRoute path="/admin" component={Admin} />
        <Route path="/users" component={Users} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
        <Route path="/user/:userId" component={Profile} />
        <Route path="/shops/all" component={Shops} />
        <PrivateRoute path="/seller/shop/new" component={NewShop} />
        <PrivateRoute path="/seller/shops" component={MyShops} />
        <Route path="/shops/:shopId" component={Shop} />
        <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop} />
        <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct} />
        <Route path="/product/:productId" component={Product} />
        <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/seller/stripe/connect" component={StripeConnect} />
        <PrivateRoute path="/seller/orders/:shop/:shopId" component={ShopOrders} />
        <Route path="/category" component={Categories} />
      </Switch>
      {(adminsignupath || adminloginpath) ? "" : <Footer />}
    </div>
  );
}

export default MainRouter;
