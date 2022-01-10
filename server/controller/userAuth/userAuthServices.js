// user services

const userModel = require("../../model/User")

const userServices = {}

userServices.login = (username) => {
    console.log('userServies.login data', username)
    return userModel.findOne({ username: username })
}

userServices.register = (data) => {
    console.log('userServices.register data', data)
    return userModel.create(data)
}

module.exports = userServices