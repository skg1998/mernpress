const express = require("express");
const { hasAuthorization } = require('../middleware/hasAuth')
const productCtrl = require("../controllers/product.controller");
const router = express.Router();

router.route("/").get(productCtrl.list);
router.route("/:productId").get(productCtrl.read);
router.route("/productdetail/:productId").get(productCtrl.productDetail);
router.route("/related/:productId").get(productCtrl.RelatedProduct);
router.route("/latest/:id").get(productCtrl.listLatest);
router.route("/categories/:id").get(productCtrl.listCategories);
router.route("/brand-list").get(productCtrl.listBrand);
router.route("/related-product").get(productCtrl.RelatedProduct);
router.route("/top-selling-product-list").get(productCtrl.topSellingProductList);
router.route("/recent-selling-product-list").get(productCtrl.recentSellingProductList);
router.route("/today-deals").get(productCtrl.todayDeals);
router.route("/viewLog-list").get(productCtrl.viewLogList);
router.route("/photo/:productId").get(productCtrl.photo);

router
  .route("/:shopId/:productId")
  .put(productCtrl.updateProduct);

router
  .route("/:shopId/:productId")
  .delete(productCtrl.deleteProduct);

router
  .route("/shop/:shopId")
  .post(productCtrl.addProduct);

module.exports = router;



