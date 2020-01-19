(function(){
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)
    .filter('loves', LovesFilter)
    .filter('truth', truthFilter);

    MsgController.$inject = ['$scope', lovesFilter]
    function MsgController($scope, lovesFilter) {

        let vm = this;
        vm.name = "Almeida";
        vm.state = "hungry";
        
        vm.sayMessage = function() {
            return "The user likes to eat shrinps!"; 
        }; 

        vm.sayLovesMessage = function() {
            let msg = "The user likes to eat shrinps!"; 
            return lovesFilter(msg);
        }; 

        vm.feedTheUser = function() {
            vm.state = "fed";
        };

    }

    function LovesFilter() {
        return function (input) {
            input = input || "";
            input = input.replace("likes", "LOVES");
            return input;
        };
    }

    function truthFilter() {
        return function(input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }

    

})();