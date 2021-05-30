const express = require("express");
const uploadfile = require('../middleware/uploadFile');
const { addCategory, getCategories, descendants, deleteCategories, updateCategories } = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(uploadfile.single("image"), addCategory);

router.route('/descendants').get(descendants)

router.route('/:id')
  .put(updateCategories)
  .delete(deleteCategories)

module.exports = router;
