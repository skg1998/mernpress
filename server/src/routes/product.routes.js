const express = require("express");
const uploadfile = require('../middleware/uploadFile');
const { hasAuthorization } = require('../middleware/hasAuth')
const { list, read, productDetail, RelatedProduct, listBrand, listCategories, listLatest, addProduct, updateProduct, deleteProduct, todayDeals, topSellingProductList, viewLogList, photo, recentSellingProductList } = require("../controllers/product.controller");
const router = express.Router();

router.route("/").get(list);
router.route("/:productId").get(read);
router.route("/productdetail/:productId").get(productDetail);
router.route("/related/:productId").get(RelatedProduct);
router.route("/latest/:id").get(listLatest);
router.route("/categories/:id").get(listCategories);
router.route("/brand-list").get(listBrand);
router.route("/related-product").get(RelatedProduct);
router.route("/top-selling-product-list").get(topSellingProductList);
router.route("/recent-selling-product-list").get(recentSellingProductList);
router.route("/today-deals").get(todayDeals);
router.route("/viewLog-list").get(viewLogList);
router.route("/photo/:productId").get(photo);

router
  .route("/:shopId/:productId")
  .put(hasAuthorization, updateProduct);

router
  .route("/:shopId/:productId")
  .delete(hasAuthorization, deleteProduct);

router
  .route("/shop/:shopId")
  .post(hasAuthorization, uploadfile.array("images", { maxCount: 4 }), addProduct);

module.exports = router;



