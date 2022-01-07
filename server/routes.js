const express = require("express")
const route = express.Router() // initializing express router. for routes purposes


route.use('/', require('./controller')) // on / route, app use controller routes
// route.use('/user', require("./controller"))

module.exports = route
