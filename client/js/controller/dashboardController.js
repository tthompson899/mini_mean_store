myStore.controller("dashboardController", function($scope, customerFactory, orderFactory, productFactory){

  customerFactory.index(function(data){
    $scope.customers = data;
  })

  orderFactory.index(function(data){
    $scope.orders = data;
  })

  productFactory.index(function(data){
    $scope.products = data;
    })

})
