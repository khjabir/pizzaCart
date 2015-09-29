function userDetailCtrl (cartService, location, http) {
	var vm = this;
	vm.user = {};

	vm.pizzaList = cartService.list();

	if(vm.pizzaList.length == 0) {
		alert('Your Cart is empty');
		location.path('/');
	}

	vm.finishOrder = function() {
		vm.user.order = vm.pizzaList;
		vm.user.deliveryStatus = "Not Delivered"

		http({
        	method  : 'POST',
        	url     : '/insertPizza',
        	data    : vm.user,
       		headers : {'Content-Type': 'application/json'} 
     	})
      	.success(function(data) {
        	alert('Your order has been successfully placed');
        	cartService.deleteAll();
        	vm.user = {};
        	location.path('/');
      	});
	};
}

userDetailCtrl.$inject = ['cartService', '$location', '$http'];

angular
	.module('user')
	.controller('userDetailCtrl', userDetailCtrl);


// pizzaApp.controller('userDetailCtrl',['$scope', '$http', '$location', 'cartService', function (scope, http, location, cartService){

//     scope.pizzaList = cartService.list();
//     console.log(scope.pizzaList);
//     if(scope.pizzaList.length==0) {
//       alert('Your Cart is Empty');
//       location.path('/home');
//     }else {
//     //post the user details and cart to the server
//     scope.finishOrder = function() {
//       scope.pizzaList = cartService.list();
//       scope.user.order = scope.pizzaList;
//       scope.user.deliveryStatus = "Not Deliverd";

//       http({
//         method  : 'POST',
//         url     : '/insertPizza',
//         data    : scope.user,
//         headers : {'Content-Type': 'application/json'} 
//       })
//       .success(function(data) {
//         alert('Order Succesful')
//         cartService.deleteAll();
//       });
//     }
//   }
//   }]);