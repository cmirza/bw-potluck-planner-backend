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
    if (!req.body[0].name && !req.body[0].date && !req.body[0].time && !req.body[0].items) {
        res.status(400).json({ message: 'Missing post data' });
    } else {
        next();
        
    }
}

function validateGuestData(req, res, next) {
    if (!req.body[0].user_id && !req.body[0].role && !req.body[0].guest_items) {
        res.status(400).json({ message: 'Missing post data' });
    } else {
        next();
    }
}

module.exports = { validatePotluckId, validateData, validateGuestData };