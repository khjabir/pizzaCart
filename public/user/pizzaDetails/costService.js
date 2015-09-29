function costService() {
	var vm = this;
	vm.costVal = function(a, b) {
		return a * b;
	};
}

angular
	.module('user')
	.service('costService', costService);
