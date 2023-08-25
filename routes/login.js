const express =require('express')
const registerUser = require('../dbschema.js')
const router = express.Router()
const jwt = require("jsonwebtoken")

router.post('/login',async (req,res)=>{
    try{
    const {phoneNumber,password} = req.body
    const exist =await registerUser.findOne({phoneNumber})
    if(!exist){
       return res.status(401).send("user not found")
    }
    else if(exist.password !== password){
      return  res.status(401).send(" invalid  password")
    }
    else{
        const paylode = {
            user:{
                id:exist.id
            }
        }
     jwt.sign(paylode,'jwtSecure',{expiresIn:300000},(err,token)=>{
        if(err) throw err;
        res.status(200).json({
            "token":token
        })
     })
    }

    }
    catch(err){
        res.status(500).send("internel server error")
    }
})

module.exports=router;