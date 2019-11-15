const config = require('../config.json');
const jwt = require('jsonwebtoken');
const random = require('random');
/* const bcrypt = require('bcryptjs'); */
const db = require('../db');
const User = db.User;

module.exports = {
    virement,
};

async function virement({ bankSource, bankDestinataire, montant, token }) {

}
