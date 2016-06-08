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
    $scope.itemName = "";
    console.log("it works!");
  };
  $scope.deleteItem = function(index) {
    // Get the index of the clicked item
    // delete one item from the array starting at that index
    console.log(index);
    $scope.groceryList.splice(index, 1);
    console.log("did it!");
  };
}]);

// var buttons = document.getElementsByClassName("glyphicon-trash");
// for (var i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("mousedown", function() {
//
//   });
// }
//
// $(".glyphicon-trash").click(function() {
//
// });


//$scope.item.splice($scope.item.indexOf($scope.item), 1);
