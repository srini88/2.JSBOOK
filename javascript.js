

// You almost always define functions using their literal form. In fact, using
// the Function constructor is typically discouraged given the challenges of
// maintaining, reading, and debugging a string of code rather than actual
// code, so you’ll rarely see it in code.


// functions always in a literal form 


// object literal way for functions 

function reflect(value){
	return value;
}


console.log(reflect(5));  //5

// 2nd way using the new and constructor function 
// use the function constructor 
// you use the function name in the first
var reflect1 = new Function("value", "return value");


console.log(reflect1(5));  //5


// Regular Expression Literals
// JavaScript also has regular expression literals that allow you to define regular
// expressions without using the RegExp constructor. Regular expression
// literals look very similar to regular expressions in Perl: The pattern is contained
// between two slashes, and any additional options are single characters
// following the second slash. For example:
// var numbers = /\d+/g;
// // is the same as
// var numbers = new RegExp("\\d+", "g");