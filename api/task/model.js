// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const rows = await db('tasks')
    return rows
}

const getById = async(id) => {
    const [task] = await db('tasks')
        .where('task_id', id )
        return task
}

const create = (task) => {
    return db('tasks')
        .insert(task)
        .then(([id]) => getById(id))
}

module.exports = {
    getAll,
    getById, 
    create,
}