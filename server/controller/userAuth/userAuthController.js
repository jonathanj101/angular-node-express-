const userServices = require('./userAuthServices')

//  Login
const userController = {}

userController.login = async (req, res, next) => {
    console.log("userController.login")
    const username = req.body.username;
    const password = req.body.password

    try {
        const user = await userServices.login(username);
        if (user.authenticate(password)) {
            return res.status(201).json({
                msg: "Logged in successfully!"
            })
        } else {
            return res.status(500).json({
                msg: "Password did not match our records!"
            })
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Looks like the information you provided does not match our record! Please try again."
        })
    }
}

userController.register = async (req, res, next) => {
    console.log("userController.register")
    try {
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const username = req.body.username;
        const password = req.body.password;
        const data = {
            firstName: firstName,
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password,
        }
        const userModel = await userServices.register(data)
        return res.status(200).json({
            msg: "Registration Successful! " + userModel.username,
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "duplicate user. Looks like that username is taken!",
        })
    }
}

module.exports = userController