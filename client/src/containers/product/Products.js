import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

import MobileDetect from "mobile-detect";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ProductCard from '../../components/Product/Product'
import AddToCart from "../../containers/cart/AddToCart"

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'left',
    padding: '0 8px'
  },
  header: {
    fontSize: "30px",
    fontWeight: "bold"
  }
}))

const Products = (props) => {
  const { products, name, deviceType } = props;
  const classes = useStyles();

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  }

  return (
    <div >
      <div className={classes.header}> {name} </div>
      {
        products.length > 0 ?
          (<Carousel
            className="product-slidder"
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true}
            infinite={false}
            containerClass="first-carousel-container container"
            deviceType={deviceType}
          >
            {products.map((product, i) => (
              <ProductCard
                product={product}
                key={i}
                addToCart={<AddToCart item={product} />}
              />
            ))
            }
          </Carousel>) : " "
      }
    </div>)
}

Products.getInitialProps = ({ req }) => {
  let userAgent;
  let deviceType;
  if (req) {
    userAgent = req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  const md = new MobileDetect(userAgent);
  if (md.tablet()) {
    deviceType = "tablet";
  } else if (md.mobile()) {
    deviceType = "mobile";
  } else {
    deviceType = "desktop";
  }
  return { deviceType };
};

Products.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}

export default Products
