import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Button, Grid, Select, MenuItem, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: '10px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    width: '100%',
    marginTop: '10px'
  }
}));

const SubmitRating = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submitHandler = {

  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* {product.reviews.length === 0 && (
              <h2>There is no review</h2>
            )} */}
      {/* {product.reviews.map((review) => (
                <li key={review._id}>
                  <strong>{review.name}</strong>
                  <DisplayRating rating={review.rating} caption=" " />
                  <p>{review.createdAt.substring(0, 10)}</p>
                  <p>{review.comment}</p>
                </li>
              ))} */}
      {isSubmitting ? (
        <form onSubmit={submitHandler}>
          <Grid container spacing={40}>
            <Grid item xs={12}>
              <Select
                name="Review"
                label="Review"
                variant="outlined"
                style={{ marginTop: '10px', width: '100%' }}
              >
                <MenuItem value=""><em>Select...</em></MenuItem>
                <MenuItem value="1"><em>1- Poor</em></MenuItem>
                <MenuItem value="2"><em>2- Fair</em></MenuItem>
                <MenuItem value="3"><em>3- Good</em></MenuItem>
                <MenuItem value="4"><em>4- Very Good</em></MenuItem>
                <MenuItem value="5"><em>5- Excellent</em></MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <TextField id="outlined-basic" label="Write Review" variant="outlined" type="text" name="comment" style={{ marginTop: '10px', width: '100%' }} />
            </Grid>
            <Grid item xs={12}>
              <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
            </Grid>
          </Grid>

        </form>
      ) : (
        <div>
          <Button className={classes.button} variant="contained" color="primary" onClick={() => setIsSubmitting(true)} >Write Review...</Button>
        </div>
      )}
    </div>
  );
}

export default SubmitRating;