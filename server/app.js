// loads .env file contents into https
require("dotenv").config()
const express = require('express') // initializing express 
const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bodyParser = require('body-parser') // parse incoming requests data
const app = express()
const port = process.env.PORT
app.set("port", port)
app.use(bodyParser.urlencoded({ extended: false })) // etended, this is if it should be able to parse non-default features you could say,
// app.use(bodyParser.urlencoded()) // only parse data recieve from forms, json 

app.use(require("./routes"))

let connectionString = "mongodb://localhost:27017/practing_nodejs"

mongoose.connect(connectionString)
    .then(result => {
        console.log('Connected To Database Successfully!')
    })
    .catch(err => console.log("Error ", err))


app.listen(port, () => {
    console.log(`Server listining on port ${port}`)
})

module.exports = app