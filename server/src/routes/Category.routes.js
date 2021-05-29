const express = require("express");
const { addCategory, getCategories, descendants } = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .get(getCategories)
  .post(addCategory);

router.route('/descendants').get(descendants)
module.exports = router;
