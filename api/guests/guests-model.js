const db = require('../../data/dbConfig');
const { findPotluckById } = require('../potluck/potluck-model');

module.exports = {
    findGuestById,
    getGuests,
    addGuest
}

function findGuestById(id) {
    return db('user_data as ud').where('ud.role', 'guest').andWhere({ id }).first();
}

function getGuests() {
    return db('user_data as ud').where('ud.role', 'guest');
}

async function addGuest(guestInfo) {
    await db('user_data').insert(guestInfo, 'id')
        .then(id => {
            return findPotluckById(id[0]);
        })
}