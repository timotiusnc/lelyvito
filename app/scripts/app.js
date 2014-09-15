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
      'angular-loading-bar',
      'ui.bootstrap',
  	])
  .constant('$', window.$)
  .constant('MAX_IMG', 13)
  .constant('LLV_TITLE', ' | Lely & Vito Wedding')
  .config(function($stateProvider, $urlRouterProvider, LLV_TITLE) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        data : { pageTitle: 'Lely & Vito Wedding' }
      })
      .state('invitation', {
        url: '/invitation',
        templateUrl: 'views/invitation.html',
        data : { pageTitle: 'Invitation' + LLV_TITLE }
      })
      .state('location', {
        url: '/location',
        templateUrl: 'views/location.html',
        data : { pageTitle: 'Location' + LLV_TITLE }
      })
      .state('transport', {
        url: '/transport',
        templateUrl: 'views/transport.html',
        controller: 'TransportCtrl',
        data : { pageTitle: 'Transportation' + LLV_TITLE }
      })
      .state('guestbook', {
        url: '/guestbook',
        templateUrl: 'views/guestbook.html',
        controller: 'GuestbookCtrl',
        data : { pageTitle: 'Guestbook' + LLV_TITLE }
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        data : { pageTitle: 'About' + LLV_TITLE }
      })
      .state('album', {
        url: '/album',
        templateUrl: 'views/album.html',
        controller: 'AlbumCtrl',
        data : { pageTitle: 'Album' + LLV_TITLE }
      })
      .state('albumDetail', {
        url: '/album/{imgId}',
        templateUrl: 'views/album-detail.html',
        controller: 'AlbumDetailCtrl',
        data : { pageTitle: 'Album' + LLV_TITLE }
      });
  })
  .run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      $rootScope.state = toState;
    });
  });
