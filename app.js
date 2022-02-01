const express = require('express')

var port = process.env.Port ||3000
var app = express()

app.get("/", function(req, res){
    res.send("Welcome page")
    })

app.get("/about", function(req, res){
        res.send("About us page")
    })
app.listen(port, function(err){
        console.log("server started at port ",port)
    })