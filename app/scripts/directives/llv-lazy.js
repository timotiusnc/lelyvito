'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoApp')
  .directive('llvLazy', function ($, $timeout) {
    return {
      restrict: 'C',
      link: function postLink(scope, element, attrs) {
        $timeout(function() {
          $(element).lazyload({
            effect: 'fadeIn',
            effectspeed: 700,
            'skip_invisible': false
          });
        });
      }
    };
  });
