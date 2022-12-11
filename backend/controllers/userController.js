const UserModel = require("../models/users.model");

const findUser = async (req, res) => {
  try {
    const userId = req.id;
    const user = await UserModel.findOne({ where: { id: userId } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server failed" });
  }
};

module.exports = findUser;
