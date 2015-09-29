function cartService() {

  var vm = this;
  var pizId = 0;
  var pizzaArray = [];

  vm.save = function(pizza) {
    if(pizza.id == null) {
      pizza.id = pizId++;
      pizzaArray.push(pizza);
    } else {
      for(i in pizzaArray) {
        if(pizzaArray[i].id == pizza.id) {
          pizzaArray[i] = pizza;
        }
      }
    }
  };

  vm.delete = function(id) {
    for(i in pizzaArray) {
      if(pizzaArray[i].id == id) {
        pizzaArray.splice(i, 1);
      }
    }
  };

  vm.deleteAll = function() {
    pizzaArray.splice(0, pizzaArray.length);
  };

  vm.list = function() {
    return pizzaArray;
  };
}

angular
  .module('user')
  .service('cartService', cartService);
