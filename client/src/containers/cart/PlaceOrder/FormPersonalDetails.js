import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as IconTruck } from "bootstrap-icons/icons/truck.svg";

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

const FormPersonalDetails = (props) => {
  const { values, handleChange } = props;
  const classes = useStyles();

  const continues = e => {
    e.preventDefault();
    props.nextStep();
  };

  const back = e => {
    e.preventDefault();
    props.prevStep();
  };

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.headerColor} avatar={<IconTruck />} title="Shipping Infomation" />
      <CardContent>
        <form>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="Street"
                label="Street"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('street')}
                defaultValue={values.street}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="City"
                label="City"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('city')}
                defaultValue={values.city}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="District"
                label="District"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('district')}
                defaultValue={values.district}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="country"
                label="country"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('country')}
                defaultValue={values.country}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="state"
                label="state"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('state')}
                defaultValue={values.state}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="Zipcode"
                label="Zipcode"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('zipcode')}
                defaultValue={values.zipcode}
              />
            </Grid>
          </Grid>
          <Button
            color="secondary"
            variant="contained"
            onClick={back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={continues}
          >Continue</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FormPersonalDetails;
