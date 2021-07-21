const S = require("sequelize")
const db = require("../db")

class Seniority extends S.Model {}

Seniority.init({
    name : {
        type : S.STRING
    }
}, {sequelize : db, timestamps: false,  modelName : "seniority"})

module.exports = Seniority