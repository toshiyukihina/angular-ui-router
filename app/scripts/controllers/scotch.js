'use strict';

angular.module('angularUiRouter2App')
  .controller('ScotchCtrl', ['$scope', function ($scope) {
    $scope.message = 'test';
    $scope.scotches = [
      { name: 'Macallan 12', price: 50 },
      { name: 'Chivas Regal Royal Salute', price: 10000 },
      { name: 'Glenfiddich 1937', price: 20000 }
    ];
  }]);
