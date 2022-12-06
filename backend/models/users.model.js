const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "User";

const UserModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    hashPwd: {
      type: DataTypes.STRING,
    },

    phone: {
      type: DataTypes.STRING,
      unique: true,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = UserModel;