function userDetailCtrl (cartService, httpPostService, location, http) {
	var vm = this;
	vm.user = {};

	vm.pizzaList = cartService.list();

	if(vm.pizzaList.length == 0) {
		alert('Your Cart is empty');
		location.path('/');
	}

	vm.finishOrder = function() {
		vm.user.order = vm.pizzaList;
		vm.user.deliveryStatus = "Not Delivered";

		httpPostService.postData('/insertPizza', vm.user)
      	.success(function(data) {
        	alert('Your order has been successfully placed');
        	cartService.deleteAll();
        	vm.user = {};
        	location.path('/');
      	});
	};
}

userDetailCtrl.$inject = ['cartService', 'httpPostService', '$location', '$http'];

angular
	.module('user')
	.controller('userDetailCtrl', userDetailCtrl);
