'use strict';

app.factory('authService', function($http, baseServiceUrl){
	
	return{
		login: function(userData, success, error){
			//TODO
		},
		register: function(userData, success, error){

		},
		logout: function(){

		},
		getCurrentuser: function(){

		},
		isAnonymous: function(){

		},
		isLoggedIn: function(){

		},
		isNormalUser: function(){

		},
		isAdmin: function(){

		},
		getAuthHeaders: function(){

		}

	};
});