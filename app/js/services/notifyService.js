'use strict';

app.factory('notifyService', function(){
	return {
		showInfo: function(msg){
			noty({
				text: msg,
				type: 'info',
				layout: 'topCenter',
				timeout: 1000
			})
		},
		showError: function(msg, serverError){
			var errors = [];
			if (serverError && serverError.error_description){
				error.push(serverError.error_description);
			}
			if (serverError && serverError.modelState){
				var modelStateErrors = serverError.modelState;
				for(var propertyName in modelStateErrors){
					var errorMessages = modelStateError[propertyName];
					var trimmedName = propertyName.substr(propertyName.indexOf('.') + 1);
					for(var i = 0; i < errorMessages.length; i++){
						var currentError = errorMessage[i];
						errors.push(trimmedName + ' - ' + currentError);
					}
				}
			}
			if(errors.length > 0){
				msg = msg + ':<br/>' + errors.join('<br/>');
			}
			noty({
				text: 'error',
				type: 'error',
				layout: 'topCenter',
				timeout: 5000
			});
		}
	};
});