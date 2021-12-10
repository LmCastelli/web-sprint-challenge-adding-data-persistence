// build your `/api/resources` router here
const express = require('express')
const { 
    errorHandling,

} = require('../middleware')

const Resources = require('./model')

const router = express.Router()

router.get('/',async (req, res, next) => {
    try {
        const resources = await Resources.getAll()
        res.json(resources)
    } catch (err) {
        next(err)
    }
})

router.post('/', (req, res, next) => {
    Resources.create(req.body)
        .then(resource => {
            res.status(201).json(resource)
        })
        .catch(err => {
            next(err)
        })
})

router.use(errorHandling)

module.exports = router;