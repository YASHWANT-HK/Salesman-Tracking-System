const express = require("express");
const router = express.Router();
const { authController } = require("../controllers");
const { signupValidator } = require("../Validators/auth");
const validate = require("../Validators/validate");

router.post("/signup", signupValidator, validate, authController.signup );


module.exports = router;