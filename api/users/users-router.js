const router = require('express').Router();
const Users = require('./users-model');
const restricted = require('../middleware/restricted');
const { validatePotluckId } = require('../middleware/validate');

router.get('/users', restricted(), async (req, res) => {
    Users.find()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error });
        });
});


router.delete('/user/:id', validatePotluckId, (req, res) => {
    Users.deleteUser(req.params.id)
        .then(() => {
            res.status(200).json({ message: 'Users has been deleted' });
        })
        .catch(error => {
            res.status(500).json({ message: error });
        });
});

module.exports = router;