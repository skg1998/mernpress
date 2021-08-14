import React, { useEffect, useState } from 'react';

import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

import CardImg from '../../assets/img/cards.webp';
import PaypalImg from '../../assets/img/paypal_64.webp'

import { useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Radio from '@material-ui/core/Radio';
import CardHeader from "@material-ui/core/CardHeader";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Badge from '@material-ui/core/Badge';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
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

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const country = [
  { value: 'india', label: 'India' }
]

const state = [
  { value: 'delhi', label: 'Delhi' }
]


const Checkout = (props) => {
  const location = useLocation();
  const [currency, setCurrency] = useState('EUR');
  const [cartItem, setCartItem] = useState();
  const [userData, setUserData] = useState();
  const [totalAmount, setTotalAmount] = useState();
  const [personalDetail, setPersonalDetail] = useState({
    name: (userData ? userData.name : ''),
    email: '',
    phone: ''
  });

  const [address, setAddress] = useState({
    street: '',
    district: '',
    city: '',
    country: '',
    zipcode: '',
    state: ''
  });

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

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      products: [cartItem],
      customer_name: personalDetail.name,
      customer_email: personalDetail.email,
      customer_phone: personalDetail.phone,
      delivery_address: {
        street: address.street,
        city: address.city,
        state: address.state,
        zipcode: address.zipcode,
        country: address.country
      },
      payment: {}
    }
    console.log("data", data);
  }

  const handleInputChange = (event) => {
    event.persist();
    setPersonalDetail(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }

  const handleAddressChange = (event) => {
    event.persist();
    setAddress(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }

  return (
    <Grid container spacing={3} >
      <Grid item lg={9} sm={9} xl={9} xs={9}>
        <UserForm />
        {/* <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <Card className={classes.card}>
            <CardHeader className={classes.headerColor} avatar={<IconEnvelope />} title="Contact Info" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="name"
                    key={personalDetail.name}
                    defaultValue={personalDetail.name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="email"
                    key={personalDetail.email}
                    defaultValue={personalDetail.email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Phone"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="phone"
                    key={personalDetail.phone}
                    defaultValue={personalDetail.phone}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardHeader className={classes.headerColor} avatar={<IconTruck />} title="Shipping Infomation" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Street"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="street"
                    key={address.street}
                    defaultValue={address.street}
                    onChange={handleAddressChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={6} sm={6} xl={6} xs={6}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="City"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="city"
                    key={address.city}
                    defaultValue={address.city}
                    onChange={handleAddressChange}
                  />
                </Grid>
                <Grid item lg={6} sm={6} xl={6} xs={6}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="District"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    name="district"
                    key={address.district}
                    defaultValue={address.district}
                    onChange={handleAddressChange}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                    name="country"
                    key={address.country}
                    defaultValue={address.country}
                    onChange={handleAddressChange}
                  >
                    {country.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    value={currency}
                    onChange={handleChange}
                    variant="outlined"
                    name="state"
                    key={address.state}
                    defaultValue={address.state}
                    onChange={handleAddressChange}
                  >
                    {state.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Zip code"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                    name="zipcode"
                    key={address.zipcode}
                    defaultValue={address.zipcode}
                    onChange={handleAddressChange}
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardHeader className={classes.headerColor} avatar={<IconCreditCard2Front />} title="Payment Method" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={6} sm={6} xl={6} xs={6}>
                  <Radio
                    label="Credit Card"
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                </Grid>
                <Grid item lg={6} sm={6} xl={6} xs={6}>
                  <Radio
                    value="a"
                    name="radio-button-demo"
                    inputProps={{ 'aria-label': 'A' }}
                  />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item lg={6} sm={6} xl={6} xs={6}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Placeholder"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item lg={6} sm={6} xl={6} xs={6}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Placeholder"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-select-currency-native"
                    select
                    fullWidth
                    value={currency}
                    onChange={handleChange}
                    SelectProps={{
                      native: true,
                    }}
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={4} sm={4} xl={4} xs={4}>
                  <TextField
                    id="outlined-full-width"
                    placeholder="Placeholder"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
                  <Button type="submit" variant="contained" className={classes.button}>
                    Secondary
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

        </form> */}
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
