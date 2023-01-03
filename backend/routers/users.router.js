// /changeinfo - put
// /history - get
const express = require("express");
const {findUser, updateInfoUser, forgotPwd, changePwd, getAllUsers} = require("../controllers/user.controller");
const { verifyToken, isUser } = require("../middlewares/verify.middleware");
const userRouter = express.Router();

// build APIs for router
userRouter.get("/", verifyToken, findUser);
userRouter.put("/update",verifyToken, updateInfoUser);
userRouter.put("/forgotpwd/:id", forgotPwd);
userRouter.put("/changepwd", verifyToken, changePwd);
userRouter.get("/getallusers", getAllUsers);

module.exports = userRouter;