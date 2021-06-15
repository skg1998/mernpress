import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import { yellow, purple } from '@material-ui/core/colors';

const AddToCartButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(yellow[500]),
        backgroundColor: yellow[500],
        '&:hover': {
            backgroundColor: yellow[700],
        },
    },
}))(Button);

const WishListButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    },
}))(Button);

const useStyles = makeStyles({
    root: {
        minWidth: '100%',
        borderRadius: '10px'
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
            <Grid container spacing={40} style={{ padding: '10px' }}>
                <Grid item xs={12} sm={12}>
                    <AddToCartButton className={classes.button} variant="contained">Add To Cart</AddToCartButton>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Button className={classes.button} variant="contained" color="primary">Buy Now</Button>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <WishListButton className={classes.button} variant="contained">Add To WishList</WishListButton>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductAction;