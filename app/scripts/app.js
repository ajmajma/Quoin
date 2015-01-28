'use strict';
/**
 * @ngdoc overview
 * @name quoinApp
 * @description
 * # quoinApp 
 * Dependancy injection and routes
 */
angular
  .module('quoinApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/usePass', {
        templateUrl: 'views/usePass.html',
        controller: 'UsePassCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
