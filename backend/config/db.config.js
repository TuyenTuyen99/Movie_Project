require("dotenv").config();

const DATABASE_NAME = process.env.DATABASE_NAME;
const USERNAME1 = process.env.USERNAME1;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const DIALECT = process.env.DIALECT;

module.exports = {
  DATABASE_NAME,
  USERNAME1,
  PASSWORD,
  HOST,
  DIALECT,
};
