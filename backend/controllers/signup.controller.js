const md5 = require("md5");
const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const UserModel = require("../models/users.model");

const registrationController = async (req, res) => {
  const {
    fullName,
    userName,
    email,
    password: pwd,
    avatar,
    phone,
    address,
  } = req.body;
  const encrypted = md5(pwd);

  try {
    // check if existed email or phone
    const existedUser = await UserModel.findOne({
      where: {
        [Op.or]: [{ email }, { phone }, { userName }],
      },
    });

    if (existedUser) {
      return res.status(400).json({ msg: "Already existed email or phone!" });
    }

    // create and save into database
    await UserModel.create({
      id: uuidv4(),
      fullName,
      userName,
      email,
      hashPwd: encrypted,
      avatar,
      phone,
      address,
    });

    return res.status(201).json({ msg: "successfully registered!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = registrationController;