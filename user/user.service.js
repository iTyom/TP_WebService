const config = require('../config.json');
const jwt = require('jsonwebtoken');
const random = require('random');
/* const bcrypt = require('bcryptjs'); */
const db = require('../db');
const User = db.User;

module.exports = {
    login,
    register,
    logout,
};

async function login({ bankAccount, codePin }, req) {
    const user = await User.findOne({ bankAccount });
    if (user.codePin == codePin) {

        //refresh token à la connexion
        const token = jwt.sign({ user }, config.secret, {
            algorithm: 'HS256',
            expiresIn: config.jwtExpirySeconds * 10000
        })
        user.token = token;
        console.log(user);
        //await user.save();
        req.session.token = user.token;
        return { user };
    }
}

async function logout(req) {
    req.session.reset();
}



async function register(userParam) {
    const user = new User(userParam);

    const randomIntBankAccount = random.int(999999, 10000000);
    const randomIntPwd = random.int(99999, 1000000);
    const userBankAccount = "" + config.bankId + randomIntBankAccount + userParam.nom.slice(0, 1);

    // Assign userParam to User with generate BankAccount and CodePin
    user.civilite = userParam.civilite;
    user.prenom = userParam.prenom;
    user.nom = userParam.nom;
    user.birthDate = userParam.birthDate;
    user.bankAccount = userBankAccount;
    user.codePin = randomIntPwd;
    user.solde = 0;

    const token = jwt.sign({ user }, config.secret, {
        algorithm: 'HS256',
        expiresIn: config.jwtExpirySeconds * 10000
    })
    user.token = token;

    // save user
    await user.save();
    return user;
}