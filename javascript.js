//currying is a way of constructing functions that allows partial application of a functions' arguments...

// you apass all the of the arguments a function is expecting and get the result...or pass a subset of  those arguments and get a function back that's waiting for the rest of the arguments....

// var greet = function(greeting, name) {
//   console.log(greeting + ", " + name);
// };
// greet("Hello", "Heidi"); //"Hello, Heidi"

//the above function requires both....name and greeting...in order to work properly....
///rewire the function using simple nested currying...


////you can simply take out name as second parameter ...not required....///any way it returns a function back...the new fn will take care of passing name..like the fuckoff fn and love hate fun..
var greet = function(greeting, name){

	return function(name){
		return greeting + ", " + name;
	}
}

var fuckoff = greet("fuckoff");
var love = greet("love");
var hate = greet("hate");


console.log(fuckoff);  //you get a function back
console.log(fuckoff("srini"));
console.log(love("srini"));
console.log(hate("srini"));

console.log(greet("bye", "nigga"));  //you getting a fn back..not the right way...you got to use boobies ()()  like next line

// We can also call the original curried function directly, just by passing each of the parameters in a separate set of parentheses, one right after the other:

console.log(greet("bye")("nigga"));  //right way...





