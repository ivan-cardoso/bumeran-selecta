const S = require("sequelize")
const db = require("../db")

class TypeEmployed extends S.Model {}

TypeEmployed.init({
    name : {
        type : S.STRING
    }
}, {sequelize : db, timestamps: false, modelName : "typeemloyeds"})

module.exports = TypeEmployed