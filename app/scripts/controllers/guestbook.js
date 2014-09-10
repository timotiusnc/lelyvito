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
    $scope.showForm = false;
    $scope.isLoading = true;
    
    $scope.messages.$loaded()
      .then(function(data) {
        $scope.isLoading = false;
      });

    $scope.formToggle = function() {
      $scope.showForm = !$scope.showForm;
    };

    $scope.addMessage = function(e) {
      if ($scope.msg) {
        var name = $scope.name || 'anonymous';
        $scope.messages.$add({
          from: name,
          body: $scope.msg,
          timestamp: Firebase.ServerValue.TIMESTAMP
        });

        $scope.name = '';
        $scope.msg = '';
      }
    };
  });
