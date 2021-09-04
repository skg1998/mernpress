const express = require('express');
const Review = require('../models/reviews.model');
const { getReviews, addReview, getReview, updateReview, deleteReview } = require('../controllers/reviews.controllers');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResult');
const { hasAuthentication } = require('../middleware/hasAuth');

router
    .route('/')
    .get(
        advancedResults(Review, {
            path: 'product',
            select: 'name description'
        }),
        getReviews
    )
    .post(hasAuthentication(), addReview);

router
    .route('/:id')
    .get(getReview)
    .put(hasAuthentication(), updateReview)
    .delete(hasAuthentication(), deleteReview);

module.exports = router;