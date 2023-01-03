const { Op } = require("sequelize");
const { v4: uuidv4 } = require("uuid");
const BookingSeatModel = require("../models/bookingseat.model");

const addNewBookingSeat = async (req, res) => {
  const data = req.body.map((item) => {
    return {
      id: uuidv4(),
      scheduleId: item.scheduleId,
      seatId: item.seatId,
      bookingId: item.bookingId,
    };
  });
  console.log("data:", data);

  try {
    // check if seat sold out
    const soldId = [];
    data.map(async (item) => {
      const sold = await BookingSeatModel.findOne({
        where: {
          [Op.and]: [{ scheduleId: item.scheduleId }, { seatId: item.seatId }],
        },
      });
      if (sold) {
        soldId.push({ "seatId: ": item.seatId });
      }
    });

    if (soldId.length > 0) {
      return res.json({ msg: soldId });
    }

    // create and save into database
    const newSeats = await BookingSeatModel.bulkCreate(data);

    return res.status(200).json(newSeats);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

const seatSold = async (req, res) => {
  const scheduleId = req.params.scheduleId;
  try {
    // check if seat sold out
    const sold = await BookingSeatModel.findAll({
      where: {
        scheduleId,
      },
    });
    // console.log(sold)
    return res.status(200).json(sold);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

module.exports = { addNewBookingSeat, seatSold };
