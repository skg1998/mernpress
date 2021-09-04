const express = require("express");
const uploadfile = require('../middleware/uploadFile');
const { hasAuthentication, authorize } = require('../middleware/hasAuth')
const { list, productDetail, RelatedProduct, listBrand, listCategories, listLatest, addProduct, updateProduct, deleteProduct, todayDeals, topSellingProductList, viewLogList, recentSellingProductList } = require("../controllers/product.controller");
const router = express.Router();

router.route("/").get(list);
router.route("/related/:productId").get(RelatedProduct);
router.route("/latest/:id").get(listLatest);
router.route("/categories/:id").get(listCategories);
router.route("/brand-list").get(listBrand);
router.route("/related-product").get(RelatedProduct);
router.route("/top-selling-product-list").get(topSellingProductList);
router.route("/recent-selling-product-list").get(recentSellingProductList);
router.route("/today-deals").get(todayDeals);
router.route("/viewLog-list").get(viewLogList);

router
  .route("/shop/:shopId")
  .post(hasAuthentication(['admin']), authorize('admin'), uploadfile.array("images", { maxCount: 4 }), addProduct);

router
  .route("/:shopId/:productId")
  .get(hasAuthentication(['admin']), productDetail)
  .put(hasAuthentication(['admin']), authorize('admin'), updateProduct)
  .delete(hasAuthentication(['admin']), authorize('admin'), deleteProduct);


module.exports = router;



