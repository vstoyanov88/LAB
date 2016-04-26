'use strict';
// The AppController holds the presentation logic for the entire app (common for allscreens)
app.controller('AppController', function ($scope, $location, authService, notifyService) {
 // Put the authService in the $scope to make it accessible from all screens
	$scope.authService = authService;

	$scope.logout = function(){
		authService.logout();
		// TODO: display "Logout successful" notification
		// TODO: redirect to the application home page
		notifyService.showInfo('Logged out');
		$location.path('login');

	};
});