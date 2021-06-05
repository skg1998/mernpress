const express = require("express");

const { hasAuthorization, authorize } = require('../middleware/hasAuth');
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
    .post(uploadfile, hasAuthorization, authorize('admin'), createTitle)
    .put(uploadfile, hasAuthorization, authorize('admin'), updateTitle)
    .delete(hasAuthorization, authorize('admin'), deleteTitle)

router.route('/header')
    .get(getHeader)
    .post(uploadfile, hasAuthorization, authorize('admin'), createHeader)
    .put(uploadfile, hasAuthorization, authorize('admin'), updateHeader)
    .delete(hasAuthorization, authorize('admin'), deleteHeader)

router.route('/slidder')
    .get(getSlidder)
    .post(uploadfile, hasAuthorization, authorize('admin'), createSlidder)
    .put(uploadfile, hasAuthorization, authorize('admin'), updateSlidder)
    .delete(hasAuthorization, authorize('admin'), deleteSlidder)

router.route('/banner')
    .get(getBanner)
    .post(uploadfile, hasAuthorization, authorize('admin'), createBanner)
    .put(uploadfile, hasAuthorization, authorize('admin'), updateBanner)
    .delete(hasAuthorization, authorize('admin'), deleteBanner)

module.exports = router;