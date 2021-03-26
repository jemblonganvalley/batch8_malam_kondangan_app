//import package yang di butuhkan
const express = require('express')
const home = express.Router()

//routing HOME
home.get('/', (req,res)=>{
    res.render('index')
})

module.exports = home