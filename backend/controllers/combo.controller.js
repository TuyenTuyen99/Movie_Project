const ComboModel = require("../models/combo.model");

const addNewCombo = async (req, res) => {
  const { name, price, imageUrl, detail } = req.body;

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
      price,
      imageUrl,
      detail,
    });

    return res.status(201).json({ msg: "Create combo successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

const getAllCombos = async (req, res) => {
  try {
    const combos = await ComboModel.findAll({
      order: [["price", "ASC"]],
    });
    res.status(200).json(combos);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

module.exports = { addNewCombo, getAllCombos };
