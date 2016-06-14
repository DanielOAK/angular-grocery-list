var app = angular.module('groceryList', []);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.title = 'The Grochery List';
  $scope.editing = false;

  var currentItem;

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

// create an item via object constructor
// push it to the List
// clear the label box
  $scope.addItem = function() {
    var item = {
      name: $scope.itemName,
      price: 2
    };
    $scope.groceryList.push(item);
    $scope.itemName = "";
    };


// Get the index of the clicked item
// delete one item from the array starting at that index
  $scope.deleteItem = function(index) {
    $scope.groceryList.splice(index, 1);

  };


// toggle editing on
// get item name from list next to clicked pencil
  $scope.editItem = function(item) {
    currentItem = item;
    $scope.editing = true;
    $scope.itemName = item.name;

    // when the pencil icon is clicked
    // change the line to a form input via $scope.editing boolean
    // with name in field
    // when form is submitted, update the data
    // then display list item again


  };


// update item with changes
// toggle editing off
// clear label box
  $scope.updateItem = function(item) {
    currentItem.name = $scope.itemName;
    $scope.editing = false;
    $scope.itemName = "";


  };
}]);
