const express = require("express");
const addCategoryCtrl = require("../controllers/Category.controller");

const router = express.Router();

router
  .route("/")
  .post(addCategoryCtrl.create);

router
  .route("/")
  .get(addCategoryCtrl.read);

router
     .route("/:id")
     .get(addCategoryCtrl.read);  

router
  .route("/:id")
  .put(addCategoryCtrl.update);    

router
  .route("/:id")
  .delete(addCategoryCtrl.remove);

module.exports = router;  
