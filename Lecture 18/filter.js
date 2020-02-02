let numberArray = [1,2,3,4,5,6,7,8,9,10];
console.log("Number Array:  ", numberArray);

const above5Filter = function(value) {
    return value > 5;
};

let filteredNumberArray = numberArray.filter(above5Filter);

console.log("filteredNumberArray: ", filteredNumberArray);

let shoppingList = [
    "Milk", "Donut", "Cookies", "Chocolate", "Peanut", "Butter", "Pepto Bismol", 
    "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];

console.log("ShoppinfList: ", shoppingList);

const searchValue = "Bismol";
const containsFilter = function(value) {
    return value.indexOf(searchValue) !== -1;
};


let searchShoppingList = shoppingList.filter(containsFilter);
console.log("searchShoppingList: ", searchShoppingList);
