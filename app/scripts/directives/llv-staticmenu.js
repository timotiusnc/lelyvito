'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvStaticmenu
 * @description
 * # llvStaticmenu
 */
angular.module('lelyvitoApp')
  .directive('llvStaticmenu', function ($) {
    return {
      templateUrl: 'scripts/directives/llv-staticmenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
