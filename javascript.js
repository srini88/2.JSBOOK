
// Array An ordered list of numerically indexed values
// Date A date and time
// Error A runtime error (there are also several more specific
// error subtypes)
// Function A function
// Object A generic object
// RegExp A regular expression



// <p>The internal clock in JavaScript starts at midnight January 1, 1970.</p>

var arr = new Array();
// works like this also var arr = new Array;  without para 

console.log(arr);   //[]   // see para here instead of object {}


var now = new Date();

console.log(now);   //Sat Apr 02 2016 20:58:59 GMT-0500 (Coordinated Universal Time)

var err = new Error();

console.log(err);   //Error(…)

var err1 = new Error("something bad happened ");

console.log(err1);  //Error: something bad happened (…)


var func = new Function();

console.log(func);   // function anonymous(){}

var func1 = new Function("console.log('Hi')");
console.log(func1);

// function anonymous() {
// console.log('Hi')
// }