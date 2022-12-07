const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Booking";

const BookingModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.STRING, 
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = BookingModel;