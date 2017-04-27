var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = process.env.PORT || 8080; // added port for Heroku to listen on

app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(port, function(){
  console.log("Listening on server 8080...");
})
