
//returning functions as results...

//js allows to return other functions as a result...since fns are simply objects...they can be returned as sma eas any other value...

////returning fns to create functions can be used as templates to create new fnuctions....




// imagine you’ve gotten tired of reading all of these articles about the specialness of Millennials, and you decide you want to replace the word Millennials with the phrase Snake People




var snakify = function(text){

	return text.replace(/millenials/ig, "Snake People");
}

console.log(snakify("The Millenials are always upto something")); //The Snake People are always upto something


///this works because it is pretty specific to one situation....
//////like this you will have to crearte multiple shit for other use cases...

////lets use currying shit...


var attitude = function(original, replacement, source){

	return function(source){
		console.log(original, replacement, source);
		return source.replace(original, replacement);
	}
}

var snakify = attitude(/millenials/ig, "snake people");
//snakify();   ///millenials/gi "snake people" undefined

//console.log(snakify);  //returns a function //where you will have to pass in the source..

var hippify = attitude(/baby boomers/ig, "Aging Hippies");

console.log(snakify("The Millenials are always up to something.")); //// The Snake People are always up to something.

console.log(hippify("The Baby Boomers just look the other way."));
// The Aging Hippies just look the other way.


//here we have isolated the code to actual work into a versatile ans extensible attitude functon , see both are attitude....that encapsulates all of the work needed to modofy any ionput string using an original phrase and a replacement pharese with some attitude...

// Defining a new function as a reference to the attitude function, pre-populated with the first two arguments it takes, allows the new function to take whatever argument you pass it and use that as the source text in the internal function returned by the attutide function.


// We’re taking advantage here of the fact that JavaScript functions don’t care whether they are passed the same number of arguments as they were originally defined to take. If an argument is missing, the function will just treat the missing arguments as undefined.

// On the other hand, that additional argument can be passed in later when the function being called has been defined in the way we just demonstrated, as a reference to a function returned from another function with an argument (or more) left undefined.

// We’re creating a template function that returns another function. Then we’re defining that newly returned function, minus one attribute, as a custom implementation of the template function. All the functions created this way will inherit the same working code from the template function, but can be predefined with different default arguments.