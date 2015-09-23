
angular.module('pizzaApp',['ngRoute', 'adminApp', 'userApp']);

function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'user/PizzaList/pizzaList.html'
	})
	.when('/admin', {
		templateUrl : 'admin/login/login.html'
	});
}

angular
	.module('pizzaApp')
	.config(config);
