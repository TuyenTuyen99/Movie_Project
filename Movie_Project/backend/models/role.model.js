const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Roles";

const RoleModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = RoleModel;