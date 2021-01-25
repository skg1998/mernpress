import React  from 'react';
import PropTypes from 'prop-types'
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from 'react-router-dom';
import CartImage from '../../assets/img/shopping_cart_racing.png'
import Grid from '@material-ui/core/Grid';
import DisplayRating from '../Rating/DisplayRating';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
  card: {
    margin: "0 20px"
  },
  media: {
    height: 140
  },
  bottombutton: {
    display: "block",
    margin: "auto"
  },
  icon: {
    color: 'green',
  },
  likedicon:{
    color:'red'
  }
};

const ProductCard = (props) => {
  const { classes, product, key, addToCart } = props;

  function imageLoaded() {
     
  }

  function toggleLike() {
     
  }

  function isLiked() {
     
  }

  return (
    <Link to={`/product-detail/${product._id}`}>
      <Card className={classes.card} key={key}>
       {
        isLiked()
          ? <IconButton onClick={toggleLike}>
              <FavoriteIcon className={classes.likedicon} />
            </IconButton>
          : <IconButton onClick={toggleLike}>
              <FavoriteIcon />
            </IconButton>
        }
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={product.image ? product.image : CartImage}
          />
          <CardContent>
            <Typography component="p">{product.name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.bottombutton}>
          <Grid item xs={12}>
            <Grid item xs={9}>
              <div>
                <span>{<DisplayRating rating={product.rating} nunumReviews={product.totalreview} />}</span>
                <span>$ {product.price}</span>
              </div>
            </Grid>
            <Grid item xs={3}>
              {addToCart ? addToCart : ""}
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Link>
  );
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductCard);
