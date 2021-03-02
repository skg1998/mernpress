const express = require("express");
const Upload = require('../helpers/uploadFile');
const BannerCtrl = require("../controllers/Banner.controller");

const router = express.Router();

router.post("/", Upload.any('images', 10), BannerCtrl.create);

router
  .route("/")
  .get(BannerCtrl.read);

router
  .route("/:id")
  .get(BannerCtrl.readById);

router
  .route("/:id")
  .put(BannerCtrl.update);

router
  .route("/:id")
  .delete(BannerCtrl.remove);

module.exports = router;   