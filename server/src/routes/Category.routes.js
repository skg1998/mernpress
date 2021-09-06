const express = require("express");
const { hasAuthentication, authorize } = require('../middleware/hasAuth');
const uploadfile = require('../middleware/uploadFile');
const { addCategory, getCategories, descendants, deleteCategories, updateCategories, getCategory } = require("../controllers/Category.controller");

const router = express.Router();

/**
 * @swagger
 * /category/getAllCategory:
 *   get:
 *     tags:
 *       - Category
 *     description: Fetch All Category
 *     responses:
 *       200:
 *         description: Returns all the category
 */
router.route("/getAllCategory").get(getCategories)

/**
 * @swagger
 * /category/createCategory:
 *  post:
 *    tags:
 *      - Category
 *    description: Use to Create a Category
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Category
 *        description: Create a Category.
 *        schema:
 *          type: object
 *          required:
 *            - name
 *            - image
 *          properties:
 *            name:
 *              type: string
 *            image:
 *              type: string
 *            parent:
 *              type: object
 *            ancestors:
 *              type: array
 *              items:
 *                type: object
 *    responses:
 *      '200':
 *        description: Create Category successfully.
 *        schema:
 *           $ref: '#/definitions/Category'
 */
router.route("/createCategory").post(hasAuthentication(['admin']), authorize('admin'), uploadfile.single("image"), addCategory);

/**
 * @swagger
 * /category/descendants:
 *   get:
 *     tags:
 *       - Category
 *     description: Fetch All Descendants
 *     responses:
 *       200:
 *         description: Returns all the descendants category
 */
router.route('/descendants').get(descendants);

/**
 * @swagger
 * /category/getCategoryById/{id}:
 *   get:
 *     tags:
 *       - Category
 *     description: Retrive a category by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive Category from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A category by id
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.route('/getCategoryById/:id').get(getCategory)

/**
 * @swagger
 * /category/updateCategory/{id}:
 *   put:
 *     tags:
 *       - Category
 *     description: Retrive a category by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive Category from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A category by id
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.route('/updateCategory/:id').put(hasAuthentication(['admin']), authorize('admin'), updateCategories)

/**
 * @swagger
 * /category/updateCategory/{id}:
 *   delete:
 *     tags:
 *       - Category
 *     description: Retrive a category by id
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive Category from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A category by id
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.route('/deletecategory/:id').delete(hasAuthentication(['admin']), authorize('admin'), deleteCategories)

module.exports = router;
