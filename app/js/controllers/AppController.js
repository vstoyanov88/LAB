'use strict';
// The AppController holds the presentation logic for the entire app (common for allscreens)
app.controller('AppController', function ($scope, authService) {
 // Put the authService in the $scope to make it accessible from all screens
	$scope.authService = authService;

	$scope.logout = function(){
		authService.logout();
		// TODO: display "Logout successful" notification
		// TODO: redirect to the application home page

	};
});