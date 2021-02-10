import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardContent, Grid} from '@material-ui/core';
import DisplayRating from './DisplayRating';
import SubmitRating from './SubmitRating';
import AllReviews from './AllReview';

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

const Review = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <Grid container spacing={3}>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Grid container >
                            <Grid item xs={12}> <DisplayRating /></Grid>
                            <Grid item xs={12}> <SubmitRating /></Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={8}>
                <AllReviews />
            </Grid>
           </Grid>
        </div>
    )
}

export default Review;