function viewCartCtrl (cartService) {
	
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
}

viewCartCtrl.$inject = ['cartService'];

angular
	.module('user')
	.controller('viewCartCtrl', viewCartCtrl);
