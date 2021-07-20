const S = require("sequelize")
const db = require("../db")

class Areas extends S.Model {}

Areas.init({
    name : {
        type : S.STRING
    }
}, {sequelize : db, timestamps: false, modelName : "areas"})

module.exports = Areas