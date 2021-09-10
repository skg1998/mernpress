const express = require('express');
const Review = require('../models/reviews.model');
const { getReviews, addReview, getReview, updateReview, deleteReview } = require('../controllers/reviews.controllers');

const router = express.Router({ mergeParams: true });

const advancedResults = require('../middleware/advancedResult');
const { hasAuthentication } = require('../middleware/hasAuth');

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review Management
 */

/**
 * @swagger
 * /review:
 *   get:
 *     tags: [Reviews]
 *     description: Retrieve a list of Reviews from DB.
 *     responses:
 *       200:
 *         description: Returns all the Reviews
*/
router.route('/').get(
    advancedResults(Review, {
        path: 'product',
        select: 'name description'
    }),
    getReviews
)

/**
 * @swagger
 * /review:
 *  post:
 *    tags: [Reviews]
 *    description: Use to Create a Review
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Review
 *        description: Create a Review.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - text
 *            - rating
 *          properties:
 *            title:
 *              type: string
 *            text:
 *              type: string
 *            rating:
 *              type: number
 *            product:
 *              type: object
 *            user:
 *              type: object
 *    responses:
 *      '200':
 *        description: Create Review successfully.
 *        schema:
 *           $ref: '#/definitions/Review'
 */
router.route('/').post(hasAuthentication(), addReview);

/**
 * @swagger
 * /review/{id}:
 *   get:
 *     tags: [Reviews]
 *     description: Retrive a review by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retrive Review from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A Review by id
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.route('/:id').get(getReview)

/**
 * @swagger
 * /review/{id}/:
 *   put:
 *     tags: [Reviews]
 *     description: Update a Review by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Update Product from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: update review by id
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.route('/:id').put(hasAuthentication(), updateReview);

/**
 * @swagger
 * /review/{id}/:
 *   delete:
 *     tags: [Reviews]
 *     description: Delete a Review by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Delete Product from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: delete review by id
 *         schema:
 *           $ref: '#/definitions/Review'
 */
router.route('/:id').delete(hasAuthentication(), deleteReview);

module.exports = router;