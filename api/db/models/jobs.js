const S = require('sequelize')
const db = require('../db')
const Recruiters = require('../models/recruiters')
const Recruiter = require('../models/recruiters')

class Jobs extends S.Model {}

Jobs.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },

    description: {
      type: S.TEXT,
      allowNull: false,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    date: {
      type: S.DATE,
      defaultValue: new Date(),
    },
    salary: {
      type: S.INTEGER,
    },

    isOpen: {
      type: S.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: 'jobs' }
)

Jobs.prototype.addActiveRecruiter = (recruiterId) => {
  Recruiter.findByPk(recruiterId)
    .then((recruiter) => {
      recruiter.activeSearch += 1
      return recruiter.save()
    })
    .catch((err) => console.log(err))
}
Jobs.prototype.removeSearchFromRecruiter = (recruiterId) => {
  Recruiter.findByPk(recruiterId)
    .then((recruiter) => {
      recruiter.activeSearch -= 1
      if (recruiter.activeSearch < 0) recruiter.activeSearch = 0
      console.log('after save', recruiter)
      return recruiter.save()
    })
    .catch((err) => console.log(err))
}

module.exports = Jobs
