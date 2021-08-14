import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from "@material-ui/core/CardHeader";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";

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

const FormUserDetails = (props) => {
  const { values, handleChange } = props;
  const classes = useStyles();
  const continues = (e) => {
    e.preventDefault();
    props.nextStep();
  };


  return (
    <Card className={classes.card}>
      <CardHeader className={classes.headerColor} avatar={<IconEnvelope />} title="Contact Info" />
      <CardContent>
        <form>
          <Grid container spacing={3}>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="Name"
                label="Name"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('name')}
                defaultValue={values.name}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="Phone"
                label="Phone"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('phone')}
                defaultValue={values.phone}
              />
            </Grid>
            <Grid item lg={12} sm={9} xl={6} xs={3}>
              <TextField
                id="outlined-full-width"
                placeholder="Email"
                label="Email"
                fullWidth
                margin="normal"
                variant="outlined"
                onChange={handleChange('email')}
                defaultValue={values.email}
              />
            </Grid>
          </Grid>
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

export default FormUserDetails;
