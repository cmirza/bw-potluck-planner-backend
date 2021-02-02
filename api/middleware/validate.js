const Potluck = require('../potluck/potluck-model');


function validatePotluckId(req, res, next) {
    Potluck.findPotluckById(req.params.id)
        .then(potluck => {
            if (potluck) {
                req.potluck = potluck;
                next();
            } else {
                res.status(400).json({ message: 'Invalid potluck ID' });
            }
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        });
}

function validateData(req, res, next) {
    if (req.body) {
        if (req.body.name) {
            next();
        } else if (req.body.date) {
            next();
        } else if (req.body.time) {
            next();
        } else if (req.body.items) {
            next();
        } else {
            res.status(400).json({ message: 'Required field missing' });
        }
    } else {
        res.status(400).json({ message: 'Missing post data' });
    }
}

function validateGuestData(req, res, next) {
    if (req.body) {
        if (req.body.user_id) {
            next();
        } else if (req.body.role) {
            next();
        } else if (req.body.guest_itesm) {
            next();
        } else {
            res.status(400).json({ message: 'Required field missing' });
        }
    } else {
        res.status(400).json({ message: 'Missing post data' });
    }
}

module.exports = { validatePotluckId, validateData, validateGuestData };