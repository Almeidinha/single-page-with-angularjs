(function(){
    'use strict';

    angular.module('foodLimiterApp', [])
    .controller('foodLimiterAppController', foodLimiterAppController);

    foodLimiterAppController.$inject = ['$scope']
    function foodLimiterAppController($scope) {
        let vm = this;
        vm.foodList = "";
        vm.message = "";
        
        vm.checkAmount = function(el) {
            if (!vm.foodList) {
                vm.messageClass = "invalid";
                vm.inputClass = "invalid";
                vm.message = "Please enter data first!";
            } else {
                vm.messageClass = "valid";
                vm.inputClass = "valid";
                let foodList = vm.foodList.match(/[^,\s*]+|d/g);
                if (foodList.length <= 3) {
                    vm.message = "Enjoy";
                } else {
                    vm.message = "Too much!";
                }
            }
        };


    }

})();