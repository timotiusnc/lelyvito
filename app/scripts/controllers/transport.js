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
        name: 'Jakarta (Gambir) - Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=GMR&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&do=Cari'
      },
      {
        name: 'Bandung - Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=BD&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
      },
      {
        name: 'Surabaya (Gubeng) - Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=SGU&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
      },
      {
        name: 'Malang (Kota) - Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=ML&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
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
      },
      {
        name: 'Bukit Daun Hotel & Resort Kediri',
        link: 'http://www.bukit-daun.com/'
      },
      {
        name: 'Hotel Penataran Kediri',
        link: 'http://www.phrikediriraya.com/page/show/146/hotel-penataran'
      }
    ];

    $scope.model = [
      {
        title: 'Plane',
        content: plane,
        active: true
      },
      {
        title: 'Train',
        content: train,
      },
      {
        title: 'Bus',
        content: []
      },
      {
        title: 'Hotel',
        content: hotel
      },
      {
        title: 'Google Maps'
      }
    ];
  });
