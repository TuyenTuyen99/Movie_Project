const md5 = require("md5");
const UserModel = require("../models/users.model");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const loginController = async (req, res) => {
  const { userName, password: pwd } = req.body;
  const user = await UserModel.findOne({
    where: {
      userName,
      hashPwd: md5(pwd),
    },
  });

  if (user) {
    // create and return access-token and refresh-token
    const accessToken = jwt.sign(
      JSON.stringify({
        userName: user.userName,
        phone: user.phone,
        id: user.id,
      }),
      process.env.JWT_SECRET
    );

    const refreshToken = jwt.sign(
      JSON.stringify({
        id: user.id,
      }),
      process.env.JWT_SECRET
    );

    return res.status(200).json({
      msg: "login successfully!",
      accessToken,
      refreshToken,
    });
  }

  return res.status(400).json({ msg: "data is not valid!" });
};

module.exports = loginController;
