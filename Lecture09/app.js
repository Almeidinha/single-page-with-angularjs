(function() {
    'use strict'

    angular.module("DIApp", [])
    .controller('DIController', DIController);

    DIController.$inject = ['$scope', '$filter', '$injector']; 

    function DIController($scope, $filter, $injector) {
        let DICtrl = this;
        DICtrl.name = "Almeida";

        DICtrl.upper = function() {
            let upCase = $filter('uppercase');
            DICtrl.name = upCase(DICtrl.name);
        }

        console.log($injector.annotate(DIController));
    }

    function AnnotateMe(name, job, blah) {
        return "Blah!";
    }

})();