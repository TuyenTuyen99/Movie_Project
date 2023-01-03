const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "OrderCombo";

const OrderComboModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.STRING, //uuid
      primaryKey: true,
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = OrderComboModel;
