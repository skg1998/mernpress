import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import GridList from '@material-ui/core/GridList'
import ProductCard from '../../components/Product/Product'
import AddToCart from "../../containers/cart/AddToCart"

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    textAlign: 'left',
    padding: '0 8px'
  },
  container: {
    minWidth: '100%',
    paddingBottom: '14px'
  },
  gridList: {
    width: '100%',
    minHeight: 200,
    padding: '16px 0 10px'
  },
  title: {
    padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2.5}px ${theme.spacing.unit * 2}px`,
    color: theme.palette.openTitle,
    width: '100%'
  },
  tile: {
    textAlign: 'center'
  },
  image: {
    height: '100%'
  },
  tileBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.72)',
    textAlign: 'left'
  },
  tileTitle: {
    fontSize: '1.1em',
    marginBottom: '5px',
    color: 'rgb(189, 222, 219)',
    display: 'block'
  }
}))

const Products = (props) => {
  const { products, searched } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {products.length > 0 ?
        (<div className={classes.container}>
          <GridList cellHeight={200} className={classes.gridList} cols={3}>
            {products.map((product, i) => (
              <ProductCard
                product={product}
                key={i}
                addToCart={<AddToCart item={product} />}
              />
            ))}
          </GridList>
        </div>) : searched && (<Typography type="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)}
    </div>)
}
Products.propTypes = {
  classes: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired,
  searched: PropTypes.bool.isRequired
}

export default Products
