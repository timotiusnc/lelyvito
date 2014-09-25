'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvPathMenu
 * @description
 * # llvPathMenu
 */
angular.module('lelyvitoApp')
  .directive('llvPathMenu', function ($) {
    return {
      templateUrl: 'scripts/directives/llv-path-menu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      }
    };
  });
