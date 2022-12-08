const UserModel = require("../models/users.model");

const userInfo = async (req, res) => {
  try {
    const user = await UserModel.findOne();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server failed" });
  }
};

module.exports = userInfo;