const express = require("express")

const controllerRoutes = express.Router()

controllerRoutes.use('/login', require("./userAuth/userAuthRoutes"))

module.exports = controllerRoutes