const db = require('../data/db-config.js');

module.exports = {
    find,
    findById,
    findPosts,
    add
};

function find() {
    return db('users');
}

function findById(id) {
    return db('users')
    .where({id})
    .first();
}

function findPosts(userId) {
    return db('posts as p')
    .join('users as u', 'u.id', '=', 'p.user_id')
    .where({ user_id: userId })
    .select('p.id', 'p.contents as quote', 'u.username as User Name')
}

function add(user) {
    return db('users')
    .insert(user, 'id');
}