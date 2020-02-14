/* eslint-disable complexity */
'use strict'

const express = require('express')
const mongoose = require('mongoose')
const UserService = require('../../services/userService')
const jwt = require('../../utils/jwt')

const { ObjectId } = mongoose.Types

let User = express.Router()

User.get('/:id', (req, res) => {

    const { id } = req.params

    if (!id || !ObjectId.isValid(id)) {
        return res.status(500).json({ error: 'Id inválido!' }).end()
    }

    UserService.find((ObjectId(id)))
        .then(result => {
            if (!result) {
                return res.status(500).json({ error: 'Usuário não encontrado!' }).end()
            }
            res.status(200).json(result).end()
        })
        .catch((error) => {
            res.status(500).json(error).end()
        })
})

User.post('/', (req, res) => {

    const {
        name,
        email,
        birthdate,
        password,
        darkTheme
    } = req.body

    if (!name) {
        return res.status(500).json({
            error: "Campo nome é obrigatório"
        }).end()
    }

    if (!email) {
        return res.status(500).json({
            error: "Campo email é obrigatório"
        }).end()
    }

    if (!birthdate) {
        return res.status(500).json({
            error: "Campo data de nascimento é obrigatório"
        }).end()
    }

    if (!password) {
        return res.status(500).json({
            error: "Campo senha é obrigatório"
        }).end()
    }

    UserService.save({
        name,
        email,
        birthdate,
        password,
        darkTheme: Boolean(darkTheme)
    })
        .then(({ _id, ...result }) => {
            const data = { id: _id, ...result }
            const token = jwt.generateToken(data)

            res.status(200).json({ data, token }).end()
        })
        .catch((error) => {
            res.status(500).json(error).end()
        })
})

module.exports = User