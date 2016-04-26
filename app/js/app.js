'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource', 'ui.bootstrap.pagination']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 5);

app.config(function($routeProvider){
	$routeProvider.when('/',{
		templateUrl: 'templates/user/home.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/login',{
		templateUrl: 'templates/user/login.html',
		controller: 'LoginController'
	});

	$routeProvider.when('/register',{
		templateUrl: 'templates/user/register.html',
		controller: 'RegisterController'
	});

	$routeProvider.when('/user/ads/publish', {
		templateUrl: 'templates/user/publish-new-ad.html',
		controller: 'UserPublishNewAdController' 
	});

});

app.run(function($rootScope, $location, authService){
	$rootScope.$on('$locationChangeStart', function(event){
		if($location.path().indexOf('/user/') != -1 && !authService.isLoggedIn()){
			$location.path('/');
		}
	})
})