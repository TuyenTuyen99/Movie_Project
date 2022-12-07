const ComboModel = require("../models/combo.model");

const comboController = async (req, res) => {
  const { name, price } = req.body;

  try {
    // check if existed combo
    const existedCombo = await ComboModel.findOne({
      where: { name },
    });

    if (existedCombo) {
      return res.status(400).json({ msg: "already existed combo!" });
    }

    // create and save into database
    await ComboModel.create({
      name,
      price
    });

    return res.status(201).json({ msg: "Create combo successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = comboController;
