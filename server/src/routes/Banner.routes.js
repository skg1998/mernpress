const express = require("express");
const Upload = require('../middleware/uploadFile');
const BannerCtrl = require("../controllers/Banner.controller");

const router = express.Router();

router.post("/", Upload.array('images', 2), BannerCtrl.create);

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