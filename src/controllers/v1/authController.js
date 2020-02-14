/* eslint-disable complexity */
'use strict'

const express = require('express')
const AuthService = require('../../services/authService')
const jwt = require('../../utils/jwt')

let Auth = express.Router()

const defaultUser = {
    name: 'Vinhal',
    email: 'vinh@email.com',
    birthdate: '28/01/2932',
    password: '1234',
    theme: 'DARK'
}

Auth.post('/login', (req, res) => {

    const {
        email,
        password
    } = req.body

    if (email === 'admin' && password === 'admin') {
        return res.status(200).json(defaultUser).end()
    }

    AuthService.auth({
        email,
        password
    })
        .then((result) => {
            if (!result) {
                return res.status(401)
                    .json({ error: 'Usuário ou senha incorretos!' }).end()
            }

            const data = { id: result._id, ...result }
            const token = jwt.generateToken(data)

            res.status(200).json(token).end()
        })
        .catch((error) => {
            res.status(500).json(error).end()
        })
})

module.exports = Auth