const express = require("express");
const slidderCtrl = require("../controllers/addSlidder.controller");

const router = express.Router();

router
  .route("/")
  .post(slidderCtrl.addImageSlidder);

module.exports = router;  