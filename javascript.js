//"use strict";  with use strict  the program wont execute
//// Cannot set property 'name' of undefined
// An error occurs if you call the Person constructor in strict mode without using new.
// This is because strict mode doesn’t assign this to the global object. Instead, this
// remains undefined, and an error occurs whenever you attempt to create a property
// on undefined.


function Person(name){
	this.name = name ; 
}

var p1 = new Person("srini");
var p2 = new Person("vas");

console.log(p1.name);  //srini
console.log(p2.name);  //vas



//// always call construcors with new 

var p3 = Person("pvs");   // new is not passed , the value of "this" inside the construcot is equal to the globla "this"
/// Also person does not return anything.... so p3 is undefined



///// this p3 does not contain a value bcoz the Person constructor relies on new to supply a return value

console.log(p3);  ///undefined

// Without new, Person is just a function without
// a return statement

console.log(name);  /// pvs - calling without object - works because name is global --- means we set window.name 

console.log(window.name);   ///pvs 