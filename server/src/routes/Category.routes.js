const express = require("express");
const uploadfile = require('../middleware/uploadFile');
const { addCategory, getCategories, descendants, deleteCategories, updateCategories, getCategory } = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(uploadfile.single("image"), addCategory);

router.route('/descendants').get(descendants)

router.route('/:id')
  .get(getCategory)
  .put(updateCategories)
  .delete(deleteCategories)

module.exports = router;
