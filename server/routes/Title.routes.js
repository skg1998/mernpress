const express = require("express");
const addTitleCtrl = require("../controllers/Title.controller");

const router = express.Router();

router
  .route("/")
  .post(addTitleCtrl.addTitle);

router
  .route("/")
  .get(addTitleCtrl.readTitle);

router
  .route("/")
  .put(addTitleCtrl.updateTitle);  

router
  .route("/")
  .delete(addTitleCtrl.deleteTitle);
    

module.exports = router;  
