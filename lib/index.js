"use strict";
var message = 'Hello word';
message += 'again';
console.log(message);
// primitive javaScript data types 
var isPresent = false;
var magic = 66.6;
var hello = 'world';
var notDefined = undefined;
var notPresent = null;
var penta = Symbol('star');
var biggy = 24n;
// build in classes 
var regexp = new RegExp('ab+c');
var array = [1, 2, 3];
var set = new Set([1, 2, 3]);
// another way to declare arrays 
var arraySecond = [1, 2, 3];
//usage
arraySecond = [1];
arraySecond = [1, 2, 3, 3, 4];
//Tuple
var tuple = [0, 0];
//usage (if is less than two numbers we will receive and error from the compiler)
tuple = [1, 1];
tuple = [1, 2];
//and both values need to be numbers.
// Object Types and Type Aliases
// I can declare and object type the following way 
var center = {
    x: 1,
    y: 1,
};
var unit = {
    x: 1,
    y: 1,
};
//and then replace 
var centerSecond = {
    x: 1,
    y: 1,
};
var unitSecond = {
    x: 1,
    y: 1,
};
// Const Declaration 
var point = { x: 0, y: 0 }; // if the name on the variable does'n match we will receive and error e.i xx
// Functions 
/*this function will receive only two parameters thar are numbers
 and the return of the function is a number*/
function add(a, b) {
    return a + b;
}
/* this function won't return and receives one message type string*/
function log(message) {
    console.log('Log:', message);
}
/* this function can recive a rest parameter and will add
it to and array in this case of numbers */
function sum() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return values.reduce(function (previous, current) {
        return previous + current;
    });
}
sum(1, 2); //3
sum(1, 2, 3); //6
var addSecond;
addSecond = function (a, b) {
    return a + b;
};
var user = { id: 'milenamartinez' };
var product = { id: 'productmilenabuy' };
var point2D = { x: 0, y: 10 };
var point3D = { x: 0, y: 10, z: 20 };
/* in Typescript structural typing extra information is ok less information is Not*/
//point2D = point3D // Duck typing;
