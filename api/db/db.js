const Sequelize = require('sequelize')
const chalk = require('chalk')

console.log(chalk.yellow('\n Openning connection to Postgres'))

//db para linux
// const db = new Sequelize("postgres://postgres@localhost:5432/navent", {
//   logging: false,
// });

//db para windows

const db = new Sequelize('postgres://postgres:8712@localhost:5432/navent', {
  logging: false,
})

module.exports = db
