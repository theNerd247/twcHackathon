// // 'use strict';


// angular.module('AngularFlask').
// directive('myMap', function() {
//     // directive link function
//     var link = function(scope, element, attrs) {

//         var map;
//         var rectangle;

//         function supports_html5_storage() {
//             try {
//                 return 'localStorage' in window && window['localStorage'] !== null;
//             } catch (e) {
//                 return false;
//             }
//         }

//         function initialize() {
//             var geoExists = false;
//             if (supports_html5_storage()) {
//                 var lastLocation = localStorage.getItem("long");
//                 if (lastLocation != null)
//                     geoExists = true;

//             }
//             if (!geoExists) {

//                 var mapOptions = {
//                     zoom: 8
//                 };
//                 map = new google.maps.Map(document.getElementById('map-canvas'),
//                     mapOptions);

//                 // Try HTML5 geolocation



//                 if (navigator.geolocation) {
//                     navigator.geolocation.getCurrentPosition(function(position) {
//                         var pos = new google.maps.LatLng(position.coords.latitude,
//                             position.coords.longitude);
//                         localStorage.setItem("long", position.coords.longitude);
//                         localStorage.setItem("lat", position.coords.latitude);
//                         localStorage.setItem("geoDate", Date());
//                         // var infowindow = new google.maps.InfoWindow({
//                         //   map: map,
//                         //   position: pos,
//                         //   content: 'Location found using HTML5.'
//                         // });

//                         var marker = new google.maps.Marker({
//                             position: pos,
//                             map: map,
//                             animation: google.maps.Animation.DROP,
//                             title: 'Click to zoom'
//                         });

//                         map.setCenter(pos);
//                     }, function() {
//                         handleNoGeolocation(true);
//                     });
//                 } else {
//                     // Browser doesn't support Geolocation
//                     handleNoGeolocation(false);
//                 }
//             } else {
//                 createLocalStorageMap();
//             }

//             // This event listener will call addMarker() when the map is clicked.
//             google.maps.event.addListener(map, 'click', function(event) {
//                 addMarker(event.latLng);

//                 var bounds = new google.maps.LatLngBounds(
//                     new google.maps.LatLng(event.latLng.lat() - .029, event.latLng.lng() - .022),
//                     new google.maps.LatLng(event.latLng.lat() + .029, event.latLng.lng() + .022)
//                 );
//                 if (rectangle != null)
//                     rectangle.setMap(null);

//                 rectangle = new google.maps.Rectangle({
//                     bounds: bounds,
//                     editable: true,
//                     draggable: true
//                 });

//                 rectangle.setMap(map);
//                 // var swBound = new google.maps.LatLng(latitude -.059, longitude - .052);
//                 // var neBound = new google.maps.LatLng(latitude +.059, longitude - .022);
//                 // var bounds = new google.maps.LatLngBounds(swBound, neBound);

//                 // // The photograph is courtesy of the U.S. Geological Survey.
//                 // var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
//                 // srcImage += 'examples/full/images/talkeetna.png';

//                 // // The custom USGSOverlay object contains the USGS image,
//                 // // the bounds of the image, and a reference to the map.
//                 // overlay = new USGSOverlay(bounds, srcImage, map);



//             });



//         }

//         function createLocalStorageMap() {

//             var longitude = localStorage.getItem("long");
//             var latitude = localStorage.getItem("lat");
//             var pos = new google.maps.LatLng(latitude,
//                 longitude);
//             map = new google.maps.Map(document.getElementById('map-canvas'), {
//                 zoom: 12,
//                 //center: {lat: latitude, lng:longitude}
//             });

//             map.setCenter(pos);

//             var marker = new google.maps.Marker({
//                 position: pos,
//                 map: map,
//                 animation: google.maps.Animation.DROP,
//                 title: 'Click to zoom'
//             });

//         }

//         function handleNoGeolocation(errorFlag) {
//             if (errorFlag) {
//                 var content = 'Error: The Geolocation service failed.';
//             } else {
//                 var content = 'Error: Your browser doesn\'t support geolocation.';
//             }

//             var options = {
//                 map: map,
//                 position: new google.maps.LatLng(60, 105),
//                 content: content
//             };

//             var infowindow = new google.maps.InfoWindow(options);
//             map.setCenter(options.position);
//         }






//         function addMarker(location) {
//             var marker = new google.maps.Marker({
//                 position: location,
//                 map: map
//             });
//             markers.push(marker);
//         }


//         google.maps.event.addDomListener(window, 'load', initialize);

//     };

//     return {
//         restrict: 'A',
//         template: '<div id="gmaps"></div>',
//         replace: true,
//         link: link
//     };
// });




// /* Directives */