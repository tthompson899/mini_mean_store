myStore.controller("productController", function($scope, productFactory){
  $scope.qtys = productFactory.qtys;

  function allProds(){
    productFactory.index(function(data){
      $scope.products = data;
    })
  }

  allProds();

  $scope.addProd = function(){
    productFactory.create($scope.newProd, allProds);
    $scope.newProd = {};
  }
})
