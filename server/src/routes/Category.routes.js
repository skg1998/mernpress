const express = require("express");
const addCategoryCtrl = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .post(addCategoryCtrl.addCategory);

router
  .route("/")
  .get(addCategoryCtrl.categorylist);

router
     .route("/:id")
     .get(addCategoryCtrl.categorylistById);  

router
  .route("/:id")
  .put(addCategoryCtrl.updateCategory);    

router
  .route("/:id")
  .delete(addCategoryCtrl.deleteCategory);

module.exports = router;  
