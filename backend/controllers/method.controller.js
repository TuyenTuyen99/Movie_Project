const MethodModel = require("../models/method.model");

const methodController = async (req, res) => {
  const { type} = req.body;

  try {
    // check if existed method
    const existedMethod = await MethodModel.findOne({
      where: { type },
    });

    if (existedMethod) {
      return res.status(400).json({ msg: "already existed method!" });
    }

    // create and save into database
    await MethodModel.create({
      type
    });

    return res.status(201).json({ msg: "Create method successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = methodController;