const config = require('../config.json');
const jwt = require('jsonwebtoken');
/* const bcrypt = require('bcryptjs'); */
const db = require('../db');
const User = db.User;

module.exports = {
    transaction
};

async function transaction({ montant, token }) {

    // On récupère le token, on le vérifie en récupérant le payload 
    // contenant les informations de l'utilisateur
    try {
        const payload = jwt.verify(token, config.secret);
        if (payload) {
            const bankAccount = payload.user.bankAccount;
            const user = await User.findOne({ bankAccount });
            if (user) {
                user.solde += montant;
                await user.save();
                return { user }
            }
        }
    } catch (err) {
        console.log(err)
    }



}