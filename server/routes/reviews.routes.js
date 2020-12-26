const express = require("express");
const ReviewsCtrl = require("../controllers/reviews.controllers");

const router = express.Router();

router
  .route("/")
  .get(ReviewsCtrl.getAllReviews); 

router
  .route("/")
  .post(ReviewsCtrl.addReviews);
  
router
  .route("/:id")
  .put(ReviewsCtrl.updateReviews); 
  
router
  .route("/:id")
  .delete(ReviewsCtrl.deleteReviews);  

module.exports = router;  