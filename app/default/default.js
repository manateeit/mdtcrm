'use strict';

angular.module('mdtcrm.default', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/default', {
    templateUrl: 'default/default.html',
    controller: 'defaultCtrl'
  });
}])

.controller('defaultCtrl', [function() {

}]);