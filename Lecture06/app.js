(function(){
    'use strict';

    angular.module('NameCalculator', [])
    .controller('nameCalculatorController', function($scope) {
        let vm = this;
        vm.name = '';
        vm.totalValue = 0;

        vm.displayNumeric = function() {
            vm.totalValue = calculateNumericForString(vm.name);
        };

        function calculateNumericForString(name) {
            return name.split('')
            .map(c => c.charCodeAt())
            .reduce((a, b) => a + b);
        }
    })

})();