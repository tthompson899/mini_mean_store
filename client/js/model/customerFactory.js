var myStore = angular.module("myStore", ["ngRoute"]);


myStore.factory("customerFactory", function($http){
  var factory = {};
  var customers = [];

  factory.index = function(callback){
    $http.get("/customers").success(callback);
  }

  factory.create = function(newCustomer, callback){
    $http.post("/customers", newCustomer).success(callback);
  }

  factory.delete = function(id, callback){
    $http.delete("/customers/" + id).success(callback);
  }

  return factory;
})
