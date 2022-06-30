const express = require("express");
const router = express.Router();
const {
  viewHome,
  viewRegister,
  viewLogin,
} = require("../controllers/publicController");
const { isLoggedIn } = require("../middlewares/auth");

router.get("/", isLoggedIn, viewHome);
router.get("/users/register", isLoggedIn, viewRegister);
router.get("/users/login", isLoggedIn, viewLogin);

module.exports = router;
