// 'use strict';

/* Controllers */
var app = angular.module('AngularFlask').controller('snip', ['$scope', '$http', function($scope, $http) {
    $scope.adddd = "asdfasdfasdfasdf12345";
    $scope.note_list = ["asdf", "note", "title"];
    $scope.titles = null;
    $http.get('/notes').success(function(data, status, headers, config) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.titles = data;
    }).
    error(function(data, status, headers, config) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });

    $scope.getNote = function(argument) {
        alert(argument);
    };
}]);

app.controller('placesController', ['$scope', function($scope) {
    //fetch the places data
    $scope.places = "";
}]);

// function IndexController($scope) {
// 	$scope.list = ["asdf", "note", "title"];
// 	var s = this;
// 	s.asdf = "asdfasdf";
// }

// function AboutController($scope) {

// }

// function PostListController($scope, Post) {
// 	var postsQuery = Post.get({}, function(posts) {
// 		$scope.posts = posts.objects;
// 	});
// }

// function PostDetailController($scope, $routeParams, Post) {
// 	var postQuery = Post.get({ postId: $routeParams.postId }, function(post) {
// 		$scope.post = post;
// 	});
// }




app.controller('mapController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.map;
    $scope.rectangle;
    $scope.markers = [];
    $scope.currentMarker;
    $scope.overlay;

    $timeout(function() {
        $scope.initialize()
    });

    $scope.supports_html5_storage = function() {
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch (e) {
            return false;
        }
    };

    $scope.initialize = function() {
            var geoExists = false;
            

            var mapOptions = {
                zoom: 13
            };
            $scope.map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);

            // Try HTML5 geolocation



            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    $scope.pos = new google.maps.LatLng(position.coords.latitude,
                        position.coords.longitude);
                    localStorage.setItem("long", position.coords.longitude);
                    localStorage.setItem("lat", position.coords.latitude);
                    localStorage.setItem("geoDate", Date());
                    // var infowindow = new google.maps.InfoWindow({
                    //   map: map,
                    //   position: pos,
                    //   content: 'Location found using HTML5.'
                    // });

                    $scope.marker = new google.maps.Marker({
                        position: $scope.pos,
                        map: $scope.map,
                        animation: google.maps.Animation.DROP,
                        title: 'Click to zoom'
                    });

                    $scope.map.setCenter($scope.pos);
                }, function() {
                    $scope.handleNoGeolocation(true);
                });
            } else {
                // Browser doesn't support Geolocation
                $scope.handleNoGeolocation(false);
            }
        // };
        // else {
        //   createLocalStorageMap();
        // }

    // This event listener will call addMarker() when the map is clicked.
    google.maps.event.addListener($scope.map, 'click', function(event) {
    	if($scope.useBoundry)
    	{


    	if($scope.currentMarker != null)
    		$scope.currentMarker.setMap(null);
    	
              $scope.addMarker(event.latLng);

              var bounds = new google.maps.LatLngBounds(
                  new google.maps.LatLng(event.latLng.lat() - .029, event.latLng.lng() - .022),
                  new google.maps.LatLng(event.latLng.lat() + .029, event.latLng.lng() + .022)
              );
              if ($scope.rectangle != null)
                  $scope.rectangle.setMap(null);

              $scope.rectangle = new google.maps.Rectangle({
                  bounds: bounds,
                  editable: true,
                  draggable: true
              });

    $scope.rectangle.setMap($scope.map);

}

// var swBound = new google.maps.LatLng(latitude -.059, longitude - .052);
// var neBound = new google.maps.LatLng(latitude +.059, longitude - .022);
// var bounds = new google.maps.LatLngBounds(swBound, neBound);

        // // The photograph is courtesy of the U.S. Geological Survey.
        // var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
        // srcImage += 'examples/full/images/talkeetna.png';

        // // The custom USGSOverlay object contains the USGS image,
        // // the bounds of the image, and a reference to the map.
        // overlay = new USGSOverlay(bounds, srcImage, map);



    });

google.maps.event.addListener($scope.map, 'tilesloaded', function(){

var bounds = $scope.map.getBounds();
console.log(bounds.getNorthEast().lat());
if(bounds != null)
{
	var url = 'http://api.wunderground.com/api/66108a460b5b163b/radar/image.gif?maxlat=' + bounds.getNorthEast().lat() + 
'&maxlon=' +bounds.getNorthEast().lng()+ '&minlat='+ bounds.getSouthWest().lat()+
'&minlon='+ bounds.getSouthWest().lng()+'&width=600&height=1068&newmaps=0';
console.log(url);
}
// var imageBounds = new google.maps.LatLngBounds(
//     bounds.getNorthEast(),
//     new google.maps.LatLng(40.773941, -74.12544));

$scope.overlay = new google.maps.GroundOverlay(
    url,
    bounds);
//alert(bounds);
$scope.overlay.setMap($scope.map);
    // do something only the first time the map is loaded
});

  // google.maps.event.addListener($scope.map, 'click', function(){
  // 	console.log('Click event triggered');
  // });

google.maps.event.addListener($scope.map, 'idle', function(){
console.log('Bounds changed');

var bounds = $scope.map.getBounds();
if(bounds != null)
{
	var url = 'http://api.wunderground.com/api/66108a460b5b163b/radar/image.gif?maxlat=' + bounds.getNorthEast().lat() + 
'&maxlon=' +bounds.getNorthEast().lng()+ '&minlat='+ bounds.getSouthWest().lat()+
'&minlon='+ bounds.getSouthWest().lng()+'&width=600&height=1068&newmaps=0';

}
// var imageBounds = new google.maps.LatLngBounds(
//     bounds.getNorthEast(),
//     new google.maps.LatLng(40.773941, -74.12544));

if (bounds != null) {
    $scope.overlay.setMap(null);
    $scope.overlay = new google.maps.GroundOverlay(
        url,
        bounds);
    //alert(bounds);
    $scope.overlay.setMap($scope.map);
}
// do something only the first time the map is loaded
});


var input = /** @type {HTMLInputElement} */(
      document.getElementById('pac-input'));

  var types = document.getElementById('type-selector');
  $scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  $scope.map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

  var autocomplete = new google.maps.places.Autocomplete(input);
  autocomplete.bindTo('bounds', $scope.map);
  var infowindow = new google.maps.InfoWindow();
  var marker = new google.maps.Marker({
    map: $scope.map,
    anchorPoint: new google.maps.Point(0, -29)
  });

google.maps.event.addListener(marker, 'click', function() {
    if ($scope.useBoundry) {
        $scope.currentMarker = marker;
        // if($scope.currentMarker != null)
        // 	$scope.currentMarker.setMap(null);

        //          $scope.addMarker(event.latLng);
        var position = marker.getPosition();
        var bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(position.lat() - .005, position.lng() - .005),
            new google.maps.LatLng(position.lat() + .005, position.lng() + .005)
        );
        if ($scope.rectangle != null)
            $scope.rectangle.setMap(null);

        $scope.rectangle = new google.maps.Rectangle({
            bounds: bounds,
            editable: true,
            draggable: true
        });

        $scope.rectangle.setMap($scope.map);
    }

});
google.maps.event.addListener(autocomplete, 'place_changed', function() {
    infowindow.close();
    marker.setVisible(false);
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Autocomplete's returned place contains no geometry");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      $scope.map.fitBounds(place.geometry.viewport);
    } else {
      $scope.map.setCenter(place.geometry.location);
      $scope.map.setZoom(17);  // Why 17? Because it looks good.
    }
    // marker.setIcon(/** @type {google.maps.Icon} */({
    //   //url: place.icon,
    //   size: new google.maps.Size(71, 71),
    //   origin: new google.maps.Point(0, 0),
    //   anchor: new google.maps.Point(17, 34),
    //   scaledSize: new google.maps.Size(35, 35)
    // }));

	  // marker.setIcon(/** @type {google.maps.Icon} */({
   //    url: place.icon,
   //    size: new google.maps.Size(71, 71),
   //    origin: new google.maps.Point(0, 0),
   //    anchor: new google.maps.Point(17, 34),
   //    scaledSize: new google.maps.Size(35, 35)
   //  }));
    $scope.currentMarker.setPosition(place.geometry.location);
    $scope.currentMarker.setVisible(true);

    var address = '';
    if (place.address_components) {
      address = [
        (place.address_components[0] && place.address_components[0].short_name || ''),
        (place.address_components[1] && place.address_components[1].short_name || ''),
        (place.address_components[2] && place.address_components[2].short_name || '')
      ].join(' ');
    }

    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
    infowindow.open($scope.map, marker);
  });


  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  function setupClickListener(id, types) {
    var radioButton = document.getElementById(id);
    google.maps.event.addDomListener(radioButton, 'click', function() {
      autocomplete.setTypes(types);
    });
  }


  setupClickListener('changetype-all', []);
  setupClickListener('changetype-address', ['address']);
  setupClickListener('changetype-establishment', ['establishment']);
  setupClickListener('changetype-geocode', ['geocode']);


//end init
}

$scope.createLocalStorageMap = function() {

    var longitude = localStorage.getItem("long");
    var latitude = localStorage.getItem("lat");
    var pos = new google.maps.LatLng(latitude,
        longitude);
    $scope.map = new google.maps.Map(document.getElementById('map-canvas'), {
        zoom: 12,
        //center: {lat: latitude, lng:longitude}
    });

    $scope.map.setCenter(pos);

    var marker = new google.maps.Marker({
        position: pos,
        map: $scope.map,
        animation: google.maps.Animation.DROP,
        title: 'Click to zoom'
    });

}

$scope.handleNoGeolocation = function(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: $scope.map,
        position: new google.maps.LatLng(60, 105),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}






$scope.addMarker = function(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: $scope.map
    });
    $scope.currentMarker = marker;
}


google.maps.event.addDomListener(window, 'load', $scope.initialize);



}]);