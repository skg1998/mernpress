import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Facebook } from 'react-content-loader'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    imageAvatar: {
        width: 50
    },
    reviewHeader: {
        display: 'contents'
    }
}));

const allReview = [
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTliBAU1q0DVXx1wjb4Wtg8sf0aTDGqJ0g2lBQN7eFX_j6R5V9bcg9lEl07nXjrBw-8nQvIuqC&usqp=CAc',
        username: 'Sahil Gupta',
        date: '10-02-2021',
        comment: "Guys plz don't purchase this product ,it's a humble request . I purchased this product twice nd i gained around 8kgs in short span of time but i faced hell lots of problem , i faced gas and bloating issue then i thought it would be due to my diet i changed my diet but then too i suffered the same ,then i realised it's due to this supplement. This supplement contains maltodextrin which spikes your sugar level and causes gas bloating and all stuff. So guys plz avoid this product spend little more amount and purchase maltodextrin free supplements"
    }
]

const AllReviews = () => {
    //const [allReview, setAllReview] = useState([]);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" component="h5" gutterBottom> All Customers Review </Typography>
            <Grid container spacing={3}>
                {allReview.length <= 0 ? (
                    <Grid item xs={12}>
                        <Card>
                            <CardContent>
                                <Facebook viewBox="0 0 380 70">
                                    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
                                    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
                                    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
                                </Facebook>
                            </CardContent>
                        </Card>
                    </Grid>
                ) : (
                        allReview.map(review => (
                            <Grid item xs={12}>
                                <Card>
                                    <CardContent>
                                        <div>
                                            <Grid container>
                                                <Grid xs={12} className={classes.reviewHeader}>
                                                    <Grid xs={2}>
                                                        <Grid xs={12}>
                                                            <img className={classes.imageAvatar} src={review.image} />
                                                        </Grid>
                                                    </Grid>
                                                    <Grid xs={10}>
                                                        <Grid xs={12}> {review.username} </Grid>
                                                        <Grid xs={12}> {review.date} </Grid>
                                                    </Grid>
                                                </Grid>
                                                <Grid xs={12}>
                                                    {review.comment}
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))
                    )
                }
            </Grid>
        </div>
    )
}

export default AllReviews;