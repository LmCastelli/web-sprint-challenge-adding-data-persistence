// build your `Resource` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const rows = await db('resources')
    return rows
}

const getById = async(id) => {
    const [resource] = await db('resources')
        .where('resource_id', id )
        return resource
}

const create = (resource) => {
    return db('resources')
        .insert(resource)
        .then(([id]) => getById(id))
}

module.exports = {
    getAll,
    getById, 
    create,
}