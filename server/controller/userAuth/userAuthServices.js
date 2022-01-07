// user services

const userModel = require("../../model/User")

const userServices = {}

userServices.register = (data) => {
    console.log('user registration data', data)
    return userModel.create(data)
}


module.exports = userServices