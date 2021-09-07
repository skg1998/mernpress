const express = require("express");
const uploadfile = require('../middleware/uploadFile');
const { hasAuthentication, authorize } = require('../middleware/hasAuth')
const { list, productDetail, RelatedProduct, listBrand, listCategories, listLatest, addProduct, updateProduct, deleteProduct, todayDeals, topSellingProductList, viewLogList, recentSellingProductList } = require("../controllers/product.controller");
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product Management
 */


/**
 * @swagger
 * /products:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of products from DB.
 *     responses:
 *       200:
 *         description: Returns all the products
*/
router.route("/").get(list);

/**
 * @swagger
 * /products/related:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of releted products from DB.
 *     responses:
 *       200:
 *         description: Returns all the releted products
*/
router.route("/related").get(RelatedProduct);

/**
 * @swagger
 * /products/related:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of releted products from DB.
 *     responses:
 *       200:
 *         description: Returns all the releted products
*/
router.route("/latest").get(listLatest);

router.route("/categories").get(listCategories);

/**
 * @swagger
 * /products/brand-list:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of brand-list from DB.
 *     responses:
 *       200:
 *         description: Returns all the brand-list
*/
router.route("/brand-list").get(listBrand);

/**
 * @swagger
 * /products/related-product:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of related-product from DB.
 *     responses:
 *       200:
 *         description: Returns all the related-product
*/
router.route("/related-product").get(RelatedProduct);

/**
 * @swagger
 * /products/top-selling-product-list:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of top-selling-product-list from DB.
 *     responses:
 *       200:
 *         description: Returns all the top-selling-product-list
*/
router.route("/top-selling-product-list").get(topSellingProductList);

/**
 * @swagger
 * /products/recent-selling-product-list:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of top-selling-product-list from DB.
 *     responses:
 *       200:
 *         description: Returns all the top-selling-product-list
*/
router.route("/recent-selling-product-list").get(recentSellingProductList);

/**
 * @swagger
 * /products/today-deals:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of today-deals from DB.
 *     responses:
 *       200:
 *         description: Returns all the today-deals
*/
router.route("/today-deals").get(todayDeals);

/**
 * @swagger
 * /products/viewLog-list:
 *   get:
 *     tags: [Products]
 *     description: Retrieve a list of viewLog-list from DB.
 *     responses:
 *       200:
 *         description: Returns all the viewLog-list
*/
router.route("/viewLog-list").get(viewLogList);

/**
 * @swagger
 * /product/shop/{shopId}:
 *  post:
 *    tags: [Products]
 *    description: Use to Create a Products
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Products
 *        description: Create a Products.
 *        schema:
 *          type: object
 *          required:
 *            - title
 *            - description
 *          properties:
 *            title:
 *              type: string
 *            description:
 *              type: string
 *            images:
 *              type: array
 *              items:
 *                type: object
 *            variants:
 *              type: array
 *              items:
 *                type: object
 *            brand:
 *              type: string
 *            catalogs: 
 *              type: array
 *              items:
 *                type: object
 *            category:
 *              type: object
 *            discount:
 *              type: object
 *            shop:
 *              type: object
 *            review:
 *              type: object
 *    responses:
 *      '200':
 *        description: Create Product successfully.
 *        schema:
 *           $ref: '#/definitions/Products'
 */
router
  .route("/shop/:shopId")
  .post(hasAuthentication(['admin']), authorize('admin'), uploadfile.array("images", { maxCount: 4 }), addProduct);

/**
 * @swagger
 * /products/{shopId}/{productId}:
 *   get:
 *     tags: [Products]
 *     description: Retrive a category by id
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
 *         description: A category by id
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.route("/:shopId/:productId").get(hasAuthentication(['admin']), productDetail)

/**
 * @swagger
 * /products/{shopId}/{productId}:
 *   put:
 *     tags: [Products]
 *     description: Retrive a category by id
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
 *         description: A category by id
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.route("/:shopId/:productId").put(hasAuthentication(['admin']), authorize('admin'), updateProduct)

/**
 * @swagger
 * /products/{shopId}/{productId}:
 *   delete:
 *     tags: [Products]
 *     description: Retrive a category by id
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
 *         description: A category by id
 *         schema:
 *           $ref: '#/definitions/Category'
 */
router.route("/:shopId/:productId").delete(hasAuthentication(['admin']), authorize('admin'), deleteProduct);


module.exports = router;



