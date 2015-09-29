angular.module('user',['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'user/pizzaList/pizzaList.html',
		controller : 'pizzaListCtrl',
		controllerAs : 'pizzaCtrl'
	})
	.when('/order', {
        templateUrl: 'user/viewCart/viewCart.html',
        controller: 'viewCartCtrl',
        controllerAs : 'cartCtrl'
    })
	.when('/pizza/:pizzadetails', {
        templateUrl: 'user/pizzaDetails/pizzaDetails.html',
        controller: 'pizzaDetailCtrl',
        controllerAs : 'detailCtrl'
    })
	.otherwise({
		redirectTo : '/'
	});
}

angular
	.module('user')
	.config(config);
