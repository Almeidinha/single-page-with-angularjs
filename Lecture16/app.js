(function() {
    'use strict';

    angular.module('BindingApp', [])
    .controller('BindingController', BindingController);

    BindingController.$inject = ['$scope'];
    function BindingController($scope) {
        let vm = this;

        vm.firstName = "Marcos";
        //vm.fullName = "";

        vm.showNumberOfWatchers = function() {
            console.log("# of Watchers: " , $scope.$$watchersCount);
        };

        vm.setFullName = function() {
            vm.fullName =  `${vm.firstName} Almeida`;
        };

        vm.logFirsName = function() {
            console.log(`First Name is: ${vm.firstName}`);
        };

        vm.logFullName = function() {
            console.log(`Full Name is: ${vm.fullName}`);
        };

    }

})();