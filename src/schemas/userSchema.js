"use strict"

const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    birthdate: String,
    password: String,
    darkTheme: Boolean
}, { timestamps: true })

module.exports = mongoose.model('user', UserSchema)