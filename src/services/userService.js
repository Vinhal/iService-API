'use strict'

const UserSchema = require('../schemas/userSchema')

const save = (user) => UserSchema.create(user)

const find = (id) => UserSchema.findOne({ '_id': id })

module.exports = {
    save,
    find
}