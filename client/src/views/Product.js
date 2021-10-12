import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'

//Components
import Review from '../components/Rating/Review';
import ProductDetail from '../containers/product/ProductDetail';
import SEO from '../components/SEO/Seo';


const useStyle = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: '15px',
  }
}))

const Product = (props) => {
  const classes = useStyle();
  return (
    <div>
      <SEO title="Product-Detail" description="Product detail" />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12}>
            <ProductDetail />
          </Grid>
        </Grid>
      </div>
      <Review />
    </div>
  )
}

export default Product
