const Reviews = require("../models/reviews.model");
const _ = require("lodash");
const errorHandler = require("../util/dbErrorHandler");

// Create Review API
/**
 * @api {post} /api/v1/reviews/ Create Review API
 * @apiGroup Review
 * @apiHeader  Authorization
 * @apiParam (Request body)  Comment 
 * @apiParam (Request body)  rating 
 * @apiParamExample {json} Input
 * {
 *      "comment" : "",
 *      "rating" : "",
 * }
 * @apiSuccessExample {json} Success
 * HTTP/1.1 200 OK
 * {
 *      "message": "Successfully created new product.",
 *      "status": "1"
 * }
 * @apiSampleRequest /api/v1/review/
 * @apiErrorExample {json} Review error
 * HTTP/1.1 500 Internal Server Error
 */
const addReviews = (req, res, next) => {
  var review = new Reviews({
    userId: req.body.userId,
    comment: req.body.comment,
    rating: req.body.rating
  });
  review.save((err, result) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err)
      });
    } else {
      const Review = {
        status: 1,
        message: 'Successfully created Review',
        data: result,
      }
      res.status(200).json(Review);
    }
  });
};


const getAllReviews = (req, res) => {
  Reviews.find()
    .populate('user')
    .sort({ 'createdAt': -1 })
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    }));
};


const updateReviews = (req, res) => {

};


const deleteReviews = (req, res) => {
  Reviews.deleteOne({ id: req.params._id })
    .then(deldata => res.send(deldata))
    .catch(err => res.status(401).json(err))
};

module.exports = {
  addReviews,
  getAllReviews,
  updateReviews,
  deleteReviews
};

