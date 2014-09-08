'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:AlbumDetailCtrl
 * @description
 * # AlbumDetailCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('AlbumDetailCtrl', function ($scope, $timeout, $state, $stateParams, $log, MAX_IMG) {
    var currAlbumId = $stateParams.imgId;
    if (currAlbumId < 1) {
      $state.go('albumDetail', {imgId: MAX_IMG});
    }

    if (currAlbumId > MAX_IMG) {
      $state.go('albumDetail', {imgId: 1});
    }

    $scope.model = {
      currAlbumId: currAlbumId,
      prevId: +currAlbumId - 1,
      nextId: +currAlbumId + 1,
      imgName: 'images/album/original_' + currAlbumId + '.jpg'
    };
  });
