
////closures....

//functions are also closures...in js...
///function

var me = "patrick bateman";

function greetMe(){
	console.log("hello " + me + "!");
}

greetMe();  //hello patrick bateman!  //this has access to outer variable scope..
//greetMe will still remember...

// we can access "me" because JS fns are closures...we cannot do this in langulages that does not support closures.....instead we have to pass an argument in other languages..

////one use case of closures...

// Your first example wasn't really a closure. It was just normal JavaScript scoping. Closures, on the other hand, are inner function that have access to variables of their outer functions even when those outer functions have been unwound from the stack. That is why functions that return functions are so powerful.﻿

// Javascript Closure tutorial ( Closures Explained )
// ///techsith

//2/putting passed outside...
///this is a godammn closure as well....
///variables defined outside the fn are automatically available inside...
////as JS uses lexical scoping... it does it by means of a closure..
////any function where you using a variable from outside the scope are closures...

var passed = 3;
var addTo = function (){
	var inner = 2;
	return passed + inner;
};

console.log(addTo());  // still 5..

