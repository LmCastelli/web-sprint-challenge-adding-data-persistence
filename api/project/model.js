// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const rows = await db('projects')
    return rows
}

const getById = async(id) => {
    const [project] = await db('projects')
        .where('project_id', id )
        return project
}

const create = (project) => {
    return db('projects')
        .insert(project)
        .then(([id]) => getById(id))
}

module.exports = {
    getAll,
    getById, 
    create,
}