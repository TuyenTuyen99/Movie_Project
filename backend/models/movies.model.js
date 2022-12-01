const { DataTypes } = require("sequelize");
const { connection } = require("./connection");
const MODEL_NAME = "Movies";

const MovieModel = connection.define(
  MODEL_NAME,
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    actors: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    director: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    releaseDate: {
      type: DataTypes.DATE,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = MovieModel;
