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
    return db('potluck').insert(potluck);
}

function updatePotluck(id, changes) {
    return db('potluck').where({ id }).update(changes);
}

function deletePotluck(id) {
    return db('potluck').where({ id }).del();
}