'use strict'

const UserSchema = require('../schemas/userSchema')

const auth = (params) => UserSchema.findOne(params)

module.exports = {
    auth
}