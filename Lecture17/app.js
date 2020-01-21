(function() {
    'use strict';

    angular.module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope']

    function ShoppingListController() {
        let vm = this;

        vm.shoppingList1 = [
            "Milk", "Donut", "Cookies", "Chocolate", "Peanut", "Butter", "Pepto Bismol", 
            "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
        ];

        vm.shoppingList2 = [
            {
                name: "Milk",
                quantity: "2"
            },
            {
                name: "Donuts",
                quantity: "200"
            },
            {
                name: "Cookies",
                quantity: "300"
            },
            {
                name: "Chocolate",
                quantity: "5"
            }
        ];

        vm.addToList = function() {
            let newItem = {
                name: vm.newItemName,
                quantity: vm.newItemQuantity

            }
            vm.shoppingList2.push(newItem);
        };
    }

})();