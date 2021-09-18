const express = require("express");
const {
    create,
    login,
    update,
    remove,
    userByID,
    getMyProfile,
    logout,
    forgotPassword,
    resetPassword
} = require("../controllers/user.controller");

const { hasAuthentication } = require('../middleware/hasAuth')

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User Management
 */


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     tags: [User]
 *     description: Retrive a single user
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive User from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.get("/:id", userByID);

/**
 * @swagger
 * /users/signup:
 *  post:
 *    tags: [User]
 *    summary: create a user account
 *    description: Use to create a user account
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Create Account
 *        description: Create User Account.
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
 *    responses:
 *      '200':
 *        description: Create User successfully.
 */
router.post('/signup', create);

/**
 * @swagger
 * /users/signin:
 *  post:
 *    tags: [User]
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
 * /users/logout:
 *   get:
 *     tags: [User]
 *     description: Logout user 
 *     responses:
 *       200:
 *         description: Logout Sucessfully
 */
router.get('/logout', logout);

/**
 * @swagger
 * /users/myProfile:
 *   get:
 *     tags: [User]
 *     description: fetch user profile
 *     responses:
 *       200:
 *         description: Fetch User Profile Sucessfully
 */
router.get('/myProfile', hasAuthentication(), getMyProfile);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     tags: [User]
 *     description: Retrive a single user
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Retive User from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: A single user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.put('/:id', hasAuthentication(), update);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags: [User]
 *     description: Delete user
 *     produces:
 *       - application/json
 *     parameters:
 *      - in: path
 *        name: id
 *        description: Delete user from DB.
 *        schema:
 *          type: string
 *          required:
 *            - id
 *          properties:
 *            id:
 *              type: string
 *     responses:
 *       200:
 *         description: Delete A single user
 *         schema:
 *           $ref: '#/definitions/Users'
 */
router.delete('/:id', hasAuthentication(), remove);

/**
 * @swagger
 * /users/forgotPassword:
 *  post:
 *    tags: [User]
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
 * /users/resetPassword/{resetToken}:
 *   put:
 *     tags: [User]
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
 *           $ref: '#/definitions/Users'
 */
router.put('/resetPassword/:resetToken', resetPassword);


module.exports = router;
