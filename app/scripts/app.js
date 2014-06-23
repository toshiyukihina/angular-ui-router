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
      .state('about', {
        url: '/about',
        templateUrl: 'views/partial-about.html'
      });
  }]);
