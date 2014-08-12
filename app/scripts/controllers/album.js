'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:AlbumCtrl
 * @description
 * # AlbumCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('AlbumCtrl', function ($scope) {
    var frontSlider = new Dragdealer('demo-simple-slider', {
      steps: 4,
      speed: 0.3,
      loose: true,
      requestAnimationFrame: true
    });

    //frontSlider.setStep(3,0, true);

    $scope.frontImages = [
      'images/root/front_1.jpg',
      'images/root/front_2.jpg',
      'images/root/front_3.jpg',
      'images/root/front_4.jpg',
      'images/root/front_5.jpg',
      'images/root/front_6.jpg',
      'images/root/front_7.jpg',
    ];
  });
