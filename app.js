const express = require("express")
var app = express()

var port =  process.env.Port || 3010
    
app.get("/", function(req, res){
        res.send("Welcome pages")
})
app.get("/about", function(req, res){
        res.send("About us page")
})
    
app.get("/contact", function(req, res){
        res.send("Contact page")
     })
    
app.listen(port, function(err){
        console.log("server started at port ", port)
    })