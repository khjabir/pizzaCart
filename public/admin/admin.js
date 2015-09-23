angular.module('adminApp', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl : '/login/login.html',
		controller : 'AdminCtrl'
	});
}

function AdminCtrl() {
	this.msg = "Admin OK";
}

angular.module('adminApp')
	.controller('AdminCtrl', AdminCtrl)
	.config(config);
