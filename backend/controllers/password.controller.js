const md5 = require("md5");
const UserModel = require("../models/users.model");

const changePwd = async (req, res) => {
  const { userName, password: pwd } = req.body;
  const user = await UserModel.findOne({
    where: {
      userName,
      hashPwd: md5(pwd),
    },
  });

  if (user) {
    

  }
}