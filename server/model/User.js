const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
    firstName: {
        type: Schema.Types.String
    },
    firstName: {
        type: Schema.Types.String
    },
    lastName: {
        type: Schema.Types.String
    },
    userName: {
        type: Schema.Types.String
    },
    password: {
        type: Schema.Types.String
    },
})

module.exports = mongoose.model('user', User)