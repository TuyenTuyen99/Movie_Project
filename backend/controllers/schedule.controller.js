const { Op } = require("sequelize");
const ScheduleModel = require("../models/Schedule.model");

const scheduleController = async (req, res) => {
  const { room, timeSchedule, launchDate, movieId } = req.body;

  try {
    // check if existed seat type
    const existedSchedule = await ScheduleModel.findOne({
      where: {
        [Op.and]: [{ room }, { timeSchedule }, { launchDate }],
      },
    });

    if (existedSchedule) {
      return res
        .status(400)
        .json({ msg: "Already existed schedule in this room!" });
    }
    console.log(movieId);

    // create and save into database
    await ScheduleModel.create({
      room,
      movieId,
      timeSchedule,
      launchDate,
    });

    return res.status(201).json({ msg: "Create schedule successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ msg: "server error!" });
  }
};

const getSchedule = async (req, res) => {
  try {
    const schedule = await ScheduleModel.findAll();
    res.status(200).json(schedule);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch schedule" });
  }
};

module.exports = { scheduleController, getSchedule };
