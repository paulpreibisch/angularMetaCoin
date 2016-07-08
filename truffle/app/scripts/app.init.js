'use strict';

/**
 * @ngdoc overview
 * @name angularTruffleMetaCoin
 * @description
 * # angularTruffleMetaCoin
 *
 * Main module of the application.
 */
angular
  .module('angularTruffleMetaCoin', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
