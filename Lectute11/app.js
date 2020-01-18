(function(){
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController)

    MsgController.$inject = ['$scope']
    function MsgController($scope) {

        let vm = this;
        vm.name = "Almeida";
        
        Ctrl.sayMessage = function() {
            return "The user lieks to eat shrinps!"; 
        }; 

    }

    

})();