const express = require("express");
const { hasAuthentication, authorize } = require('../middleware/hasAuth');
const { createBlog, getAllBlog, getBlog, updateBlog, deleteBlog } = require('../controllers/blog.controller')

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Blogs
 *   description: Blog Management
 */


/**
 * @swagger
 * /blog:
 *   get:
 *     tags: [Blogs]
 *     description: Retrieve a list of Blogs from DB.
 *     responses:
 *       200:
 *         description: Returns all the Blogs
*/
router.get("/", getAllBlog)

/**
 * @swagger
 * /blog:
 *  post:
 *    tags: [Blogs]
 *    description: Use to Create a Blog
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Blog
 *        description: Create a Blog.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - desc
 *            - image
 *          properties:
 *            title:
 *              type: string
 *            desc:
 *              type: string
 *            image:
 *              type: string
 *            user:
 *              type: object
 *            categories:
 *              type: object
 *    responses:
 *      '200':
 *        description: Create Blog successfully.
 *        schema:
 *           $ref: '#/definitions/Blog'
 */
router.post("/", hasAuthentication(['admin']), authorize('admin'), createBlog);

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags: [Blogs]
 *     description: Get a Blog by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Get Blog from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A Blog by id
 *         schema:
 *           $ref: '#/definitions/Blog'
 */
router.get("/:id", getBlog);

/**
 * @swagger
 * /blog/{id}:
 *   put:
 *     tags: [Blogs]
 *     description: Update a Blog by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Update Blog from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A Blog by id
 *         schema:
 *           $ref: '#/definitions/Blog'
 */
router.put("/:id", hasAuthentication(['admin']), authorize('admin'), updateBlog);

/**
 * @swagger
 * /blog/{id}:
 *   delete:
 *     tags: [Blogs]
 *     description: Delete a Blog by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Delete Blog from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A Blog by id
 *         schema:
 *           $ref: '#/definitions/Blog'
 */
router.delete("/:id", hasAuthentication(['admin']), authorize('admin'), deleteBlog);

module.exports = router;
