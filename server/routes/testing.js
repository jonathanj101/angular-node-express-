const express = require('express') // import express again to use feature, in this case router

const Router = express.Router() //mini express app or plugable to the other express project

Router.get('/', (req, res, next) => {
    res.send("<h1>hello world</h1>")
    console.log("working!")
})


module.exports = Router

