const express = require("express");
const orderCtrl = require("../controllers/order.controller");
const productCtrl = require("../controllers/product.controller");
const { hasAuthentication } = require('../middleware/hasAuth')

const router = express.Router();

router
  .route("/:userId")
  .post(
    hasAuthentication(),
    productCtrl.decreaseQuantity,
    orderCtrl.create
  );

router
  .route("/shop/:shopId")
  .get(hasAuthentication(), orderCtrl.listByShop);

router.route("/user/:userId").get(hasAuthentication(), orderCtrl.listByUser);

router.route("/status_values").get(orderCtrl.getStatusValues);

//Process charge for product
router
  .route("/:shopId/cancel/:productId")
  .put(
    hasAuthentication(),
    productCtrl.increaseQuantity,
    orderCtrl.update
  );

router
  .route("/:orderId/charge/:userId/:shopId")
  .put(
    hasAuthentication(),
    orderCtrl.update
  );

router
  .route("/status/:shopId")
  .put(hasAuthentication(), orderCtrl.update);

router.route("/:orderId").get(orderCtrl.read);

module.exports = router;
