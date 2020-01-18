(function(){
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)

    MsgController.$inject = ['$scope']
    function MsgController($scope) {

        let vm = this;
        vm.name = "Almeida";
        vm.state = "hungry";
        
        vm.sayMessage = function() {
            return "The user lieks to eat shrinps!"; 
        }; 

        vm.feedTheUser = function() {
            vm.state = "fed";
        };

    }

    

})();