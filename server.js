var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname + "/client/"));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);


app.listen(4001, function(){
  console.log("Listening on server 4001...");
})
