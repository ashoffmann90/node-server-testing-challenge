const db = require('../data/db-config')

module.exports = {
    find,
    add, 
    remove
}

function find(){
    return db('headlines')
}

async function add(headline){
    return db('headlines').insert(headline)
}

function remove(id){
    return db('headlines').where({id}).del(id)
}