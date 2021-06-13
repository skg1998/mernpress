import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import { CardContent, CardMedia } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box';

import cart from './cart-helper.js'
import auth from '../auth/auth-helper'


const useStyles = makeStyles((theme) => ({
  card: {
    padding: '16px 40px 60px 40px',
  },
  title: {
    margin: theme.spacing.unit * 2,
    color: theme.palette.openTitle,
    fontSize: '1.2em'
  },
  price: {
    color: theme.palette.text.secondary,
    display: 'inline'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: 0,
    width: 50
  },
  productTitle: {
    fontSize: '1.15em',
    marginBottom: '5px'
  },
  subheading: {
    color: 'rgba(88, 114, 128, 0.67)',
    padding: '8px 10px 0',
    cursor: 'pointer',
    display: 'inline-block'
  },
  cart: {
    width: '100%',
    display: 'inline-flex'
  },
  details: {
    display: 'inline-block',
    width: "100%",
    padding: "4px"
  },
  content: {
    flex: '1 0 auto',
    padding: '16px 8px 0px'
  },
  cover: {
    width: 160,
    height: 125,
    margin: '8px'
  },
  itemTotal: {
    float: 'right',
    marginRight: '40px',
    fontSize: '1.5em',
    color: 'rgb(72, 175, 148)'
  },
  checkout: {
    float: 'right',
    margin: '24px'
  },
  total: {
    fontSize: '1.2em',
    color: 'rgb(53, 97, 85)',
    marginRight: '16px',
    fontWeight: '600',
    verticalAlign: 'bottom'
  },
  continueBtn: {
    marginLeft: '10px'
  },
  itemShop: {
    display: 'block',
    fontSize: '0.90em',
    color: '#78948f'
  },
  removeButton: {
    fontSize: '0.8em'
  }
}))

const CartItem = (props) => {

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

  const openCheckout = () => {
    props.setCheckout(true)
  }

  return (
    <Card className={classes.card}>
      <Typography type="title" className={classes.title}>
        Shopping Cart
      </Typography>
      {cartItems.length > 0 ? (<span>
        {cartItems.map((item, i) => {
          return <span key={i}><Card className={classes.cart}>
            <CardMedia
              className={classes.cover}
              image={item.product.image}
              title={item.product.name}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <Link to={'/product/' + item.product._id}><Typography type="title" component="h3" className={classes.productTitle} color="primary">{item.product.name}</Typography></Link>
                <div>
                  <Typography type="subheading" component="h3" className={classes.price} color="primary">$ {item.product.price}</Typography>
                  <span className={classes.itemTotal}>${item.product.price * item.quantity}</span>
                  <span className={classes.itemShop}>Shop: {item.product.shop.name}</span>
                </div>
              </CardContent>
              <div className={classes.subheading}>
                Quantity: <TextField
                  value={item.quantity}
                  onChange={handleChange(i)}
                  type="number"
                  inputProps={{
                    min: 1
                  }}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  margin="normal" />
                <Button className={classes.removeButton} color="primary" onClick={removeItem(i)}>x Remove</Button>
              </div>
            </div>
          </Card>
            <Divider />
          </span>
        })
        }
        <div>
          <Box display="flex" p={1}>
            {
              !props.checkout && (auth.isAuthenticated() ?
                <Box p={1} flexGrow={1} >
                  <Button variant="contained" color="primary">
                    <Link to="/checkout" >
                      Make Purchase <IconChevronRight />
                    </Link>
                  </Button>
                </Box>
                :
                <Box p={1} flexGrow={1} >
                  <Button variant="contained" color="primary">
                    <Link to="/signin" >
                      Sign in to checkout
                    </Link>
                  </Button>
                </Box>
              )
            }
            <Box p={1} bgcolor="grey.300">
              <Button variant="contained" color="secondary">
                <Link to="/">
                  <IconChevronLeft /> Continue shopping
                </Link>
              </Button>
            </Box>
          </Box>
        </div>
      </span>) :
        <Typography type="subheading" component="h3" color="primary">No items added to your cart.</Typography>
      }
    </Card>
  )
}

CartItem.propTypes = {
  classes: PropTypes.object.isRequired,
  checkout: PropTypes.bool.isRequired,
  setCheckout: PropTypes.func.isRequired
}

export default CartItem
