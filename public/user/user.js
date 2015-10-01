angular.module('user',['ngRoute', 'ngAnimate', 'ui.bootstrap']);

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
    .when('/userdetails', {
        templateUrl: 'user/userDetails/userDetails.html',
        controller: 'userDetailCtrl',
        controllerAs : 'userCtrl'
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
