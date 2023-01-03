const SeatModel = require("../models/seats.model");
const SeatTypeModel = require("../models/seattype.model");

const addNewSeat = async (req, res) => {
  const { name, typeId } = req.body;

  try {
    // check if existed seat type
    const existedSeat = await SeatModel.findOne({
      where: { name },
    });

    if (existedSeat) {
      return res.status(400).json({ msg: "already existed seat!" });
    }

    // create and save into database
    await SeatModel.create({
      name,
      typeId,
    });

    return res.status(201).json({ msg: "Create seat successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

const getAllSeat = async (req, res) => {
  try {
    const seats = await SeatModel.findAll({
      include: [SeatTypeModel],
      order: [["name", "ASC"]],
    });
    res.status(200).json(seats);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "Server error!" });
  }
};

module.exports = {addNewSeat, getAllSeat};
