const express = require("express");
const userCtrl = require("../controllers/user.controller");
const authCtrl = require("../util/auth");

const router = express.Router();

router
  .route("/")
  .get(userCtrl.list)

router.post('/signup', userCtrl.create);
router.post('/signin', userCtrl.login);

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
  .get(userCtrl.userByID)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

module.exports = router;
