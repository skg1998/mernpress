import React from 'react';

import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";
import { ReactComponent as IconReceipt } from "bootstrap-icons/icons/receipt.svg";
import { ReactComponent as IconCreditCard2Front } from "bootstrap-icons/icons/credit-card-2-front.svg";
import { ReactComponent as IconCart3 } from "bootstrap-icons/icons/cart3.svg";

import CardImg from '../../assets/img/cards.webp';
import PaypalImg from '../../assets/img/paypal_64.webp'

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


const Checkout = (props) => {
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const classes = useStyles();
  return (
    <Grid container spacing={3} >
      <Grid item lg={9} sm={9} xl={9} xs={9}>
        <form noValidate autoComplete="off">
          <Card className={classes.card}>
            <CardHeader className={classes.headerColor} avatar={<IconEnvelope />} title="Contact Info" />
            <CardContent>
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
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardHeader className={classes.headerColor} avatar={<IconTruck />} title="Shipping Infomation" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
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
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardHeader className={classes.headerColor} avatar={<IconReceipt />} title="Billing Infomation" />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={12} sm={12} xl={12} xs={12}>
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
                  <Button variant="contained" className={classes.button}>
                    Secondary
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

        </form>
      </Grid>
      <Grid item lg={3} sm={3} xl={3} xs={3}>
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
  )
}

export default Checkout;
