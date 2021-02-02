const db = require('../../data/dbConfig');

module.exports = {
    find,
    findBy,
    findById,
    addUser,
    deleteUser,
    potluckByUser
}

function find() {
    return db('users').select('id', 'username');
}

function findBy(filter) {
    return db('users').select('id', 'username', 'password').where(filter);
}

function findById(id) {
    return db('users').select('id', 'username').where({ id }).first();
}

async function addUser(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id);
}

function deleteUser(id) {
    return db('users').where({ id }).del()
}

function potluckByUser(id) {
    return db('users as u')
        .where('u.id', id)
        .join('user_data as ud', 'ud.user_id', 'u.id')
        .join('potluck as p', 'p.id', 'ud.potluck_id')
        .select('p.name', 'u.username as User', 'ud.role as role', 'p.date', 'p.time', 'p.items as itemsToBring', 'ud.guest_items as guestItems')
}