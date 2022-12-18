const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Schedules";

const ScheduleModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    room: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    launchDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    timeSchedule: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    movieId: {
      type: DataTypes.INTEGER,
      allowNull:true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = ScheduleModel;
