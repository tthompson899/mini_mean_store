var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  qty: Number
});

mongoose.model("Products", ProductSchema);
