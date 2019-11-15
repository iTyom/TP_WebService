const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/login', login);
router.post('/register', register);
router.get('/logout', logout);

module.exports = router;

function login(req, res, next) {
    userService.login(req.body, req)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function logout(req, res, next) {
    userService.logout(req)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function register(req, res, next) {
    userService.register(req.body)
        .then(user => res.json(user))
        .catch(err => next(err));
}