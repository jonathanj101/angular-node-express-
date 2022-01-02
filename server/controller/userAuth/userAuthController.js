const userServices = require('./userAuthServices')

//  Login
const userController = {}

userController.login = (req, res, next) => {
    console.log("user controller login")
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const password = req.body.password;

    if (firstName !== "" && lastName !== "" && username !== "" && password !== "") {
        console.log("log in worked")
        return res.status(200).json({
            msg: "login successful"
        })
    } else {
        return res.status(404).json({
            msg: "error"
        })
    }
}

module.exports = userController