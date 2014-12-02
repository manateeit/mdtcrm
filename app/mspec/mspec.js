'use strict';

var mspecapp = angular.module('mdtcrm.mspec', ['ngRoute']);

mspecapp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/mspec/:mspecID', {
    templateUrl: 'mspec/mspec.html',
    controller: 'mspecCtrl'
  })
      .when('/mspec', {
        templateUrl: 'default/default.html',
        controller: 'defaultCtrl'
      });
}]);

mspecapp.controller('mspecCtrl', function($scope,$routeParams,$timeout) {
      console.log($routeParams.mspecID);
  if ($routeParams.mspecID == null)
      return;
  else
    $scope.mspecID = $routeParams.mspecID;


  var rootRef = new Firebase ('https://mdtcrmtemplates.firebaseio.com/materialspec');
  var childRef = rootRef.child ($scope.mspecID);

  childRef.on ('value', function (snapshot) {
    $timeout (function () {
      var snapshotVal = snapshot.val ();
      $scope.data = snapshotVal;
      console.log ($scope.data);
    });
  })
});