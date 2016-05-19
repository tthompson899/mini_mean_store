myStore.controller("customerController", function($scope, customerFactory){

  function allCustomers(){
    customerFactory.index(function(data){
      $scope.customers = data;

    })
  }

  allCustomers();

  $scope.addCustomer = function(){
    customerFactory.create($scope.newCustomer, allCustomers);//add allcustomers callback here after created
    $scope.newCustomer = '';
    }

  $scope.removeCustomer = function(id){
    customerFactory.delete(id, allCustomers);
  }

})
