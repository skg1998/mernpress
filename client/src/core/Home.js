import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Suggestions from '../containers/product/Suggestions'
import {listLatest, listCategories} from '../containers/product/api-product.js'
import Categories from '../containers/product/Categories'
import MainSlidder from '../components/Slidder/MainSlidder'
import CategorySlidder from '../components/Slidder/CategorySlidder'
import CategoriesBar from '../components/Slidder/CategoriesBar'
import SEO from '../components/SEO/Seo'
import Tab from '../components/Tab/Tab'
 
const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 15,
  },
  categories:{
    top:'auto !important',
    position:'unset !important'
  }
})

class Home extends Component {
  state={
    suggestionTitle: "Latest Products",
    suggestions: [],
    categories: []
  }
  componentDidMount = () => {
    listLatest().then((data) => {
      if (data.error) {
        //console.log(data.error)
      } else {
        this.setState({suggestions: data})
      }
    })
    listCategories().then((data) => {
      if (data.error) {
        console.log(data.error)
      } else {
        this.setState({categories: data})
      }
    })
    console.log(this.state.categories)
  }
  render() {
    const {classes} = this.props
    return (
      <div>
        <SEO title="MernPress - Ecommerce site " description="A Multi-vendor ecommerce site" />
        <CategoriesBar className={classes.categories} />
        <div className={classes.root}>
          <MainSlidder />
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Suggestions products={this.state.suggestions} title={this.state.suggestionTitle}/>
            </Grid>
            <Grid item md={8} >
              <Categories categories={this.state.categories}/>
              <Tab />
            </Grid>
          </Grid>
          <CategorySlidder />
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
