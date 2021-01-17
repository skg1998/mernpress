const express = require("express");
const Upload = require('../helpers/uploadFile');
const BannerCtrl = require("../controllers/Banner.controller");

const router = express.Router();

router.post("/",Upload.single('images') ,BannerCtrl.create);

router
  .route("/")
  .get(BannerCtrl.read);
  
router
  .route("/:banner_id")
  .get(BannerCtrl.read);  
  
router
  .route("/:banner_id")
  .put(BannerCtrl.update); 
  
router
  .route("/:banner_id")
  .delete(BannerCtrl.remove);  

module.exports = router;   