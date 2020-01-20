(function() {
    'use strict'

    angular.module('CounterApp', [])
    .controller('CounterController', CounterController);


    CounterController.$inject = ['$scope', '$timeout']
    function CounterController($scope, $timeout) {
        let vm = this;

        vm.counter = 0;

        /*vm.upCounter = function() {
            setTimeout(function(){
            
                //$scope.$digest();
                $scope.$apply(function() {
                    vm.counter ++;
                    console.log("Conter got incremented!");                
                });
            }, 2000);
        };*/

        vm.upCounter = function() {
            $timeout(function() {
                vm.counter ++;
                console.log("Conter got incremented!");                
            }, 2000);
        };

    }


})();