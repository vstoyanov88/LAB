'use strict';
// The LoginController is responsible for the "Login" screen
app.controller('RegisterController', function ($scope, $rootScope, $location, authService, notifyService, townsService) {
	$rootScope.state = 'Register';

	$scope.userData = {townId: null};
	$scope.towns  = townsService.getTowns();

	$scope.register = function(userData){
		authService.register(userData,
			function success(){
				notifyService.showInfo('Registrtion successful');
				$location.path('/');
			},
			function error(err){
				console.log(err);
				notifyService.showError('User Registration failed ', err)
			}
		)
	};
});
