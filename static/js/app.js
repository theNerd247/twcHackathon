// 'use strict';

angular.module('AngularFlask', ['angularFlaskServices', 'ngRoute'])
.config(['$routeProvider', '$locationProvider',
				function($routeProvider, $locationProvider) {
					$routeProvider
					// .when('/', {
					// 	templateUrl: 'static/partials/index.html',
					// 	controller: 'snip'

					// })
					.when('/ap/part', {
						templateUrl: '/static/partials/part.html',
						controller: 'snip'
					})
					.when('/content', {
						templateUrl: '/static/partials/content.html',
					})
					// .when('/post/:postId', {
					// 	templateUrl: '/static/partials/post-detail.html',
					// 	controller: PostDetailController
					// })
					// /* Create a "/blog" route that takes the user to the same place as "/post" */
					// .when('/blog', {
					// 	templateUrl: 'static/partials/post-list.html',
					// 	controller: PostListController
					// })
					.otherwise({
						redirectTo: '/'
					});

					$locationProvider.html5Mode(true);
				}]);
