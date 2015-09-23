angular.module('userApp',['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'user/PizzaList/pizzaList.html',
		controller : 'pizzaListCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
}

function pizzaListCtrl() {
	this.msg = "User page control works";
}

angular.module('userApp')
	.controller('pizzaListCtrl',pizzaListCtrl)
	.config(config);
