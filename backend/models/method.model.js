const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Method";

const MethodModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = MethodModel;