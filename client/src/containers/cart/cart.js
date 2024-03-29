import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import PaymentImage from '../../assets/img/cards.webp'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

import CartItems from './Cart-items'
import CouponApplyForm from '../../components/CouponApplyForm/CouponApplyForm'

import cart from './cart-helper.js'

const defaultProps = {
  color: 'secondary',
};

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  card: {
    marginBottom: '15px'
  },
  headerColor: {
    background: '#efeff5'
  },
  button: {
    width: '100%',
    background: '#459cb3'
  }
}));

const Cart = (props) => {

  const [cartItems, setCartItems] = useState(cart.getCart());
  const classes = useStyles();

  const handleChange = index => event => {
    let cartItems = cartItems
    if (event.target.value === 0) {
      cartItems[index].quantity = 1
    } else {
      cartItems[index].quantity = event.target.value
    }
    setCartItems(cartItems)
    cart.updateCart(index, event.target.value)
  }

  const getTotal = () => {
    return cartItems.reduce((a, b) => {
      return a + (b.quantity * b.product.price)
    }, 0)
  }

  const removeItem = index => event => {
    let cartItems = cart.removeItem(index)
    if (cartItems.length === 0) {
      props.setCheckout(false)
    }
    setCartItems(cartItems)
  }

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9} sm={9}>
          <CartItems onChange={handleChange} removeItem={removeItem} cartItems={cartItems} getTotal={getTotal} />
        </Grid>
        <Grid item xs={3} sm={3}>
          <div style={{ marginBottom: '5px' }}>
            <CouponApplyForm />
          </div>
          <Card style={{ width: '100%' }}>
            <CardContent>
              <Box display="flex" p={1} className={classes.headerColor}>
                <Box p={1} flexGrow={1}>
                  <IconCart3 />{"  "} <strong>CART</strong>
                </Box>
                <Box p={1}>
                  <Badge badgeContent={1000} max={cartItems.length} {...defaultProps} />
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  Total price:
                </Box>
                <Box p={1} bgcolor="grey.300">
                  {getTotal()}
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  Discount
                </Box>
                <Box p={1} bgcolor="grey.300">
                  -$16
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  Coupon
                </Box>
                <Box p={1} bgcolor="grey.300">
                  -$6
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  <strong>Total</strong>
                </Box>
                <Box p={1} bgcolor="grey.300">
                  <strong>{getTotal()}</strong>
                </Box>
              </Box>
              <Divider variant="middle" />
              <Grid container spacing={3} style={{ margin: 'auto' }}>
                <Grid item xs={12} sm={12} >
                  <img src={PaymentImage} />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <div>
            <h3>Payment and refund policy</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Cart
