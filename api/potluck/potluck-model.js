const db = require('../../data/dbConfig');

module.exports = {
    potlucks,
    findPotluckById,
    addPotluck,
    updatePotluck,
    deletePotluck
}

function potlucks() {
    return db('potluck');
}

function findPotluckById(id) {
    return db('potluck').where({ id }).first();
}

async function addPotluck(potluck) {
    await db('potluck').insert(potluck, 'id')
        .then(id => {
            return findPotluckById(id[0]);
        });
}

function updatePotluck(id, changes) {
    return db('potluck').where({ id }).update(changes);
}

function deletePotluck(id) {
    return db('potluck').where({ id }).del();
}