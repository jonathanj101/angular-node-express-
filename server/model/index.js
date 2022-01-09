const mongoose = require("mongoose")
let connectionString = "mongodb://localhost:27017/practing_nodejs"

// const db = mongoose.connect(connectionString)
//     .then(result => {
//         // const server = http.createServer(app)
//         // server.listen(port, () => {
//         //     console.log(`Server listining on port ${port}`)
//         // })
//         console.log('Connected To Database Successfully!')
//     }).catch(err => console.log("Error ", err))

const db = async () => {
    try {
        await mongoose.connect(connectionString)
    } catch (error) {
        console.log(error)
    }
}

module.exports = db