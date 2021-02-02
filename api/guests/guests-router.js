const router = require('express').Router();
const Guests = require('./guests-model');
const { validateGuestData } = require('../middleware/validate');

router.get('/guests', async (req, res) => {
    try {
        const guests = await Guests.getGuests();
        res.status(200).json(guests);
    } catch(error) {
        res.status(500).json({ errorMessage: error });
    }
});

router.get('/guest/:id', async (req, res) => {
    try {
        const guest = await Guests.findGuestById(req.params.id);
        if (!guest) {
            return res.status(404).json({ message: 'Guest not found' });
        }
        res.status(200).json(guest);
    } catch(error) {
        res.status(500).json({ errorMessage: error });
    }
});

router.post('/addGuest/:pid', validateGuestData, (req, res) => {
    const pid = req.params.pid;
    const guestInfo = { ...req.body, potluck_id: pid };

    Guests.addGuest(guestInfo)
        .then(guest => {
            res.status(201).json({guest, message: 'Guest added' });
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

module.exports = router;