const express = require("express");
const { hasAuthentication, authorize } = require('../middleware/hasAuth');
const { addShop, getShops, getShop, deleteShop, updateShop } = require('../controllers/shop.controller')

const router = express.Router();

router
    .route("/")
    .get(getShops)
    .post(hasAuthentication(['admin']), authorize('admin'), addShop);

router.route('/:id')
    .get(getShop)
    .put(hasAuthentication(['admin']), authorize('admin'), updateShop)
    .delete(hasAuthentication(['admin']), authorize('admin'), deleteShop)

module.exports = router;
