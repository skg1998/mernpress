const express = require("express");
const addTitleCtrl = require("../controllers/Title.controller");
const Upload = require('../util/uploadFile');

const router = express.Router();

router.post('/addtitle', Upload.array('images', 2), addTitleCtrl.addTitle);

router
  .route("/readtitle")
  .get(addTitleCtrl.readTitle);

router
  .route("/updatetitle")
  .put(addTitleCtrl.updateTitle);

router
  .route("/deletetitle")
  .delete(addTitleCtrl.deleteTitle);

module.exports = router;
