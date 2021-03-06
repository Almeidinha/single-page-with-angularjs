(function() {
    'use strict';

    let shoppingList = [
        "Milk", "Donut", "Cookies", "Chocolate", "Peanut", "Butter", "Pepto Bismol", 
        "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
    ];

    angular.module('ShoppingListApp', [])
    .controller("ShoppingListController", ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope) {
        let vm = this;
        vm.shoppingList = shoppingList;
    }


})();