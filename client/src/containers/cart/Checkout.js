import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import UserForm from './PlaceOrder/UserForm'

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

const Checkout = (props) => {
  const location = useLocation();
  const [cartItem, setCartItem] = useState();
  const [userData, setUserData] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const classes = useStyles();

  const loadData = async () => {
    await setCartItem(location.state.cartItems);
    await setTotalAmount(location.state.getTotal);
    await setUserData(location.state.user)
  }

  useEffect(() => {
    loadData();
    return () => { }
  }, [location]);

  return (
    <Grid container spacing={3} >
      <Grid item lg={9} sm={9} xl={9} xs={9}>
        <UserForm />
      </Grid>
      <Grid item lg={3} sm={3} xl={3} xs={3}>
        <Card style={{ width: '100%' }}>
          <CardContent>
            <Box display="flex" p={1} className={classes.headerColor}>
              <Box p={1} flexGrow={1}>
                <IconCart3 />{"  "} <strong>CART</strong>
              </Box>
              <Box p={1}>
                <Badge badgeContent={1000} max={cartItem && cartItem.length} {...defaultProps} />
              </Box>
            </Box>
            {
              cartItem && cartItem.map((item, index) => (
                <Box display="flex" p={1} bgcolor="background.paper" key={index}>
                  <Box p={1} flexGrow={1} bgcolor="grey.300">
                    {item.product.name}
                  </Box>
                  <Box p={1} bgcolor="grey.300">
                    {item.product.price}
                  </Box>
                </Box>
              ))
            }
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
                <strong>{totalAmount} </strong>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Checkout;
