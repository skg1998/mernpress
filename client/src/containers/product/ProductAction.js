import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '10px',
        borderRadius: '15px',
        padding: '20px'
    },
    button: {
        width: '100%',
        marginTop: '10px'
    }
});

const ProductAction = (props) => {
    const classes = useStyles();
    const { data } = props;
    return (
        <Card className={classes.root} variant="outlined">
            <Grid container spacing={40}>
                <Grid item xs={12} sm={12}>
                    <Button className={classes.button} variant="contained" >Add To Cart</Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <h4>Secure Transaction</h4>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button className={classes.button} variant="contained" >Buy Now</Button>
                </Grid>
                <Divider />
                <Grid item xs={12} sm={12}>
                    <h4>Select Delivery location</h4>
                </Grid>
                <Divider />
                <Grid item xs={12} sm={12}>
                    <Button className={classes.button} variant="contained">Add To WishList</Button>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductAction;