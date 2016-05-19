myStore.factory("orderFactory", function($http){
  var factory = {};
  var orders = [];

  factory.index = function(callback){
    $http.get("/orders").success(callback);
  }

  factory.create = function(new_order, callback){
    $http.post("/orders", new_order).success(callback);
  }

  return factory;
})
