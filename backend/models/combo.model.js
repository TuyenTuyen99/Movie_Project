const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Combo";

const ComboModel = connection.define(
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

    image: {
      type: DataTypes.STRING,
      allowNull: true,
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

module.exports = ComboModel;