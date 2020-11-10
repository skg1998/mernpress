const express = require("express");
const BannerCtrl = require("../controllers/Banner.controller");

const router = express.Router();

router
  .route("/")
  .get(BannerCtrl.read); 

router
   .route("/:id")
   .get(BannerCtrl.readById)  

router
  .route("/")
  .post(BannerCtrl.create);
  
router
  .route("/:id")
  .put(BannerCtrl.update); 
  
router
  .route("/:id")
  .delete(BannerCtrl.remove);  

module.exports = router;  