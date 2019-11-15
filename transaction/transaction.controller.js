const express = require('express');
const router = express.Router();
const transactionService = require('./transaction.service');

// routes
router.post('/', transaction);


module.exports = router;

function transaction(req, res, next) {
    transactionService.transaction(req.body)
        .then(user => user ? res.json(user) : res.status(405).json({ message: 'Données insérés invalides' }))
        .catch(err => next(err));
}