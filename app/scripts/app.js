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
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: 'Home'
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
        template: 'Album'
      })
  });
