// 'use strict';

/* Controllers */
var app = angular.module('AngularFlask').controller('snip', ['$scope', '$http', function($scope, $http){
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
		alert(argument);  };
}]);

app.controller('placesController',['$scope','$http',function($scope,$http){
	var uname = '/samples'; //+ $parentScope.username
	$http.get(uname).success(function(data, status, headers, config) {
		// this callback will be called asynchronously
		// when the response is available
		$scope.places = data;
		//console.log($scope.places);
		$scope.currentPlace = $scope.places[0];
	}).
		error(function(data, status, headers, config) {
		// called asynchronously if an error occurs
		// or server returns response with an error status.
	});

	//set the places data
	$scope.places = "";

	//function to handle showing the details panel when a place has been clicked
	$scope.displayDetails = function(index)
	{
		if(typeof index == 'undefined' || index < 0  || index >= $scope.places.length)
		{
			$scope.showDetails = false;
			$('#detailsModal').modal('hide');
			return;
		}
		$scope.currentPlace = $scope.places[index];
		$('#detailsModal').modal('show');
	};
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
