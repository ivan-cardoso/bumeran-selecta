const S = require('sequelize')
const db = require('../db')

class Companies extends S.Model{ }

Companies.init({

    name: {
        type: S.STRING,
        allowNull:false
    },
    address: {
        type: S.STRING,
        allowNull:false
    },
    email: {
        type: S.STRING,
        allowNull:false
    },
    img: { type: S.STRING },
    
    bio: {
        type: S.TEXT,
        allowNull: false
    },
    

}, { sequelize: db, timestamps: false, modelName: 'companies' })

module.exports = Companies;
