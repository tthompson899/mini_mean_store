var mongoose = require("mongoose");
var Orders = mongoose.model("Orders");

module.exports = {
  index: function(req, res){
    Orders.find({}, function(err, allOrders){
      if(err){
        console.log(err);
      }
      else{
        res.json(allOrders);
      }
    })
  },
  create: function(req, res){
    var new_order = new Orders({customer_name: req.body.name, product: req.body.product, quantity: req.body.qty});
    console.log(new_order);
    new_order.save(function(err, newOrder){
      if(err){
        console.log(err);
      }
      else{
        res.json(newOrder);
      }
    })
  }
}
