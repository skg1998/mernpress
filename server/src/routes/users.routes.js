const express = require("express");
const { create, login, update, remove, list, userByID } = require("../controllers/user.controller");
const { hasAuthorization } = require('../middleware/hasAuth')

const router = express.Router();

router
  .route("/")
  .get(list)

router.post('/signup', create);
router.post('/signin', login);

router
  .route("/:id")
  .get(userByID)
  .put(hasAuthorization, update)
  .delete(hasAuthorization, remove);

module.exports = router;
