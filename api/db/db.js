const Sequelize = require("sequelize");
const chalk = require("chalk");

console.log(chalk.yellow("\n Openning connection to Postgres"));

const db = new Sequelize("postgres://postgres@localhost:5432/navent", {
  loggin: false,
});

module.exports = db;
