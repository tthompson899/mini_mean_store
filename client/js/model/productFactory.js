myStore.factory("productFactory", function($http){
  var factory = {};
  var products = [];
  factory.qtys = [1,2,3,4,5,6,7,8,9,10];

  factory.index = function(callback){
    $http.get("/products").success(callback);
  }
  factory.create = function(newProd, callback){
    $http.post("/products", newProd).success(callback);
  }
  factory.update = function(id, callback, newOrder){
    $http.put("/products/" + id, newOrder).success(callback);
  }


  return factory;
})
