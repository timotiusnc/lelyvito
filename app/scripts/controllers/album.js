'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('AlbumCtrl', function ($scope, $timeout) {
    $scope.thumbs = [];
    for(var i=1; i<=14; ++i) {
      $scope.thumbs.push(i);
    }

    $timeout(function() {
      $('a.gallery').colorbox({
        height: '75%',
        rel: 'gallery',
        transition: 'elastic',
        slideshow: true
      });

      $.colorbox.resize();
    });
  });
