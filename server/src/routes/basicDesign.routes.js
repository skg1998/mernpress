const express = require("express");

const { hasAuthentication, authorize } = require('../middleware/hasAuth');
const uploadfile = require('../middleware/uploadFile');

const {
    createTitle,
    createHeader,
    createSlidder,
    createBanner,
    getTitle,
    getHeader,
    getSlidder,
    getBanner,
    updateTitle,
    updateHeader,
    updateSlidder,
    updateBanner,
    deleteTitle,
    deleteHeader,
    deleteSlidder,
    deleteBanner
} = require('../controllers/basicDesign.controller');

const router = express.Router();

router.route('/title')
    .get(getTitle)
    .post(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), createTitle)
    .put(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), updateTitle)
    .delete(hasAuthentication(['admin']), authorize('admin'), deleteTitle)

router.route('/header')
    .get(getHeader)
    .post(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), createHeader)
    .put(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), updateHeader)
    .delete(hasAuthentication(['admin']), authorize('admin'), deleteHeader)

router.route('/slidder')
    .get(getSlidder)
    .post(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), createSlidder)
    .put(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), updateSlidder)
    .delete(hasAuthentication(['admin']), authorize('admin'), deleteSlidder)

router.route('/banner')
    .get(getBanner)
    .post(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), createBanner)
    .put(uploadfile.single('image'), hasAuthentication(['admin']), authorize('admin'), updateBanner)
    .delete(hasAuthentication(['admin']), authorize('admin'), deleteBanner)

module.exports = router;