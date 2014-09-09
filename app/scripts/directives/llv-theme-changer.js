'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvThemeChanger
 * @description
 * # llvThemeChanger
 */
angular.module('lelyvitoApp')
  .directive('llvThemeChanger', function ($) {
    return {
      templateUrl: 'scripts/directives/llv-theme-changer.html',
      restrict: 'E',
      controller: 'llvThemeChangerCtrl',
      link: function postLink(scope, element, attrs) {
      }
    };
  })
  .controller('llvThemeChangerCtrl', function($scope) {
    $scope.isActive = false;
    $scope.bgColor = 'tosca'; //default
    $scope.toggleThemeChanger = function() {
      $scope.isActive = !$scope.isActive;
    }
  });
