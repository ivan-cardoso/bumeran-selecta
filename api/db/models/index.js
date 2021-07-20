const Recruiters = require('./recruiters')
const Jobs = require('./jobs')
const Companies = require('./companies')
const Areas = require("./areas")
const States = require("./state")
const Seniority = require("./seniority")
const TypeEmployed = require("./typeEmployed")
const Modality = require("./modality")

//Relaciones

Jobs.belongsTo(Recruiters)
Recruiters.hasMany(Jobs)

Jobs.belongsTo(Companies)
Companies.hasMany(Jobs)

module.exports = { Recruiters, Jobs, Companies, Areas, States, Seniority, TypeEmployed, Modality}
