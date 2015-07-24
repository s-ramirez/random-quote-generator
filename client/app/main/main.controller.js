'use strict';

angular.module('randomGeneratorApp')
  .controller('MainCtrl', function ($scope, $http) {
    var vm = this;

    vm.getQuote = function () {
      $http.get('/api/inspirations').success(function(inspiration) {
        vm.inspiration = inspiration;
      });
    };
});
