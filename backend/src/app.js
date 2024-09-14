const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const session = require("express-session")
const {GoogleProvider} = require("./utils/GoogleStrategy.js")
const { PasspORt } = require('./utils/passport.js')

//server
const app = express()

// middleware
app.use(cors())
app.use(morgan("dev"))
app.use(session({
    secret:"#$&*(*&%$$%%%#&*",
    resave: false,
    saveUninitialized:false
}))

app.use(express.json())
app.use(express.urlencoded({extended:false}))

//initialize passport
app.use(PasspORt.initialize())
app.use(PasspORt.session())

// To use Strategy 
PasspORt.use(GoogleProvider)

// Router
app.use("/api/v1/auth", require("./router/index.router.js"))

module.exports = app
