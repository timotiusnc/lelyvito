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
        name: 'Bandung - Surabaya',
        link: 'http://www.traveloka.com/fullsearch?ap=BDO.SUB&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Bandung - Malang',
        link: 'http://www.traveloka.com/fullsearch?ap=BDO.MLG&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Jogja - Surabaya',
        link: 'http://www.traveloka.com/fullsearch?ap=JOG.SUB&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Jojga - Malang',
        link: 'http://www.traveloka.com/fullsearch?ap=JOG.MLG&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Semarang - Surabaya',
        link: 'http://www.traveloka.com/fullsearch?ap=SRG.SUB&dt=10-10-2014.NA&ps=1.0.0'
      },
      {
        name: 'Semarang - Malang',
        link: 'http://www.traveloka.com/fullsearch?ap=SRG.MLG&dt=10-10-2014.NA&ps=1.0.0'
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

    var train = [
      {
        name: 'Jakarta (Gambir) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=GMR&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&do=Cari'
      },
      {
        name: 'Jakarta (Pasar Senen) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=PSE&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0'
      },
      {
        name: 'Jakarta (Tanah Abang) – Kediri'
      },
      {
        name: 'Bandung - Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=BD&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
      },
      {
        name: 'Bandung (Kiaracondong) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=KAC&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0'
      },
      {
        name: 'Tegal – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=TG&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
      },
      {
        name: 'Yogyakarta (Tugu) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=YK&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0'
      },
      {
        name: 'Semarang (Tawang) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=SMT&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0'
      },
      {
        name: 'Solo (Balapan) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=SLO&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0'
      },
      {
        name: 'Madiun – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=MN&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0'
      },
      {
        name: 'Malang (Kota) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=ML&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
      },
      {
        name: 'Surabaya (Gubeng) – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=SGU&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
      },
      {
        name: 'Jember – Kediri',
        link: 'http://www.tiket.com/kereta-api/cari?d=JR&a=KD&date=2014-10-10&ret_date=&adult=1&child=0&infant=0&class=all&maxseats=1'
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
        title: 'Hotel',
        content: hotel
      }
    ];
  });
