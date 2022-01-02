const express = require("express")
const route = express.Router() // initializing express router. for routes purposes

route.use('/', require('./controller/')) // on / route, app use controller routes

// route.use("/", (req, res, next) => {
//     console.log("/")
//     return res.send("<h1>hello</h1>")
// })
module.exports = route
