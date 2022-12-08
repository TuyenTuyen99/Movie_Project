const express = require("express");
const authRouter = express.Router();
const validateDataMiddleware = require('../middlewares/validation.middleware');
const loginController = require('../controllers/login.controller');
const registrationController = require("../controllers/signup.controller");

const {
  verifyToken,
  isAdmin,
  isUser,
} = require('../middlewares/verify.middleware')
// build APIs for router
authRouter.post("/login", loginController);
authRouter.post("/signup", validateDataMiddleware, registrationController);

module.exports = authRouter;