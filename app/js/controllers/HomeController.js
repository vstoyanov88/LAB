'use strict';
// The HomeController holds the presentation logic for the home screen
app.controller('HomeController', function ($scope, $rootScope, adsService, notifyService, pageSize) {
	$rootScope.state = 'Home';

	$scope.adsParams = {
		'startPage' : 1,
		'pageSize' : pageSize
	};
	$scope.reloadAds = function(){
		adsService.getAds(
			$scope.adsParams, 
			function seccess(data){
				$scope.ads = data;
			},
			function error(err){
				notifyService.showError('cannot load ads ', err);
			}
		);
	};
	$scope.reloadAds();
	$scope.$on('categorySelectionChanged', function(event, selectedCategoryId){
		$scope.adsParams.categoryId = selectedCategoryId;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	});
	$scope.$on('townSelectionChanged', function(event, selectedTownId){
		$scope.adsParams.townId = selectedTownId;
		$scope.adsParams.startPage = 1;
		$scope.reloadAds();
	}); 
});