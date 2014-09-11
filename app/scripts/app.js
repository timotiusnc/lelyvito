'use strict';

/**
 * @ngdoc overview
 * @name lelyvitoApp
 * @description
 * # lelyvitoApp
 *
 * Main module of the application.
 */
angular
  .module('lelyvitoApp', [
      'ngAnimate',
      'ui.router',
      'firebase',
      'angularMoment',
      'angular-loading-bar'
  	])
  .constant('$', window.$)
  .constant('MAX_IMG', 13)
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .state('invitation', {
        url: '/invitation',
        templateUrl: 'views/invitation.html'
      })
      .state('location', {
        url: '/location',
        templateUrl: 'views/location.html'
      })
      .state('transport', {
        url: '/transport',
        templateUrl: 'views/transport.html'
      })
      .state('guestbook', {
        url: '/guestbook',
        templateUrl: 'views/guestbook.html',
        controller: 'GuestbookCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .state('album', {
        url: '/album',
        templateUrl: 'views/album.html',
        controller: 'AlbumCtrl'
      })
      .state('albumDetail', {
        url: '/album/{imgId}',
        templateUrl: 'views/album-detail.html',
        controller: 'AlbumDetailCtrl'
      });
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $rootScope.state = toState;
    });
  });
