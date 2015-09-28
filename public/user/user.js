angular.module('user',['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'user/pizzaList/pizzaList.html',
		controller : 'pizzaListCtrl',
		controllerAs : 'pizzaCtrl'
	})
	.otherwise({
		redirectTo : '/'
	});
}

angular
	.module('user')
	.config(config);
