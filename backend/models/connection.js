const { Sequelize } = require("sequelize");
const {
  DATABASE_NAME,
  USERNAME1,
  PASSWORD,
  HOST,
  DIALECT,
} = require("../config/db.config");

const connection = new Sequelize(DATABASE_NAME, USERNAME1, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});

module.exports = { connection };
