"use strict";angular.module("lelyvitoApp",["ui.router"]).constant("$",window.$).constant("MAX_IMG",13).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/"),a.state("home",{url:"/",templateUrl:"views/home.html",controller:"HomeCtrl"}).state("invitation",{url:"/invitation",templateUrl:"views/invitation.html"}).state("location",{url:"/location",templateUrl:"views/location.html"}).state("transport",{url:"/transport",templateUrl:"views/transport.html"}).state("guestbook",{url:"/guestbook",templateUrl:"views/guestbook.html"}).state("about",{url:"/about",templateUrl:"views/about.html"}).state("album",{url:"/album",templateUrl:"views/album.html",controller:"AlbumCtrl"}).state("albumDetail",{url:"/album/{imgId}",templateUrl:"views/album-detail.html",controller:"AlbumDetailCtrl"})}]).run(["$rootScope","$state",function(a){a.$on("$stateChangeStart",function(b,c){a.state=c})}]),angular.module("lelyvitoApp").controller("HomeCtrl",["$scope",function(){}]),angular.module("lelyvitoApp").directive("llvAlbumDir",["$","$state","$timeout",function(a,b){return{restrict:"A",scope:{imgId:"="},link:function(c){var d=+c.imgId-1,e=+c.imgId+1;a(document).keyup(function(a){var c=a.keyCode;37===c&&b.go("albumDetail",{imgId:d}),39===c&&b.go("albumDetail",{imgId:e})}),c.$on("$destroy",function(){a(document).unbind("keyup")})}}}]),angular.module("lelyvitoApp").directive("llvMmenu",["$",function(a){return{templateUrl:"scripts/directives/llv-mmenu.html",restrict:"E",link:function(){a(document).ready(function(){a("#menu").mmenu()})}}}]),angular.module("lelyvitoApp").directive("llvStaticmenu",["$",function(){return{templateUrl:"scripts/directives/llv-staticmenu.html",restrict:"E",link:function(){}}}]),angular.module("lelyvitoApp").directive("llvLazy",["$","$timeout",function(a,b){return{restrict:"EA",link:function(c,d){b(function(){a(d).lazyload()})}}}]),angular.module("lelyvitoApp").directive("llvFbComment",["$","$timeout",function(){function a(a,b,c,d,e){return'<div class="fb-comments" data-href="'+a+'" data-numposts="'+d+'" data-width="'+b+'" data-order-by="'+c+'" data-colorsheme="'+e+'"></div>'}return{restrict:"A",link:function(b,c,d){d.$observe("href",function(b){var e=b,f=d.width,g=d.numposts||5,h=d.orderBy||"time",i=d.colorscheme||"light";c.html(a(e,f,h,g,i)),FB.XFBML.parse(c[0])})}}}]),angular.module("lelyvitoApp").controller("AlbumCtrl",["$scope","$timeout","MAX_IMG",function(a,b,c){a.thumbs=[];for(var d=1;c>=d;++d)a.thumbs.push(d)}]),angular.module("lelyvitoApp").controller("AlbumDetailCtrl",["$scope","$timeout","$state","$stateParams","$log","MAX_IMG",function(a,b,c,d,e,f){var g=d.imgId;1>g&&c.go("albumDetail",{imgId:f}),g>f&&c.go("albumDetail",{imgId:1}),a.model={currAlbumId:g,prevId:+g-1,nextId:+g+1,imgName:"images/album/original_"+g+".jpg"}}]);