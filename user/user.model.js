const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    bankAccount: { type: String, unique: true },
    codePin: { type: String },
    civilite: { type: String, required: true },
    prenom: { type: String, required: true },
    nom: { type: String, required: true },
    birthDate: { type: Date, required: true },
    token: { type: String },
    solde: { type: Number }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);