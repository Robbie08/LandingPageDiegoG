const express = require('express');
const app = express(); //  create an express application

//set the viewport
const port = process.env.PORT || 8080
var path = require('path');
app.use(express.static(__dirname));

// handles the route
app.get("/", function(req,res) {
    console.log(__dirname);
    res.render("index")
});


// print to console if the app is online and running
app.listen(function () {
    console.log("App is running ")
});

// print to the console log if the port is fully functional
app.listen(port);
console.log("My brotha");
