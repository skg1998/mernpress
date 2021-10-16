const Product = require('../models/product.model');
const Image = require('../models/image.model');
const ErrorResponse = require('../util/errorResponse');
const Cloudnary = require('../util/cloudnary');

/**
 * 
 * @desc      Add Product
 * @route     POST /api/v1/products/
 * @access    Private
 */
exports.addProduct = async (req, res, next) => {
  try {
    const { title, desc, variants, brand, catalogs, category, discount, shop } = req.body;

    let files = variants.image;
    if (files.length <= 0) {
      return next(new ErrorResponse('Please upload images', 400))
    }

    const images = [];

    file.map(async file => {
      const fileUrl = await Cloudnary.uploader.upload(file.path);
      const img = await Image.create({ data: fileUrl.secure_url, cloudnaryId: fileUrl.public_id });
      images.push(img.data);
    })

    const variant = {
      color: variants.color,
      images: images,
      sizes: variants.sizes
    };

    const product = new Product({
      title: title,
      desc: desc,
      variants: variant,
      brand: brand,
      catalogs: catalogs,
      category: category,
      discount: discount,
      shop: shop
    })

    await product.save();

    res.status(200).json({
      success: true,
      data: product,
      message: `Product has been Created Successfully !`
    })
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Get list of Product
 * @route     GET /api/v1/products/?query
 * @access    Public
 */
exports.list = async (req, res, next) => {
  try {
    const query = {}
    if (req.query.search)
      query.name = { '$regex': req.query.search, '$options': "i" }
    if (req.query.category && req.query.category != 'All')
      query.category = req.query.category

    const product = await Product.find(query).populate('category').populate('discount').populate('review');

    res.status(200).json({
      success: true,
      count: product.length,
      data: product,
      message: 'All data fetch successfully !'
    })
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Get Product by id
 * @route     GET /api/v1/products/:id
 * @access    Public
 */
exports.productDetail = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id).populate('category').populate('discount').populate('review');

    if (!product) {
      return next(new ErrorResponse(`product detail of given id not found`, 400));
    }

    res.status(200).json({
      success: true,
      data: product,
      message: `Product detail of given id: ${req.params.id} found succesfully !`
    })
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Update Product
 * @route     PUT /api/v1/products/:id
 * @access    Private
 */
exports.updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse(`Product of given id: ${req.params.id} not found`, 400))
    }

    await Product.findByIdAndupdate(req.params.id, data, { new: true, runValidators: true });
    res.status(200).json({
      success: true,
      message: `delete product by id: ${req.params.id} successfully !`
    })
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Delete Product
 * @route     DELETE /api/v1/products/
 * @access    Private
 */
exports.deleteProduct = async (req, res, next) => {
  try {
    let product = await Product.findById(req.params.id);
    if (!product) {
      return next(new ErrorResponse(`Product of given id: ${req.params.id} not found`, 400))
    }

    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: `delete product by id: ${req.params.id} successfully !`
    })
  } catch (err) {
    next(err);
  }
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


exports.listBrand = async (req, res, next) => {
  try {
    const product = await Product.find();
    if (!product) {
      return next(new ErrorResponse(`Product not found`, 400))
    }

    res.status(200).json({
      success: true,
      lenght: product.length,
      data: product,
      message: `top selling product find successfully !`
    })
  } catch (err) {
    next(err);
  }
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

exports.topSellingProductList = async (req, res, next) => {
  try {
    const product = await Product.find();
    if (!product) {
      return next(new ErrorResponse(`Product not found`, 400))
    }

    res.status(200).json({
      success: true,
      lenght: product.length,
      data: product,
      message: `top selling product find successfully !`
    })
  } catch (err) {
    next(err);
  }
}

exports.recentSellingProductList = async (req, res, next) => {
  try {
    const product = await Product.find();
    if (!product) {
      return next(new ErrorResponse(`Product not found`, 400))
    }

    res.status(200).json({
      success: true,
      lenght: product.length,
      data: product,
      message: `recent selling product find successfully !`
    })
  } catch (err) {
    next(err);
  }
}

exports.todayDeals = async (req, res, next) => {
  try {
    const product = await Product.find();
    if (!product) {
      return next(new ErrorResponse(`Product not found`, 400))
    }

    res.status(200).json({
      success: true,
      lenght: product.length,
      data: product,
      message: `today deals find successfully !`
    })
  } catch (err) {
    next(err);
  }
}

exports.viewLogList = async (req, res, next) => {
  try {
    const product = await Product.find();
    if (!product) {
      return next(new ErrorResponse(`Product not found`, 400))
    }

    res.status(200).json({
      success: true,
      lenght: product.length,
      data: product,
      message: `viewlog list find successfully !`
    })
  } catch (err) {
    next(err);
  }
}

exports.customerProductViewList = () => {

}

exports.productExcelDocument = () => {

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
