const express = require("express");
const adminCtrl = require("../controllers/admin.controller");

const router = express.Router();

router
  .route("/signup")
  .post(adminCtrl.Adminsignup);

router
  .route("/login")
  .post(adminCtrl.AdminLogin);

router
  .route("/logout")
  .get(adminCtrl.Adminsignout);

router
  .route("/all-admin")
  .get(adminCtrl.allAdmin);

module.exports = router;
