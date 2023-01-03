const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const OrderComboModel = require("../models/ordercombo.model");

const addNewOrderCombo = async (req, res) => {
  const data = req.body.map((item) => {
    return {
      id: uuidv4(),
      comboId: item.comboId,
      quantity: item.quantity,
      bookingId: item.bookingId,
    };
  });

  try {
    // create and save into database
    const newOrders = await OrderComboModel.bulkCreate(data);
    return res.status(200).json(newOrders);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

module.exports = addNewOrderCombo;
