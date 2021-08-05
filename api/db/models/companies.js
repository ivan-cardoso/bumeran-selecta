const S = require('sequelize')
const db = require('../db')

class Companies extends S.Model{ }

Companies.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    email: {
      type: S.STRING,
      allowNull: false,
    },
    contactName: {
      type: S.STRING,
      allowNull: false,
    },
    img: { type: S.TEXT },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    active: { type: S.BOOLEAN, defaultValue: true },
  },
  { sequelize: db, timestamps: false, modelName: "companies" }
);

Companies.addHook("beforeCreate", (company) => {
  return (company.img = company.img
    ? company.img
    : "https://static.thenounproject.com/png/3674270-200.png");
});

module.exports = Companies;
