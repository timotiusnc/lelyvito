'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.vito = 'Vito Ardhiyanto';
    $scope.lely = 'Lely Mufika';
  });
