'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoApp')
  .directive('llvMmenu', function ($) {
    return {
      templateUrl: 'scripts/directives/llv-mmenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        $(document).ready(function() {
        	$('#menu').mmenu({
            dragOpen: {
              open: true
            }
          });
        });
      }
    };
  });
