function httpPostService (http) {
	var vm = this;

	vm.postData = function(url, obj) {
		return http({
        	method  : 'POST',
        	url     : url,
        	data    : obj,
       		headers : {'Content-Type': 'application/json'} 
     	})
	};
}

httpPostService.$inject = ['$http'];

angular
	.module('user')
	.service('httpPostService', httpPostService);	