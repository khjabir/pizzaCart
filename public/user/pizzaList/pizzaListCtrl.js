function pizzaListCtrl(httpService) {

	var vm = this;

	vm.myInterval = 2500;
	vm.noWrapSlides = false;
	var slides = vm.slides = [];
	vm.addSlide = function() {
    	var newWidth = 0 + slides.length + 1;
    	slides.push({
      	image: '/images/p' + newWidth + '.jpg'
    	});
  	};
  	for (var i=0; i<5; i++) {
    	vm.addSlide();
  	}

	httpService.retrieve('/pizzadata').then(function(data) {
      vm.list = data;
    });
}

pizzaListCtrl.$inject = ['httpService'];

angular.module('user')
	.controller('pizzaListCtrl',pizzaListCtrl);
