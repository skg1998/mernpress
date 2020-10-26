const express = require("express");
const adminCtrl = require("../controllers/admin.controller");

const router = express.Router();

router
  .route("/")
  .post(adminCtrl.adminsignup);

module.exports = router;
