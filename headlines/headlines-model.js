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
    return null
}

function remove(id){
    return null
}