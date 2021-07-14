const Recruiters = require('./recruiters')
const Jobs = require('./jobs')
const Companies = require('./companies')

//Relaciones

Jobs.belongsTo(Recruiters)
Recruiters.hasMany(Jobs)

Jobs.belongsTo(Companies)
Companies.hasMany(Jobs)

module.exports = { Recruiters, Jobs, Companies }
