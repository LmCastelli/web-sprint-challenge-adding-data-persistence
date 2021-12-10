// build your server here and require it from index.js
const express = require('express')

const projectRouter = require('../api/project/router')
const resourceRouter = require('../api/resource/router')
const taskRouter = require('../api/task/router')

const server = express()

server.use(express.json())

server.use('/api/projects', projectRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/tasks', taskRouter)

module.exports = server;