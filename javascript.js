
function srini(){

}

console.log(typeof srini);  // function
console.log(srini instanceof Function);  // true



// chapter 2 - function s

// The defining characteristic of a function—what distinguishes
// it from any other object—is the presence of an internal property named [[Call]].


// functions have internal property called [[call]]
// call is unique to the fucntion and indicated that the object can be executed 

// because of this typeof (as only functions have this property) returns function for any object with [[call]] property 

// Internal properties are not accessible via code but rather
// define the behavior of code as it executes.


// ECMAScript defines multiple internal properties for objects in JavaScript, and these internal properties
// are indicated by double-square-bracket notation

// functions are kind of objects in JS - behavior is central to JS 


// Declarations vs Expressions


// function declaration begins with function keyword and immediately includes name of the fun

function add (num1, num2){
	return num1+num2;
}

// 2nd form function expression - does not need a name after function 
// these functions are considered anonymous as the function object itself has no name 

var add = function(num1, num2) {
return num1 + num2;
};

// end with semicolon // no function name 

// differences - when using declarations you can just call the function before it is declared 

var result = add(5, 5);
function add(num1, num2) {
return num1 + num2;
}


// the above code will work 

// Function declarations are hoisted to the top of the context (either
// the function in which the declaration occurs or the global scope) when the // code is executed. That means you can actually define a function after it is // used in code without generating an error

// since the function name is known ahead of the time function hoisting happens only for function declarations 

// fucntion expressions cannot be hoisted because the functions can be referenced only through a variable 


// var result  = add1 (5, 5);

// var add1 = function (num1, num2){
// 	return num1+num2;
// };


// console.log(result);  // will not work - as add1 is above the definition
// error uncaught TypeError 
// cannot happen because the function can be referenced only through a variable 

var add2 = function (num1, num2){
	return num1+num2;
};

var result2  = add2 (5, 5);



console.log(result2);  // // This is working, as add2 call is below the definition 


// this is the main difference between fun declaration and fun expression , how the hoisting takes place 

// As long as you always define functions before using them, you can use
// either function declarations or function expressions.


