const express = require('express');
const { getReviews, addReview, getReview, updateReview, deleteReview } = require('../controllers/reviews.controllers');
const Review = require('../models/reviews.model');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResult');
const { protect, authorize } = require('../middleware/hasAuth');

router
    .route('/')
    .get(
        advancedResults(Review, {
            path: 'product',
            select: 'name description'
        }),
        getReviews
    )
    .post(protect, authorize('user', 'admin'), addReview);

router
    .route('/:id')
    .get(getReview)
    .put(protect, authorize('user', 'admin'), updateReview)
    .delete(protect, authorize('user', 'admin'), deleteReview);

module.exports = router;