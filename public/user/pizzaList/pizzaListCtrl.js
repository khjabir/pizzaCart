function pizzaListCtrl(httpService) {

	var vm = this;

	httpService.retrieve('/pizzadata').then(function(data) {
      vm.list = data;
    });
}

pizzaListCtrl.$inject = ['httpService'];

angular.module('user')
	.controller('pizzaListCtrl',pizzaListCtrl);
