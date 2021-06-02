const express = require("express");
const { hasAuthorization, authorize } = require('../middleware/hasAuth');
const { addShop, getShops, getShop, deleteShop, updateShop } = require('../controllers/shop.controller')

const router = express.Router();

router
    .route("/")
    .get(getShops)
    .post(hasAuthorization, authorize('admin'), addShop);

router.route('/:id')
    .get(getShop)
    .put(hasAuthorization, authorize('admin'), updateShop)
    .delete(hasAuthorization, authorize('admin'), deleteShop)

module.exports = router;
