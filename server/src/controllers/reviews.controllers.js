const ErrorResponse = require('../util/errorResponse');
const Review = require('../models/reviews.model');
const Product = require('../models/product.model');

/**
 * 
 * @desc      Get reviews
 * @route     GET /api/v1/reviews
 * @route     GET /api/v1/products/:productId/reviews
 * @access    Public
 */
exports.getReviews = async (req, res, next) => {
  try {
    if (req.params.productId) {
      const reviews = await Review.find({ product: req.params.productId });

      return res.status(200).json({
        success: true,
        count: reviews.length,
        data: reviews
      });
    } else {
      res.status(200).json(res.advancedResults);
    }
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Get single review
 * @route     GET /api/v1/reviews/:id
 * @access    Public
 */
exports.getReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id).populate({
      path: 'product',
      select: 'name description'
    });

    if (!review) {
      return next(
        new ErrorResponse(`No review found with the id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({
      success: true,
      data: review
    });
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Add review
 * @route     POST /api/v1/products/:productId/reviews
 * @access    Private
 */
exports.addReview = async (req, res, next) => {
  try {
    req.body.product = req.params.productId;
    req.body.user = req.user.id;

    const product = await Product.findById(req.params.productId);

    if (!product) {
      return next(
        new ErrorResponse(
          `No product with the id of ${req.params.productId}`,
          404
        )
      );
    }

    const review = await Review.create(req.body);

    res.status(201).json({
      success: true,
      data: review
    });
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Update review
 * @route     PUT /api/v1/reviews/:id
 * @access    Private
 */
exports.updateReview = async (req, res, next) => {
  try {
    let review = await Review.findById(req.params.id);

    if (!review) {
      return next(
        new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
      );
    }

    // Make sure review belongs to user or user is admin
    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(new ErrorResponse(`Not authorized to update review`, 401));
    }

    review = await Review.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    review.save();

    res.status(200).json({
      success: true,
      data: review
    });
  } catch (err) {
    next(err);
  }
}

/**
 * 
 * @desc      Delete review
 * @route     DELETE /api/v1/reviews/:id
 * @access    Private
 */
exports.deleteReview = async (req, res, next) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return next(
        new ErrorResponse(`No review with the id of ${req.params.id}`, 404)
      );
    }

    // Make sure review belongs to user or user is admin
    if (review.user.toString() !== req.user.id && req.user.role !== 'admin') {
      return next(new ErrorResponse(`Not authorized to delete review`, 401));
    }

    await review.remove();

    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (err) {
    next(err);
  }
}

