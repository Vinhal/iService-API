'use strict'

const bodyParser = require('body-parser')
const cors = require('cors')

const state = { isShutdown: false }

const bootstrap = (app) => {
    app.use(bodyParser.json({ limit: '20mb' }))
    app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }))

    app.use(cors())
}

const registerGreacefulStop = (app) => {
    process.on('SIGTERM', () => {
        state.isShutdown = true

        app.shutdown()
    })
}

module.exports = {
    state,
    bootstrap,
    registerGreacefulStop
}
