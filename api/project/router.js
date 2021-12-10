// build your `/api/projects` router here
const express = require('express')
const { 
    errorHandling,

} = require('../middleware')
const Projects = require('./model')

const router = express.Router()

router.get('/',async (req, res, next) => {
    try {
        const projects = await Projects.getAll()
        res.json(projects)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Projects.create(req.body)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            next(err)
        })
})

router.use(errorHandling)

module.exports = router;