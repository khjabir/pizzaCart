function sessionService () {

	this.loggedIn = 0;
	
	this.setSession = function() {
		this.loggedIn = 1;
	};

	this.loginStatus = function() {
		return this.loggedIn;
	};

}

angular
	.module('admin')
	.service('sessionService',sessionService);