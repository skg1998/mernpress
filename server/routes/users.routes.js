const express = require("express");
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../helpers/auth");

const router = express.Router();

router
  .route("/")
  .get(userCtrl.list)
  .post(userCtrl.create);

router
  .route("/stripe_auth/:userId")
  .put(
    authCtrl.requireSignin,
    authCtrl.hasAuthorization,
    userCtrl.stripe_auth,
    userCtrl.update
  );

router
  .route("/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userByID);

module.exports = router;
