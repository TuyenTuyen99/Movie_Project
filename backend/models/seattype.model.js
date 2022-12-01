const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "SeatType";

const SeatTypeModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SeatTypeModel;
