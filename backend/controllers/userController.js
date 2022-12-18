const UserModel = require("../models/users.model");
const md5 = require("md5");
const { v4: uuidv4 } = require("uuid");

const findUser = async (req, res) => {
  try {
    const userName = req.userName;
    const user = await UserModel.findOne({ where: { userName } });
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server failed" });
  }
};

const updateInfoUser = async (req, res) => {
  const { fullName, email, phone, address } = req.body;
  const userName = req.userName;
  try {
    const update = await UserModel.update(
      {
        fullName,
        email,
        phone,
        address,
      },
      { where: { userName: userName } }
    );
    return res.status(200).json({ msg: "Successfully Updated!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

const forgotPwd = async (req, res) => {
  const id = req.params.id;
  const {password} = req.body;
  try {
    await UserModel.update(
      {
        hashPwd: md5(password),
      },
      { where: { id } }
    );
    return res.status(200).json({ msg: "Successfully Updated!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

module.exports = { findUser, updateInfoUser, forgotPwd };
