'use strict';

angular
  .module('angularUiRouter2App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ui.router'
  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/partial-home.html'
      })
      .state('home.list', {
        url: '/list',
        templateUrl: 'views/partial-home-list.html',
        controller: function($scope) {
          $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
        }
      })
      .state('home.paragraph', {
        url: '/paragraph',
        template: 'I could sure use a drink right now'
      })
      .state('about', {
        url: '/about',
        views: {
          // The main template will be placed here (relatively named)
          '': {
            templateUrl: 'views/partial-about.html'
          },
          // The child views will be defined here (absolutely named)
          'columnOne@about': {
            template: 'Look I am a column!'
          },
          // For column two, we'll define a separate controller.
          'columnTwo@about': {
            templateUrl: 'views/table-data.html',
            controller: 'ScotchCtrl'
          }
        }
      });
  }]);
