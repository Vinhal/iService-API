"use strict"

const mongoose = require('mongoose')

const { APP_MONGODB_URL } = process.env

let mongoConfig = {
    useNewUrlParser: true
}

const connect = () => {

    mongoose.connect(APP_MONGODB_URL, mongoConfig)

    mongoose.set('useFindAndModify', false)
    mongoose.set('useCreateIndex', true)
}

const disconnect = () => {
    mongoose.connection.close()
}

module.exports = {
    connect, disconnect
}