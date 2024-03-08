const express = require("express");

const {
  userController,
  createUserController,
} = require("../controller/user.controller");
const { userValidator, validate } = require("../middlewares/validator");

const router = express.Router();

// get user
// router.get("/user", userController);
// create new user - post request
router.post("/create", userValidator, validate, createUserController);
module.exports = router;
