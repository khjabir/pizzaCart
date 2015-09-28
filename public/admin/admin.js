angular.module('admin', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/admin',{
		templateUrl : 'admin/login/login.html',
		controller : 'AdminCtrl'
	})
	.when('/viewOrders',{
		templateUrl : 'admin/view/viewOrders.html',
		controller : 'sessionCtrl',
		controllerAs : 'session'
	})
	.when('/delivered',{
		templateUrl : 'admin/view/viewDelivered.html',
		controller : 'deliveredCtrl',
		controllerAs : 'delivered'
	});
}

angular
	.module('admin')
	.config(config);
