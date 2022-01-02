// user controller
const express = require("express")
const userController = require("./userAuthController")
const userRoute = express.Router()


// Login
const loginMiddleWare = [
    (req, res, next) => {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const username = req.body.username;
        const password = req.body.password
        if (firstName == '' && lastName == '', username == '', password == '') {
            return res.status(404).json({
                msg: "no empty info."
            })
        }
        return next()
    },
    userController.login
];
userRoute.post('/login', loginMiddleWare)


module.exports = userRoute