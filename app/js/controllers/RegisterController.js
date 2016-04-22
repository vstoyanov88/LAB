'use strict';
// The LoginController is responsible for the "Login" screen
app.controller('RegisterController', function ($scope, $rootScope, $location, authService, notifyService) {
	$scope.notifyService = notifyService;

	$rootScope.state = 'Register';
});
