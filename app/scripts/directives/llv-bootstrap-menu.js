'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvBootstrapMmenu
 * @description
 * # llvBootstrapMmenu
 */
angular.module('lelyvitoApp')
  .directive('llvBootstrapMenu', function ($) {
    return {
      templateUrl: 'scripts/directives/llv-bootstrap-menu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        $('.nav a').on('click', function() {
          var width = $(window).width();
          if (width <= 768) {
            $('.navbar-toggle').click();
          }
        });
      }
    };
  });
