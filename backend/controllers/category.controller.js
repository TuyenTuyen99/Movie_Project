const CategoriesModel = require("../models/categories.model");

const categoryController = async (req, res) => {
  const { name } = req.body;

  try {
    // check if existed category
    const existedCategories = await CategoriesModel.findOne({
      where: { name },
    });

    if (existedCategories) {
      return res.status(400).json({ msg: "already existed Category!" });
    }

    // create and save into database
    await CategoriesModel.create({
      name,
    });

    return res.status(201).json({ msg: "Create category successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = categoryController;
