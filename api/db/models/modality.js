const S = require("sequelize")
const db = require("../db")

class Modality extends S.Model {}

Modality.init({
    name : {
        type : S.STRING
    }
}, {sequelize : db, timestamps: false, modelName : "modality"})

module.exports = Modality