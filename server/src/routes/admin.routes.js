const express = require("express");
const {
    create,
    login,
    update,
    remove,
    list,
    userlist,
    userlistById,
    adminByID,
    getMyProfile,
    logout,
    forgotPassword,
    resetPassword
} = require("../controllers/admin.controller");

const { hasAuthentication, authorize } = require('../middleware/hasAuth')

const router = express.Router();
const allowedToAll = hasAuthentication(['admin', 'superadmin']);
const allowedToAdmin = hasAuthentication(['superadmin']);

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin Management
 */

/**
 * @swagger
 * /admin:
 *   get:
 *     tags: [Admin]
 *     description: Fetch All Admin
 *     responses:
 *       200:
 *         description: Returns all the Admin
 */
router.get("/", allowedToAdmin, list)

/**
 * @swagger
 * /admin/{id}:
 *   get:
 *     tags: [Admin]
 *     description: Retrive a single admin
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive Admin from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A single admin
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get("/:id", adminByID)

/**
 * @swagger
 * /admin/signup:
 *  post:
 *    tags: [Admin]
 *    summary: create a admin account
 *    description: Use to create a admin account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Create Account
 *        description: Create Admin Account.
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - email
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            email:
 *              type: string
 *            password:
 *              type: string
 *            role:
 *              type: string
 *    responses:
 *      '200':
 *        description: Create Admin successfully.
 */
router.post('/signup', create);

/**
 * @swagger
 * /admin/signin:
 *  post:
 *    tags: [Admin]
 *    description: Use to login to account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Login Account
 *        description: Login to Account.
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      '200':
 *        description: Login successfully.
 */
router.post('/signin', login);

/**
 * @swagger
 * /admin/logout:
 *   get:
 *     tags: [Admin]
 *     description: Logout admin
 *     responses:
 *       200:
 *         description: Logout Sucessfully
 */
router.get('/logout', logout);

/**
 * @swagger
 * /admin/myProfile:
 *   get:
 *     tags: [Admin]
 *     description: Fetch Admin Profile
 *     responses:
 *       200:
 *         description: Return my profile
 */
router.get('/myProfile', allowedToAll, getMyProfile);

/**
 * @swagger
 * /admin/{id}:
 *   put:
 *     tags: [Admin]
 *     description: Update a admin
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Update admin from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A single admin
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.put('/:id', allowedToAll, update);

/**
 * @swagger
 * /admin/{id}:
 *   delete:
 *     tags: [Admin]
 *     description: Delete admin
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Delete admin from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Delete A single admin
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.delete('/:id', allowedToAdmin, remove);

/**
 * @swagger
 * /admin/forgotPassword:
 *  post:
 *    tags: [Admin]
 *    summary: Forget Password
 *    description: Forget Password
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Forget Password
 *        description: Forget Password
 *        schema:
 *          type: object
 *          required:
 *            - email
 *          properties:
 *            email:
 *              type: string
 *    responses:
 *      '200':
 *        description: Forget Password.
 */
router.post('/forgotPassword', forgotPassword);

/**
 * @swagger
 * /admin/resetPassword/{resetToken}:
 *   put:
 *     tags: [Admin]
 *     description: Reset Password
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: resetToken
 *        description: Reset Password from DB.
 *        schema:
 *          type: string
 *          required:
 *            - resetToken
 *          properties:
 *            resetToken:
 *              type: string
 *     responses:
 *       200:
 *         description: Reset Password
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.put('/resetPassword/:resetToken', resetPassword);

/**
 * @swagger
 * /admin/userlist:
 *   get:
 *     tags: [Admin]
 *     description: Fetch All Admin
 *     responses:
 *       200:
 *         description: Returns all the Admin
 */
router.get("/userlist", allowedToAll, userlist);

/**
 * @swagger
 * /admin/userlist/{id}:
 *   get:
 *     tags: [Admin]
 *     description: Retrive a single admin
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive Admin from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A single admin
 *         schema:
 *           $ref: '#/definitions/Admin'
 */
router.get("/userlist/:id", allowedToAll, userlistById);

module.exports = router;
