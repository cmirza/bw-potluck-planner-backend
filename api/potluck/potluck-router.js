const router = require('express').Router();
const Users = require('../users/users-model');
const Potlucks = require('./potluck-model');
const { validatePotluckId, validateData } = require('../middleware/validate');

router.get('/potlucks', async (req, res) => {
    Potlucks.potlucks()
        .then(potlucks => {
            res.status(200).json(potlucks);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

router.get('/potluck/:id', validatePotluckId, async (req, res) => {
    try {
        const user = await Users.potluckByUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({ errorMessage: error });
    }
});

router.post('/potluck', validateData, (req, res) => {
    const potluckId = req.params.id;
    const potluckInfo = {...req.body, id: potluckId };

    Potlucks.addPotluck(potluckInfo)
        .then(potluck => {
            res.status(201).json({ potluck, message: 'Potluck created successfully' });
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

router.put('/potluck/:id', validateData, (req, res) => {
    const id = req.params.id;

    Potlucks.updatePotluck(id, req.body)
        .then(potluck => {
            res.status(200).json({ potluck, message: 'Potluck updated successfully' });
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

router.delete('/potluck/:id', validatePotluckId, (req, res) => {
    Potlucks.deletePotluck(req.params.id)
        .then(() => {
            res.status(200).json({ message: 'Potluck deleted successfully' });
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

module.exports = router;