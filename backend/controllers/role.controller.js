const RoleModel = require("../models/role.model");

const roleController = async (req, res) => {
  const { role } = req.body;

  try {
    // check if existed role
    const existedRole = await RoleModel.findOne({
      where: { role },
    });

    if (existedRole) {
      return res.status(400).json({ msg: "already existed role!" });
    }

    // create and save into database
    await RoleModel.create({
      role
    });

    return res.status(201).json({ msg: "Create role successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = roleController;
