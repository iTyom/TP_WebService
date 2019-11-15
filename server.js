const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('client-sessions');
const config = require('./config.json')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
    cookieName: 'session',
    secret: config.secret,
    duration: 30 * 60 * 1000,
    activeDuration: 5 * 60 * 1000,
}));
// api routes
app.use('/user', require('./user/user.controller'));
app.use('/transaction', require('./transaction/transaction.controller'));
// start server
const port = 8004;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});