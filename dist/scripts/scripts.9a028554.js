"use strict";angular.module("lelyvitoApp",["ui.router"]).constant("$",window.$).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/main.html",controller:"MainCtrl"}).state("invitation",{url:"/invitation",templateUrl:"views/invitation.html"}).state("location",{url:"/location",template:"Lokasi"}).state("transport",{url:"/transport",template:"Transportasi"}).state("guestbook",{url:"/guestbook",template:"Buku Tamu"}).state("about",{url:"/about",template:"Tentang Lely & Vito"}).state("album",{url:"/album",templateUrl:"views/album.html",controller:"AlbumCtrl"})}]).run(["$rootScope","$state",function(a){a.$on("$stateChangeStart",function(b,c){a.state=c})}]),angular.module("lelyvitoApp").controller("MainCtrl",["$scope",function(){}]),angular.module("lelyvitoApp").directive("llvMmenu",["$",function(a){return{templateUrl:"scripts/directives/llv-mmenu.html",restrict:"E",link:function(){a(document).ready(function(){a("#menu").mmenu({dragOpen:{open:!0}})})}}}]),angular.module("lelyvitoApp").controller("AlbumCtrl",["$scope",function(a){new Dragdealer("demo-simple-slider",{steps:4,speed:.3,loose:!0,requestAnimationFrame:!0});a.frontImages=["images/root/front_1.jpg","images/root/front_2.jpg","images/root/front_3.jpg","images/root/front_4.jpg","images/root/front_5.jpg","images/root/front_6.jpg","images/root/front_7.jpg"]}]);