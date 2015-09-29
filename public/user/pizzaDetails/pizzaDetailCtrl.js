function pizzaDetailCtrl (routeParams, costService, cartService, httpService, location, http) {
  var vm = this;
  vm.name = routeParams.pizzadetails;

  httpService.retrieve('/pizzadata').then(function(data) {
      vm.details = data.filter(function(entry) {
        return entry.name === vm.name;
      })[0];
    });

  vm.findCost = function() {
  	vm.cost = costService.costVal(vm.newPizza.qty, vm.details.rate);
  };

  vm.pizzaList = cartService.list();
  
  vm.savePizza = function() {
  	if(vm.newPizza == undefined || vm.newPizza.qty == '') {
  		alert('Please select a valid quantity');
  	} else {
  		  vm.newPizza.name = vm.details.name;
  		  vm.newPizza.cost = vm.cost;
  		  cartService.save(vm.newPizza);
  		  alert('Successfully added to cart');
  		  vm.newPizza = {};
  		  location.path('order');
  	}
  };
}

pizzaDetailCtrl.$inject = ['$routeParams', 'costService', 'cartService', 'httpService', '$location', '$http'];

angular
  .module('user')
  .controller('pizzaDetailCtrl', pizzaDetailCtrl);
