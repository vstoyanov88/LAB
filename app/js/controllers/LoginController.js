'use strict';
// The LoginController is responsible for the "Login" screen
app.controller('LoginController', function ($scope, $rootScope, $location, authService, notifyService) {
	$scope.authService = authService;
	$scope.notifyService = $scope.notifyService;

	$rootScope.state = 'Login';
});
