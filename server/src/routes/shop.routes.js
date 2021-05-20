const express = require("express");
const { hasAuthorization } = require('../middleware/hasAuth')
const userCtrl = require("../controllers/user.controller");
const shopCtrl = require("../controllers/shop.controller");

const router = express.Router();

router.route("/").get(shopCtrl.list);
router.route("/:shopId").get(shopCtrl.read);

router
  .route("/:shopId")
  .delete(shopCtrl.isOwner, shopCtrl.remove);

router
  .route("/:shopId")
  .put(shopCtrl.isOwner, shopCtrl.update);
router
  .route("/by/:userId")
  .get(hasAuthorization, shopCtrl.listByOwner);

router.route("/logo/:shopId").get(shopCtrl.photo, shopCtrl.defaultPhoto);
router.route("/defaultphoto").get(shopCtrl.defaultPhoto);

router.param("shopId", shopCtrl.shopByID);
router.param("userId", userCtrl.userByID);

module.exports = router;
