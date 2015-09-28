function AdminCtrl(location,sessionService) {
	this.user = {};
	this.validate = function() {
		// console.log(this.user);

		this.msg = "";
		
		if(this.user.name == 'admin') {
			if(this.user.password == 'admin') {
				sessionService.setSession();
				location.path('viewOrders');
			}
		}

		this.user = {};
		this.msg = "Login Failed";
	}
}

AdminCtrl.$inject = ['$location','sessionService'];

angular.module('admin')
	.controller('AdminCtrl', AdminCtrl);
