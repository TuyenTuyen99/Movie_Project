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
      type: DataTypes.DATE,
      allowNull: false,
    },

    timeSchedule: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = ScheduleModel;
