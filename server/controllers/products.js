var mongoose = require("mongoose");
var Products = mongoose.model("Products");

module.exports = {
  index: function(req, res){
    Products.find({}, function(err, allProds){
      if(err){
        console.log(err);
      }
      else{
        res.json(allProds);
      }
    })
  },

  create: function(req, res){

    var new_product = new Products(req.body);
    new_product.save(function(err, newProd){
      if(err){
        console.log(err);
      }
      else{
        res.json(newProd);
      }
    })
  },

  update: function(req, res){

    Products.findById({_id: req.params.id}, function(err, updateCustomer){
      if(err){
        console.log(err);
      }
      else{
        updateCustomer.qty = updateCustomer.qty - req.body.qty;
        if(updateCustomer.qty < 1){
          updateCustomer.qty = 0;
        }
        updateCustomer.save();
      }
    })
  }


}
