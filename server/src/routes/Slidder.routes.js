const express = require("express");
const { hasAuthorization, authorize } = require('../middleware/hasAuth');
const slidderCtrl = require("../controllers/Slidder.controller");

const router = express.Router();

router
  .route("/")
  .get(slidderCtrl.read);

router
  .route("/")
  .post(hasAuthorization, authorize('admin'), slidderCtrl.create);

router
  .route("/:id")
  .put(hasAuthorization, authorize('admin'), slidderCtrl.update)
  .delete(hasAuthorization, authorize('admin'), slidderCtrl.remove);

module.exports = router;