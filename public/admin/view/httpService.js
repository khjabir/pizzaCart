function httpService(http) {

  this.retrieve = function(url) {
    var data = http.get(url).then(function (response) {
      // console.log(response);
      return response.data;
    });
    return data;
  }
}

httpService.$inject = ['$http'];

angular
  .module('admin')
  .service('httpService', httpService);
