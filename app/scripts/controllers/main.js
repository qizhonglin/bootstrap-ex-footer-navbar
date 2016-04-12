'use strict';

/**
 * @ngdoc function
 * @name bootstrapExApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bootstrapExApp
 */
angular.module('bootstrapExApp')
  .controller('MainCtrl', function ($scope) {
    $scope.items = [] ;
    for (var i = 0 ; i < 10; ++ i){
      $scope.items.push(i) ;
    }
  });
