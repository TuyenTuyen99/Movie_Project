require("dotenv").config();
const jwt = require("jsonwebtoken");
const UserModel = require("../models/users.model");

const verifyToken = async (req, res, next) => {
  const secretKey = process.env.JWT_SECRET;
  const inputToken = req.headers["x-access-token"];

  // verify token
  try {
    const dataObj = jwt.verify(inputToken, secretKey);
    const foundUser = await UserModel.findOne({
      where: {
        id: dataObj.id,
        userName: dataObj.userName,
        phone: dataObj.phone,
      },
    });

    // if User exist
    if (foundUser) {
      // forward id property to check role
      req.roleId = foundUser.roleId;
      req.id = foundUser.id;
      req.userName = foundUser.userName;
      req.email = foundUser.email;
      next();
      return;
    }

    // does not exist
    return res.status(403).json({ msg: "Forbidden!" });
  } catch (error) {
    return res.status(401).json({ msg: "Your token is not valid" });
  }
};

const isAdmin = (req, res, next) => {
  const role = req.role;

  if (role.toLowerCase() === "admin") {
    next();
    return;
  }

  return res
    .status(403)
    .json({ msg: "Forbidden! This action requires Admin role to do." });
};

const isUser = (req, res, next) => {
  const roleId = req.roleId;

  if (roleId === 3) {
    next();
    return;
  }

  return res
    .status(403)
    .json({ msg: "Forbidden! This action requires Admin role to do." });
};

module.exports = {
  verifyToken,
  isAdmin,
  isUser,
};
