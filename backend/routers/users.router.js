// /changeinfo - put
// /history - get
const express = require("express");
const {findUser, updateInfoUser, forgotPwd} = require("../controllers/userController");
const { verifyToken, isUser } = require("../middlewares/verify.middleware");
const userRouter = express.Router();

// build APIs for router
userRouter.get("/", verifyToken, findUser);
userRouter.put("/update",verifyToken, updateInfoUser);
userRouter.put("/forgotpwd/:id", forgotPwd);

module.exports = userRouter;