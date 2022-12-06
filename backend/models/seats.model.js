const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Seats";

const SeatModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SeatModel;