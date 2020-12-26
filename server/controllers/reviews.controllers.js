const Reviews = require("../models/reviews.model");
const _ = require("lodash");
const errorHandler = require("../helpers/dbErrorHandler");

const addReviews = (req, res, next) => {
  var review = new Reviews({
      userId:req.body.userId,
      comment:req.body.comment,
      rating:req.body.rating
  });
  review.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler.getErrorMessage(err)
        });
      }
      res.status(200).json({
        message: "Successfully add review!"
      });
    });
  };

const getAllReviews = (req, res) => {
 
};


const updateReviews = (req, res) => {
  
};

const deleteReviews = (req, res) => {
    
  };

  module.exports = {
    addReviews,
    getAllReviews,
    updateReviews,
    deleteReviews
  };

