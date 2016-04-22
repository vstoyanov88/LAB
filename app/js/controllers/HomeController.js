'use strict';
// The HomeController holds the presentation logic for the home screen
app.controller('HomeController', function ($scope, $rootScope, adsService, notifyService, pageSize) {
	$scope.adsService = adsService;
	$scope.notifyService = notifyService;
	$scope.pageSize = pageSize; 

	$rootScope.state = 'Home';
});