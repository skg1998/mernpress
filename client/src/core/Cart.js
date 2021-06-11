import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";

import { ReactComponent as IconChevronRight } from "bootstrap-icons/icons/chevron-right.svg";
import { ReactComponent as IconChevronLeft } from "bootstrap-icons/icons/chevron-left.svg";


import Card from '@material-ui/core/Card';
import { CardContent, CardMedia } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'

import cart from '../containers/cart/cart-helper'
import auth from '../containers/auth/auth-helper'
import CouponApplyForm from '../components/CouponApplyForm/CouponApplyForm'
import PaymentImage from '../assets/img/payments.webp'

import Header from '../components/Navbars/Header'
import SEO from '../components/SEO/Seo';

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

const CartView = (props) => {
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


    const onSubmitApplyCouponCode = async (values) => {
        alert(JSON.stringify(values));
    };

    return (
        <React.Fragment>
            <SEO title="Cart - Mernpress " description="A Multi-vendor ecommerce site" />
            <Header />
            <div className="container mb-3">
                <div className="row">
                    <div className="col-md-9">
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
                                <div className="card-footer">
                                    {
                                        !props.checkout && (auth.isAuthenticated() ?
                                            <Link to="/checkout" className="btn btn-primary float-right">
                                                Make Purchase <IconChevronRight className="i-va" />
                                            </Link>
                                            :
                                            <Link to="/signin" className="btn btn-primary float-right">
                                                Sign in to checkout
                                            </Link>
                                        )
                                    }
                                    <Link to="/" className="btn btn-secondary">
                                        <IconChevronLeft className="i-va" /> Continue shopping
                                    </Link>
                                </div>
                            </span>) :
                                <Typography type="subheading" component="h3" color="primary">No items added to your cart.</Typography>
                            }
                        </Card>
                        <div className="alert alert-success mt-3">
                            <p className="m-0">
                                <IconTruck className="i-va mr-2" /> Free Delivery within 1-2
                                weeks
                            </p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mb-3">
                            <div className="card-body">
                                <CouponApplyForm onSubmit={onSubmitApplyCouponCode} />
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <dl className="row border-bottom">
                                    <dt className="col-6">Total price:</dt>
                                    <dd className="col-6 text-right">${getTotal()}</dd>

                                    <dt className="col-6 text-success">Discount:</dt>
                                    <dd className="col-6 text-success text-right">-$58</dd>
                                    <dt className="col-6 text-success">
                                        Coupon:{" "}
                                        <span className="small text-muted">EXAMPLECODE</span>{" "}
                                    </dt>
                                    <dd className="col-6 text-success text-right">-$68</dd>
                                </dl>
                                <dl className="row">
                                    <dt className="col-6">Total:</dt>
                                    <dd className="col-6 text-right  h5">
                                        <strong>${getTotal()}</strong>
                                    </dd>
                                </dl>
                                <hr />
                                <p className="text-center">
                                    <img
                                        src={PaymentImage}
                                        alt="..."
                                        height={26}
                                    />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light border-top p-4">
                <div className="container">
                    <h6>Payment and refund policy</h6>
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
            </div>
        </React.Fragment>
    );
}

export default CartView;