const BookingModel = require("../models/booking.model");
const { v4: uuidv4 } = require("uuid");

const addNewBooking = async (req, res) => {
  const userId = req.id;
  try {
    // create and save into database
    const booking = await BookingModel.create({
      id: uuidv4(),
      userId
    });
    return res.status(200).json(booking);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

module.exports = addNewBooking;
