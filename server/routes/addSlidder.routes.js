const express = require("express");
const slidderCtrl = require("../controllers/addSlidder.controller");

const router = express.Router();

router
  .route("/")
  .get(slidderCtrl.read); 

router
  .route("/")
  .post(slidderCtrl.create);
  
router
  .route("/")
  .put(slidderCtrl.update); 
  
router
  .route("/")
  .delete(slidderCtrl.remove);  

module.exports = router;  