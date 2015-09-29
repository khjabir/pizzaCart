function AdminCtrl(location,sessionService) {

	var vm = this;
	vm.username = "admin";
	vm.password = 'admin';	

	vm.user = {};
	vm.validate = function() {

		vm.msg = "";
		
		if(vm.user.name == vm.username) {
			if(vm.user.password == vm.password) {
				sessionService.setSession();
				location.path('viewOrders');
			}
		}

		vm.user = {};
		vm.msg = "Login Failed";
	}
}

AdminCtrl.$inject = ['$location','sessionService'];

angular.module('admin')
	.controller('AdminCtrl', AdminCtrl);
