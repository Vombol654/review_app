const express = require("express");
const {
  userController,
  createUserController,
} = require("../controller/user.controller");

const router = express.Router();

// get user
// router.get("/user", userController);
// create new user - post request
router.post("/create", createUserController);
module.exports = router;
