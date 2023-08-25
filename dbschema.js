const mongoose = require('mongoose')

const registerUser = new mongoose.Schema({
    userName:{
        type:String,
        require:true
    },
    phoneNumber:{
        type:String,
        require:true,
        unique:true
    },
    email:{
        type:String,
        require:true,
        unique:true

    },
    password:{
        type:String,
        require:true

    },
    conformPassword:{
        type:String,
        require:true

    }
})

module.exports= new mongoose.model('registerUser', registerUser)