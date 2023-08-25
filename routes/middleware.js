const jwt = require("jsonwebtoken")

// Define the middleware function
const middleware = (req, res, next) => {
  try{
    const token = req.header('x-token')
    if(!token){
        // return  res.redirect('/login')
        return res.status(406).send("token not found")
    }
    else{
       const decoded =  jwt.verify(token,"jwtSecure")
        req.user = decoded.user
        next()
    }

  }
  catch(err){
    console.log(err)
    return res.status(500).send('in valid token')
  }
   
};

module.exports = middleware;