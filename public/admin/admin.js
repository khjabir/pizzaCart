angular.module('adminApp', ['ngRoute']);

function config ($routeProvider) {
	$routeProvider
	.when('/admin',{
		templateUrl : 'admin/login/login.html',
		controller : 'AdminCtrl'
	});
}

function AdminCtrl() {
	this.user = {};
	this.validate = function() {
		console.log(this.user);

	}
}

angular.module('adminApp')
	.controller('AdminCtrl', AdminCtrl)
	.config(config);
