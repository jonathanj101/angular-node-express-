const express = require("express")

const controllerRoutes = express.Router()

// controllerRoutes.use('/', (req, res, next) => {
//     console.log("/")
//     return res.send("<h1>hello</h1>")

// })
controllerRoutes.use('/user', require("./userAuth/userAuthRoutes"))

module.exports = controllerRoutes