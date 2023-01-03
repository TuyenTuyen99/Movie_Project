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
  const { password } = req.body;
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

const changePwd = async (req, res) => {
  const id = req.id;
  const { currentPwd, newPwd } = req.body;
  console.log(id, currentPwd, newPwd);
  try {
    const user = await UserModel.findOne({ where: { id } });
    if (user && user.hashPwd == md5(currentPwd)) {
      await UserModel.update(
        {
          hashPwd: md5(newPwd),
        },
        { where: { id } }
      );
      return res.status(200).json({ msg: "Successfully Updated!" });
    }
    return res.status(400).json({ msg: "Data is not valid!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

const getAllUsers = async(req, res) => {
  try {
    const users = await UserModel.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server failed" });
  }
}

module.exports = { findUser, updateInfoUser, forgotPwd, changePwd, getAllUsers };
