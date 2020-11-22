import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import auth from '../../containers/auth/auth-helper'
import {Link, withRouter} from 'react-router-dom'
import CartIcon from '@material-ui/icons/ShoppingCart'
import Favorite from "@material-ui/icons/Favorite"
import Badge from '@material-ui/core/Badge'
import cart from '../../containers/cart/cart-helper'
import HamBurgerMenu from './SideMenu';
import Searchbar from '../SearchBar/Search'
import './navbar.css';
 
const isActive = (history, path) => {
  if (history.location.pathname === path)
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}
const isPartActive = (history, path) => {
  if (history.location.pathname.includes(path))
    return {color: '#bef67a'}
  else
    return {color: '#ffffff'}
}

const Menu = withRouter(({history}) => (
  <div className="main-menu">
    <AppBar position="static">
      <Toolbar>
      <HamBurgerMenu />
        <Typography type="title" color="inherit">
          MERNPRESS
        </Typography>
        <div className="searchbar" >
          <Searchbar />
        </div>
        <div style={{'position':'absolute', 'right': '10px'}}><span style={{'float': 'right'}}>
        {/* {
          !auth.isAuthenticated() && (<span>
            <Link to="/signup">
              <Button style={isActive(history, "/signup")}>Sign up
              </Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(history, "/signin")}>Sign In
              </Button>
            </Link>
          </span>)
        }
        {
          auth.isAuthenticated() && (<span>
          
            {(<Link to="/seller/shops"><Button style={isPartActive(history, "/seller/")}>My Shops</Button></Link>)}

            <Link to={"/user/" + auth.isAuthenticated().user._id}>
              <Button style={isActive(history, "/user/" + auth.isAuthenticated().user._id)}>My Profile</Button>
            </Link>

            <Button color="inherit" onClick={() => {
                auth.signout(() => history.push('/'))
              }}>Sign out</Button>

          </span>)
        } */}
        <Link to="/cart">
            <Button style={isActive(history, "/cart")}>
              <Badge color="secondary" badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
                <Favorite />
              </Badge>
            </Button>
          </Link>
        <Link to="/cart">
            <Button style={isActive(history, "/cart")}>
              <Badge color="secondary" badgeContent={cart.itemTotal()} style={{'marginLeft': '7px'}}>
                <CartIcon />
              </Badge>
            </Button>
          </Link>
        </span></div>
      </Toolbar>
    </AppBar>
    <div className ="responsive-search-bar">
      <AppBar>
        <Searchbar />
      </AppBar>
    </div>
  </div>
))

export default Menu
