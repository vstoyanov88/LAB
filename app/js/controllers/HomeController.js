'use strict';
// The HomeController holds the presentation logic for the home screen
app.controller('HomeController', function ($scope, $rootScope, adsService, notifyService, pageSize) {
	$rootScope.state = 'Home';

	$scope.adsParams = {
		'startPate' : 1,
		'pageSize' : pageSize
	};
	$scope.reloadAds = function(){
		adsService.getAds(
			$scope.adsParams, 
			function seccess(data){
				$scope.ads = data;
			},
			function error(err){
				notifyService.showError('cannot load ', err);
			}
		);
	};
	$scope.reloadAds(); 
});