import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router";
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import StripeCheckout from 'react-stripe-checkout';
import { cartService } from '../../../store/Services';


const logo = "data:image/png;base64,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";

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

const Confirm = (props) => {
  const { values: { name, phone, email, street, district, city, country, zipcode, state } } = props;
  const [stripeToken, setStripeToken] = useState(null);
  const classes = useStyles();
  const history = useHistory();

  const continues = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  const onToken = async (token) => {
    setStripeToken(token);
  }

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await cartService.checkout({ tokenId: stripeToken.id, amount: 2000, })
        console.log(res);
        history.push("/success");
      } catch (err) {
        console.log(err);
      }
    }
    stripeToken && makeRequest();
  }, [stripeToken, history])

  return (
    <div>
      {stripeToken ? (<span>Processing... Please wait...</span>) : (
        <Card className={classes.card}>
          <CardHeader className={classes.headerColor} title="Confirm & Payment" />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item lg={12} sm={9} xl={6} xs={3}>
                <h2>User Details</h2>
                <List>
                  <ListItem>
                    <ListItemText primary="Name" secondary={name} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Phone" secondary={phone} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Email" secondary={email} />
                  </ListItem>
                </List>
              </Grid>
              <Grid item lg={12} sm={9} xl={6} xs={3}>
                <h2>Shipping Details</h2>
                <List>
                  <ListItem>
                    <ListItemText primary="Street" secondary={street} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="City" secondary={city} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="District" secondary={district} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="State" secondary={state} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Country" secondary={country} />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Zipcode" secondary={zipcode} />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
            <Button
              color="secondary"
              variant="contained"
              onClick={back}
            >Back</Button>

            <StripeCheckout
              amount="500"
              billingAddress
              description="Awesome Product"
              image={logo}
              locale="auto"
              name="MernPress.com"
              stripeKey={process.env.REACT_APP_STRIPE_KEY}
              token={onToken}
              zipCode
              panelLabel="Rent for {{amount}}"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}

export default Confirm;
