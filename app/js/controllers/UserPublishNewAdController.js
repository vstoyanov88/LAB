'use.strict';

app.controller('UserPublishNewAdController', function($scope, $location, townsService, categoriesService, userService, notifyService){
	$scope.adData = {townId: null, categoryId: null};
	$scope.towns = townsService.getTowns();
	$scope.categories = categoriesService.getCategories();

	$scope.publishAd = function(adData){
		userService.createNewAd(adData,
			function seccess(){
				notifyService.showInfo('publish successful');
				$location.path('/user/ads');
			},
			function error(err){
				notifyService.showError('publish failed', err);
			}
		)
	};

	$scope.fileSelected = function(fileInputField){
		delete $scope.adData.imageDataUrl;
		var file = fileInputField.files[0];
		if(file.type.match(/image\/.*/)){
			var reader = new FileReader();
			reader.onload = function(){
				$scope.adData.imageUrl = reader.result;
				$('.image-box').html('<img src="' + reader.result + '">');
			};
			reader.readAsDataURL(file);
		}else{
			$('.image-box').html('<p>File type not supported!</p>')
		}
	}	
});