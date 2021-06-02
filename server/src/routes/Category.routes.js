const express = require("express");
const { hasAuthorization, authorize } = require('../middleware/hasAuth');
const uploadfile = require('../middleware/uploadFile');
const { addCategory, getCategories, descendants, deleteCategories, updateCategories, getCategory } = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(hasAuthorization, authorize('admin'), uploadfile.single("image"), addCategory);

router.route('/descendants').get(descendants)

router.route('/:id')
  .get(getCategory)
  .put(hasAuthorization, authorize('admin'), updateCategories)
  .delete(hasAuthorization, authorize('admin'), deleteCategories)

module.exports = router;
