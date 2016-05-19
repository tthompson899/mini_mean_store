myStore.controller("ordersController", function($scope, orderFactory, customerFactory, productFactory){
  $scope.folks = [];
  $scope.customers_names = [];
  $scope.totalqty = [];
  $scope.products = [];
  $scope.allItems = [];
  $scope.orderDetails = {};
  $scope.update = [];

  function allOrders(){
    orderFactory.index(function(data){
      $scope.orders = data;
    })
  }
  allOrders();

  //Grabs customers names from the customerfactory to display
  customerFactory.index(function(data){
    $scope.folks = data;
    for(var i = 0; i < $scope.folks.length; i++){
      $scope.customers_names.push($scope.folks[i].name);
    }
  })

  //Gets the array of quantities 1-10 from the product factory.qtys array
  $scope.totalqty = productFactory.qtys;

  //Gets the product names that were created from the product factory
  productFactory.index(function(data){
    $scope.allItems = data;
    for(var i = 0; i < $scope.allItems.length; i++){
      $scope.products.push($scope.allItems[i].name);
    }
  })

  $scope.addOrder = function(){
    $scope.orderDetails = $scope.new_order;

    productFactory.index(function(data){
      $scope.allItems = data;
      for (var i = 0; i < $scope.allItems.length; i++) {
        if($scope.allItems[i].name == $scope.orderDetails.product){
          productFactory.update($scope.allItems[i]._id, allOrders, $scope.orderDetails);
        }
      }
    })
    orderFactory.create($scope.orderDetails, allOrders);
    $scope.new_order = {};
  }
})
