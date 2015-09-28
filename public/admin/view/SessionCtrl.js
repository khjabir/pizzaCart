function sessionCtrl (location, http, sessionService, httpService) {

	var vm = this;
	vm.orders = {};

	vm.deliver = function(id) {

		vm.obj = {};
		vm.obj.name = id;
		http({
        	method  : 'POST',
          	url     : '/deliverCtrl',
          	data    : vm.obj,
          	headers : {'Content-Type': 'application/json'} 
         })
        .success(function(data) {
        	if(data=='success') {
        		alert('Delivered');
        		httpService.retrieve().then(function(data) {
					vm.orders = data;
				});
        	} else {
        		alert('Not Delivered');
        	}
        });
	}
	
	if(sessionService.loginStatus()) {
		// alert('Login Successful');

	httpService.retrieve('/adminCtrl').then(function(data) {
		vm.orders = data;
	});

	} else {
		alert('Login Failed\n');
		location.path('admin');
	}
}

sessionCtrl.$inject = ['$location', '$http', 'sessionService', 'httpService'];

angular
	.module('admin')
	.controller('sessionCtrl',sessionCtrl);
