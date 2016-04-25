////https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures


////readuibg mozilla documentation on closures...


///lexical scope

function init(){

	var name = "mozilla";

	function displayName(){   //is the closure as it rememebrs name
		console.log(name);
	}
	displayName();
}

init();  //mozilla

// Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created.


// isplayName() has no local variables of its own, however it has access to the variables of outer functions and so can use the variable name declared in the parent function.

// This is an example of lexical scoping: in JavaScript, the scope of a variable is defined by its location within the source code (it is apparent lexically) and nested functions have access to variables declared in their outer scope.