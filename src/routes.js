"use strict"

const express = require('express')

const authController = require('./controllers/v1/authController')
const userController = require('./controllers/v1/userController')

const router = express.Router()

router.use('/auth', authController)
router.use('/user', userController)

const apply = (app) => {
    app.use('/api', router)
}

module.exports = {
    apply
}
