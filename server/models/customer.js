var mongoose = require("mongoose");
var validate = require("mongoose-validator");

var nameValidator = [
  validate({
    validator: "isAlphanumeric",
    passIfEmpty: true,
    message: "Name should contain alpha-numeric characters only"
  })
];
var CustomerSchema = new mongoose.Schema({
  name: {type: String, required: true, validate: nameValidator},
  date: {type: Date, default: Date.now}
});

mongoose.model("Customers", CustomerSchema);
