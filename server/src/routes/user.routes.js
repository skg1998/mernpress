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
 * /users/{id}:
 *   get:
 *     tags:
 *       - Users
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
router.route("/:id").get(userByID);

/**
 * @swagger
 * /users/signup:
 *  post:
 *    tags:
 *      - Users
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
router.route('/signup').post(create);

/**
 * @swagger
 * /users/signin:
 *  post:
 *    tags:
 *      - Users
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
router.route('/signin').post(login);

/**
 * @swagger
 * /users/logout:
 *   get:
 *     tags:
 *       - Users
 *     description: Logout user 
 *     responses:
 *       200:
 *         description: Logout Sucessfully
 */
router.route('/logout').get(logout);

/**
 * @swagger
 * /users/myProfile:
 *   get:
 *     tags:
 *       - Users
 *     description: fetch user profile
 *     responses:
 *       200:
 *         description: Fetch User Profile Sucessfully
 */
router.route('/myProfile').get(hasAuthentication(), getMyProfile);

/**
 * @swagger
 * /users/updateDetail/{id}:
 *   put:
 *     tags:
 *       - Users
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
router.route('/updateDetail/:id').put(hasAuthentication(), update);

/**
 * @swagger
 * /users/deleteAccount/{id}:
 *   delete:
 *     tags:
 *       - Users
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
router.route('/deleteAccount/:id').delete(hasAuthentication(), remove);

/**
 * @swagger
 * /users/forgotPassword:
 *  post:
 *    tags:
 *      - Users
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
router.route('/forgotPassword').post(forgotPassword);

/**
 * @swagger
 * /users/resetPassword/{resetToken}:
 *   put:
 *     tags:
 *       - Users
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
router.route('/resetPassword/:resetToken').put(resetPassword);

module.exports = router;
