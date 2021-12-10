// build your `Project` model here
const db = require('../../data/dbConfig')

const getAll = async () => {
    const rows = await db('projects')
    
    const result = []
    rows.forEach(row => {
        let tempCompleted = 0
        if (row.project_completed === '0') {
            tempCompleted = false
        } else {
            tempCompleted = true
        }
        result.push({
            project_id: row.project_id,
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: tempCompleted
        })

    })
    console.log(result)
    return result
}

const getById = async(id) => {
    const rows = await db('projects')
        .select( 'project_name', 'project_description', 'project_completed')
        .where('project_id', id )
        
           
    const result = []

    rows.forEach(row => {
        let tempCompleted = 0
        if (row.project_completed === '0') {
            tempCompleted = false
        } else {
            tempCompleted = true
        }
        result.push({
            project_name: row.project_name,
            project_description: row.project_description,
            project_completed: tempCompleted
        })

    })
    console.log(result)
    return result[0]
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