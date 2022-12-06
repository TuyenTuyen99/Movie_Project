const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "bookingSeat";

const BookingSeatModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.STRING, //uuid
      primaryKey: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = BookingSeatModel;
