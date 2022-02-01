const express = require('express')


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

    app.listen(process.env.PORT || 3000, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
      });