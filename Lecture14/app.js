(function() {
    'use strict';
    angular.module('CounterApp', [])
    .controller('CounterController', CounterController);

    CounterController.$inject = ['$scope'];
    function CounterController($scope) {
        let vm = this;
        vm.onceCounter = 0;
        vm.counter = 0

        vm.showNumberOfWatchers = function() {
            console.log("# of Watchers = " + $scope.$$watchersCount);
        }

        vm.countOnce = function() {
            vm.onceCounter = 1;
        }

        vm.upCounter = function() {
          vm.counter ++;  
        };
        
        // Nocite that instead of vm, 
        // you need to use the name you gave in the 'controllerAS declaration'
        // or use the next method wich watches the controllerAs object and 
        // return the variable you and to watch
        /*$scope.$watch('Ctrl.onceCounter', function(newValue, oldValue) {
            console.log("onceCounter old Value: ", oldValue);
            console.log("onceCounter new Value: ", newValue);
        });*/
        
        /*$scope.$watch(function watch(scope) {
            return vm.onceCounter;
        }, function handle(newValue, oldValue) {
            console.log("old Value: ", oldValue);
            console.log("new Value: ", newValue);
        }, true);*/

        /*$scope.$watch('Ctrl.counter', function(newValue, oldValue) {
            console.log("counter old Value: ", oldValue);
            console.log("counter new Value: ", newValue);
        }, true);*/

    }


})();