const mongoose = require("mongoose")

function dbconnect(){
    const url =process.env.DB_URL
    mongoose.connect(url)
    const res = mongoose.connection;
    res.on('error',console.error.bind(console,"erroe occured while connecting to database"))
    res.once('open',()=>{console.log("database is connected successfully...")})
}

module.exports=dbconnect;