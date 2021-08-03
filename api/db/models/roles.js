const S = require('sequelize')
const db = require('../db')

class Roles extends S.Model {}

Roles.init(
  {
    name: {
      type: S.STRING,
    },
  },
  { sequelize: db, timestamps: false, modelName: 'roles' }
)

module.exports = Roles
