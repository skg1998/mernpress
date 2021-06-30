const express = require('express');
const Review = require('../models/reviews.model');
const { getReviews, addReview, getReview, updateReview, deleteReview } = require('../controllers/reviews.controllers');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResult');
const { hasAuthorization, authorize } = require('../middleware/hasAuth');

router
    .route('/')
    .get(
        advancedResults(Review, {
            path: 'product',
            select: 'name description'
        }),
        getReviews
    )
    .post(hasAuthorization, authorize('user', 'admin'), addReview);

router
    .route('/:id')
    .get(getReview)
    .put(hasAuthorization, authorize('user', 'admin'), updateReview)
    .delete(hasAuthorization, authorize('user', 'admin'), deleteReview);

module.exports = router;