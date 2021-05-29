const Product = require('../models/product.model')
const ErrorResponse = require('../util/errorResponse');

/**
 * 
 * @desc      Add Product
 * @route     POST /api/v1/products/
 * @access    Private
 */
exports.addProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      success: true,
      data: product,
      message: `Product has been Created Successfully !`
    })
  } catch (err) {
    next(err);
  }
}

exports.productByID = (req, res, next, id) => {
  Product.findById(id).populate('shop', '_id name').exec((err, product) => {
    if (err || !product)
      return res.status('400').json({
        error: "Product not found"
      })
    req.product = product
    next()
  })
}

exports.productDetail = (req, res, next) => {
  Product.find({ _id: req.param.id }, (err, product) => {
    if (err) {
      return res.status('400').json({
        error: "Product not found"
      })
    } else {
      const productdata = {
        status: 1,
        message: 'Successfully get Product Detail',
        data: product,
      }
      res.status(200).send(productdata);
    }
  })
}

exports.updateProduct = (req, res, next) => {

}

exports.deleteProduct = (req, res, next) => {

}

exports.list = (req, res) => {
  const query = {}
  if (req.query.search)
    query.name = { '$regex': req.query.search, '$options': "i" }
  if (req.query.category && req.query.category != 'All')
    query.category = req.query.category
  Product.find(query, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  }).populate('shop', '_id name').select('-image')
}


exports.listByShop = (req, res) => {
  Product.find({ shop: req.shop._id }, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  }).populate('shop', '_id name').select('-image')
}


exports.listLatest = (req, res) => {
  Product.find({}).sort('-created').limit(5).populate('shop', '_id name').exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  })
}

exports.listCategories = (req, res) => {
  Product.distinct('category', {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  })
}


exports.listBrand = () => {

}


exports.RelatedProduct = (req, res) => {
  Product.find({ "_id": { "$ne": req.product }, "category": req.product.category }).limit(5).populate('shop', '_id name').exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  })
}

exports.topSellingProductList = () => {

}

exports.recentSellingProductList = () => {

}

exports.todayDeals = () => {

}

exports.viewLogList = () => {

}

exports.customerProductViewList = () => {

}

exports.productExcelDocument = () => {

}

exports.photo = (req, res, next) => {
  if (req.product.image.data) {
    res.set("Content-Type", req.product.image.contentType)
    return res.send(req.product.image.data)
  }
  next()
}

exports.defaultPhoto = (req, res) => {
  return res.sendFile(process.cwd())
}

exports.read = (req, res) => {
  req.product.image = undefined
  return res.json(req.product)
}


exports.decreaseQuantity = (req, res, next) => {
  let bulkOps = req.body.order.products.map((item) => {
    return {
      "updateOne": {
        "filter": { "_id": item.product._id },
        "update": { "$inc": { "quantity": -item.quantity } }
      }
    }
  })
  Product.bulkWrite(bulkOps, {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: "Could not update product"
      })
    }
    next()
  })
}

exports.increaseQuantity = (req, res, next) => {
  Product.findByIdAndUpdate(req.product._id, { $inc: { "quantity": req.body.quantity } }, { new: true })
    .exec((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      }
      next()
    })
}
