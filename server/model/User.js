const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const User = new Schema({
    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    firstName: {
        type: Schema.Types.String,
        required: true,
    },
    lastName: {
        type: Schema.Types.String,
        required: true,
    },
    username: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    password: {
        type: Schema.Types.String,
        required: true,
        set: function set(password) {
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(password, salt);
            return hash
        }
    },
})

User.methods.authenticate = function (password) {
    // User.methods.authenticate = (password) => {
    // keyword (this) would not work in an arrow function as arrow function doesn't define its own execution context.
    // if used in here, it would be empty rather than accessing the User Schema property password
    // return bcrypt.compare(password,this.password)
    // }
    // console.log(string_password, User.tree.password, this.password)
    return bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('user', User)