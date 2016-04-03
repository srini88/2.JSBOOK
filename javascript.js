var color1 = "red";

var color2 = color1;

console.log(color1);

console.log(color2);


color2 = "blue";
console.log(color1);  //red

console.log(color2);   //blue  - does not change because primitive type


// color1 and 2 complete separeate from each other - you changge color 1 without affecting color2 and vicev3ersa 
// - different storeage locations one for each variable 
// - directly stored in the varibale object without poointers or some shit 
// Because each variable containing a primitive value uses its own
// storage
// space, changes to one variable are not reflected on the other.


var color3 = true;
var color4 = null;
var color5 = undefined;
var color7;
var color8 = 8.7;
var color9 = 10;

console.log(typeof color1); // str
console.log(typeof color2); // str
console.log(typeof color3);  // boolean
console.log(typeof color4);  // object
console.log(typeof color5);  // undefined 
console.log(typeof color6);  // undefined 
console.log(typeof color7);  // undefined 
console.log(typeof color8);  // num 
console.log(typeof color9);  // num
console.log(typeof null);   // object
console.log(typeof NULL);   // undefined -- remember it is small null not caps 

// The best way to determine if a value is null is to compare it against
// null directly, like this:

console.log(null === color4);  // true
console.log(null === color7);  // false
//console.log(null === color6);  // Uncaught ReferenceError: color6 is not defined

// The reason is that triple equals does the comparison without
// coercing the variable to another type. To understand why this is important,
// consider the following:

console.log("5" == 5); // true - converts string to number 
console.log("5" === 5); // false
console.log(undefined == null); // true   // dont know if null gets converted to undefined 
console.log(undefined === null); // false