const express = require('express')
const registerUser = require('../dbschema.js')
const middleware = require('./middleware.js')

const router = express.Router()

router.get('/profile', middleware, async (req, res) => {
    try {
        const exist = await registerUser.findById(req.user.id)
        if(exist){
            return res.status(200).json({
                'name':exist.userName,
                'phone':exist.phoneNumber,
                'email':exist.email
            })
        }
        else{
            return res.status(402).send("user not found")
        }
    } catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
});

module.exports=router;


