'use strict';

var app = angular.module('app', ['ngRoute', 'ngResource']);

app.constant('baseServiceUrl', 'http://softuni-ads.azurewebsites.net');
app.constant('pageSize', 2);

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


});