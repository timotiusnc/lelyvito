'use strict';

/**
 * @ngdoc function
 * @name lelyvitoApp.controller:TransportCtrl
 * @description
 * # TransportCtrl
 * Controller of the lelyvitoApp
 */
angular.module('lelyvitoApp')
  .controller('TransportCtrl', function ($scope) {
    var plane = [
      {
        name: 'Jakarta - Surabaya',
        link: 'http://www.traveloka.com/fullsearch?ap=JKTA.SUB&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Jakarta - Malang',
        link: 'http://www.traveloka.com/fullsearch?ap=JKTA.MLG&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Makassar - Surabaya',
        link: 'http://www.traveloka.com/fullsearch?ap=UPG.SUB&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Makassar - Malang',
        link: 'http://www.traveloka.com/fullsearch?ap=UPG.MLG&dt=10-10-2014.NA&ps=1.0.0'
      }
    ];

    var train = [
      {
        name: 'Jakarta - Kediri'
      },
      {
        name: 'Surabaya - Kediri'
      }
    ];

    var bus = {

    };

    var hotel = [
      {
        name: 'Grand Surya Hotel Kediri',
        link: 'http://www.suryahotelsgroup.com/beta/surya/',
      },
      {
        name: 'Insumo Palace Hotel Kediri',
        link: 'http://insumopalace.com/',
      },
      {
        name: 'Hotel Merdeka Kediri',
        link: 'http://www.suryahotelsgroup.com/beta/merdeka/'
      },
      {
        name: 'Lotus Garden Kediri',
        link: 'http://lotusgardenhotel.com/'
      },
      {
        name: 'Hotel Bismo Kediri',
        link: 'http://www.hotelbismo.com/'
      }
    ];

    $scope.model = {
      plane: plane,
      train: train,
      bus: bus,
      hotel: hotel
    };
  });
