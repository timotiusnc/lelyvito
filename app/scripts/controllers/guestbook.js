'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:GuestbookCtrl
 * @description
 * # GuestbookCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('GuestbookCtrl', function ($scope, $firebase) {
    var ref = new Firebase('https://lely-vito.firebaseio.com/guestbook');
    
    $scope.messages = $firebase(ref).$asArray();

    $scope.addMessage = function(e) {
      if ($scope.msg) {
        var name = $scope.name || 'anonymous';
        $scope.messages.$add({
          from: name,
          body: $scope.msg
        });

        $scope.msg = '';
      }
    };
  });
