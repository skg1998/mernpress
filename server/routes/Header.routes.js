const express = require("express");
const HeaderCtrl = require("../controllers/Header.controller");

const router = express.Router();

router
  .route("/getHeader")
  .get(HeaderCtrl.getHeader);

router
  .route("/addHeader")
  .post(HeaderCtrl.addHeader); 

router
  .route("/updateHeader")
  .put(HeaderCtrl.updateHeader);  

router
  .route("/deleteHeader")
  .put(HeaderCtrl.deleteHeader);    

module.exports = router;
