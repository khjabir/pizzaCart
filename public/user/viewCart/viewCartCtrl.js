function viewCartCtrl (cartService, location) {
	
	var vm = this;

	vm.pizzaList = cartService.list();
	vm.total = 0;
	for(var i = 0; i < vm.pizzaList.length; i++) {
		vm.total += vm.pizzaList[i].cost;
	}

	vm.delete = function(id, cost) {
		vm.total -= cost;
		cartService.delete(id);
		alert('Successfully Removed from your Cart');
	}

	vm.placeOrder = function() {
		if(vm.pizzaList.length == 0) {
			alert('Your Cart is empty');
			location.path('/');
		} else {
			location.path('userdetails');
		}
	}
}

viewCartCtrl.$inject = ['cartService', '$location'];

angular
	.module('user')
	.controller('viewCartCtrl', viewCartCtrl);
