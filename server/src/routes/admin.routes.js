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

router.route("/").get(allowedToAdmin, list)
router.route("/userlist").get(allowedToAll, userlist);
router.route("/userlist/:id").get(allowedToAll, userlistById);
router.route("/:id").get(adminByID)
router.route('/signup').post(create);
router.route('/signin').post(login);
router.route('/logout').get(logout);
router.route('/myProfile').get(allowedToAll, getMyProfile);
router.route('/updateDetail').put(allowedToAll, update);
router.route('/:id').delete(allowedToAdmin, remove);
router.route('/forgotPassword').post(forgotPassword);
router.route('/resetPassword/:resetToken').put(resetPassword);

module.exports = router;
