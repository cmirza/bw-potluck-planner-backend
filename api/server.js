const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

const restrict = require('./middleware/restricted');

const authRouter = require('./auth/auth-router');
const usersRouter = require('./users/users-router');
const potluckRouter = require('./potluck/potluck-router');
const guestsRouter = require('./guests/guests-router');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/', authRouter)
server.use('/', usersRouter)
server.use('/', potluckRouter)
server.use('/', guestsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ message: 'API Running...' });
});

module.exports = server;