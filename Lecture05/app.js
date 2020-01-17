(function() {
    'use strict';

    angular.module('myApp', [])
    .controller('myAppController', function($scope) {
        $scope.name = 'Almeida';
        $scope.sayHello = function() {
            return 'Hello there!';
        };
    });

})();