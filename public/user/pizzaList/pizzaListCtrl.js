function pizzaListCtrl(http) {

	var vm = this;
	vm.msg = "User page control works";

	http.get('/pizzadata').success(function(data) {
      vm.list = data;
    });
}

pizzaListCtrl.$inject = ['$http'];

angular.module('user')
	.controller('pizzaListCtrl',pizzaListCtrl);
