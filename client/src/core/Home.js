import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Header from '../components/Navbars/Header'
import MainSlidder from '../components/Slidder/MainSlidder'
import CategoriesBar from '../components/Slidder/CategoriesBar'
import BannerContainer from '../containers/Banner/BannerContainer'
import Footer from '../components/Footer/Footer';

import SEO from '../components/SEO/Seo'

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
