const express = require("express");

// import userController from "../controllers/userController.js";
const userController = require("../controllers/userController.js");

const router = express.Router();

router.route("/users").get(userController.getUsers);

module.exports = router;
