const express = require('express')
const dbconnect = require('./dbconnect.js')
const env = require("dotenv")

const jwt = require("jsonwebtoken")

const cors = require('cors')
const registerRoute = require('./routs/register.js')
const loginRoute = require('./routs/login.js')
const profileRoute = require('./routs/profile.js')

const app = express()
env.config()
dbconnect()
app.use(cors())

app.use(express.json())
const port = 8080

app.get("/", (req, res) => {
    let data = {
        name: "chaitanya",
        branch: "AI"
    }
    res.status(200).json(data)
})

app.use(registerRoute)

app.use(loginRoute)

app.use(profileRoute)


app.listen(port, () => {
    console.log("server started at port "+port)
})