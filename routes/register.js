const express = require('express')
const registerUser = require('../dbschema.js')
const router = express.Router()


router.post('/register', async (req, res) => {
    try {
        const { userName, phoneNumber, email, password, conformPassword } = req.body
        const exist = await registerUser.findOne({ email })
       
        if (exist ) {
            return res.status(400).send("user alerady exist")
        }
        if (password !== conformPassword) {
            return res.status(400).send("password does not match")
        }
        const newUser = await new registerUser({
            userName,
            phoneNumber,
            email,
            password,
            conformPassword
        })
        await newUser.save()
        res.status(200).send("Acount Created successfully")
    }
    catch (err) {
        return res.status(500).send("server error")
    }

})  

module.exports= router;