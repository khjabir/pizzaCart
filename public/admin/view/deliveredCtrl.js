function deliveredCtrl (location, http, sessionService, httpService) {

	var vm = this;
	vm.orders = {};
	
	if(sessionService.loginStatus()) {
		// alert('Login OK');

	httpService.retrieve('/delivered').then(function(data) {
		vm.orders = data;
	});

	} else {
		alert('Login Failed\n');
		location.path('admin');
	}
}

deliveredCtrl.$inject = ['$location', '$http', 'sessionService', 'httpService'];

angular
	.module('admin')
	.controller('deliveredCtrl',deliveredCtrl);
