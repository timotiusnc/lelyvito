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
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        $timeout(function() {
          $(element).lazyload({
            effect: 'fadeIn'
          });
        });
      }
    };
  });
