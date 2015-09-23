angular.module('userApp',['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'PizzaList/pizzaList.html',
		controller : 'pizzaListCtrl'
	});
}

function pizzaListCtrl() {
	this.msg = "User page control works";
}

angular.module('userApp')
	.controller('pizzaListCtrl',pizzaListCtrl)
	.config(config);
