const SeatTypeModel = require("../models/seattype.model");

const seatTypeController = async (req,res) => {
  const { type, price } = req.body;

  try {
    // check if existed seat type
    const existedSeatType = await SeatTypeModel.findOne({
      where: { type },
    });

    if (existedSeatType) {
      return res.status(400).json({ msg: "already existed seat type!" });
    }

    // create and save into database
    await SeatTypeModel.create({
      type,
      price
    });

    return res.status(201).json({ msg: "Create seat type successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = seatTypeController;