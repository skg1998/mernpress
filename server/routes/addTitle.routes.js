const express = require("express");
const addTitleCtrl = require("../controllers/addTitle.controller");

const router = express.Router();

router
  .route("/")
  .post(addTitleCtrl.addTitle);

module.exports = router;  
