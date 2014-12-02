'use strict';

angular.module('mdtcrm.mquote', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/mquote', {
    templateUrl: 'mquote/mquote.html',
    controller: 'mquoteCtrl'
  });
}])

.controller('mquoteCtrl', [function() {

}]);