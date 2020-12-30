const checkDuplicateEmail = require("../middleware/verifySignUp");
const controller = require("../controller/auth.controller");
const multer = require('../middleware/upload')

const app = require("express").Router()


app.post("/signup", checkDuplicateEmail, multer.single('image'), controller.signup);
app.post("/signin", controller.signin);

module.exports = app;