// build your `/api/tasks` router here
const express = require('express')
const { 
    errorHandling,

} = require('../middleware')
const Tasks = require('./model')

const router = express.Router()

router.get('/',async (req, res, next) => {
    try {
        const tasks = await Tasks.getAll()
        res.json(tasks)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Tasks.create(req.body)
        .then(task => {
            res.status(201).json(task)
        })
        .catch(err => {
            next(err)
        })
})

router.use(errorHandling)

module.exports = router;