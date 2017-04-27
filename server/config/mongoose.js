var mongoose = require("mongoose");
var fs = require("fs");

// mongoose.connect("mongodb://localhost/mean_store");
mongoose.connect("mongodb://heroku_wd3q747s:bc89fg5je3no3golp3a5cvcbem@ds123331.mlab.com:23331/heroku_wd3q747s");
var models_path = __dirname + "/../models";

fs.readdirSync(models_path).forEach(function(file){
  if(file.indexOf(".js") > 0){
    require(models_path + "/" + file);
  }
})
