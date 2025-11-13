const { check } = require("express-validator");

const signupValidator = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email")
        .isEmail()
        .withMessage("Invalid email")
        .notEmpty()
        .withMessage("email is required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be 6 charater long")
        .notEmpty()
        .withMessage("Password is required"),
];

module.exports = { signupValidator };