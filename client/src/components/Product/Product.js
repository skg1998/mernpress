import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { withStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import Grid from '@material-ui/core/Grid'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import CartImage from '../../assets/img/shopping_cart_racing.png'
import DisplayRating from '../Rating/DisplayRating'
import './product.css'


const styles = {
    icon: {
        color: 'green',
    },
    likedicon: {
        color: 'red'
    }
};

const ProductCard = (props) => {
    const { classes, product, key, addToCart } = props;

    function toggleLike() {

    }

    function isLiked() {

    }

    return (
        <Card className="product" key={key}>
            {
                isLiked()
                    ? <IconButton onClick={toggleLike}>
                        <FavoriteIcon className={classes.likedicon} />
                    </IconButton>
                    : <IconButton onClick={toggleLike}>
                        <FavoriteIcon />
                    </IconButton>
            }
            <Grid container>
                <Grid item md={12}>
                    <Grid item md={12}>
                        <img src={product.image ? product.image : CartImage} className="center" alt="" />
                    </Grid>
                    <Grid item md={12}> <h4>{product.name}</h4></Grid>
                    <Grid item md={12}>
                        {<DisplayRating rating={product.review.rating} numReviews={product.review.totalreview} />}
                    </Grid>
                </Grid>
                <Grid item md={12} style={{ position: 'relative' }}>
                    <Grid item md={8}>
                        <Grid item md={12}>{product.price}</Grid>
                        <Grid item md={12}><Link to={`/product-detail/${product._id}`}>More <span><ArrowRightAltIcon /></span></Link></Grid>
                    </Grid>
                    <Grid item md={4}>
                        <div className="buy__btn">{addToCart ? addToCart : ""}</div>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

ProductCard.propTypes = {
    classes: PropTypes.object.isRequired,
    product: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCard);
