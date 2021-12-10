// build your `Task` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const rows = await db('tasks')
    
    const result = []
    rows.forEach(row => {
        let tempCompleted = 0
        if (row.task_completed === '0') {
            tempCompleted = false
        } else {
            tempCompleted = true
        }
        result.push({
            task_id: row.task_id,
            task_name: row.task_name,
            task_description: row.task_description,
            task_completed: tempCompleted,
            task_notes: row.task_notes
        })

    })
    console.log(result)
    return result
}

const getById = async(id) => {
    const rows = await db('tasks')
        .select('task_description', 'task_notes', 'task_completed')
        .where('task_id', id )
        
    const result = []

    rows.forEach(row => {
        let tempCompleted = 0
        if (row.task_completed === '0') {
            tempCompleted = false
        } else {
            tempCompleted = true
        }
        result.push({
            task_notes: row.task_notes,
            task_description: row.task_description,
            task_completed: tempCompleted
        })

    })
    console.log(result)
    return result[0]
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