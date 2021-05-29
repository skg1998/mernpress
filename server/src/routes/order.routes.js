const express = require("express");
const orderCtrl = require("../controllers/order.controller");
const productCtrl = require("../controllers/product.controller");
const { hasAuthorization } = require('../middleware/hasAuth')

const router = express.Router();

router
  .route("/:userId")
  .post(
    hasAuthorization,
    productCtrl.decreaseQuantity,
    orderCtrl.create
  );

router
  .route("/shop/:shopId")
  .get(hasAuthorization, orderCtrl.listByShop);

router.route("/user/:userId").get(hasAuthorization, orderCtrl.listByUser);

router.route("/status_values").get(orderCtrl.getStatusValues);

//Process charge for product
router
  .route("/:shopId/cancel/:productId")
  .put(
    hasAuthorization,
    productCtrl.increaseQuantity,
    orderCtrl.update
  );

router
  .route("/:orderId/charge/:userId/:shopId")
  .put(
    hasAuthorization,
    orderCtrl.update
  );

router
  .route("/status/:shopId")
  .put(hasAuthorization, orderCtrl.update);

router.route("/:orderId").get(orderCtrl.read);

module.exports = router;
