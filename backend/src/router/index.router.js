const express = require("express")
const router = express.Router()
const passport = require('../utils/passport.js')
const { VerifyToken, ProfileController } = require("../controller/AuthController.js")

router.route("/login-with-google" )
.get(
    passport.PasspORt.authenticate("google", {scope:['profile', 'email']}))
  

router.route("/login-with-google/callback")
.get(passport.PasspORt.authenticate("google", {failureRedirect:'http://localhost:4000/api/v1/auth/failed'}),
    async (req, res) => {

    const user = await req.user
    req.logout(() =>{
        console.log("Logout success");
        
    })

    res.redirect("http://localhost:5173/api/v1/auth/success?token="+user)
})

router.route("/dashboard")
.get(async(req, res) => {
    if(!req.isAuthenticated()){
        return res.send("can not access by b/c you are not login")
    }
    return res.send("<h1> This is Dashboard </h1>")
})

router.route("/failed")
.get(function(req, res){
    res.send("Failed to login with google")
})

router.route("/success")
.get(function(req, res){
    res.send({token: req.query?.token})
})


router.route('/profile')
.get(VerifyToken, ProfileController)

module.exports = router