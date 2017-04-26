var mongoose = require("mongoose");
var fs = require("fs");

// mongoose.connect("mongodb://localhost/mean_store");
mongoose.connect("mongodb: //heroku_n2js56gg:ugrebafsg1tagvfrhp08jn2a1c@ds121091.mlab.com:21091/heroku_n2js56gg");
var models_path = __dirname + "/../models"

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") > 0){
    require(models_path + "/" + file);
  }
})
