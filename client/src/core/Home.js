import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Header from '../components/Navbars/Header'
import MainSlidder from '../components/Slidder/MainSlidder'
import CategoriesBar from '../components/Slidder/CategoriesBar'
import BannerContainer from '../containers/Banner/BannerContainer'
import Footer from '../components/Footer/Footer'
import Products from '../containers/product/Products'

import SEO from '../components/SEO/Seo';

const data = [
  {
    _id: "1",
    name: "Redmi Note 9 Pro Max",
    image: "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    sku: "KS935FGH",
    metaTagTitle: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    upc: "",
    modal: "Redmi",
    quantity: 67,
    price: 14999.00,
    outOfStockStatus: false,
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    status: 2,
    sortOrder: 45,
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 }
  },
  {
    _id: "1",
    name: "Redmi Note 9 Pro Max",
    image: "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    sku: "KS935FGH",
    metaTagTitle: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    upc: "",
    modal: "Redmi",
    quantity: 67,
    price: 14999.00,
    outOfStockStatus: false,
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    status: 2,
    sortOrder: 45,
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 }
  },
  {
    _id: "1",
    name: "Redmi Note 9 Pro Max",
    image: "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    sku: "KS935FGH",
    metaTagTitle: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    upc: "",
    modal: "Redmi",
    quantity: 67,
    price: 14999.00,
    outOfStockStatus: false,
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    status: 2,
    sortOrder: 45,
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 }
  },
  {
    _id: "1",
    name: "Redmi Note 9 Pro Max",
    image: "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    sku: "KS935FGH",
    metaTagTitle: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    upc: "",
    modal: "Redmi",
    quantity: 67,
    price: 14999.00,
    outOfStockStatus: false,
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    status: 2,
    sortOrder: 45,
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 }
  },
  {
    _id: "1",
    name: "Redmi Note 9 Pro Max",
    image: "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    sku: "KS935FGH",
    metaTagTitle: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    upc: "",
    modal: "Redmi",
    quantity: 67,
    price: 14999.00,
    outOfStockStatus: false,
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    status: 2,
    sortOrder: 45,
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 }
  },
  {
    _id: "1",
    name: "Redmi Note 9 Pro Max",
    image: "https://images-na.ssl-images-amazon.com/images/I/71usqWEJleL._SL1500_.jpg",
    description: "Country Of Origin - India 64MP quad rear camera with ultra-wide, macro mode, super macro, portrait, night mode, 960fps slowmotion, ai scene recognition, pro color, HDR, pro mode | 32MP front camera 16.94 centimeters (6.67 inch) FHD+ LCD multi-touch capacitive touchscreen, full screen dot display with 2400 x 1080 pixels resolution, 400 ppi pixel density and 20:9 aspect ratio | 2.5D curved glass",
    sku: "KS935FGH",
    metaTagTitle: "(Champagne Gold, 6GB RAM, 64GB Storage) - 64MP Quad Camera & Latest 8nm Snapdragon 720G & Alexa Hands-Free",
    upc: "",
    modal: "Redmi",
    quantity: 67,
    price: 14999.00,
    outOfStockStatus: false,
    requiredShipping: true,
    dateAvailable: "",
    condition: [],
    status: 2,
    sortOrder: 45,
    category: [],
    discount: [],
    shop: [],
    review: { rating: 4, totalreview: 445 }
  }
]

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  categories: {
    top: 'auto !important',
    position: 'unset !important'
  }
})

class Home extends Component {

  render() {
    const { classes } = this.props
    return (
      <div>
        <SEO title="MernPress - Ecommerce site " description="A Multi-vendor ecommerce site" />
        <Header />
        <div className={classes.root}>
          {/* <CategoriesBar className={classes.categories} /> */}
          {/* Main-slidder */}
          <MainSlidder />
          {/* Main-banner */}
          <BannerContainer />
          {/* (Product) */}
          <Products products={data} name={"New Deals"} />
        </div>
        <Footer />
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
