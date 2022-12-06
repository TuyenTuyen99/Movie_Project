const express = require("express");
const authRouter = express.Router();
const validateDataMiddleware = require('../middlewares/validation.middleware');
const loginController = require('../controllers/login.controller');
const signupController = require("../controllers/signup.controller");
const roleController = require("../controllers/role.controller");
const categoryController = require("../controllers/category.controller");
const registrationController = require("../controllers/signup.controller");
const seatTypeController = require("../controllers/seatType.controller");
const methodController = require("../controllers/method.controller");

// build APIs for router
authRouter.post("/login", loginController);
authRouter.post("/signup", validateDataMiddleware, registrationController);




module.exports = authRouter;