var app = angular.module('groceryList', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.title = 'The Grochery List';
  $scope.groceryList = [
    {
      name: 'Apples',
      price: 1
    },
    {
      name: 'Oranges',
      price: 2
    },
    {
      name: 'Pears',
      price: 1
    }
  ];

  $scope.addItem = function() {
    // $scope.itemName
    var item = {
      name: $scope.itemName,
      price: 2
    };
    $scope.groceryList.push(item);
    console.log("it works!");
  };
  $scope.deleteItem = function() {
    var item = {
      name: $scope.itemName,
      price: 1
    };
    $scope.groceryList.splice(item);
    console.log("did it!");
  };
}]);


//$scope.item.splice($scope.item.indexOf($scope.item), 1);
