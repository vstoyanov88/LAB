app.factory('userService', function($http, baseServiceUrl, authService){
	return{
		createNewAd: function(adData, success, error){
			var request = {
				method : 'POST',
				url : baseServiceUrl + '/api/users/ads',
				headers : authService.getAuthHeaders(),
				data: adData
			};
			$http(request).success(success).error(error);
		},
		getUserAds: function(params, success, error){
			var request = {
				method : 'GET',
				url : baseServiceUrl + '/api/users/ads',
				headers : authService.getAuthHeaders(),
				data: params
			};
			$http(request).success(success).error(error);
		},
		deactivateAd: function(id, success, error){
			//toto
		},
		publishAgainAd: function(id, success, error){
			//todo
		}
	}
});