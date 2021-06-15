import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'


//Components  
import Header from '../components/Navbars/Header'
import Review from '../components/Rating/Review';
import ProductAction from '../containers/product/ProductAction';
import ProductDetail from '../containers/product/ProductDetail';
import SEO from '../components/SEO/Seo';
import Footer from '../components/Footer/Footer'


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
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4}>
            <ProductDetail />
          </Grid>
          <Grid item xs={6} sm={6}>
          </Grid>
          <Grid item xs={2} sm={2}>
            <ProductAction />
          </Grid>
        </Grid>
      </div>
      <Review />
      <Footer />
    </div>
  )
}

export default Product
