var mongoose = require("mongoose");

var OrdersSchema = new mongoose.Schema({
  customer_name: String,
  product: String,
  quantity: Number,
  date: {type: Date, default: Date.now}
});

mongoose.model("Orders", OrdersSchema);
