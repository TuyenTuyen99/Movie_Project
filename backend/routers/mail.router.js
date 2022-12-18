const express = require("express");
const forgotPwdMail = require("../controllers/mail.controller");
const sendMailRouter = express.Router();

sendMailRouter.post("/forgotpwd", forgotPwdMail);

module.exports = sendMailRouter;
