function costService() {
	var vm = this;
	vm.costVal = function(quantity, price) {
		return quantity * price;
	};
}

angular
	.module('user')
	.service('costService', costService);
