const S = require("sequelize");
const db = require('../db')
const bcrypt = require("bcrypt");

class Users extends S.Model{}

Users.init(
    {
        name: { type: S.STRING },

        surname: { type: S.STRING },
    
        email: { type: S.STRING },
        
        password: { type: S.STRING },
        
        salt: {type: S.STRING}

    }, { sequelize: db, timestamps: false, modelName: "users" })


Users.addHook("beforeCreate", async (user) => {
    const salt = await bcrypt.genSalt(10);
    user.salt = salt;
    user.password = await user.hashPassword(user.password);
});

Users.prototype.hashPassword = async function (password) {
    return bcrypt.hash(password, this.salt);
};

Users.prototype.validatePassword = function (password) {
    return this.password === this.hashPassword(password);
};


module.exports = Users;


    