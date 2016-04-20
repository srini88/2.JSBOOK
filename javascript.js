//////object inheritance   page 69

///simplest inheritance is between objects...

what object should be the new objects [[prototype]]

object literals also have Object.prototype set as their [[Prototype]] implicitly...


/////Object.create to explicity specify [[prototype]]

you can also explicity specify [[Prototype]] with the Object.create() method 

///other shit
///read this http://yehudakatz.com/2011/08/12/understanding-prototypes-in-javascript/

///http://yehudakatz.com/2011/08/11/understanding-javascript-function-invocation-and-this/

// function hello(thing) {  
//   console.log("Hello " + thing);
// }

// // this:
// hello("world")

// // desugars to:
// hello.call(window, "world"); 

// The short version is: a function invocation like fn(...args) is the same as fn.call(window [ES5-strict: undefined], ...args).

//Object.create

Object.create accepts two arguments...

// the first object is the object to use for [[Prototype]]  (prototype of what )  in the new object.....2nd argument is an object of property descriptors in the same format used by Object.defineProperties()


var book = {
title: "The Principles of Object-Oriented JavaScript"
};

///is same as 

var book = Object.create(Object.prototype, {

	title : {
		value : "The Principles of Object-Oriented JavaScript",
		enumerable :true, 
		writable : true,
		configurable : true
	}
});

//The first one uses object literal... which automatically inherits from object.prototype....