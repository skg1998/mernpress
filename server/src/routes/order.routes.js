const express = require("express");
const orderCtrl = require("../controllers/order.controller");
const productCtrl = require("../controllers/product.controller");
const { hasAuthorization } = require('../middleware/hasAuth')
const shopCtrl = require("../controllers/shop.controller");
const userCtrl = require("../controllers/user.controller");

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
  .get(hasAuthorization, shopCtrl.isOwner, orderCtrl.listByShop);

router.route("/user/:userId").get(hasAuthorization, orderCtrl.listByUser);

router.route("/status_values").get(orderCtrl.getStatusValues);

//Process charge for product
router
  .route("/:shopId/cancel/:productId")
  .put(
    hasAuthorization,
    shopCtrl.isOwner,
    productCtrl.increaseQuantity,
    orderCtrl.update
  );

router
  .route("/:orderId/charge/:userId/:shopId")
  .put(
    hasAuthorization,
    shopCtrl.isOwner,
    orderCtrl.update
  );

router
  .route("/status/:shopId")
  .put(hasAuthorization, shopCtrl.isOwner, orderCtrl.update);

router.route("/:orderId").get(orderCtrl.read);

router.param("userId", userCtrl.userByID);
router.param("shopId", shopCtrl.shopByID);
router.param("productId", productCtrl.productByID);
router.param("orderId", orderCtrl.orderByID);

module.exports = router;
