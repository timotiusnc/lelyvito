'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('AlbumCtrl', function ($scope, $timeout, MAX_IMG) {
    $scope.thumbs = [];
    for(var i=1; i<=MAX_IMG; ++i) {
      $scope.thumbs.push(i);
    }
  });
