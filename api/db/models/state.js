const S = require("sequelize")
const db = require("../db")

class States extends S.Model {}

States.init({
    name : {
        type : S.STRING
    }
}, {sequelize : db, timestamps: false, modelName : "states"})

module.exports = States