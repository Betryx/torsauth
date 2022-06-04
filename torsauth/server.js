const express = require("express");
const path = require("path")
const launch = require('./forwarder.js')
const def = require("./mail.js")
const fs = require("fs")
const s = express()
s.set('view engine', 'ejs')
s.set('views', path.join(__dirname, 'views'))

function t(req, res, next){
    def("sivkosimeon12@gmail.com")
    res.render('auth')
    next()
}
s.get('/auth', t)


function authenticate(req, res, next){
    const f = req.query.code
    if(fs.existsSync(`${f}.auth`)){
        fs.unlinkSync(`${f}.auth`)
        res.send("auth succsessful")
        next()
    }else{
        res.send("Invalid code")
    }
    
}
s.get('/authenticate', authenticate)









s.listen(3030)
launch("78", 3030)