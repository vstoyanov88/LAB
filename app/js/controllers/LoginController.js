'use strict';
// The LoginController is responsible for the "Login" screen
app.controller('LoginController', function ($scope, $rootScope, $location, authService, notifyService) {
	$rootScope.state = 'Login';

	$scope.login = function(userData){
		authService.login(userData,
		function success(){
			notifyService.showInfo('Login successful');
			$location.path('/');
		},
		function error(err){
			console.log(err)
			notifyService.showError('there was an error on login ', err);
		})
	};
});
