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
    $scope.isLoggedIn = false;
    $scope.user = null;
    
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
          from: $scope.user.displayName,
          body: $scope.msg,
          user: $scope.user,
          timestamp: Firebase.ServerValue.TIMESTAMP
        });

        $scope.name = '';
        $scope.msg = '';
      }
    };

    var myRef = new Firebase("https://lely-vito.firebaseio.com");
    var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
      if (error) { // an error occurred while attempting login
        console.log('errorr',error);
        $scope.isLoggedIn = false;
      } else if (user) { // user authenticated with Firebase
        $scope.$apply(function() {
          $scope.isLoggedIn = true;
          $scope.user = user;
        });
      } else { // user is logged out
        console.log('user is logged out');
        $scope.isLoggedIn = false;
      }
    });

    $scope.loginFB = function() {
      authClient.login('facebook');
    };

    $scope.loginTW = function() {
      authClient.login('twitter');
    };
  });
