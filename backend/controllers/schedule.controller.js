const { Op, Sequelize } = require("sequelize");
const MovieModel = require("../models/movies.model");
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

const getAllSchedules = async (req, res) => {
  try {
    const schedules = await ScheduleModel.findAll({
      attributes: [
        "id",
        "room",
        "launchDate",
        [
          Sequelize.fn("time_format", Sequelize.col("timeSchedule"), "%H:%m"),
          "time",
        ],
        "movieId",
      ],
    });
    res.status(200).json(schedules);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch schedule" });
  }
};

const getSchedule = async (req, res) => {
  const id = req.params.id;
  try {
    const schedule = await ScheduleModel.findOne({
      where: {id},
    });
    res.status(200).json(schedule);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch schedule" });
  }
};

const movieSchedule = async (req, res) => {
  const movieId = req.params.id;
  console.log("movieId: ", movieId);
  try {
    const schedule = await ScheduleModel.findAll({
      where: { movieId },
      order: [["timeSchedule","ASC"]]
    });
    res.status(200).json(schedule);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ msg: "Server get failed in trying to fetch Movie Schedule" });
  }
};

module.exports = { scheduleController, getAllSchedules, movieSchedule, getSchedule };
