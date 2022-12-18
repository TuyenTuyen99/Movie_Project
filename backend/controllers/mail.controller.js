require("dotenv").config();
const nodemailer = require("nodemailer");
const { Op } = require("sequelize");
const UserModel = require("../models/users.model");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.HOST_EMAIL_USER,
    pass: process.env.HOST_EMAIL_PWD,
  },
});

const forgotPwdMail = async (req, res) => {
  const { mailOrUserName } = req.body;
  const user = await UserModel.findOne({
    where: {
      [Op.or]: [{ userName: mailOrUserName }, { email: mailOrUserName }],
    },
  });

  if (user) {
    try {
      const htmlContent = `
      <p>Hello ${user.fullName}</p>
      <p>You requested for forgot password, kindly use this <a href="http://localhost:3000/user/forgotpwd/${user.id}">link</a> to forgot your password</p>
      `;
      await transporter.sendMail({
        to: user.email,
        subject: "Forgot Password - Movie Cinema",
        from: process.env.HOST_EMAIL_USER,
        html: htmlContent,
      });
      res.status(200).json({ msg: "Send mail success" });
    } catch (error) {
      res.status(500).json({ msg: "Send email error" });
      console.log(error);
    }
  } else {
    res.status(400).json({ msg: "Data is not valid!" });
  }
};

module.exports = forgotPwdMail;
