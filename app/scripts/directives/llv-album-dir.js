'use strict';

/**
 * @ngdoc directive
 * @name lelyvitoApp.directive:llvMmenu
 * @description
 * # llvMmenu
 */
angular.module('lelyvitoApp')
  .directive('llvAlbumDir', function ($, $state, $timeout) {
    return {
      restrict: 'A',
      scope: {
        imgId: '='
      },
      link: function postLink(scope, element, attrs) {
        var prevId = +scope.imgId - 1;
        var nextId = +scope.imgId + 1;

        $(document).keyup(function(e) {
          var keyCode = e.keyCode;
          if (keyCode === 37) { //left
            $state.go('albumDetail', {imgId: prevId});
          }

          if (keyCode === 39) { //right
            $state.go('albumDetail', {imgId: nextId});
          }
        });

        scope.$on('$destroy', function() {
          $(document).unbind('keyup');
        });
      }
    };
  });
