const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Payment";

const PaymentModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = PaymentModel;