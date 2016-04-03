

// bracket notation and dot notation on the properties 


// dot notation
var arr  = [];

console.log(arr);


arr.push(123);

console.log(arr);  //[123]


// bracket notation

// With bracket notation, the name of the method is now included in a
// string enclosed by square brackets

// var arr1 = [];

// arr1["push"](123);

// console.log(arr1);  //[123]


// var arr1 = [];

// arr1["push"](123);
// arr1["push"](456);  // adds another - does not override - remember



// console.log(arr1);  //[123, 456]




var arr1 = [];

var temp = "push";


arr1[temp](98);
console.log(arr1);  //98

// why the hell you use bracket notation ?

// This syntax is very useful when you want to dynamically decide which
// property to access.

// temp has a value of push - so push is called on the array 