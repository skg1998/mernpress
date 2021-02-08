const Product = require('../models/product.model')
const _ = require('lodash')
const errorHandler = require('../helpers/dbErrorHandler')
const formidable = require('formidable')
const fs = require('fs')


// Create Product API
/**
 * @api {post} /api/v1/product/add-product Add Product API
 * @apiGroup Product
 * @apiHeader  Authorization
 * @apiParam (Request body)  productName productName
 * @apiParam (Request body)  productDescription productDescription
 * @apiParam (Request body)  sku stock keeping unit
 * @apiParam (Request body)  upc upc
 * @apiParam (Request body)  image product Image
 * @apiParam (Request body)  metaTagTitle metaTagTitle
 * @apiParam (Request body)  categoryId CategoryId
 * @apiParam (Request body)  model model
 * @apiParam (Request body)  location location
 * @apiParam (Request body)  price price
 * @apiParam (Request body)  outOfStockStatus outOfStockStatus
 * @apiParam (Request body)  requiredShipping requiredShipping
 * @apiParam (Request body)  dateAvailable dateAvailable
 * @apiParam (Request body)  condition 1->new 2->used
 * @apiParam (Request body)  status status
 * @apiParam (Request body)  sortOrder sortOrder
 * @apiParamExample {json} Input
 * {
 *      "productName" : "",
 *      "productDescription" : "",
 *      "sku" : "",
 *      "image" : "",
 *      "metaTagTitle" : "",
 *      "categoryId" : "",
 *      "upc" : "",
 *      "model" : "",
 *      "price" : "",
 *      "location" : "",
 *      "outOfStockStatus" : "",
 *      "requiredShipping" : "",
 *      "dateAvailable" : "",
 *      "status" : "",
 *      "sortOrder" : "",
 *      "condition" : "",
 *      "image":[
 *      {
 *      "image":""
 *      "containerName":""
 *      "defaultImage":""
 *      }
 *      ]
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully created new product.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/product/add-product
 * @apiErrorExample {json} AddProduct error
 * HTTP/1.1 500 Internal Server Error
 */
const addProduct = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Image could not be uploaded"
      })
    }
    let product = new Product(fields)
    product.shop = req.shop
    if (files.image) {
      product.image.data = fs.readFileSync(files.image.path)
      product.image.contentType = files.image.type
    }

    product.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        })
      } else {
        const productdata = {
          status: 1,
          message: 'Successfully created Product',
          data: result,
        }
        res.status(200).send(productdata);
      }
    })
  })
}

const productByID = (req, res, next, id) => {
  Product.findById(id).populate('shop', '_id name').exec((err, product) => {
    if (err || !product)
      return res.status('400').json({
        error: "Product not found"
      })
    req.product = product
    next()
  })
}

// Product Detail API
/**
 * @api {get} /api/v1/product/product-detail/:id Product Detail API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "status": "1"
 *      "message": "Successfully get product Detail",
 *      "data":"{}"
 * }
 * @apiSampleRequest /api/v1/product/product-detail/:id
 * @apiErrorExample {json} productDetail error
 * HTTP/1.1 500 Internal Server Error
 */
const productDetail = (req, res, next) => {
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

// update Product API
/**
 * @api {post} /api/v1/product/update-product/:id Update Product API
 * @apiGroup Product
 * @apiHeader {String} Authorization
 * @apiParam (Request body) {Number} productId productId
 * @apiParam (Request body) {String} productName productName
 * @apiParam (Request body) {String} productDescription productDescription
 * @apiParam (Request body) {String} sku stock keeping unit
 * @apiParam (Request body) {String} upc upc
 * @apiParam (Request body) {String} image product Image
 * @apiParam (Request body) {String} metaTagTitle metaTagTitle
 * @apiParam (Request body) {String} categoryId CategoryId
 * @apiParam (Request body) {Number}  model model
 * @apiParam (Request body) {String} location location
 * @apiParam (Request body) {String} price price
 * @apiParam (Request body) {Number} outOfStockStatus outOfStockStatus
 * @apiParam (Request body) {Number} requiredShipping requiredShipping
 * @apiParam (Request body) {String} dateAvailable dateAvailable
 * @apiParam (Request body) {String} condition 1->new 2->used
 * @apiParam (Request body) {Number} status status
 * @apiParam (Request body) {Number} sortOrder sortOrder
 * @apiParamExample {json} Input
 * {
 *      "productName" : "",
 *      "productDescription" : "",
 *      "sku" : "",
 *      "image" : "",
 *      "metaTagTitle" : "",
 *      "categoryId" : "",
 *      "upc" : "",
 *      "model" : "",
 *      "price" : "",
 *      "location" : "",
 *      "outOfStockStatus" : "",
 *      "requiredShipping" : "",
 *      "dateAvailable" : "",
 *      "status" : "",
 *      "outOfStockStatus" : "",
 *      "condition" : "",
 *      "sortOrder" : "",
 *      "image":[
 *      {
 *      "image":""
 *      "containerName":""
 *      "defaultImage":""
 *      }
 *      ],
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully updated product.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/product/update-product/:id
 * @apiErrorExample {json} updateProduct error
 * HTTP/1.1 500 Internal Server Error
 */
const updateProduct = (req, res, next) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Photo could not be uploaded"
      })
    }
    let product = req.product
    product = _.extend(product, fields)
    product.updated = Date.now()
    if (files.image) {
      product.image.data = fs.readFileSync(files.image.path)
      product.image.contentType = files.image.type
    }
    product.save((err, result) => {
      if (err) {
        return res.status(400).send({
          error: errorHandler.getErrorMessage(err)
        })
      }
      res.json(result)
    })
  })
}

// Delete Product API
/**
 * @api {delete} /api/v1/product/delete-product/:id Delete Single Product API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiParamExample {json} Input
 * {
 *      "id" : "",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *  "message": "Successfully deleted Product.",
 *  "status": "1"
 * }
 * @apiSampleRequest /api/v1/product/delete-product/:id
 * @apiErrorExample {json} productDelete error
 * HTTP/1.1 500 Internal Server Error
 */

const deleteProduct = (req, res, next) => {
  let product = req.product
  product.remove((err, deletedProduct) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(deletedProduct)
  })
}

//  Product List API
/**
 * @api {get} /api/v1/product/list ProductList API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get product list..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/list
 * @apiErrorExample {json} product list error
 * HTTP/1.1 500 Internal Server Error
 */
const list = (req, res) => {
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

//  Shop List API
/**
 * @api {get} /api/v1/product/shop-list shop API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get all shop list..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/shop-list
 * @apiErrorExample {json} product list error
 * HTTP/1.1 500 Internal Server Error
 */
const listByShop = (req, res) => {
  Product.find({ shop: req.shop._id }, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  }).populate('shop', '_id name').select('-image')
}

//  Latest Product List API
/**
 * @api {get} /api/v1/product/latest-list Latest ProductList API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get latest product list..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/latest-list
 * @apiErrorExample {json} product list error
 * HTTP/1.1 500 Internal Server Error
 */
const listLatest = (req, res) => {
  Product.find({}).sort('-created').limit(5).populate('shop', '_id name').exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  })
}

//  Categories List API
/**
 * @api {get} /api/v1/product/categories-list CategoriesList API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get categories list..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/categories-list
 * @apiErrorExample {json} categories list error
 * HTTP/1.1 500 Internal Server Error
 */
const listCategories = (req, res) => {
  Product.distinct('category', {}, (err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  })
}

//  Brand Product List API
/**
 * @api {get} /api/v1/product/brand-list  Brand ProductList API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get related product list..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/brand-list
 * @apiErrorExample {json} Brand product error
 * HTTP/1.1 500 Internal Server Error
 */
const listBrand = () => {

}

//  Related Product List API
/**
 * @api {get} /api/v1/product/related-product-list  Related ProductList API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get related product list..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/related-product-list
 * @apiErrorExample {json} top selling product error
 * HTTP/1.1 500 Internal Server Error
 */
const RelatedProduct = (req, res) => {
  Product.find({ "_id": { "$ne": req.product }, "category": req.product.category }).limit(5).populate('shop', '_id name').exec((err, products) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      })
    }
    res.json(products)
  })
}

//  Top Selling Product List API
/**
 * @api {get} /api/v1/product/top-selling-productlist  Top selling ProductList API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully get top selling product..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/top-selling-productlist
 * @apiErrorExample {json} top selling product error
 * HTTP/1.1 500 Internal Server Error
 */
const topSellingProductList = () => {

}

// Recent Selling Product List
/**
 * @api {get} /api/v1/product/recent-selling-product  Recent Selling Product List API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "successfully listed recent product selling!",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/product/recent-selling-product
 * @apiErrorExample {json} Selling Product List error
 * HTTP/1.1 500 Internal Server Errorproduct
 */
const recentSellingProductList = () => {

}

// update product to Today Deals API
/**
 * @api {put} /api/v1/product/update-todayDeals/:id Update Today Deals API
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiParam (Request body)  todayDeals TodayDeals should be 0 or 1
 * @apiParamExample {json} Input
 * {
 *      "todayDeals" : "",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully updated product to today Deals.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/product/update-todayDeals/:id
 * @apiErrorExample {json} todayDeals error
 * HTTP/1.1 500 Internal Server Error
 */
const todayDeals = () => {

}

// Recent viewLog list API
/**
 * @api {get} /api/v1/product/viewLog-list Product View Log List
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiParam (Request body) limit limit
 * @apiParam (Request body) offset offset
 * @apiParam (Request body) count count in number or boolean
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully got Product view Log List..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/viewLog-list
 * @apiErrorExample {json} ViewLog List error
 * HTTP/1.1 500 Internal Server Error
 */
const viewLogList = () => {

}

// Customer product view list API
/**
 * @api {get} /api/v1/product/customerProductView-list/:id Customer product View List
 * @apiGroup Product
 * @apiHeader Authorization
 * @apiParam (Request body) limit limit
 * @apiParam (Request body) offset offset
 * @apiParam (Request body) count count in number or boolean
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully got Product view Log List..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/customerProductView-list/:id
 * @apiErrorExample {json} customerProductView List error
 * HTTP/1.1 500 Internal Server Error
 */

const customerProductViewList = () => {

}

// Product Details Excel Document download
/**
 * @api {get} /api/v1/product/product-excel-list Product Excel
 * @apiGroup Product
 * @apiParam (Request body) productId productId
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully download the Product Excel List..!!",
 *      "status": "1",
 *      "data": {},
 * }
 * @apiSampleRequest /api/v1/product/product-excel-list
 * @apiErrorExample {json} product Excel List error
 * HTTP/1.1 500 Internal Server Error
 */
const productExcelDocument = () => {

}

const photo = (req, res, next) => {
  if (req.product.image.data) {
    res.set("Content-Type", req.product.image.contentType)
    return res.send(req.product.image.data)
  }
  next()
}

const defaultPhoto = (req, res) => {
  //return res.sendFile(process.cwd() + profileImage)
  return res.sendFile(process.cwd())
}

const read = (req, res) => {
  req.product.image = undefined
  return res.json(req.product)
}


const decreaseQuantity = (req, res, next) => {
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

const increaseQuantity = (req, res, next) => {
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

module.exports = {
  addProduct,
  productByID,
  productDetail,
  updateProduct,
  deleteProduct,
  list,
  listByShop,
  listLatest,
  listCategories,
  listBrand,
  RelatedProduct,
  topSellingProductList,
  recentSellingProductList,
  todayDeals,
  viewLogList,
  customerProductViewList,
  read,
  photo,
  defaultPhoto,
  decreaseQuantity,
  increaseQuantity,
}

