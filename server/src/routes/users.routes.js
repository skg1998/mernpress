const express = require("express");
const {
    create,
    login,
    update,
    remove,
    list,
    userByID,
    getMyProfile,
    logout,
    forgotPassword,
    resetPassword
} = require("../controllers/user.controller");

const { hasAuthorization } = require('../middleware/hasAuth')

const router = express.Router();

router.route("/").get(list)
router.route("/:id").get(userByID)
router.route('/signup').post(create);
router.route('/signin').post(login);
router.route('/logout').get(logout);
router.route('/myProfile').get(hasAuthorization, getMyProfile);
router.route('/updateDetail').put(hasAuthorization, update);
router.route('/:id').put(hasAuthorization, remove);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:resetToken').put(resetPassword);

module.exports = router;
