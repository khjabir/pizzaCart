function sessionCtrl (location, http, sessionService, httpService) {

	var vm = this;
	vm.orders = {};

	vm.showData = function() {

		if(sessionService.loginStatus()) {
			httpService.retrieve('/adminCtrl').then(function(data) {
				if(data == "Nothing Found") {
					vm.orders = {};
					alert('Nothing to display');
				} else { 
					vm.orders = data;
				}
			});
		} else {
			alert('Login Failed\n');
			location.path('admin');
		}
	};

	vm.showData();

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
        		vm.showData();
        	} else {
        		alert('Not Delivered');
        	}
        });
	}
}

sessionCtrl.$inject = ['$location', '$http', 'sessionService', 'httpService'];

angular
	.module('admin')
	.controller('sessionCtrl',sessionCtrl);
