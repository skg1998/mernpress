import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import CartItems from './Cart-items'

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
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={9} sm={9}>
          <CartItems />
        </Grid>
        <Grid item xs={3} sm={3}>
          <Card style={{ width: '100%' }}>
            <CardContent>
              <Box display="flex" p={1} className={classes.headerColor}>
                <Box p={1} flexGrow={1}>
                  <IconCart3 />{"  "} <strong>CART</strong>
                </Box>
                <Box p={1}>
                  <Badge badgeContent={1000} max={999} {...defaultProps} />
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  Product
                </Box>
                <Box p={1} bgcolor="grey.300">
                  amount
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  Promotion Code
                </Box>
                <Box p={1} bgcolor="grey.300">
                  Amount
                </Box>
              </Box>
              <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1} bgcolor="grey.300">
                  <strong>Total</strong>
                </Box>
                <Box p={1} bgcolor="grey.300">
                  <strong>Amount</strong>
                </Box>
              </Box>
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

Cart.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Cart
