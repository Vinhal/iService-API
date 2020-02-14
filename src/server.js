"use strict"

const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const routes = require('./routes')
const database = require('./utils/database')
const middlewares = require('./utils/middleware')
const app = express()

let server = null
const { PORT } = process.env

database.connect()
middlewares.bootstrap(app)
routes.apply(app)

server = app.listen(PORT || 3001)

middlewares.registerGreacefulStop(app)

app.shutdown = async () => (
    server && server.close(() => {
        process.exit(0)
    })
)

module.exports = app
