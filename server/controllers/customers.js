var mongoose = require("mongoose");
var Customers = mongoose.model("Customers");

module.exports = {

  index: function(req, res){
    Customers.find({}, function(err, results){
      if(err){
        console.log(err);
      }
      else{
        res.json(results);
      }
    })
  },
  create: function(req, res){

    var new_customer = new Customers({name: req.body.cname});
    // var error;
    // if(new_customer.name == undefined){
    //   error = new_customer.validateSync();
    //   error = error.errors['name'].message;
    //   res.json(error);
    //
    // }
    new_customer.save(function(err, newCustomer){
      if(err){
        console.log(err);
      }
      else{
        res.json(newCustomer);
      }
    })
  },

  delete: function(req, res){
    Customers.remove({_id: req.params.id}, function(err, custRemoved){
      if(err){
        console.log(err);
      }
      else{
        res.json(custRemoved); 
      }
    })
  }



}
