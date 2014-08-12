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
      'ui.router',
  	])
  .constant('$', window.$)
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .state('invitation', {
        url: '/invitation',
        template: 'Undangan'
      })
      .state('location', {
        url: '/location',
        template: 'Lokasi'
      })
      .state('transport', {
        url: '/transport',
        template: 'Transportasi'
      })
      .state('guestbook', {
        url: '/guestbook',
        template: 'Buku Tamu'
      })
      .state('about', {
        url: '/about',
        template: 'Tentang Lely & Vito'
      })
      .state('album', {
        url: '/album',
        templateUrl: 'views/album.html',
        controller: 'AlbumCtrl'
      })
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $rootScope.state = toState;
    });
  });
