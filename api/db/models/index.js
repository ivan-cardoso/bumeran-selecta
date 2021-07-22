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

Companies.belongsTo(States);
States.hasMany(States);

Companies.belongsTo(Areas);
Areas.hasMany(Companies);

Jobs.belongsTo(Areas)
Jobs.belongsTo(States)
Jobs.belongsTo(Seniority)
Jobs.belongsTo(TypeEmployed)
Jobs.belongsTo(Modality)

module.exports = { Recruiters, Jobs, Companies, Areas, States, Seniority, TypeEmployed, Modality}
