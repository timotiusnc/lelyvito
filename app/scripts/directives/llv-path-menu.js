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
        var menus = element.find('ul.menu li a');
        var menuToggle = element.find('label[for="shownav"]');
        angular.forEach(menus, function(menu) {
          $(menu).click(function() {
            menuToggle.click();
          });
        });
      }
    };
  });
