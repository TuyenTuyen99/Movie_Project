// /changeinfo - put
// /history - get
const express = require("express");
const findUser = require("../controllers/userController");
const { verifyToken, isUser } = require("../middlewares/verify.middleware");
const userRouter = express.Router();

// build APIs for router
userRouter.get("/", verifyToken, findUser);

module.exports = userRouter;