// js file for es6 lesson

const { last } = require("rxjs");

//old way es6
let myFunction = function(a, b) {return a + b;};
console.log(myFunction(2, 3));

//es6 way
myFunction = (a, b) => a + b; 

//return is implicit
myFunction = (a, b) => {
    return a + b;
};


//distructuring
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
}

let {firstName, age} = person;
console.log(firstName, age);

// array distructuring
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits[2]);
let [apple, banana, orange] = fruits;

//spread operator
const numbers = [ 23, 55, 21, 87, 4, 90];
let minValue = Math.min(...numbers);
console.log(minValue);

let maxVlaue = Math.max(...numbers);
console.log(maxVlaue);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2]
console.log(arr3);
