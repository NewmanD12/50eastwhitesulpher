const { generatePasswordHash, validatePW, generateUserToken } = require('../middleware/auth')

const User = require('../models/Users')

async function createUser(req, res) {
    try {
        const firstName = req.body.firstName
        const lastName = req.body.lastName
        const userName = req.body.userName
        const password = req.body.password

        const user = await User.find({userName : {$eq : userName}})

        if(user.length === 0){
            const saltRounds = 10
            const hashedPW = await generatePasswordHash(password, saltRounds)

            const newUser = new User({
                firstName,
                lastName,
                userName,
                password : hashedPW
            })

            const savedUser = await newUser.save()
            res.json({
                success : true,
                user : savedUser
            })
        }
        else {
            res.json({
                success : false,
                message : "User already exits"
            })
        }
    }
    catch (e) {
        res.json({
            success : false,
            error : e.toString()
        })
    }
}


module.exports = {
    createUser
}