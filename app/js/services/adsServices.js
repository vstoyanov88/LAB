'use strict';

app.factory('adsService', function($resource, baseServiceUrl){

	var adsResource = $resource(baseServiceUrl + '/api/ads', null, {'getAll': {method: 'GET'}});
	return{
		getAds: function(params, success, error){
			return adsResource.getAll(params, success, error);
		}
	};
});

app.factory('townsService', function($resource, baseServiceUrl){
	var townsResource = $resource(baseServiceUrl + '/api/towns', null, {'getAll': {method : 'GET'}});
	return{
		getTowns: function(params, success, error){
				console.log(townsResource.query(success, error))

			return townsResource.getAll(params, success, error);
		}
	};
});

app.factory('categoriesService', function($resource, baseServiceUrl){
	var categoriesResource = $resource(baseServiceUrl + '/api/categories');
	return{
		getCategories: function(success, error){
			return categoriesResource.query(success, error);
		}
	};
});