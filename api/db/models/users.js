const S = require('sequelize')
const db = require('../db')
// const bcrypt = require("bcrypt");

class Users extends S.Model {}

Users.init(
  {
    displayName: { type: S.STRING },
    name: { type: S.STRING },
    surname: { type: S.STRING },
    uid: { type: S.STRING },
    refreshToken: { type: S.STRING },
    img: { type: S.STRING },
    email: { type: S.STRING },
  },
  { sequelize: db, timestamps: false, modelName: 'users' }
)

Users.addHook("beforeCreate", (user) => {
  return (user.img = user.img
    ? user.img
    : "https://static.thenounproject.com/png/3674270-200.png");
});
module.exports = Users
