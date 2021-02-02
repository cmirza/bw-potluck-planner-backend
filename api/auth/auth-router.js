const router = require('express').Router();
const Users = require('../users/users-model');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res) => {
    try {
        const {username, password } = req.body;
        const user = await Users.findBy({ username }).first();

        if (!user) {
            return res.status(401).json({ message: 'Invalid Credentials'})
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            return res.status(401).json({ message: 'Invalid Credentials'})
        }

        const payload = {
            userId: user.id, 
            username: user.username
        };

        res.status(201).json({
            message: `Welcome ${user.username}!`,
            token: jwt.sign(payload, process.env.JWT_SECRET || 'secret')
        })
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.post('/register', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await Users.findBy({ username }).first();

        if (user) {
            return res.status(409).json({ message: 'Username taken' });
        } 
        
        const newUser = await Users.addUser({ username, password: await bcrypt.hash(password, 14) });
        res.status(201).json(newUser);
     
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

module.exports = router;