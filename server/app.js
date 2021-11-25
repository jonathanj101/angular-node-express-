const express = require('express') // initializing express 
const bodyParser = require('body-parser') // parse data

const app = express()

const routesTesting = require("./routes/testing") // importing routes files

app.use(routesTesting);


app.use(bodyParser.urlencoded({ extended: false })) // this is if it should be able to parse non-default features you could say,
// app.use(bodyParser.urlencoded()) // only parse data recieve from forms, json 


app.listen(3000)