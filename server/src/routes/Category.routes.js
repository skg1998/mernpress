const express = require("express");
const { hasAuthentication, authorize } = require('../middleware/hasAuth');
const uploadfile = require('../middleware/uploadFile');
const { addCategory, getCategories, descendants, deleteCategories, updateCategories, getCategory } = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(hasAuthentication(['admin']), authorize('admin'), uploadfile.single("image"), addCategory);

router.route('/descendants').get(descendants)

router.route('/:id')
  .get(getCategory)
  .put(hasAuthentication(['admin']), authorize('admin'), updateCategories)
  .delete(hasAuthentication(['admin']), authorize('admin'), deleteCategories)

module.exports = router;
