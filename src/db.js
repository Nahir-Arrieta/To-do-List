const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_DATABASE, DB_PASSWORD } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;
