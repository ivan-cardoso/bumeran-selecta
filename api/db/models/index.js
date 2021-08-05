const Recruiters = require('./recruiters')
const Jobs = require('./jobs')
const Companies = require('./companies')
const Areas = require('./areas')
const States = require('./state')
const Seniority = require('./seniority')
const TypeEmployed = require('./typeEmployed')
const Modality = require('./modality')
const Users = require('./users')
const Roles = require('./roles')

//Relaciones

Jobs.belongsTo(Recruiters)
Recruiters.hasMany(Jobs)

Recruiters.belongsTo(States)
States.hasMany(Recruiters)

Jobs.belongsTo(Companies)
Companies.hasMany(Jobs)

Companies.belongsTo(States)
States.hasMany(Companies)

Companies.belongsTo(Areas)
Areas.hasMany(Companies)

Users.belongsTo(Roles)
Roles.hasMany(Users)

Jobs.belongsTo(Areas)
Jobs.belongsTo(States)
Jobs.belongsTo(Seniority)
Jobs.belongsTo(TypeEmployed)
Jobs.belongsTo(Modality)

module.exports = {
  Recruiters,
  Jobs,
  Companies,
  Areas,
  States,
  Seniority,
  TypeEmployed,
  Modality,
  Users,
  Roles,
}
