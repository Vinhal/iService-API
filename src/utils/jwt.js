'use strict'

const jwt = require('jsonwebtoken')

const secret = process.env.APP_JWT_SECRET

const options = {
    expiresIn: '5 days'
}

const generateToken = (data) => jwt.sign(data, secret, options)

const readToken = (token) => {
    try {
        return jwt.verify(token, secret, options)
    } catch (error) {
        return false
    }
}

module.exports = {
    generateToken,
    readToken
}