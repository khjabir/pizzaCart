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

  vm.list = function() {
    return pizzaArray;
  };
}

angular
  .module('user')
  .service('cartService', cartService);


// pizzaApp.service('cartService', function () {
//       var pizid = 0;

//       //pizza array stores the details of pizza that has been added to the cart
//       var pizzaArray = [];

//       //function to add a pizza in to the cart
//       this.save = function (pizza) {
//         if (pizza.id == null) {
//           pizza.id = pizid++;
//           pizzaArray.push(pizza);
//         } else {
//           for (i in pizzaArray) {
//             if (pizzaArray[i].id == pizza.id) {
//               pizzaArray[i] = pizza;
//             }
//           }
//         }
//       }

//       //function to remove a pizza from the cart
//       this.delete = function (id) {
//         for (i in pizzaArray) {
//           if (pizzaArray[i].id == id) {
//             pizzaArray.splice(i, 1);
//           }
//         }
//       }

//       //function to delete the cart after placing the order
//       this.deleteAll = function () {
//         pizzaArray.splice(0, pizzaArray.length);
//       }

//       //function to return the current status of cart
//       this.list = function () {
//         return pizzaArray;
//       }
//     });