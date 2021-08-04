const S = require('sequelize')
const db = require('../db')

class Recruiters extends S.Model {}

Recruiters.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },

    surname: {
      type: S.STRING,
      allowNull: false,
    },

    email: {
      type: S.STRING,
      allowNull: false,
    },

    country: {
      type: S.STRING,
      allowNull: false,
    },

    bio: {
      type: S.TEXT,
      allowNull: false,
    },

    img: { type: S.STRING },

    rating: {
      type: S.DOUBLE,
      defaultValue: 0,
    },

    favoriteArea1: {
      type: S.STRING,
      allowNull: false,
    },

    favoriteArea2: { type: S.STRING },

    favoriteArea3: { type: S.STRING },

    seniority1: {
      type: S.STRING,
      allowNull: false,
    },
    seniority2: { type: S.STRING },
    seniority3: { type: S.STRING },
    activeSearch: { type: S.INTEGER, defaultValue: 0 },
    active: { type: S.BOOLEAN, defaultValue: true },
  },
  { sequelize: db, timestamps: false, modelName: "recruiters" }
);

//
// Recruiters.prototype.addSearch()

module.exports = Recruiters
