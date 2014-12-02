'use strict';

// Declare app level module which depends on views, and components
angular.module('mdtcrm', [
  'ngRoute',
  'mdtcrm.mspec',
  'mdtcrm.mquote',
  'mdtcrm.default',
  'mdtcrm.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/default'});
}]);
