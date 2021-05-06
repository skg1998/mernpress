import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import { CardHeader, CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import Grid from '@material-ui/core/Grid'
import PropTypes from 'prop-types'

//Api call
import { read, listRelated } from '../containers/product/api-product.js'


//Components  
import Suggestions from '../containers/product/Suggestions'
import AddToCart from '../containers/cart/AddToCart'
import Review from '../components/Rating/Review';
import ProductAction from '../containers/product/ProductAction';
import ProductDetail from '../containers/product/ProductDetail';
import SEO from '../components/SEO/Seo';


const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: '15px',
    marginTop: '90px'
  },
  flex: {
    display: 'flex'
  },
  card: {
    padding: '24px 40px 40px'
  },
  subheading: {
    margin: '24px',
    color: theme.palette.openTitle
  },
  price: {
    padding: '16px',
    margin: '16px 0px',
    display: 'flex',
    backgroundColor: '#93c5ae3d',
    fontSize: '1.3em',
    color: '#375a53',
  },
  media: {
    height: 200,
    display: 'inline-block',
    width: '50%',
    marginLeft: '24px'
  },
  icon: {
    verticalAlign: 'sub'
  },
  link: {
    color: '#3e4c54b3',
    fontSize: '0.9em'
  },
  addCart: {
    width: '35px',
    height: '35px',
    padding: '10px 12px',
    borderRadius: '0.25em',
    backgroundColor: '#5f7c8b'
  },
  action: {
    margin: '8px 24px',
    display: 'inline-block'
  },
  review: {
    marginTop: '30px'
  }
})

class Product extends Component {
  constructor({ match }) {
    super()
    this.state = {
      product: { shop: {} },
      suggestions: [],
      suggestionTitle: 'Related Products'
    }
    this.match = match
  }
  loadProduct = (productId) => {
    read({ productId: productId }).then((data) => {
      if (data.error) {
        this.setState({ error: data.error })
      } else {
        this.setState({ product: data })
        listRelated({
          productId: data._id
        }).then((data) => {
          if (data.error) {
            console.log(data.error)
          } else {
            this.setState({ suggestions: data })
          }
        })
      }
    })
  }
  componentDidMount = () => {
    this.loadProduct(this.match.params.productId)
  }
  componentWillReceiveProps = (props) => {
    this.loadProduct(props.match.params.productId)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <SEO title="Product-Detail" description="Product detail" />
        <Grid container spacing={40}>
          <Grid item xs={5} sm={5}>
            <ProductDetail />
          </Grid>
          <Grid item xs={4} sm={4}>
            <Card className={classes.card}>
              <CardHeader
                title={this.state.product.name}
                subheader={this.state.product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                action={
                  <span className={classes.action}>
                    <AddToCart cartStyle={classes.addCart} item={this.state.product} />
                  </span>
                }
              />
              <div className={classes.flex}>
                <CardMedia
                  className={classes.media}
                  title={this.state.product.name}
                />
                <Typography component="p" type="subheading" className={classes.subheading}>
                  {this.state.product.description}<br />
                  <span className={classes.price}>$ {this.state.product.price}</span>
                  <Link to={'/shops/' + this.state.product.shop._id} className={classes.link}>
                    <span>
                      <Icon className={classes.icon}>shopping_basket</Icon> {this.state.product.shop.name}
                    </span>
                  </Link>
                </Typography>
              </div>
            </Card>
          </Grid>
          <Grid item xs={3} sm={3}>
            <ProductAction />
          </Grid>
          {this.state.suggestions.length > 0 &&
            (<Grid item xs={5} sm={5}>
              <Suggestions products={this.state.suggestions} title='Related Products' />
            </Grid>
            )
          }
        </Grid>
        <Review className={classes.review} />
      </div>
    )
  }
}

Product.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Product)
