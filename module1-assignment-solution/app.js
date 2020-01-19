(function(){
    'use strict';

    angular.module('foodLimiterApp', [])
    .controller('foodLimiterAppController', foodLimiterAppController);

    foodLimiterAppController.$inject = ['$scope']
    function foodLimiterAppController($scope) {
        let vm = this;
        vm.foodList = "";
        vm.message = "";


        vm.checkAmount = function() {
            if (!vm.foodList) {
                vm.message = "Please enter data first!";
            } else {
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