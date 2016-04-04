

// function overloading in javascript 

// most oo languages support function overloading, ability of a single function to have multiple signatures 
// function signature made of function name + type of parameters the function expects 
// one function with 1 arg, same function again with 2 args 
// the language determines which version of a function to call based on the arguments that are passed in 

// As mentioned previously, JavaScript functions can accept any number
// of parameters, and the types of parameters a function takes aren’t specified
// at all. That means JavaScript functions don’t actually have signatures.
// A lack of function signatures also means a lack of function overloading


function sayHello(){
	console.log("Hello");
}

function sayHello(message){
	console.log(message);
}


sayHello("BOO");  // prints BOO

// In JavaScript, however, when you define multiple functions
// with the same name, the one that appears last in your code wins.

// The earlier function declarations are completely removed, and the last
// is the one that is used

// you still can mimic function overloading in JS


function sayHi(){

	if (arguments.length ==0){
		console.log("No args passed");
	}
	else
	{
		console.log("Args passed");
	}

}

sayHi();  // no args passed 
sayHi("HE");  // Args passed

// In practice, checking the named parameter against undefined is more common
// than
// relying on arguments.length.