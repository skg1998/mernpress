import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core/'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { withStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'

import cart from './cart-helper.js'
import auth from '../auth/auth-helper'


const CartItems = (props) => {
    const [cartitem, setCartitem] = useState(cart.getCart());
    console.log(cartitem);

    const handleChange = index => event => {
        let cartItems = cartitem
        if (event.target.value === 0) {
            cartItems[index].quantity = 1
        } else {
            cartItems[index].quantity = event.target.value
        }
        setCartitem(cartItems)
        cart.updateCart(index, event.target.value)
    }

    const removeItem = index => event => {
        let cartItems = cart.removeItem(index)
        if (cartItems.length === 0) {
            props.setCheckout(false)
        }
        setCartitem(cartItems)
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={12}><h1>Checkout Items</h1></Grid>
                <Grid item xs={12}>
                    {cartitem.length > 0 ? (
                        < Grid container>
                            <Grid item md={8}>
                                {cartitem.map((item, i) => (
                                    <Card key={i} style={{ margin: "10px" }}>
                                        <Grid container>
                                            <Grid item xs={3} >
                                                <img src={item.product.image} width="100px" alt="" style={{ margin: "auto" }} />
                                            </Grid>
                                            <Grid item xs={9} >
                                                <h2>{item.product.name}</h2>
                                                <h3>{item.product.price}</h3>
                                                <div className="">
                                                    Quantity: <TextField
                                                        value={item.quantity}
                                                        onChange={handleChange(i)}
                                                        type="number"
                                                        inputProps={{
                                                            min: 1
                                                        }}
                                                        // className={classes.textField}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        margin="normal" />
                                                    <Button className="" color="primary" onClick={removeItem(i)}>x Remove</Button>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </Card>
                                ))}
                            </Grid>
                            <Grid item md={4}>
                                <Card>
                                    <h3 style={{ textAlign: "center" }}>Price Details</h3>
                                    <CardContent>
                                        <Grid item md={12}></Grid>
                                        <Grid item md={12}></Grid>
                                        <Grid item md={12}></Grid>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    ) : <h2>No items added to your cart.</h2>
                    }
                </Grid>
            </Grid>
        </div>
    )
}

CartItems.propTypes = {
    checkout: PropTypes.bool.isRequired,
    setCheckout: PropTypes.func.isRequired
}


export default CartItems