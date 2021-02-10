import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles'
import {Link} from 'react-router-dom'
import { Card ,CardHeader, Button, Grid, Select, MenuItem, TextField, CardContent} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const SubmitRating = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submitHandler={
 
  }
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <Card>
            <CardContent>
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
                    <Grid item xs={12}>    
                          <Select
                              name="Review"
                              label="Review"
                              variant="outlined"
                              style={{marginTop:'10px', width:'100%'}}
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
                        <TextField id="outlined-basic" label="Write Review" variant="outlined"  type = "text" name = "comment" style={{marginTop:'10px', width:'100%'}}/>
                    </Grid>
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                  </form>
                ) : (
                  <div>
                    <Button variant="contained" color="primary" onClick={() => setIsSubmitting(true) } >Write Review...</Button>
                  </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}

export default SubmitRating;