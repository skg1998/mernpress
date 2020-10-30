import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Suggestions from '../containers/product/Suggestions'
import {listLatest, listCategories} from '../containers/product/api-product.js'
import Search from '../containers/product/Search'
import Categories from '../containers/product/Categories'
import Slidder from '../components/Slidder/Slidder'

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: 15,
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
      <div className={classes.root}>
        <Slidder />
        <Grid container spacing={24}>
          <Grid item xs={8} sm={8}>
            <Search categories={this.state.categories}/>
            <Categories categories={this.state.categories}/>
          </Grid>
          <Grid item xs={4} sm={4}>
            <Suggestions products={this.state.suggestions} title={this.state.suggestionTitle}/>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
